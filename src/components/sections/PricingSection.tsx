
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const plans = [
  {
    name: "Starter",
    price: "R$ 2.997",
    installments: "6x de R$ 499,50",
    description: "Ideal para pequenas empresas iniciando sua presença digital",
    features: [
      "Site responsivo em 72h",
      "3 páginas otimizadas",
      "Painel básico de analytics",
      "Suporte por 30 dias",
      "Hospedagem inclusa"
    ],
    highlight: false
  },
  {
    name: "Professional",
    price: "R$ 4.997",
    installments: "6x de R$ 832,83",
    description: "Nosso plano mais popular para empresas em crescimento",
    features: [
      "Site responsivo em 72h",
      "5 páginas otimizadas",
      "Painel completo de analytics",
      "IA para análise de comportamento",
      "Suporte prioritário 90 dias",
      "Hospedagem premium inclusa",
      "Otimização SEO avançada"
    ],
    highlight: true
  },
  {
    name: "Enterprise",
    price: "Sob consulta",
    installments: "Consulte condições",
    description: "Para empresas que precisam de uma solução completa",
    features: [
      "Site personalizado",
      "Páginas ilimitadas",
      "Analytics empresarial",
      "IA dedicada",
      "Suporte VIP 12 meses",
      "Hospedagem enterprise",
      "SEO premium + Marketing"
    ],
    highlight: false
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="section bg-stellaris-light scroll-m-20">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="mb-4">
            Escolha o plano ideal para <span className="text-gradient">sua empresa</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Soluções que combinam tecnologia, design e inteligência para impulsionar seu negócio digital.
          </p>
          <div className="flex flex-col gap-3 items-center">
            <Badge 
              variant="secondary" 
              className="py-1.5 px-4 text-sm bg-purple-100 text-purple-800 border-purple-200"
              aria-label="Indicador de performance com IA"
            >
              Powered by AI: Aumento médio de 35% em conversões
            </Badge>
            <Badge 
              variant="secondary" 
              className="py-1.5 px-4 text-sm bg-blue-100 text-blue-800 border-blue-200"
              aria-label="Análise de dados em tempo real"
            >
              Análise comportamental em tempo real
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`pricing-card ${plan.highlight ? 'pricing-card-popular' : ''}`}
              aria-label={`Plano ${plan.name}`}
            >
              {plan.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-stellaris-primary text-white 
                               px-4 py-1 rounded-full text-sm font-medium">
                  Mais Popular
                </span>
              )}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="text-3xl font-bold text-stellaris-primary mb-2">{plan.price}</div>
                <div className="text-sm text-gray-600">Em até {plan.installments}</div>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-stellaris-accent flex-shrink-0 mt-0.5" 
                           aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <Button 
                  className="w-full bg-stellaris-primary hover:bg-stellaris-accent text-white 
                            transition-all duration-300 transform hover:scale-105"
                  onClick={() => window.location.href = '#contact'}
                  aria-label={`Começar com o plano ${plan.name}`}
                >
                  Começar agora
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
