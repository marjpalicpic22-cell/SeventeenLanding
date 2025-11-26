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
            "Our mission is to build a global circular economy for children's items — one that keeps good things in use, lightens the load on families, and protects the world our children will inherit."
          </blockquote>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto pt-4" data-testid="mission-description">
            We want every family, everywhere, to have access to quality items without financial strain, without waste, and without difficulty.
          </p>
        </div>
      </div>
    </section>
  );
}
