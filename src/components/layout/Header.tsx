
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

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-noxx-primary">
            <span className="text-noxx-accent">N</span>oxx
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="#services" className="font-medium hover:text-noxx-accent transition-colors">
            Soluções
          </Link>
          <Link to="#benefits" className="font-medium hover:text-noxx-accent transition-colors">
            Diferenciais
          </Link>
          <Link to="#process" className="font-medium hover:text-noxx-accent transition-colors">
            Processo
          </Link>
          <Link to="#testimonials" className="font-medium hover:text-noxx-accent transition-colors">
            Cases
          </Link>
          <Button 
            onClick={() => window.location.href = '#contact'}
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
              <X className="h-6 w-6 text-noxx-primary" />
            ) : (
              <Menu className="h-6 w-6 text-noxx-primary" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <Link 
              to="#services" 
              className="font-medium py-2 hover:text-noxx-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              Soluções
            </Link>
            <Link 
              to="#benefits" 
              className="font-medium py-2 hover:text-noxx-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              Diferenciais
            </Link>
            <Link 
              to="#process" 
              className="font-medium py-2 hover:text-noxx-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              Processo
            </Link>
            <Link 
              to="#testimonials" 
              className="font-medium py-2 hover:text-noxx-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              Cases
            </Link>
            <Link 
              to="#contact" 
              className="btn-primary text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
