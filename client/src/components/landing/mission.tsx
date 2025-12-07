export function Mission() {
  return (
    <section
      className="py-16 md:py-24 bg-muted/30"
      data-testid="section-mission"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6">
          <div className="inline-block">
            <div className="w-1 h-12 bg-primary mx-auto mb-6"></div>
          </div>

          <blockquote className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground leading-relaxed" data-testid="mission-quote">
            "We're building a community where parents feel understood, supported, and connected. A place to share the ups and downs of raising children, and pass on quality items to families who need them."
          </blockquote>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto pt-4" data-testid="mission-description">
            Zero to Seventeen isn't just about buying and selling. It's a safe haven for mums and parents to connect with others who truly understand the joys and challenges of raising little ones, from Australia to the United States and beyond.
          </p>
        </div>
      </div>
    </section>
  );
}
