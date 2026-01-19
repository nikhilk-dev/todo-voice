import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2.5">
            <img 
              src="/favicon.svg" 
              alt="TODO" 
              className="w-9 h-9 rounded-xl shadow-lg"
            />
            <span className="font-bold text-xl text-foreground">TODO</span>
          </div>
          
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button 
              onClick={scrollToWaitlist}
              className="hidden sm:flex gradient-primary hover:opacity-90 shadow-lg shadow-primary/25 text-primary-foreground"
            >
              Join the Waitlist
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
