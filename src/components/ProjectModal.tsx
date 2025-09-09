
import React from 'react';
import { X } from 'lucide-react';

interface ProjectModalProps {
  project: {
    id: number;
    title: string;
    description: string;
    fullDescription: string;
    services: string[];
    imageUrl: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative max-w-2xl w-full mx-4 bg-gradient-to-b from-brand-gray-900 to-brand-gray-800 rounded-lg border border-brand-gray-700 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-brand-gray-800 hover:bg-brand-gray-700 transition-colors"
        >
          <X className="h-5 w-5 text-brand-white" />
        </button>
        
        <div className="relative">
          <img 
            src={project.imageUrl} 
            alt={project.title}
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 to-transparent rounded-t-lg"></div>
        </div>
        
        <div className="p-8">
          <h3 className="text-3xl font-bold text-brand-white mb-4">{project.title}</h3>
          <p className="text-brand-white/80 text-lg mb-6 leading-relaxed">
            {project.fullDescription}
          </p>
          
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-brand-yellow mb-3">Serviços Realizados</h4>
            <div className="flex flex-wrap gap-2">
              {project.services.map((service, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-brand-gray-800 text-brand-white rounded-full text-sm border border-brand-gray-700"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
