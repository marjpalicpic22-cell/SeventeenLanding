import ctaImage from "@assets/stock_images/joyful_children_play_86eef842.jpg";
import screenshot1 from "@assets/app_screenshots/screenshot1.png";
import screenshot2 from "@assets/app_screenshots/screenshot2.png";

export function FinalCTA() {
  return (
    <section
      id="download"
      className="relative py-24 md:py-32 lg:py-40 overflow-hidden"
      data-testid="section-final-cta"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${ctaImage})` }}
        data-testid="cta-background"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-heading"
              data-testid="cta-headline"
            >
              Join Our Parent Community Today
            </h2>

            <p
              className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-xl"
              data-testid="cta-subheadline"
            >
              Connect with mums and parents who understand. Share experiences, find support, and discover quality items for your little ones, all in one safe, welcoming place.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 pt-4">
              <a
                href="https://apps.apple.com/au/app/zero2seventeen/id6739604370"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
                data-testid="button-cta-app-store"
              >
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  className="h-14 w-auto mx-auto lg:mx-0"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.appetiser.zerotwoseventeen"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
                data-testid="button-cta-google-play"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-14 w-auto mx-auto lg:mx-0"
                />
              </a>
            </div>

            <p
              className="text-sm sm:text-base text-white/75 pt-4"
              data-testid="cta-availability"
            >
              Currently available in Australia, expanding to the United States soon
            </p>
          </div>

          <div className="hidden lg:flex justify-center gap-4">
            <div className="rounded-xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform">
              <img
                src={screenshot1}
                alt="Zero to Seventeen app home screen"
                className="w-48 h-auto"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform mt-8">
              <img
                src={screenshot2}
                alt="Zero to Seventeen app listings"
                className="w-48 h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
