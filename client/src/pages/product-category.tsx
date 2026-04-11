import { useState } from "react";
import { Link, useParams } from "wouter";
import { ChevronLeft, X } from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import { Footer } from "@/components/landing/footer";
import { getCategoryById, getProductsByCategory, type Product } from "@/data/products-data";

function GooglePlayIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
    </svg>
  );
}

function AppStoreIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
    </svg>
  );
}

function DownloadModal({ product, onClose }: { product: Product; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
      data-testid="download-modal-overlay"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="bg-background rounded-2xl shadow-2xl w-full max-w-sm p-6 relative"
        data-testid="download-modal"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          data-testid="button-modal-close"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
            <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,16.5L6.5,12L7.91,10.59L11,13.67L16.09,8.58L17.5,10L11,16.5Z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-foreground mb-1" data-testid="modal-title">
            Get the app to buy this
          </h3>
          <p className="text-muted-foreground text-sm" data-testid="modal-product-name">
            {product.name} — <span className="font-semibold text-[#84cc16]">${product.appPrice}</span> in the app
          </p>
        </div>

        <div className="space-y-3">
          <a
            href="https://play.google.com/store/apps/details?id=com.appetiser.zerotwoseventeen"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="button-modal-google-play"
            className="flex items-center justify-center gap-2 w-full bg-foreground text-background font-semibold py-3 px-5 rounded-full hover:opacity-90 transition-opacity"
          >
            <GooglePlayIcon />
            Download on Google Play
          </a>
          <a
            href="https://apps.apple.com/au/app/zero2seventeen/id6739604370"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="button-modal-app-store"
            className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground font-semibold py-3 px-5 rounded-full hover:opacity-90 transition-opacity"
          >
            <AppStoreIcon />
            Download on App Store
          </a>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div
        className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
        data-testid={`card-product-${product.id}`}
      >
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            data-testid={`img-product-${product.id}`}
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-foreground text-base mb-1" data-testid={`text-product-name-${product.id}`}>
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-3" data-testid={`text-product-condition-${product.id}`}>
            {product.condition}
          </p>
          <div className="mb-4">
            <span
              className="text-sm text-muted-foreground line-through block"
              data-testid={`text-product-original-price-${product.id}`}
            >
              ${product.originalPrice.toLocaleString()} RRP
            </span>
            <span
              className="text-2xl font-bold text-[#84cc16]"
              data-testid={`text-product-app-price-${product.id}`}
            >
              ${product.appPrice}
            </span>
          </div>
          <button
            onClick={() => setModalOpen(true)}
            data-testid={`button-buy-product-${product.id}`}
            className="w-full bg-primary text-primary-foreground font-semibold py-3 px-4 rounded-full hover:opacity-90 transition-opacity text-sm"
          >
            Buy this on the Zero 2 Seventeen app for ${product.appPrice}
          </button>
        </div>
      </div>

      {modalOpen && (
        <DownloadModal product={product} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
}

export default function ProductCategory() {
  const params = useParams<{ categoryId: string }>();
  const category = getCategoryById(params.categoryId);
  const categoryProducts = getProductsByCategory(params.categoryId);

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

        {/* Products Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" data-testid="products-listing-section">
          {categoryProducts.length === 0 ? (
            <div className="text-center py-24" data-testid="empty-category-message">
              <p className="text-muted-foreground text-lg mb-2">No listings yet in this category.</p>
              <p className="text-muted-foreground text-sm">
                Download the app to see real-time listings from families near you.
              </p>
            </div>
          ) : (
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              data-testid="products-grid"
            >
              {categoryProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
