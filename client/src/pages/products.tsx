import { Link } from "wouter";
import { Navigation } from "@/components/landing/navigation";
import { Footer } from "@/components/landing/footer";

const categories = [
  {
    id: "prams-strollers",
    name: "Prams and Strollers",
    image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600&q=80",
    description: "Browse quality prams, strollers and travel systems",
  },
  {
    id: "clothing-shoes",
    name: "Clothing and Shoes",
    image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=600&q=80",
    description: "Kids' clothing, shoes and accessories for every age",
  },
  {
    id: "toys-games",
    name: "Toys and Games",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&q=80",
    description: "Fun toys, games and outdoor play equipment",
  },
  {
    id: "furniture-nursery",
    name: "Furniture and Nursery",
    image: "https://images.unsplash.com/photo-1586105449897-20b5efeb3233?w=600&q=80",
    description: "Cots, change tables, wardrobes and nursery decor",
  },
  {
    id: "feeding-bathing",
    name: "Feeding and Bathing",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80",
    description: "High chairs, bottles, bath seats and more",
  },
  {
    id: "car-seats",
    name: "Car Seats",
    image: "https://images.unsplash.com/photo-1549497538-303791108f95?w=600&q=80",
    description: "Safe and certified car seats for all stages",
  },
  {
    id: "books-learning",
    name: "Books and Learning",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&q=80",
    description: "Children's books, educational toys and learning tools",
  },
  {
    id: "other",
    name: "Other",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    description: "Everything else for your growing family",
  },
];

export default function Products() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        <section className="relative h-[480px] md:h-[560px] flex items-center justify-center overflow-hidden" data-testid="products-hero">
          <img
            src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=1600&q=80"
            alt="Kids items marketplace"
            className="absolute inset-0 w-full h-full object-cover"
            data-testid="products-hero-image"
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight" data-testid="products-hero-title">
              Products Catalogue
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto" data-testid="products-hero-subtitle">
              Discover quality secondhand kids' items across all categories — buy, sell, and recycle within your local community.
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" data-testid="products-categories-section">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3" data-testid="categories-heading">
              Browse by Category
            </h2>
            <p className="text-muted-foreground text-lg" data-testid="categories-subheading">
              Find exactly what you're looking for
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" data-testid="categories-grid">
            {categories.map((category) => (
              <div
                key={category.id}
                data-testid={`card-category-${category.id}`}
                className="group relative rounded-2xl overflow-hidden shadow-md cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card border border-border"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    data-testid={`img-category-${category.id}`}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground text-base mb-1" data-testid={`text-category-name-${category.id}`}>
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-snug" data-testid={`text-category-desc-${category.id}`}>
                    {category.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
