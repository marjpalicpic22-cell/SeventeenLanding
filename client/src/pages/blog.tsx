import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Heart, MessageCircle, Share2 } from "lucide-react";
import schoolImage from "@assets/stock_images/mother_helping_child_3290cfd8.jpg";
import pregnantImage from "@assets/stock_images/pregnant_woman_plann_2a6c6d7b.jpg";

export default function Community() {
  const [selectedPost, setSelectedPost] = useState<string | null>(null);

  const communityPosts = [
    {
      id: 1,
      title: "Tips for First-Time Mums",
      author: "Sarah M.",
      date: "November 25, 2024",
      excerpt:
        "Essential tips that helped me navigate the first months of motherhood with confidence and less stress.",
      content: `Being a first-time mum is overwhelming, but you're not alone! Here are the tips that transformed my early days:

1. **Accept Help**: Don't be shy about asking family and friends for support. Whether it's meal prep, laundry, or just holding the baby while you shower, it all counts.

2. **Sleep When Baby Sleeps**: This isn't just advice, it's survival. Rest is crucial for your mental and physical health during this demanding time.

3. **Join a Mom Community**: Connect with other mums, whether online or in person. Sharing experiences and knowing others are going through the same challenges is incredibly reassuring.

4. **Trust Your Instincts**: You know your baby better than anyone. Don't second-guess yourself constantly. Your gut feeling is usually right.

5. **Be Gentle With Yourself**: You won't be perfect. That's not just okay, it's normal. Focus on being present and doing your best.

6. **Invest in Good Basics**: Quality basics like feeding bottles, napkins, and comfortable clothes make a huge difference. This is where second-hand gems come in handy!

7. **Document the Moments**: Take lots of photos and videos. Time flies, and these memories become priceless.

Remember, every mum's journey is unique. What works for one might not work for another, and that's perfectly fine.`,
      image:
        "https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=600&h=400&fit=crop",
      likes: 234,
      comments: 45,
    },
    {
      id: 2,
      title: "Parenting Pre-Teens: What I Wish I Knew",
      author: "Emma K.",
      date: "November 20, 2024",
      excerpt:
        "Navigating the 8-12 age group is unique. Here's what I learned about keeping communication open and maintaining connection.",
      content: `My kids are now 9 and 11, and I've discovered that parenting pre-teens is a completely different ballgame than toddler years.

**Communication is Everything**: Pre-teens are developing their own opinions and want to be heard. Instead of just telling them what to do, I've learned to have conversations with them about decisions.

**Let Them Have Opinions**: Yes, they might disagree with you. That's not defiance, it's healthy development. Listen to their perspective even if you ultimately make the final call.

**Balance Independence and Boundaries**: This age group craves more freedom, but they still need clear boundaries. Finding this balance has been key to keeping them safe while letting them grow.

**Stay Involved in Their Interests**: Whether it's soccer, art, gaming, or books, showing genuine interest in what they love helps keep communication open.

**Model the Behavior You Want**: If you want respect, give respect. If you want honesty, be honest with them about your own challenges (age-appropriately).

**Quality Over Quantity**: Busy schedules are real, but those 15-minute conversations in the car matter more than you think.

**Second-Hand Shopping Together**: We've made browsing the app together a fun activity. The kids get to pick out clothes and items they like, and it's teaching them about sustainability and value.

This stage goes by quickly. Enjoy it.`,
      image:
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop",
      likes: 189,
      comments: 32,
    },
    {
      id: 3,
      title: "Budget-Friendly Back-to-School Shopping",
      author: "Jessica P.",
      date: "November 15, 2024",
      excerpt:
        "How I saved 60% on school supplies and clothes by shopping smart and using second-hand options.",
      content: `Back-to-school season doesn't have to break the bank. Here's my strategy for getting everything the kids need without overspending:

**Start with What You Have**: Before buying anything new, take inventory. Kids often have clothes that fit well or supplies they haven't used.

**Shop Second-Hand First**: Quality school uniforms, sports equipment, and structured clothing items are perfect for buying second-hand. They're built to last and kids grow out of them anyway.

**Mix New and Second-Hand**: Some things like underwear and socks should be new, but most items can be second-hand with no issues.

**Buy Strategic Items**: Shoes and bags that take a beating should be new. But jackets, jumpers, and structured pieces? Great from the second-hand market.

**Group Buys**: Connect with other mums in your community to buy in bulk for things like art supplies. The savings add up!

**Teach the Kids**: My children now understand the value of things. They're excited to "find" items on the app and feel part of the shopping process.

**The Best Part**: Everything works out better for the planet too. Win-win!

This year we spent half what we normally would and the kids have more options to choose from.`,
      image: schoolImage,
      likes: 342,
      comments: 67,
    },
    {
      id: 4,
      title: "Pregnant and Planning: My Nesting Strategy",
      author: "Lisa T.",
      date: "November 10, 2024",
      excerpt:
        "Smart preparation tips for expectant mums preparing for baby's arrival without the overwhelm.",
      content: `With my third baby on the way, I've learned that smart preparation beats last-minute panic buying.

**Build Your Core Collection**: You don't need everything. Focus on quality basics first:
- 7-10 bodysuits (mix of sizes)
- 7-10 sleepsuits
- 5-7 pairs of socks
- 3-4 pairs of pants
- 2-3 cardigans or jumpers

**Go Second-Hand for Some Items**: Bassinets, change tables, and larger items are perfect second-hand purchases. Babies use them briefly, so durability and aesthetics don't need to be perfect.

**Test Before You Commit**: Try different feeding bottles, nipple types, and cardigans before buying in bulk. Every baby is different!

**Join Community Groups**: Connect with other expecting mums. We share recommendations, swap items, and support each other through the journey.

**Stock Sensibly**: Get the essentials early, but remember babies change sizes quickly. Don't stockpile sizes they haven't reached yet.

**Embrace What You Have**: Hand-me-downs from friends and family are treasures. Quality items last through multiple children.

**Stay Flexible**: Your plan will change, and that's okay. The best preparation is having a supportive community.

I'm so grateful for resources like this app that make preparation easier and more affordable.`,
      image: pregnantImage,
      likes: 156,
      comments: 28,
    },
  ];

  if (selectedPost) {
    const post = communityPosts.find((p) => p.id === parseInt(selectedPost));
    return (
      <div className="min-h-screen bg-background">
        <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link href="/community">
              <Button variant="ghost" className="gap-2" data-testid="button-back">
                <ArrowLeft className="w-4 h-4" />
                Back to Community
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
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-xs font-bold" data-testid="avatar-initials">
                      {post.author.split(" ")[0][0]}
                    </span>
                  </div>
                  <span data-testid="text-post-author">{post.author}</span>
                </div>
                <span data-testid="text-post-date">{post.date}</span>
              </div>
              <div
                className="prose prose-sm dark:prose-invert max-w-none space-y-4 text-foreground mb-8"
                data-testid="text-post-content"
              >
                {post.content.split("\n\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
              <div className="flex gap-4 border-t border-border pt-6">
                <Button variant="ghost" className="gap-2" data-testid="button-like">
                  <Heart className="w-4 h-4" />
                  {post.likes}
                </Button>
                <Button variant="ghost" className="gap-2" data-testid="button-comment">
                  <MessageCircle className="w-4 h-4" />
                  {post.comments}
                </Button>
                <Button variant="ghost" className="gap-2" data-testid="button-share">
                  <Share2 className="w-4 h-4" />
                  Share
                </Button>
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
          <h1 className="text-4xl font-bold mb-4" data-testid="text-community-title">
            Mum's Community
          </h1>
          <p className="text-lg text-muted-foreground" data-testid="text-community-description">
            Share your tips, insights, and experiences with other mums. From first-time parenting to navigating pre-teens, find support and wisdom from our community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {communityPosts.map((post) => (
            <Card
              key={post.id}
              className="hover-elevate overflow-hidden cursor-pointer transition-all"
              onClick={() => setSelectedPost(post.id.toString())}
              data-testid={`card-community-post-${post.id}`}
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
                  className="text-sm text-muted-foreground mb-4 line-clamp-2"
                  data-testid={`text-post-excerpt-${post.id}`}
                >
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-xs font-bold">
                        {post.author.split(" ")[0][0]}
                      </span>
                    </div>
                    <div className="text-xs">
                      <div className="font-medium" data-testid={`text-post-author-${post.id}`}>
                        {post.author}
                      </div>
                      <div className="text-muted-foreground" data-testid={`text-post-date-${post.id}`}>
                        {post.date}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3 h-3" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3 h-3" />
                    {post.comments}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
