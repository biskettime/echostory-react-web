"""
Backyard AI Web Interface Bridge
웹 인터페이스를 통해 Backyard AI와 통신
"""

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict, Any
from playwright.async_api import async_playwright
import asyncio
import json

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
    stream: bool = False

# 전역 브라우저 인스턴스
browser = None
page = None

async def init_browser():
    """브라우저 초기화"""
    global browser, page
    if not browser:
        playwright = await async_playwright().start()
        browser = await playwright.chromium.launch(headless=False)  # headless=True로 변경 가능
        page = await browser.new_page()
        
        # Backyard AI 웹 인터페이스 URL (일반적인 포트들)
        backyard_urls = [
            "http://localhost:5000",
            "http://localhost:5001", 
            "http://localhost:3000",
            "http://localhost:7860",
            "http://127.0.0.1:5000"
        ]
        
        for url in backyard_urls:
            try:
                await page.goto(url, wait_until="networkidle", timeout=5000)
                print(f"✅ Connected to Backyard AI at {url}")
                return True
            except:
                continue
        
        print("❌ Could not connect to Backyard AI web interface")
        return False

@app.on_event("startup")
async def startup_event():
    """서버 시작 시 브라우저 초기화"""
    await init_browser()

@app.on_event("shutdown")
async def shutdown_event():
    """서버 종료 시 브라우저 정리"""
    global browser
    if browser:
        await browser.close()

@app.post("/v1/chat/completions")
async def chat_completions(request: ChatRequest):
    """
    Backyard AI 웹 인터페이스를 통한 채팅
    """
    global page
    
    if not page:
        if not await init_browser():
            raise HTTPException(status_code=503, detail="Backyard AI not available")
    
    try:
        # 사용자 메시지 추출
        user_message = ""
        for msg in request.messages:
            if msg.role == "user":
                user_message = msg.content
                break
        
        if not user_message:
            user_message = request.messages[-1].content if request.messages else ""
        
        # Backyard AI 웹 인터페이스에서 입력 필드 찾기
        # (실제 셀렉터는 Backyard AI의 UI에 따라 조정 필요)
        input_selectors = [
            'textarea[placeholder*="Type"]',
            'input[type="text"]',
            'textarea',
            '#message-input',
            '.chat-input',
            '[contenteditable="true"]'
        ]
        
        input_element = None
        for selector in input_selectors:
            try:
                input_element = await page.wait_for_selector(selector, timeout=1000)
                if input_element:
                    break
            except:
                continue
        
        if not input_element:
            raise HTTPException(status_code=500, detail="Could not find input field")
        
        # 메시지 입력
        await input_element.fill(user_message)
        
        # Enter 키 또는 전송 버튼 클릭
        await page.keyboard.press("Enter")
        # 또는 전송 버튼 찾아서 클릭
        # await page.click('button[type="submit"]')
        
        # 응답 대기 (최대 30초)
        await page.wait_for_timeout(1000)  # 1초 대기
        
        # 응답 텍스트 추출
        # (실제 셀렉터는 Backyard AI의 UI에 따라 조정 필요)
        response_selectors = [
            '.message:last-child',
            '.ai-response:last-child',
            '.assistant-message:last-child',
            '[data-role="assistant"]:last-child'
        ]
        
        response_text = ""
        for selector in response_selectors:
            try:
                element = await page.wait_for_selector(selector, timeout=10000)
                if element:
                    response_text = await element.text_content()
                    break
            except:
                continue
        
        if not response_text:
            response_text = "응답을 가져올 수 없습니다. Backyard AI 인터페이스를 확인해주세요."
        
        # OpenAI 호환 응답 형식
        return {
            "id": "chatcmpl-backyard",
            "object": "chat.completion",
            "created": 1234567890,
            "model": "backyard-model",
            "choices": [{
                "index": 0,
                "message": {
                    "role": "assistant",
                    "content": response_text
                },
                "finish_reason": "stop"
            }],
            "usage": {
                "prompt_tokens": len(user_message),
                "completion_tokens": len(response_text),
                "total_tokens": len(user_message) + len(response_text)
            }
        }
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/v1/models")
async def list_models():
    """모델 목록"""
    return {
        "object": "list",
        "data": [{
            "id": "backyard-model",
            "object": "model",
            "created": 1234567890,
            "owned_by": "backyard"
        }]
    }

if __name__ == "__main__":
    import uvicorn
    print("🌉 Backyard AI Web Bridge Server")
    print("📝 Instructions:")
    print("1. Make sure Backyard AI web interface is running")
    print("2. This will control it via browser automation")
    print("3. Use http://localhost:8000/v1/chat/completions for API calls")
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=True)
