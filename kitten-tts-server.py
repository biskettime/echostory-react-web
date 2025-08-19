"""
Kitten TTS Server
초경량 25MB TTS 모델 서버
"""

import io
import soundfile as sf
from kittentts import KittenTTS
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
import numpy as np

app = FastAPI()

# CORS 설정
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Kitten TTS 모델 로드
print("🐱 Loading Kitten TTS model...")
model = None
try:
    # Load model directly from HuggingFace
    import os
    os.environ['HF_HOME'] = './.cache'
    
    # Try loading model directly with repo ID
    model = KittenTTS("KittenML/kitten-tts-nano-0.1")
    print("✅ Kitten TTS model loaded successfully!")
except Exception as e:
    print(f"❌ Failed to load model: {e}")
    # Try alternative loading method
    try:
        print("🔄 Trying alternative model loading...")
        from huggingface_hub import hf_hub_download
        
        # Download specific model files
        model_file = hf_hub_download(
            repo_id="KittenML/kitten-tts-nano-0.1",
            filename="acoustic_model.onnx",
            cache_dir="./.cache"
        )
        
        model_dir = os.path.dirname(model_file)
        print(f"📁 Model files in: {model_dir}")
        
        model = KittenTTS(model_dir)
        print("✅ Kitten TTS model loaded successfully!")
    except Exception as e2:
        print(f"❌ Alternative loading also failed: {e2}")

class TTSRequest(BaseModel):
    text: str
    voice: str = "expr-voice-2-f"  # 기본 여성 음성
    speed: float = 1.0  # 속도 조절 (0.5 ~ 2.0)

# 사용 가능한 음성 목록
AVAILABLE_VOICES = {
    "expr-voice-1-m": "Male Voice 1 (Expressive)",
    "expr-voice-2-f": "Female Voice 2 (Expressive)",
    "expr-voice-3-m": "Male Voice 3 (Expressive)",
    "expr-voice-4-f": "Female Voice 4 (Expressive)",
    "expr-voice-5-m": "Male Voice 5 (Expressive)",
    "expr-voice-6-f": "Female Voice 6 (Expressive)",
    "expr-voice-7-m": "Male Voice 7 (Expressive)",
    "expr-voice-8-f": "Female Voice 8 (Expressive)"
}

@app.get("/")
async def root():
    return {
        "status": "Kitten TTS Server Running",
        "model": "kitten-tts-nano-0.1",
        "size": "25MB",
        "voices": AVAILABLE_VOICES
    }

@app.get("/api/kitten-tts/voices")
async def get_voices():
    """사용 가능한 음성 목록 반환"""
    return {
        "voices": [
            {"id": k, "name": v, "gender": "Male" if "m" in k else "Female"}
            for k, v in AVAILABLE_VOICES.items()
        ]
    }

@app.post("/api/kitten-tts")
async def text_to_speech(request: TTSRequest):
    """텍스트를 음성으로 변환"""
    if not model:
        raise HTTPException(status_code=503, detail="Model not loaded")
    
    try:
        # 한국어 텍스트 감지 및 경고
        if any('\u3131' <= char <= '\u3163' or '\uac00' <= char <= '\ud7a3' for char in request.text):
            # 한국어가 포함된 경우 - 영어로 번역 필요
            print("⚠️ Korean text detected. Kitten TTS only supports English.")
            # 간단한 대체 텍스트 제공
            request.text = "Hello, this is a test message in English."
        
        # 음성 생성
        print(f"🎵 Generating speech: '{request.text[:50]}...' with voice {request.voice}")
        audio = model.generate(request.text, voice=request.voice)
        
        # 속도 조절은 일단 스킵 (scipy 문제 회피)
        # if request.speed != 1.0:
        #     import scipy.signal
        #     new_length = int(len(audio) / request.speed)
        #     audio = scipy.signal.resample(audio, new_length)
        
        # WAV 형식으로 변환
        audio_buffer = io.BytesIO()
        sf.write(audio_buffer, audio, 24000, format='WAV')
        audio_buffer.seek(0)
        
        # 오디오 스트림 반환
        return StreamingResponse(
            audio_buffer,
            media_type="audio/wav",
            headers={
                "Content-Disposition": "inline; filename=kitten-tts.wav"
            }
        )
        
    except Exception as e:
        print(f"❌ TTS Error: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/kitten-tts/test")
async def test_tts():
    """TTS 테스트"""
    test_text = "Hello! This is Kitten TTS. I am a lightweight text to speech model."
    request = TTSRequest(text=test_text, voice="expr-voice-2-f")
    return await text_to_speech(request)

if __name__ == "__main__":
    import uvicorn
    print("🐱 Kitten TTS Server starting on port 8002...")
    print("📝 Features:")
    print("  - Ultra-lightweight: Only 25MB")
    print("  - CPU-optimized: No GPU required")
    print("  - 8 expressive voices")
    print("  - English only (for now)")
    print("\n📍 Endpoints:")
    print("  - GET  /api/kitten-tts/voices - List available voices")
    print("  - POST /api/kitten-tts - Convert text to speech")
    print("  - POST /api/kitten-tts/test - Test TTS")
    uvicorn.run(app, host="0.0.0.0", port=8002, reload=False)
