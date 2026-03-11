import { useLocation } from "wouter";
import { Navigation } from "@/components/landing/navigation";
import { Footer } from "@/components/landing/footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import blogImage from "@assets/stz_blogs_(2)_1773216772265.png";

/**
 * SEO METADATA
 * Focus Keyword: save money kids
 * Secondary Keywords: secondhand toys, kids clothes secondhand, eco friendly shopping, kids expenses, secondhand kids marketplace
 * URL Slug: save-money-kids-stuff
 * Title Tag: Save Money Kids Melbourne: Secondhand Toys, Clothes, and Eco Friendly Shopping
 * Meta Description: Save money kids costs with Zero2Seventeen, a secondhand kids' marketplace Melbourne families use to buy kids toys secondhand, shop eco friendly kids items, and support local parents.
 */

export default function SaveMoneyKidsStuffBlog() {
  const [, setLocation] = useLocation();

  const handleBackToInsights = () => {
    setLocation("/insights");
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
              Back to Insights
            </Button>
          </div>
        </div>

        {/* Article Container */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Meta Information */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full" data-testid="tag-save-money">
                Save Money
              </span>
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full" data-testid="tag-secondhand">
                Secondhand
              </span>
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full" data-testid="tag-family">
                Family
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-blog-title">
              Saving Money on Kids Stuff Is Easy When You Stop Buying New Every Time
            </h1>
            <p className="text-xl text-muted-foreground mb-6" data-testid="text-blog-excerpt">
              Save money kids costs with Zero2Seventeen, a secondhand kids' marketplace Melbourne families use to buy kids toys secondhand, shop eco friendly kids items, and support local parents.
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
              src={blogImage}
              alt="Child saving money in piggy bank while shopping secondhand"
              className="w-full h-full object-cover"
              data-testid="image-blog-featured"
            />
          </div>

          {/* Article Content */}
          <div className="prose dark:prose-invert max-w-none space-y-6 text-foreground prose-headings:text-foreground prose-p:text-lg prose-li:text-lg" data-testid="blog-content">
            {/* Hook */}
            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg my-8">
              <p className="text-lg italic text-foreground font-medium">
                If your kid uses something for two months, buying it brand new is like renting it at the highest possible price. Zero2Seventeen is the secondhand kids' marketplace Melbourne parents use to save money, help other families, and make eco friendly kids shopping feel effortless.
              </p>
            </div>

            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Why Secondhand Is the Smartest Way to Shop for Kids 0 to 17</h2>
              <p className="text-lg">Kids move fast: sizes, stages, hobbies, interests. Secondhand matches the pace.</p>
              <p className="text-lg">Buying kids toys secondhand and kids clothes secondhand works because:</p>
              <ul className="space-y-2 ml-4 text-muted-foreground">
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-primary font-bold">•</span>
                  <span>Kids outgrow things quickly</span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-primary font-bold">•</span>
                  <span>Parents want value without sacrificing quality</span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-primary font-bold">•</span>
                  <span>Bundles make it simple</span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-primary font-bold">•</span>
                  <span>You can buy, use, and pass it on</span>
                </li>
              </ul>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">The Money Saving Loop Parents Love</h2>
              <p className="text-lg">Secondhand is a cycle:</p>
              <ul className="space-y-2 ml-4 text-muted-foreground">
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-primary font-bold">•</span>
                  <span>You buy what you need for less</span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-primary font-bold">•</span>
                  <span>Your kid uses it</span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-primary font-bold">•</span>
                  <span>You resell it when you're done</span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-primary font-bold">•</span>
                  <span>You put that money into the next stage</span>
                </li>
              </ul>
              <p className="mt-4 text-lg">This is how you save money on kids expenses without feeling like you're cutting corners.</p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">What You Can Find on Zero2Seventeen</h2>
              <p className="text-lg">Parents are often shocked by how much is available locally:</p>
              <ul className="space-y-2 ml-4 text-muted-foreground">
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-primary font-bold">•</span>
                  <span>Clothing bundles by size and season</span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-primary font-bold">•</span>
                  <span>Books and learning sets</span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-primary font-bold">•</span>
                  <span>Toys for every age</span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-primary font-bold">•</span>
                  <span>Sports gear and hobby items</span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-primary font-bold">•</span>
                  <span>Family essentials that stretch a budget</span>
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Eco Friendly Kids Shopping Without the Pressure</h2>
              <p className="text-lg">Secondhand is one of the simplest environmental wins available to parents.</p>
              <p className="text-lg">It reduces:</p>
              <ul className="space-y-2 ml-4 text-muted-foreground">
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-primary font-bold">•</span>
                  <span>Landfill waste</span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-primary font-bold">•</span>
                  <span>Packaging</span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-primary font-bold">•</span>
                  <span>New production demand</span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-primary font-bold">•</span>
                  <span>Shipping emissions</span>
                </li>
              </ul>
              <p className="mt-4 text-lg">And it builds something better: community.</p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">How It Helps Other Families in Melbourne</h2>
              <p className="text-lg">When you buy from a parent nearby, the impact is real:</p>
              <ul className="space-y-2 ml-4 text-muted-foreground">
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-primary font-bold">•</span>
                  <span>One family gets cash back</span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-primary font-bold">•</span>
                  <span>One family gets what they need for less</span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-primary font-bold">•</span>
                  <span>Kids get quality items without the full price</span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-primary font-bold">•</span>
                  <span>Your local community strengthens</span>
                </li>
              </ul>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">The FOMO Factor</h2>
              <p className="text-lg">Parents list the good stuff and it goes quickly. If you only check when you urgently need something, you'll miss the best bundles.</p>
              <p className="text-lg">The easiest way to win is to browse before you're desperate.</p>
            </section>

            {/* CTA Section */}
            <div className="bg-primary/10 border border-primary/20 p-8 rounded-lg my-12">
              <h3 className="text-2xl font-bold text-foreground mb-4">Start Saving Today</h3>
              <p className="text-lg text-foreground mb-6">
                Explore{" "}
                <Link href="/" className="text-primary hover:text-primary/80 underline font-medium">
                  Zero2Seventeen
                </Link>
                {" "}today and search for one item you know you'll need in the next month. Compare new prices versus secondhand. Once you see the difference, it's hard to go back.
              </p>
              <a href="https://apps.apple.com/au/app/zero2seventeen/id6739604370" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gap-2" data-testid="button-app-store-cta">
                  Download Zero2Seventeen
                </Button>
              </a>
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-border">
              <h4 className="text-sm font-medium text-muted-foreground mb-4">Tags:</h4>
              <div className="flex flex-wrap gap-2">
                <Link href="/insights/tag/save-money-kids-costs" className="inline-block px-3 py-1 bg-muted hover:bg-muted/80 text-foreground text-sm rounded-full transition-colors" data-testid="tag-link-save">
                  Save Money Kids Costs
                </Link>
                <Link href="/insights/tag/secondhand-kids-marketplace" className="inline-block px-3 py-1 bg-muted hover:bg-muted/80 text-foreground text-sm rounded-full transition-colors" data-testid="tag-link-secondhand">
                  Secondhand Kids Marketplace
                </Link>
                <Link href="/insights/tag/buy-kids-toys-secondhand" className="inline-block px-3 py-1 bg-muted hover:bg-muted/80 text-foreground text-sm rounded-full transition-colors" data-testid="tag-link-toys">
                  Buy Kids Toys Secondhand
                </Link>
                <Link href="/insights/tag/eco-friendly-kids-shopping" className="inline-block px-3 py-1 bg-muted hover:bg-muted/80 text-foreground text-sm rounded-full transition-colors" data-testid="tag-link-eco">
                  Eco-Friendly Kids Shopping
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
