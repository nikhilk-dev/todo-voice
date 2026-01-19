import { Mic, CheckCircle, Clock } from "lucide-react";

export const DeviceMockup = () => {
  return (
    <div className="relative flex items-end justify-center gap-4 lg:gap-6">
      {/* Laptop Mockup */}
      <div className="hidden sm:block relative">
        <div className="w-72 lg:w-80 bg-card rounded-2xl shadow-2xl border border-border/50 overflow-hidden">
          {/* Laptop Screen */}
          <div className="bg-muted/30 px-3 py-2 border-b border-border/50 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-primary/60" />
            </div>
            <div className="flex-1 text-center">
              <span className="text-xs text-muted-foreground">TODO — My Day</span>
            </div>
          </div>
          <div className="p-5 space-y-4 bg-card">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-semibold text-foreground">Today's Plan</span>
              <span className="text-xs text-muted-foreground">3 tasks</span>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-primary/5 border border-primary/20">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">Email Sam about sales funnel</p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                    <Clock className="w-3 h-3" /> 10:00 AM
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl bg-muted/30">
                <div className="w-5 h-5 rounded-full border-2 border-muted-foreground/40 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm text-foreground">Review Q4 budget proposal</p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                    <Clock className="w-3 h-3" /> 2:00 PM
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl bg-muted/30">
                <div className="w-5 h-5 rounded-full border-2 border-muted-foreground/40 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm text-foreground">Pick up groceries</p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                    <Clock className="w-3 h-3" /> 5:30 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Laptop Base */}
        <div className="w-80 lg:w-88 h-3 bg-gradient-to-b from-muted to-muted-foreground/20 rounded-b-xl mx-auto" />
      </div>

      {/* Phone Mockup */}
      <div className="relative z-10 sm:-ml-8 lg:-ml-12">
        <div className="w-52 sm:w-56 bg-card rounded-[2rem] shadow-2xl border-4 border-foreground/10 overflow-hidden">
          {/* Phone Notch */}
          <div className="bg-foreground/5 h-7 flex items-center justify-center">
            <div className="w-20 h-4 bg-foreground/10 rounded-full" />
          </div>
          {/* Phone Screen */}
          <div className="p-4 space-y-4 bg-card min-h-[300px]">
            <div className="text-center">
              <span className="text-xs text-muted-foreground font-medium">Voice Chat</span>
            </div>
            
            {/* User Message */}
            <div className="flex justify-end">
              <div className="gradient-primary text-primary-foreground text-sm p-3 rounded-2xl rounded-br-md max-w-[90%] shadow-lg">
                Remind me to email Sam about the sales funnel tomorrow at 10 am.
              </div>
            </div>

            {/* TODO Response */}
            <div className="flex justify-start">
              <div className="bg-muted text-foreground text-sm p-3 rounded-2xl rounded-bl-md max-w-[90%] flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span>Got it. I'll remind you tomorrow at 10 am.</span>
              </div>
            </div>

            {/* Mic Button */}
            <div className="flex justify-center pt-6">
              <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center shadow-xl shadow-primary/30 hover:scale-105 transition-transform cursor-pointer">
                <Mic className="w-6 h-6 text-primary-foreground" />
              </div>
            </div>
          </div>
          {/* Phone Bottom Bar */}
          <div className="h-5 bg-card flex items-center justify-center pb-1">
            <div className="w-24 h-1 bg-foreground/15 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
