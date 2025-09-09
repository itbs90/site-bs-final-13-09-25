import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ImageModal from '@/components/ImageModal';
import ImageWithFallback from '@/components/ImageWithFallback';
 
// Project images imports
import arcoprime01 from '@/assets/projects/arcoprime-01.png';
import arcoprime02 from '@/assets/projects/arcoprime-02.png';
import arcoprime03 from '@/assets/projects/arcoprime-03.png';
import arcoprime04 from '@/assets/projects/arcoprime-04.png';
import arcoprime05 from '@/assets/projects/arcoprime-05.png';

import awi01 from '@/assets/projects/awi-01.png';
import awi02 from '@/assets/projects/awi-02.png';
import awi03 from '@/assets/projects/awi-03.png';
import awi04 from '@/assets/projects/awi-04.png';
import awi05 from '@/assets/projects/awi-05.png';
import awi06 from '@/assets/projects/awi-06.png';

import start02 from '@/assets/projects/start-02.png';
import start03 from '@/assets/projects/start-03.png';
import start04 from '@/assets/projects/start-04.png';
import start05 from '@/assets/projects/start-05.png';
import start06 from '@/assets/projects/start-06.png';
import start09 from '@/assets/projects/start-09.png';

import foodway01 from '@/assets/projects/foodway-01.png';
import foodway02 from '@/assets/projects/foodway-02.png';
import foodway03 from '@/assets/projects/foodway-03.png';
import foodway04 from '@/assets/projects/foodway-04.png';
import foodway05 from '@/assets/projects/foodway-05.png';
import foodway06 from '@/assets/projects/foodway-06.png';
import foodway07 from '@/assets/projects/foodway-07.png';

import udec01 from '@/assets/projects/udec-01.png';
import udec02 from '@/assets/projects/udec-02.png';
import udec03 from '@/assets/projects/udec-03.png';

