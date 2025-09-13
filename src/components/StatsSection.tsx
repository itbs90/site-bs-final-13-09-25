import React, { useEffect, useRef } from 'react';
import startLogo from '@/assets/logos/start.png';
import sebraeLogo from '@/assets/logos/sebrae.png';
import psidofuturoLogo from '@/assets/logos/psidofuturo.png';
import platformbuildersLogo from '@/assets/logos/platformbuilders.png';
import nutrienLogo from '@/assets/logos/nutrien.png';
import neilacristinaLogo from '@/assets/logos/neilacristina.png';
import itoneLogo from '@/assets/logos/itone.png';
import isabelatorresLogo from '@/assets/logos/isabelatorres.png';
import galoreLogo from '@/assets/logos/galore.png';
import foodwayLogo from '@/assets/logos/foodway.png';
import cobiLogo from '@/assets/logos/cobi.png';
import awiserviceLogo from '@/assets/logos/awiservice.png';
import arcoprimeLogo from '@/assets/logos/arcoprime.png';
import ImageWithFallback from '@/components/ImageWithFallback';

const firstRowLogos = [
  { name: 'Start Futevôlei', icon: startLogo },
  { name: 'Sebrae', icon: sebraeLogo },
  { name: 'Psi do Futuro', icon: psidofuturoLogo },
  { name: 'Nutrien', icon: nutrienLogo },
  { name: 'Platform Builders', icon: platformbuildersLogo },
  { name: 'Itone', icon: itoneLogo },
  { name: 'Galore', icon: galoreLogo }
];

