from fastapi import APIRouter, HTTPException, Depends
from models.auth_model import LoginRequest
from models.transaction_model import CreateTransactionRequest
from pydantic import BaseModel
from services.auth_service import create_access_token
from typing import Dict
import time

router = APIRouter()


@router.post("/create-transaction")
async def create_transaction(request: CreateTransactionRequest):
    try:
        transaction_record = request.dict()

        if not transaction_record.get("timestamp"):
            transaction_record["timestamp"] = round(time.time(), 2)

        return {"data": "Transaction noted", "transaction": transaction_record}

    except Exception as e:
        raise HTTPException(
            status_code=400, detail=f"Error creating transaction: {str(e)}"
        )


@router.post("/delete-transaction/{transaction_id}")
async def delete_transaction(transaction_id: str):
    try:
        return {"data": "Transaction deleted", "transaction_id": transaction_id}
    except Exception as e:
        raise HTTPException(
            status_code=400, detail=f"Error deleting transaction: {str(e)}"
        )
