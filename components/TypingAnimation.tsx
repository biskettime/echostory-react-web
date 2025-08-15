import { useState, useEffect } from 'react';
import { renderFormattedText, parseMessageText, TextSegment } from '../utils/textFormatter';

interface TypingAnimationProps {
  text: string;
  onComplete?: () => void;
  speed?: number;
  showCursor?: boolean;
}

export function TypingAnimation({ text, onComplete, speed = 50, showCursor = true }: TypingAnimationProps) {
  const [segments, setSegments] = useState<TextSegment[]>([]);
  const [displaySegments, setDisplaySegments] = useState<TextSegment[]>([]);
  const [currentSegmentIndex, setCurrentSegmentIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  // Parse text into segments on mount
  useEffect(() => {
    console.log('🎬 TypingAnimation: Parsing text:', text);
    const parsedSegments = parseMessageText(text);
    console.log('🎬 TypingAnimation: Parsed segments:', parsedSegments);
    setSegments(parsedSegments);
  }, [text]);

  useEffect(() => {
    if (segments.length === 0) return;

    if (isComplete) return;

    // Check if we've finished all segments
    if (currentSegmentIndex >= segments.length) {
      setIsComplete(true);
      onComplete?.();
      return;
    }

    const currentSegment = segments[currentSegmentIndex];
    const segmentLength = currentSegment.content.length;

    if (currentCharIndex <= segmentLength) {
      const timer = setTimeout(() => {
        // Update display segments
        const newDisplaySegments = [...segments.slice(0, currentSegmentIndex)];
        
        // Add current segment with partial content
        if (currentCharIndex > 0) {
          newDisplaySegments.push({
            ...currentSegment,
            content: currentSegment.content.slice(0, currentCharIndex)
          });
        }

        setDisplaySegments(newDisplaySegments);

        if (currentCharIndex < segmentLength) {
          setCurrentCharIndex(currentCharIndex + 1);
        } else {
          // Move to next segment
          setCurrentSegmentIndex(currentSegmentIndex + 1);
          setCurrentCharIndex(0);
        }
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [segments, currentSegmentIndex, currentCharIndex, isComplete, speed, onComplete]);

  return (
    <span>
      {displaySegments.map((segment, index) => {
        const needsSpace = index > 0 && segment.content.trim() !== '';
        
        switch (segment.type) {
          case 'narration': // !3인칭묘사체! - 회색 기울임체
            return (
              <span key={index}>
                {needsSpace && ' '}
                <span 
                  className="italic"
                  style={{ color: 'rgba(156, 163, 175, 0.8)' }}
                >
                  {segment.content}
                </span>
              </span>
            );
          
          case 'emotion': // *감정행동묘사* - 하늘색 투명 기울임체
            return (
              <span key={index}>
                {needsSpace && ' '}
                <span 
                  className="italic"
                  style={{ color: 'rgba(135, 206, 235, 0.7)' }}
                >
                  {segment.content}
                </span>
              </span>
            );
          
          case 'dialogue': // "대화체" - 레몬색 + 매우 약한 볼드
            return (
              <span key={index}>
                {needsSpace && ' '}
                <span style={{ color: '#FFFF99', fontWeight: '450' }}>
                  {segment.content}
                </span>
              </span>
            );
          
          case 'normal': // 일반 텍스트 - 레몬색 (일반 대화)
          default:
            return (
              <span key={index} style={{ color: '#FFFF99' }}>
                {segment.content}
              </span>
            );
        }
      })}
      {showCursor && !isComplete && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  );
}