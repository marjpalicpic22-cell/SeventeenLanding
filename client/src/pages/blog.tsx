import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/landing/navigation";
import { Footer } from "@/components/landing/footer";
import { ArrowRight, BookOpen } from "lucide-react";
import type { BlogPost } from "@shared/schema";

export default function Blog() {
  const { data: posts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog"],
    queryFn: async () => {
      const response = await fetch("/api/blog");
      if (!response.ok) throw new Error("Failed to fetch blog posts");
      return response.json();
    },
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <div className="flex items-center justify-center gap-2 text-primary mb-4">
              <BookOpen className="w-6 h-6" />
              <span className="text-sm font-semibold uppercase tracking-wider">Resources</span>
            </div>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground font-heading mb-4"
              data-testid="blog-headline"
            >
              Tips & Resources
            </h1>
            <p
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
              data-testid="blog-description"
            >
              Guides for parents on sustainability, safety, and making the most of second-hand items
            </p>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="p-6 space-y-4">
                  <div className="animate-pulse space-y-3">
                    <div className="h-4 bg-muted rounded w-20"></div>
                    <div className="h-6 bg-muted rounded"></div>
                    <div className="h-20 bg-muted rounded"></div>
                  </div>
                </Card>
              ))}
            </div>
          ) : posts && posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" data-testid="blog-posts-grid">
              {posts.map((post, index) => (
                <Card
                  key={post.id}
                  className="p-6 md:p-8 space-y-4 hover-elevate"
                  data-testid={`blog-post-card-${index}`}
                >
                  <div className="space-y-3">
                    <Badge variant="secondary" data-testid={`blog-category-${index}`}>
                      {post.category}
                    </Badge>

                    <h3
                      className="text-xl md:text-2xl font-bold text-foreground font-heading line-clamp-2"
                      data-testid={`blog-title-${index}`}
                    >
                      {post.title}
                    </h3>

                    <p
                      className="text-base text-muted-foreground line-clamp-3"
                      data-testid={`blog-excerpt-${index}`}
                    >
                      {post.excerpt}
                    </p>
                  </div>

                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="ghost" className="w-full justify-between group" data-testid={`button-read-more-${index}`}>
                      Read More
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No blog posts available yet.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
