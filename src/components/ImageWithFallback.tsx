import React from 'react';

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  fallbackSrc?: string;
};

const ImageWithFallback: React.FC<Props> = ({ src, alt, fallbackSrc = '/placeholder.svg', onError, loading = 'lazy', ...rest }) => {
  const [error, setError] = React.useState(false);
  const [isLoaded, setIsLoaded] = React.useState(false);

  const handleError: React.ReactEventHandler<HTMLImageElement> = (e) => {
    setError(true);
    if (onError) onError(e);
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const finalSrc = error || !src ? fallbackSrc : (src as string);

  return (
    <div className="relative overflow-hidden">
      {!isLoaded && !error && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}
      <img
        src={finalSrc}
        alt={alt}
        onError={handleError}
        onLoad={handleLoad}
        loading={loading}
        decoding="async"
        fetchPriority="low"
        className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${rest.className || ''}`}
        {...rest}
      />
    </div>
  );
};

export default ImageWithFallback;
