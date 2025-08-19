"""
Backyard AI Bridge Server
Backyard AI의 웹소켓이나 내부 API를 활용하는 브릿지 서버
"""

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict, Any, Optional
import httpx
import asyncio
import json
import websocket
import threading

app = FastAPI()

# CORS 설정
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Message(BaseModel):
    role: str
    content: str

class ChatRequest(BaseModel):
    model: str = "default"
    messages: List[Message]
    temperature: float = 0.7
    max_tokens: int = 1024
    top_p: float = 0.9
    frequency_penalty: float = 0.0
    presence_penalty: float = 0.0
    stream: bool = False

class ChatResponse(BaseModel):
    id: str = "chatcmpl-backyard"
    object: str = "chat.completion"
    created: int = 1234567890
    model: str = "backyard-model"
    choices: List[Dict[str, Any]]
    usage: Dict[str, int] = {"prompt_tokens": 0, "completion_tokens": 0, "total_tokens": 0}

# Backyard AI 포트들 시도 (13333 포트 추가)
BACKYARD_PORTS = [13333, 5001, 5000, 8080, 8081, 3000, 3001, 7860]

async def find_backyard_port():
    """Backyard AI가 실행 중인 포트 찾기"""
    for port in BACKYARD_PORTS:
        try:
            async with httpx.AsyncClient() as client:
                # 여러 가능한 엔드포인트 시도 - v1/models를 먼저 체크
                endpoints = [
                    f"http://localhost:{port}/v1/models",
                    f"http://127.0.0.1:{port}/v1/models",
                    f"http://localhost:{port}/api/status",
                    f"http://localhost:{port}/status",
                    f"http://localhost:{port}/",
                ]
                
                for endpoint in endpoints:
                    try:
                        response = await client.get(endpoint, timeout=1.0)
                        if response.status_code < 500:
                            print(f"✅ Backyard AI found at port {port}")
                            return port
                    except:
                        continue
        except:
            continue
    return None

@app.get("/")
async def root():
    port = await find_backyard_port()
    if port:
        return {"status": "Bridge server running", "backyard_port": port}
    return {"status": "Bridge server running", "backyard_port": "not found", "message": "Please ensure Backyard AI is running"}

@app.get("/v1/models")
async def list_models():
    """모델 목록 반환"""
    return {
        "object": "list",
        "data": [
            {
                "id": "backyard-model",
                "object": "model",
                "created": 1234567890,
                "owned_by": "backyard"
            }
        ]
    }

@app.post("/v1/chat/completions")
async def chat_completions(request: ChatRequest):
    """
    OpenAI 호환 채팅 완성 엔드포인트
    Backyard AI와 통신 시도
    """
    
    # 1. 먼저 Backyard AI 포트 찾기
    port = await find_backyard_port()
    
    if port:
        # Backyard AI와 통신 시도
        async with httpx.AsyncClient() as client:
            try:
                # Backyard AI의 가능한 엔드포인트들 - v1/chat/completions를 먼저 시도
                endpoints = [
                    f"http://localhost:{port}/v1/chat/completions",
                    f"http://127.0.0.1:{port}/v1/chat/completions",
                    f"http://localhost:{port}/api/v1/chat/completions",
                    f"http://localhost:{port}/api/chat",
                    f"http://localhost:{port}/chat",
                ]
                
                for endpoint in endpoints:
                    try:
                        response = await client.post(
                            endpoint,
                            json=request.dict(),
                            timeout=30.0
                        )
                        if response.status_code == 200:
                            return response.json()
                    except Exception as e:
                        print(f"Endpoint {endpoint} failed: {e}")
                        continue
            except Exception as e:
                print(f"Error communicating with Backyard AI: {e}")
    
    # Backyard AI와 통신 실패 시 폴백 응답
    # 실제로는 여기서 다른 방법으로 Backyard AI와 통신 시도
    user_message = request.messages[-1].content if request.messages else ""
    
    # 간단한 폴백 응답 (언어 감지)
    is_korean = any(ord(char) >= 0xAC00 and ord(char) <= 0xD7A3 for char in user_message)
    
    if is_korean:
        fallback_response = f"[브릿지 서버] Backyard AI 연결 대기 중... 사용자 메시지: {user_message[:50]}..."
    else:
        fallback_response = f"[Bridge Server] Waiting for Backyard AI connection... User message: {user_message[:50]}..."
    
    return ChatResponse(
        choices=[{
            "index": 0,
            "message": {
                "role": "assistant",
                "content": fallback_response
            },
            "finish_reason": "stop"
        }]
    )

if __name__ == "__main__":
    import uvicorn
    print("🌉 Backyard AI Bridge Server starting on port 8000...")
    print("📝 Instructions:")
    print("1. Make sure Backyard AI is running")
    print("2. This bridge will try to find and connect to Backyard AI")
    print("3. Use http://localhost:8000/v1/chat/completions for API calls")
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=True)
