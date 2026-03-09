import { Navigation } from "@/components/landing/navigation";
import { Footer } from "@/components/landing/footer";

export default function Insights() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground font-heading mb-6" data-testid="text-insights-title">
              Insights
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-insights-description">
              Discover tips, guides, and stories from our community about parenting, decluttering, and making the most of second-hand shopping.
            </p>
          </div>

          {/* Blog Posts Placeholder */}
          <div className="text-center py-16" data-testid="section-blog-placeholder">
            <p className="text-xl text-muted-foreground" data-testid="text-blog-coming-soon">
              Blog posts coming soon
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
