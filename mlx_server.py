#!/usr/bin/env python3
"""
MLX Model Server for EchoStory
Using Apple MLX for optimized performance on Apple Silicon
"""

import json
import asyncio
from pathlib import Path
from typing import Optional, List, Dict, Any
from dataclasses import dataclass
from datetime import datetime

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import uvicorn

# MLX imports
from mlx_lm import load, generate
import mlx.core as mx

# Model configuration
MODEL_PATH = Path(__file__).parent / "models" / "gpt-oss-20b-MLX-8bit"

# API Models
class Message(BaseModel):
    role: str
    content: str

class ChatRequest(BaseModel):
    model: str = "gpt-oss-20b-mlx-8bit"
    messages: List[Message]
    temperature: float = 0.8
    max_tokens: int = 2048
    top_p: float = 0.9
    frequency_penalty: float = 1.2
    presence_penalty: float = 0.8
    stream: bool = False

class ChatResponse(BaseModel):
    id: str
    object: str = "chat.completion"
    created: int
    model: str
    choices: List[Dict[str, Any]]
    usage: Dict[str, int]

# Initialize FastAPI
app = FastAPI(title="MLX Model Server", version="1.0.0")

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Global model storage
model = None
tokenizer = None

@dataclass
class ModelManager:
    """Manages MLX model loading and generation"""
    
    def __init__(self):
        self.model = None
        self.tokenizer = None
        self.model_path = MODEL_PATH
        
    def load_model(self):
        """Load the MLX model"""
        print(f"🚀 Loading MLX model from {self.model_path}")
        try:
            self.model, self.tokenizer = load(str(self.model_path))
            print(f"✅ Model loaded successfully")
            return True
        except Exception as e:
            print(f"❌ Failed to load model: {e}")
            return False
    
    def generate_response(self, prompt: str, **kwargs) -> str:
        """Generate response using MLX"""
        if not self.model or not self.tokenizer:
            raise ValueError("Model not loaded")
        
        # MLX generation parameters - 올바른 파라미터 이름 사용
        max_tokens = kwargs.get("max_tokens", 2048)
        temperature = kwargs.get("temperature", 0.8)
        top_p = kwargs.get("top_p", 0.9)
        
        # Generate response using MLX
        response = generate(
            self.model,
            self.tokenizer,
            prompt=prompt,
            max_tokens=max_tokens,
            verbose=False
        )
        
        return response

# Initialize model manager
model_manager = ModelManager()

@app.on_event("startup")
async def startup_event():
    """Load model on startup"""
    success = model_manager.load_model()
    if not success:
        print("⚠️ Model failed to load, server will start but won't be functional")

@app.get("/")
async def root():
    """Health check endpoint"""
    return {
        "status": "online",
        "model": "gpt-oss-20b-mlx-8bit",
        "backend": "Apple MLX",
        "model_loaded": model_manager.model is not None
    }

@app.get("/v1/models")
async def list_models():
    """List available models (OpenAI compatible)"""
    return {
        "object": "list",
        "data": [
            {
                "id": "gpt-oss-20b-mlx-8bit",
                "object": "model",
                "created": 1700000000,
                "owned_by": "mlx",
                "permission": [],
                "root": "gpt-oss-20b-mlx-8bit",
                "parent": None,
            }
        ]
    }

@app.post("/v1/chat/completions")
async def chat_completions(request: ChatRequest):
    """Chat completions endpoint (OpenAI compatible)"""
    
    if not model_manager.model:
        raise HTTPException(status_code=503, detail="Model not loaded")
    
    try:
        # Convert messages to prompt
        prompt = ""
        for msg in request.messages:
            if msg.role == "system":
                prompt += f"System: {msg.content}\n"
            elif msg.role == "user":
                prompt += f"User: {msg.content}\n"
            elif msg.role == "assistant":
                prompt += f"Assistant: {msg.content}\n"
        
        prompt += "Assistant: "
        
        # Generate response
        response_text = model_manager.generate_response(
            prompt,
            max_tokens=request.max_tokens,
            temperature=request.temperature,
            top_p=request.top_p,
            frequency_penalty=request.frequency_penalty,
        )
        
        # Remove the prompt from response
        if response_text.startswith(prompt):
            response_text = response_text[len(prompt):]
        
        # Create response
        response = ChatResponse(
            id=f"chatcmpl-{datetime.now().timestamp()}",
            created=int(datetime.now().timestamp()),
            model=request.model,
            choices=[
                {
                    "index": 0,
                    "message": {
                        "role": "assistant",
                        "content": response_text.strip()
                    },
                    "finish_reason": "stop"
                }
            ],
            usage={
                "prompt_tokens": len(prompt.split()),
                "completion_tokens": len(response_text.split()),
                "total_tokens": len(prompt.split()) + len(response_text.split())
            }
        )
        
        return response.model_dump()
        
    except Exception as e:
        print(f"❌ Error generating response: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/v1/completions")
async def completions(request: Dict[str, Any]):
    """Completions endpoint (OpenAI compatible)"""
    
    if not model_manager.model:
        raise HTTPException(status_code=503, detail="Model not loaded")
    
    try:
        prompt = request.get("prompt", "")
        
        response_text = model_manager.generate_response(
            prompt,
            max_tokens=request.get("max_tokens", 2048),
            temperature=request.get("temperature", 0.8),
            top_p=request.get("top_p", 0.9),
        )
        
        return {
            "id": f"cmpl-{datetime.now().timestamp()}",
            "object": "text_completion",
            "created": int(datetime.now().timestamp()),
            "model": "gpt-oss-20b-mlx-8bit",
            "choices": [
                {
                    "text": response_text,
                    "index": 0,
                    "finish_reason": "stop"
                }
            ],
            "usage": {
                "prompt_tokens": len(prompt.split()),
                "completion_tokens": len(response_text.split()),
                "total_tokens": len(prompt.split()) + len(response_text.split())
            }
        }
        
    except Exception as e:
        print(f"❌ Error generating response: {e}")
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    print("🚀 Starting MLX Model Server")
    print(f"📁 Model path: {MODEL_PATH}")
    print("🌐 Server will run on http://localhost:1235")
    
    # Run server
    uvicorn.run(
        app,
        host="0.0.0.0",
        port=1235,
        log_level="info"
    )