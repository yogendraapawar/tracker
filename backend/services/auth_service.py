from datetime import datetime, timedelta, timezone
from http.client import HTTPException
from dotenv import load_dotenv
import jwt
import os
from passlib.context import CryptContext

# Load environment variables from .env file
load_dotenv()


# authentication helpers
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def authenticate_user(plain_password: str, hashed_password: str) -> bool:
    if plain_password != hashed_password:
        return False
    return True


def create_access_token(data: dict) -> str:
    to_encode = data.copy()
    expire = datetime.now(timezone.utc) + timedelta(
        minutes=int(os.getenv("EXPIRES_DELTA"))
    )
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(
        to_encode, os.getenv("SECRET_KEY"), algorithm=os.getenv("ALGORITHM")
    )
    return encoded_jwt


def get_password_hash(password: str) -> str:
    return pwd_context.hash(password)


def get_user_from_token(token: str):
    try:
        decoded_jwt = jwt.decode(
            token, os.getenv("SECRET_KEY"), algorithm=os.getenv("ALGORITHM")
        )
        user_id = decoded_jwt.get("user_id")
        if user_id is None:
            raise HTTPException(status_code=401, detail="User ID not found in token")
    except:
        raise HTTPException(status_code=401, detail="Could not validate credentials")
    return user_id


def verify_password(plain_password: str, hashed_password: str) -> bool:
    return pwd_context.verify(plain_password, hashed_password)
