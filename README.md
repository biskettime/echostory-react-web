# EchoStory - 한국어 버전

인터랙티브 스토리텔링과 AI 캐릭터 채팅을 결합한 웹 애플리케이션입니다.

## 🌟 주요 기능

### 📚 스토리 탐색
- **인기 스토리**: 커뮤니티에서 가장 사랑받는 스토리들
- **새로운 스토리**: 최근에 추가된 신선한 컨텐츠
- **검색 기능**: 원하는 스토리를 쉽게 찾을 수 있는 검색
- **카테고리별 분류**: 장르와 테마별로 정리된 스토리

### 💬 AI 채팅
- **실시간 대화**: AI 캐릭터와의 자연스러운 대화
- **캐릭터 개성**: 각 캐릭터만의 독특한 성격과 말투
- **컨텍스트 기억**: 이전 대화 내용을 기억하는 지능적인 AI
- **감정 표현**: 다양한 감정과 반응을 보이는 생동감 있는 캐릭터

### 🎨 스토리 생성
- **직관적인 에디터**: 쉽고 간편한 스토리 작성 도구
- **캐릭터 설정**: 상세한 캐릭터 프로필과 배경 설정
- **미디어 업로드**: 이미지와 오디오로 풍부한 스토리 제작
- **미리보기**: 실시간으로 확인할 수 있는 스토리 미리보기

### 📱 사용자 경험
- **반응형 디자인**: 모바일과 데스크톱 모든 기기에서 최적화
- **다크 테마**: 눈에 편안한 어두운 테마
- **부드러운 애니메이션**: 자연스러운 전환 효과
- **직관적인 네비게이션**: 쉽고 빠른 화면 이동

## 🛠️ 기술 스택

- **Frontend**: React 18 + TypeScript
- **스타일링**: Tailwind CSS
- **아이콘**: Lucide React
- **빌드 도구**: Vite
- **상태 관리**: React Hooks + Local Storage
- **타입 안정성**: TypeScript로 완전한 타입 지원

## 🚀 시작하기

### 필수 요구사항
- Node.js 18.0.0 이상
- npm 또는 yarn

### 설치 및 실행

1. **저장소 클론**
   ```bash
   git clone https://github.com/biskettime/echostory-react-web.git
   cd echostory-react-web
   ```

2. **의존성 설치**
   ```bash
   npm install
   ```

3. **AI API 설정**
   ```bash
   # 로컬 AI API 사용 (기본값)
   VITE_AI_BASE_URL="http://192.168.0.40:1234/v1"
   VITE_AI_API_KEY=""
   VITE_AI_MODEL=""
   
   # 또는 NVIDIA API 사용
   VITE_AI_BASE_URL="https://integrate.api.nvidia.com/v1"
   VITE_AI_API_KEY="your-nvidia-api-key"
   VITE_AI_MODEL="meta/llama-3.1-70b-instruct"
   ```

4. **개발 서버 실행**
   ```bash
   # 환경변수와 함께 실행
   VITE_AI_BASE_URL="http://192.168.0.40:1234/v1" npm run dev
   ```

5. **브라우저에서 확인**
   - 로컬: http://localhost:3000
   - 네트워크: http://192.168.0.40:3000

### 빌드 및 배포

```bash
# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

## 📁 프로젝트 구조

```
src/
├── components/          # React 컴포넌트
│   ├── ui/             # 재사용 가능한 UI 컴포넌트
│   ├── HomeScreen.tsx  # 메인 홈 화면
│   ├── ChatScreen.tsx  # AI 채팅 화면
│   └── ...
├── data/               # 데이터 관리
│   ├── stories/        # 스토리 데이터 및 관리
│   └── chatSessions.ts # 채팅 세션 관리
├── styles/             # 전역 스타일
└── utils/              # 유틸리티 함수
```

## 🎯 주요 컴포넌트

### HomeScreen
- 스토리 탐색 및 검색
- 인기/신규 스토리 표시
- 카테고리별 필터링

### ChatScreen
- AI 캐릭터와의 실시간 채팅
- 메시지 히스토리 관리
- 타이핑 애니메이션

### ActivityScreen
- 사용자 활동 기록
- 채팅 히스토리
- 즐겨찾기 및 좋아요

### StoryCreationScreen
- 새로운 스토리 작성
- 캐릭터 설정 및 관리
- 미디어 업로드

## 🌐 다국어 지원

현재 한국어를 기본으로 지원하며, 영어 버전도 별도로 제공됩니다.

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 📞 연락처

프로젝트 관련 문의나 제안사항이 있으시면 언제든 연락해 주세요.

---

**EchoStory** - 당신만의 특별한 이야기를 만들어보세요! ✨