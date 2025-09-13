import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious,
  CarouselApi 
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import arcoprimeProject from '@/assets/projects/arcoprime-01.png';
import futevoleiProject from '@/assets/projects/start-02.png';
import psiFuturoProject from '@/assets/projects/psidofuturo-01.png';
import foodwayProject from '@/assets/projects/foodway-01.png';
import awiProject from '@/assets/projects/awi-01.png';

const projectsList = [{
  id: 1,
  title: 'Arcoprime',
  description: 'Marca alemã de discos de corte que redefine confiança entre promessa e entrega.',
  category: 'Industrial',
  date: '2024',
  imageUrl: arcoprimeProject
}, {
  id: 3,
  title: 'Start Futevôlei',
  description: 'Escola de futevôlei que inspira superação e comunidade no esporte.',
  category: 'Esportes',
  date: '2024',
  imageUrl: futevoleiProject
}, {
  id: 6,
  title: 'Psi do Futuro',
  description: 'Ecossistema de saúde mental que conecta psicólogas especializadas a pessoas em busca de bem-estar e transformação.',
  category: 'Saúde Mental',
  date: '2023',
  imageUrl: psiFuturoProject
}, {
  id: 4,
  title: 'Foodway',
  description: 'Plataforma de delivery que conecta restaurantes e consumidores com experiência única.',
  category: 'Tecnologia',
  date: '2024',
  imageUrl: foodwayProject
}, {
  id: 5,
  title: 'AWI',
  description: 'Curso profissionalizante em gestão que capacita líderes para o futuro.',
  category: 'Educação',
  date: '2024',
  imageUrl: awiProject
}];
const ProjectsPreviewSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === headingRef.current) {
            headingRef.current.classList.add('animate-slide-up');
            headingRef.current.classList.add('opacity-100');
          } else if (entry.target === projectsRef.current) {
            projectsRef.current.classList.add('animate-slide-up');
            projectsRef.current.classList.add('opacity-100');
          }
        }
      });
    }, {
      threshold: 0.1
    });
    if (headingRef.current) observer.observe(headingRef.current);
    if (projectsRef.current) observer.observe(projectsRef.current);
    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (projectsRef.current) observer.unobserve(projectsRef.current);
    };
  }, []);
  return <section id="projects-preview" ref={sectionRef} className="bg-brand-black py-0">
      <div className="section-container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 ref={headingRef} className="heading-lg text-center mb-4 opacity-0">
            Nossos <span className="text-brand-yellow">Projetos</span>
          </h2>
          <p className="text-xl text-brand-white/80 max-w-2xl mx-auto">
            Conheça alguns dos trabalhos que desenvolvemos para marcas que queriam se destacar no mercado.
          </p>
        </div>

        <div ref={projectsRef} className="opacity-0 transition-all duration-500">
          <div className="relative z-10 max-w-5xl mx-auto">
            <Carousel
              setApi={setApi}
              className="w-full"
              plugins={[
                Autoplay({
                  delay: 4000,
                }),
              ]}
              opts={{
                align: "center",
                loop: true,
              }}
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {projectsList.map((project) => (
                  <CarouselItem key={project.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/2">
                    <Card className="group bg-transparent border-brand-gray-800 hover:border-brand-yellow/50 transition-all duration-300 overflow-hidden h-full">
                      <div className="relative overflow-hidden aspect-square">
                        <img 
                          src={project.imageUrl} 
                          alt={project.title} 
                          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent"></div>
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 bg-brand-yellow/20 text-brand-yellow text-sm rounded-full backdrop-blur-sm">
                            {project.category}
                          </span>
                        </div>
                        <div className="absolute bottom-6 left-6 right-6">
                          <h3 className="text-xl font-bold text-brand-white mb-2 group-hover:text-brand-yellow transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-brand-white/80 text-sm mb-4 line-clamp-2">
                            {project.description}
                          </p>
                          <Link to={`/projetos/${project.id}`}>
                            <Button 
                              variant="outline" 
                              size="sm"
                              className="border-brand-yellow/50 text-brand-yellow hover:bg-brand-yellow hover:text-brand-black transition-colors"
                            >
                              Ver Detalhes
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              <CarouselPrevious className="hidden md:flex -left-12 border-brand-yellow/50 text-brand-yellow hover:bg-brand-yellow hover:text-brand-black" />
              <CarouselNext className="hidden md:flex -right-12 border-brand-yellow/50 text-brand-yellow hover:bg-brand-yellow hover:text-brand-black" />
            </Carousel>
            
            {/* Dots indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: count }, (_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === current - 1 
                      ? 'bg-brand-yellow scale-110' 
                      : 'bg-brand-white/30 hover:bg-brand-white/50'
                  }`}
                  onClick={() => api?.scrollTo(index)}
                />
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/projetos">
                <Button className="bg-brand-yellow text-brand-black hover:bg-opacity-90 px-8 py-3">
                  Ver Todos os Projetos
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ProjectsPreviewSection;