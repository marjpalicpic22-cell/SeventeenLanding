import { Navigation } from "@/components/landing/navigation";
import { Footer } from "@/components/landing/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Download, Printer, Clock, CheckCircle2 } from "lucide-react";
import bundleMockup from "@assets/zero2seventeenmockup_2_1771837614940.png";

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
            <div className="space-y-4">
              <p className="text-xl font-medium text-foreground" data-testid="text-free-resources-question">
                Need something helpful today without adding more to your mental load?
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-free-resources-intro">
                Our free resources are made for real life Australian families calm practical and easy to use. Everything is a digital download of printable PDFs so you can grab it in minutes and start right away.
              </p>
            </div>
          </div>

          {/* Current Freebie Section */}
          <section className="mb-20" data-testid="section-current-freebie">
            <h2 className="text-2xl font-bold text-foreground mb-8">Current Freebie</h2>
            <Card className="p-8 md:p-10 hover-elevate transition-all border-primary/20 bg-primary/5">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-3" data-testid="text-freebie-name">
                      The School and Kids Reset Bundle Free
                    </h3>
                    <p className="text-muted-foreground text-lg mb-6" data-testid="text-freebie-description">
                      A parent friendly bundle of printables to help you feel more organised and keep little hands busy without screens.
                    </p>
                    
                    <ul className="space-y-3 mb-8">
                      {[
                        "2026 School Term Planner Australian dates",
                        "Kids Activity Pack ages 2 to 8",
                        "Screen Free Idea Reset Pack for overwhelmed days",
                        "Bonus 20 page Australian Kids Activity Book"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-foreground/80">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
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
                        Get the free digital bundle
                        <ArrowRight className="w-5 h-5" />
                      </Button>
                    </a>
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-foreground" data-testid="text-cta-helper">
                        Enter your email and we will send your instant download link.
                      </p>
                      <p className="text-sm text-muted-foreground" data-testid="text-spam-note">
                        If you do not see it within a few minutes please check Spam or Promotions.
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border/50">
                    <div className="space-y-4">
                      <div className="space-y-1">
                        <p className="font-semibold text-foreground">Digital download only. Nothing is shipped.</p>
                        <p className="text-sm text-muted-foreground">
                          You will receive printable PDF files to download instantly and print at home. A4 and printer friendly sizing.
                        </p>
                        <p className="text-sm text-muted-foreground">Personal use only.</p>
                      </div>
                      
                      <p className="text-sm text-muted-foreground italic border-l-2 border-primary/20 pl-4">
                        Want it professionally printed? Printed copies are available on request. Printing charges and shipping apply.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="w-full md:w-80 aspect-[3/4.5] rounded-lg overflow-hidden border border-border shadow-md bg-white">
                  <img 
                    src={bundleMockup} 
                    alt="The School and Kids Reset Bundle digital printable PDF download" 
                    className="w-full h-full object-contain"
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
