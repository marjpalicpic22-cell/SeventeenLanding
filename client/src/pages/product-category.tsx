import { Link, useParams } from "wouter";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import { Footer } from "@/components/landing/footer";
import { getCategoryById, getSubcategoriesByCategory, type Subcategory } from "@/data/products-data";

function SubcategoryCard({ subcategory, categoryId }: { subcategory: Subcategory; categoryId: string }) {
  return (
    <Link
      href={`/products/${categoryId}/${subcategory.id}`}
      data-testid={`card-subcategory-${subcategory.id}`}
      className="group flex items-center justify-between bg-card border border-border rounded-2xl px-5 py-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
    >
      <span
        className="font-medium text-foreground text-base group-hover:text-primary transition-colors"
        data-testid={`text-subcategory-name-${subcategory.id}`}
      >
        {subcategory.name}
      </span>
      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
    </Link>
  );
}

export default function ProductCategory() {
  const params = useParams<{ categoryId: string }>();
  const category = getCategoryById(params.categoryId);
  const categorySubcategories = getSubcategoriesByCategory(params.categoryId);

  if (!category) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="max-w-7xl mx-auto px-4 py-32 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Category not found</h1>
          <Link href="/products" className="text-primary hover:underline">
            Back to Products
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        {/* Category Header */}
        <section
          className="relative h-64 md:h-80 flex items-end overflow-hidden"
          data-testid="category-header"
        >
          <img
            src={category.image}
            alt={category.name}
            className="absolute inset-0 w-full h-full object-cover"
            data-testid="category-header-image"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
            <Link
              href="/products"
              className="inline-flex items-center gap-1 text-white/80 hover:text-white text-sm mb-3 transition-colors"
              data-testid="link-back-to-products"
            >
              <ChevronLeft className="w-4 h-4" />
              All Categories
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-white" data-testid="category-title">
              {category.name}
            </h1>
            <p className="text-white/80 mt-1" data-testid="category-description">
              {category.description}
            </p>
          </div>
        </section>

        {/* Subcategory Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" data-testid="subcategories-section">
          <h2 className="text-xl font-semibold text-foreground mb-6" data-testid="subcategories-heading">
            Browse {category.name}
          </h2>

          {categorySubcategories.length === 0 ? (
            <div className="text-center py-24" data-testid="empty-subcategories-message">
              <p className="text-muted-foreground text-lg mb-2">No subcategories yet.</p>
              <p className="text-muted-foreground text-sm">
                Download the app to see real-time listings from families near you.
              </p>
            </div>
          ) : (
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
              data-testid="subcategories-grid"
            >
              {categorySubcategories.map((sub) => (
                <SubcategoryCard key={sub.id} subcategory={sub} categoryId={params.categoryId} />
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
