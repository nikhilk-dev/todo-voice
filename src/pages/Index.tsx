import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { AudienceSection } from "@/components/AudienceSection";
import { DifferentiatorSection } from "@/components/DifferentiatorSection";
import { WaitlistSection } from "@/components/WaitlistSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <AudienceSection />
        <DifferentiatorSection />
        <WaitlistSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
