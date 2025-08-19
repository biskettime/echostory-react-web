import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { t, addLanguageChangeListener, removeLanguageChangeListener } from '../utils/i18n';
import svgPaths from "../imports/svg-zujabktrkg";

interface ProfileCreationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateProfile: (profile: { name: string; info: string; image?: string }) => void;
}

export function ProfileCreationModal({ isOpen, onClose, onCreateProfile }: ProfileCreationModalProps) {
  const [name, setName] = useState('');
  const [info, setInfo] = useState('');
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [forceUpdate, setForceUpdate] = useState(0);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'unset';
      };
    }
  }, [isOpen]);

  // Language change listener
  useEffect(() => {
    const handleLanguageChange = () => {
      setForceUpdate(prev => prev + 1);
    };

    addLanguageChangeListener(handleLanguageChange);
    return () => removeLanguageChangeListener(handleLanguageChange);
  }, []);

  if (!isOpen || !mounted) return null;

  const handleSubmit = () => {
    if (name.trim()) {
      onCreateProfile({
        name: name.trim(),
        info: info.trim(),
        image: profileImage || undefined
      });
      setName('');
      setInfo('');
      setProfileImage(null);
      onClose();
    }
  };

  const handleCancel = () => {
    setName('');
    setInfo('');
    setProfileImage(null);
    onClose();
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        alert(t('profile.imageSizeError'));
        return;
      }
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setProfileImage(null);
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
            <h2 className="text-white text-lg font-semibold">{t('profile.addNewProfile')}</h2>
          </div>

          {/* Form Content */}
          <div className="space-y-6">
            
            {/* Profile Image */}
            <div className="space-y-2">
              <label className="text-white text-sm font-medium">
                {t('profile.profileImage')}
              </label>
              <p className="text-[#999999] text-xs leading-relaxed">
                {t('profile.profileImageDescription')}
              </p>
              
              <div className="flex items-center gap-4">
                {/* Image Preview */}
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-[#2a2a2a] border-2 border-[#424242] overflow-hidden flex items-center justify-center">
                    {profileImage ? (
                      <img 
                        src={profileImage} 
                        alt="Profile" 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <svg className="w-8 h-8 text-[#666666]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    )}
                  </div>
                  {profileImage && (
                    <button
                      onClick={removeImage}
                      className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                    >
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                </div>
                
                {/* Upload Button */}
                <div>
                  <input
                    type="file"
                    id="profile-image-upload"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <label
                    htmlFor="profile-image-upload"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#2a2a2a] hover:bg-[#333333] text-white text-sm rounded-md cursor-pointer transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    {t('profile.uploadImage')}
                  </label>
                  <p className="text-xs text-[#666666] mt-1">
                    {t('profile.maxFileSize')}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Name Field */}
            <div className="space-y-2">
              {/* Label */}
              <label htmlFor="name" className="text-white text-sm font-medium">
                {t('profile.name')}
              </label>
              
              {/* Description */}
              <p className="text-[#999999] text-xs leading-relaxed">
                {t('profile.nameDescription')}
              </p>

              {/* Input Field */}
              <div className="relative">
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t('profile.enterYourName')}
                  className="w-full bg-[#141414] border border-[#424242] rounded-md px-3 py-2.5 text-white text-sm placeholder:text-[#666666] focus:border-[#dc5903] focus:ring-1 focus:ring-[#dc5903]/30 transition-all duration-200 outline-none pr-16"
                  maxLength={20}
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#666666]">
                  {name.length} / 20
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
              onClick={handleSubmit}
              disabled={!name.trim()}
              className="bg-[#dc5903] rounded-md px-4 py-2 text-white text-sm hover:bg-[#e6850e] disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg"
            >
              {t('profile.add')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Use Portal to render modal at document body level
  return createPortal(modalContent, document.body);
}