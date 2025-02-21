import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Database URL from environment variable


# Create a base class for models
Base = declarative_base()
SQLALCHEMY_DATABASE_URL = os.getenv("DATABASE_URL")


class Database:

    def __init__(self, database_url: str):
        self.database_url = database_url
        self.engine = None
        self.Session = None

    def create_engine(self):
        """Create an engine to connect to the database"""
        if not self.engine:
            self.engine = create_engine(self.database_url, echo=True)
        return self.engine

    def create_session(self):
        """Create a sessionmaker bound to the engine"""
        if not self.Session:
            self.Session = sessionmaker(
                autocommit=False, autoflush=False, bind=self.create_engine()
            )
        return self.Session

    def create_all_tables(self):
        """Create all tables in the database based on the models"""
        # Import models here to avoid circular import
        from models.user import User

        Base.metadata.create_all(self.create_engine())

    def get_db(self):
        database = Database(SQLALCHEMY_DATABASE_URL)
        engine = database.create_engine()
        SessionLocal = database.create_session()
        database.create_all_tables()
        db = SessionLocal()
        try:
            yield db
        finally:
            db.close


db_connection = Database(SQLALCHEMY_DATABASE_URL)
