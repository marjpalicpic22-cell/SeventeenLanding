import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function DidYouKnow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const facts = [
    {
      id: 1,
      title: "Extend Kids' Item Lifespan",
      content:
        "Buying secondhand children's items can extend their lifespan by 2-3 times, reducing waste and environmental impact significantly.",
      icon: "♻️",
    },
    {
      id: 2,
      title: "Cost Savings Add Up",
      content:
        "Australian families can save up to $2,000 per year by buying secondhand children's clothing and toys instead of new.",
      icon: "💰",
    },
    {
      id: 3,
      title: "Manufacturing Impact",
      content:
        "Producing a new children's toy uses approximately 10 times more water than buying it secondhand from your community.",
      icon: "💧",
    },
    {
      id: 4,
      title: "Support Local Communities",
      content:
        "When you buy secondhand, your money stays in the local community and helps other families while reducing landfill waste.",
      icon: "🤝",
    },
    {
      id: 5,
      title: "Quality Over New",
      content:
        "Many secondhand items are of higher quality and durability than new budget alternatives, offering better value for your family.",
      icon: "⭐",
    },
    {
      id: 6,
      title: "Parenting Tip: Rotation Strategy",
      content:
        "Rotate your child's toys every 2-3 weeks. They'll find old toys 'new' again, reducing the need to buy more and keeping them engaged!",
      icon: "🎯",
    },
    {
      id: 7,
      title: "Sustainable Mindset",
      content:
        "Teaching kids about secondhand shopping builds sustainable habits early. They learn that pre-loved items have value and longevity.",
      icon: "🌱",
    },
    {
      id: 8,
      title: "Community Connection",
      content:
        "Buying and selling within your community creates connections with other families, building support networks for Australian mums.",
      icon: "👥",
    },
  ];

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % facts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, facts.length]);

  const goToPrevious = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => (prev - 1 + facts.length) % facts.length);
  };

  const goToNext = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % facts.length);
  };

  const goToSlide = (index: number) => {
    setAutoPlay(false);
    setCurrentIndex(index);
  };

  return (
    <section
      className="py-16 md:py-24 lg:py-32 bg-muted/50"
      data-testid="section-did-you-know"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Lightbulb className="w-6 h-6 text-primary" data-testid="icon-lightbulb" />
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground font-heading"
              data-testid="headline-did-you-know"
            >
              Did You Know?
            </h2>
          </div>
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            data-testid="description-facts"
          >
            Fun facts about sustainable shopping and parenting tips to inspire
            your journey
          </p>
        </div>

        <div className="relative" data-testid="carousel-facts">
          <div className="h-64 md:h-56 flex items-center">
            <Card
              className="w-full p-8 md:p-12 text-center"
              data-testid={`card-fact-${facts[currentIndex].id}`}
            >
              <div className="text-5xl mb-6" data-testid={`icon-fact-${currentIndex}`}>
                {facts[currentIndex].icon}
              </div>
              <h3
                className="text-2xl md:text-3xl font-semibold text-foreground mb-4"
                data-testid={`title-fact-${currentIndex}`}
              >
                {facts[currentIndex].title}
              </h3>
              <p
                className="text-lg text-muted-foreground"
                data-testid={`content-fact-${currentIndex}`}
              >
                {facts[currentIndex].content}
              </p>
            </Card>
          </div>

          <div className="flex items-center justify-between mt-8 gap-4">
            <Button
              size="icon"
              variant="outline"
              onClick={goToPrevious}
              className="hover-elevate"
              data-testid="button-prev-fact"
              aria-label="Previous fact"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <div
              className="flex gap-2 justify-center flex-wrap"
              data-testid="carousel-indicators"
            >
              {facts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-8 bg-primary"
                      : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60"
                  }`}
                  data-testid={`indicator-${index}`}
                  aria-label={`Go to fact ${index + 1}`}
                />
              ))}
            </div>

            <Button
              size="icon"
              variant="outline"
              onClick={goToNext}
              className="hover-elevate"
              data-testid="button-next-fact"
              aria-label="Next fact"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="text-center mt-6 text-sm text-muted-foreground">
            <p data-testid="text-counter">
              {currentIndex + 1} of {facts.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
