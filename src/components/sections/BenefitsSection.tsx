
import { Rocket, Zap, BarChart, Users, Database, Shield } from 'lucide-react';

const benefits = [
  {
    icon: <Rocket className="h-8 w-8 text-white" />,
    title: "Velocidade",
    description: "Sites otimizados que carregam rapidamente, melhorando a experiência do usuário e o ranking nos buscadores.",
    bgColor: "bg-noxx-primary",
  },
  {
    icon: <Zap className="h-8 w-8 text-white" />,
    title: "Performance",
    description: "Código limpo e eficiente que garante máxima performance em todos os dispositivos e navegadores.",
    bgColor: "bg-noxx-secondary",
  },
  {
    icon: <BarChart className="h-8 w-8 text-white" />,
    title: "Resultados",
    description: "Estratégias digitais orientadas por dados para maximizar o retorno sobre seu investimento.",
    bgColor: "bg-noxx-accent",
  },
  {
    icon: <Users className="h-8 w-8 text-white" />,
    title: "Experiência",
    description: "Design centrado no usuário que cria jornadas intuitivas e aumenta a taxa de conversão.",
    bgColor: "bg-noxx-highlight",
  },
  {
    icon: <Database className="h-8 w-8 text-white" />,
    title: "Inteligência",
    description: "Análise de dados e insights para decisões estratégicas e otimização contínua.",
    bgColor: "bg-noxx-primary",
  },
  {
    icon: <Shield className="h-8 w-8 text-white" />,
    title: "Segurança",
    description: "Proteção de dados e conformidade com as leis de privacidade para você e seus clientes.",
    bgColor: "bg-noxx-secondary",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="section bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="rounded-lg p-6 card-hover shadow-sm border border-gray-100 transform transition-all"
                >
                  <div className={`${benefit.bgColor} rounded-full w-14 h-14 flex items-center justify-center mb-4`}>
                    {benefit.icon}
                  </div>
                  <h4 className="text-xl font-semibold mb-2">{benefit.title}</h4>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-sm font-semibold text-noxx-accent uppercase tracking-wider">Por que escolher a Noxx</span>
            <h2 className="mt-2 mb-6">
              Nossos diferenciais que <span className="text-gradient">transformam</span> sua estratégia digital
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Somos mais que uma agência de criação de sites. Fornecemos uma plataforma digital estratégica que alia tecnologia inovadora, design de alto impacto e inteligência de dados para impulsionar seu negócio.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="bg-noxx-accent/20 text-noxx-accent rounded-full p-1 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-700">Metodologia ágil com entregas rápidas e eficientes</span>
              </li>
              <li className="flex items-start">
                <span className="bg-noxx-accent/20 text-noxx-accent rounded-full p-1 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-700">Código limpo, semântico e otimizado para SEO</span>
              </li>
              <li className="flex items-start">
                <span className="bg-noxx-accent/20 text-noxx-accent rounded-full p-1 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-700">Sistemas inteligentes de análise de comportamento do usuário</span>
              </li>
              <li className="flex items-start">
                <span className="bg-noxx-accent/20 text-noxx-accent rounded-full p-1 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-700">Suporte técnico especializado e consultoria estratégica contínua</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
