import { GraduationCap, Briefcase, Heart, Accessibility } from "lucide-react";

const audiences = [
  {
    icon: GraduationCap,
    title: "Students",
    description: "Capture assignments and exams by voice.",
    iconClass: "icon-blue",
    bgClass: "bg-icon-blue",
  },
  {
    icon: Briefcase,
    title: "Professionals",
    description: "Turn meetings into follow-ups without typing.",
    iconClass: "icon-purple",
    bgClass: "bg-icon-purple",
  },
  {
    icon: Heart,
    title: "Older adults & families",
    description: "Simple voice reminders for meds and routines.",
    iconClass: "icon-pink",
    bgClass: "bg-icon-pink",
  },
  {
    icon: Accessibility,
    title: "Accessibility",
    description: "Hands-free control, large text, and guided steps.",
    iconClass: "icon-cyan",
    bgClass: "bg-icon-cyan",
  },
];

export const AudienceSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Built for people with{" "}
            <span className="gradient-text">busy, messy days</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're juggling classes, meetings, or family life.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="bg-card rounded-3xl p-8 border border-border/50 card-hover group"
            >
              <div className={`w-14 h-14 rounded-2xl ${audience.bgClass} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <audience.icon className={`w-7 h-7 ${audience.iconClass}`} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{audience.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{audience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
