import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Download } from 'lucide-react';

interface ImageModalProps {
  imageUrl: string;
  isOpen: boolean;
  onClose: () => void;
  images?: string[];
  currentIndex?: number;
  onNavigate?: (index: number) => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ imageUrl, isOpen, onClose, images = [], currentIndex = 0, onNavigate }) => {
  const [imageLoaded, setImageLoaded] = React.useState(false);
  const [imageError, setImageError] = React.useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setImageLoaded(false);
      setImageError(false);
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, imageUrl]);

  const handlePrevious = () => {
    if (onNavigate && images.length > 1) {
      const newIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
      onNavigate(newIndex);
    }
  };

  const handleNext = () => {
    if (onNavigate && images.length > 1) {
      const newIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
      onNavigate(newIndex);
    }
  };

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrevious();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeydown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [isOpen, onClose, currentIndex, images.length]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md animate-in fade-in-0 duration-300 touch-manipulation" 
      onClick={onClose}
    >
      <div className="relative w-full h-full flex items-center justify-center p-2 sm:p-4">{/* Mobile padding adjustment */}
        {/* Loading indicator */}
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-yellow"></div>
          </div>
        )}

        {/* Error state */}
        {imageError && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-brand-white">
              <X className="h-16 w-16 mx-auto mb-4 opacity-50" />
              <p>Erro ao carregar imagem</p>
            </div>
          </div>
        )}

        {/* Navigation arrows - Show only if multiple images */}
        {images.length > 1 && onNavigate && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); handlePrevious(); }}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 rounded-full bg-brand-gray-900/90 hover:bg-brand-gray-800 transition-colors backdrop-blur-sm border border-brand-gray-700 touch-manipulation"
              title="Imagem anterior"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-brand-white" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 rounded-full bg-brand-gray-900/90 hover:bg-brand-gray-800 transition-colors backdrop-blur-sm border border-brand-gray-700 touch-manipulation"
              title="Próxima imagem"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-brand-white" />
            </button>
          </>
        )}

        {/* Image counter */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-brand-gray-900/90 backdrop-blur-sm border border-brand-gray-700">
            <span className="text-sm sm:text-base text-brand-white">
              {currentIndex + 1} / {images.length}
            </span>
          </div>
        )}

        {/* Controls - Mobile optimized */}
        <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 flex gap-1 sm:gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              const link = document.createElement('a');
              link.href = imageUrl;
              link.download = 'imagem';
              link.click();
            }}
            className="p-2 sm:p-3 rounded-full bg-brand-gray-900/90 hover:bg-brand-gray-800 transition-colors backdrop-blur-sm border border-brand-gray-700 touch-manipulation"
            title="Download"
          >
            <Download className="h-4 w-4 sm:h-5 sm:w-5 text-brand-white" />
          </button>
          <button
            onClick={onClose}
            className="p-2 sm:p-3 rounded-full bg-brand-gray-900/90 hover:bg-brand-gray-800 transition-colors backdrop-blur-sm border border-brand-gray-700 touch-manipulation"
            title="Fechar (ESC)"
          >
            <X className="h-4 w-4 sm:h-5 sm:w-5 text-brand-white" />
          </button>
        </div>
        
        <img 
          src={imageUrl} 
          alt="Imagem ampliada"
          className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
          onClick={(e) => e.stopPropagation()}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
          style={{ display: imageLoaded ? 'block' : 'none' }}
        />
      </div>
    </div>
  );
};

export default ImageModal;