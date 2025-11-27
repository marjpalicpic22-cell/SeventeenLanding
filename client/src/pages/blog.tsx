import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Calendar, User } from "lucide-react";

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<string | null>(null);

  const blogPosts = [
    {
      id: 1,
      title: "The Impact of Sustainable Choices",
      author: "Zero to Seventeen Team",
      date: "November 20, 2024",
      excerpt:
        "Discover how small daily choices can lead to significant environmental impact over time.",
      content: `Every action counts when it comes to environmental sustainability. Young people have the power to drive real change through conscious decision-making. From reducing plastic consumption to supporting eco-friendly brands, the choices we make today shape the world of tomorrow.

The Zero to Seventeen community has been making incredible strides in sustainable living. By combining education with action, we're creating a generation that understands the urgency of climate change and takes meaningful steps to address it.

Join us in learning more about how your choices matter and can inspire others around you.`,
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop",
    },
    {
      id: 2,
      title: "Youth Leadership in Climate Action",
      author: "Environmental Specialist",
      date: "November 15, 2024",
      excerpt:
        "How young leaders are pioneering innovative solutions to climate challenges.",
      content: `Youth leadership has become crucial in addressing global climate challenges. The Zero to Seventeen initiative empowers teenagers to take ownership of environmental issues and develop creative solutions.

From organizing community cleanups to advocating for renewable energy policies, young people are proving that age is no barrier to making a difference. The wisdom and innovation brought by this generation offers fresh perspectives on long-standing environmental problems.

This blog explores inspiring stories of youth-led environmental movements around the world.`,
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    },
    {
      id: 3,
      title: "Understanding Your Carbon Footprint",
      author: "Zero to Seventeen Team",
      date: "November 10, 2024",
      excerpt:
        "A beginner's guide to calculating and reducing your personal carbon footprint.",
      content: `Your carbon footprint is the total amount of greenhouse gases produced by your activities. Understanding it is the first step toward sustainability.

Common contributors to your carbon footprint include:
- Transportation (cars, flights, public transport)
- Home energy consumption (electricity, heating, water)
- Diet choices (especially meat and dairy)
- Shopping and consumption habits

By using our Environmental Calculator, you can get a personalized assessment of your impact and receive tailored recommendations for reduction. Small changes in daily habits can result in significant environmental benefits over time.`,
      image:
        "https://images.unsplash.com/photo-1497215842519-e21cc028cb29?w=600&h=400&fit=crop",
    },
  ];

  if (selectedPost) {
    const post = blogPosts.find((p) => p.id === parseInt(selectedPost));
    return (
      <div className="min-h-screen bg-background">
        <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link href="/blog">
              <Button variant="ghost" className="gap-2" data-testid="button-back">
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {post && (
            <article>
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-96 object-cover rounded-lg mb-8"
                data-testid="image-post-hero"
              />
              <h1 className="text-4xl font-bold mb-4" data-testid="text-post-title">
                {post.title}
              </h1>
              <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span data-testid="text-post-author">{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span data-testid="text-post-date">{post.date}</span>
                </div>
              </div>
              <div
                className="prose prose-sm dark:prose-invert max-w-none space-y-4 text-foreground"
                data-testid="text-post-content"
              >
                {post.content.split("\n\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </article>
          )}
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/">
            <Button variant="ghost" data-testid="button-home">
              ← Home
            </Button>
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4" data-testid="text-blog-title">
            Resource Blog
          </h1>
          <p className="text-lg text-muted-foreground" data-testid="text-blog-description">
            Stay informed with insights on sustainability, youth leadership, and
            environmental action.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="hover-elevate overflow-hidden cursor-pointer transition-all"
              onClick={() => setSelectedPost(post.id.toString())}
              data-testid={`card-blog-post-${post.id}`}
            >
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2
                  className="font-bold text-lg mb-2 line-clamp-2"
                  data-testid={`text-post-title-${post.id}`}
                >
                  {post.title}
                </h2>
                <p
                  className="text-sm text-muted-foreground mb-4 line-clamp-3"
                  data-testid={`text-post-excerpt-${post.id}`}
                >
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span data-testid={`text-post-author-${post.id}`}>
                    {post.author}
                  </span>
                  <span data-testid={`text-post-date-${post.id}`}>{post.date}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
