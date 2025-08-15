import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { t, addLanguageChangeListener, removeLanguageChangeListener } from '../utils/i18n';
import svgPaths from '../imports/svg-zujabktrkg';

interface ProfileEditModalProps {
  onClose: () => void;
  onBack: () => void;
  currentNickname?: string;
  currentInfo?: string;
  onSave?: (nickname: string, info: string) => void;
}

export function ProfileEditModal({ 
  onClose, 
  onBack, 
  currentNickname = "Alex", 
  currentInfo = "",
  onSave 
}: ProfileEditModalProps) {
  const [nickname, setNickname] = useState(currentNickname);
  const [info, setInfo] = useState(currentInfo);
  const [mounted, setMounted] = useState(false);
  const [forceUpdate, setForceUpdate] = useState(0);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Language change listener
  useEffect(() => {
    const handleLanguageChange = () => {
      setForceUpdate(prev => prev + 1);
    };

    addLanguageChangeListener(handleLanguageChange);
    return () => removeLanguageChangeListener(handleLanguageChange);
  }, []);

  if (!mounted) return null;

  const handleSave = () => {
    if (nickname.trim()) {
      onSave?.(nickname.trim(), info.trim());
      onClose();
    }
  };

  const handleCancel = () => {
    setNickname(currentNickname);
    setInfo(currentInfo);
    onClose();
  };

  const modalContent = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4" style={{ isolation: 'isolate' }}>
      {/* Enhanced Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleCancel}
      />
      
      {/* Modal Content - Mobile optimized */}
      <div className="relative w-full max-w-md bg-[#1f1f1f] rounded-xl shadow-2xl border border-[#424242]/30 overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={handleCancel}
          className="absolute right-3 top-3 z-10 w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#2a2a2a] transition-colors"
        >
          <svg className="w-4 h-4" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <g>
              <path
                clipRule="evenodd"
                d={svgPaths.pbe04e00}
                fill="white"
                fillOpacity="0.6"
                fillRule="evenodd"
              />
            </g>
          </svg>
        </button>

        <div className="px-6 py-5">
          
          {/* Header */}
          <div className="mb-6">
            <h2 className="text-white text-lg font-semibold">{t('profile.editProfile')}</h2>
          </div>

          {/* Form Content */}
          <div className="space-y-6">
            
            {/* Name Field */}
            <div className="space-y-2">
              {/* Label */}
              <label htmlFor="nickname" className="text-white text-sm font-medium">
                {t('profile.name')}
              </label>
              
              {/* Description */}
              <p className="text-[#999999] text-xs leading-relaxed">
                {t('profile.nameDescription')}
              </p>

              {/* Input Field */}
              <div className="relative">
                <input
                  id="nickname"
                  type="text"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  placeholder={t('profile.enterYourName')}
                  className="w-full bg-[#141414] border border-[#424242] rounded-md px-3 py-2.5 text-white text-sm placeholder:text-[#666666] focus:border-[#dc5903] focus:ring-1 focus:ring-[#dc5903]/30 transition-all duration-200 outline-none pr-16"
                  maxLength={20}
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#666666]">
                  {nickname.length} / 20
                </div>
              </div>
            </div>

            {/* Info Field */}
            <div className="space-y-2">
              {/* Label */}
              <label htmlFor="info" className="text-white text-sm font-medium">
                {t('profile.myInformation')}
              </label>
              
              {/* Description */}
              <p className="text-[#999999] text-xs leading-relaxed">
                {t('profile.myInfoDescription')}
              </p>

              {/* Textarea Field */}
              <div className="relative">
                <textarea
                  id="info"
                  value={info}
                  onChange={(e) => setInfo(e.target.value)}
                  placeholder={t('profile.myInfoPlaceholder')}
                  className="w-full bg-[#141414] border border-[#424242] rounded-md px-3 py-2.5 text-white text-sm placeholder:text-[#666666] resize-none focus:border-[#dc5903] focus:ring-1 focus:ring-[#dc5903]/30 transition-all duration-200 outline-none"
                  maxLength={1000}
                  rows={4}
                />
                <div className="absolute bottom-2 right-2 text-xs text-[#666666]">
                  {info.length} / 1000
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 mt-8">
            <button
              onClick={handleCancel}
              className="bg-[#141414] border border-[#424242] rounded-md px-4 py-2 text-white text-sm hover:bg-[#1a1a1a] transition-colors"
            >
              {t('profile.cancel')}
            </button>
            
            <button
              onClick={handleSave}
              disabled={!nickname.trim()}
              className="bg-[#dc5903] rounded-md px-4 py-2 text-white text-sm hover:bg-[#e6850e] disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg"
            >
              {t('chat.save')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Use Portal to render modal at document body level
  return createPortal(modalContent, document.body);
}