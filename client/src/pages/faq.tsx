import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import { Footer } from "@/components/landing/footer";

const faqSections = [
  {
    title: "General Questions",
    questions: [
      {
        q: "What is Zero 2 Seventeen?",
        a: "Zero 2 Seventeen is Australia's trusted marketplace app where parents buy, sell, donate, and recycle quality kids items within their local community. Unlike generic marketplaces, Zero 2 Seventeen is built specifically for families who want a safer, more trusted way to pass on children's items from baby gear to teenage clothing.",
      },
      {
        q: "Where can I sell my baby's old clothes in Melbourne?",
        a: "You can sell your baby's old clothes on Zero 2 Seventeen, a local marketplace app designed for Melbourne parents. Simply download the app, create a listing with photos, and connect with local mums and families looking for quality second-hand kids clothes. It's free to list and you can arrange local pickup in your suburb.",
      },
      {
        q: "What's the safest app for buying second-hand kids stuff in Australia?",
        a: "Zero 2 Seventeen is designed to be the safest marketplace for buying second-hand kids items in Australia. The app is community-powered, meaning you're buying from other local parents who understand the importance of quality and safety when it comes to children's products. The platform focuses exclusively on kids items, so you're dealing with families, not anonymous sellers.",
      },
      {
        q: "Is there an alternative to Facebook Marketplace for selling baby items?",
        a: "Yes! Zero 2 Seventeen is a dedicated alternative to Facebook Marketplace specifically for parents selling baby and kids items. Unlike Facebook Marketplace where your listings compete with furniture, cars, and everything else, Zero 2 Seventeen focuses only on children's products. This means your baby clothes, prams, toys, and gear are seen by parents who are actually looking for those items.",
      },
      {
        q: "How do I find local mums selling baby gear near me?",
        a: "Download the Zero 2 Seventeen app and browse listings from local parents in your area. The app shows you baby gear, prams, cots, toys, and clothing from families in your suburb and nearby areas. You can search by category, brand, or keyword to find exactly what you need from mums in your local community.",
      },
    ],
  },
  {
    title: "Buying on Zero to Seventeen",
    questions: [
      {
        q: "What can I buy on Zero 2 Seventeen?",
        a: "You can buy quality second-hand children's items including baby clothes, kids clothing (ages 0-17), prams and strollers, cots and nursery furniture, toys and games, baby carriers, car seats, school supplies, sporting equipment, and maternity wear. Everything on the platform is focused on kids and families.",
      },
      {
        q: "Is it safe to buy second-hand baby items online?",
        a: "Buying second-hand baby items can be safe when you use a trusted platform like Zero 2 Seventeen. The app connects you with local parents in your community, so you can ask questions, see more photos, and arrange to inspect items before purchasing. Always check items like car seats and cots meet current Australian safety standards.",
      },
      {
        q: "How much can I save buying second-hand kids items?",
        a: "Parents typically save 50-80% buying quality second-hand kids items compared to retail prices. Children outgrow clothes and toys quickly, so many items are barely used. On Zero 2 Seventeen, you'll find gently used branded items, sometimes still with tags, at a fraction of the original price.",
      },
    ],
  },
  {
    title: "Selling on Zero to Seventeen",
    questions: [
      {
        q: "How do I sell baby items on Zero 2 Seventeen?",
        a: "Selling on Zero 2 Seventeen is simple. Download the app, create a free account, take photos of your items, add a description and price, then publish your listing. Local parents will see your items and can message you directly. You arrange pickup or delivery that works for both of you.",
      },
      {
        q: "Is it free to list items on Zero 2 Seventeen?",
        a: "Yes, listing items on Zero 2 Seventeen is free. There are no listing fees or commissions. Simply download the app, create your listing, and start selling to local families in your community.",
      },
      {
        q: "What sells best on Zero 2 Seventeen?",
        a: "Popular items include prams and strollers, baby carriers, quality branded clothing, toys and games, nursery furniture, and bundles of kids clothes by size. Items from popular brands and well-photographed listings tend to sell faster. Bundles (like 'size 0 winter bundle') are particularly popular with parents.",
      },
      {
        q: "How do I price second-hand kids items?",
        a: "A good rule is to price items at 30-50% of the original retail price depending on condition. Brand name items in excellent condition can go higher. Check similar listings on Zero 2 Seventeen to see what other parents are charging. Be honest about wear and include clear photos.",
      },
    ],
  },
  {
    title: "Local Community",
    questions: [
      {
        q: "Is Zero 2 Seventeen available in Melbourne?",
        a: "Yes! Zero 2 Seventeen is available throughout Melbourne and Victoria. The app connects you with local parents in your suburb and surrounding areas. Whether you're in Cranbourne, the CBD, or outer suburbs, you can buy and sell kids items locally.",
      },
      {
        q: "Where can I find second-hand baby stuff in Cranbourne?",
        a: "Cranbourne parents use Zero 2 Seventeen to buy and sell second-hand baby items locally. The app shows you listings from other Cranbourne mums and families in nearby suburbs like Narre Warren, Berwick, and Clyde. Download the app to see what's available in your area.",
      },
      {
        q: "Does Zero 2 Seventeen work in the USA?",
        a: "Yes, Zero 2 Seventeen is expanding to the United States. The app connects local families wherever they are, making it easy for American parents to buy and sell quality kids items within their communities.",
      },
    ],
  },
  {
    title: "Donating and Sustainability",
    questions: [
      {
        q: "Can I donate kids items on Zero 2 Seventeen?",
        a: "Yes! Zero 2 Seventeen supports donating items to families who need them. You can list items as free or donate directly to families in your community. The app promotes conscious consumption and helps reduce waste by keeping quality kids items in use rather than going to landfill.",
      },
      {
        q: "How does Zero 2 Seventeen help the environment?",
        a: "Zero 2 Seventeen promotes sustainable parenting by encouraging families to buy and sell second-hand instead of always buying new. Children outgrow items quickly, and keeping quality kids clothes, toys, and gear in circulation reduces waste and the environmental impact of producing new items. It's better for your wallet and the planet.",
      },
    ],
  },
  {
    title: "Comparisons",
    questions: [
      {
        q: "Zero 2 Seventeen vs Facebook Marketplace: Which is better for baby items?",
        a: "Zero 2 Seventeen is purpose-built for parents selling baby and kids items, while Facebook Marketplace is a general marketplace for everything. On Zero 2 Seventeen, every listing is kids-related, every buyer is a parent, and the community understands what families need. Your baby clothes won't compete with used furniture or car listings.",
      },
      {
        q: "Is Zero 2 Seventeen better than Gumtree for selling kids stuff?",
        a: "If you're selling kids items specifically, Zero 2 Seventeen offers a more targeted audience than Gumtree. While Gumtree has everything from jobs to cars to furniture, Zero 2 Seventeen focuses only on children's products. This means more relevant buyers and a community of parents who understand the value of quality kids items.",
      },
    ],
  },
];

function AccordionItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-border rounded-lg overflow-hidden" data-testid="faq-item">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-6 py-4 text-left bg-card hover:bg-muted/50 transition-colors duration-200"
        aria-expanded={isOpen}
        data-testid="faq-question-button"
      >
        <span className="text-base font-medium text-foreground pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-background border-t border-border" data-testid="faq-answer">
          <p className="text-muted-foreground leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-4xl mx-auto px-4 pt-32 pb-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4" data-testid="faq-title">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="faq-subtitle">
            Everything you need to know about buying and selling kids items on Zero 2 Seventeen
          </p>
        </div>

        <div className="space-y-12">
          {faqSections.map((section) => (
            <div key={section.title} data-testid={`faq-section-${section.title.toLowerCase().replace(/\s+/g, "-")}`}>
              <h2 className="text-2xl font-semibold mb-6 text-foreground border-b border-border pb-3">
                {section.title}
              </h2>
              <div className="space-y-3">
                {section.questions.map((item) => (
                  <AccordionItem key={item.q} question={item.q} answer={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center p-8 bg-card rounded-xl border border-border">
          <h2 className="text-2xl font-semibold mb-3">Still have questions?</h2>
          <p className="text-muted-foreground mb-6">
            Our team is happy to help. Reach out and we'll get back to you as soon as possible.
          </p>
          <a
            href="mailto:support@zero2seventeen.com"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors cursor-pointer"
            data-testid="link-faq-contact"
          >
            Contact Support
          </a>
          <p className="mt-4 text-sm text-muted-foreground">
            Or email us directly at{" "}
            <a
              href="mailto:support@zero2seventeen.com"
              className="text-primary hover:underline cursor-pointer"
              data-testid="link-faq-email"
            >
              support@zero2seventeen.com
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
