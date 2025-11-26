import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, CheckCircle2, Clock, Globe } from "lucide-react";

const regions = [
  {
    name: "Australia",
    status: "live",
    launchDate: "2024",
    icon: "🇦🇺",
    description: "Fully operational across major cities",
  },
  {
    name: "United States",
    status: "live",
    launchDate: "2024",
    icon: "🇺🇸",
    description: "Available in select states",
  },
  {
    name: "United Kingdom",
    status: "coming-soon",
    launchDate: "Q2 2025",
    icon: "🇬🇧",
    description: "Launching in Spring 2025",
  },
  {
    name: "Canada",
    status: "coming-soon",
    launchDate: "Q3 2025",
    icon: "🇨🇦",
    description: "Planned for Summer 2025",
  },
  {
    name: "New Zealand",
    status: "coming-soon",
    launchDate: "Q4 2025",
    icon: "🇳🇿",
    description: "Expanding late 2025",
  },
  {
    name: "More Regions",
    status: "planned",
    launchDate: "2026+",
    icon: "🌏",
    description: "Building a global community",
  },
];

export function RegionalRoadmap() {
  return (
    <section
      id="regional-roadmap"
      className="py-16 md:py-24 lg:py-32 bg-background"
      data-testid="section-regional-roadmap"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-2 text-primary mb-4" data-testid="roadmap-icon">
            <Globe className="w-6 h-6" />
            <span className="text-sm font-semibold uppercase tracking-wider">Global Expansion</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground font-heading mb-4"
            data-testid="roadmap-headline"
          >
            Growing Worldwide
          </h2>
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            data-testid="roadmap-description"
          >
            See where Zero to Seventeen is available now and coming soon
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {regions.map((region, index) => (
            <Card
              key={region.name}
              className={`p-6 md:p-8 space-y-4 ${
                region.status === "live" 
                  ? "border-primary/30 bg-primary/5" 
                  : ""
              } hover-elevate`}
              data-testid={`roadmap-region-${index}`}
            >
              <div className="flex items-start justify-between">
                <div className="text-4xl" data-testid={`roadmap-flag-${index}`}>
                  {region.icon}
                </div>
                {region.status === "live" ? (
                  <Badge className="bg-primary" data-testid={`roadmap-status-${index}`}>
                    <CheckCircle2 className="w-3 h-3 mr-1" />
                    Available Now
                  </Badge>
                ) : region.status === "coming-soon" ? (
                  <Badge variant="secondary" data-testid={`roadmap-status-${index}`}>
                    <Clock className="w-3 h-3 mr-1" />
                    Coming Soon
                  </Badge>
                ) : (
                  <Badge variant="outline" data-testid={`roadmap-status-${index}`}>
                    <MapPin className="w-3 h-3 mr-1" />
                    Planned
                  </Badge>
                )}
              </div>

              <div>
                <h3
                  className="text-xl md:text-2xl font-bold text-foreground font-heading mb-2"
                  data-testid={`roadmap-name-${index}`}
                >
                  {region.name}
                </h3>
                <p
                  className="text-sm text-muted-foreground mb-1"
                  data-testid={`roadmap-date-${index}`}
                >
                  {region.launchDate}
                </p>
                <p
                  className="text-base text-muted-foreground"
                  data-testid={`roadmap-description-${index}`}
                >
                  {region.description}
                </p>
              </div>

              {region.status === "live" && (
                <div className="pt-2 border-t border-primary/20">
                  <p className="text-sm text-primary font-medium flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    Download the app to get started
                  </p>
                </div>
              )}
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center bg-accent/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-foreground font-heading mb-3">
            Not in Your Region Yet?
          </h3>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto mb-6">
            Join our waitlist to be notified when Zero to Seventeen launches in your area. 
            We're working hard to bring our community to families everywhere!
          </p>
          <a href="#newsletter">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover-elevate active-elevate-2">
              Join the Waitlist
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
