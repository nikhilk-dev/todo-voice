import { MessageCircle, Sparkles, Bell } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: MessageCircle,
    title: "Talk to TODO",
    description: "Press the mic and say what's on your mind.",
    iconClass: "icon-cyan",
    bgClass: "bg-icon-cyan",
  },
  {
    number: "2",
    icon: Sparkles,
    title: "TODO organizes it",
    description: "Your words become tasks with due dates, priorities, and categories.",
    iconClass: "icon-orange",
    bgClass: "bg-icon-orange",
  },
  {
    number: "3",
    icon: Bell,
    title: "Get reminders and step-by-step help",
    description: 'Ask "What\'s next?" or "Break this down."',
    iconClass: "icon-pink",
    bgClass: "bg-icon-pink",
  },
];

export const HowItWorksSection = () => {
  return (
    <section className="py-24 lg:py-32 hero-gradient relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-foreground mb-16">
          How <span className="gradient-text">TODO</span> works
        </h2>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative bg-card rounded-3xl p-8 border border-border/50 card-hover group"
            >
              {/* Step number badge */}
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold shadow-lg">
                {step.number}
              </div>
              
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${step.bgClass} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <step.icon className={`w-7 h-7 ${step.iconClass}`} />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 lg:-right-5 w-8 lg:w-10 border-t-2 border-dashed border-primary/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
