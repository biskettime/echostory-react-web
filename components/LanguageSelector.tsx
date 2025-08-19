import React, { useState, useEffect } from 'react';
import { ChevronDown, Globe } from 'lucide-react';
import { 
  getCurrentLanguage, 
  setLanguage, 
  addLanguageChangeListener, 
  removeLanguageChangeListener,
  SUPPORTED_LANGUAGES,
  t,
  type LanguageCode 
} from '../utils/i18n';

interface LanguageSelectorProps {
  className?: string;
}

export function LanguageSelector({ className = '' }: LanguageSelectorProps) {
  const [currentLang, setCurrentLang] = useState<LanguageCode>(getCurrentLanguage());
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleLanguageChange = (language: LanguageCode) => {
      setCurrentLang(language);
    };

    addLanguageChangeListener(handleLanguageChange);
    return () => removeLanguageChangeListener(handleLanguageChange);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isOpen]);

  const handleLanguageSelect = (langCode: LanguageCode) => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  const currentLanguageInfo = SUPPORTED_LANGUAGES[currentLang];

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.15)] transition-colors text-white"
        title={t('common.language')}
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">
          {currentLanguageInfo.flag} {currentLanguageInfo.name}
        </span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-[rgba(40,40,40,0.95)] backdrop-blur-sm rounded-lg border border-[rgba(255,255,255,0.1)] py-2 min-w-[160px] z-50">
          <div className="text-white/90 text-xs font-medium mb-2 px-3">
            {t('common.language')}
          </div>
          {Object.entries(SUPPORTED_LANGUAGES)
            .filter(([code]) => code !== 'ko') // Hide Korean option
            .map(([code, info]) => (
            <button
              key={code}
              onClick={() => handleLanguageSelect(code as LanguageCode)}
              className={`w-full text-left px-3 py-2 text-sm transition-colors flex items-center gap-3 ${
                currentLang === code
                  ? 'bg-[rgba(11,147,246,0.6)] text-white'
                  : 'text-white/70 hover:bg-[rgba(255,255,255,0.1)] hover:text-white'
              }`}
            >
              <span className="text-base">{info.flag}</span>
              <span>{info.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
