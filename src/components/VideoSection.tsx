import React, { useEffect, useRef, useState } from 'react';
const VideoSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setShouldLoadVideo(true);
            // Start playing video when visible
            if (videoRef.current) {
              videoRef.current.play().catch(() => {
                // Silent fail for autoplay restrictions
              });
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return <section ref={sectionRef} className="relative h-screen overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 w-full h-full">
        {shouldLoadVideo ? (
          <video 
            ref={videoRef}
            muted 
            loop 
            playsInline 
            preload="none"
            className="w-full h-full object-cover"
          >
            <source src="https://brandingsingular.com/wp-content/uploads/2025/09/video-bs.mp4" type="video/mp4" />
          </video>
        ) : (
          <div className="w-full h-full bg-brand-black" />
        )}
        
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center px-4 max-w-4xl mx-auto">
          <h2 className={`heading-lg text-brand-white leading-tight transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Criamos marcas que unem <span className="text-brand-yellow">estratégia</span>, <span className="text-brand-yellow">tecnologia</span> e <span className="text-brand-yellow">singularidade</span> para ir além do comum.
          </h2>
        </div>
      </div>
    </section>;
};
export default VideoSection;