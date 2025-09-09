import React, { useEffect, useRef, useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const servicesList = [{
  id: 1,
  title: 'ESTRATÉGIA & POSICIONAMENTO',
  description: 'Definimos a essência da sua marca para criar conexões autênticas com seu público',
  features: ['Análise de mercado e diagnóstico competitivo', 'Definição de essência, propósito e diferenciação', 'Desenvolvimento de personalidade e tom de voz', 'Criação de manifesto e narrativa da marca', 'Arquitetura de marca estratégica']
}, {
  id: 2,
  title: 'IDENTIDADE VISUAL & VERBAL',
  description: 'Criamos uma identidade única que fortalece sua presença e gera conexões reais',
  features: ['Desenvolvimento de naming e identidade verbal', 'Criação de logotipo e sistema visual completo', 'Brand book com diretrizes de aplicação', 'Papelaria e materiais institucionais', 'Guia de uso da marca']
}, {
  id: 3,
  title: 'ESTRATÉGIAS DE COMUNICAÇÃO DIGITAL',
  description: 'Posicionamos sua marca de forma autêntica e relevante em todos os canais digitais',
  features: ['Planejamento estratégico de comunicação', 'Desenvolvimento de sites e landing pages otimizadas', 'Gestão profissional de redes sociais', 'Campanhas integradas e estratégias de conteúdo', 'Gestão de tráfego pago e performance']
}, {
  id: 4,
  title: 'INTELIGÊNCIA ARTIFICIAL & AUTOMAÇÃO',
  description: 'Potencialize sua marca com IA para escalar com eficiência máxima',
  categories: [{
    name: 'Conteúdo Visual com IA',
    items: ['Ensaios fotográficos com IA (clonagem digital)', 'Criação de imagens e vídeos de produto', 'Desenvolvimento de avatar/influencer virtual', 'Produção de vídeos com voz e rosto sintético']
  }, {
    name: 'Assistentes Inteligentes',
    items: ['Chatbots e assistentes de atendimento 24/7', 'Qualificação automática de leads', 'Agendamento inteligente de reuniões', 'Atendimento personalizado em linguagem natural']
  }, {
    name: 'Sistemas & Automação Empresarial',
    items: ['Desenvolvimento de ferramentas internas com IA', 'Automação de processos e workflows', 'Validação e otimização de ideias de negócio', 'Soluções customizadas para diferentes setores']
  }, {
    name: 'Consultoria Estratégica em IA',
    items: ['Diagnóstico e planejamento de implementação', 'Formação e capacitação de equipes', 'Acompanhamento e suporte contínuo', 'Definição de roadmap de adoção tecnológica']
  }]
}];
const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = () => {
    setShowCursor(true);
  };

  const handleMouseLeave = () => {
    setShowCursor(false);
  };
  
  return (
    <section 
      id="services" 
      ref={sectionRef} 
      className="services-section bg-brand-black py-20 relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/5 to-transparent"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-yellow/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="heading-lg text-center mb-6">
            Nossos <span className="text-brand-yellow">Serviços</span>
          </h2>
          
          <p className="text-xl text-center text-brand-white/80 max-w-3xl mx-auto">
            Soluções desenhadas para marcas que querem se diferenciar e escalar com processos inteligentes.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-6">
          {servicesList.map((service, index) => (
            <AccordionItem 
              key={service.id} 
              value={`service-${service.id}`}
              className="border border-brand-gray-700/30 rounded-lg bg-brand-black/20 backdrop-blur-sm overflow-hidden"
            >
              <AccordionTrigger className="px-8 py-6 hover:no-underline hover:bg-brand-yellow/5 transition-colors [&[data-state=open]>div]:bg-brand-yellow/10">
                <div className="flex items-center gap-6 w-full text-left">
                  <div className="w-12 h-12 rounded-full border-2 border-brand-yellow/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-brand-yellow font-bold">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-2xl font-bold text-brand-white mb-2 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-brand-white/70 text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </AccordionTrigger>
              
              <AccordionContent className="px-8 pb-6">
                {service.features && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3 group">
                        <div className="w-1.5 h-1.5 bg-brand-yellow rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform" />
                        <span className="text-brand-white/70 group-hover:text-brand-white transition-colors">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {service.categories && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                    {service.categories.map((category, categoryIndex) => (
                      <div key={categoryIndex} className="space-y-4">
                        <h4 className="text-lg font-semibold text-brand-yellow mb-3">
                          {category.name}
                        </h4>
                        <div className="space-y-3">
                          {category.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex items-start gap-3 group">
                              <div className="w-1 h-1 bg-brand-yellow/60 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform" />
                              <span className="text-sm text-brand-white/60 group-hover:text-brand-white/80 transition-colors">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      
      {showCursor && (
        <div 
          className="custom-cursor"
          style={{ 
            left: cursorPosition.x, 
            top: cursorPosition.y,
            opacity: showCursor ? 1 : 0 
          }}
        >
          Studio Criativo
        </div>
      )}
    </section>
  );
};
export default ServicesSection;