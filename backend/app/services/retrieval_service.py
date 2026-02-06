"""RAG retrieval service for finding relevant knowledge chunks."""

import logging
from dataclasses import dataclass

import numpy as np
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from openai import AsyncOpenAI

from app.config import get_settings
from app.models.database import KnowledgeChunk

logger = logging.getLogger(__name__)


@dataclass
class RetrievalResult:
    """A single retrieval result with metadata."""
    content: str
    source_name: str
    source_type: str
    section: str | None
    machinery_id: str | None
    relevance_score: float
    language: str


class RetrievalService:
    """Service for retrieving relevant knowledge chunks via semantic search."""

    SIMILARITY_THRESHOLD = 0.72
    MAX_RESULTS = 5
    MAX_CONTEXT_CHARS = 2000
    EMBEDDING_MODEL = "text-embedding-3-small"

    def __init__(self, db: AsyncSession):
        self.db = db
        settings = get_settings()
        self.client = AsyncOpenAI(api_key=settings.openai_api_key)

    async def _get_embedding(self, text: str) -> list[float]:
        """Generate embedding for query text."""
        response = await self.client.embeddings.create(
            model=self.EMBEDDING_MODEL,
            input=text,
        )
        return response.data[0].embedding

    @staticmethod
    def _cosine_similarity(vec1: list[float], vec2: list[float]) -> float:
        """Calculate cosine similarity between two vectors."""
        a = np.array(vec1)
        b = np.array(vec2)
        norm_a = np.linalg.norm(a)
        norm_b = np.linalg.norm(b)
        if norm_a == 0 or norm_b == 0:
            return 0.0
        return float(np.dot(a, b) / (norm_a * norm_b))

    async def retrieve(
        self,
        query: str,
        machinery_id: str | None = None,
        part_name: str | None = None,
        top_k: int = 5,
        threshold: float | None = None,
    ) -> list[RetrievalResult]:
        """
        Retrieve the most relevant knowledge chunks for a query.

        Args:
            query: The search query
            machinery_id: Filter to specific machinery
            part_name: Filter to specific part
            top_k: Maximum number of results
            threshold: Minimum similarity threshold (default: self.SIMILARITY_THRESHOLD)

        Returns:
            List of RetrievalResult sorted by relevance
        """
        threshold = threshold if threshold is not None else self.SIMILARITY_THRESHOLD

        # Build filtered query
        stmt = select(KnowledgeChunk)
        if machinery_id:
            stmt = stmt.where(KnowledgeChunk.machinery_id == machinery_id)
        if part_name:
            stmt = stmt.where(KnowledgeChunk.part_name == part_name)

        result = await self.db.execute(stmt)
        chunks = result.scalars().all()

        if not chunks:
            return []

        # Get query embedding
        query_embedding = await self._get_embedding(query)

        # Calculate similarities
        scored = []
        for chunk in chunks:
            similarity = self._cosine_similarity(query_embedding, chunk.embedding)
            if similarity >= threshold:
                scored.append((chunk, similarity))

        # Sort by score descending
        scored.sort(key=lambda x: x[1], reverse=True)

        # Return top-k
        results = []
        for chunk, score in scored[:top_k]:
            results.append(RetrievalResult(
                content=chunk.content,
                source_name=chunk.source_name,
                source_type=chunk.source_type,
                section=chunk.section,
                machinery_id=chunk.machinery_id,
                relevance_score=round(score, 4),
                language=chunk.language,
            ))

        return results

    async def retrieve_for_context(
        self,
        query: str,
        machinery_id: str | None = None,
        max_chars: int | None = None,
    ) -> tuple[str, list[RetrievalResult]]:
        """
        Retrieve knowledge and format it as context for LLM prompts.

        Args:
            query: The search query
            machinery_id: Filter to specific machinery
            max_chars: Maximum context length in characters

        Returns:
            Tuple of (formatted_context_string, retrieval_results)
        """
        max_chars = max_chars or self.MAX_CONTEXT_CHARS

        results = await self.retrieve(
            query=query,
            machinery_id=machinery_id,
            top_k=self.MAX_RESULTS,
        )

        if not results:
            return "", []

        # Format context with source attribution
        context_parts = []
        total_chars = 0

        for r in results:
            source_label = r.source_name
            if r.section and r.section not in ("wikipedia", "pdf"):
                source_label = f"{r.source_name} - {r.section}"

            entry = f"[출처: {source_label}]\n{r.content}"

            if total_chars + len(entry) > max_chars:
                break

            context_parts.append(entry)
            total_chars += len(entry)

        context_str = "\n\n".join(context_parts)
        return context_str, results

    async def search(
        self,
        query: str,
        machinery_id: str | None = None,
        top_k: int = 10,
    ) -> list[RetrievalResult]:
        """
        Search the knowledge base (broader search for student-facing search).

        Uses a lower threshold than retrieve() to return more results.
        """
        return await self.retrieve(
            query=query,
            machinery_id=machinery_id,
            top_k=top_k,
            threshold=0.5,  # Lower threshold for broader search
        )
