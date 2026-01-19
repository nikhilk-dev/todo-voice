import { Mic, Brain, ListChecks } from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "Speak",
    description: "Say everything you need to remember while walking, cooking, or commuting.",
    iconClass: "icon-blue",
    bgClass: "bg-icon-blue",
  },
  {
    icon: Brain,
    title: "TODO understands",
    description: "Automatically detects tasks, people, dates, and categories.",
    iconClass: "icon-purple",
    bgClass: "bg-icon-purple",
  },
  {
    icon: ListChecks,
    title: "You get a plan",
    description: "A clean list of today, this week, and what's next.",
    iconClass: "icon-primary",
    bgClass: "bg-accent",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 section-gradient" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            TODO takes what you say and{" "}
            <span className="gradient-text">makes it a plan</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From scattered thoughts to organized action in seconds.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl ${feature.bgClass} mb-8 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-9 h-9 ${feature.iconClass}`} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
