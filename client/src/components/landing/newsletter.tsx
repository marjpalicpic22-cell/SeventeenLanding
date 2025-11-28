import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <section
      className="py-16 md:py-24 lg:py-32 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5"
      data-testid="section-newsletter"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
            <Mail className="w-6 h-6 text-primary" data-testid="icon-mail" />
          </div>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground font-heading"
            data-testid="newsletter-headline"
          >
            Join Our Mum Community
          </h2>

          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            data-testid="newsletter-description"
          >
            Get weekly tips, parenting wisdom, and exclusive deals delivered to your inbox. Connect with thousands of Australian mums who are buying smart, sharing kindly, and making a real difference for their families and the planet.
          </p>

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            data-testid="newsletter-form"
          >
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
              data-testid="input-email"
            />
            <Button
              type="submit"
              size="default"
              className="sm:w-auto whitespace-nowrap"
              data-testid="button-subscribe"
            >
              Subscribe
            </Button>
          </form>

          {subscribed && (
            <p
              className="text-sm text-green-600 dark:text-green-400 font-medium"
              data-testid="text-success-message"
            >
              ✓ Thanks for joining! Check your inbox for our welcome message.
            </p>
          )}

          <p className="text-xs text-muted-foreground" data-testid="text-privacy-note">
            We respect your privacy. Unsubscribe anytime. No spam, just value.
          </p>
        </div>
      </div>
    </section>
  );
}
