import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ImageModal from '@/components/ImageModal';
import arcoprimeProject from '@/assets/projects/arcoprime-01.png';
import awiProject from '@/assets/projects/awi-01.png';
import startProject from '@/assets/projects/start-02.png';
import foodwayProject from '@/assets/projects/foodway-01.png';
import udecProject from '@/assets/projects/udec-01.png';
import psiFuturoProject from '@/assets/projects/psidofuturo-01.png';
import ImageWithFallback from '@/components/ImageWithFallback';
 
const projectsList = [{
  id: 1,
  title: 'Arcoprime',
  description: 'Marca alemã de discos de corte que redefine confiança entre promessa e entrega.',
  category: 'Industrial',
  date: '2024',
  imageUrl: arcoprimeProject
}, {
  id: 2,
  title: 'AWI Service',
  description: 'Referência em inspeção técnica e educação industrial que une segurança, conformidade e preparo profissional.',
  category: 'Industrial',
  date: '2024',
  imageUrl: 'https://brandingsingular.com/wp-content/uploads/2025/09/case-awi-03.png'
}, {
  id: 3,
  title: 'Start Futevôlei',
  description: 'Escola de futevôlei que inspira superação e comunidade no esporte.',
  category: 'Esportes',
  date: '2024',
  imageUrl: startProject
}, {
  id: 4,
  title: 'Foodway',
  description: 'Plataforma que simplifica pedidos gastronômicos com praticidade, autonomia e pagamento direto pelo celular.',
  category: 'Tecnologia',
  date: '2023',
  imageUrl: foodwayProject
}, {
  id: 5,
  title: 'Um Dia Eu Caso',
  description: 'Plataforma SaaS que transforma o planejamento de casamentos com inteligência artificial e automação.',
  category: 'Tecnologia',
  date: '2024',
  imageUrl: udecProject
}, {
  id: 6,
  title: 'Psi do Futuro',
  description: 'Ecossistema de saúde mental que conecta psicólogas especializadas a pessoas em busca de bem-estar e transformação.',
  category: 'Saúde Mental',
  date: '2023',
  imageUrl: psiFuturoProject
}];
const Projects = () => {
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage('');
  };

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-black text-brand-white">
      <Navbar />
      <div className="pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Gradient overlay covering full width */}
          <div className="absolute inset-0 gradient-overlay-full pointer-events-none"></div>
          <div className="relative z-10">
            <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Nossos <span className="text-brand-yellow">Projetos</span>
          </h1>
          <p className="text-xl text-brand-white/80 max-w-2xl mx-auto">
            Conheça alguns dos trabalhos que desenvolvemos para marcas que queriam se destacar no mercado.
          </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map(project => <Link key={project.id} to={`/projetos/${project.id}`}>
              <Card className="group bg-transparent border-brand-gray-800 hover:border-brand-yellow/50 transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="relative overflow-hidden rounded-t-lg">
                  <ImageWithFallback 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110 cursor-pointer" 
                    loading="lazy"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleImageClick(project.imageUrl);
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-60"></div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-brand-yellow/20 text-brand-yellow text-sm rounded-full backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  
                  <h3 className="text-xl font-bold text-brand-white mb-3 group-hover:text-brand-yellow transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-brand-white/70">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            </Link>)}
            </div>

          {/* CTA Section */}
          <div className="mt-20">
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

          {/* Image Modal */}
          <ImageModal 
            imageUrl={selectedImage}
            isOpen={isModalOpen}
            onClose={closeModal}
          />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Projects;