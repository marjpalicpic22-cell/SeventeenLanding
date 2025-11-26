import { Separator } from "@/components/ui/separator";
import { SiInstagram, SiFacebook, SiTiktok } from "react-icons/si";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div className="space-y-4" data-testid="footer-brand">
            <img
              src="https://www.zero2seventeen.com/_nuxt/logo.189acc67.svg"
              alt="Zero to Seventeen"
              className="h-12"
              data-testid="footer-logo"
            />
            <p className="text-sm text-muted-foreground max-w-xs" data-testid="footer-tagline">
              Where families help families. Second-hand made simple.
            </p>
            <div className="flex items-center gap-4" data-testid="footer-social">
              <a
                href="https://www.instagram.com/zero2seventeen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
                data-testid="link-instagram"
              >
                <SiInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61572776604472"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
                data-testid="link-facebook"
              >
                <SiFacebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@zero2seventeen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="TikTok"
                data-testid="link-tiktok"
              >
                <SiTiktok className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4" data-testid="footer-links">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#how-it-works"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-how-it-works"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#our-story"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-our-story"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-blog"
                >
                  Resources
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@zero2seventeen.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-contact"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4" data-testid="footer-legal">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.zero2seventeen.com/terms-and-conditions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-terms"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="https://www.zero2seventeen.com/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-privacy"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@zero2seventeen.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-support"
                >
                  support@zero2seventeen.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center sm:text-left" data-testid="footer-copyright">
            © 2024 Zero2Seventeen. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground text-center sm:text-right" data-testid="footer-expansion">
            Australia & USA • Expanding to UK
          </p>
        </div>
      </div>
    </footer>
  );
}
