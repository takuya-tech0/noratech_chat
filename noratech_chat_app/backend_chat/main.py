from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

app = FastAPI()

# CORSの設定を追加
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 本番環境では特定のオリジンを許可するように設定
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Message(BaseModel):
    sender: str
    content: str
    timestamp: str

messages = []

@app.post("/send-message/")
async def send_message(message: Message):
    messages.append(message)
    return {"message": "メッセージが送信されました"}

@app.get("/get-messages/", response_model=List[Message])
async def get_messages():
    return messages

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
