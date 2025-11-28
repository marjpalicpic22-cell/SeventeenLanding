import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

export function Testimonials() {
  const [api, setApi] = useState<any>(null);

  const testimonials = [
    {
      id: 1,
      name: "Sarah M.",
      location: "Sydney, NSW",
      role: "Mum of 3",
      content:
        "Zero to Seventeen has been a game-changer for our family! We've saved so much money buying quality second-hand items and the community is so supportive. Highly recommend!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOiIxMjM0NTYifQ&w=100&h=100&fit=crop&q=80&crop=faces",
    },
    {
      id: 2,
      name: "Donna",
      location: "Melbourne, VIC",
      role: "First-Time Mum",
      content:
        "Finding a safe, trustworthy place to buy pre-loved items was exactly what I needed. The app is so easy to use and I've already made some wonderful mum friends through the community!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOiIxMjM0NTYifQ&w=100&h=100&fit=crop&q=80&crop=faces",
    },
    {
      id: 3,
      name: "Emma T.",
      location: "Brisbane, QLD",
      role: "Mum of 2",
      content:
        "I love knowing that when my kids outgrow their things, other families get to use them too. It's sustainable, affordable, and the community support has been incredible during my pregnancy.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOiIxMjM0NTYifQ&w=100&h=100&fit=crop&q=80&crop=faces",
    },
    {
      id: 4,
      name: "Catherine",
      location: "Perth, WA",
      role: "Mum of 4",
      content:
        "From toys to clothes to furniture, I've found everything we needed at a fraction of the price. But more than that, the community tips and advice have been invaluable. This is what motherhood should feel like!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOiIxMjM0NTYifQ&w=100&h=100&fit=crop&q=80&crop=faces",
    },
    {
      id: 5,
      name: "Adrianna",
      location: "Adelaide, SA",
      role: "Pregnant Mum",
      content:
        "Preparing for my third baby felt less overwhelming with Zero to Seventeen. The marketplace is amazing, but the real value is the community of mums who genuinely understand what you're going through.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOiIxMjM0NTYifQ&w=100&h=100&fit=crop&q=80&crop=faces",
    },
    {
      id: 6,
      name: "Elyza",
      location: "Hobart, TAS",
      role: "Mum of 1",
      content:
        "The Zero to Seventeen community has made such a difference in my motherhood journey. Being able to connect with other Australian mums and find quality items for my daughter has been transformative.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOiIxMjM0NTYifQ&w=100&h=100&fit=crop&q=80&crop=faces",
    },
  ];

  return (
    <section
      className="py-16 md:py-24 lg:py-32 bg-background"
      data-testid="section-testimonials"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground font-heading"
            data-testid="testimonials-headline"
          >
            Loved by Australian Families
          </h2>
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            data-testid="testimonials-description"
          >
            See what mums and families are saying about their Zero to Seventeen
            experience
          </p>
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
          data-testid="carousel-testimonials"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={testimonial.id}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
                data-testid={`testimonial-item-${index}`}
              >
                <Card className="p-6 h-full flex flex-col justify-between hover-elevate transition-all" data-testid={`card-testimonial-${testimonial.id}`}>
                  <div className="space-y-4">
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                          data-testid={`star-${testimonial.id}-${i}`}
                        />
                      ))}
                    </div>

                    <p
                      className="text-foreground leading-relaxed"
                      data-testid={`text-testimonial-content-${testimonial.id}`}
                    >
                      "{testimonial.content}"
                    </p>
                  </div>

                  <div className="flex items-center gap-4 mt-6 pt-6 border-t border-border">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                      data-testid={`image-avatar-${testimonial.id}`}
                    />
                    <div>
                      <p
                        className="font-semibold text-foreground text-sm"
                        data-testid={`text-name-${testimonial.id}`}
                      >
                        {testimonial.name}
                      </p>
                      <p
                        className="text-xs text-muted-foreground"
                        data-testid={`text-role-${testimonial.id}`}
                      >
                        {testimonial.role} • {testimonial.location}
                      </p>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious
            className="hidden md:flex -left-12 hover-elevate"
            data-testid="button-carousel-prev"
          />
          <CarouselNext
            className="hidden md:flex -right-12 hover-elevate"
            data-testid="button-carousel-next"
          />
        </Carousel>

        <div className="flex justify-center gap-2 mt-8 md:hidden" data-testid="carousel-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className="h-2 w-2 rounded-full bg-muted-foreground/30 hover:bg-muted-foreground/60 transition-colors"
              data-testid={`dot-${index}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
