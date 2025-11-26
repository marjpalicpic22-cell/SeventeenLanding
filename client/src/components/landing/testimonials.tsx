import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import type { Testimonial } from "@shared/schema";

export function Testimonials() {
  const { data: testimonials, isLoading } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
    queryFn: async () => {
      const response = await fetch("/api/testimonials?featured=true");
      if (!response.ok) throw new Error("Failed to fetch testimonials");
      return response.json();
    },
  });

  if (isLoading) {
    return (
      <section
        id="testimonials"
        className="py-16 md:py-24 lg:py-32 bg-background"
        data-testid="section-testimonials"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground font-heading mb-4">
              What Families Say
            </h2>
            <div className="animate-pulse h-6 bg-muted rounded max-w-2xl mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section
      id="testimonials"
      className="py-16 md:py-24 lg:py-32 bg-background"
      data-testid="section-testimonials"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground font-heading mb-4"
            data-testid="testimonials-headline"
          >
            What Families Say
          </h2>
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            data-testid="testimonials-description"
          >
            Real stories from families making a difference together
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="p-6 md:p-8 space-y-4 hover-elevate"
              data-testid={`testimonial-card-${index}`}
            >
              <Quote className="w-8 h-8 text-primary/30" data-testid={`testimonial-quote-icon-${index}`} />

              <p
                className="text-base text-foreground leading-relaxed"
                data-testid={`testimonial-quote-${index}`}
              >
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-3 pt-4">
                <Avatar data-testid={`testimonial-avatar-${index}`}>
                  <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                    {testimonial.name.split(" ").map(n => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>

                <div>
                  <p className="font-semibold text-foreground" data-testid={`testimonial-name-${index}`}>
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground" data-testid={`testimonial-location-${index}`}>
                    {testimonial.location}
                  </p>
                  {testimonial.itemType && (
                    <p className="text-xs text-primary font-medium mt-1" data-testid={`testimonial-item-${index}`}>
                      {testimonial.itemType}
                    </p>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
