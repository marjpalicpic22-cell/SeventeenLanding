import { Hero } from "@/components/landing/hero";
import { OriginStory } from "@/components/landing/origin-story";
import { Mission } from "@/components/landing/mission";
import { CoreValues } from "@/components/landing/core-values";
import { HowItWorks } from "@/components/landing/how-it-works";
import { CommunityImpact } from "@/components/landing/community-impact";
import { Newsletter } from "@/components/landing/newsletter";
import { FinalCTA } from "@/components/landing/final-cta";
import { Footer } from "@/components/landing/footer";
import { Navigation } from "@/components/landing/navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <OriginStory />
        <Mission />
        <CoreValues />
        <HowItWorks />
        <CommunityImpact />
        <Newsletter />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