import psidofuturo01 from '@/assets/projects/psidofuturo-01.png';
import psidofuturo02 from '@/assets/projects/psidofuturo-02.png';
import psidofuturo03 from '@/assets/projects/psidofuturo-03.png';
import psidofuturo04 from '@/assets/projects/psidofuturo-04.png';
import psidofuturo05 from '@/assets/projects/psidofuturo-05.png';
import psidofuturo06 from '@/assets/projects/psidofuturo-06.png';
const projectsData = [{
  id: 1,
  title: 'Arcoprime',
  description: 'Marca alemã de discos de corte que redefine confiança entre promessa e entrega.',
  fullDescription: 'A Arcoprime surgiu na Alemanha para reposicionar a categoria de discos de corte, trazendo uma proposta clara: resgatar a confiança entre promessa e entrega em um mercado saturado de discursos vazios. Criamos a identidade visual e verbal da marca, além do design de embalagem para vendas online, traduzindo precisão, excelência e durabilidade em uma presença sólida e diferenciada.',
  services: ['Identidade Visual', 'Identidade Verbal', 'Design de Embalagem'],
  date: '2024',
  client: 'Arcoprime',
  category: 'Industrial',
  images: [arcoprime01, arcoprime02, arcoprime03, arcoprime04, arcoprime05]
}, {
  id: 2,
  title: 'AWI Service & AWI Academy',
  description: 'Referência em inspeção técnica e educação industrial que une segurança, conformidade e preparo profissional.',
  fullDescription: 'A AWI é especialista em inspeção técnica e integridade industrial, com mais de uma década de atuação e mais de 10 mil inspeções realizadas em setores estratégicos como mineração, siderurgia, óleo e gás e papel e celulose. Nosso trabalho foi estruturar a comunicação para a expansão da marca com a criação da AWI Academy, vertical de educação que oferece cursos técnicos voltados para manutenção, inspeção e confiabilidade. Desenvolvemos estratégia de conteúdo, identidade verbal e design para consolidar a AWI não apenas como referência em controle e segurança de ativos, mas também como formadora de profissionais preparados para os desafios da indústria.',
  services: ['Estratégia de Conteúdo', 'Identidade Verbal', 'Design'],
  date: '2024',
  client: 'AWI Service',
  category: 'Industrial',
  images: [awi01, awi02, awi03, awi04, awi05, awi06]
}, {
  id: 3,
  title: 'Start',
  description: 'Escola de futevôlei que inspira superação e comunidade no esporte.',
  fullDescription: 'A Start nasceu para ser mais que uma escola de futevôlei: é um movimento de inspiração, superação e comunidade. Desenvolvemos identidade visual e verbal, além da estratégia de conteúdo para redes sociais, traduzindo a energia do esporte em uma marca consistente e acessível. O símbolo traz o pentágono das bolas de jogo com a silhueta de um atleta executando o icônico Shark Attack, reforçando técnica, ousadia e evolução constante. A comunicação é motivacional, colaborativa e bem-humorada, promovendo um ambiente acolhedor onde o futevôlei se torna uma experiência de crescimento pessoal e coletivo.',
  services: ['Identidade Visual', 'Identidade Verbal', 'Estratégia de Conteúdo'],
  date: '2024',
  client: 'Start Futevôlei',
  category: 'Esportes',
  images: [start02, start03, start04, start05, start06, start09]
}, {
  id: 4,
  title: 'Foodway',
  description: 'Plataforma que simplifica pedidos gastronômicos com praticidade, autonomia e pagamento direto pelo celular.',
  fullDescription: 'A Foodway é uma startup de food service que nasceu para revolucionar a experiência gastronômica, eliminando filas e trazendo mais autonomia ao consumidor. A marca se posiciona como a (r)evolução do pedido rápido: "Pediu, pagou, pegou!". Nosso trabalho foi desenvolver o posicionamento de marca e a estratégia de crescimento, garantindo consistência em toda a jornada digital. Atuamos em estratégia de conteúdo, marketing e UX writing, transformando o aplicativo em uma experiência fluida e acessível — desde o momento do pedido até a entrega.',
  services: ['Estratégia de Conteúdo', 'Marketing', 'UX Writing'],
  date: '2023',
  client: 'Foodway',
  category: 'Tecnologia',
  images: [foodway01, foodway02, foodway03, foodway04, foodway05, foodway06, foodway07]
}, {
  id: 5,
  title: 'Um Dia Eu Caso',
  description: 'Plataforma SaaS que transforma o planejamento de casamentos com inteligência artificial e automação.',
  fullDescription: 'O Um Dia Eu Caso nasceu para simplificar o caos do planejamento de casamentos, transformando listas, tarefas e orçamentos em um painel inteligente e visual. Desenvolvemos a plataforma SaaS com apoio de inteligência artificial e automação, garantindo praticidade, organização e experiência personalizada para cada casal. Nosso trabalho também envolveu estratégia de conteúdo, marketing e UX writing para consolidar a marca como referência em inovação no setor de eventos.',
  services: ['Estratégia de Conteúdo', 'Marketing', 'UX Writing', 'Inteligência Artificial'],
  date: '2024',
  client: 'Um Dia Eu Caso',
  category: 'Tecnologia',
  images: [udec01, udec02, udec03]
}, {
  id: 6,
  title: 'Psi do Futuro',
  description: 'Ecossistema de saúde mental que conecta psicólogas especializadas a pessoas em busca de bem-estar e transformação.',
  fullDescription: 'A Psi do Futuro é uma das marcas mais reconhecidas no setor de saúde mental, posicionada como um ecossistema que une tecnologia, psicologia e propósito. Nosso trabalho foi desenvolver a identidade verbal, criando diretrizes de linguagem consistentes para transmitir a essência da marca: acessível, motivadora e transformadora. O resultado é uma comunicação próxima, confiável e inspiradora, capaz de engajar psicólogas e pacientes em torno de um futuro mais saudável e humano.',
  services: ['Identidade Verbal'],
  date: '2023',
  client: 'Psi do Futuro',
  category: 'Saúde Mental',
  images: [psidofuturo01, psidofuturo02, psidofuturo03, psidofuturo04, psidofuturo05, psidofuturo06]
}];
const ProjectDetails = () => {
  const {
    id
  } = useParams();
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleImageClick = (imageUrl: string) => {
    const imageIndex = project?.images.findIndex(img => img === imageUrl) ?? 0;
    setCurrentImageIndex(imageIndex);
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const handleNavigateImage = (index: number) => {
    if (project?.images[index]) {
      setCurrentImageIndex(index);
      setSelectedImage(project.images[index]);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage('');
    setCurrentImageIndex(0);
  };
  
  const project = projectsData.find(p => p.id === parseInt(id || '1'));
  if (!project) {
    return <div className="min-h-screen bg-brand-black text-brand-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Projeto não encontrado</h1>
          <Link to="/projetos">
            <Button className="bg-brand-yellow text-brand-black">
              Voltar aos Projetos
            </Button>
          </Link>
        </div>
      </div>;
  }
  return (
    <div className="min-h-screen bg-brand-black text-brand-white">
      <Navbar />
      <div className="pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back button */}
          <Link to="/projetos" className="inline-flex items-center text-brand-yellow hover:text-brand-white transition-colors mb-8">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Voltar aos Projetos
          </Link>

          {/* Project header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-brand-white/80 mb-6">{project.description}</p>
            
            {/* Project info */}
            <div className="flex flex-wrap gap-6 text-brand-white/70">
              
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2 text-brand-yellow" />
                <span>{project.client}</span>
              </div>
              <div className="flex items-center">
                <Tag className="w-5 h-5 mr-2 text-brand-yellow" />
                <span>{project.category}</span>
              </div>
            </div>
          </div>

          {/* Main image */}
          <div className="mb-8 group">
            <div className="relative overflow-hidden rounded-lg bg-brand-gray-900">
              <ImageWithFallback 
                src={project.images[0]} 
                alt={project.title} 
                className="w-full h-64 sm:h-80 md:h-96 object-cover cursor-pointer hover:scale-105 transition-transform duration-300" 
                onClick={() => handleImageClick(project.images[0])}
                loading="eager"
              />
            </div>
          </div>

          {/* Project description */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-brand-yellow mb-4">Sobre o Projeto</h2>
            <p className="text-lg text-brand-white/90 leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Services */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-brand-yellow mb-4">Serviços Realizados</h2>
            <div className="flex flex-wrap gap-3">
              {project.services.map((service, index) => <span key={index} className="px-4 py-2 bg-brand-gray-800 text-brand-white rounded-full border border-brand-gray-700 hover:border-brand-yellow/50 transition-colors">
                  {service}
                </span>)}
            </div>
          </div>

          {/* Additional images */}
          {project.images.length > 1 && <div className="mb-8">
              <h2 className="text-2xl font-bold text-brand-yellow mb-6">Galeria</h2>
              <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4">
                {project.images.slice(1).map((image, index) => 
                  <div key={index} className="group relative overflow-hidden rounded-lg bg-brand-gray-900 flex-shrink-0 w-80 sm:w-96">
                    <ImageWithFallback 
                      src={image} 
                      alt={`${project.title} - Imagem ${index + 2}`} 
                      className="w-full h-auto object-cover cursor-pointer transition-all duration-500 group-hover:scale-110" 
                      onClick={() => handleImageClick(image)}
                      loading="lazy"
                    />
                  </div>
                )}
              </div>
            </div>}

          {/* Image Modal */}
          <ImageModal 
            imageUrl={selectedImage}
            isOpen={isModalOpen}
            onClose={closeModal}
            images={project.images}
            currentIndex={currentImageIndex}
            onNavigate={handleNavigateImage}
          />

          {/* CTA */}
          <Card className="bg-brand-black/20 backdrop-blur-sm border border-brand-gray-700/30 text-center">
            <CardContent className="p-12">
              <h3 className="text-3xl md:text-4xl font-bold text-brand-yellow mb-6">
                Vamos criar algo Singular?
              </h3>
              <p className="text-lg text-brand-white/80 mb-8 max-w-3xl mx-auto">
                Transforme sua marca em um ativo estratégico que não apenas se destaca, mas efetivamente impulsiona crescimento e resultados.
              </p>
              <a href="https://api.whatsapp.com/send/?phone=5531997606672&text=Oi,%20quero%20ajuda%20com%20meu%20neg%C3%B3cio" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-brand-yellow text-brand-black font-semibold rounded-full hover:bg-opacity-90 transition-all duration-300">
                Falar com especialista
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default ProjectDetails;