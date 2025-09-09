import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const whyChooseUsList = [{
  id: 1,
  title: "Abordagem Única: Branding Estratégico + IA",
  description: "Combinamos o melhor da criatividade humana com a potência da inteligência artificial para criar marcas que são autênticas E escaláveis. Não acreditamos em sacrificar personalidade por performance, entregamos ambos."
}, {
  id: 2,
  title: "Metodologia Proprietária Comprovada",
  description: "Nossa metodologia Singular foi refinada ao longo de 13 anos e mais de 150 projetos. Combinamos práticas consagradas de branding com inovações tecnológicas para resultados consistentes e mensuráveis."
}, {
  id: 3,
  title: "Foco em Resultados Mensuráveis",
  description: "Diferente de agências tradicionais, nossa obsessão é com métricas que importam: aumento de conversão, qualificação de leads, redução do ciclo de vendas e ampliação de market share. Estética é consequência da estratégia, não o contrário."
}, {
  id: 4,
  title: "Exclusividade & Atenção Dedicada",
  description: "Limitamos nosso número de clientes ativos para garantir atenção estratégica e criativa sem diluições. Sua marca recebe o foco que merece, com acesso direto aos estrategistas seniores do time."
}];
const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const whyChooseHeadingRef = useRef<HTMLHeadingElement>(null);
  const whyChooseCardsRef = useRef<HTMLDivElement>(null);
  const aboutHeadingRef = useRef<HTMLHeadingElement>(null);
  const aboutTextRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          target.classList.add('animate-slide-up');
          target.classList.add('opacity-100');
          if (target === whyChooseCardsRef.current) {
            const cards = target.querySelectorAll('.why-choose-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-slide-up');
                card.classList.add('opacity-100');
              }, 100 * index);
            });
          }
        }
      });
    }, {
      threshold: 0.1
    });
    const elementsToObserve = [whyChooseHeadingRef.current, whyChooseCardsRef.current, aboutHeadingRef.current, aboutTextRef.current, taglineRef.current, profileRef.current];
    elementsToObserve.forEach(element => {
      if (element) observer.observe(element);
    });
    return () => {
      elementsToObserve.forEach(element => {
        if (element) observer.unobserve(element);
      });
    };
  }, []);
  return <section id="about" ref={sectionRef} className="bg-brand-black border-t border-brand-gray-800 py-0">
      <div className="section-container">
        {/* Why Choose Us Section */}
        <h2 ref={whyChooseHeadingRef} className="heading-lg text-center mb-12 opacity-0">
          <span className="text-brand-yellow">Por que escolher a Branding Singular?</span>
        </h2>

        <div ref={whyChooseCardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {whyChooseUsList.map(item => <Card key={item.id} className="why-choose-card bg-gradient-to-r from-brand-gray-900/70 to-brand-gray-800/30 border-brand-gray-800 opacity-0 transition-all duration-500 hover:shadow-[0_0_15px_rgba(251,252,21,0.15)] transform hover:-translate-y-1">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-brand-yellow mb-3">{item.title}</h3>
                <p className="text-brand-white/80">{item.description}</p>
              </CardContent>
            </Card>)}
        </div>

        {/* About Us Section */}
        <h2 ref={aboutHeadingRef} className="heading-lg text-center mb-8 opacity-0">
          <span className="text-brand-yellow text-left">
Quem Somos</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-8 items-center justify-center mb-8">
          <div ref={aboutTextRef} className="max-w-2xl text-center md:text-left text-lg text-brand-white/80 space-y-4 opacity-0 flex-1">
            <p className="px-[2px] mx-0">
              Acreditamos que marcas são mais do que estética. Elas movem pessoas, geram conexões e constroem legados. Criamos estratégias de branding que traduzem a identidade da sua empresa em experiências memoráveis e autênticas.
            </p>
            <p className="px-0 font-normal mx-0">
              Nossa abordagem une criatividade, estratégia e IA para transformar singularidade em relevância. Combinamos storytelling, design e tecnologia para construir marcas consistentes, automatizar processos de marketing e amplificar seu impacto no mercado.
            </p>
          </div>
          
          <div ref={profileRef} className="flex flex-col items-center opacity-0 transform transition-all duration-500 hover:scale-105 flex-shrink-0">
            <div className="w-48 h-48 rounded-full bg-brand-gray-800 mb-4 relative overflow-hidden border-2 border-brand-yellow shadow-[0_0_20px_rgba(251,252,21,0.3)]">
              <Avatar className="w-full h-full">
                <AvatarImage alt="Isadora Toelntino" src="/lovable-uploads/22b587f4-1e93-4e76-bd2c-8b0a2e0b5e3a.png" />
                <AvatarFallback className="bg-brand-gray-900 text-brand-yellow text-4xl">IT</AvatarFallback>
              </Avatar>
            </div>
            <h3 className="text-xl font-bold text-brand-white">Isadora Tolentino</h3>
            <p className="text-brand-yellow">Estrategista de Marcas</p>
          </div>
        </div>

        <p ref={taglineRef} className="text-2xl font-bold text-center text-brand-yellow mt-6 opacity-0">
          Branding humano + IA: cada um no seu melhor.
        </p>
      </div>
    </section>;
};
export default AboutSection;