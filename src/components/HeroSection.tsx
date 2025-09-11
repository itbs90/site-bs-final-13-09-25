import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
const HeroSection = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const heading = headingRef.current;
    const text = textRef.current;
    const button = buttonRef.current;
    setTimeout(() => {
      heading?.classList.add('animate-slide-up');
      heading?.classList.add('opacity-100');
    }, 300);
    setTimeout(() => {
      text?.classList.add('animate-slide-up');
      text?.classList.add('opacity-100');
    }, 500);
    setTimeout(() => {
      button?.classList.add('animate-slide-up');
      button?.classList.add('opacity-100');
    }, 700);
  }, []);

  return <section 
    className="relative min-h-screen flex items-center justify-center bg-brand-black overflow-hidden py-20"
  >
      <div className="absolute inset-0 bg-gradient-to-b from-brand-gray-900 to-brand-black opacity-40 py-0 px-0"></div>
      
      {/* Yellow accent elements */}
      <div className="absolute top-1/3 left-10 w-8 h-8 bg-brand-yellow rounded-full blur-xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/3 w-16 h-16 bg-brand-yellow rounded-full blur-xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-20 w-4 h-4 bg-brand-yellow rounded-full blur-lg opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/3 left-1/4 w-12 h-12 bg-brand-yellow rounded-full blur-xl opacity-25 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute top-20 right-1/2 w-6 h-6 bg-brand-yellow rounded-full blur-lg opacity-35 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="section-container text-center z-10 pt-16 py-16">
        <div className="mb-6">
          <span className="inline-block bg-brand-yellow/10 text-brand-yellow text-sm font-medium px-4 py-2 rounded-full border border-brand-yellow/20">
            Studio Criativo
          </span>
        </div>
        <h1 ref={headingRef} className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 opacity-0 max-w-4xl mx-auto">
          <span className="text-brand-white">Branding, Marketing e </span>
          <span className="text-brand-yellow">Inteligência Artificial</span>
          <span className="text-brand-white"> para marcas que querem crescer, automatizar e vender mais.</span>
        </h1>
        
        <p ref={textRef} className="text-base md:text-lg text-brand-white/80 max-w-2xl mx-auto mb-10 opacity-0">Unimos criatividade humana e tecnologia para escalar resultados 
com estratégia clara e consistente.</p>
        
        <div ref={buttonRef} className="opacity-0 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild className="bg-brand-yellow text-brand-black hover:bg-brand-yellow/90 text-lg px-8 py-6 transition-all duration-300 hover:scale-105 rounded-full">
            <a href="https://form.respondi.app/8Rkmcq1d" target="_blank" rel="noopener noreferrer">
              Solicitar proposta
            </a>
          </Button>
          <Button asChild className="bg-brand-black/20 text-brand-white border border-brand-white/20 hover:bg-brand-white/10 backdrop-blur-sm text-lg px-8 py-6 transition-all duration-300 hover:scale-105 hover:backdrop-blur-lg group rounded-full">
            <a href="https://api.whatsapp.com/send/?phone=5531997606672&text=Oi,%20quero%20ajuda%20com%20meu%20neg%C3%B3cio" target="_blank" rel="noopener noreferrer">
              Falar com especialista
              <ArrowUpRight className="ml-2 h-4 w-4 text-white animate-pulse group-hover:animate-bounce" />
            </a>
          </Button>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      
    </section>;
};
export default HeroSection;