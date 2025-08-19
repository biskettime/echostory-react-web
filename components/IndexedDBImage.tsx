import { useState, useEffect } from 'react';
import { imageStorage } from '../utils/imageStorage';

interface IndexedDBImageProps {
  src: string | null;
  alt: string;
  className?: string;
  fallback?: React.ReactNode;
}

export function IndexedDBImage({ src, alt, className, fallback }: IndexedDBImageProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImage = async () => {
      if (!src) {
        setImageUrl(null);
        setLoading(false);
        return;
      }

      // Check if it's an IndexedDB reference
      if (src.startsWith('indexeddb:')) {
        try {
          const imageId = src.replace('indexeddb:', '');
          const imageData = await imageStorage.getImage(imageId);
          setImageUrl(imageData);
        } catch (error) {
          console.error('Failed to load image from IndexedDB:', error);
          setImageUrl(null);
        }
      } else {
        // Regular image URL or base64
        setImageUrl(src);
      }
      setLoading(false);
    };

    loadImage();
  }, [src]);

  if (loading) {
    return (
      <div className={className}>
        <div className="animate-pulse bg-gray-600 w-full h-full rounded" />
      </div>
    );
  }

  if (!imageUrl) {
    return <>{fallback}</>;
  }

  return <img src={imageUrl} alt={alt} className={className} />;
}