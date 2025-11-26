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
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-heading"
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
              href="/app"
              className="w-full sm:w-auto"
              data-testid="button-cta-view-app"
            >
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-base px-8 py-6 gap-3 backdrop-blur-md text-white"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 2C4.9 2 4 2.9 4 4v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H6zm0 2h12v14H6V4zm1 1v12h10V5H7z" />
                </svg>
                See the App
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
                className="w-full sm:w-auto text-base px-8 py-6 gap-3 backdrop-blur-md text-white"
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
