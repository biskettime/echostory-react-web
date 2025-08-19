/**
 * Kitten TTS Service
 * 초경량 25MB TTS 모델 서비스
 */

export interface KittenVoice {
  id: string;
  name: string;
  gender: string;
}

// Kitten TTS 음성 목록
export const KITTEN_VOICES: KittenVoice[] = [
  { id: 'expr-voice-2-f', name: 'Female Voice 2 (Natural)', gender: 'Female' },
  { id: 'expr-voice-4-f', name: 'Female Voice 4 (Friendly)', gender: 'Female' },
  { id: 'expr-voice-6-f', name: 'Female Voice 6 (Energetic)', gender: 'Female' },
  { id: 'expr-voice-8-f', name: 'Female Voice 8 (Calm)', gender: 'Female' },
  { id: 'expr-voice-1-m', name: 'Male Voice 1 (Deep)', gender: 'Male' },
  { id: 'expr-voice-3-m', name: 'Male Voice 3 (Natural)', gender: 'Male' },
  { id: 'expr-voice-5-m', name: 'Male Voice 5 (Friendly)', gender: 'Male' },
  { id: 'expr-voice-7-m', name: 'Male Voice 7 (Young)', gender: 'Male' }
];

export class KittenTTSService {
  private static instance: KittenTTSService;
  private audioElement: HTMLAudioElement | null = null;
  private isPlaying = false;
  private currentVoice = 'expr-voice-2-f';
  
  private constructor() {
    this.audioElement = new Audio();
  }
  
  static getInstance(): KittenTTSService {
    if (!KittenTTSService.instance) {
      KittenTTSService.instance = new KittenTTSService();
    }
    return KittenTTSService.instance;
  }
  
  setVoice(voiceId: string) {
    this.currentVoice = voiceId;
  }
  
  /**
   * 한국어를 영어로 간단히 번역 (임시 해결책)
   * Kitten TTS는 현재 영어만 지원
   */
  private translateKoreanToEnglish(text: string): string {
    // 한국어 감지
    const hasKorean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(text);
    
    if (!hasKorean) {
      return text; // 이미 영어
    }
    
    // 간단한 번역 매핑 (실제로는 번역 API 사용 필요)
    const translations: { [key: string]: string } = {
      '안녕하세요': 'Hello',
      '안녕': 'Hi',
      '감사합니다': 'Thank you',
      '고마워': 'Thanks',
      '네': 'Yes',
      '아니요': 'No',
      '좋아': 'Good',
      '좋아요': 'I like it',
      '사랑해': 'I love you',
      '미안해': 'Sorry',
      '괜찮아': "It's okay",
      // 더 많은 번역 추가 가능
    };
    
    // 매칭되는 번역이 있으면 사용
    for (const [korean, english] of Object.entries(translations)) {
      if (text.includes(korean)) {
        return text.replace(korean, english);
      }
    }
    
    // 번역이 없으면 기본 메시지
    console.warn('⚠️ Korean text detected but no translation available. Using default English message.');
    return "This is a message in Korean. Kitten TTS currently supports English only.";
  }
  
  async speak(text: string, voiceId?: string): Promise<void> {
    try {
      // Stop any current playback
      this.stop();
      
      const voice = voiceId || this.currentVoice;
      
      // 한국어를 영어로 변환 (필요시)
      const englishText = this.translateKoreanToEnglish(text);
      
      console.log(`🐱 Kitten TTS: "${englishText.substring(0, 50)}..." with voice ${voice}`);
      
      // Kitten TTS API 호출
      const response = await fetch('/api/kitten-tts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: englishText,
          voice: voice,
          speed: 1.0
        })
      });
      
      if (!response.ok) {
        throw new Error('Kitten TTS API request failed');
      }
      
      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
      
      if (this.audioElement) {
        this.audioElement.src = audioUrl;
        await this.audioElement.play();
        this.isPlaying = true;
        
        this.audioElement.onended = () => {
          this.isPlaying = false;
          URL.revokeObjectURL(audioUrl);
          console.log('🐱 Kitten TTS playback completed');
        };
        
        this.audioElement.onerror = (e) => {
          console.error('❌ Kitten TTS playback error:', e);
          this.isPlaying = false;
          URL.revokeObjectURL(audioUrl);
          // Fallback to browser TTS
          this.fallbackToBrowserTTS(text);
        };
      }
    } catch (error) {
      console.error('❌ Kitten TTS error:', error);
      // Fallback to browser TTS
      this.fallbackToBrowserTTS(text);
    }
  }
  
  private fallbackToBrowserTTS(text: string) {
    // Browser TTS is disabled per user request
    console.log('🔇 Browser TTS is disabled - no fallback available');
    // Do nothing
  }
  
  stop() {
    if (this.audioElement && this.isPlaying) {
      this.audioElement.pause();
      this.audioElement.currentTime = 0;
      this.isPlaying = false;
    }
    // Browser TTS is disabled - no need to cancel
  }
  
  async testVoice(voiceId: string): Promise<void> {
    const testText = "Hello! This is a test of Kitten TTS. How does this voice sound?";
    await this.speak(testText, voiceId);
  }
  
  getAvailableVoices(): KittenVoice[] {
    return KITTEN_VOICES;
  }
  
  isServerAvailable(): Promise<boolean> {
    return fetch('/api/kitten-tts/voices')
      .then(res => res.ok)
      .catch(() => false);
  }
}

// Export singleton instance
export const kittenTTS = KittenTTSService.getInstance();
