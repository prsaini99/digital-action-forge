
import { useState, useEffect } from 'react';

interface ImageLoaderProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
}

const ImageLoader = ({ src, alt, fallbackSrc, className }: ImageLoaderProps) => {
  const [imgSrc, setImgSrc] = useState<string>('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setError(false);
    
    if (src && src.trim() !== '') {
      setImgSrc(src);
    } else {
      setError(true);
      setLoading(false);
    }
  }, [src]);

  const handleError = () => {
    setLoading(false);
    if (!error && fallbackSrc) {
      setImgSrc(fallbackSrc);
      setError(true);
    } else if (!fallbackSrc) {
      setError(true);
    }
  };

  const handleLoad = () => {
    setLoading(false);
  };

  // If we don't have a valid src, show error state immediately
  if (!src || src.trim() === '') {
    return (
      <div className={`bg-gray-200 flex items-center justify-center ${className}`} style={{ minHeight: '80px' }}>
        <span className="text-gray-500 text-sm">{alt || 'Image unavailable'}</span>
      </div>
    );
  }

  return (
    <>
      {loading && (
        <div className={`bg-gray-200 animate-pulse ${className}`} style={{ minHeight: '80px' }}>
          <div className="w-full h-full flex items-center justify-center text-gray-500">Loading...</div>
        </div>
      )}
      <img
        src={imgSrc}
        alt={alt}
        className={`${className} ${loading ? 'hidden' : ''}`}
        onError={handleError}
        onLoad={handleLoad}
        loading="lazy"
      />
      {error && !fallbackSrc && (
        <div className={`bg-gray-200 flex items-center justify-center ${className}`} style={{ minHeight: '80px' }}>
          <span className="text-gray-500 text-sm">{alt || 'Image unavailable'}</span>
        </div>
      )}
    </>
  );
};

export default ImageLoader;
