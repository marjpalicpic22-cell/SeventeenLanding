import { useLocation } from "wouter";
import { Navigation } from "@/components/landing/navigation";
import { Footer } from "@/components/landing/footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/stock_images/children_toys_boxes__35d377c1.jpg";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Where to Buy Second Hand Baby Clothes in Melbourne (2026 Guide)",
  "description": "Smart Melbourne parents know the secret: second hand baby clothes are often barely worn and cost a fraction of new. Here's where to find the best pre-loved kids clothing in Melbourne.",
  "datePublished": "2026-03-28",
  "dateModified": "2026-03-28",
  "author": {
    "@type": "Organization",
    "name": "Zero 2 Seventeen"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Zero 2 Seventeen",
    "url": "https://www.zero2seventeen.com"
  }
};

export default function WheToBuySecondHandBabyClothes() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Navigation />

      <main className="pt-20 pb-16">
        {/* Back Button */}
        <div className="sticky top-16 z-30 bg-background/95 backdrop-blur-md border-b border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Button
              variant="ghost"
              className="gap-2"
              onClick={() => setLocation("/blog")}
              data-testid="button-back-to-blog"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Button>
          </div>
        </div>

        {/* Article Container */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Meta Information */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full" data-testid="tag-secondhand">
                Secondhand
              </span>
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full" data-testid="tag-melbourne">
                Melbourne
              </span>
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full" data-testid="tag-shopping">
                Shopping
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-blog-title">
              Where to Buy Second Hand Baby Clothes in Melbourne (2026 Guide)
            </h1>
            <p className="text-xl text-muted-foreground mb-6" data-testid="text-blog-excerpt">
              Babies outgrow clothes in weeks. Here's where Melbourne parents find the best quality pre-loved kids clothing for a fraction of the retail price.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-muted-foreground border-b border-border pb-6" data-testid="blog-meta">
              <span data-testid="text-publish-date">Published: March 2026</span>
              <span>•</span>
              <span data-testid="text-read-time">5 min read</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-12 rounded-lg overflow-hidden bg-muted aspect-video">
            <img
              src={heroImage}
              alt="Children's clothes and items ready for second hand sale"
              className="w-full h-full object-cover"
              data-testid="image-blog-featured"
            />
          </div>

          {/* Article Content */}
          <div className="prose dark:prose-invert max-w-none space-y-6 text-foreground prose-headings:text-foreground prose-p:text-lg prose-li:text-lg" data-testid="blog-content">

            <p className="text-lg">
              Babies outgrow clothes in weeks. Paying full retail price for something they'll wear three times feels wasteful.
            </p>
            <p className="text-lg">
              Smart Melbourne parents know the secret: second hand baby clothes are often barely worn and cost a fraction of new.
            </p>
            <p className="text-lg">Here's where to find the best quality pre-loved kids clothing in Melbourne.</p>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Apps for Buying Second Hand Baby Clothes</h2>

              <div className="space-y-4">
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-5">
                  <h3 className="text-lg font-bold text-foreground mb-2">Zero 2 Seventeen</h3>
                  <p className="text-lg text-foreground">
                    The dedicated kids marketplace app. Every listing is from a parent selling items their children have outgrown. Search by size, brand, and condition. Connect with local Melbourne parents directly and arrange pickup in your suburb.
                  </p>
                </div>

                <div className="border border-border rounded-lg p-5">
                  <h3 className="text-lg font-bold text-foreground mb-2">Facebook Marketplace</h3>
                  <p className="text-lg text-muted-foreground">
                    Huge selection but you'll wade through car listings and furniture. Search "baby clothes [your suburb]" to filter results to your area.
                  </p>
                </div>

                <div className="border border-border rounded-lg p-5">
                  <h3 className="text-lg font-bold text-foreground mb-2">Gumtree</h3>
                  <p className="text-lg text-muted-foreground">
                    The classic classifieds site. Functional but dated. Worth checking for larger items like prams and cots.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Melbourne Markets for Baby Clothes</h2>
              <div className="space-y-4">
                <div className="border border-border rounded-lg p-5">
                  <h3 className="text-lg font-bold text-foreground mb-2">Camberwell Sunday Market</h3>
                  <p className="text-lg text-muted-foreground">
                    One of Melbourne's best for second hand goods. Plenty of stalls sell quality kids clothing. Sundays, 6am–12:30pm at Station Street, Camberwell.
                  </p>
                </div>
                <div className="border border-border rounded-lg p-5">
                  <h3 className="text-lg font-bold text-foreground mb-2">Local Community Markets</h3>
                  <p className="text-lg text-muted-foreground">
                    Many suburbs run their own weekend markets. Check your local council website for upcoming dates.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Best Op Shops for Baby Clothes in Melbourne</h2>

              <div className="space-y-4">
                <div className="border border-border rounded-lg p-5">
                  <h3 className="text-lg font-bold text-foreground mb-2">Savers</h3>
                  <p className="text-lg text-muted-foreground">
                    Large stores with big kids sections. Hit or miss, but prices are great when you find a gem.
                  </p>
                </div>
                <div className="border border-border rounded-lg p-5">
                  <h3 className="text-lg font-bold text-foreground mb-2">Brotherhood of St Laurence</h3>
                  <p className="text-lg text-muted-foreground">
                    Well-organised stores with quality donated items across Melbourne.
                  </p>
                </div>
              </div>

              <div className="bg-primary/5 border-l-4 border-primary p-5 rounded-r-lg mt-6">
                <p className="text-lg font-medium text-foreground">
                  <strong>Tip:</strong> Visit op shops in areas like Toorak, Brighton, and Camberwell. Parents there often donate barely-worn designer kids clothes.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">The Best Way to Buy Second Hand Baby Clothes in Melbourne</h2>
              <p className="text-lg">
                If you want convenience, use{" "}
                <Link href="/" className="text-primary hover:text-primary/80 underline font-medium">
                  Zero 2 Seventeen
                </Link>. Search for exactly what you need, message local parents directly, and arrange pickup in your suburb.
              </p>
              <p className="text-lg">
                If you enjoy the hunt, combine app browsing with weekend market visits and occasional op shop trips.
              </p>
              <p className="text-lg">
                Either way, buying second hand saves money and keeps quality clothes out of landfill.
              </p>
            </section>

            {/* CTA Section */}
            <div className="bg-primary/10 border border-primary/20 p-8 rounded-lg my-12">
              <h3 className="text-2xl font-bold text-foreground mb-4">Find Baby Clothes on Zero 2 Seventeen</h3>
              <p className="text-lg text-foreground mb-6">
                Browse second hand baby clothes from Melbourne parents right now. Download{" "}
                <Link href="/" className="text-primary hover:text-primary/80 underline font-medium">
                  Zero 2 Seventeen
                </Link>
                {" "}free on the App Store or Google Play.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="https://apps.apple.com/au/app/zero2seventeen/id6739604370" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="gap-2 w-full sm:w-auto" data-testid="button-app-store-cta">
                    App Store
                  </Button>
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.zero2seventeen" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto" data-testid="button-google-play-cta">
                    Google Play
                  </Button>
                </a>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-border">
              <h4 className="text-sm font-medium text-muted-foreground mb-4">Tags:</h4>
              <div className="flex flex-wrap gap-2">
                <Link href="/blog/tag/secondhand-kids-marketplace" className="inline-block px-3 py-1 bg-muted hover:bg-muted/80 text-foreground text-sm rounded-full transition-colors" data-testid="tag-link-secondhand">
                  Secondhand Kids Marketplace
                </Link>
                <Link href="/blog/tag/buy-kids-toys-secondhand" className="inline-block px-3 py-1 bg-muted hover:bg-muted/80 text-foreground text-sm rounded-full transition-colors" data-testid="tag-link-buy">
                  Buy Kids Toys Secondhand
                </Link>
                <Link href="/blog/tag/eco-friendly-kids-shopping" className="inline-block px-3 py-1 bg-muted hover:bg-muted/80 text-foreground text-sm rounded-full transition-colors" data-testid="tag-link-eco">
                  Eco-Friendly Kids Shopping
                </Link>
                <Link href="/blog/tag/save-money-kids-costs" className="inline-block px-3 py-1 bg-muted hover:bg-muted/80 text-foreground text-sm rounded-full transition-colors" data-testid="tag-link-save">
                  Save Money Kids Costs
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
