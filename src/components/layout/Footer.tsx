
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-stellaris-dark text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div>
            <Link to="/" onClick={() => window.scrollTo(0, 0)} className="text-2xl font-bold mb-6 block">
              <span className="text-stellaris-accent">S</span>tellaris
            </Link>
            <p className="text-gray-300 mb-6">
              Transformamos a presença digital da sua empresa com tecnologia, design e inteligência para impulsionar seus resultados.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Soluções</h3>
            <ul className="space-y-3">
              <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} className="text-gray-300 hover:text-white transition-colors">Sites Institucionais</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} className="text-gray-300 hover:text-white transition-colors">E-commerce</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} className="text-gray-300 hover:text-white transition-colors">Landing Pages</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} className="text-gray-300 hover:text-white transition-colors">Sistemas Web</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} className="text-gray-300 hover:text-white transition-colors">SEO & Marketing</a></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Empresa</h3>
            <ul className="space-y-3">
              <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('benefits'); }} className="text-gray-300 hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Nosso Time</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Carreiras</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-stellaris-accent mt-1 flex-shrink-0" />
                <a href="mailto:stellaris.deep@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  stellaris.deep@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-stellaris-accent mt-1 flex-shrink-0" />
                <a href="tel:+557411-8938" className="text-gray-300 hover:text-white transition-colors">
                  +55 7411-8938
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-stellaris-accent mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  São Paulo, SP<br />
                  Brasil
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Stellaris. Todos os direitos reservados.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li><Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">Termos</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacidade</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookies</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
