import React, { useState, useEffect } from 'react';
import { getCharacterImageWithFallback, getDefaultImage } from '../utils/imageUtils';

interface CharacterImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  characterName: string;
  imageNumber?: number;
  fallbackSrc?: string;
}

/**
 * 캐릭터 이미지를 자동으로 로딩하는 컴포넌트
 * 캐릭터명_번호.png 형태의 이미지를 자동으로 찾아서 표시하고,
 * 없으면 기본 이미지를 표시합니다.
 */
export function CharacterImage({ 
  characterName, 
  imageNumber, 
  fallbackSrc, 
  className, 
  style, 
  alt, 
  ...rest 
}: CharacterImageProps) {
  const [imageSrc, setImageSrc] = useState<string>(fallbackSrc || getDefaultImage());
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!characterName) {
      setImageSrc(fallbackSrc || getDefaultImage());
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setHasError(false);

    // 먼저 클라이언트 스토리지에서 이미지를 찾아보기
    const loadImage = async () => {
      console.log('CharacterImage - Loading image for:', characterName, 'imageNumber:', imageNumber);
      try {
        const { loadCharacterImageFromStorage } = await import('../utils/clientImageStorage');
        
        if (imageNumber) {
          // 특정 번호의 이미지 로드
          console.log('CharacterImage - Trying to load specific image:', characterName, imageNumber);
          const storedImage = await loadCharacterImageFromStorage(characterName, imageNumber);
          if (storedImage) {
            console.log('CharacterImage - Found stored image:', storedImage.substring(0, 50) + '...');
            setImageSrc(storedImage);
            setIsLoading(false);
            return;
          }
        } else {
          // 첫 번째 존재하는 이미지 찾기
          console.log('CharacterImage - Searching for any available image for:', characterName);
          for (let i = 1; i <= 10; i++) {
            const storedImage = await loadCharacterImageFromStorage(characterName, i);
            if (storedImage) {
              console.log('CharacterImage - Found stored image at index', i, ':', storedImage.substring(0, 50) + '...');
              setImageSrc(storedImage);
              setIsLoading(false);
              return;
            }
          }
        }
        
        // 클라이언트 스토리지에 없으면 새로운 분류 시스템으로 시도
        console.log('CharacterImage - No stored image found, trying new classification system for:', characterName);
        const { getCharacterImageWithFallbackNew } = await import('../utils/storyImageMapping');
        const path = await getCharacterImageWithFallbackNew(characterName, imageNumber);
        console.log('CharacterImage - New system path:', path);
        setImageSrc(path);
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading character image:', error);
        console.log('CharacterImage - Using fallback src:', fallbackSrc || getDefaultImage());
        setImageSrc(fallbackSrc || getDefaultImage());
        setIsLoading(false);
        setHasError(true);
      }
    };

    loadImage();
  }, [characterName, imageNumber, fallbackSrc]);

  const handleImageError = () => {
    if (!hasError) {
      setHasError(true);
      setImageSrc(fallbackSrc || getDefaultImage());
    }
  };

  return (
    <img
      src={imageSrc}
      alt={alt || `${characterName} 캐릭터 이미지`}
      className={className}
      style={style}
      onError={handleImageError}
      {...rest}
    />
  );
}

interface CharacterAvatarProps {
  characterName: string;
  imageNumber?: number;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  fallbackSrc?: string;
}

/**
 * 캐릭터 아바타 컴포넌트 (원형 또는 둥근 사각형)
 */
export function CharacterAvatar({ 
  characterName, 
  imageNumber, 
  size = 'md', 
  className = '', 
  fallbackSrc 
}: CharacterAvatarProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  return (
    <div className={`${sizeClasses[size]} rounded-full overflow-hidden bg-gray-200 ${className}`}>
      <CharacterImage
        characterName={characterName}
        imageNumber={imageNumber}
        fallbackSrc={fallbackSrc}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

interface CharacterBackgroundProps {
  characterName: string;
  imageNumber?: number;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  fallbackSrc?: string;
}

/**
 * 캐릭터 이미지를 배경으로 사용하는 컴포넌트
 */
export function CharacterBackground({ 
  characterName, 
  imageNumber, 
  children, 
  className = '', 
  style = {}, 
  fallbackSrc 
}: CharacterBackgroundProps) {
  const [backgroundImage, setBackgroundImage] = useState<string>('');

  useEffect(() => {
    if (!characterName) {
      setBackgroundImage(fallbackSrc || getDefaultImage());
      return;
    }

    const loadBackgroundImage = async () => {
      console.log('CharacterBackground - Loading background for:', characterName, 'imageNumber:', imageNumber);
      try {
        const { loadCharacterImageFromStorage } = await import('../utils/clientImageStorage');
        
        if (imageNumber) {
          // 특정 번호의 이미지 로드
          console.log('CharacterBackground - Trying to load specific background:', characterName, imageNumber);
          const storedImage = await loadCharacterImageFromStorage(characterName, imageNumber);
          if (storedImage) {
            console.log('CharacterBackground - Found stored background:', storedImage.substring(0, 50) + '...');
            setBackgroundImage(storedImage);
            return;
          }
        } else {
          // 첫 번째 존재하는 이미지 찾기
          console.log('CharacterBackground - Searching for any available background for:', characterName);
          for (let i = 1; i <= 10; i++) {
            const storedImage = await loadCharacterImageFromStorage(characterName, i);
            if (storedImage) {
              console.log('CharacterBackground - Found stored background at index', i, ':', storedImage.substring(0, 50) + '...');
              setBackgroundImage(storedImage);
              return;
            }
          }
        }
        
        // 클라이언트 스토리지에 없으면 기본 방식으로 시도
        console.log('CharacterBackground - No stored background found, trying fallback for:', characterName);
        const path = await getCharacterImageWithFallback(characterName, imageNumber);
        console.log('CharacterBackground - Fallback background path:', path);
        setBackgroundImage(path);
      } catch (error) {
        console.error('Error loading character background:', error);
        console.log('CharacterBackground - Using fallback src:', fallbackSrc || getDefaultImage());
        setBackgroundImage(fallbackSrc || getDefaultImage());
      }
    };

    loadBackgroundImage();
  }, [characterName, imageNumber, fallbackSrc]);

  return (
    <div
      className={`bg-no-repeat bg-cover bg-center ${className}`}
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        ...style
      }}
    >
      {children}
    </div>
  );
}
