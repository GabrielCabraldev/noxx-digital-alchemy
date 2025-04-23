
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: "Starter",
    price: "R$ 2.997",
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
    <section id="pricing" className="section bg-stellaris-light">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">
            Escolha o plano ideal para <span className="text-gradient">sua empresa</span>
          </h2>
          <p className="text-lg text-gray-700">
            Soluções que combinam tecnologia, design e inteligência para impulsionar seu negócio digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`relative p-8 rounded-xl bg-white shadow-lg transition-transform hover:-translate-y-1 ${
                plan.highlight ? 'ring-2 ring-stellaris-primary' : ''
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-stellaris-primary text-white px-4 py-1 rounded-full text-sm">
                  Mais Popular
                </span>
              )}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="text-3xl font-bold text-stellaris-primary">{plan.price}</div>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-stellaris-accent flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <Button 
                  className={`w-full ${plan.highlight ? 'btn-primary' : 'btn-secondary'}`}
                  onClick={() => window.location.href = '#contact'}
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
