from datetime import datetime
from typing import Optional
from sqlalchemy import String, Integer, Float, Text, DateTime, ForeignKey, JSON
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, relationship
from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker, AsyncSession

from app.config import get_settings


class Base(DeclarativeBase):
    pass


class User(Base):
    __tablename__ = "users"

    id: Mapped[str] = mapped_column(String(50), primary_key=True)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)
    last_active: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    # Relationships
    sessions: Mapped[list["LearningSession"]] = relationship(back_populates="user", cascade="all, delete-orphan")
    progress: Mapped[list["MachineryProgress"]] = relationship(back_populates="user", cascade="all, delete-orphan")


class LearningSession(Base):
    __tablename__ = "learning_sessions"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    user_id: Mapped[str] = mapped_column(String(50), ForeignKey("users.id"))
    machinery_id: Mapped[str] = mapped_column(String(50))
    started_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)
    ended_at: Mapped[Optional[datetime]] = mapped_column(DateTime, nullable=True)
    conversation_history: Mapped[dict] = mapped_column(JSON, default=list)
    topics_discussed: Mapped[list] = mapped_column(JSON, default=list)

    # Relationships
    user: Mapped["User"] = relationship(back_populates="sessions")


class MachineryProgress(Base):
    __tablename__ = "machinery_progress"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    user_id: Mapped[str] = mapped_column(String(50), ForeignKey("users.id"))
    machinery_id: Mapped[str] = mapped_column(String(50))
    topics_learned: Mapped[list] = mapped_column(JSON, default=list)
    quiz_attempts: Mapped[int] = mapped_column(Integer, default=0)
    quiz_correct: Mapped[int] = mapped_column(Integer, default=0)
    quiz_accuracy: Mapped[float] = mapped_column(Float, default=0.0)
    last_quiz_at: Mapped[Optional[datetime]] = mapped_column(DateTime, nullable=True)
    updated_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    # Relationships
    user: Mapped["User"] = relationship(back_populates="progress")


class QuizAttempt(Base):
    __tablename__ = "quiz_attempts"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    user_id: Mapped[str] = mapped_column(String(50))
    machinery_id: Mapped[str] = mapped_column(String(50))
    question_id: Mapped[str] = mapped_column(String(50))
    question_text: Mapped[str] = mapped_column(Text)
    selected_answer: Mapped[int] = mapped_column(Integer)
    correct_answer: Mapped[int] = mapped_column(Integer)
    is_correct: Mapped[bool] = mapped_column(Integer)  # SQLite doesn't have boolean
    attempted_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)


class GeneratedQuiz(Base):
    __tablename__ = "generated_quizzes"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    machinery_id: Mapped[str] = mapped_column(String(50))
    question: Mapped[str] = mapped_column(Text)
    options: Mapped[list] = mapped_column(JSON)
    correct_answer: Mapped[int] = mapped_column(Integer)
    difficulty: Mapped[str] = mapped_column(String(20), default="medium")
    topic: Mapped[Optional[str]] = mapped_column(String(100), nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)


# Database engine and session
engine = create_async_engine(
    get_settings().database_url,
    echo=get_settings().debug,
)

async_session = async_sessionmaker(engine, class_=AsyncSession, expire_on_commit=False)


async def get_db() -> AsyncSession:
    async with async_session() as session:
        try:
            yield session
        finally:
            await session.close()


async def init_db():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
