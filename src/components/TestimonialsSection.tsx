import React, { useEffect, useRef, useState } from 'react';
import ImageWithFallback from '@/components/ImageWithFallback';
import { Card, CardContent } from '@/components/ui/card';
import tamara from '@/assets/tamara-carvalho.png';
import lucas from '@/assets/lucas-brawlyo.png';
import felipe from '@/assets/felipe-borssato.jpg';
import isabela from '@/assets/isabela-torres.jpg';
import keullerBoy from '@/assets/keuller-boy.jpg';
import juniorCaldeira from '@/assets/junior-caldeira.jpg';
import lucasNew from '@/assets/lucas-brawlyo-new.png';
import ImageModal from '@/components/ImageModal';
 
const testimonialsList = [{
  id: 1,
  quote: "Contar com a Isa pra projetos de Identidade verbal é um tiro certeiro, como ótima comunicadora e excelente estrategista verbal, ela vai a fundo analisando cada parte dos objetivos da marca e consegue traduzir de forma clara, sempre conto com ela em meus projetos!",
  name: "Lucas Brawlyo",
  title: "Founder Lureness",
  avatar: lucasNew
}, {
  id: 2,
  quote: "Eu não poderia ter escolhido melhor. Profissionalismo e entrega do Material foi além do esperado. Com toda certeza temos aí a Melhor empresa do Vale do Aço. Sem contar no ponto criativo.",
  name: "Tamara Carvalho",
  title: "Founder Start Futevôlei",
  avatar: tamara
}, {
  id: 3,
  quote: "A Branding Singular foi essencial para dar vida ao nosso curso. Criaram uma identidade visual marcante, estruturaram toda a gestão de redes sociais e ainda cuidaram do tráfego pago de forma estratégica. O resultado foi profissionalismo e consistência em cada detalhe, elevando muito a percepção da AWI.",
  name: "Keuller Boy",
  title: "Diretor da AWI Service",
  avatar: keullerBoy
}, {
  id: 4,
  quote: "A Branding Singular conseguiu traduzir nossa essência em uma identidade visual que realmente diferencia a Arco Prime no mercado. Além do branding, desenvolveram embalagens que não só valorizam o produto, mas também fortalecem a marca. Foi uma entrega completa, estratégica e com qualidade que superou minhas expectativas.",
  name: "Junior Caldeira",
  title: "CEO da Arco Prime",
  avatar: juniorCaldeira
}, {
  id: 5,
  quote: "Seguindo essa onda de readequação de vida à nova realidade, decidimos que era a hora de ressignificar a identidade visual do escritório. Foi feito um estudo extenso de atualização da antiga marca, que sempre representou bem a nossa essência e chegamos a um lugar mais contemporâneo.",
  name: "Isabela Torres",
  title: "Arquiteta",
  avatar: isabela
}, {
  id: 6,
  quote: "Isadora nos ajudou na concepção da minha empresa, Builders Experience, atuando na ideação, Business Plan, criação das ações internas, comunicações, textos publicitários para vídeos institucionais e até experiência de marca em eventos.",
  name: "Felipe Borssato",
  title: "Brand Experience",
  avatar: felipe
}, {
  id: 7,
  quote: "Trabalhar com a Branding Singular foi uma experiência incrível. Eles entenderam perfeitamente nossa visão e transformaram isso em uma identidade visual única que representa exatamente quem somos.",
  name: "Marina Silva",
  title: "CEO Tech Innovate",
  avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face"
}, {
  id: 8,
  quote: "A estratégia de comunicação desenvolvida superou todas as nossas expectativas. Nossa marca agora tem uma presença forte e consistente em todos os canais digitais.",
  name: "Roberto Mendes",
  title: "Diretor de Marketing",
  avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
}];

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const closeModal = () => { setIsImageOpen(false); setSelectedImage(''); };

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === headingRef.current) {
            headingRef.current.classList.add('animate-slide-up');
            headingRef.current.classList.add('opacity-100');
          } else if (entry.target === cardsRef.current) {
            cardsRef.current.classList.add('animate-slide-up');
            cardsRef.current.classList.add('opacity-100');
          }
        }
      });
    }, {
      threshold: 0.1
    });

    if (headingRef.current) observer.observe(headingRef.current);
    if (cardsRef.current) observer.observe(cardsRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (cardsRef.current) observer.unobserve(cardsRef.current);
    };
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} className="bg-brand-black py-8 sm:py-12 mb-16 sm:mb-24 overflow-hidden px-2 sm:px-4">
      <div className="section-container">
        <h2 ref={headingRef} className="heading-lg text-center mb-16 opacity-0">
          O que estão falando <span className="text-brand-yellow">sobre nós</span>.
        </h2>
      </div>

      <div ref={cardsRef} className="opacity-0 relative w-full overflow-hidden px-4 sm:px-8 md:px-16 lg:px-[152px]">
        {/* Enhanced fade gradients on sides */}
        <div className="absolute left-0 top-0 w-16 sm:w-32 md:w-48 lg:w-64 h-full bg-gradient-to-r from-brand-black via-brand-black/90 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-16 sm:w-32 md:w-48 lg:w-64 h-full bg-gradient-to-l from-brand-black via-brand-black/90 to-transparent z-10 pointer-events-none"></div>
        
        {/* Scrolling testimonials */}
        <div className="flex animate-scroll-x gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-3 sm:gap-4 md:gap-6 lg:gap-8 shrink-0">
              {testimonialsList.map(testimonial => (
                <Card key={`${setIndex}-${testimonial.id}`} className="bg-gradient-to-b from-brand-gray-900/50 to-brand-gray-800/20 border border-brand-yellow/30 w-[280px] sm:w-[300px] md:w-[340px] lg:w-[380px] xl:w-[420px] shrink-0 mx-1">
                  <CardContent className="p-4 sm:p-6">
                    <div className="text-2xl sm:text-3xl text-brand-yellow mb-3 sm:mb-4">"</div>
                    <p className="text-sm sm:text-base text-brand-white/90 mb-4 sm:mb-6 leading-relaxed">
                      {testimonial.quote}
                    </p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden mr-3 sm:mr-4 border-2 border-brand-yellow/20">
                        <ImageWithFallback src={testimonial.avatar as string} alt={testimonial.name} className="w-full h-full object-cover cursor-pointer" onClick={() => { setSelectedImage(testimonial.avatar as string); setIsImageOpen(true); }} />
                      </div>
                      <div>
                        <div className="text-base sm:text-lg font-bold text-brand-white">
                          {testimonial.name}
                        </div>
                        <div className="text-sm sm:text-base text-brand-white/70">
                          {testimonial.title}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ))}
        </div>
      </div>
      <ImageModal imageUrl={selectedImage} isOpen={isImageOpen} onClose={closeModal} />
    </section>
  );
};

export default TestimonialsSection;