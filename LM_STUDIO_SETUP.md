# LM Studio API 설정 가이드

## 1. LM Studio 설치
- https://lmstudio.ai 에서 다운로드
- 설치 후 원하는 GGUF 모델 로드

## 2. API 서버 시작
1. LM Studio에서 모델 로드
2. 상단 메뉴에서 "Local Server" 탭 클릭
3. "Start Server" 버튼 클릭
4. 기본 포트: 1234

## 3. API 엔드포인트
- Base URL: `http://localhost:1234/v1`
- Chat Completions: `http://localhost:1234/v1/chat/completions`
- Models List: `http://localhost:1234/v1/models`

## 4. 테스트
```bash
curl http://localhost:1234/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{
    "model": "loaded-model",
    "messages": [
      {"role": "system", "content": "You are a helpful assistant."},
      {"role": "user", "content": "Hello"}
    ],
    "temperature": 0.7
  }'
```

## 5. React 앱 연동
`services/integratedAIService.ts`에서:
```typescript
const AI_CONFIG = {
  baseUrl: 'http://127.0.0.1:1234/v1',
  model: 'loaded-model',  // 또는 실제 모델명
  // ...
};
```
