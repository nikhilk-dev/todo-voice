import { Mic2, Layers, Shield } from "lucide-react";

const differentiators = [
  {
    icon: Mic2,
    text: "Voice-first with an editable checklist",
    iconClass: "icon-blue",
  },
  {
    icon: Layers,
    text: "Modes for Students, Work, Home & Health, Accessibility",
    iconClass: "icon-purple",
  },
  {
    icon: Shield,
    text: "Designed in Canada with a privacy-first approach",
    iconClass: "icon-primary",
  },
];

export const DifferentiatorSection = () => {
  return (
    <section className="py-20 lg:py-24 section-gradient border-y border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-12">
          Why <span className="gradient-text">TODO</span> is different
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-20">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-card border border-border/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <item.icon className={`w-5 h-5 ${item.iconClass}`} />
              </div>
              <span className="text-foreground font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
