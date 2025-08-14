import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import svgPaths from "../imports/svg-zujabktrkg";

interface ProfileCreationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateProfile: (profile: { name: string; info: string }) => void;
}

export function ProfileCreationModal({ isOpen, onClose, onCreateProfile }: ProfileCreationModalProps) {
  const [name, setName] = useState('');
  const [info, setInfo] = useState('');
  const [mounted, setMounted] = useState(false);

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

  if (!isOpen || !mounted) return null;

  const handleSubmit = () => {
    if (name.trim()) {
      onCreateProfile({
        name: name.trim(),
        info: info.trim()
      });
      setName('');
      setInfo('');
      onClose();
    }
  };

  const handleCancel = () => {
    setName('');
    setInfo('');
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
            <h2 className="text-white text-lg font-semibold">Add New Profile</h2>
          </div>

          {/* Form Content */}
          <div className="space-y-6">
            
            {/* Name Field */}
            <div className="space-y-2">
              {/* Label */}
              <label htmlFor="name" className="text-white text-sm font-medium">
                Name
              </label>
              
              {/* Description */}
              <p className="text-[#999999] text-xs leading-relaxed">
                The name the character will call you
              </p>

              {/* Input Field */}
              <div className="relative">
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
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
                My Information
              </label>
              
              {/* Description */}
              <p className="text-[#999999] text-xs leading-relaxed">
                Information about yourself that the character will recognize
              </p>

              {/* Textarea Field */}
              <div className="relative">
                <textarea
                  id="info"
                  value={info}
                  onChange={(e) => setInfo(e.target.value)}
                  placeholder="Enter your gender, age, and other information that the character should know about you for more natural conversations."
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
              Cancel
            </button>
            
            <button
              onClick={handleSubmit}
              disabled={!name.trim()}
              className="bg-[#dc5903] rounded-md px-4 py-2 text-white text-sm hover:bg-[#e6850e] disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Use Portal to render modal at document body level
  return createPortal(modalContent, document.body);
}