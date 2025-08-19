import { useState } from 'react';
import svgPaths from '../imports/svg-fuyxpz1u4e';
import { edgeTTS, EDGE_KOREAN_VOICES, EDGE_ENGLISH_VOICES } from '../services/edgeTTSService';

interface Voice {
  id: number;
  name: string;
  displayName: string;
  tags: string[];
  gender: 'female' | 'male';
  locale: string;
  selected?: boolean;
}

interface VoiceSettingsModalProps {
  onClose: () => void;
  currentVoice?: string;
  onVoiceSelect?: (voiceName: string) => void;
}

export function VoiceSettingsModal({ onClose, currentVoice = "ko-KR-SunHiNeural", onVoiceSelect }: VoiceSettingsModalProps) {
  const [selectedVoice, setSelectedVoice] = useState(currentVoice);
  const [isPlaying, setIsPlaying] = useState<string | null>(null);

  // Edge TTS 실제 사용 가능한 음성 목록 (전체)
  const voices: Voice[] = [
    // 한국어 음성 (모든 사용 가능한 음성)
    { 
      id: 1, 
      name: "ko-KR-SunHiNeural", 
      displayName: "선희",
      tags: ["#자연스러움", "#여성"], 
      gender: "female",
      locale: "ko-KR"
    },
    { 
      id: 2, 
      name: "ko-KR-InJoonNeural", 
      displayName: "인준",
      tags: ["#차분함", "#남성"], 
      gender: "male",
      locale: "ko-KR"
    },
    {
      id: 3,
      name: "ko-KR-YuJinNeural",
      displayName: "유진",
      tags: ["#밝음", "#여성"],
      gender: "female",
      locale: "ko-KR"
    },
    {
      id: 4,
      name: "ko-KR-BongJinNeural",
      displayName: "봉진",
      tags: ["#활기참", "#남성"],
      gender: "male",
      locale: "ko-KR"
    },
    {
      id: 5,
      name: "ko-KR-GookMinNeural",
      displayName: "국민",
      tags: ["#진중함", "#남성"],
      gender: "male",
      locale: "ko-KR"
    },
    {
      id: 6,
      name: "ko-KR-JiMinNeural",
      displayName: "지민",
      tags: ["#친근함", "#여성"],
      gender: "female",
      locale: "ko-KR"
    },
    { 
      id: 7, 
      name: "ko-KR-HyunsuMultilingualNeural", 
      displayName: "현수",
      tags: ["#다국어", "#남성"], 
      gender: "male",
      locale: "ko-KR"
    },
    // 영어 음성
    { 
      id: 8, 
      name: "en-US-AriaNeural", 
      displayName: "Aria",
      tags: ["#Natural", "#Female"], 
      gender: "female",
      locale: "en-US"
    },
    { 
      id: 9, 
      name: "en-US-GuyNeural", 
      displayName: "Guy",
      tags: ["#Natural", "#Male"], 
      gender: "male",
      locale: "en-US"
    },
    { 
      id: 10, 
      name: "en-US-JennyNeural", 
      displayName: "Jenny",
      tags: ["#Friendly", "#Female"], 
      gender: "female",
      locale: "en-US"
    },
    { 
      id: 11, 
      name: "en-US-EricNeural", 
      displayName: "Eric",
      tags: ["#Professional", "#Male"], 
      gender: "male",
      locale: "en-US"
    },
    {
      id: 12,
      name: "en-US-ChristopherNeural",
      displayName: "Christopher",
      tags: ["#Warm", "#Male"],
      gender: "male",
      locale: "en-US"
    },
    {
      id: 13,
      name: "en-US-EmmaNeural",
      displayName: "Emma",
      tags: ["#Clear", "#Female"],
      gender: "female",
      locale: "en-US"
    },
    {
      id: 14,
      name: "en-US-MichelleNeural",
      displayName: "Michelle",
      tags: ["#Cheerful", "#Female"],
      gender: "female",
      locale: "en-US"
    },
    {
      id: 15,
      name: "en-US-RogerNeural",
      displayName: "Roger",
      tags: ["#Mature", "#Male"],
      gender: "male",
      locale: "en-US"
    }
  ];

  const handleVoiceSelect = (voice: Voice) => {
    setSelectedVoice(voice.name);
    // Edge TTS 서비스에도 음성 설정
    edgeTTS.setVoice(voice.name);
  };

  const handleConfirm = () => {
    onVoiceSelect?.(selectedVoice);
    onClose();
  };

  const handlePlayVoice = async (voice: Voice) => {
    // 이미 재생 중이면 중지
    if (isPlaying === voice.name) {
      edgeTTS.stop();
      setIsPlaying(null);
      return;
    }

    // 다른 음성이 재생 중이면 먼저 중지
    if (isPlaying) {
      edgeTTS.stop();
    }

    // 테스트 텍스트 생성
    const testText = voice.locale.startsWith('ko') 
      ? `안녕하세요. 저는 ${voice.displayName}입니다. 이 음성이 마음에 드시나요?`
      : `Hello! I'm ${voice.displayName}. How does this voice sound to you?`;
    
    console.log(`🎵 Playing voice sample for: ${voice.displayName}`);
    setIsPlaying(voice.name);
    
    try {
      // Edge TTS로 재생 (콜백으로 완료 감지)
      await edgeTTS.speak(testText, voice.name, () => {
        // 재생 완료 시 상태 초기화
        setIsPlaying(null);
      });
    } catch (error) {
      console.error('❌ Failed to play voice sample:', error);
      setIsPlaying(null);
    }
  };

  // 한국어와 영어 음성 분리
  const koreanVoices = voices.filter(v => v.locale.startsWith('ko'));
  const englishVoices = voices.filter(v => v.locale.startsWith('en'));

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end justify-center">
      <div className="w-full max-w-[375px] bg-[#1f1f1f] rounded-t-lg flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="bg-[#1f1f1f] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full">
          <div className="relative size-full">
            <div className="box-border content-stretch flex flex-col items-start justify-start pb-2.5 pt-[15px] px-5 relative w-full">
              <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_KR:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-[rgba(255,255,255,0.85)] text-left w-full">
                  <p className="block leading-[24px]">Edge TTS 음성 설정</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Voice List Container */}
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-0 relative shrink-0 w-full">
          {/* Scrollable Voice List */}
          <div className="h-[400px] max-h-[400px] overflow-auto relative w-full px-5">
            {/* Korean Voices Section */}
            <div className="mb-4">
              <div className="text-[rgba(255,255,255,0.5)] text-xs mb-2 font-semibold">한국어 음성</div>
              {koreanVoices.map((voice) => (
                <button
                  key={voice.id}
                  onClick={() => handleVoiceSelect(voice)}
                  className={`w-full box-border content-stretch flex flex-row items-center justify-between px-4 py-3 mb-2 rounded-lg hover:bg-[rgba(255,255,255,0.05)] transition-colors ${
                    selectedVoice === voice.name
                      ? 'bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.64)] border-solid'
                      : 'bg-[rgba(255,255,255,0.02)]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {/* Voice Name */}
                    <div className="text-left">
                      <div className="font-bold text-[14px] text-[rgba(255,255,255,0.85)]">
                        {voice.displayName}
                      </div>
                      <div className="text-[12px] text-[#666666]">
                        {voice.tags.join(' ')}
                      </div>
                    </div>
                  </div>

                  {/* Play/Test Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePlayVoice(voice);
                    }}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-md transition-all ${
                      isPlaying === voice.name 
                        ? 'bg-[rgba(255,255,255,0.15)] border border-[rgba(255,255,255,0.3)]' 
                        : 'bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)]'
                    }`}
                    title={isPlaying === voice.name ? "재생 중..." : "음성 테스트"}
                  >
                    <div className="w-4 h-4">
                      {isPlaying === voice.name ? (
                        // Sound wave animation when playing
                        <div className="flex items-center justify-center h-full gap-0.5">
                          <div className="w-0.5 bg-white animate-pulse" style={{height: '60%', animationDelay: '0ms'}}></div>
                          <div className="w-0.5 bg-white animate-pulse" style={{height: '100%', animationDelay: '150ms'}}></div>
                          <div className="w-0.5 bg-white animate-pulse" style={{height: '80%', animationDelay: '300ms'}}></div>
                          <div className="w-0.5 bg-white animate-pulse" style={{height: '70%', animationDelay: '450ms'}}></div>
                        </div>
                      ) : (
                        // Play icon when not playing
                        <svg viewBox="0 0 24 24" fill="rgba(255,255,255,0.85)" className="w-full h-full">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      )}
                    </div>
                    <span className="text-xs text-[rgba(255,255,255,0.7)]">
                      {isPlaying === voice.name ? "중지" : "테스트"}
                    </span>
                  </button>
                </button>
              ))}
            </div>

            {/* English Voices Section */}
            <div className="mb-4">
              <div className="text-[rgba(255,255,255,0.5)] text-xs mb-2 font-semibold">English Voices</div>
              {englishVoices.map((voice) => (
                <button
                  key={voice.id}
                  onClick={() => handleVoiceSelect(voice)}
                  className={`w-full box-border content-stretch flex flex-row items-center justify-between px-4 py-3 mb-2 rounded-lg hover:bg-[rgba(255,255,255,0.05)] transition-colors ${
                    selectedVoice === voice.name
                      ? 'bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.64)] border-solid'
                      : 'bg-[rgba(255,255,255,0.02)]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {/* Voice Name */}
                    <div className="text-left">
                      <div className="font-bold text-[14px] text-[rgba(255,255,255,0.85)]">
                        {voice.displayName}
                      </div>
                      <div className="text-[12px] text-[#666666]">
                        {voice.tags.join(' ')}
                      </div>
                    </div>
                  </div>

                  {/* Play/Test Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePlayVoice(voice);
                    }}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-md transition-all ${
                      isPlaying === voice.name 
                        ? 'bg-[rgba(255,255,255,0.15)] border border-[rgba(255,255,255,0.3)]' 
                        : 'bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)]'
                    }`}
                    title={isPlaying === voice.name ? "재생 중..." : "음성 테스트"}
                  >
                    <div className="w-4 h-4">
                      {isPlaying === voice.name ? (
                        // Sound wave animation when playing
                        <div className="flex items-center justify-center h-full gap-0.5">
                          <div className="w-0.5 bg-white animate-pulse" style={{height: '60%', animationDelay: '0ms'}}></div>
                          <div className="w-0.5 bg-white animate-pulse" style={{height: '100%', animationDelay: '150ms'}}></div>
                          <div className="w-0.5 bg-white animate-pulse" style={{height: '80%', animationDelay: '300ms'}}></div>
                          <div className="w-0.5 bg-white animate-pulse" style={{height: '70%', animationDelay: '450ms'}}></div>
                        </div>
                      ) : (
                        // Play icon when not playing
                        <svg viewBox="0 0 24 24" fill="rgba(255,255,255,0.85)" className="w-full h-full">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      )}
                    </div>
                    <span className="text-xs text-[rgba(255,255,255,0.7)]">
                      {isPlaying === voice.name ? "중지" : "테스트"}
                    </span>
                  </button>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="box-border content-stretch flex flex-col gap-[15px] items-start justify-start pb-[30px] pt-[15px] px-5 relative shrink-0 w-full">
          {/* Confirm Button */}
          <button
            onClick={handleConfirm}
            className="bg-[#3a3a3a] box-border content-stretch flex flex-row items-center justify-center px-[10px] py-[15px] relative rounded-[10px] shrink-0 w-full hover:bg-[#4a4a4a] transition-colors"
          >
            <div className="flex flex-col font-['Inter:SemiBold',_'Noto_Sans_KR:SemiBold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.85)] text-center text-nowrap">
              <p className="block leading-[26.61px] whitespace-pre">확인</p>
            </div>
          </button>

          {/* Cancel Button */}
          <button
            onClick={onClose}
            className="box-border content-stretch flex flex-row items-center justify-center px-[10px] py-[15px] relative rounded-[10px] shrink-0 w-full hover:bg-[rgba(255,255,255,0.05)] transition-colors"
          >
            <div className="flex flex-col font-['Inter:SemiBold',_'Noto_Sans_KR:SemiBold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.85)] text-center text-nowrap">
              <p className="block leading-[26.61px] whitespace-pre">취소</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}