import type { Metadata } from 'next';
import Breadcrumb from '@/components/ui/Breadcrumb';

export const metadata: Metadata = {
  title: 'Returns & Warranty',
  description: 'Nemesis Bearings return policy and warranty information for industrial bearings.',
};

export default function ReturnsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Returns & Warranty' },
      ]} />

      <h1 className="text-3xl font-extrabold mb-6" style={{ fontFamily: 'var(--font-heading)' }}>Returns & Warranty</h1>

      <div className="space-y-8">
        <section className="bg-surface border border-border rounded-xl p-6">
          <h2 className="text-lg font-bold mb-3" style={{ fontFamily: 'var(--font-heading)' }}>Return Policy</h2>
          <ul className="space-y-2 text-sm text-muted">
            <li>Unused, unopened bearings in original packaging may be returned within 30 days of delivery</li>
            <li>Contact us for a return authorization (RA) number before shipping returns</li>
            <li>Buyer is responsible for return shipping costs unless the return is due to our error</li>
            <li>Refunds are processed within 5-7 business days of receiving the returned product</li>
            <li>Custom or made-to-order items are non-returnable unless defective</li>
          </ul>
        </section>

        <section className="bg-surface border border-border rounded-xl p-6">
          <h2 className="text-lg font-bold mb-3" style={{ fontFamily: 'var(--font-heading)' }}>Warranty</h2>
          <p className="text-sm text-muted mb-3">
            Products are warranted against defects in materials and workmanship.
            The warranty period follows standard industry terms from the date of delivery.
          </p>
          <h3 className="font-semibold text-sm mb-2">Warranty Does Not Cover:</h3>
          <ul className="space-y-1 text-sm text-muted list-disc pl-5">
            <li>Normal wear and tear</li>
            <li>Improper installation, maintenance, or storage</li>
            <li>Operation outside specified parameters (load, speed, temperature)</li>
            <li>Damage from contamination, corrosion, or misuse</li>
            <li>Products modified after purchase</li>
          </ul>
        </section>

        <section className="bg-surface border border-border rounded-xl p-6">
          <h2 className="text-lg font-bold mb-3" style={{ fontFamily: 'var(--font-heading)' }}>Defective Products</h2>
          <p className="text-sm text-muted">
            If you receive a defective product, contact us within 7 days of delivery.
            We will arrange replacement or refund at no additional cost.
            Please retain the product and packaging for inspection if requested.
          </p>
        </section>

        <section className="bg-surface border border-border rounded-xl p-6">
          <h2 className="text-lg font-bold mb-3" style={{ fontFamily: 'var(--font-heading)' }}>How to Initiate a Return</h2>
          <ol className="space-y-2 text-sm text-muted list-decimal pl-5">
            <li>Contact us at <a href="mailto:sales@nemesisbearings.com" className="text-blue-600 hover:underline">sales@nemesisbearings.com</a> or call <a href="tel:+19154010626" className="text-blue-600 hover:underline">(915) 401-0626</a></li>
            <li>Provide your order number and reason for return</li>
            <li>Receive a Return Authorization (RA) number</li>
            <li>Ship the product with the RA number clearly marked</li>
            <li>Refund or replacement processed upon receipt and inspection</li>
          </ol>
        </section>
      </div>
    </div>
  );
}
