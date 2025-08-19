# EchoStory LLM API Server

Mac M4 최적화된 GGUF 모델을 위한 직접 LLM 추론 API 서버

## 🚀 특징

- **Mac M4 최적화**: Metal GPU 가속 및 성능 최적화
- **GGUF 모델 지원**: llama-cpp-python을 사용한 효율적인 추론
- **OpenAI 호환 API**: 기존 프론트엔드와 완벽 호환
- **메모리 효율성**: 24GB RAM에 최적화된 설정
- **실시간 추론**: 빠른 응답 시간

## 📋 요구사항

- macOS (Apple Silicon M4)
- Python 3.8+
- 24GB RAM
- BuRP_7B-Q5_K_M-imat.gguf 모델 파일

## 🛠️ 설치 및 실행

### 1. 모델 파일 준비
```bash
# models 폴더에 GGUF 모델 파일을 복사
cp /path/to/BuRP_7B-Q5_K_M-imat.gguf ./models/
```

### 2. 자동 설치 및 실행
```bash
# 실행 권한 부여 (최초 1회)
chmod +x start_server.sh

# 서버 시작
./start_server.sh
```

### 3. 수동 설치 (선택사항)
```bash
# 가상환경 생성
python3 -m venv venv
source venv/bin/activate

# 의존성 설치
pip install -r requirements.txt

# 서버 실행
python main.py
```

## 🔧 설정

### 환경 변수
```bash
export ECHOSTORY_MODEL="BuRP_7B-Q5_K_M-imat.gguf"  # 모델 파일명
export ECHOSTORY_PORT=8000                          # API 포트
export ECHOSTORY_HOST="127.0.0.1"                  # API 호스트
```

### 하드웨어 최적화 설정
- **GPU 레이어**: -1 (모든 레이어를 Metal GPU에서 실행)
- **컨텍스트 윈도우**: 4096 토큰
- **CPU 스레드**: 8개 (M4 성능 코어)
- **배치 크기**: 512

## 📡 API 엔드포인트

### 상태 확인
```bash
curl http://127.0.0.1:8000/
curl http://127.0.0.1:8000/health
```

### 모델 목록
```bash
curl http://127.0.0.1:8000/v1/models
```

### 채팅 완성 (OpenAI 호환)
```bash
curl -X POST http://127.0.0.1:8000/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{
    "messages": [
      {"role": "user", "content": "안녕하세요!"}
    ],
    "temperature": 0.8,
    "max_tokens": 1024
  }'
```

## 📊 성능 모니터링

### 메모리 사용량 확인
```bash
curl http://127.0.0.1:8000/health
```

### 로그 확인
```bash
tail -f logs/echostory_llm_$(date +%Y%m%d).log
```

## 🔗 프론트엔드 연동

프론트엔드는 자동으로 `http://127.0.0.1:8000/v1`에 연결됩니다.

## 🐛 문제 해결

### 모델 로딩 실패
1. 모델 파일 경로 확인: `./models/BuRP_7B-Q5_K_M-imat.gguf`
2. 메모리 부족 시 `n_gpu_layers` 값 조정
3. 로그 파일 확인: `logs/echostory_llm_error_*.log`

### Metal GPU 가속 문제
```bash
# Metal 지원 확인
python -c "from llama_cpp import Llama; print('Metal support available')"
```

### 포트 충돌
```bash
# 포트 사용 확인
lsof -i :8000

# 다른 포트 사용
export ECHOSTORY_PORT=8001
```

## 📝 로그

- **일반 로그**: `logs/echostory_llm_YYYYMMDD.log`
- **에러 로그**: `logs/echostory_llm_error_YYYYMMDD.log`
- **로그 로테이션**: 10MB마다 자동 로테이션 (5개 백업 유지)

## 🔧 개발자 정보

- **FastAPI**: 웹 API 프레임워크
- **llama-cpp-python**: GGUF 모델 추론 엔진
- **Metal**: Apple Silicon GPU 가속
- **uvicorn**: ASGI 서버
