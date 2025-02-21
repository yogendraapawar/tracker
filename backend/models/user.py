import time
import uuid
from sqlalchemy import Column, String, Float, UUID
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from datetime import datetime, timezone

from models.base import Base


class User(Base):
    __tablename__ = "users"

    user_id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    email = Column(String(255), unique=True, nullable=True)
    password_hash = Column(String(255), nullable=False)
    username = Column(String(255), unique=True, nullable=False)
    profile_pic_url = Column(String, nullable=True)
    phone_number = Column(String(20), unique=True, nullable=True)

    # Use Float for storing Unix timestamp
    created_at = Column(Float, default=lambda: round(time.time(), 2))
    updated_at = Column(
        Float,
        default=lambda: round(time.time(), 2),
        onupdate=lambda: round(time.time(), 2),
    )
