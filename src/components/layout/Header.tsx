
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" onClick={() => window.scrollTo(0, 0)} className="text-2xl font-bold text-stellaris-primary">
            <span className="text-stellaris-accent">S</span>tellaris
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#services" 
            onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} 
            className="font-medium hover:text-stellaris-accent transition-colors"
          >
            Soluções
          </a>
          <a 
            href="#benefits" 
            onClick={(e) => { e.preventDefault(); scrollToSection('benefits'); }} 
            className="font-medium hover:text-stellaris-accent transition-colors"
          >
            Diferenciais
          </a>
          <a 
            href="#process" 
            onClick={(e) => { e.preventDefault(); scrollToSection('process'); }} 
            className="font-medium hover:text-stellaris-accent transition-colors"
          >
            Processo
          </a>
          <a 
            href="#testimonials" 
            onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }} 
            className="font-medium hover:text-stellaris-accent transition-colors"
          >
            Cases
          </a>
          <Button 
            onClick={() => scrollToSection('contact')}
            className="btn-primary ml-4"
          >
            Contato
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 focus:outline-none"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-stellaris-primary" />
            ) : (
              <Menu className="h-6 w-6 text-stellaris-primary" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <a 
              href="#services" 
              onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} 
              className="font-medium py-2 hover:text-stellaris-accent"
            >
              Soluções
            </a>
            <a 
              href="#benefits" 
              onClick={(e) => { e.preventDefault(); scrollToSection('benefits'); }} 
              className="font-medium py-2 hover:text-stellaris-accent"
            >
              Diferenciais
            </a>
            <a 
              href="#process" 
              onClick={(e) => { e.preventDefault(); scrollToSection('process'); }} 
              className="font-medium py-2 hover:text-stellaris-accent"
            >
              Processo
            </a>
            <a 
              href="#testimonials" 
              onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }} 
              className="font-medium py-2 hover:text-stellaris-accent"
            >
              Cases
            </a>
            <a 
              href="#contact" 
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} 
              className="btn-primary text-center"
            >
              Contato
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
