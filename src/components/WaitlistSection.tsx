import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CheckCircle, Loader2, Sparkles } from "lucide-react";
import { submitToGoogleSheets } from "@/lib/googleSheets";

const usageOptions = [
  { value: "student", label: "Student" },
  { value: "work", label: "Work" },
  { value: "home", label: "Home & family" },
  { value: "caregiving", label: "Caregiving" },
  { value: "other", label: "Other" },
];

export const WaitlistSection = () => {
  const [email, setEmail] = useState("");
  const [usage, setUsage] = useState("");
  const [betaTester, setBetaTester] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !usage) {
      console.error("Form validation failed - email:", email, "usage:", usage);
      alert("Please fill in all required fields, including selecting how you will use TODO.");
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Get the readable label for the usage option
      const usageLabel = usageOptions.find(opt => opt.value === usage)?.label;
      
      if (!usageLabel) {
        console.error("ERROR: Could not find label for usage value:", usage);
        alert("Please select a valid use case.");
        setIsSubmitting(false);
        return;
      }
      
      console.log("Submitting form - usage value:", usage, "usage label:", usageLabel);
      console.log("Full payload:", { email, usage: usageLabel, betaTester });
      
      await submitToGoogleSheets({
        email,
        usage: usageLabel,
        betaTester,
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error("Failed to submit to Google Sheets:", error);
      // Still show success to user (fail gracefully)
      // In production, you might want to show an error message
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="waitlist" className="py-24 lg:py-32 hero-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto text-center">
            <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center mx-auto mb-8 shadow-xl shadow-primary/25">
              <CheckCircle className="w-10 h-10 text-primary-foreground" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              You're on the list!
            </h2>
            <p className="text-lg text-muted-foreground">
              We'll be in touch soon with early access to TODO. Thanks for joining us on this journey.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="py-24 lg:py-32 hero-gradient relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Early Access
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Get early access to{" "}
              <span className="gradient-text">TODO</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We're inviting a small group of early users to shape a voice-first way to stay organized.
            </p>
          </div>

          <div className="bg-card rounded-3xl p-8 border border-border/50 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground font-medium">
                  Email <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12 rounded-xl border-border/50 focus:border-primary"
                />
              </div>

              {/* Usage Selection */}
              <div className="space-y-3">
                <Label className="text-foreground font-medium">
                  How will you mostly use TODO? <span className="text-destructive">*</span>
                </Label>
                <RadioGroup 
                  value={usage} 
                  onValueChange={(value) => {
                    console.log("RadioGroup onValueChange triggered with:", value);
                    setUsage(value);
                  }} 
                  className="grid grid-cols-2 sm:grid-cols-3 gap-3"
                >
                  {usageOptions.map((option) => (
                    <div 
                      key={option.value} 
                      className="relative"
                    >
                      <RadioGroupItem
                        value={option.value}
                        id={option.value}
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor={option.value}
                        onClick={() => {
                          console.log("Label clicked for:", option.value);
                          // Explicitly set the usage value when label is clicked
                          setUsage(option.value);
                        }}
                        className={`flex items-center justify-center px-4 py-3 rounded-xl border text-sm cursor-pointer transition-all duration-200 font-medium ${
                          usage === option.value
                            ? 'border-primary bg-primary/10 text-foreground'
                            : 'border-border/50 bg-background hover:border-primary/50 hover:bg-primary/5'
                        }`}
                      >
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Beta Tester Checkbox */}
              <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/50">
                <Checkbox
                  id="beta"
                  checked={betaTester}
                  onCheckedChange={(checked) => setBetaTester(checked as boolean)}
                  className="mt-0.5"
                />
                <Label htmlFor="beta" className="text-sm text-muted-foreground cursor-pointer leading-relaxed">
                  I'm interested in beta testing and giving feedback
                </Label>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full h-14 rounded-xl gradient-primary text-primary-foreground font-semibold text-base shadow-lg shadow-primary/25 hover:opacity-90 transition-opacity"
                disabled={!email || !usage || isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Joining...
                  </>
                ) : (
                  "Join the Waitlist"
                )}
              </Button>

              {/* Privacy Note */}
              <p className="text-xs text-muted-foreground text-center">
                We'll only use your email to contact you about TODO. You can opt out anytime.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
