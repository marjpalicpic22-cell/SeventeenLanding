import { useLocation } from "wouter";
import { Navigation } from "@/components/landing/navigation";
import { Footer } from "@/components/landing/footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/stock_images/happy_families_mothe_da294cb8.jpg";
import { trackAppDownload } from "@/lib/tracking";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Zero 2 Seventeen vs Facebook Marketplace: Which is Better for Selling Baby Items in Australia?",
  "description": "An honest comparison of Zero 2 Seventeen and Facebook Marketplace for Australian parents selling baby and kids items.",
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

export default function Zero2SeventeenVsFacebookMarketplace() {
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
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-blog-title">
              Zero 2 Seventeen vs Facebook Marketplace: Which is Better for Selling Baby Items in Australia?
            </h1>
            <p className="text-xl text-muted-foreground mb-6" data-testid="text-blog-excerpt">
              An honest comparison so you can decide what works best for your family.
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
              alt="Happy Australian family with kids items"
              className="w-full h-full object-cover"
              data-testid="image-blog-featured"
            />
          </div>

          {/* Article Content */}
          <div className="prose dark:prose-invert max-w-none space-y-6 text-foreground prose-headings:text-foreground prose-p:text-lg prose-li:text-lg" data-testid="blog-content">

            <p className="text-lg">
              If you're an Australian parent looking to sell your baby's outgrown clothes, toys, or gear, you've probably considered Facebook Marketplace. It's free, it's familiar, and millions of people use it.
            </p>
            <p className="text-lg">
              But is it actually the best option for selling kids items?
            </p>
            <p className="text-lg">
              We built Zero 2 Seventeen specifically for parents, so we're obviously biased. But let's do an honest comparison so you can decide what works best for your family.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">The Key Difference</h2>
              <p className="text-lg">
                Facebook Marketplace is a general marketplace for everything. Your baby clothes listing sits next to used cars, furniture, electronics, and everything else.
              </p>
              <p className="text-lg">
                Zero 2 Seventeen is built exclusively for kids items. Every listing is baby gear, kids clothes, toys, or family-related. Every buyer is a parent looking for exactly what you're selling.
              </p>
              <p className="text-lg">This single difference changes everything about the experience.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Quick Comparison</h2>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm border-collapse" data-testid="comparison-table">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="text-left p-3 border border-border font-semibold text-foreground">Feature</th>
                      <th className="text-left p-3 border border-border font-semibold text-primary">Zero 2 Seventeen</th>
                      <th className="text-left p-3 border border-border font-semibold text-foreground">Facebook Marketplace</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Focus", "Kids items only (0–17 years)", "Everything"],
                      ["Audience", "Parents and families", "General public"],
                      ["Listing fees", "Free", "Free"],
                      ["Community", "Parent-focused, supportive", "General, mixed"],
                      ["Safety", "In-app messaging, parent community", "Messenger (linked to personal profile)"],
                      ["Trust factor", "Selling to other parents", "Selling to anyone"],
                      ["Best for", "Baby clothes, toys, prams, kids gear", "General household items"],
                    ].map(([feature, z2s, fb], i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-muted/30"}>
                        <td className="p-3 border border-border font-medium text-foreground">{feature}</td>
                        <td className="p-3 border border-border text-foreground">{z2s}</td>
                        <td className="p-3 border border-border text-muted-foreground">{fb}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">When Facebook Marketplace Makes Sense</h2>
              <p className="text-lg">Let's be fair. Facebook Marketplace is a good choice when:</p>
              <ul className="space-y-3 ml-4 mt-4">
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>You're selling a mix of items.</strong> If you're doing a big household declutter with furniture, electronics, AND baby stuff, Facebook lets you list everything in one place.</span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>You want maximum reach.</strong> Facebook has billions of users. If you're selling something niche or expensive, more eyeballs can help.</span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>You're already active on Facebook.</strong> If you spend time on Facebook anyway, it's convenient to manage listings there.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">When Zero 2 Seventeen is the Better Choice</h2>
              <p className="text-lg">Zero 2 Seventeen makes more sense when:</p>
              <ul className="space-y-3 ml-4 mt-4">
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>You're specifically selling kids items.</strong> Your baby clothes won't compete with car listings. Buyers are actively looking for what you're selling.</span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>You want to connect with other parents.</strong> Beyond buying and selling, you can share experiences, get advice, and build genuine connections with mums who understand your journey.</span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>You value a supportive community.</strong> Our community is built around parents helping parents. It's not just transactions.</span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Safety matters to you.</strong> You're selling to other parents in your community, not random strangers.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">It's About More Than Selling</h2>
              <p className="text-lg">
                Here's what most comparisons miss: Zero 2 Seventeen isn't just a marketplace. It's a community.
              </p>
              <p className="text-lg">
                When Madelon Andrews founded Zero 2 Seventeen, she wasn't just frustrated with marketplace options. She wished she had other mums to ask for advice — people who understood what she was going through.
              </p>
              <p className="text-lg">
                That's why we built community features into the app. Parents connect, share experiences, and support each other. When you sell a pram on Zero 2 Seventeen, you're not just making a transaction. You're helping another family and becoming part of something bigger.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">The Verdict</h2>
              <p className="text-lg">
                If you're selling a random mix of household items, Facebook Marketplace makes sense.
              </p>
              <p className="text-lg">
                If you're specifically selling kids items and want to connect with other parents in a supportive community, Zero 2 Seventeen is built for you.
              </p>
              <p className="text-lg">
                Many parents use both. They sell general items on Facebook Marketplace and kids items on Zero 2 Seventeen. That's a perfectly good approach.
              </p>
            </section>

            {/* CTA Section */}
            <div className="bg-primary/10 border border-primary/20 p-8 rounded-lg my-12">
              <h3 className="text-2xl font-bold text-foreground mb-4">Try Zero 2 Seventeen</h3>
              <p className="text-lg text-foreground mb-6">
                Ready to see the difference? Download{" "}
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
                <Link href="/blog/tag/facebook-marketplace-alternative" className="inline-block px-3 py-1 bg-muted hover:bg-muted/80 text-foreground text-sm rounded-full transition-colors" data-testid="tag-link-fb">
                  Facebook Marketplace Alternative
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
