import { useState, useEffect } from 'react';

interface TypingAnimationProps {
  text: string;
  onComplete?: () => void;
  speed?: number;
  showCursor?: boolean;
}

export function TypingAnimation({ text, onComplete, speed = 50, showCursor = true }: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState('');
  const [showTypingDots, setShowTypingDots] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex === 0) {
      // Show typing dots for 1.5 seconds before starting to type
      const dotsTimer = setTimeout(() => {
        setShowTypingDots(false);
        setCurrentIndex(1);
      }, 1500);

      return () => clearTimeout(dotsTimer);
    }

    if (currentIndex > 0 && currentIndex <= text.length) {
      const timer = setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex));
        setCurrentIndex(currentIndex + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else if (currentIndex > text.length) {
      onComplete?.();
    }
  }, [currentIndex, text, speed, onComplete]);

  if (showTypingDots) {
    return (
      <div className="flex items-center space-x-1">
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-[rgba(255,255,255,0.6)] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-[rgba(255,255,255,0.6)] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-[rgba(255,255,255,0.6)] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    );
  }

  return (
    <span>
      {displayText}
      {showCursor && currentIndex <= text.length && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  );
}