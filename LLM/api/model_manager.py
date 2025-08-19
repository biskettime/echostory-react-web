"""
Model Manager for EchoStory LLM API
Handles GGUF model loading, inference, and memory management for Mac M4
"""

import os
import gc
import asyncio
from typing import List, Dict, Any, Optional
from llama_cpp import Llama
import logging

# Try to import psutil, but make it optional
try:
    import psutil
    HAS_PSUTIL = True
except ImportError:
    HAS_PSUTIL = False

logger = logging.getLogger(__name__)

class ModelManager:
    def __init__(self):
        self.model = None
        self.model_name = None
        self.model_path = None
        self.loaded = False
        
        # Mac M4 성능 최적화 설정 (10 논리 코어) - 12B 모델용 조정
        self.n_gpu_layers = 999  # 가능한 모든 레이어를 GPU(Metal)로 오프로딩
        self.n_ctx = 4096  # 컨텍스트 길이 줄임 (12B 모델은 메모리 사용량이 큼)
        self.n_threads = 10  # 논리 코어 수와 동일
        self.n_batch = 512  # 배치 크기 줄임 (메모리 절약)
        self.n_ubatch = 128  # 마이크로배치 크기 줄임
        
        # Model configuration
        self.model_configs = {
            "I-Added-Glitter-Q4_K_M.gguf": {
                "name": "I-Added-Glitter-Q4",
                "type": "conversational",
                "max_length": 8192,
                "description": "I Added Glitter model with Q4_K_M quantization"
            },
            "MN-Violet-Lotus-12B.Q4_K_M.gguf": {
                "name": "MN-Violet-Lotus-12B-Q4",
                "type": "conversational",
                "max_length": 8192,
                "description": "MN Violet Lotus 12B model with Q4_K_M quantization"
            },
            "gemma-3n-E4B-it-Q4_K_M.gguf": {
                "name": "Gemma-3n-E4B-it-Q4",
                "type": "conversational",
                "max_length": 8192,
                "description": "Gemma 3n E4B instruction-tuned model with Q4_K_M quantization"
            },
            "BuRP_7B-Q5_K_M-imat.gguf": {
                "name": "BuRP-7B-Q5",
                "type": "conversational",
                "max_length": 4096,
                "description": "BuRP 7B model with Q5_K_M quantization"
            }
        }
        
        # Default model path
        self.default_model_file = "MN-Violet-Lotus-12B.Q4_K_M.gguf"
        self.models_dir = os.path.join(os.path.dirname(os.path.dirname(__file__)), "models")
        
    async def load_model(self, model_file: Optional[str] = None):
        """Load the specified GGUF model"""
        if model_file is None:
            model_file = self.default_model_file
            
        # Construct full path to model
        self.model_path = os.path.join(self.models_dir, model_file)
        
        if not os.path.exists(self.model_path):
            raise FileNotFoundError(f"Model file not found: {self.model_path}")
            
        logger.info(f"🔄 Loading GGUF model: {model_file}")
        logger.info(f"📁 Model path: {self.model_path}")
        
        try:
            # Load GGUF model with Mac M4 optimized settings and stronger prompt adherence
            logger.info("🧠 Loading GGUF model with llama-cpp-python...")
            self.model = Llama(
                model_path=self.model_path,
                n_gpu_layers=self.n_gpu_layers,  # 모든 레이어를 Metal GPU로 오프로딩
                n_ctx=self.n_ctx,  # 컨텍스트 윈도우
                n_threads=self.n_threads,  # CPU 스레드 (논리 코어 수)
                n_batch=self.n_batch,  # 배치 크기 (처리량 향상)
                n_ubatch=self.n_ubatch,  # 마이크로배치 크기
                verbose=True,  # 상세 로깅 활성화
                use_mlock=True,  # 모델을 메모리에 고정
                use_mmap=True,  # 메모리 매핑 사용
                # Mac M4 Metal 최적화
                metal=True,  # Metal GPU 지원 활성화
                f16_kv=True,  # 16비트 키-값 캐시 사용
                # 성능 최적화 설정
                rope_scaling_type=1,  # RoPE 스케일링 활성화
                rope_freq_base=10000.0,  # RoPE 주파수 베이스
                mul_mat_q=True,  # 양자화 행렬 곱셈 활성화
                logits_all=False,  # 마지막 토큰만 로짓 계산 (효율성 향상)
                embedding=False,  # 임베딩 모드 비활성화
                offload_kqv=True,  # 키-값 캐시를 GPU로 오프로드
                flash_attn=True,  # Flash Attention 활성화 (지원 시 속도 향상)
            )
            
            self.model_name = model_file
            self.loaded = True
            
            logger.info(f"✅ GGUF model loaded successfully with Metal acceleration")
            logger.info(f"📊 Memory usage: {self.get_memory_usage()}")
            
        except Exception as e:
            logger.error(f"❌ Failed to load GGUF model: {e}")
            raise
    
    def is_loaded(self) -> bool:
        """Check if model is loaded"""
        return self.loaded and self.model is not None
    
    def get_model_name(self) -> str:
        """Get the current model name"""
        if self.model_name and self.model_name in self.model_configs:
            return self.model_configs[self.model_name]["name"]
        return self.model_name or "unknown"
    
    def get_memory_usage(self) -> Dict[str, Any]:
        """Get current memory usage"""
        memory_info = {}
        
        if HAS_PSUTIL:
            memory_info = {
                "cpu_percent": psutil.cpu_percent(),
                "memory_percent": psutil.virtual_memory().percent,
                "memory_available_gb": psutil.virtual_memory().available / (1024**3),
                "memory_used_gb": psutil.virtual_memory().used / (1024**3)
            }
        else:
            memory_info = {
                "cpu_percent": "N/A",
                "memory_percent": "N/A", 
                "memory_available_gb": "N/A",
                "memory_used_gb": "N/A"
            }
        
        # Add model-specific memory info if available
        if self.model:
            try:
                # Get model memory usage from llama-cpp
                memory_info["model_loaded"] = True
                memory_info["model_path"] = self.model_path
            except:
                pass
        
        return memory_info
    
    async def generate_response(
        self, 
        messages: List[Dict[str, str]], 
        temperature: float = 0.8,
        max_tokens: int = 1024,
        top_p: float = 0.9
    ) -> str:
        """Generate response from messages using GGUF model"""
        if not self.is_loaded():
            raise RuntimeError("Model not loaded")
        
        try:
            # Format messages for the model
            formatted_prompt = self._format_messages(messages)
            logger.info(f"📝 Formatted prompt: {formatted_prompt[:200]}...")
            
            # Generate response using llama-cpp-python with MAXIMUM anti-repetition
            response = self.model(
                formatted_prompt,
                max_tokens=max_tokens,
                temperature=temperature,
                top_p=top_p,
                repeat_penalty=1.5,  # 최대 반복 패널티
                top_k=50,  # 상위 50개 토큰 고려
                stream=False,
                stop=["User:", "System:", "Human:", "Assistant:", "<end_of_turn>", "<start_of_turn>", "### USER MESSAGE", "### END"],
                echo=False,  # Don't echo the prompt
                # Maximum anti-repetition settings
                frequency_penalty=0.8,  # 최대 빈도 패널티
                presence_penalty=0.8,   # 최대 존재 패널티
                typical_p=0.9,         # Typical sampling
                mirostat_mode=2,       # Mirostat sampling for better quality
                mirostat_tau=5.0,      # Target perplexity
                mirostat_eta=0.1,      # Learning rate
            )
            
            # Extract the generated text
            generated_text = response['choices'][0]['text']
            
            # Clean up response
            cleaned_response = self._clean_response(generated_text)
            
            logger.info(f"✅ Generated response: {cleaned_response[:100]}...")
            return cleaned_response
            
        except Exception as e:
            logger.error(f"❌ Error generating response: {e}")
            raise
    
    def _format_messages(self, messages: List[Dict[str, str]]) -> str:
        """Format messages for the model with stronger prompt adherence"""
        formatted_parts = []
        
        # Add EXTREMELY strong instruction header for roleplay
        formatted_parts.append("### ⚠️ ABSOLUTE CRITICAL ROLEPLAY INSTRUCTIONS - MANDATORY COMPLIANCE ⚠️ ###")
        formatted_parts.append("YOU ARE IN ROLEPLAY MODE. YOU MUST FOLLOW ALL INSTRUCTIONS EXACTLY.")
        formatted_parts.append("FAILURE TO COMPLY WITH FORMAT WILL RESULT IN REJECTION.\n")
        
        for message in messages:
            role = message.get("role", "")
            content = message.get("content", "")
            
            if role == "system":
                # Make system messages EXTREMELY prominent
                formatted_parts.append("\n### 🔴 SYSTEM ROLEPLAY INSTRUCTIONS (ABSOLUTE PRIORITY) 🔴 ###")
                formatted_parts.append("YOU MUST FOLLOW THESE INSTRUCTIONS EXACTLY:")
                formatted_parts.append(f"{content}")
                formatted_parts.append("### END SYSTEM INSTRUCTIONS - THESE ARE YOUR ONLY RULES ###\n")
            elif role == "user":
                formatted_parts.append(f"\n### USER MESSAGE FROM {{{{user}}}} ###")
                formatted_parts.append(f"{content}")
                formatted_parts.append("### END USER MESSAGE ###\n")
            elif role == "assistant":
                formatted_parts.append(f"\n### PREVIOUS {{{{char}}}} RESPONSE ###")
                formatted_parts.append(f"{content}")
                formatted_parts.append("### END PREVIOUS RESPONSE ###\n")
        
        # Add EXTREMELY strong response instruction
        formatted_parts.append("\n### 🎭 NOW GENERATE YOUR ROLEPLAY RESPONSE AS {{char}} 🎭 ###")
        formatted_parts.append("REMEMBER: You are {{char}}, NOT an AI assistant!")
        formatted_parts.append("FORMAT: *actions* \"dialogue\" with thoughts and location at the end!")
        formatted_parts.append("MUST END WITH: *💭{{char}}'s Thoughts:* and *📍{{char}}'s Location:*")
        formatted_parts.append("\n{{char}}'s response:")
        
        return "\n".join(formatted_parts)
    
    def _clean_response(self, response: str) -> str:
        """Clean and format the generated response with stronger filtering"""
        # Remove common artifacts
        response = response.strip()
        
        # Remove instruction markers that might leak into response
        instruction_markers = [
            "### ⚠️ ABSOLUTE CRITICAL ROLEPLAY INSTRUCTIONS - MANDATORY COMPLIANCE ⚠️ ###",
            "YOU ARE IN ROLEPLAY MODE",
            "FAILURE TO COMPLY",
            "### 🔴 SYSTEM ROLEPLAY INSTRUCTIONS (ABSOLUTE PRIORITY) 🔴 ###",
            "YOU MUST FOLLOW THESE INSTRUCTIONS EXACTLY:",
            "### END SYSTEM INSTRUCTIONS - THESE ARE YOUR ONLY RULES ###",
            "### USER MESSAGE FROM {{user}} ###",
            "### END USER MESSAGE ###",
            "### PREVIOUS {{char}} RESPONSE ###",
            "### END PREVIOUS RESPONSE ###",
            "### 🎭 NOW GENERATE YOUR ROLEPLAY RESPONSE AS {{char}} 🎭 ###",
            "REMEMBER: You are {{char}}, NOT an AI assistant!",
            "FORMAT: *actions*",
            "MUST END WITH:",
            "{{char}}'s response:",
            "### CRITICAL INSTRUCTIONS - MUST FOLLOW EXACTLY ###",
            "### SYSTEM INSTRUCTIONS (MANDATORY) ###",
            "### END SYSTEM INSTRUCTIONS ###",
            "### USER MESSAGE ###",
            "### ASSISTANT RESPONSE ###",
            "### END ASSISTANT RESPONSE ###",
            "### GENERATE RESPONSE (FOLLOW ALL INSTRUCTIONS ABOVE) ###"
        ]
        
        for marker in instruction_markers:
            response = response.replace(marker, "").strip()
        
        # Remove repeated patterns more aggressively
        lines = response.split('\n')
        cleaned_lines = []
        prev_line = ""
        
        for line in lines:
            line = line.strip()
            # Skip empty lines and exact duplicates
            if line and line != prev_line:
                # Also check for similar lines (to catch slight variations)
                is_similar = False
                for existing_line in cleaned_lines[-3:]:  # Check last 3 lines
                    if len(line) > 10 and len(existing_line) > 10:
                        # Simple similarity check
                        similarity = len(set(line.lower().split()) & set(existing_line.lower().split())) / max(len(line.split()), len(existing_line.split()))
                        if similarity > 0.8:
                            is_similar = True
                            break
                
                if not is_similar:
                    cleaned_lines.append(line)
                    prev_line = line
        
        response = '\n'.join(cleaned_lines)
        
        # Remove role prefixes if they appear in the response
        response = response.replace("Assistant:", "").strip()
        response = response.replace("User:", "").strip()
        response = response.replace("System:", "").strip()
        response = response.replace("Human:", "").strip()
        
        # Remove any remaining instruction-like text
        if response.startswith("###") or response.startswith("INSTRUCTIONS"):
            lines = response.split('\n')
            response = '\n'.join([line for line in lines if not line.strip().startswith("###") and not "INSTRUCTION" in line.upper()])
        
        return response.strip()
    
    def cleanup(self):
        """Clean up model and free memory"""
        logger.info("🧹 Cleaning up GGUF model...")
        
        if self.model is not None:
            # Close the model properly
            try:
                self.model.close()
            except:
                pass
            del self.model
            self.model = None
        
        # Force garbage collection
        gc.collect()
        
        self.loaded = False
        self.model_name = None
        self.model_path = None
        logger.info("✅ GGUF model cleanup completed")
