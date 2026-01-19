import { Button } from "@/components/ui/button";
import { DeviceMockup } from "./DeviceMockup";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-gradient pt-24 pb-16 lg:pt-32 lg:pb-24 min-h-[90vh] flex items-center relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="slide-in-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Coming Soon
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Your own{" "}
              <span className="gradient-text">Siri-style assistant</span>{" "}
              for daily tasks.
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Talk to TODO and it turns what you say into organized to-dos, reminders, and simple step-by-step plans.
            </p>
            <div className="space-y-4">
              <Button 
                variant="hero" 
                onClick={scrollToWaitlist}
                className="gradient-primary border-0 group"
              >
                Join TODO Waitlist
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-sm text-muted-foreground">
                Be first to try the voice assistant built for students, professionals, and families.
              </p>
            </div>
          </div>

          {/* Right Visual */}
          <div className="slide-in-right float">
            <DeviceMockup />
          </div>
        </div>
      </div>
    </section>
  );
};
