import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [region, setRegion] = useState("");
  const [isWaitlist, setIsWaitlist] = useState(false);
  const { toast } = useToast();

  const mutation = useMutation({
    mutationFn: async (data: { email: string; region: string }) => {
      return await apiRequest("POST", "/api/newsletter", data);
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: isWaitlist 
          ? "You're on the waitlist. We'll notify you when we launch in your region!"
          : "Thank you for subscribing to our newsletter!",
      });
      setEmail("");
      setRegion("");
      setIsWaitlist(false);
      queryClient.invalidateQueries({ queryKey: ["/api/newsletter"] });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !region) {
      toast({
        title: "Required fields",
        description: "Please enter your email and select a region.",
        variant: "destructive",
      });
      return;
    }
    mutation.mutate({ email, region });
  };

  return (
    <section
      id="newsletter"
      className="py-16 md:py-24 bg-primary/5"
      data-testid="section-newsletter"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 text-primary mb-4" data-testid="newsletter-icon">
            <Mail className="w-6 h-6" />
            <span className="text-sm font-semibold uppercase tracking-wider">Stay Connected</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground font-heading mb-4"
            data-testid="newsletter-headline"
          >
            Join Our Community
          </h2>
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            data-testid="newsletter-description"
          >
            Get updates on new features, sustainability tips, and be the first to know when we launch in your region
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto" data-testid="newsletter-form">
          <div className="flex flex-col gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-base"
              data-testid="input-newsletter-email"
              disabled={mutation.isPending}
            />

            <Select value={region} onValueChange={(value) => {
              setRegion(value);
              setIsWaitlist(["UK", "Canada", "New Zealand", "Other"].includes(value));
            }}>
              <SelectTrigger className="text-base" data-testid="select-region">
                <SelectValue placeholder="Select your region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Australia">Australia (Available Now)</SelectItem>
                <SelectItem value="USA">USA (Available Now)</SelectItem>
                <SelectItem value="UK">UK (Coming Soon)</SelectItem>
                <SelectItem value="Canada">Canada (Coming Soon)</SelectItem>
                <SelectItem value="New Zealand">New Zealand (Coming Soon)</SelectItem>
                <SelectItem value="Other">Other Region</SelectItem>
              </SelectContent>
            </Select>

            <Button
              type="submit"
              size="lg"
              className="w-full"
              data-testid="button-newsletter-submit"
              disabled={mutation.isPending}
            >
              {mutation.isPending ? (
                "Subscribing..."
              ) : (
                <>
                  <CheckCircle2 className="w-5 h-5 mr-2" />
                  {isWaitlist ? "Join Waitlist" : "Subscribe to Newsletter"}
                </>
              )}
            </Button>
          </div>

          {region && isWaitlist && (
            <p className="text-sm text-muted-foreground text-center mt-4" data-testid="waitlist-message">
              We'll notify you as soon as Zero to Seventeen launches in {region}!
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
