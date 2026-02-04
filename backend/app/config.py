from pydantic_settings import BaseSettings
from functools import lru_cache


class Settings(BaseSettings):
    # OpenAI
    openai_api_key: str = ""
    openai_model: str = "gpt-5-mini"  # Model to use for AI agents
    openai_embedding_model: str = "text-embedding-3-small"  # Model for embeddings

    # Database
    database_url: str = "sqlite+aiosqlite:///./simvex.db"

    # CORS
    cors_origins: str = "http://localhost:5173,http://localhost:3000"

    # App
    debug: bool = True

    @property
    def cors_origins_list(self) -> list[str]:
        return [origin.strip() for origin in self.cors_origins.split(",")]

    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"


@lru_cache
def get_settings() -> Settings:
    return Settings()
