import { Card, CardContent } from "@/components/ui/card";
import { Upload, MessageCircle, ShoppingBag, Heart } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "List Your Items",
    description: "Upload photos, describe your item, and set a price. It takes just minutes to create a listing families can trust.",
    testId: "step-list-items"
  },
  {
    number: "02",
    icon: MessageCircle,
    title: "Connect Safely",
    description: "Chat directly with verified families through our secure in-app messaging. Build trust before you meet.",
    testId: "step-connect-safely"
  },
  {
    number: "03",
    icon: ShoppingBag,
    title: "Complete Transaction",
    description: "Buy what you need, sell what you've outgrown, or donate to families who need it most — all in one place.",
    testId: "step-complete-transaction"
  },
  {
    number: "04",
    icon: Heart,
    title: "Make a Difference",
    description: "Every item you pass on helps another family save money and keeps perfectly good things out of landfill.",
    testId: "step-make-difference"
  }
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-16 md:py-24 lg:py-32 bg-muted/30"
      data-testid="section-how-it-works"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4"
            data-testid="how-it-works-headline"
          >
            How It Works
          </h2>
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            data-testid="how-it-works-description"
          >
            Four simple steps to help families and reduce waste
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative" data-testid={step.testId}>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
                )}
                <Card className="hover-elevate transition-all duration-300 h-full border-card-border">
                  <CardContent className="p-6 space-y-4">
                    <div className="space-y-3">
                      <span
                        className="text-5xl font-bold text-primary/20"
                        data-testid={`${step.testId}-number`}
                      >
                        {step.number}
                      </span>
                      <div
                        className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center"
                        data-testid={`${step.testId}-icon`}
                      >
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                    </div>
                    <h3
                      className="text-xl font-semibold text-foreground"
                      data-testid={`${step.testId}-title`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-sm text-muted-foreground leading-relaxed"
                      data-testid={`${step.testId}-description`}
                    >
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
