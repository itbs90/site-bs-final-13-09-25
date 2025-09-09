import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === headingRef.current) {
            headingRef.current.classList.add('animate-slide-up');
            headingRef.current.classList.add('opacity-100');
          } else if (entry.target === textRef.current) {
            textRef.current.classList.add('animate-slide-up');
            textRef.current.classList.add('opacity-100');
          } else if (entry.target === buttonRef.current) {
            buttonRef.current.classList.add('animate-slide-up');
            buttonRef.current.classList.add('opacity-100');
          }
        }
      });
    }, {
      threshold: 0.1
    });
    if (headingRef.current) observer.observe(headingRef.current);
    if (textRef.current) observer.observe(textRef.current);
    if (buttonRef.current) observer.observe(buttonRef.current);
    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (textRef.current) observer.unobserve(textRef.current);
      if (buttonRef.current) observer.unobserve(buttonRef.current);
    };
  }, []);
  return <section ref={sectionRef} className="py-[20px] bg-[#fbfc15]">
      <div className="section-container text-center">
        <h2 ref={headingRef} className="heading-lg mb-6 opacity-0">
          <span className="text-zinc-950">Vamos criar algo Singular?</span>
        </h2>
        
        <p ref={textRef} className="text-xl max-w-2xl mx-auto mb-10 opacity-0 text-black">
          Transforme sua marca em um ativo estratégico que não apenas se destaca, mas efetivamente impulsiona crescimento e resultados.
        </p>
        
        <div ref={buttonRef} className="opacity-0">
          <Button asChild className="hover:bg-zinc-800 px-8 py-6 text-brand-yellow bg-black rounded-full transition-all duration-300">
            <a href="https://api.whatsapp.com/send/?phone=5531997606672&text=Oi,%20quero%20ajuda%20com%20meu%20neg%C3%B3cio" target="_blank" rel="noopener noreferrer">
              Falar com especialista
            </a>
          </Button>
        </div>
      </div>
    </section>;
};
export default ContactSection;