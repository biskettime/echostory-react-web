/**
 * Edge TTS Service
 * Microsoft Edge의 무료 TTS API를 사용하는 서비스
 */

export interface EdgeVoice {
  name: string;
  locale: string;
  gender: string;
  displayName: string;
}

// 인기 있는 한국어 음성
export const EDGE_KOREAN_VOICES: EdgeVoice[] = [
  {
    name: 'ko-KR-SunHiNeural',
    locale: 'ko-KR',
    gender: 'Female',
    displayName: '선희 (여성, 자연스러움)'
  },
  {
    name: 'ko-KR-InJoonNeural', 
    locale: 'ko-KR',
    gender: 'Male',
    displayName: '인준 (남성, 차분함)'
  },
  {
    name: 'ko-KR-YuJinNeural',
    locale: 'ko-KR', 
    gender: 'Female',
    displayName: '유진 (여성, 밝음)'
  },
  {
    name: 'ko-KR-BongJinNeural',
    locale: 'ko-KR',
    gender: 'Male', 
    displayName: '봉진 (남성, 활기참)'
  },
  {
    name: 'ko-KR-GookMinNeural',
    locale: 'ko-KR',
    gender: 'Male',
    displayName: '국민 (남성, 진중함)'
  },
  {
    name: 'ko-KR-JiMinNeural',
    locale: 'ko-KR',
    gender: 'Female',
    displayName: '지민 (여성, 친근함)'
  }
];

// 영어 음성
export const EDGE_ENGLISH_VOICES: EdgeVoice[] = [
  {
    name: 'en-US-AriaNeural',
    locale: 'en-US',
    gender: 'Female',
    displayName: 'Aria (Female, Natural)'
  },
  {
    name: 'en-US-GuyNeural',
    locale: 'en-US',
    gender: 'Male',
    displayName: 'Guy (Male, Natural)'
  },
  {
    name: 'en-US-JennyNeural',
    locale: 'en-US',
    gender: 'Female',
    displayName: 'Jenny (Female, Friendly)'
  },
  {
    name: 'en-US-EricNeural',
    locale: 'en-US',
    gender: 'Male',
    displayName: 'Eric (Male, Professional)'
  }
];

export class EdgeTTSService {
  private static instance: EdgeTTSService;
  private audioElement: HTMLAudioElement | null = null;
  private isPlaying = false;
  private currentVoice = 'ko-KR-SunHiNeural';
  
  private constructor() {
    this.audioElement = new Audio();
  }
  
  static getInstance(): EdgeTTSService {
    if (!EdgeTTSService.instance) {
      EdgeTTSService.instance = new EdgeTTSService();
    }
    return EdgeTTSService.instance;
  }
  
  setVoice(voiceName: string) {
    this.currentVoice = voiceName;
  }
  
  async speak(text: string, voiceName?: string, onEnd?: () => void): Promise<void> {
    try {
      // Stop any current playback
      this.stop();
      
      const voice = voiceName || this.currentVoice;
      console.log('🎵 Edge TTS speaking with voice:', voice);
      
      // Edge TTS API endpoint (this requires a backend proxy)
      const response = await fetch('/api/edge-tts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text,
          voice,
          rate: "+0%",    // Edge TTS expects string format
          pitch: "+0Hz",  // Edge TTS expects string format  
          volume: "+0%"   // Edge TTS expects string format
        })
      });
      
      if (!response.ok) {
        throw new Error('TTS API request failed');
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
          if (onEnd) {
            onEnd();
          }
        };
      }
    } catch (error) {
      console.error('Edge TTS error:', error);
      // Fallback to browser TTS
      this.fallbackToBrowserTTS(text);
    }
  }
  
  private fallbackToBrowserTTS(text: string) {
    // Browser TTS is disabled - no fallback
    console.log('🔇 Browser TTS is disabled - Edge TTS failed with no fallback');
  }
  
  stop() {
    if (this.audioElement && this.isPlaying) {
      this.audioElement.pause();
      this.audioElement.currentTime = 0;
      this.isPlaying = false;
    }
    // Browser TTS is disabled - no need to cancel
  }
  
  getAvailableVoices(): EdgeVoice[] {
    return [...EDGE_KOREAN_VOICES, ...EDGE_ENGLISH_VOICES];
  }
  
  getKoreanVoices(): EdgeVoice[] {
    return EDGE_KOREAN_VOICES;
  }
  
  getEnglishVoices(): EdgeVoice[] {
    return EDGE_ENGLISH_VOICES;
  }
}

// Export singleton instance
export const edgeTTS = EdgeTTSService.getInstance();
