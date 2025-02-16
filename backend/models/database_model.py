from enum import Enum
from pydantic import BaseModel, Field
from typing import Optional


class Category(BaseModel):
    category_id: str
    name: Optional[str] = Field(None, min_length=3, max_length=25)
    user_id: str


class Users(BaseModel):
    email: str
    password_hash: str
    profile_pic: str
    user_id: str
    username: str


class TransactionType(Enum):
    EXPENSE = "expense"
    INCOME = "income"
    LENT = "lent"
    BORROWED = "borrowed"


class Transactions(BaseModel):
    amount: float
    category_id: str
    timestamp: float
    description: str
    transaction_id: str
    transaction_type: TransactionType
    user_id: str
    payment_method_id: str
