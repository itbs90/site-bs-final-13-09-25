
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectModal from './ProjectModal';
import arcoprimeProject from '@/assets/projects/arcoprime-01.png';
import awiProject from '@/assets/projects/awi-01.png';
import startProject from '@/assets/projects/start-02.png';
import foodwayProject from '@/assets/projects/foodway-01.png';
import udecProject from '@/assets/projects/udec-01.png';
import psiFuturoProject from '@/assets/projects/psidofuturo-01.png';

const projectsList = [
  {
    id: 1,
    title: 'Arcoprime',
    description: 'Marca alemã de discos de corte que redefine confiança entre promessa e entrega.',
    fullDescription: 'A Arcoprime surgiu na Alemanha para reposicionar a categoria de discos de corte, trazendo uma proposta clara: resgatar a confiança entre promessa e entrega em um mercado saturado de discursos vazios. Criamos a identidade visual e verbal da marca, além do design de embalagem para vendas online, traduzindo precisão, excelência e durabilidade em uma presença sólida e diferenciada.',
    services: ['Identidade Visual', 'Identidade Verbal', 'Design de Embalagem'],
    category: 'Industrial',
    date: '2024',
    imageUrl: arcoprimeProject,
    gallery: [
      '@/assets/projects/arcoprime-02.png',
      '@/assets/projects/arcoprime-03.png',
      '@/assets/projects/arcoprime-04.png',
      '@/assets/projects/arcoprime-05.png'
    ]
  },
  {
    id: 2,
    title: 'AWI Service',
    description: 'Referência em inspeção técnica e educação industrial que une segurança, conformidade e preparo profissional.',
    fullDescription: 'A AWI é especialista em inspeção técnica e integridade industrial, com mais de uma década de atuação e mais de 10 mil inspeções realizadas em setores estratégicos como mineração, siderurgia, óleo e gás e papel e celulose. Nosso trabalho foi estruturar a comunicação para a expansão da marca com a criação da AWI Academy, vertical de educação que oferece cursos técnicos voltados para manutenção, inspeção e confiabilidade.',
    services: ['Estratégia de Conteúdo', 'Identidade Verbal', 'Design'],
    category: 'Industrial',
    date: '2024',
    imageUrl: 'https://brandingsingular.com/wp-content/uploads/2025/09/case-awi-03.png',
    gallery: [
      '@/assets/projects/awi-02.png',
      '@/assets/projects/awi-03.png',
      '@/assets/projects/awi-05.png',
      '@/assets/projects/awi-06.png'
    ]
  },
  {
    id: 3,
    title: 'Start Futevôlei',
    description: 'Escola de futevôlei que inspira superação e comunidade no esporte.',
    fullDescription: 'A Start nasceu para ser mais que uma escola de futevôlei: é um movimento de inspiração, superação e comunidade. Desenvolvemos identidade visual e verbal, além da estratégia de conteúdo para redes sociais, traduzindo a energia do esporte em uma marca consistente e acessível. O símbolo traz o pentágono das bolas de jogo com a silhueta de um atleta executando o icônico Shark Attack.',
    services: ['Identidade Visual', 'Identidade Verbal', 'Estratégia de Conteúdo'],
    category: 'Esportes',
    date: '2024',
    imageUrl: startProject,
    gallery: [
      '@/assets/projects/start-03.png',
      '@/assets/projects/start-04.png',
      '@/assets/projects/start-05.png',
      '@/assets/projects/start-06.png',
      '@/assets/projects/start-09.png'
    ]
  },
  {
    id: 4,
    title: 'Foodway',
    description: 'Plataforma que simplifica pedidos gastronômicos com praticidade, autonomia e pagamento direto pelo celular.',
    fullDescription: 'A Foodway é uma startup de food service que nasceu para revolucionar a experiência gastronômica, eliminando filas e trazendo mais autonomia ao consumidor. A marca se posiciona como a (r)evolução do pedido rápido: "Pediu, pagou, pegou!". Nosso trabalho foi desenvolver o posicionamento de marca e a estratégia de crescimento.',
    services: ['Estratégia de Conteúdo', 'Marketing', 'UX Writing'],
    category: 'Tecnologia',
    date: '2023',
    imageUrl: foodwayProject,
    gallery: [
      '@/assets/projects/foodway-02.png',
      '@/assets/projects/foodway-03.png',
      '@/assets/projects/foodway-04.png',
      '@/assets/projects/foodway-05.png',
      '@/assets/projects/foodway-06.png',
      '@/assets/projects/foodway-07.png'
    ]
  },
  {
    id: 5,
    title: 'Um Dia Eu Caso',
    description: 'Plataforma SaaS que transforma o planejamento de casamentos com inteligência artificial e automação.',
    fullDescription: 'O Um Dia Eu Caso nasceu para simplificar o caos do planejamento de casamentos, transformando listas, tarefas e orçamentos em um painel inteligente e visual. Desenvolvemos a plataforma SaaS com apoio de inteligência artificial e automação, garantindo praticidade, organização e experiência personalizada para cada casal.',
    services: ['Estratégia de Conteúdo', 'Marketing', 'UX Writing', 'Inteligência Artificial'],
    category: 'Tecnologia',
    date: '2024',
    imageUrl: udecProject,
    gallery: [
      '@/assets/projects/udec-02.png',
      '@/assets/projects/udec-03.png'
    ]
  },
  {
    id: 6,
    title: 'Psi do Futuro',
    description: 'Ecossistema de saúde mental que conecta psicólogas especializadas a pessoas em busca de bem-estar e transformação.',
    fullDescription: 'A Psi do Futuro é uma das marcas mais reconhecidas no setor de saúde mental, posicionada como um ecossistema que une tecnologia, psicologia e propósito. Nosso trabalho foi desenvolver a identidade verbal, criando diretrizes de linguagem consistentes para transmitir a essência da marca: acessível, motivadora e transformadora.',
    services: ['Identidade Verbal'],
    category: 'Saúde Mental',
    date: '2023',
    imageUrl: psiFuturoProject,
    gallery: [
      '@/assets/projects/psidofuturo-02.png',
      '@/assets/projects/psidofuturo-03.png',
      '@/assets/projects/psidofuturo-04.png',
      '@/assets/projects/psidofuturo-05.png',
      '@/assets/projects/psidofuturo-06.png'
    ]
  }
];

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<typeof projectsList[0] | null>(null);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

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

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projectsList.length);
  };

  const prevProject = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + projectsList.length) % projectsList.length);
  };

  // Auto-rotate projects
  useEffect(() => {
    const interval = setInterval(() => {
      nextProject();
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="bg-brand-black py-0">
      <div className="section-container py-[54px]">
        <h2 ref={headingRef} className="heading-lg text-center mb-16 opacity-0">
          <span className="text-brand-yellow">Projetos</span>
        </h2>

        <div ref={projectsRef} className="opacity-0 transition-all duration-500">
          <div className="relative max-w-6xl mx-auto">
            {/* Navigation buttons */}
            <button
              onClick={prevProject}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-brand-yellow/20 backdrop-blur-sm border border-brand-yellow/30 rounded-full flex items-center justify-center text-brand-yellow hover:bg-brand-yellow hover:text-brand-black transition-all duration-300 group"
            >
              <ChevronLeft className="w-6 h-6 transition-transform group-hover:scale-110" />
            </button>
            
            <button
              onClick={nextProject}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-brand-yellow/20 backdrop-blur-sm border border-brand-yellow/30 rounded-full flex items-center justify-center text-brand-yellow hover:bg-brand-yellow hover:text-brand-black transition-all duration-300 group"
            >
              <ChevronRight className="w-6 h-6 transition-transform group-hover:scale-110" />
            </button>

            {/* Projects carousel */}
            <div className="relative h-[600px] overflow-hidden">
              <div className="flex items-center justify-center h-full perspective-1000">
                {projectsList.map((project, index) => {
                  const offset = (index - currentProjectIndex + projectsList.length) % projectsList.length;
                  const isActive = offset === 0;
                  
                  // Calculate position and styling based on offset
                  let translateX = 0;
                  let translateZ = 0;
                  let rotateY = 0;
                  let scale = 1;
                  let opacity = 1;
                  let zIndex = projectsList.length;
                  
                  if (offset === 0) {
                    // Active card - center front
                    translateX = 0;
                    translateZ = 0;
                    scale = 1;
                    opacity = 1;
                    zIndex = projectsList.length;
                  } else if (offset === 1) {
                    // Next card - right side
                    translateX = 320;
                    translateZ = -100;
                    rotateY = -15;
                    scale = 0.85;
                    opacity = 0.7;
                    zIndex = projectsList.length - 1;
                  } else if (offset === projectsList.length - 1) {
                    // Previous card - left side
                    translateX = -320;
                    translateZ = -100;
                    rotateY = 15;
                    scale = 0.85;
                    opacity = 0.7;
                    zIndex = projectsList.length - 1;
                  } else {
                    // Hidden cards
                    translateX = offset > projectsList.length / 2 ? -400 : 400;
                    translateZ = -200;
                    scale = 0.7;
                    opacity = 0;
                    zIndex = 0;
                  }
                  
                  return (
                    <Card
                      key={project.id}
                      className="absolute w-80 h-80 cursor-pointer transition-all duration-700 ease-out bg-brand-black/20 backdrop-blur-sm border border-brand-gray-700/30 hover:border-brand-yellow/50"
                      style={{
                        transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                        opacity,
                        zIndex,
                        transformStyle: 'preserve-3d',
                      }}
                      onClick={() => setSelectedProject(project)}
                    >
                      <div className="relative group h-full overflow-hidden rounded-lg">
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent pointer-events-none"></div>
                        
                        {/* Services tags */}
                        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                          {project.services.slice(0, 2).map((service, serviceIndex) => (
                            <span
                              key={serviceIndex}
                              className="px-2 py-1 bg-brand-yellow/90 text-brand-black text-xs font-medium rounded backdrop-blur-sm"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                        
                        <CardContent className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="text-lg font-bold text-brand-white mb-2 line-clamp-2">
                            {project.title}
                          </h3>
                          <p className="text-brand-white/70 text-sm line-clamp-3">
                            {project.description}
                          </p>
                        </CardContent>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
            
            {/* Project indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {projectsList.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentProjectIndex 
                      ? 'bg-brand-yellow w-8' 
                      : 'bg-brand-white/30 hover:bg-brand-white/50'
                  }`}
                  onClick={() => setCurrentProjectIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default ProjectsSection;
