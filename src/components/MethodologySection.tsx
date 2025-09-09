import React, { useEffect, useRef, useState } from 'react';

const methodologySteps = [
  {
    id: 1,
    title: 'Diagnóstico Estratégico',
    description: 'Começamos entendendo sua essência: objetivos, desafios e o que move seu negócio. A partir de entrevistas, análise de dados e imersão no seu universo, desenhamos o ponto de partida para criar uma base sólida.'
  },
  {
    id: 2,
    title: 'Design e Inovação',
    description: 'Aqui, colocamos a mão na massa! Para projetos de branding, criamos identidades visuais únicas. Para automação, projetamos sistemas que maximizam sua eficiência. E, para IA, desenvolvemos soluções inteligentes que alinham tecnologia à sua estratégia.'
  },
  {
    id: 3,
    title: 'Implementação Ágil',
    description: 'Colocamos em prática as ideias desenvolvidas, com agilidade e precisão. Seja lançando campanhas, implementando automações ou integrando inteligência artificial, garantimos que cada peça se encaixe perfeitamente no seu ecossistema digital.'
  },
  {
    id: 4,
    title: 'Análise e Evolução Contínua',
    description: 'Depois de lançado, acompanhamos de perto o impacto das ações, ajustamos as estratégias conforme necessário e otimizamos processos. O foco é garantir que sua marca cresça, se adapte e continue relevante no mercado.'
  }
];

const MethodologySection = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
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

  const handleStepClick = (stepId: number) => {
    setActiveStep(stepId);
  };

  return (
    <section id="methodology" ref={sectionRef} className="bg-brand-black border-t border-brand-gray-800 py-20">
      <div className="section-container">
        <h2 className={`heading-lg text-center mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Nossa <span className="text-brand-yellow">Metodologia</span>
        </h2>
        
        <p className={`text-xl text-center text-brand-white/80 mb-16 max-w-2xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Um processo estratégico que une profundidade de análise, criatividade e tecnologia para resultados mensuráveis.
        </p>

        {/* Desktop Horizontal Slider */}
        <div className={`max-w-7xl mx-auto hidden lg:block transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-stretch justify-center px-8">
            {methodologySteps.map((step, index) => (
              <div
                key={step.id}
                className={`transition-all duration-300 ease-out cursor-pointer relative ${
                  activeStep === step.id
                    ? 'flex-1 max-w-4xl z-10 scale-105'
                    : 'flex-shrink-0 w-40 z-0'
                } ${
                  index > 0 ? '-ml-2' : ''
                }`}
                onClick={() => handleStepClick(step.id)}
              >
                {activeStep === step.id ? (
                  /* Active Card - Liquid glass com número amarelo */
                  <div className="liquid-glass-card rounded-3xl h-[500px] relative overflow-hidden shadow-2xl group">
                    {/* Number in top right corner */}
                    <div className="absolute top-8 right-8 text-8xl font-bold text-brand-yellow/80 group-hover:scale-110 transition-transform duration-300">
                      {step.id}
                    </div>
                    
                    {/* Content aligned to left */}
                    <div className="flex flex-col justify-center h-full p-12 pr-24">
                      <h3 className="text-4xl font-bold text-brand-white text-left leading-tight mb-8">
                        {step.title}
                      </h3>
                      <p className="text-brand-white/80 text-lg leading-relaxed text-left">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ) : (
                  /* Inactive Panel - Amarelo com número preto */
                  <div className="bg-brand-yellow rounded-3xl h-[500px] flex items-center justify-center transition-all duration-500 shadow-lg group hover:shadow-xl overflow-hidden">
                    <div className="text-8xl font-bold text-brand-black group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 ease-out">
                      {step.id}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Vertical Slider */}
        <div className={`lg:hidden transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="space-y-4 px-4">
            {methodologySteps.map((step) => (
              <div
                key={step.id}
                className={`transition-all duration-500 ease-out cursor-pointer ${
                  activeStep === step.id ? 'mb-6' : ''
                }`}
                onClick={() => handleStepClick(step.id)}
              >
                {activeStep === step.id ? (
                  /* Active Mobile Card - Liquid glass com número amarelo */
                  <div className="liquid-glass-card rounded-2xl overflow-hidden">
                    {/* Content with number first */}
                    <div className="p-6">
                      <div className="flex items-start mb-4">
                        <div className="text-4xl font-bold text-brand-yellow mr-4 flex-shrink-0">
                          {step.id}
                        </div>
                        <h3 className="text-2xl font-bold text-brand-white text-left">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-brand-white/80 leading-relaxed text-left ml-16">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ) : (
                  /* Inactive Mobile Panel - Amarelo com número preto */
                  <div className="bg-brand-yellow rounded-2xl p-4 border border-brand-yellow hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center">
                      <div className="text-2xl font-bold text-brand-black mr-4">
                        {step.id}
                      </div>
                      <span className="text-xl font-bold text-brand-black text-left">{step.title}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;