const secondRowLogos = [
  { name: 'Foodway', icon: foodwayLogo },
  { name: 'AWI Service', icon: awiserviceLogo },
  { name: 'Arco Prime', icon: arcoprimeLogo },
  { name: 'Cobi', icon: cobiLogo },
  { name: 'Isabela Torres', icon: isabelatorresLogo },
  { name: 'Neila Cristina', icon: neilacristinaLogo }
];
const StatsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const logosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === headingRef.current) {
            headingRef.current.classList.add('animate-slide-up');
            headingRef.current.classList.add('opacity-100');
          } else if (entry.target === statsRef.current) {
            statsRef.current.classList.add('animate-slide-up');
            statsRef.current.classList.add('opacity-100');

            // Start counter animation when stats are visible
            const countElements = statsRef.current.querySelectorAll('.counter-value');
            countElements.forEach(element => {
              const target = parseInt(element.getAttribute('data-target') || '0');
              let count = 0;
              const duration = 2000; // milliseconds
              const step = Math.ceil(target / (duration / 16)); // 16ms is roughly 60fps

              const counter = setInterval(() => {
                count += step;
                if (count >= target) {
                  element.textContent = `+${target}`;
                  clearInterval(counter);
                } else {
                  element.textContent = `+${count}`;
                }
              }, 16);
            });
          } else if (entry.target === logosRef.current) {
            logosRef.current.classList.add('animate-slide-up');
            logosRef.current.classList.add('opacity-100');
          }
        }
      });
    }, {
      threshold: 0.1
    });

    if (headingRef.current) observer.observe(headingRef.current);
    if (statsRef.current) observer.observe(statsRef.current);
    if (logosRef.current) observer.observe(logosRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (statsRef.current) observer.unobserve(statsRef.current);
      if (logosRef.current) observer.unobserve(logosRef.current);
    };
  }, []);
  return <section ref={sectionRef} className="bg-brand-black px-4 sm:px-8 md:px-16 lg:px-[152px] py-12 sm:py-16 md:py-24">
      <div className="section-container px-0 py-[25px] mx-0">
        <div className="text-center mb-6">
          <span className="inline-block bg-brand-yellow/10 text-brand-yellow text-sm font-medium px-4 py-2 rounded-full border border-brand-yellow/20">
            Fazemos isso há anos
          </span>
        </div>
        <h2 ref={headingRef} className="heading-lg text-center mb-12 opacity-0 max-w-4xl mx-auto">
          <span className="text-brand-yellow">Nossa história</span> é feita de marcas que evoluíram, negócios que <span className="text-brand-yellow">cresceram</span> e possibilidades que se <span className="text-brand-yellow">multiplicaram</span>.
        </h2>

        <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 opacity-0">
          <div className="text-center p-4 sm:p-6 md:p-8 liquid-glass-card rounded-2xl">
            <div className="counter-value text-5xl font-bold mb-2 text-brand-yellow transition-transform duration-300" data-target="156">0</div>
            <div className="text-lg font-medium text-brand-white mb-1">Projetos Criados</div>
            <div className="text-sm text-brand-white/70">Marcas que ganharam clareza e resultados.</div>
          </div>
          
          <div className="text-center p-4 sm:p-6 md:p-8 liquid-glass-card rounded-2xl">
            <div className="counter-value text-5xl font-bold mb-2 text-brand-yellow transition-transform duration-300" data-target="13">0</div>
            <div className="text-lg font-medium text-brand-white mb-1">Anos de Experiência</div>
            <div className="text-sm text-brand-white/70">Histórias construídas com estratégia e criatividade.</div>
          </div>
          
          <div className="text-center p-4 sm:p-6 md:p-8 liquid-glass-card rounded-2xl">
            <div className="counter-value text-5xl font-bold mb-2 text-brand-yellow transition-transform duration-300" data-target="6">0</div>
            <div className="text-lg font-medium text-brand-white mb-1">Países atendidos</div>
            <div className="text-sm text-brand-white/70">Presença internacional com soluções personalizadas.</div>
          </div>
        </div>

        {/* Logos section */}
        <div ref={logosRef} className="opacity-0 relative w-full mt-16 overflow-hidden space-y-4">
          {/* Enhanced fade gradients on sides */}
          <div className="absolute left-0 top-0 w-16 sm:w-32 md:w-48 lg:w-64 h-full bg-gradient-to-r from-brand-black via-brand-black/90 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-16 sm:w-32 md:w-48 lg:w-64 h-full bg-gradient-to-l from-brand-black via-brand-black/90 to-transparent z-10 pointer-events-none"></div>
          
          {/* First row - moving right to left */}
          <div className="flex animate-scroll-x-reverse gap-4 sm:gap-8 md:gap-12">
            {[...Array(3)].map((_, setIndex) => (
              <div key={setIndex} className="flex items-center justify-center gap-4 sm:gap-8 md:gap-12 shrink-0">
                {firstRowLogos.map((logo, index) => (
                   <div key={`first-${setIndex}-${index}`} className="flex items-center justify-center w-24 sm:w-32 md:w-40 lg:w-48 xl:w-56 h-16 sm:h-20 shrink-0">
                      <ImageWithFallback 
                        src={logo.icon} 
                        alt={logo.name}
                        className="h-8 sm:h-10 md:h-12 w-auto opacity-60 transition-opacity duration-300 filter brightness-0 invert max-w-full object-contain"
                        loading="lazy"
                      />
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Second row - moving left to right */}
          <div className="flex animate-scroll-x gap-4 sm:gap-8 md:gap-12">
            {[...Array(3)].map((_, setIndex) => (
              <div key={setIndex} className="flex items-center justify-center gap-4 sm:gap-8 md:gap-12 shrink-0">
                {secondRowLogos.map((logo, index) => (
                   <div key={`second-${setIndex}-${index}`} className="flex items-center justify-center w-24 sm:w-32 md:w-40 lg:w-48 xl:w-56 h-16 sm:h-20 shrink-0">
                      <ImageWithFallback 
                        src={logo.icon} 
                        alt={logo.name}
                        className="h-8 sm:h-10 md:h-12 w-auto opacity-60 transition-opacity duration-300 filter brightness-0 invert max-w-full object-contain"
                        loading="lazy"
                      />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>;
};
export default StatsSection;