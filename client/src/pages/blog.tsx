import { useState } from "react";
import { Link } from "wouter";
import { Navigation } from "@/components/landing/navigation";
import { Footer } from "@/components/landing/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, ChevronUp, Heart, MessageCircle } from "lucide-react";
import blogImage from "@assets/stz_blogs_1773214194233.png";
import blogImage2 from "@assets/stz_blogs_(1)_1773216300240.png";
import blogImage3 from "@assets/stz_blogs_(2)_1773216772265.png";
import schoolImage from "@assets/stock_images/mother_helping_child_3290cfd8.jpg";
import pregnantImage from "@assets/stock_images/pregnant_woman_plann_2a6c6d7b.jpg";

type SeoBlogPost = {
  type: "seo";
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  tags: string[];
};

type CommunityPost = {
  type: "community";
  id: number;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
  likes: number;
  comments: number;
  tags: string[];
};

type BlogPost = SeoBlogPost | CommunityPost;

const allPosts: BlogPost[] = [
  {
    type: "seo",
    id: 1,
    slug: "declutter-kids-items",
    title: "The Fastest Way to Declutter Kids Stuff Without the Guilt or the Waste",
    excerpt: "Learn how Melbourne parents clear clutter, save money on kids costs, and use a secondhand marketplace to give items a second life.",
    image: blogImage,
    date: "March 2026",
    readTime: "5 min read",
    tags: ["Decluttering", "Kids Items", "Secondhand"],
  },
  {
    type: "seo",
    id: 2,
    slug: "secondhand-kids-marketplace-melbourne",
    title: "Melbourne Parents Are Quietly Using This Secondhand Kids' Marketplace to Stop Overpaying",
    excerpt: "Explore Zero2Seventeen, a secondhand kids' marketplace Melbourne parents use to save money on kids costs, buy kids toys secondhand, and enjoy eco friendly kids shopping locally.",
    image: blogImage2,
    date: "March 2026",
    readTime: "4 min read",
    tags: ["Secondhand", "Save Money", "Eco-Friendly"],
  },
  {
    type: "seo",
    id: 3,
    slug: "save-money-kids-stuff",
    title: "Saving Money on Kids Stuff Is Easy When You Stop Buying New Every Time",
    excerpt: "Save money kids costs with Zero2Seventeen, a secondhand kids' marketplace Melbourne families use to buy kids toys secondhand, shop eco friendly kids items, and support local parents.",
    image: blogImage3,
    date: "March 2026",
    readTime: "5 min read",
    tags: ["Save Money", "Secondhand", "Family"],
  },
  {
    type: "community",
    id: 101,
    title: "Tips for First-Time Mums",
    author: "Sarah M.",
    date: "November 25, 2024",
    excerpt: "Essential tips that helped me navigate the first months of motherhood with confidence and less stress.",
    content: `Being a first-time mum is overwhelming, but you're not alone! Here are the tips that transformed my early days:

Accept Help: Don't be shy about asking family and friends for support. Whether it's meal prep, laundry, or just holding the baby while you shower, it all counts.

Sleep When Baby Sleeps: This isn't just advice, it's survival. Rest is crucial for your mental and physical health during this demanding time.

Join a Mum Community: Connect with other mums, whether online or in person. Sharing experiences and knowing others are going through the same challenges is incredibly reassuring.

Trust Your Instincts: You know your baby better than anyone. Don't second-guess yourself constantly. Your gut feeling is usually right.

Be Gentle With Yourself: You won't be perfect. That's not just okay, it's normal. Focus on being present and doing your best.

Invest in Good Basics: Quality basics like feeding bottles, napkins, and comfortable clothes make a huge difference. This is where second-hand gems come in handy!

Document the Moments: Take lots of photos and videos. Time flies, and these memories become priceless.

Remember, every mum's journey is unique. What works for one might not work for another, and that's perfectly fine.`,
    image: "https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=600&h=400&fit=crop",
    likes: 234,
    comments: 45,
    tags: ["Mum Stories"],
  },
  {
    type: "community",
    id: 102,
    title: "Parenting Pre-Teens: What I Wish I Knew",
    author: "Emma K.",
    date: "November 20, 2024",
    excerpt: "Navigating the 8-12 age group is unique. Here's what I learned about keeping communication open and maintaining connection.",
    content: `My kids are now 9 and 11, and I've discovered that parenting pre-teens is a completely different ballgame than toddler years.

Communication is Everything: Pre-teens are developing their own opinions and want to be heard. Instead of just telling them what to do, I've learned to have conversations with them about decisions.

Let Them Have Opinions: Yes, they might disagree with you. That's not defiance, it's healthy development. Listen to their perspective even if you ultimately make the final call.

Balance Independence and Boundaries: This age group craves more freedom, but they still need clear boundaries. Finding this balance has been key to keeping them safe while letting them grow.

Stay Involved in Their Interests: Whether it's soccer, art, gaming, or books, showing genuine interest in what they love helps keep communication open.

Model the Behavior You Want: If you want respect, give respect. If you want honesty, be honest with them about your own challenges (age-appropriately).

Quality Over Quantity: Busy schedules are real, but those 15-minute conversations in the car matter more than you think.

Second-Hand Shopping Together: We've made browsing the app together a fun activity. The kids get to pick out clothes and items they like, and it's teaching them about sustainability and value.

This stage goes by quickly. Enjoy it.`,
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop",
    likes: 189,
    comments: 32,
    tags: ["Mum Stories"],
  },
  {
    type: "community",
    id: 103,
    title: "Budget-Friendly Back-to-School Shopping",
    author: "Jessica P.",
    date: "November 15, 2024",
    excerpt: "How I saved 60% on school supplies and clothes by shopping smart and using second-hand options.",
    content: `Back-to-school season doesn't have to break the bank. Here's my strategy for getting everything the kids need without overspending:

Start with What You Have: Before buying anything new, take inventory. Kids often have clothes that fit well or supplies they haven't used.

Shop Second-Hand First: Quality school uniforms, sports equipment, and structured clothing items are perfect for buying second-hand. They're built to last and kids grow out of them anyway.

Mix New and Second-Hand: Some things like underwear and socks should be new, but most items can be second-hand with no issues.

Buy Strategic Items: Shoes and bags that take a beating should be new. But jackets, jumpers, and structured pieces? Great from the second-hand market.

Group Buys: Connect with other mums in your community to buy in bulk for things like art supplies. The savings add up!

Teach the Kids: My children now understand the value of things. They're excited to "find" items on the app and feel part of the shopping process.

The Best Part: Everything works out better for the planet too. Win-win!

This year we spent half what we normally would and the kids have more options to choose from.`,
    image: schoolImage,
    likes: 342,
    comments: 67,
    tags: ["Mum Stories"],
  },
  {
    type: "community",
    id: 104,
    title: "Pregnant and Planning: My Nesting Strategy",
    author: "Lisa T.",
    date: "November 10, 2024",
    excerpt: "Smart preparation tips for expectant mums preparing for baby's arrival without the overwhelm.",
    content: `With my third baby on the way, I've learned that smart preparation beats last-minute panic buying.

Build Your Core Collection: You don't need everything. Focus on quality basics first — 7-10 bodysuits, 7-10 sleepsuits, 5-7 pairs of socks, 3-4 pairs of pants, and 2-3 cardigans or jumpers.

Go Second-Hand for Some Items: Bassinets, change tables, and larger items are perfect second-hand purchases. Babies use them briefly, so durability and aesthetics don't need to be perfect.

Test Before You Commit: Try different feeding bottles, nipple types, and cardigans before buying in bulk. Every baby is different!

Join Community Groups: Connect with other expecting mums. We share recommendations, swap items, and support each other through the journey.

Stock Sensibly: Get the essentials early, but remember babies change sizes quickly. Don't stockpile sizes they haven't reached yet.

Embrace What You Have: Hand-me-downs from friends and family are treasures. Quality items last through multiple children.

Stay Flexible: Your plan will change, and that's okay. The best preparation is having a supportive community.

I'm so grateful for resources like this app that make preparation easier and more affordable.`,
    image: pregnantImage,
    likes: 156,
    comments: 28,
    tags: ["Mum Stories"],
  },
];

