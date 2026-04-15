import { useLocation } from "wouter";
import { Navigation } from "@/components/landing/navigation";
import { Footer } from "@/components/landing/footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/stock_images/australian_mother_wa_bb6b73db.jpg";
import { trackAppDownload } from "@/lib/tracking";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Best Apps for Selling Baby Items in Australia (2026)",
  "description": "Compare the top apps for selling baby and kids items in Australia in 2026, including Zero 2 Seventeen, Facebook Marketplace, Gumtree, and eBay.",
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

export default function BestAppsSellingBabyItemsAustralia() {
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
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full" data-testid="tag-marketplace">
                Marketplace
              </span>
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full" data-testid="tag-tips">
                Tips
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-blog-title">
              Best Apps for Selling Baby Items in Australia (2026)
            </h1>
            <p className="text-xl text-muted-foreground mb-6" data-testid="text-blog-excerpt">
              We've compared the most popular options for Australian parents in 2026 so you can find the right platform for what you're selling.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-muted-foreground border-b border-border pb-6" data-testid="blog-meta">
              <span data-testid="text-publish-date">Published: March 2026</span>
              <span>•</span>
              <span data-testid="text-read-time">6 min read</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-12 rounded-lg overflow-hidden bg-muted aspect-video">
            <img
              src={heroImage}
              alt="Australian mother with kids items ready to sell"
              className="w-full h-full object-cover"
              data-testid="image-blog-featured"
            />
          </div>

          {/* Article Content */}
          <div className="prose dark:prose-invert max-w-none space-y-6 text-foreground prose-headings:text-foreground prose-p:text-lg prose-li:text-lg" data-testid="blog-content">

            <p className="text-lg">
              Your baby has outgrown another batch of clothes. The nursery is overflowing with toys they no longer play with. That expensive pram is collecting dust.
            </p>
            <p className="text-lg">Sound familiar?</p>
            <p className="text-lg">
              Every Australian parent faces this. Kids outgrow things fast, and quality items deserve a second life with another family. But which app should you use to sell them?
            </p>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">What Makes a Good App for Selling Baby Items?</h2>
              <p className="text-lg">Before we compare apps, here's what matters most:</p>
              <ul className="space-y-3 ml-4 mt-4">
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Safety.</strong> You're inviting strangers into your life. The platform should feel secure.</span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Relevant audience.</strong> Are buyers actually looking for kids items, or are you competing with car listings?</span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Ease of use.</strong> You're a busy parent. Listing should take minutes, not hours.</span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Local focus.</strong> Shipping baby gear is expensive. Local pickup is usually best.</span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Community.</strong> Bonus points if you can connect with other parents, not just transact.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Top Apps for Selling Baby Items in Australia</h2>

              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-6">
                <h3 className="text-xl font-bold text-foreground mb-2">1. Zero 2 Seventeen</h3>
                <p className="text-sm text-primary font-medium mb-3">Best for: Parents who want a dedicated kids marketplace with community</p>
                <p className="text-lg mb-4">
                  <Link href="/" className="text-primary hover:text-primary/80 underline font-medium">Zero 2 Seventeen</Link>{" "}
                  is built exclusively for children's items from newborn to age 17. Every buyer is a parent. Every listing is kids-related. Beyond buying and selling, it's a community where parents connect and support each other.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-foreground mb-2">Pros</p>
                    <ul className="space-y-1 text-muted-foreground">
                      {["Focused entirely on kids items", "Parent community built in", "Free to list", "Local focus", "Safe environment"].map((pro, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <span className="text-primary">✓</span> {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">Cons</p>
                    <ul className="space-y-1 text-muted-foreground">
                      {["Smaller audience than general marketplaces (but more targeted)", "Newer platform"].map((con, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <span className="text-muted-foreground">–</span> {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border border-border rounded-lg p-6 my-6">
                <h3 className="text-xl font-bold text-foreground mb-2">2. Facebook Marketplace</h3>
                <p className="text-sm text-muted-foreground font-medium mb-3">Best for: Parents already active on Facebook who want maximum reach</p>
                <p className="text-lg mb-4">Facebook Marketplace has massive reach. If you're selling something expensive or unusual, more eyeballs can help.</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-foreground mb-2">Pros</p>
                    <ul className="space-y-1 text-muted-foreground">
                      {["Huge audience", "Free to list", "Easy if you already use Facebook"].map((pro, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <span className="text-primary">✓</span> {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">Cons</p>
                    <ul className="space-y-1 text-muted-foreground">
                      {["Baby clothes compete with everything else", "No parent community", "More spam"].map((con, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <span className="text-muted-foreground">–</span> {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border border-border rounded-lg p-6 my-6">
                <h3 className="text-xl font-bold text-foreground mb-2">3. Gumtree</h3>
                <p className="text-sm text-muted-foreground font-medium mb-3">Best for: General selling alongside kids items</p>
                <p className="text-lg mb-4">Gumtree is Australia's original classifieds site. It works, but it's not designed for parents.</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-foreground mb-2">Pros</p>
                    <ul className="space-y-1 text-muted-foreground">
                      {["Well-known platform", "Free basic listings", "Local focus"].map((pro, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <span className="text-primary">✓</span> {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">Cons</p>
                    <ul className="space-y-1 text-muted-foreground">
                      {["General marketplace", "Dated interface", "No community features"].map((con, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <span className="text-muted-foreground">–</span> {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border border-border rounded-lg p-6 my-6">
                <h3 className="text-xl font-bold text-foreground mb-2">4. eBay</h3>
                <p className="text-sm text-muted-foreground font-medium mb-3">Best for: Branded items you want to ship nationally</p>
                <p className="text-lg mb-4">eBay works well for valuable branded items where buyers will pay for shipping.</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-foreground mb-2">Pros</p>
                    <ul className="space-y-1 text-muted-foreground">
                      {["National reach", "Buyer protection", "Good for branded items"].map((pro, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <span className="text-primary">✓</span> {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">Cons</p>
                    <ul className="space-y-1 text-muted-foreground">
                      {["Fees on sales", "Shipping hassle", "Not local-focused"].map((con, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <span className="text-muted-foreground">–</span> {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Which Should You Choose?</h2>
              <p className="text-lg">
                If you're selling kids items specifically, use Zero 2 Seventeen. You'll reach parents who are actively looking for what you're selling, and you'll become part of a supportive community.
              </p>
              <p className="text-lg">
                If you're doing a big household declutter with all kinds of items, Facebook Marketplace or Gumtree makes sense for the non-kids stuff.
              </p>
              <p className="text-lg">
                Many parents use multiple platforms. That's perfectly fine.
              </p>
            </section>

            {/* CTA Section */}
            <div className="bg-primary/10 border border-primary/20 p-8 rounded-lg my-12">
              <h3 className="text-2xl font-bold text-foreground mb-4">Try Zero 2 Seventeen</h3>
              <p className="text-lg text-foreground mb-6">
                Ready to sell your baby's outgrown items to parents who actually want them? Download{" "}
                <Link href="/" className="text-primary hover:text-primary/80 underline font-medium">
                  Zero 2 Seventeen
                </Link>
                {" "}free on the App Store or Google Play.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="https://apps.apple.com/au/app/zero2seventeen/id6739604370" target="_blank" rel="noopener noreferrer" onClick={trackAppDownload}>
                  <Button size="lg" className="gap-2 w-full sm:w-auto" data-testid="button-app-store-cta">
                    App Store
                  </Button>
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.zero2seventeen" target="_blank" rel="noopener noreferrer" onClick={trackAppDownload}>
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
                <Link href="/blog/tag/sell-kids-clothes-online" className="inline-block px-3 py-1 bg-muted hover:bg-muted/80 text-foreground text-sm rounded-full transition-colors" data-testid="tag-link-sell">
                  Sell Kids Clothes Online
                </Link>
                <Link href="/blog/tag/save-money-kids-costs" className="inline-block px-3 py-1 bg-muted hover:bg-muted/80 text-foreground text-sm rounded-full transition-colors" data-testid="tag-link-save">
                  Save Money Kids Costs
                </Link>
                <Link href="/blog/tag/kids-resale-marketplace" className="inline-block px-3 py-1 bg-muted hover:bg-muted/80 text-foreground text-sm rounded-full transition-colors" data-testid="tag-link-resale">
                  Kids Resale Marketplace
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
