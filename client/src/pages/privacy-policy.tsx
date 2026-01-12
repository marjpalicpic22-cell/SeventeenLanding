import { Navigation } from "@/components/landing/navigation";
import { Footer } from "@/components/landing/footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-4xl mx-auto px-4 pt-32 pb-16">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-green dark:prose-invert max-w-none">
          <p className="text-sm text-muted-foreground mb-8">Last Updated: 12 January 2025</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p>Zero 2 Seventeen ("we," "us," "our") is committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website (www.zero2seventeen.com), mobile application, and related services (collectively, the "Platform").</p>
            <p>We comply with the Australian Privacy Principles (APPs) contained in the Privacy Act 1988 (Cth) and, where applicable, the General Data Protection Regulation (GDPR) for users in the European Economic Area, and the California Consumer Privacy Act (CCPA) for California residents.</p>
            <p>By using our Platform, you consent to the collection, use, and disclosure of your information as described in this Privacy Policy. If you do not agree with our practices, please do not use our Platform.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-medium mb-2">2.1 Information You Provide Directly</h3>
            <p>When you register for an account, create listings, make purchases, or interact with our Platform, you may provide us with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>(a) Account Information:</strong> Name, email address, password, phone number, and profile picture;</li>
              <li><strong>(b) Profile Information:</strong> Username, bio, location (suburb/city), and preferences;</li>
              <li><strong>(c) Transaction Information:</strong> Shipping address, billing address, and payment information;</li>
              <li><strong>(d) Listing Information:</strong> Photos, descriptions, and pricing of items you list;</li>
              <li><strong>(e) Communication Data:</strong> Messages sent to other users, customer support inquiries, and feedback; and</li>
              <li><strong>(f) Identity Verification:</strong> Government-issued ID (if required for verification purposes).</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <p>We use your information for providing and improving our services, communication, safety and security, and legal compliance.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Children's Privacy</h2>
            <p>Our Platform is not intended for use by children under 18 years of age. We do not knowingly collect personal information from children under 18. If we become aware that we have collected personal information from a child under 18, we will take steps to delete such information promptly.</p>
            <p><strong>Note:</strong> While our Platform facilitates the sale of children's items (ages 0-17), the users of our Platform must be adults (18+) who are buying, selling, or donating items on behalf of children.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">14. Contact Us</h2>
            <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:</p>
            <p><strong>Zero 2 Seventeen</strong><br />
            Website: <a href="http://www.zero2seventeen.com" className="text-primary hover:underline">www.zero2seventeen.com</a><br />
            Email: <a href="mailto:privacy@zero2seventeen.com" className="text-primary hover:underline">privacy@zero2seventeen.com</a><br />
            For general support: <a href="mailto:support@zero2seventeen.com" className="text-primary hover:underline">support@zero2seventeen.com</a></p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
