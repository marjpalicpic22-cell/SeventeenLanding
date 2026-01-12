import { Navigation } from "@/components/landing/navigation";
import { Footer } from "@/components/landing/footer";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-4xl mx-auto px-4 pt-32 pb-16">
        <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
        <div className="prose prose-green dark:prose-invert max-w-none">
          <p className="text-sm text-muted-foreground mb-8">Last Updated: 12 January 2025</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction and Acceptance</h2>
            <p>Welcome to Zero 2 Seventeen ("we," "us," "our," or the "Platform"). These Terms and Conditions ("Terms") govern your access to and use of the Zero 2 Seventeen website (www.zero2seventeen.com), mobile application, and all related services (collectively, the "Services").</p>
            <p>By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, you must not access or use our Services.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Eligibility</h2>
            <p>To use our Services, you must:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>(a) Be at least 18 years of age or the age of legal majority in your jurisdiction;</li>
              <li>(b) Have the legal capacity to enter into a binding agreement;</li>
              <li>(c) Reside in Australia, the United States, or another jurisdiction where our Services are available;</li>
              <li>(d) Provide accurate and complete registration information; and</li>
              <li>(e) Not have been previously suspended or removed from our Platform.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Prohibited Items and Conduct</h2>
            <p>The following items may not be listed on the Platform: product recalls, counterfeit items, items not meeting safety standards, hazardous materials, weapons, adult content, stolen items, or any items prohibited by law.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">16. Contact Information</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
            <p><strong>Zero 2 Seventeen</strong><br />
            Website: <a href="http://www.zero2seventeen.com" className="text-primary hover:underline">www.zero2seventeen.com</a><br />
            Email: <a href="mailto:support@zero2seventeen.com" className="text-primary hover:underline">support@zero2seventeen.com</a></p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
