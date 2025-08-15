import { useState, useEffect } from 'react';
import React from 'react';

interface TypingAnimationProps {
  text: string;
  onComplete?: () => void;
  speed?: number;
  showCursor?: boolean;
}

export function TypingAnimation({ text, onComplete, speed = 50, showCursor = true }: TypingAnimationProps) {
  const [segments, setSegments] = useState<string[]>([]);
  const [currentSegmentIndex, setCurrentSegmentIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [displayedSegments, setDisplayedSegments] = useState<string[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  // Initialize text processing - split by \n\n
  useEffect(() => {
    console.log('🎬 TypingAnimation: Processing text:', text);
    
    // Handle literal \n characters and convert them to actual line breaks
    let processedText = text.replace(/\\n\\n/g, '\n\n').replace(/\\n/g, '\n');
    // Handle escaped quotes
    processedText = processedText.replace(/\\"/g, '"');
    
    // Split by double line breaks (\n\n) to create segments
    const textSegments = processedText.split('\n\n').filter(segment => segment.trim());
    console.log('🎬 TypingAnimation: Split into segments:', textSegments);
    
    setSegments(textSegments);
    setCurrentSegmentIndex(0);
    setCurrentCharIndex(0);
    setDisplayedSegments([]);
    setIsComplete(false);
  }, [text]);

  // Typing animation effect - segment by segment
  useEffect(() => {
    if (isComplete || segments.length === 0) return;

    // Check if we've finished all segments
    if (currentSegmentIndex >= segments.length) {
      setIsComplete(true);
      onComplete?.();
      return;
    }

    const currentSegment = segments[currentSegmentIndex];
    
    // Check if we've finished the current segment
    if (currentCharIndex >= currentSegment.length) {
      // Move to next segment after a brief pause
      const timer = setTimeout(() => {
        setCurrentSegmentIndex(currentSegmentIndex + 1);
        setCurrentCharIndex(0);
      }, speed * 3); // Slightly longer pause between segments
      
      return () => clearTimeout(timer);
    }

    // Type the next character
    const timer = setTimeout(() => {
      const newDisplayedSegments = [...displayedSegments];
      
      // Update the current segment being typed
      if (newDisplayedSegments.length <= currentSegmentIndex) {
        newDisplayedSegments.push('');
      }
      
      newDisplayedSegments[currentSegmentIndex] = currentSegment.slice(0, currentCharIndex + 1);
      setDisplayedSegments(newDisplayedSegments);
      setCurrentCharIndex(currentCharIndex + 1);
    }, speed);

    return () => clearTimeout(timer);
  }, [segments, currentSegmentIndex, currentCharIndex, displayedSegments, isComplete, speed, onComplete]);

  // Function to apply styling to a segment in real-time
  const renderSegmentWithStyling = (segment: string) => {
    if (!segment) return null;
    
    console.log('🎨 [TYPING] Styling segment:', segment, 'starts with *:', segment.startsWith('*'));
    
    // Handle single line breaks within segments
    const lines = segment.split('\n');
    return lines.map((line, lineIndex) => (
      <React.Fragment key={lineIndex}>
        {renderLineWithRealtimeStyling(line)}
        {lineIndex < lines.length - 1 && <br />}
      </React.Fragment>
    ));
  };

  // Function to apply styling in real-time as user types
  const renderLineWithRealtimeStyling = (line: string) => {
    if (!line.trim()) return null;
    
    console.log('🎨 [TYPING] Styling line:', line, 'starts with *:', line.startsWith('*'));
    
    // Real-time styling based on what's been typed so far
    if (line.startsWith('*')) {
      // *3인칭묘사체* - 회색 기울림체 (타이핑 중에도 적용)
      console.log('🎨 [TYPING] Applying narration style');
      return (
        <span className="italic" style={{ color: 'rgba(156, 163, 175, 0.8)' }}>
          {line}
        </span>
      );
    } else if (line.startsWith('(')) {
      // (감정행동묘사) - 하늘색 투명 기울림체 (타이핑 중에도 적용)
      console.log('🎨 [TYPING] Applying emotion style');
      return (
        <span className="italic" style={{ color: 'rgba(135, 206, 235, 0.7)' }}>
          {line}
        </span>
      );
    } else if (line.startsWith('"')) {
      // "대화체" - 레몬색 + 매우 약한 볼드 (타이핑 중에도 적용)
      console.log('🎨 [TYPING] Applying dialogue style');
      return (
        <span style={{ color: '#FFFF99', fontWeight: '450' }}>
          {line}
        </span>
      );
    } else {
      // 일반 텍스트 - 흰색 (타이핑 중에도 적용)
      console.log('🎨 [TYPING] Applying normal white style');
      return (
        <span style={{ color: 'white' }}>
          {line}
        </span>
      );
    }
  };

  return (
    <span>
      {displayedSegments.map((segment, segmentIndex) => (
        <React.Fragment key={segmentIndex}>
          {renderSegmentWithStyling(segment)}
          {segmentIndex < displayedSegments.length - 1 && (
            <>
              <br />
              <br />
            </>
          )}
        </React.Fragment>
      ))}
      {showCursor && !isComplete && (
        <span className="animate-pulse" style={{ color: 'white' }}>|</span>
      )}
    </span>
  );
}