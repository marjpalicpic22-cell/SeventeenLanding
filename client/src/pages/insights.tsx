import { Link } from "wouter";
import { Navigation } from "@/components/landing/navigation";
import { Footer } from "@/components/landing/footer";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import blogImage from "@assets/stz_blogs_1773214194233.png";

export default function Insights() {
  const blogPosts = [
    {
      id: 1,
      slug: "declutter-kids-items",
      title: "The Fastest Way to Declutter Kids Stuff Without the Guilt or the Waste",
      excerpt: "Learn how Melbourne parents clear clutter, save money on kids costs, and use a secondhand marketplace to give items a second life.",
      image: blogImage,
      date: "March 2026",
      readTime: "5 min read",
      tags: ["Decluttering", "Kids Items", "Secondhand"],
    },
  ];

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

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 gap-8" data-testid="section-blog-posts">
            {blogPosts.map((post) => (
              <Card
                key={post.id}
                className="overflow-hidden hover-elevate transition-all cursor-pointer"
                data-testid={`card-blog-post-${post.id}`}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                  <div className="md:col-span-2 p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded"
                            data-testid={`tag-${tag.toLowerCase().replace(/\s+/g, "-")}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link href={`/insights/${post.slug}`}>
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 hover:text-primary transition-colors" data-testid={`text-post-title-${post.id}`}>
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
                        <div className="flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all" data-testid={`button-read-more-${post.id}`}>
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
        </div>
      </main>

      <Footer />
    </div>
  );
}
