import { Navigation } from "@/components/landing/navigation";
import { Footer } from "@/components/landing/footer";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-4xl mx-auto px-4 pt-32 pb-16">
        <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
        <div className="prose prose-green dark:prose-invert max-w-none leading-relaxed text-[17px]">
          <p className="text-sm text-muted-foreground mb-8">Last Updated: 12 January 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction and Acceptance</h2>
            <p>Welcome to Zero 2 Seventeen ("we," "us," "our," or the "Platform"). These Terms and Conditions ("Terms") govern your access to and use of the Zero 2 Seventeen website (<a href="http://www.zero2seventeen.com" className="text-primary hover:underline">www.zero2seventeen.com</a>), mobile application, and all related services (collectively, the "Services").</p>
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
            <p>All accounts must be created and managed by a parent or legal guardian. Children under 18 may only participate in the Platform under adult supervision. The account holder is responsible for all activity conducted through their account.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Nature of the Platform</h2>
            <p>Zero 2 Seventeen is a peer-to-peer marketplace that enables users to buy, sell, donate, and communicate regarding children's items.</p>
            <p>We do not own, possess, store, or control any items listed on the Platform and are not a party to transactions between users.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Account Responsibilities</h2>
            <p>You are responsible for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Maintaining the confidentiality of your account details</li>
              <li>All activity under your account</li>
              <li>Ensuring your information is accurate and up to date</li>
            </ul>
            <p>You must not share your account with others outside your household or allow unauthorised access.</p>
            <p>We reserve the right to suspend or terminate accounts for misuse or breach of these Terms.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Listings and Seller Obligations</h2>
            <p>Sellers must ensure that:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Listings are accurate and not misleading</li>
              <li>Items comply with applicable laws and safety standards</li>
              <li>Any defects, damage, or safety issues are clearly disclosed</li>
              <li>They have the legal right to sell the item</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5A. User Content and Communications</h2>
            <p>By uploading or posting content (including listings, images, descriptions, and messages) on the Platform, you grant us a non-exclusive, worldwide, royalty-free licence to use, display, reproduce, and distribute that content for the purpose of operating, improving, and promoting the Platform.</p>
            <p>You agree that:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Communications between users must be respectful and lawful</li>
              <li>You will not send abusive, harmful, or misleading messages</li>
              <li>We may monitor, review, or remove content where necessary for safety or compliance</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Buyer Responsibilities</h2>
            <p>Buyers agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Review listings carefully before purchase</li>
              <li>Communicate with sellers to clarify item details where necessary</li>
              <li>Independently assess the condition, safety, and suitability of items before completing a transaction</li>
            </ul>
            <p>Buyers acknowledge that:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Items are sold by individual users, not by the Platform</li>
              <li>The Platform does not verify, inspect, or guarantee any listings</li>
              <li>Any purchase decision is made at the buyer's own discretion</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Transactions, Payments, and Fees</h2>
            <p>(a) Listing items on the Platform is free.</p>
            <p>(b) We may introduce a small commission fee on successful sales in the future, which will be clearly communicated to users before it takes effect.</p>
            <p>(c) Payments are processed through third-party providers (such as Stripe). We do not store full payment details.</p>
            <p>(d) We are not responsible for payment processing errors, delays, or failures caused by third-party providers.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Prohibited Items and Conduct</h2>
            <p>The following items may not be listed on the Platform: product recalls, counterfeit items, items not meeting safety standards, hazardous materials, weapons, adult content, stolen items, or any items prohibited by law.</p>
            <p>Users must not engage in fraudulent, misleading, abusive, or unlawful conduct.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Safety of Children's Items</h2>
            <p>All items must comply with applicable safety standards, including Australian Consumer Law and relevant product safety regulations.</p>
            <p>We may remove listings that are considered unsafe, misleading, or inappropriate.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Transactions and Disputes</h2>
            <p>Transactions are conducted directly between users.</p>
            <p>We are not responsible for disputes between users but may, at our discretion, assist in resolving issues.</p>
            <p>Nothing in these Terms excludes rights available under Australian Consumer Law.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Refunds and Returns</h2>
            <p>Refunds and returns are to be agreed upon between the buyer and seller.</p>
            <p>However, statutory rights under Australian Consumer Law may apply.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>We are not liable for user conduct or transactions</li>
              <li>We do not guarantee the quality, safety, legality, or accuracy of items</li>
              <li>We are not responsible for any loss, damage, or injury arising from use of the Platform</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12A. No Warranties</h2>
            <p>The Platform is provided on an "as is" and "as available" basis.</p>
            <p>To the maximum extent permitted by law, we make no warranties or representations about:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The availability, reliability, or performance of the Platform;</li>
              <li>The accuracy, completeness, or reliability of listings;</li>
              <li>The safety, quality, legality, or suitability of items listed on the Platform.</li>
            </ul>
            <p>Nothing in these Terms excludes, restricts, or modifies any rights or remedies available under applicable law, including the Australian Consumer Law.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12B. Service Availability</h2>
            <p>We do not guarantee uninterrupted or error-free access to the Platform.</p>
            <p>We may suspend, restrict, or modify the Platform at any time without notice.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12C. Force Majeure</h2>
            <p>We are not liable for delays or failures caused by events outside our reasonable control, including technical failures, third-party outages, or unforeseen events.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">13. Indemnity</h2>
            <p>You agree to indemnify and hold us harmless from any claims, losses, or damages arising from:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your use of the Platform</li>
              <li>Your breach of these Terms</li>
              <li>Your listings, communications, or transactions</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">14. Suspension and Termination</h2>
            <p>We may suspend or terminate your access if:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>You breach these Terms</li>
              <li>Your activity poses a safety or legal risk</li>
              <li>Required by law</li>
            </ul>
            <p>We may take enforcement actions including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Removing listings or content</li>
              <li>Restricting or closing accounts</li>
              <li>Reporting unlawful activity to relevant authorities</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">15. Governing Law and Dispute Resolution</h2>
            <p>These Terms are governed by the laws of Australia.</p>
            <p>Before commencing legal proceedings, you agree to first contact us and attempt to resolve any dispute in good faith.</p>
            <p>If a dispute cannot be resolved, it may be referred to the appropriate courts in Australia.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">16. Contact Information</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
            <p>
              <strong>Zero 2 Seventeen</strong><br />
              Website: <a href="http://www.zero2seventeen.com" className="text-primary hover:underline">www.zero2seventeen.com</a><br />
              Email: <a href="mailto:support@zero2seventeen.com" className="text-primary hover:underline">support@zero2seventeen.com</a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
