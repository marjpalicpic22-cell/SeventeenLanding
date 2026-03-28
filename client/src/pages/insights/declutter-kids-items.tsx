import { useLocation } from "wouter";
import { Navigation } from "@/components/landing/navigation";
import { Footer } from "@/components/landing/footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import blogImage from "@assets/stz_blogs_1773214194233.png";

/**
 * SEO METADATA
 * Focus Keyword: declutter kids items
 * Secondary Keywords: declutter kids clothes, secondhand kids marketplace, sell kids clothes online, kids resale marketplace, eco friendly kids shopping
 * URL Slug: declutter-kids-items
 * Title Tag: Declutter Kids Items Melbourne: Sell Secondhand and Clear Space Fast
 * Meta Description: Decluttering kids items is emotional. Learn how Melbourne parents clear clutter, save money on kids costs, and use a secondhand kids' marketplace to give items a second life.
 * Internal Links: Zero2Seventeen (homepage), Insights (blog listing)
 */

export default function DeclutterKidsItemsBlog() {
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
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full" data-testid="tag-declutter">
                Decluttering
              </span>
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full" data-testid="tag-kids-items">
                Kids Items
              </span>
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full" data-testid="tag-secondhand">
                Secondhand
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-blog-title">
              The Fastest Way to Declutter Kids Stuff Without the Guilt or the Waste
            </h1>
            <p className="text-xl text-muted-foreground mb-6" data-testid="text-blog-excerpt">
              Decluttering kids items is emotional. Learn how Melbourne parents clear clutter, save money on kids costs, and use a secondhand kids' marketplace to give items a second life.
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
              alt="Woman sorting and organizing clothes to declutter"
              className="w-full h-full object-cover"
              data-testid="image-blog-featured"
            />
          </div>

          {/* Article Content */}
          <div className="prose dark:prose-invert max-w-none space-y-6 text-foreground prose-headings:text-foreground prose-p:text-lg prose-li:text-lg" data-testid="blog-content">
            {/* Hook */}
            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg my-8">
              <p className="text-lg italic text-foreground font-medium">
                There's a specific kind of stress that comes from kids clutter: you're surrounded by it, you feel bad getting rid of it, and you don't have time to handle it properly. Here's the trick Melbourne parents are using to clear space and feel instantly lighter.
              </p>
            </div>

            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Why Kids Clutter Feels Heavier Than Normal Clutter</h2>
              <p className="text-lg">Because it's not just stuff. It's:</p>
              <ul className="space-y-2 ml-4 text-muted-foreground">
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-primary font-bold">•</span>
                  <span>Money you spent</span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-primary font-bold">•</span>
                  <span>Memories you don't want to throw away</span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-primary font-bold">•</span>
                  <span>The fear you'll need it again</span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-primary font-bold">•</span>
                  <span>The mental load of unfinished tasks</span>
                </li>
              </ul>
              <p className="mt-4 text-lg">So the piles stay. And every pile quietly drains your energy.</p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">What Decluttering Actually Gives You</h2>
              <p className="text-lg">Most parents think decluttering is about a tidy house. It's not. It's about capacity.</p>
              <p className="text-lg">When you declutter, you get:</p>
              <ul className="space-y-2 ml-4 text-muted-foreground">
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-primary font-bold">•</span>
                  <span>Faster mornings</span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-primary font-bold">•</span>
                  <span>Less overstimulation</span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-primary font-bold">•</span>
                  <span>More space for kids to play</span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-primary font-bold">•</span>
                  <span>Less guilt every time you walk past a pile</span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-primary font-bold">•</span>
                  <span>A home that feels calmer without trying</span>
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">The Guilt Blocker: Give It a Second Life</h2>
              <p className="text-lg">The reason decluttering works with a marketplace is simple.</p>
              <p className="text-lg">You stop thinking: <em>I'm getting rid of this.</em></p>
              <p className="text-lg">And start thinking: <em>Another family will actually use this.</em></p>
              <p className="text-lg">That shift makes it easier to let go.</p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">The 15-Minute Declutter Method (That Parents Actually Stick To)</h2>
              <p className="text-lg">Do this today:</p>
              <ol className="space-y-2 ml-4 text-muted-foreground list-decimal">
                <li className="text-lg">Set a 15-minute timer</li>
                <li className="text-lg">Pick one category: books, dress ups, toy bins, clothes</li>
                <li className="text-lg">Pull out anything your kid has outgrown or ignored for 30 days</li>
                <li className="text-lg">Make 3 piles: keep, list, donate</li>
                <li className="text-lg">List only three items to start</li>
              </ol>
              <p className="mt-4 text-lg text-foreground font-medium">That's it.</p>
              <p className="text-lg">Momentum is the goal, not perfection.</p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">How Zero2Seventeen Makes Decluttering Easier</h2>
              <p className="text-lg">
                <Link href="/" className="text-primary hover:text-primary/80 underline font-medium">
                  Zero2Seventeen
                </Link>
                {" "}gives Melbourne parents a simple way to move items out, without the drama of random selling.
              </p>
              <p className="text-lg">It supports:</p>
              <ul className="space-y-2 ml-4 text-muted-foreground">
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-primary font-bold">•</span>
                  <span>Quick listings</span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-primary font-bold">•</span>
                  <span>Local pick up</span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-primary font-bold">•</span>
                  <span>Bundles that sell faster</span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-primary font-bold">•</span>
                  <span>The emotional relief of knowing it's helping another family</span>
                </li>
              </ul>
              <p className="mt-4 text-lg">You declutter and save money on kids costs at the same time.</p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">What to List First for Fast Wins</h2>
              <p className="text-lg">Start with the things parents search constantly:</p>
              <ul className="space-y-2 ml-4 text-muted-foreground">
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-primary font-bold">•</span>
                  <span>Toy bundles</span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-primary font-bold">•</span>
                  <span>Kids books and learning packs</span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-primary font-bold">•</span>
                  <span>Clothes lots by size</span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-primary font-bold">•</span>
                  <span>Outdoor play items</span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-primary font-bold">•</span>
                  <span>Hobby and sport items kids moved on from</span>
                </li>
              </ul>
            </section>

            {/* CTA Section */}
            <div className="bg-primary/10 border border-primary/20 p-8 rounded-lg my-12">
              <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Declutter and Earn?</h3>
              <p className="text-lg text-foreground mb-6">
                If you want that instant declutter relief, explore{" "}
                <Link href="/" className="text-primary hover:text-primary/80 underline font-medium">
                  Zero2Seventeen
                </Link>
                {" "}and look at how other parents list bundles. Then list three items today. You'll feel the difference by tonight.
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
                <Link href="/blog/tag/declutter-kids-items" className="inline-block px-3 py-1 bg-muted hover:bg-muted/80 text-foreground text-sm rounded-full transition-colors" data-testid="tag-link-declutter">
                  Declutter Kids Items
                </Link>
                <Link href="/blog/tag/secondhand-kids-marketplace" className="inline-block px-3 py-1 bg-muted hover:bg-muted/80 text-foreground text-sm rounded-full transition-colors" data-testid="tag-link-secondhand">
                  Secondhand Kids Marketplace
                </Link>
                <Link href="/blog/tag/sell-kids-clothes-online" className="inline-block px-3 py-1 bg-muted hover:bg-muted/80 text-foreground text-sm rounded-full transition-colors" data-testid="tag-link-sell-clothes">
                  Sell Kids Clothes Online
                </Link>
                <Link href="/blog/tag/kids-resale-marketplace" className="inline-block px-3 py-1 bg-muted hover:bg-muted/80 text-foreground text-sm rounded-full transition-colors" data-testid="tag-link-resale">
                  Kids Resale Marketplace
                </Link>
                <Link href="/blog/tag/eco-friendly-kids-shopping" className="inline-block px-3 py-1 bg-muted hover:bg-muted/80 text-foreground text-sm rounded-full transition-colors" data-testid="tag-link-eco">
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
