// 지원하는 언어 목록
export const SUPPORTED_LANGUAGES = {
  en: {
    code: 'en',
    name: 'English',
    flag: '🇺🇸'
  },
  ko: {
    code: 'ko',
    name: '한국어',
    flag: '🇰🇷'
  }
} as const;

export type LanguageCode = keyof typeof SUPPORTED_LANGUAGES;

// 기본 언어
export const DEFAULT_LANGUAGE: LanguageCode = 'en';

// 로컬 스토리지 키
export const LANGUAGE_STORAGE_KEY = 'echostory_language';
