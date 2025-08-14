import { AlertTriangle } from 'lucide-react';

interface PlayUnavailableModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PlayUnavailableModal({ isOpen, onClose }: PlayUnavailableModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-[rgba(0,0,0,0.7)] backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative w-full max-w-[340px] mx-4">
        {/* Modal Content - Matching the screenshot design */}
        <div className="bg-[#2a2a2a] relative rounded-lg border border-[rgba(255,255,255,0.1)] shadow-lg">
          <div className="px-6 py-5">
            {/* Warning Icon and Message */}
            <div className="flex items-start space-x-3 mb-4">
              <div className="flex-shrink-0 w-6 h-6 bg-[#ff9500] rounded-full flex items-center justify-center mt-0.5">
                <AlertTriangle className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-white text-[15px] font-medium leading-[22px] mb-2">
                  Cannot play yet.
                </h3>
                <p className="text-[rgba(255,255,255,0.7)] text-[14px] font-light leading-[20px]">
                  You can play after the story is first published.
                </p>
              </div>
            </div>
            
            {/* Confirm Button */}
            <div className="flex justify-end">
              <button
                onClick={onClose}
                className="bg-[#dc5903] hover:bg-[#e6850e] text-white px-4 py-2 rounded-md text-[14px] font-medium transition-colors min-w-[80px]"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}