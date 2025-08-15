import React from 'react';

interface TextSegment {
  type: 'narration' | 'emotion' | 'dialogue' | 'normal';
  content: string;
}

// 텍스트를 파싱하여 다른 타입의 세그먼트로 분리
export const parseMessageText = (text: string): TextSegment[] => {
  const segments: TextSegment[] = [];
  let currentIndex = 0;
  
  // 정규식 패턴들 - 매번 새로 생성하여 상태 문제 방지
  const patterns = [
    { type: 'narration' as const, pattern: '!([^!]+)!' },  // !3인칭묘사체!
    { type: 'emotion' as const, pattern: '\\*([^*]+)\\*' },  // *감정행동묘사*
    { type: 'dialogue' as const, pattern: '"([^"]+)"' }    // "대화체"
  ];
  
  // 모든 매치를 찾아서 위치와 함께 저장
  const matches: Array<{
    type: 'narration' | 'emotion' | 'dialogue';
    content: string;
    start: number;
    end: number;
  }> = [];
  
  patterns.forEach(({ type, pattern }) => {
    const regex = new RegExp(pattern, 'g');
    let match;
    while ((match = regex.exec(text)) !== null) {
      matches.push({
        type,
        content: match[1], // 괄호 안의 내용만
        start: match.index,
        end: match.index + match[0].length
      });
    }
  });
  
  // 시작 위치 기준으로 정렬
  matches.sort((a, b) => a.start - b.start);
  
  // 텍스트를 세그먼트로 분리
  matches.forEach((match) => {
    // 매치 이전의 일반 텍스트 추가
    if (currentIndex < match.start) {
      const normalText = text.slice(currentIndex, match.start).trim();
      if (normalText) {
        segments.push({
          type: 'normal',
          content: normalText
        });
      }
    }
    
    // 매치된 특수 텍스트 추가
    segments.push({
      type: match.type,
      content: match.content
    });
    
    currentIndex = match.end;
  });
  
  // 마지막 남은 일반 텍스트 추가
  if (currentIndex < text.length) {
    const normalText = text.slice(currentIndex).trim();
    if (normalText) {
      segments.push({
        type: 'normal',
        content: normalText
      });
    }
  }
  
  // 매치가 없으면 전체를 일반 텍스트로 처리
  if (segments.length === 0) {
    segments.push({
      type: 'normal',
      content: text
    });
  }
  
  return segments;
};

// 사용자 메시지 전용 포맷터
export const renderUserFormattedText = (text: string): React.ReactNode => {
  const segments: TextSegment[] = [];
  let currentIndex = 0;
  
  // 사용자 메시지용 패턴 - *내용*만 파싱
  const regex = new RegExp('\\*([^*]+)\\*', 'g');
  const matches: Array<{
    content: string;
    start: number;
    end: number;
  }> = [];
  
  let match;
  while ((match = regex.exec(text)) !== null) {
    matches.push({
      content: match[1], // 괄호 안의 내용만
      start: match.index,
      end: match.index + match[0].length
    });
  }
  
  // 시작 위치 기준으로 정렬
  matches.sort((a, b) => a.start - b.start);
  
  // 텍스트를 세그먼트로 분리
  matches.forEach((match) => {
    // 매치 이전의 일반 텍스트 추가
    if (currentIndex < match.start) {
      const normalText = text.slice(currentIndex, match.start).trim();
      if (normalText) {
        segments.push({
          type: 'normal',
          content: normalText
        });
      }
    }
    
    // 매치된 특수 텍스트 추가
    segments.push({
      type: 'emotion',
      content: match.content
    });
    
    currentIndex = match.end;
  });
  
  // 마지막 남은 일반 텍스트 추가
  if (currentIndex < text.length) {
    const normalText = text.slice(currentIndex).trim();
    if (normalText) {
      segments.push({
        type: 'normal',
        content: normalText
      });
    }
  }
  
  // 매치가 없으면 전체를 일반 텍스트로 처리
  if (segments.length === 0) {
    segments.push({
      type: 'normal',
      content: text
    });
  }
  
  console.log('👤 User message formatting:', text);
  console.log('👤 User message segments:', segments);
  
  return segments.map((segment, index) => {
    const needsSpace = index > 0 && segment.content.trim() !== '';
    
    switch (segment.type) {
      case 'emotion': // *내용* - 하늘색 투명 기울임체
        return (
          <span key={index}>
            {needsSpace && ' '}
            <span 
              className="italic"
              style={{ color: 'rgba(135, 206, 235, 0.7)', marginRight: '8px' }}
            >
              {segment.content}
            </span>
          </span>
        );
      
      case 'normal': // 일반 텍스트 - 주황색 세미볼드체 (대화체)
      default:
        return (
          <span key={index} style={{ color: '#FFA500', fontWeight: '600' }}>
            {segment.content}
          </span>
        );
    }
  });
};

// 세그먼트를 React 엘리먼트로 렌더링 (캐릭터 메시지용)
export const renderFormattedText = (text: string): React.ReactNode => {
  const segments = parseMessageText(text);
  console.log('🎨 Formatting text:', text);
  console.log('🎨 Parsed segments:', segments);
  
  return segments.map((segment, index) => {
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
      
      case 'dialogue': // "대화체" - 레몬색 + 아주 약한 볼드
        return (
          <span key={index}>
            {needsSpace && ' '}
            <span style={{ color: '#FFFF99', fontWeight: '500' }}>
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
  });
};
