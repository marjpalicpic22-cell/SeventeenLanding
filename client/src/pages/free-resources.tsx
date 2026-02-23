import { Navigation } from "@/components/landing/navigation";
import { Footer } from "@/components/landing/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Download, Printer, Clock } from "lucide-react";
import bundleMockup from "@assets/mock_up_1771809564508.png";

export default function FreeResources() {
  const MAILCHIMP_LANDING_PAGE_URL = "https://mailchi.mp/zero2seventeen/landing-page-for-freebies";

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground font-heading mb-6" data-testid="text-free-resources-title">
              Free Resources
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-free-resources-intro">
              A small library of free printables and tools for Aussie families. 
              Download our current bundle and check back as we add more.
            </p>
          </div>

          {/* Current Freebie Section */}
          <section className="mb-20" data-testid="section-current-freebie">
            <h2 className="text-2xl font-bold text-foreground mb-8">Current Freebie</h2>
            <Card className="p-8 md:p-10 hover-elevate transition-all border-primary/20 bg-primary/5">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-3" data-testid="text-freebie-name">
                      School & Kids Activity Bundle
                    </h3>
                    <p className="text-muted-foreground text-lg" data-testid="text-freebie-description">
                      Term planner, kids activity pack, screen-free ideas, plus a bonus 20-page activity book.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <a 
                      href={MAILCHIMP_LANDING_PAGE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                      data-testid="link-get-freebie"
                    >
                      <Button size="lg" className="gap-2 text-lg px-8">
                        Get the free bundle
                        <ArrowRight className="w-5 h-5" />
                      </Button>
                    </a>
                    <p className="text-sm text-muted-foreground italic" data-testid="text-spam-note">
                      * After signing up, check Spam or Promotions if you don't see the email.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    <div className="flex gap-3 items-start text-sm text-muted-foreground">
                      <Download className="w-4 h-4 mt-0.5 text-primary" />
                      <p>Digital download only. Print at home (A4 or any size) for personal use.</p>
                    </div>
                    <div className="flex gap-3 items-start text-sm text-muted-foreground">
                      <Printer className="w-4 h-4 mt-0.5 text-primary" />
                      <p>Printed copies are available on request. Printing charges and shipping costs apply.</p>
                    </div>
                  </div>
                </div>
                
                <div className="w-full md:w-72 aspect-[3/4] rounded-lg overflow-hidden border border-border shadow-sm">
                  <img 
                    src={bundleMockup} 
                    alt="School & Kids Activity Bundle Preview" 
                    className="w-full h-full object-cover"
                    data-testid="img-bundle-preview"
                  />
                </div>
              </div>
            </Card>
          </section>

          {/* Future Freebies Section */}
          <section data-testid="section-future-freebies">
            <h2 className="text-2xl font-bold text-foreground mb-8">More coming soon</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="p-6 border-dashed border-2 bg-transparent flex flex-col items-center justify-center text-center space-y-4 min-h-[200px]">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                    <Clock className="w-6 h-6 text-muted-foreground/40" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-muted-foreground">Coming Soon</h4>
                    <p className="text-sm text-muted-foreground/60">We'll add new freebies here over time. Check back soon.</p>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
