#!/usr/bin/env python3
"""
EchoStory LLM API Server
Direct model loading and inference without LM Studio
"""

import os
import sys
import asyncio
import logging
from datetime import datetime
from typing import List, Dict, Any, Optional
import json

from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel
import uvicorn

# Add the current directory to Python path
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from api.model_manager import ModelManager
from utils.logger import setup_logger

# Setup logging
logger = setup_logger()

# Initialize FastAPI app
app = FastAPI(
    title="EchoStory LLM API",
    description="Direct LLM inference API for EchoStory",
    version="1.0.0"
)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, specify exact origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Global model manager
model_manager: Optional[ModelManager] = None

# Pydantic models for API
class ChatMessage(BaseModel):
    role: str  # "system", "user", "assistant"
    content: str

class ChatCompletionRequest(BaseModel):
    messages: List[ChatMessage]
    temperature: float = 0.8
    max_tokens: int = 1024
    top_p: float = 0.9
    frequency_penalty: float = 0.0
    presence_penalty: float = 0.0
    stream: bool = False

class ChatCompletionResponse(BaseModel):
    id: str
    object: str = "chat.completion"
    created: int
    model: str
    choices: List[Dict[str, Any]]
    usage: Dict[str, int]

@app.on_event("startup")
async def startup_event():
    """Initialize the model on startup"""
    global model_manager
    logger.info("🚀 Starting EchoStory LLM API Server...")
    
    try:
        model_manager = ModelManager()
        await model_manager.load_model()
        logger.info("✅ Model loaded successfully!")
    except Exception as e:
        logger.error(f"❌ Failed to load model: {e}")
        raise

@app.on_event("shutdown")
async def shutdown_event():
    """Cleanup on shutdown"""
    global model_manager
    logger.info("🛑 Shutting down EchoStory LLM API Server...")
    if model_manager:
        model_manager.cleanup()

@app.get("/")
async def root():
    """Health check endpoint"""
    return {
        "message": "EchoStory LLM API Server",
        "status": "running",
        "model_loaded": model_manager is not None and model_manager.is_loaded(),
        "timestamp": datetime.now().isoformat()
    }

@app.get("/v1/models")
async def list_models():
    """List available models (OpenAI compatible)"""
    if not model_manager or not model_manager.is_loaded():
        raise HTTPException(status_code=503, detail="Model not loaded")
    
    return {
        "object": "list",
        "data": [
            {
                "id": model_manager.get_model_name(),
                "object": "model",
                "owned_by": "echostory"
            }
        ]
    }

@app.post("/v1/chat/completions")
async def chat_completions(request: ChatCompletionRequest):
    """Chat completions endpoint (OpenAI compatible)"""
    if not model_manager or not model_manager.is_loaded():
        raise HTTPException(status_code=503, detail="Model not loaded")
    
    try:
        logger.info(f"📝 Received chat request with {len(request.messages)} messages")
        logger.info(f"📝 Messages: {[msg.dict() for msg in request.messages]}")
        
        # Generate response
        response_text = await model_manager.generate_response(
            messages=[msg.dict() for msg in request.messages],
            temperature=request.temperature,
            max_tokens=request.max_tokens,
            top_p=request.top_p
        )
        
        # Create OpenAI-compatible response
        response = ChatCompletionResponse(
            id=f"chatcmpl-{datetime.now().strftime('%Y%m%d%H%M%S')}",
            created=int(datetime.now().timestamp()),
            model=model_manager.get_model_name(),
            choices=[
                {
                    "index": 0,
                    "message": {
                        "role": "assistant",
                        "content": response_text
                    },
                    "finish_reason": "stop"
                }
            ],
            usage={
                "prompt_tokens": sum(len(msg.content.split()) for msg in request.messages),
                "completion_tokens": len(response_text.split()),
                "total_tokens": sum(len(msg.content.split()) for msg in request.messages) + len(response_text.split())
            }
        )
        
        logger.info(f"✅ Generated response: {response_text[:100]}...")
        return response.dict()
        
    except Exception as e:
        logger.error(f"❌ Error generating response: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/health")
async def health_check():
    """Detailed health check"""
    if not model_manager:
        return {"status": "error", "message": "Model manager not initialized"}
    
    return {
        "status": "healthy" if model_manager.is_loaded() else "loading",
        "model_name": model_manager.get_model_name() if model_manager.is_loaded() else None,
        "memory_usage": model_manager.get_memory_usage(),
        "uptime": datetime.now().isoformat()
    }

if __name__ == "__main__":
    # Run the server
    uvicorn.run(
        "main:app",
        host="127.0.0.1",
        port=8000,
        reload=True,
        log_level="info"
    )
