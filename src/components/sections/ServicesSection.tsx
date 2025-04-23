
import { Code, Globe, ShoppingBag, Sparkles, BarChart, Award } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: <Globe className="h-10 w-10 text-noxx-accent" />,
    title: "Sites Institucionais",
    description: "Construímos sites profissionais que representam sua marca com design personalizado, otimizados para todos os dispositivos e com foco em conversão.",
  },
  {
    icon: <ShoppingBag className="h-10 w-10 text-noxx-accent" />,
    title: "E-commerce",
    description: "Desenvolva sua loja virtual com uma experiência de compra otimizada, gestão de estoque inteligente e integração com meios de pagamento.",
  },
  {
    icon: <Sparkles className="h-10 w-10 text-noxx-accent" />,
    title: "Landing Pages",
    description: "Páginas de alta conversão para suas campanhas, com design estratégico e elementos otimizados para transformar visitantes em leads.",
  },
  {
    icon: <Code className="h-10 w-10 text-noxx-accent" />,
    title: "Sistemas Web",
    description: "Soluções personalizadas para a gestão do seu negócio, automatizando processos e melhorando a produtividade da sua equipe.",
  },
  {
    icon: <BarChart className="h-10 w-10 text-noxx-accent" />,
    title: "SEO & Marketing",
    description: "Estratégias de otimização para mecanismos de busca para aumentar sua visibilidade online e atrair mais clientes qualificados.",
  },
  {
    icon: <Award className="h-10 w-10 text-noxx-accent" />,
    title: "Consultoria Digital",
    description: "Análise de presença digital, recomendações estratégicas e plano de ação para alavancar seus resultados online.",
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="section bg-noxx-light">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">
            Soluções que <span className="text-gradient">impulsionam</span> seu negócio
          </h2>
          <p className="text-lg text-gray-700">
            Desenvolvemos estratégias digitais personalizadas que combinam design, tecnologia e marketing para maximizar seus resultados online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-8 rounded-xl card-hover border-none shadow-md">
              <div className="mb-6 p-4 rounded-lg bg-noxx-accent/10 inline-block">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button className="btn-primary" onClick={() => window.location.href = '#contact'}>
            Quero uma solução personalizada
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
