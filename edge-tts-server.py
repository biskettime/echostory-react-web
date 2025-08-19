"""
Edge TTS Server
Microsoft Edge의 무료 TTS를 제공하는 서버
"""

import asyncio
import edge_tts
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
import io

app = FastAPI()

# CORS 설정
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class TTSRequest(BaseModel):
    text: str
    voice: str = "ko-KR-SunHiNeural"  # 기본 한국어 여성 음성
    rate: str = "+0%"  # -50% to +100%
    pitch: str = "+0Hz"  # -50Hz to +50Hz
    volume: str = "+0%"  # -50% to +100%

@app.get("/")
async def root():
    return {"status": "Edge TTS Server Running", "voices": await get_voices_list()}

@app.get("/api/edge-tts/voices")
async def get_voices():
    """사용 가능한 음성 목록 반환"""
    voices = await edge_tts.list_voices()
    
    # 한국어와 영어 음성만 필터링
    filtered_voices = [
        {
            "name": v["ShortName"],
            "locale": v["Locale"],
            "gender": v["Gender"],
            "displayName": v["FriendlyName"]
        }
        for v in voices
        if v["Locale"].startswith(("ko-", "en-"))
    ]
    
    return {"voices": filtered_voices}

async def get_voices_list():
    """내부용 음성 목록"""
    voices = await edge_tts.list_voices()
    korean_voices = [v["ShortName"] for v in voices if v["Locale"].startswith("ko-")]
    english_voices = [v["ShortName"] for v in voices if v["Locale"].startswith("en-")][:5]
    return {
        "korean": korean_voices,
        "english": english_voices
    }

@app.post("/api/edge-tts")
async def text_to_speech(request: TTSRequest):
    """텍스트를 음성으로 변환"""
    try:
        # Edge TTS 통신 객체 생성
        communicate = edge_tts.Communicate(
            request.text,
            request.voice,
            rate=request.rate,
            pitch=request.pitch,
            volume=request.volume
        )
        
        # 음성 데이터를 메모리에 저장
        audio_data = io.BytesIO()
        
        # 음성 생성
        async for chunk in communicate.stream():
            if chunk["type"] == "audio":
                audio_data.write(chunk["data"])
        
        # 스트림 위치를 처음으로 되돌림
        audio_data.seek(0)
        
        # 오디오 스트림 반환
        return StreamingResponse(
            audio_data,
            media_type="audio/mpeg",
            headers={
                "Content-Disposition": "inline; filename=tts.mp3"
            }
        )
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/edge-tts/test")
async def test_tts():
    """TTS 테스트"""
    test_text = "안녕하세요. Edge TTS 테스트입니다."
    request = TTSRequest(text=test_text)
    return await text_to_speech(request)

if __name__ == "__main__":
    import uvicorn
    print("🎵 Edge TTS Server starting on port 8001...")
    print("📝 Available endpoints:")
    print("  - GET  /api/edge-tts/voices - List available voices")
    print("  - POST /api/edge-tts - Convert text to speech")
    print("  - POST /api/edge-tts/test - Test TTS")
    uvicorn.run(app, host="0.0.0.0", port=8001, reload=False)
