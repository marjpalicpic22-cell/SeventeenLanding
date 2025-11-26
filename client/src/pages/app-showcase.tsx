import { Navigation } from "@/components/landing/navigation";
import { Footer } from "@/components/landing/footer";
import { Badge } from "@/components/ui/badge";
import { Smartphone } from "lucide-react";
import appScreen1 from "@assets/stock_images/24_1764188931627.jpg";
import appScreen2 from "@assets/stock_images/23_1764188931630.jpg";
import appScreen3 from "@assets/stock_images/26_1764188941680.jpg";

export default function AppShowcase() {
  const features = [
    {
      title: "Manage & Earn",
      description: "Control your account, track payouts, and manage bank details securely",
      image: appScreen1,
      highlights: ["Payout History", "Bank Details", "Blocked Users", "Help Centre"],
    },
    {
      title: "Browse & Discover",
      description: "Explore items by category, find deals near you, and connect with local families",
      image: appScreen2,
      highlights: ["Brand Partnerships", "Turn Clutter to Cash", "Browse Categories", "Nearby Listings"],
    },
    {
      title: "Smart Categories",
      description: "Find exactly what you need with organized, detailed category browsing",
      image: appScreen3,
      highlights: ["Baby Gear", "Strollers & Prams", "Car Seats", "High Chairs"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-20">
            <div className="flex items-center justify-center gap-2 text-primary mb-4">
              <Smartphone className="w-6 h-6" />
              <span className="text-sm font-semibold uppercase tracking-wider">Download</span>
            </div>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground font-heading mb-4"
              data-testid="app-showcase-headline"
            >
              The Zero to Seventeen App
            </h1>
            <p
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
              data-testid="app-showcase-description"
            >
              Available on iOS and Android. Download today and join thousands of families
            </p>
          </div>

          <div className="space-y-20">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-12 items-center`}
                data-testid={`app-feature-${index}`}
              >
                <div className="flex-1 space-y-6">
                  <div>
                    <h2
                      className="text-3xl sm:text-4xl font-bold text-foreground font-heading mb-3"
                      data-testid={`app-feature-title-${index}`}
                    >
                      {feature.title}
                    </h2>
                    <p
                      className="text-lg text-muted-foreground"
                      data-testid={`app-feature-description-${index}`}
                    >
                      {feature.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-foreground uppercase tracking-wider">
                      Features
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {feature.highlights.map((highlight, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          data-testid={`app-badge-${index}-${i}`}
                        >
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div
                  className="flex-1 flex justify-center lg:justify-end"
                  data-testid={`app-image-container-${index}`}
                >
                  <div
                    className="relative w-full max-w-sm"
                    style={{
                      aspectRatio: "9 / 19.5",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-3xl blur-2xl"></div>
                    <div className="relative h-full bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        data-testid={`app-screenshot-${index}`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 pt-16 border-t">
            <div className="text-center space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground font-heading mb-3">
                  Ready to Get Started?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Download Zero to Seventeen today and start building a sustainable future for your family
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://apps.apple.com/us/app/zero2seventeen/id6739604370"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover-elevate active-elevate-2"
                  data-testid="button-app-store"
                >
                  Download on App Store
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.appetiser.zerotwoseventeen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover-elevate active-elevate-2"
                  data-testid="button-google-play"
                >
                  Get it on Google Play
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
