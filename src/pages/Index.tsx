
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import ProcessSection from '@/components/sections/ProcessSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ContactSection from '@/components/sections/ContactSection';
import PricingSection from '@/components/sections/PricingSection';
import { useRevealAnimation } from '@/hooks/use-reveal-animation';

const Index = () => {
  useRevealAnimation();
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="space-y-8 md:space-y-16">
        <HeroSection />
        <BenefitsSection />
        <ServicesSection />
        <ProcessSection />
        <PricingSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
