
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Code, Palette, Rocket, Settings, Star } from 'lucide-react';

const steps = [
  {
    id: "discovery",
    title: "1. Descoberta",
    icon: <Search className="h-6 w-6" />,
    description: "Entendemos seus objetivos de negócio, analisamos seu mercado e identificamos oportunidades digitais para sua empresa.",
    details: [
      "Entrevistas com stakeholders e definição de objetivos",
      "Análise de concorrência e benchmarking",
      "Identificação de público-alvo e personas",
      "Levantamento de requisitos técnicos e funcionais",
      "Definição de KPIs e métricas de sucesso"
    ]
  },
  {
    id: "design",
    title: "2. Design",
    icon: <Palette className="h-6 w-6" />,
    description: "Criamos uma identidade visual impactante e wireframes que priorizam a experiência do usuário e a geração de resultados.",
    details: [
      "Wireframing e prototipagem de baixa fidelidade",
      "Design visual alinhado à identidade da marca",
      "Testes de usabilidade e ajustes de UX",
      "Layouts responsivos para todos os dispositivos",
      "Validação final do design com stakeholders"
    ]
  },
  {
    id: "development",
    title: "3. Desenvolvimento",
    icon: <Code className="h-6 w-6" />,
    description: "Transformamos o design em código com tecnologias modernas, garantindo performance, segurança e escalabilidade.",
    details: [
      "Desenvolvimento front-end com tecnologias modernas",
      "Implementação de back-end robusto e escalável",
      "Otimização para performance e tempo de carregamento",
      "Integração com sistemas e APIs de terceiros",
      "Testes de qualidade e compatibilidade cross-browser"
    ]
  },
  {
    id: "optimization",
    title: "4. Otimização",
    icon: <Settings className="h-6 w-6" />,
    description: "Ajustamos e refinamos seu projeto com base em dados reais de uso, melhorando continuamente a experiência.",
    details: [
      "Configuração de ferramentas de análise de dados",
      "Otimização SEO on-page e técnico",
      "Implementação de testes A/B para elementos críticos",
      "Ajustes de performance e tempo de resposta",
      "Refinamentos de UX baseados em feedback real"
    ]
  },
  {
    id: "launch",
    title: "5. Lançamento",
    icon: <Rocket className="h-6 w-6" />,
    description: "Colocamos seu projeto no ar com segurança, monitoramento constante e suporte dedicado durante todo o processo.",
    details: [
      "Checklist pré-lançamento completo",
      "Migração de dados e configuração de servidores",
      "Monitoramento de desempenho em tempo real",
      "Suporte técnico dedicado durante o lançamento",
      "Estratégia de divulgação e marketing de lançamento"
    ]
  },
  {
    id: "growth",
    title: "6. Crescimento",
    icon: <Star className="h-6 w-6" />,
    description: "Implementamos estratégias contínuas de crescimento digital para maximizar seu ROI e expandir sua presença online.",
    details: [
      "Análise de dados e insights para tomada de decisão",
      "Estratégias de marketing digital integradas",
      "Otimização contínua de conversão (CRO)",
      "Updates regulares de conteúdo e funcionalidades",
      "Relatórios periódicos de desempenho e resultados"
    ]
  }
];

const ProcessSection = () => {
  const [activeTab, setActiveTab] = useState("discovery");

  return (
    <section id="process" className="section bg-gradient-to-b from-noxx-light to-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">
            Nosso <span className="text-gradient">processo</span> de trabalho
          </h2>
          <p className="text-lg text-gray-700">
            Uma metodologia ágil e transparente para transformar sua visão em um projeto digital de alto impacto com resultados mensuráveis.
          </p>
        </div>

        <Tabs defaultValue="discovery" value={activeTab} onValueChange={setActiveTab} className="max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-3 sm:grid-cols-6 mb-12 bg-transparent gap-3">
            {steps.map((step) => (
              <TabsTrigger 
                key={step.id} 
                value={step.id}
                className={`
                  flex flex-col items-center px-3 py-4 rounded-lg border transition-all duration-300 data-[state=active]:border-noxx-accent
                  ${activeTab === step.id 
                    ? 'bg-white shadow-md border-noxx-accent' 
                    : 'bg-white/50 border-gray-200 hover:bg-white hover:border-noxx-accent/50'
                  }
                `}
              >
                <div className={`
                  w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-colors
                  ${activeTab === step.id 
                    ? 'bg-noxx-accent text-white' 
                    : 'bg-gray-100 text-gray-600'
                  }
                `}>
                  {step.icon}
                </div>
                <span className="text-sm font-medium">{step.title.split(". ")[1]}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {steps.map((step) => (
            <TabsContent 
              key={step.id} 
              value={step.id}
              className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 animate-fade-in"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 flex items-center">
                    <span className="bg-noxx-accent text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">
                      {step.title.split(". ")[0]}
                    </span>
                    {step.title.split(". ")[1]}
                  </h3>
                  <p className="text-gray-700 mb-6 text-lg">
                    {step.description}
                  </p>
                  <ul className="space-y-3">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="bg-noxx-accent/20 text-noxx-accent rounded-full p-1 mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative flex items-center justify-center">
                  <div className="bg-noxx-light rounded-xl p-8 relative z-10">
                    <img 
                      src={`https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=2070`}
                      alt={`Fase de ${step.title.split(". ")[1]} do processo Noxx`}
                      className="rounded-lg shadow-md"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-noxx-accent/10 rounded-full blur-2xl -z-10"></div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ProcessSection;
