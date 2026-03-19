import type { Metadata } from 'next';
import Breadcrumb from '@/components/ui/Breadcrumb';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Nemesis Bearings privacy policy. How we collect, use, and protect your information.',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Privacy Policy' },
      ]} />

      <h1 className="text-3xl font-extrabold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>Privacy Policy</h1>
      <p className="text-sm text-muted mb-8">Last updated: March 2026</p>

      <div className="prose max-w-none text-sm leading-relaxed text-muted space-y-6">
        <section>
          <h2 className="text-lg font-bold text-foreground">Information We Collect</h2>
          <p>When you use our website, submit a quote request, place an order, or contact us, we may collect:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Name and contact information (email, phone, company name)</li>
            <li>Shipping and billing addresses</li>
            <li>Order history and quote requests</li>
            <li>Technical inquiry details</li>
            <li>Website usage data (pages visited, browser type)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">How We Use Your Information</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Process and fulfill orders and quote requests</li>
            <li>Provide technical support and customer service</li>
            <li>Communicate about your orders and account</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">Information Sharing</h2>
          <p>
            We do not sell your personal information. We may share information with service providers
            (shipping carriers, payment processors) as necessary to fulfill your orders. We may also
            disclose information when required by law.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">Data Security</h2>
          <p>
            We implement reasonable security measures to protect your information. However, no method
            of electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">Cookies</h2>
          <p>
            We use cookies and similar technologies to improve your browsing experience, analyze site
            traffic, and understand usage patterns. You can control cookie settings through your browser.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">Your Rights</h2>
          <p>
            You may request access to, correction of, or deletion of your personal information by
            contacting us at <a href="mailto:sales@nemesisbearings.com" className="text-blue-600 hover:underline">sales@nemesisbearings.com</a>.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">Contact</h2>
          <p>
            For privacy-related questions, contact us at{' '}
            <a href="mailto:sales@nemesisbearings.com" className="text-blue-600 hover:underline">sales@nemesisbearings.com</a>{' '}
            or call <a href="tel:+19154010626" className="text-blue-600 hover:underline">(915) 401-0626</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
