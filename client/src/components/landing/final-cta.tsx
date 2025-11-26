import { Button } from "@/components/ui/button";
import ctaImage from "@assets/stock_images/joyful_children_play_86eef842.jpg";

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

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white"
            data-testid="cta-headline"
          >
            Ready to Join Our Community?
          </h2>

          <p
            className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto"
            data-testid="cta-subheadline"
          >
            Download Zero to Seventeen today and start making a difference
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="https://apps.apple.com/us/app/zero2seventeen/id6739604370"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
              data-testid="button-cta-app-store"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto text-base px-8 py-6 gap-3 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                </svg>
                Download on App Store
              </Button>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.appetiser.zerotwoseventeen"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
              data-testid="button-cta-google-play"
            >
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-base px-8 py-6 gap-3 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                Get it on Google Play
              </Button>
            </a>
          </div>

          <p
            className="text-sm sm:text-base text-white/75 pt-4"
            data-testid="cta-availability"
          >
            Available in Australia & USA • Expanding to UK
          </p>
        </div>
      </div>
    </section>
  );
}
