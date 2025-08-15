import { en } from './translations/en';
import { ko } from './translations/ko';
import { LanguageCode, DEFAULT_LANGUAGE, LANGUAGE_STORAGE_KEY } from './languages';

// 모든 번역 데이터
const translations = {
  en,
  ko
};

// 현재 언어 상태
let currentLanguage: LanguageCode = DEFAULT_LANGUAGE;

// 언어 변경 이벤트 리스너들
const languageChangeListeners: ((language: LanguageCode) => void)[] = [];

// 로컬 스토리지에서 언어 설정 로드
export const loadLanguageFromStorage = (): LanguageCode => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY) as LanguageCode;
    if (saved && translations[saved]) {
      currentLanguage = saved;
      return saved;
    }
  }
  return DEFAULT_LANGUAGE;
};

// 로컬 스토리지에 언어 설정 저장
export const saveLanguageToStorage = (language: LanguageCode): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }
};

// 현재 언어 가져오기
export const getCurrentLanguage = (): LanguageCode => {
  return currentLanguage;
};

// 언어 변경
export const setLanguage = (language: LanguageCode): void => {
  if (translations[language]) {
    currentLanguage = language;
    saveLanguageToStorage(language);
    
    // 모든 리스너에게 언어 변경 알림
    languageChangeListeners.forEach(listener => listener(language));
  }
};

// 언어 변경 리스너 추가
export const addLanguageChangeListener = (listener: (language: LanguageCode) => void): void => {
  languageChangeListeners.push(listener);
};

// 언어 변경 리스너 제거
export const removeLanguageChangeListener = (listener: (language: LanguageCode) => void): void => {
  const index = languageChangeListeners.indexOf(listener);
  if (index > -1) {
    languageChangeListeners.splice(index, 1);
  }
};

// 번역 텍스트 가져오기 (중첩된 키 지원, 매개변수 지원)
export const t = (key: string, params?: { [key: string]: string | number }): string => {
  const keys = key.split('.');
  let value: any = translations[currentLanguage];
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      // 키를 찾을 수 없으면 영어 버전에서 시도
      let fallbackValue: any = translations.en;
      for (const fallbackK of keys) {
        if (fallbackValue && typeof fallbackValue === 'object' && fallbackK in fallbackValue) {
          fallbackValue = fallbackValue[fallbackK];
        } else {
          // 영어에서도 찾을 수 없으면 키 자체를 반환
          return key;
        }
      }
      value = fallbackValue;
      break;
    }
  }
  
  let result = typeof value === 'string' ? value : key;
  
  // 매개변수 치환
  if (params) {
    Object.keys(params).forEach(paramKey => {
      const placeholder = `{{${paramKey}}}`;
      result = result.replace(new RegExp(placeholder, 'g'), String(params[paramKey]));
    });
  }
  
  return result;
};

// 초기화 (앱 시작 시 호출)
export const initializeI18n = (): void => {
  const savedLanguage = loadLanguageFromStorage();
  setLanguage(savedLanguage);
};

// 번역 타입 (TypeScript 지원)
export type TranslationKey = keyof typeof en;

// 사용 가능한 언어 목록 내보내기
export { SUPPORTED_LANGUAGES } from './languages';
export type { LanguageCode } from './languages';
