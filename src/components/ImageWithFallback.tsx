import React from 'react';

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  fallbackSrc?: string;
};

const ImageWithFallback: React.FC<Props> = ({ src, alt, fallbackSrc = '/placeholder.svg', onError, loading = 'lazy', ...rest }) => {
  const [error, setError] = React.useState(false);

  const handleError: React.ReactEventHandler<HTMLImageElement> = (e) => {
    setError(true);
    if (onError) onError(e);
  };

  const finalSrc = error || !src ? fallbackSrc : (src as string);

  return (
    <img
      src={finalSrc}
      alt={alt}
      onError={handleError}
      loading={loading}
      decoding="async"
      {...rest}
    />
  );
};

export default ImageWithFallback;
