from enum import Enum
from models.database_model import TransactionType
from pydantic import BaseModel, Field
from typing import Optional


class CreateTransactionRequest(BaseModel):
    amount: float
    category_id: str
    timestamp: float
    description: Optional[str] = None
    payment_method_id: Optional[str] = None
    transaction_type: TransactionType
    user_id: str
