
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-noxx-dark text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div>
            <Link to="/" className="text-2xl font-bold mb-6 block">
              <span className="text-noxx-accent">N</span>oxx
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
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Sites Institucionais</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">E-commerce</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Landing Pages</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Sistemas Web</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">SEO & Marketing</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Empresa</h3>
            <ul className="space-y-3">
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Sobre Nós</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Nosso Time</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Carreiras</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Política de Privacidade</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-noxx-accent mt-1 flex-shrink-0" />
                <a href="mailto:contato@noxx.com.br" className="text-gray-300 hover:text-white transition-colors">
                  contato@noxx.com.br
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-noxx-accent mt-1 flex-shrink-0" />
                <a href="tel:+551199999999" className="text-gray-300 hover:text-white transition-colors">
                  +55 11 99999-9999
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-noxx-accent mt-1 flex-shrink-0" />
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
            © {new Date().getFullYear()} Noxx. Todos os direitos reservados.
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
