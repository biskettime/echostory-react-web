import { AlertTriangle } from 'lucide-react';
import { Button } from './ui/button';

interface SafetyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export function SafetyModal({ isOpen, onClose, onConfirm }: SafetyModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-[#2a2b2b] rounded-2xl p-6 w-full max-w-sm mx-4">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
            <AlertTriangle size={20} className="text-white" />
          </div>
          <h2 className="text-white font-medium text-lg">성인 인증 필요</h2>
        </div>
        
        <p className="text-[#acacac] text-sm mb-6 leading-relaxed">
          성인/본인인증이 필요합니다. 인증하시겠습니까?
        </p>
        
        <div className="flex space-x-3">
          <Button
            variant="secondary"
            onClick={onClose}
            className="flex-1 bg-[#404040] hover:bg-[#4a4a4a] text-white border-0 h-11 rounded-xl font-medium"
          >
            취소
          </Button>
          <Button
            onClick={onConfirm}
            className="flex-1 bg-[#ff9500] hover:bg-[#e8850e] text-white border-0 h-11 rounded-xl font-medium"
          >
            성인인증
          </Button>
        </div>
      </div>
    </div>
  );
}