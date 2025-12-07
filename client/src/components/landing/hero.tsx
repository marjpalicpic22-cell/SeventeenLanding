import { Button } from "@/components/ui/button";
import heroImage from "@assets/stock_images/australian_white_cau_b6ef0bb1.jpg";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      data-testid="section-hero"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
        data-testid="hero-background"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="space-y-6 md:space-y-8">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight font-heading"
            data-testid="hero-headline"
          >
            A Community Where Parents Belong
          </h1>

          <p
            className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light"
            data-testid="hero-subheadline"
          >
            More than an app — a safe space for mums and parents to connect, share experiences, and find quality second-hand items for their little ones
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="https://apps.apple.com/us/app/zero2seventeen/id6739604370"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
              data-testid="button-hero-app-store"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="h-14 w-auto mx-auto sm:mx-0"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.appetiser.zerotwoseventeen"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
              data-testid="button-hero-google-play"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-14 w-auto mx-auto sm:mx-0"
              />
            </a>
          </div>

          <p
            className="text-sm sm:text-base text-white/75 pt-6"
            data-testid="hero-trust-indicator"
          >
            Join our growing community of parents in Australia — expanding to the United States soon
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
