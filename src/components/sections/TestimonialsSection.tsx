
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "João Silva",
    role: "CEO, TechSolutions",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=774",
    content: "A Noxx transformou nossa presença online. O novo site aumentou as conversões em 45% já no primeiro mês. A equipe foi profissional e entregou antes do prazo.",
    logo: "https://via.placeholder.com/100x40",
    stats: {
      traffic: "+120%",
      conversion: "+45%",
      ranking: "Top 3"
    }
  },
  {
    id: 2,
    name: "Maria Oliveira",
    role: "Diretora de Marketing, FashionModa",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=774",
    content: "O e-commerce desenvolvido pela Noxx revolucionou nosso negócio. A plataforma é intuitiva, rápida e os clientes adoram a experiência de compra.",
    logo: "https://via.placeholder.com/100x40",
    stats: {
      traffic: "+85%",
      conversion: "+37%",
      ranking: "Top 5"
    }
  },
  {
    id: 3,
    name: "Roberto Mendes",
    role: "Proprietário, Restaurante Sabores",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=774",
    content: "Desde que a Noxx implementou nosso sistema de reservas online, nosso fluxo de clientes aumentou consideravelmente. O ROI superou todas as expectativas.",
    logo: "https://via.placeholder.com/100x40",
    stats: {
      traffic: "+95%",
      conversion: "+62%",
      ranking: "Top 1"
    }
  }
];

const projects = [
  {
    id: 1,
    title: "E-commerce FashionModa",
    type: "E-commerce",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070",
    description: "Desenvolvimento de plataforma completa de e-commerce com sistema inteligente de recomendações e checkout otimizado."
  },
  {
    id: 2,
    title: "TechSolutions SaaS",
    type: "Plataforma Web",
    image: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=2070",
    description: "Criação de dashboard para sistema SaaS com visualização de dados em tempo real e interface intuitiva."
  },
  {
    id: 3,
    title: "Restaurante Sabores",
    type: "Website + Sistema",
    image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?q=80&w=2074",
    description: "Site institucional integrado com sistema de reservas online e cardápio digital interativo."
  }
];

const TestimonialsSection = () => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);

  const nextCase = () => {
    setActiveCaseIndex((prev) => (prev + 1) % projects.length);
  };

  const prevCase = () => {
    setActiveCaseIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="testimonials" className="section bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">
            Casos de <span className="text-gradient">sucesso</span>
          </h2>
          <p className="text-lg text-gray-700">
            Conheça alguns dos projetos que transformaram a presença digital de nossos clientes e trouxeram resultados expressivos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <div className="relative">
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <img 
                src={projects[activeCaseIndex].image} 
                alt={projects[activeCaseIndex].title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noxx-dark/80 to-transparent flex flex-col justify-end p-8">
                <span className="text-noxx-accent font-medium mb-2">{projects[activeCaseIndex].type}</span>
                <h3 className="text-2xl font-bold text-white mb-2">{projects[activeCaseIndex].title}</h3>
                <p className="text-white/80">{projects[activeCaseIndex].description}</p>
              </div>
            </div>
            
            <div className="absolute -bottom-5 right-5 flex space-x-2">
              <button 
                onClick={prevCase}
                className="bg-white text-noxx-primary hover:bg-noxx-light p-3 rounded-full shadow-lg transition-all"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button 
                onClick={nextCase}
                className="bg-white text-noxx-primary hover:bg-noxx-light p-3 rounded-full shadow-lg transition-all"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">{projects[activeCaseIndex].title}</h3>
              <p className="text-lg text-gray-700 mb-6">
                {projects[activeCaseIndex].description}
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-noxx-light rounded-lg p-4 text-center">
                  <span className="block text-xl font-bold text-noxx-primary">{testimonials[activeCaseIndex].stats.traffic}</span>
                  <span className="text-sm text-gray-600">Aumento de tráfego</span>
                </div>
                <div className="bg-noxx-light rounded-lg p-4 text-center">
                  <span className="block text-xl font-bold text-noxx-primary">{testimonials[activeCaseIndex].stats.conversion}</span>
                  <span className="text-sm text-gray-600">Taxa de conversão</span>
                </div>
                <div className="bg-noxx-light rounded-lg p-4 text-center">
                  <span className="block text-xl font-bold text-noxx-primary">{testimonials[activeCaseIndex].stats.ranking}</span>
                  <span className="text-sm text-gray-600">Ranking Google</span>
                </div>
              </div>
            </div>
            
            <Card className="p-6 border-none shadow-lg bg-gradient-to-br from-noxx-primary/5 to-noxx-accent/10">
              <div className="flex items-start">
                <div className="mr-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img 
                      src={testimonials[activeCaseIndex].image} 
                      alt={testimonials[activeCaseIndex].name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <div className="mb-4">
                    <svg className="h-5 w-5 text-yellow-500 inline-block" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg className="h-5 w-5 text-yellow-500 inline-block" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg className="h-5 w-5 text-yellow-500 inline-block" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg className="h-5 w-5 text-yellow-500 inline-block" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg className="h-5 w-5 text-yellow-500 inline-block" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </div>
                  <blockquote className="text-gray-700 italic mb-4">
                    "{testimonials[activeCaseIndex].content}"
                  </blockquote>
                  <div>
                    <p className="font-semibold">{testimonials[activeCaseIndex].name}</p>
                    <p className="text-sm text-gray-600">{testimonials[activeCaseIndex].role}</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
        
        <div className="text-center">
          <a 
            href="#contact" 
            className="btn-primary inline-flex items-center"
          >
            Quero resultados como esses
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
