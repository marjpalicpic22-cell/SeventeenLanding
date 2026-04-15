import { useLocation } from "wouter";
import { Navigation } from "@/components/landing/navigation";
import { Footer } from "@/components/landing/footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import blogImage from "@assets/stz_blogs_(1)_1773216300240.png";
import { trackAppDownload } from "@/lib/tracking";

/**
 * SEO METADATA
 * Focus Keyword: secondhand kids marketplace
 * Secondary Keywords: buy kids toys secondhand, secondhand kids clothes, kids resale marketplace, eco friendly kids shopping, save money kids
 * URL Slug: secondhand-kids-marketplace-melbourne
 * Title Tag: Secondhand Kids' Marketplace Melbourne: Explore Zero2Seventeen
 * Meta Description: Explore Zero2Seventeen, a secondhand kids' marketplace Melbourne parents use to save money on kids costs, buy kids toys secondhand, and enjoy eco friendly kids shopping locally.
 * Internal Links: Zero2Seventeen (homepage), Insights (blog listing)
 */

export default function SecondhandKidsMarketplaceMelbourneBlog() {
  const [, setLocation] = useLocation();

  const handleBackToInsights = () => {
    setLocation("/blog");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20 pb-16">
        {/* Back Button */}
        <div className="sticky top-16 z-30 bg-background/95 backdrop-blur-md border-b border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Button 
              variant="ghost" 
              className="gap-2"
              onClick={handleBackToInsights}
              data-testid="button-back-to-insights"
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
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full" data-testid="tag-save-money">
                Save Money
              </span>
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full" data-testid="tag-eco-friendly">
                Eco-Friendly
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-blog-title">
              Melbourne Parents Are Quietly Using This Secondhand Kids' Marketplace to Stop Overpaying
            </h1>
            <p className="text-xl text-muted-foreground mb-6" data-testid="text-blog-excerpt">
              Explore Zero2Seventeen, a secondhand kids' marketplace Melbourne parents use to save money on kids costs, buy kids toys secondhand, and enjoy eco friendly kids shopping locally.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-muted-foreground border-b border-border pb-6" data-testid="blog-meta">
              <span data-testid="text-publish-date">Published: March 2026</span>
              <span>•</span>
              <span data-testid="text-read-time">4 min read</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-12 rounded-lg overflow-hidden bg-muted aspect-video">
            <img
              src={blogImage}
              alt="Mother organizing kids toys and clothes for secondhand marketplace"
              className="w-full h-full object-cover"
              data-testid="image-blog-featured"
            />
          </div>

          {/* Article Content */}
          <div className="prose dark:prose-invert max-w-none space-y-6 text-foreground prose-headings:text-foreground prose-p:text-lg prose-li:text-lg" data-testid="blog-content">
            {/* Hook */}
            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg my-8">
              <p className="text-lg italic text-foreground font-medium">
                Most parents don't realise how much money is sitting in their house right now, in the form of barely used kids stuff. Zero2Seventeen makes it easy to turn that chaos into savings, and you'll probably spot something you need within the first five minutes.
              </p>
            </div>

            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">The Problem Nobody Warns You About When You Become a Parent</h2>
              <p className="text-lg">It's not just nappies and daycare. It's the constant upgrades:</p>
              <ul className="space-y-2 ml-4 text-muted-foreground">
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-primary font-bold">•</span>
                  <span>Clothes that fit for five minutes</span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-primary font-bold">•</span>
                  <span>Toys that get played with once then ignored</span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-primary font-bold">•</span>
                  <span>Gear you needed urgently for a stage you already passed</span>
                </li>
              </ul>
              <p className="mt-4 text-lg">And if you're buying new every time, you're paying premium prices for temporary phases.</p>
              <p className="text-lg">That's why a secondhand kids' marketplace Melbourne parents actually use matters.</p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">What is Zero2Seventeen</h2>
              <p className="text-lg">
                <Link href="/" className="text-primary hover:text-primary/80 underline font-medium">
                  Zero2Seventeen
                </Link>
                {" "}is a secondhand kids' marketplace Melbourne families use to buy and sell kids items in one place. It's built around the way parents shop: quickly, locally, and with a focus on value.
              </p>
              <p className="text-lg">Think of it like the shortcut between:</p>
              <ul className="space-y-2 ml-4 text-muted-foreground">
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-primary font-bold">•</span>
                  <span>I need this</span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-primary font-bold">•</span>
                  <span>I found it without paying full price.</span>
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">What You'll Find That Makes You Go "Wait, People Sell That"</h2>
              <p className="text-lg">Parents list the stuff they didn't think would matter, and it adds up fast:</p>
              <ul className="space-y-2 ml-4 text-muted-foreground">
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-primary font-bold">•</span>
                  <span>Kids toys secondhand in bundles that cost less than one new toy</span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-primary font-bold">•</span>
                  <span>Clothes lots by size and season</span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-primary font-bold">•</span>
                  <span>Activity kits and learning sets for weekend sanity</span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-primary font-bold">•</span>
                  <span>Big ticket items that don't make sense to buy new</span>
                </li>
              </ul>
              <p className="mt-4 text-lg">The best part is you're not competing with big retailers. You're shopping locally from parents who want the space back.</p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Why Melbourne Parents Are Switching to Eco Friendly Kids Shopping</h2>
              <p className="text-lg">Most parents don't start secondhand because they're trying to be perfect. They start because they want relief.</p>
              <p className="text-lg">Then they realise:</p>
              <ul className="space-y-2 ml-4 text-muted-foreground">
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-primary font-bold">•</span>
                  <span>They're saving money kids costs keep eating into</span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-primary font-bold">•</span>
                  <span>They're reducing the pile of waste</span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-primary font-bold">•</span>
                  <span>They're keeping good items in use, not in landfill</span>
                </li>
              </ul>
              <p className="mt-4 text-lg">Eco friendly kids shopping is easier when it's built into what you already need to do.</p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">The Simple Reason You Should Check Today, Not Later</h2>
              <p className="text-lg">The best listings don't last. Good bundles go fast because parents know what things cost new, and they're quick to grab a deal.</p>
              <p className="text-lg">If you're curious, do this:</p>
              <ul className="space-y-2 ml-4 text-muted-foreground">
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-primary font-bold">•</span>
                  <span>Open Zero2Seventeen</span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-primary font-bold">•</span>
                  <span>Search one thing you know you'll buy soon anyway</span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-primary font-bold">•</span>
                  <span>Compare the prices and bundles</span>
                </li>
              </ul>
              <p className="mt-4 text-lg">That tiny moment usually becomes the habit.</p>
            </section>

            {/* CTA Section */}
            <div className="bg-primary/10 border border-primary/20 p-8 rounded-lg my-12">
              <h3 className="text-2xl font-bold text-foreground mb-4">Start Saving Today</h3>
              <p className="text-lg text-foreground mb-6">
                If you want the easiest way to save money on kids stuff in Melbourne, explore{" "}
                <Link href="/" className="text-primary hover:text-primary/80 underline font-medium">
                  Zero2Seventeen
                </Link>
                {" "}and see what parents near you are listing right now. Start with toys, clothes, or gear and notice how quickly the savings show up.
              </p>
              <a href="https://apps.apple.com/au/app/zero2seventeen/id6739604370" target="_blank" rel="noopener noreferrer" onClick={trackAppDownload}>
                <Button size="lg" className="gap-2" data-testid="button-app-store-cta">
                  Download Zero2Seventeen
                </Button>
              </a>
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-border">
              <h4 className="text-sm font-medium text-muted-foreground mb-4">Tags:</h4>
              <div className="flex flex-wrap gap-2">
                <Link href="/blog/tag/secondhand-kids-marketplace" className="inline-block px-3 py-1 bg-muted hover:bg-muted/80 text-foreground text-sm rounded-full transition-colors" data-testid="tag-link-secondhand">
                  Secondhand Kids Marketplace
                </Link>
                <Link href="/blog/tag/buy-kids-toys-secondhand" className="inline-block px-3 py-1 bg-muted hover:bg-muted/80 text-foreground text-sm rounded-full transition-colors" data-testid="tag-link-toys">
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
