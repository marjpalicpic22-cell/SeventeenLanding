import { Leaf } from "lucide-react";
import storyImage from "@assets/stock_images/authentic_mother_wit_0da9ddc7.jpg";

export function OriginStory() {
  return (
    <section
      id="our-story"
      className="py-16 md:py-24 lg:py-32 bg-background"
      data-testid="section-origin-story"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6" data-testid="story-content">
            <div className="inline-flex items-center gap-2 text-primary">
              <Leaf className="w-6 h-6" data-testid="icon-leaf" />
              <span className="text-sm font-semibold uppercase tracking-wider">Our Story</span>
            </div>

            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground font-heading"
              data-testid="story-headline"
            >
              Where Our Story Begins
            </h2>

            <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p data-testid="story-paragraph-1">
                Zero to Seventeen started the same way so many family ideas begin — in the middle of real life.
              </p>

              <p data-testid="story-paragraph-2">
                Madelon was searching for a highchair for little Liliana. Something safe. Something affordable. Something that made sense for a baby who'd outgrow it in no time.
              </p>

              <p data-testid="story-paragraph-3">
                But every option came with frustration: overpriced new items, unreliable second-hand sellers, confusing listings, no-shows, and experiences that just didn't feel safe.
              </p>

              <p className="text-foreground font-medium italic" data-testid="story-quote">
                One afternoon, after yet another failed attempt, she said, "There has to be an easier way."
              </p>

              <p data-testid="story-paragraph-4">
                And that moment sparked everything. What started with one highchair has grown into a movement built around connection, kindness, and shared values.
              </p>
            </div>
          </div>

          <div className="relative" data-testid="story-image-container">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
            <img
              src={storyImage}
              alt="Mother with child representing the Zero to Seventeen story"
              className="relative rounded-2xl shadow-xl w-full h-auto object-cover"
              loading="lazy"
              data-testid="story-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
