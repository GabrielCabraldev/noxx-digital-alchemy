
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-stellaris-primary/5 to-stellaris-accent/10 -z-10"></div>
      
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="mb-6">
              Mais que um site. <span className="text-gradient">A inteligência</span> por trás da sua presença digital.
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl">
              Transforme dados em resultados com uma plataforma que une design profissional, experiência do usuário e tecnologia baseada em IA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary" onClick={() => window.location.href = '#pricing'}>
                Ver planos e preços 
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button className="btn-secondary" onClick={() => window.location.href = '#process'}>
                Como funciona
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="stats-card">
                <span className="text-4xl font-bold text-stellaris-primary animate-count-up">35%</span>
                <span className="text-gray-600">Aumento em Conversões</span>
              </div>
              <div className="stats-card">
                <span className="text-4xl font-bold text-stellaris-primary animate-count-up">72h</span>
                <span className="text-gray-600">Tempo de Entrega</span>
              </div>
              <div className="stats-card">
                <span className="text-4xl font-bold text-stellaris-primary animate-count-up">98%</span>
                <span className="text-gray-600">Clientes Satisfeitos</span>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="relative z-10 animate-float shadow-2xl rounded-xl overflow-hidden bg-white p-6">
              <h3 className="text-xl font-semibold mb-4">Relatório de Analytics Mensal</h3>
              <div className="space-y-4">
                <div className="analytics-card">
                  <div className="flex justify-between items-center mb-2">
                    <span>Visitantes Únicos</span>
                    <span className="text-stellaris-primary font-semibold">1.458</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-to-r from-stellaris-primary to-stellaris-accent"></div>
                  </div>
                </div>
                <div className="analytics-card">
                  <div className="flex justify-between items-center mb-2">
                    <span>Taxa de Conversão</span>
                    <span className="text-stellaris-primary font-semibold">4.8%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full w-1/2 bg-gradient-to-r from-stellaris-primary to-stellaris-accent"></div>
                  </div>
                </div>
                <div className="analytics-card">
                  <div className="flex justify-between items-center mb-2">
                    <span>Engajamento Médio</span>
                    <span className="text-stellaris-primary font-semibold">5:24</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full w-2/3 bg-gradient-to-r from-stellaris-primary to-stellaris-accent"></div>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-gray-600 text-sm">
                Você não recebe só um site. Recebe uma central de dados sobre o seu público.
              </p>
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-stellaris-accent/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-stellaris-secondary/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