export default function Blog() {
  const [expandedPost, setExpandedPost] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedPost(expandedPost === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground font-heading mb-6" data-testid="text-blog-title">
              Blog
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-blog-description">
              Tips, guides, and stories from our community about parenting, decluttering, and making the most of second-hand shopping.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8" data-testid="section-blog-posts">
            {allPosts.map((post) => {
              if (post.type === "seo") {
                return (
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
                          <Link href={`/blog/${post.slug}`}>
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
                          <Link href={`/blog/${post.slug}`}>
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
                );
              }

              const isExpanded = expandedPost === post.id;
              return (
                <Card
                  key={post.id}
                  className="overflow-hidden hover-elevate transition-all"
                  data-testid={`card-community-post-${post.id}`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                    <div className="md:col-span-2 p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-block px-2 py-1 bg-accent/20 text-accent-foreground text-xs font-medium rounded"
                              data-testid={`tag-${tag.toLowerCase().replace(/\s+/g, "-")}`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2" data-testid={`text-post-title-${post.id}`}>
                          {post.title}
                        </h2>
                        <p className="text-sm text-muted-foreground mb-4">
                          By {post.author} · {post.date}
                        </p>
                        <p className="text-muted-foreground text-lg mb-4" data-testid={`text-post-excerpt-${post.id}`}>
                          {post.excerpt}
                        </p>
                        {isExpanded && (
                          <div className="mt-4 space-y-3 text-foreground/80 leading-relaxed border-t border-border pt-4" data-testid={`text-post-content-${post.id}`}>
                            {post.content.split("\n\n").map((para, i) => (
                              <p key={i}>{para}</p>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Heart className="w-3.5 h-3.5" />
                            {post.likes}
                          </span>
                          <span className="flex items-center gap-1">
                            <MessageCircle className="w-3.5 h-3.5" />
                            {post.comments}
                          </span>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="gap-2 text-primary font-medium"
                          onClick={() => toggleExpand(post.id)}
                          data-testid={`button-expand-${post.id}`}
                        >
                          {isExpanded ? (
                            <>Read Less <ChevronUp className="w-4 h-4" /></>
                          ) : (
                            <>Read More <ChevronDown className="w-4 h-4" /></>
                          )}
                        </Button>
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
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
