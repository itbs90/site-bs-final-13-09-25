
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-brand-black text-brand-white flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="text-center max-w-md">
          <div className="mb-8">
            <h1 className="text-6xl font-bold text-brand-yellow mb-4">404</h1>
            <h2 className="text-2xl font-bold mb-4">Página não encontrada</h2>
            <p className="text-brand-white/70 mb-8">
              A página que você está procurando não existe ou foi movida.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button className="bg-brand-yellow text-brand-black hover:bg-opacity-90">
                <Home className="w-4 h-4 mr-2" />
                Voltar ao Início
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="border-brand-gray-700 text-brand-white hover:bg-brand-gray-800"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
