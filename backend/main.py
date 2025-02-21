from fastapi import FastAPI
from controllers.user_controller import router as auth_router
from controllers.transaction_controller import router as transaction_router

app = FastAPI()


@app.get("/health")
async def root():
    return {"message": "Hello, world!"}


app.include_router(auth_router, prefix="/user")

# Transactions
app.include_router(transaction_router, prefix="/transaction")
