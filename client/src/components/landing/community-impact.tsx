import { Card, CardContent } from "@/components/ui/card";
import { Package, Users, Leaf } from "lucide-react";
import itemsImage from "@assets/stock_images/children_toys_boxes__35d377c1.jpg";
import familiesImage from "@assets/stock_images/happy_families_mothe_da294cb8.jpg";
import recyclingImage from "@assets/stock_images/recycling_environmen_cd2fce70.jpg";

const stats = [
  {
    icon: Package,
    number: "10,000+",
    label: "Items Rehomed",
    description: "Giving children's items a second life",
    testId: "stat-items-rehomed",
    image: itemsImage
  },
  {
    icon: Users,
    number: "5,000+",
    label: "Families Connected",
    description: "Building a caring community",
    testId: "stat-families-connected",
    image: familiesImage
  },
  {
    icon: Leaf,
    number: "50+ Tons",
    label: "Waste Diverted",
    description: "Protecting our planet together",
    testId: "stat-waste-diverted",
    image: recyclingImage
  }
];

export function CommunityImpact() {
  return (
    <section
      className="py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden"
      data-testid="section-community-impact"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground font-heading mb-4"
            data-testid="impact-headline"
          >
            Our Community Impact
          </h2>
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            data-testid="impact-description"
          >
            Together, we're making a real difference
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="hover-elevate transition-all duration-300 border-card-border bg-card overflow-hidden flex flex-col"
                data-testid={stat.testId}
              >
                <div className="h-48 w-full overflow-hidden" data-testid={`${stat.testId}-image-container`}>
                  <img
                    src={stat.image}
                    alt={stat.label}
                    className="w-full h-full object-cover"
                    data-testid={`${stat.testId}-image`}
                  />
                </div>
                <CardContent className="p-8 text-center space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div
                      className="text-4xl md:text-5xl font-bold text-primary"
                      data-testid={`${stat.testId}-number`}
                    >
                      {stat.number}
                    </div>
                    <div
                      className="text-xl font-semibold text-foreground"
                      data-testid={`${stat.testId}-label`}
                    >
                      {stat.label}
                    </div>
                  </div>
                  <p
                    className="text-sm text-muted-foreground"
                    data-testid={`${stat.testId}-description`}
                  >
                    {stat.description}
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
