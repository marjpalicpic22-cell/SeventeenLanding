import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, ShieldCheck, HandHeart, Sparkles } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Warmth & Understanding",
    description: "We know parenthood can be challenging. Our community is a safe space where you'll always find understanding, encouragement, and genuine support from people who get it.",
    testId: "value-warmth"
  },
  {
    icon: Users,
    title: "Parent Community First",
    description: "This isn't just a marketplace — it's a community. Connect with other mums and parents, share your experiences, and know you're never alone on this journey.",
    testId: "value-community"
  },
  {
    icon: ShieldCheck,
    title: "Safety & Trust",
    description: "All transactions happen securely inside the app. We've built a trusted environment where parents feel confident buying, selling, and connecting with each other.",
    testId: "value-safety"
  },
  {
    icon: HandHeart,
    title: "Supporting Each Other",
    description: "When you pass on items your children have outgrown, you're helping another family. Every exchange strengthens our community and makes parenthood a little easier for everyone.",
    testId: "value-support"
  },
  {
    icon: Sparkles,
    title: "Growing Together",
    description: "Starting in Australia and soon expanding to the United States, we're building a global community where families everywhere can connect and support one another.",
    testId: "value-growing"
  }
];

export function CoreValues() {
  return (
    <section
      className="py-16 md:py-24 lg:py-32 bg-background"
      data-testid="section-core-values"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground font-heading mb-4"
            data-testid="values-headline"
          >
            What Makes Us Different
          </h2>
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            data-testid="values-description"
          >
            Built around the values that matter most to parents
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card
                key={index}
                className="hover-elevate transition-all duration-300 border-card-border"
                data-testid={value.testId}
              >
                <CardContent className="p-6 space-y-4 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center" data-testid={`${value.testId}-icon`}>
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground" data-testid={`${value.testId}-title`}>
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-grow" data-testid={`${value.testId}-description`}>
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
