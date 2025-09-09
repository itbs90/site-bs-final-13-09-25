import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import logoBS from '@/assets/logo-bs.png';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'liquid-glass py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src={logoBS} alt="Branding Singular" className="h-8 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            <Link to="/" className={`text-brand-white hover:text-brand-yellow transition-colors ${location.pathname === '/' ? 'text-brand-yellow' : ''}`}>
              Home
            </Link>
            <a href="/#services" className="text-brand-white hover:text-brand-yellow transition-colors">
              Serviços
            </a>
            <Link to="/projetos" className={`text-brand-white hover:text-brand-yellow transition-colors ${location.pathname === '/projetos' ? 'text-brand-yellow' : ''}`}>
              Projetos
            </Link>
            <a href="/#methodology" className="text-brand-white hover:text-brand-yellow transition-colors">
              Metodologia
            </a>
          </nav>

          <div className="hidden md:block">
            <Button asChild className="bg-brand-yellow text-brand-black hover:bg-opacity-90 rounded-full">
              <a href="https://form.respondi.app/8Rkmcq1d" target="_blank" rel="noopener noreferrer">
                Solicitar Proposta
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-brand-white hover:text-brand-yellow transition-colors">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && <div className="md:hidden bg-brand-black absolute top-full left-0 right-0 animate-fade-in">
          <div className="px-4 py-5 space-y-4">
            <Link to="/" className="block text-brand-white hover:text-brand-yellow transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <a href="/#services" className="block text-brand-white hover:text-brand-yellow transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Serviços
            </a>
            <Link to="/projetos" className="block text-brand-white hover:text-brand-yellow transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Projetos
            </Link>
            <a href="/#methodology" className="block text-brand-white hover:text-brand-yellow transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Metodologia
            </a>
            <Button asChild className="w-full bg-brand-yellow text-brand-black hover:bg-opacity-90 rounded-full" onClick={() => setMobileMenuOpen(false)}>
              <a href="https://api.whatsapp.com/send/?phone=5531997606672&text=Oi,%20quero%20ajuda%20com%20meu%20neg%C3%B3cio" target="_blank" rel="noopener noreferrer">
                Falar com Especialista
              </a>
            </Button>
          </div>
        </div>}
    </header>;
};
export default Navbar;