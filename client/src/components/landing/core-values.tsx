import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Heart, Users, Gift, BookOpen } from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "Sustainability",
    description: "We give every item a longer life. By keeping children's goods in circulation, we reduce waste and lighten our footprint on the earth.",
    testId: "value-sustainability"
  },
  {
    icon: Heart,
    title: "Family",
    description: "Everything we create begins with the question: 'Would we feel good about this for our own family?' If not, we don't do it.",
    testId: "value-family"
  },
  {
    icon: Users,
    title: "Community",
    description: "Families thrive when they support one another. Our platform makes that connection simple, safe, and natural.",
    testId: "value-community"
  },
  {
    icon: Gift,
    title: "Giving Back",
    description: "Selling helps your household. Donating helps someone else's. Recycling helps the planet. Every action matters.",
    testId: "value-giving-back"
  },
  {
    icon: BookOpen,
    title: "Education",
    description: "We're raising a generation that understands reuse, responsibility, and the importance of caring for the world they'll grow up in.",
    testId: "value-education"
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
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4"
            data-testid="values-headline"
          >
            Our Core Values
          </h2>
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            data-testid="values-description"
          >
            The principles that guide everything we do
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
