import { useQuery } from "@tanstack/react-query";
import { useRoute, Link } from "wouter";
import { Navigation } from "@/components/landing/navigation";
import { Footer } from "@/components/landing/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import type { BlogPost } from "@shared/schema";

export default function BlogPostPage() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug;

  const { data: post, isLoading, error } = useQuery<BlogPost>({
    queryKey: ["/api/blog", slug],
    queryFn: async () => {
      const response = await fetch(`/api/blog/${slug}`);
      if (!response.ok) {
        if (response.status === 404) throw new Error("Post not found");
        throw new Error("Failed to fetch blog post");
      }
      return response.json();
    },
    enabled: !!slug,
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog">
            <Button variant="ghost" className="mb-8" data-testid="button-back-to-blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Resources
            </Button>
          </Link>

          {isLoading ? (
            <div className="animate-pulse space-y-6">
              <div className="h-8 bg-muted rounded w-32"></div>
              <div className="h-12 bg-muted rounded"></div>
              <div className="h-64 bg-muted rounded"></div>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">Post Not Found</h2>
              <p className="text-muted-foreground mb-6">
                The blog post you're looking for doesn't exist.
              </p>
              <Link href="/blog">
                <Button>Browse All Posts</Button>
              </Link>
            </div>
          ) : post ? (
            <article data-testid="blog-post-article">
              <div className="mb-6">
                <Badge variant="secondary" className="mb-4" data-testid="blog-post-category">
                  {post.category}
                </Badge>
                <h1
                  className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground font-heading mb-4"
                  data-testid="blog-post-title"
                >
                  {post.title}
                </h1>
                <p
                  className="text-lg md:text-xl text-muted-foreground"
                  data-testid="blog-post-excerpt"
                >
                  {post.excerpt}
                </p>
              </div>

              <div
                className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-ul:text-foreground prose-ol:text-foreground"
                data-testid="blog-post-content"
              >
                {post.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                    return (
                      <h3 key={index} className="text-2xl font-bold font-heading mt-8 mb-4">
                        {paragraph.replace(/\*\*/g, '')}
                      </h3>
                    );
                  }
                  if (paragraph.match(/^\d+\./)) {
                    const items = paragraph.split(/\n(?=\d+\.)/);
                    return (
                      <ol key={index} className="list-decimal list-inside space-y-3 my-6">
                        {items.map((item, i) => (
                          <li key={i} className="pl-2">
                            {item.replace(/^\d+\.\s*/, '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}
                          </li>
                        ))}
                      </ol>
                    );
                  }
                  if (paragraph.startsWith('-')) {
                    const items = paragraph.split('\n-').map(item => item.trim()).filter(Boolean);
                    return (
                      <ul key={index} className="list-disc list-inside space-y-2 my-6">
                        {items.map((item, i) => (
                          <li key={i} className="pl-2">{item}</li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <p key={index} className="my-4 leading-relaxed">
                      {paragraph}
                    </p>
                  );
                })}
              </div>

              <div className="mt-12 pt-8 border-t">
                <Link href="/blog">
                  <Button variant="outline" data-testid="button-more-posts">
                    Read More Articles
                  </Button>
                </Link>
              </div>
            </article>
          ) : null}
        </div>
      </main>
      <Footer />
    </div>
  );
}
