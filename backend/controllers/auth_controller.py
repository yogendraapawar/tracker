from services.auth_service import (
    create_access_token,
    get_password_hash,
    verify_password,
)
from fastapi import APIRouter, HTTPException, Depends
from models.auth_model import LoginRequest
from pydantic import BaseModel
from typing import Dict

router = APIRouter()


@router.post("/login")
async def login(request: LoginRequest):
    try:
        username = request.username
        password = request.password
        # DB query goes here
        hashed_password = "$2b$12$TrE5Y72pNAAQkWZH.aZZ8uKYIJsxeia2d/nx/EduL39RuOAnW9HcW"
        token = create_access_token({"user_id": username})

        return {
            "message": verify_password(password, hashed_password),
            "token": token,
            "hashed_pass": password,
        }
    except Exception as e:
        raise HTTPException(status_code=401, detail=str(e))
