import type { Metadata } from 'next';
import Breadcrumb from '@/components/ui/Breadcrumb';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Nemesis Bearings terms of service. Terms governing the use of our website and purchase of products.',
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Terms of Service' },
      ]} />

      <h1 className="text-3xl font-extrabold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>Terms of Service</h1>
      <p className="text-sm text-muted mb-8">Last updated: March 2026</p>

      <div className="prose max-w-none text-sm leading-relaxed text-muted space-y-6">
        <section>
          <h2 className="text-lg font-bold text-foreground">Acceptance of Terms</h2>
          <p>
            By accessing or using the Nemesis Bearings website and services, you agree to these terms.
            If you do not agree, please do not use our services.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">Products and Pricing</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Prices are subject to change without notice and are confirmed at time of quote or order.</li>
            <li>Product images may be representative. Actual products may vary in appearance.</li>
            <li>Availability is subject to current stock levels.</li>
            <li>We reserve the right to limit order quantities.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">Orders and Quotes</h2>
          <p>
            Quote requests are not binding commitments. Quotes are valid for the time period stated
            in the quote. Orders are subject to acceptance and confirmation by Nemesis Bearings.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">Cross-Reference and Interchange</h2>
          <p>
            Cross-reference information is provided as guidance to help identify potential replacement bearings.
            It is the buyer&apos;s responsibility to verify suitability for their specific application.
            Nemesis Bearings does not guarantee exact equivalence between referenced part numbers.
          </p>
          <p>
            All trademarks mentioned on this website are the property of their respective owners and
            are used solely for identification and cross-reference purposes. Nemesis Bearings is not
            affiliated with, endorsed by, or authorized by these trademark owners unless explicitly stated.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">Warranty</h2>
          <p>
            Products are warranted against defects in materials and workmanship for the standard
            warranty period. Warranty does not cover normal wear, misuse, improper installation,
            or operation outside specified parameters. See our{' '}
            <a href="/returns" className="text-blue-600 hover:underline">Returns & Warranty page</a> for details.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">Limitation of Liability</h2>
          <p>
            Nemesis Bearings&apos; liability is limited to the purchase price of the product.
            We are not liable for consequential, incidental, or indirect damages arising from
            the use or inability to use our products.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">Technical Information</h2>
          <p>
            Technical data, recommendations, and guidance provided through our website, support team,
            or documentation are for informational purposes. It is the buyer&apos;s responsibility to
            determine suitability for their specific application, especially in critical or safety-related uses.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">Contact</h2>
          <p>
            For questions about these terms, contact us at{' '}
            <a href="mailto:sales@nemesisbearings.com" className="text-blue-600 hover:underline">sales@nemesisbearings.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
