import { useState, useEffect } from 'react';
import React from 'react';

interface TypingAnimationProps {
  text: string;
  onComplete?: () => void;
  onUpdate?: (currentText: string) => void;
  speed?: number;
  showCursor?: boolean;
}

export function TypingAnimation({ text, onComplete, onUpdate, speed = 50, showCursor = true }: TypingAnimationProps) {
  const [segments, setSegments] = useState<string[]>([]);
  const [currentSegmentIndex, setCurrentSegmentIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [displayedSegments, setDisplayedSegments] = useState<string[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  // Initialize text processing - split by sentence endings
  useEffect(() => {
    console.log('🎬 TypingAnimation: Processing text:', text);
    
    // Handle undefined or empty text
    if (!text) {
      setSegments([]);
      setIsComplete(true);
      return;
    }
    
    // Handle literal \n characters and convert them to actual line breaks
    let processedText = text.replace(/\\n\\n/g, '\n\n').replace(/\\n/g, '\n');
    // Handle escaped quotes
    processedText = processedText.replace(/\\"/g, '"');
    
    // Split into sentences based on ending patterns
    const textSegments = splitIntoSentences(processedText);
    console.log('🎬 TypingAnimation: Split into sentence segments:', textSegments);
    
    setSegments(textSegments);
    setCurrentSegmentIndex(0);
    setCurrentCharIndex(0);
    setDisplayedSegments([]);
    setIsComplete(false);
  }, [text]);

  // Function to split text into sentences based on ending patterns
  const splitIntoSentences = (text: string): string[] => {
    const sentences: string[] = [];
    let currentSentence = '';
    let inQuotes = false;
    
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      currentSentence += char;
      
      // Check if we're starting a quote
      if (char === '"' && !inQuotes) {
        inQuotes = true;
        continue;
      }
      
      // Check for sentence endings
      if (char === ')' || (char === '.' && !inQuotes)) {
        // Special case: if sentence starts with *, it should end with .*
        if (currentSentence.trim().startsWith('*') && i + 1 < text.length && text[i + 1] === '*') {
          // This is a *.* pattern, add the closing * and end sentence
          currentSentence += text[i + 1]; // Add the closing *
          i++; // Skip the * in next iteration
          sentences.push(currentSentence.trim());
          currentSentence = '';
          inQuotes = false;
          
          // Skip any following whitespace or line breaks
          while (i + 1 < text.length && /\s/.test(text[i + 1])) {
            i++;
            if (text[i] === '\n') {
              sentences.push('\n'); // Preserve line breaks as separate segments
            }
          }
        } else if (!currentSentence.trim().startsWith('*')) {
          // Regular sentence ending with . (not starting with *)
          sentences.push(currentSentence.trim());
          currentSentence = '';
          inQuotes = false;
          
          // Skip any following whitespace or line breaks
          while (i + 1 < text.length && /\s/.test(text[i + 1])) {
            i++;
            if (text[i] === '\n') {
              sentences.push('\n'); // Preserve line breaks as separate segments
            }
          }
        }
        // If starts with * but doesn't have .* pattern, continue typing
      } else if (char === '*' && currentSentence.trim().startsWith('*') && currentSentence.length > 1) {
        // Special case: sentence starts with * and ends with * (without .)
        sentences.push(currentSentence.trim());
        currentSentence = '';
        inQuotes = false;
        
        // Skip any following whitespace or line breaks
        while (i + 1 < text.length && /\s/.test(text[i + 1])) {
          i++;
          if (text[i] === '\n') {
            sentences.push('\n'); // Preserve line breaks as separate segments
          }
        }
      } else if (char === '.' && inQuotes && i + 1 < text.length && text[i + 1] === '"') {
        // Special case: quote ending with ."
        currentSentence += text[i + 1]; // Add the closing quote
        i++; // Skip the quote in next iteration
        sentences.push(currentSentence.trim());
        currentSentence = '';
        inQuotes = false;
        
        // Skip any following whitespace or line breaks
        while (i + 1 < text.length && /\s/.test(text[i + 1])) {
          i++;
          if (text[i] === '\n') {
            sentences.push('\n'); // Preserve line breaks as separate segments
          }
        }
      }
    }
    
    // Add any remaining text
    if (currentSentence.trim()) {
      sentences.push(currentSentence.trim());
    }
    
    return sentences.filter(s => s.length > 0);
  };

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
      
      // Call onUpdate callback with current text
      if (onUpdate) {
        const currentText = newDisplayedSegments.join(' ');
        onUpdate(currentText);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [segments, currentSegmentIndex, currentCharIndex, displayedSegments, isComplete, speed, onComplete, onUpdate]);

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
          {segment === '\n' ? <br /> : renderSegmentWithStyling(segment)}
        </React.Fragment>
      ))}
      {showCursor && !isComplete && (
        <span className="animate-pulse" style={{ color: 'white' }}>|</span>
      )}
    </span>
  );
}