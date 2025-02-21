from typing import Optional
from pydantic import BaseModel
from database import db_connection
from models.user import User
from services.user_service import (
    create_access_token,
    get_password_hash,
    verify_password,
)
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import select
from sqlalchemy.orm import Session


router = APIRouter()


class LoginRequest(BaseModel):
    username: str
    password: str


@router.post("/login")
async def login(request: LoginRequest, db: Session = Depends(db_connection.get_db)):
    try:
        username = request.username
        password = request.password
        # DB query goes here
        query_statement = select(User).where(User.username == username)
        result = db.execute(query_statement)

        for user in result.scalars():
            hashed_password = user.password_hash

        token = create_access_token({"username": username})

        if not verify_password(password, hashed_password):
            return HTTPException(status_code=401, detail="Unauthorised")

        return {
            "message": "Success",
            "token": token,
            "hashed_pass": password,
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


# Signup endpoint


class SignupRequest(BaseModel):
    email: Optional[str] = None
    password: str
    username: str
    phone_number: Optional[str] = None


@router.post("/signup")
async def signup(request: SignupRequest, db: Session = Depends(db_connection.get_db)):
    try:
        username = request.username
        password = request.password
        phone_number = request.phone_number
        email = request.email

        new_user = User(
            username=username,
            password_hash=get_password_hash(password=password),
            phone_number=phone_number,
            email=email,
        )
        db.add(new_user)
        db.commit()
        db.refresh(new_user)
        return {"success": True}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
