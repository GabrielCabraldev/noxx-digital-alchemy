
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-noxx-primary/5 to-noxx-accent/10 -z-10"></div>
      
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="mb-6">
              Transforme sua <span className="text-gradient">presença digital</span> em resultados reais
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl">
              Mais que um site, a Noxx entrega uma estratégia digital completa com design, experiência e tecnologia que conecta sua empresa a novos clientes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary" onClick={() => window.location.href = '#contact'}>
                Começar Projeto 
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button className="btn-secondary" onClick={() => window.location.href = '#services'}>
                Conheça Nossas Soluções
              </Button>
            </div>
            <div className="mt-12 flex flex-wrap items-center gap-8">
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-noxx-primary">200+</span>
                <span className="text-gray-600">Projetos Entregues</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-noxx-primary">95%</span>
                <span className="text-gray-600">Clientes Satisfeitos</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-noxx-primary">35%</span>
                <span className="text-gray-600">Aumento em Conversões</span>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="relative z-10 animate-float">
              <img 
                src="https://images.unsplash.com/photo-1581091878591-4f0714c6f36f?q=80&w=2070" 
                alt="Dashboard digital da Noxx" 
                className="rounded-xl shadow-2xl" 
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-noxx-accent/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-noxx-secondary/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
