import type { Metadata } from 'next';
import Breadcrumb from '@/components/ui/Breadcrumb';

export const metadata: Metadata = {
  title: 'Shipping & Delivery',
  description: 'Nemesis Bearings shipping policies, delivery times, and expedited shipping options.',
};

export default function ShippingPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Shipping & Delivery' },
      ]} />

      <h1 className="text-3xl font-extrabold mb-6" style={{ fontFamily: 'var(--font-heading)' }}>Shipping & Delivery</h1>

      <div className="space-y-8">
        <section className="bg-surface border border-border rounded-xl p-6">
          <h2 className="text-lg font-bold mb-3" style={{ fontFamily: 'var(--font-heading)' }}>Standard Shipping</h2>
          <ul className="space-y-2 text-sm text-muted">
            <li>In-stock orders placed before 2:00 PM EST ship same business day</li>
            <li>Standard ground delivery: 3-7 business days (continental US)</li>
            <li>Shipping costs calculated at checkout based on weight and destination</li>
          </ul>
        </section>

        <section className="bg-surface border border-border rounded-xl p-6">
          <h2 className="text-lg font-bold mb-3" style={{ fontFamily: 'var(--font-heading)' }}>Expedited Shipping</h2>
          <ul className="space-y-2 text-sm text-muted">
            <li>2-Day and Next-Day options available for in-stock items</li>
            <li>Contact us for expedited shipping quotes on large or heavy orders</li>
            <li>For critical/machine-down situations, call us directly at <a href="tel:+19154010626" className="text-blue-600 hover:underline">(915) 401-0626</a></li>
          </ul>
        </section>

        <section className="bg-surface border border-border rounded-xl p-6">
          <h2 className="text-lg font-bold mb-3" style={{ fontFamily: 'var(--font-heading)' }}>International Shipping</h2>
          <p className="text-sm text-muted">
            International shipping is available. Contact us for international shipping quotes,
            customs documentation, and delivery estimates.
          </p>
        </section>

        <section className="bg-surface border border-border rounded-xl p-6">
          <h2 className="text-lg font-bold mb-3" style={{ fontFamily: 'var(--font-heading)' }}>Order Tracking</h2>
          <p className="text-sm text-muted">
            Tracking information is provided via email once your order ships.
            Contact us if you have not received tracking within 24 hours of your expected ship date.
          </p>
        </section>
      </div>
    </div>
  );
}
