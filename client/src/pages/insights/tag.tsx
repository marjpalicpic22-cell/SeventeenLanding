import { useRoute } from "wouter";
import { Navigation } from "@/components/landing/navigation";
import { Footer } from "@/components/landing/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function InsightsTag() {
  const [match, params] = useRoute("/insights/tag/:tagName");

  if (!match) {
    return null;
  }

  const tagName = params?.tagName || "";
  const displayTagName = tagName.replace(/-/g, " ");

  // Blog posts for this tag
  const allPosts = [
    {
      id: 1,
      slug: "declutter-kids-items",
      title: "The Fastest Way to Declutter Kids Stuff Without the Guilt or the Waste",
      excerpt: "Learn how Melbourne parents clear clutter, save money on kids costs, and use a secondhand marketplace to give items a second life.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      date: "March 2026",
      readTime: "5 min read",
      tags: ["declutter-kids-items", "secondhand-kids-marketplace", "sell-kids-clothes-online", "kids-resale-marketplace", "eco-friendly-kids-shopping"],
    },
    {
      id: 2,
      slug: "secondhand-kids-marketplace-melbourne",
      title: "Melbourne Parents Are Quietly Using This Secondhand Kids' Marketplace to Stop Overpaying",
      excerpt: "Explore Zero2Seventeen, a secondhand kids' marketplace Melbourne parents use to save money on kids costs, buy kids toys secondhand, and enjoy eco friendly kids shopping locally.",
      image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=600&h=400&fit=crop",
      date: "March 2026",
      readTime: "4 min read",
      tags: ["secondhand-kids-marketplace", "buy-kids-toys-secondhand", "eco-friendly-kids-shopping", "save-money-kids-costs"],
    },
  ];

  const postsForTag = allPosts.filter((post) => post.tags.includes(tagName));

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <Link href="/insights">
            <Button variant="ghost" className="gap-2 mb-8" data-testid="button-back-to-insights">
              <ArrowLeft className="w-4 h-4" />
              Back to Insights
            </Button>
          </Link>

          {/* Tag Header */}
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground font-heading mb-6 capitalize" data-testid="text-tag-title">
              {displayTagName}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-tag-description">
              Explore articles tagged with <span className="font-medium text-foreground">{displayTagName}</span>
            </p>
          </div>

          {/* Blog Posts Grid */}
          {postsForTag.length > 0 ? (
            <div className="grid grid-cols-1 gap-8" data-testid="section-tag-posts">
              {postsForTag.map((post) => (
                <Card
                  key={post.id}
                  className="overflow-hidden hover-elevate transition-all"
                  data-testid={`card-blog-post-${post.id}`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                    <div className="md:col-span-2 p-8 flex flex-col justify-between">
                      <div>
                        <Link href={`/insights/${post.slug}`}>
                          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 hover:text-primary transition-colors cursor-pointer" data-testid={`text-post-title-${post.id}`}>
                            {post.title}
                          </h2>
                        </Link>
                        <p className="text-muted-foreground text-lg mb-6" data-testid={`text-post-excerpt-${post.id}`}>
                          {post.excerpt}
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span data-testid={`text-post-date-${post.id}`}>{post.date}</span>
                          <span>•</span>
                          <span data-testid={`text-post-read-time-${post.id}`}>{post.readTime}</span>
                        </div>
                        <Link href={`/insights/${post.slug}`}>
                          <div className="flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all cursor-pointer" data-testid={`button-read-more-${post.id}`}>
                            Read More
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="hidden md:block aspect-video bg-muted overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                        data-testid={`image-post-${post.id}`}
                      />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16" data-testid="section-no-posts">
              <p className="text-xl text-muted-foreground mb-6">No posts found for this tag yet.</p>
              <Link href="/insights">
                <Button data-testid="button-back-to-all-posts">
                  Back to All Posts
                </Button>
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
