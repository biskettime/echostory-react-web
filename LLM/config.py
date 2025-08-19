"""
Configuration settings for EchoStory LLM API
"""

import os
from typing import Dict, Any

# Server configuration
SERVER_CONFIG = {
    "host": "127.0.0.1",
    "port": 8000,
    "reload": True,
    "log_level": "info"
}

# Model configuration for GGUF models
MODEL_CONFIG = {
    # Default model to load
    "default_model": "I-Added-Glitter-Q4_K_M.gguf",
    
    # Available GGUF models
    "available_models": {
        "I-Added-Glitter-Q4_K_M.gguf": {
            "name": "I-Added-Glitter-Q4",
            "type": "conversational",
            "max_length": 8192,
            "description": "I Added Glitter model with Q4_K_M quantization, optimized for Mac M4"
        },
        "MN-Violet-Lotus-12B.Q4_K_M.gguf": {
            "name": "MN-Violet-Lotus-12B-Q4",
            "type": "conversational",
            "max_length": 8192,
            "description": "MN Violet Lotus 12B model with Q4_K_M quantization, optimized for Mac M4"
        },
        "gemma-3n-E4B-it-Q4_K_M.gguf": {
            "name": "Gemma-3n-E4B-it-Q4",
            "type": "conversational",
            "max_length": 8192,
            "description": "Gemma 3n E4B instruction-tuned model with Q4_K_M quantization, optimized for Mac M4"
        },
        "BuRP_7B-Q5_K_M-imat.gguf": {
            "name": "BuRP-7B-Q5",
            "type": "conversational",
            "max_length": 8192,
            "description": "BuRP 7B model with Q5_K_M quantization, optimized for Mac M4"
        }
    },
    
    # Generation parameters - optimized for stronger prompt adherence
    "generation": {
        "temperature": 0.7,  # Slightly lower for more focused responses
        "max_tokens": 1024,
        "top_p": 0.85,  # More focused sampling
        "top_k": 30,  # Reduced for better prompt following
        "frequency_penalty": 0.1,  # Penalize frequent tokens
        "presence_penalty": 0.1,  # Encourage new topics
        "repetition_penalty": 1.2,  # Stronger repetition penalty
        "no_repeat_ngram_size": 3,
        # Advanced sampling for better prompt adherence
        "typical_p": 0.95,  # Typical sampling
    }
}

# Hardware configuration for Mac M4 (성능 최적화)
HARDWARE_CONFIG = {
    "mac_m4_optimized": True,
    "metal_gpu": True,  # Metal GPU 가속 사용
    "logical_cores": 10,  # Mac M4 논리 코어 수
    "n_gpu_layers": 999,  # 모든 레이어를 GPU로 오프로딩
    "n_ctx": 8192,  # 컨텍스트 길이 증가
    "n_threads": 10,  # 논리 코어 수와 동일
    "n_batch": 4096,  # 배치 크기 증가 (처리량 향상)
    "n_ubatch": 512,  # 마이크로배치 크기
    "memory": {
        "use_mlock": True,  # 메모리 고정
        "use_mmap": True,   # 메모리 매핑
        "f16_kv": True,     # 16비트 키-값 캐시
        "flash_attn": True  # Flash Attention 활성화
    }
}

# API configuration
API_CONFIG = {
    "cors": {
        "allow_origins": ["*"],  # In production, specify exact origins
        "allow_credentials": True,
        "allow_methods": ["*"],
        "allow_headers": ["*"]
    },
    "rate_limiting": {
        "enabled": False,  # Can be enabled for production
        "requests_per_minute": 60
    }
}

# Logging configuration
LOGGING_CONFIG = {
    "level": "INFO",
    "format": "%(asctime)s - %(name)s - %(levelname)s - %(message)s",
    "file_rotation": {
        "max_bytes": 10 * 1024 * 1024,  # 10MB
        "backup_count": 5
    }
}

# Environment-specific overrides
def get_config() -> Dict[str, Any]:
    """Get configuration with environment variable overrides"""
    config = {
        "server": SERVER_CONFIG,
        "model": MODEL_CONFIG,
        "hardware": HARDWARE_CONFIG,
        "api": API_CONFIG,
        "logging": LOGGING_CONFIG
    }
    
    # Override with environment variables if present
    if os.getenv("ECHOSTORY_MODEL"):
        config["model"]["default_model"] = os.getenv("ECHOSTORY_MODEL")
    
    if os.getenv("ECHOSTORY_PORT"):
        config["server"]["port"] = int(os.getenv("ECHOSTORY_PORT"))
    
    if os.getenv("ECHOSTORY_HOST"):
        config["server"]["host"] = os.getenv("ECHOSTORY_HOST")
    
    if os.getenv("ECHOSTORY_USE_GPU"):
        config["hardware"]["use_gpu"] = os.getenv("ECHOSTORY_USE_GPU").lower() == "true"
    
    return config
