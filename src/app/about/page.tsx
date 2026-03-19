import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';

export const metadata: Metadata = {
  title: 'About Nemesis Bearings',
  description: 'Nemesis Bearings provides industrial bearing solutions with cross-reference support, quality inspection, and technical expertise.',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'About Nemesis' },
      ]} />

      <h1 className="text-3xl font-extrabold mb-6" style={{ fontFamily: 'var(--font-heading)' }}>About Nemesis Bearings</h1>

      <div className="prose max-w-none space-y-6 text-muted">
        <p className="text-lg leading-relaxed">
          Nemesis Bearings is an industrial bearing supplier focused on providing quality-assured
          alternatives and interchange options for widely used bearing series.
        </p>

        <section className="bg-surface border border-border rounded-xl p-8 not-prose">
          <h2 className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>What We Do</h2>
          <ul className="space-y-3 text-sm text-muted">
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
              Supply ball bearings, roller bearings, spherical bearings, thrust bearings, mounted units, housings, and accessories
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
              Provide cross-reference and interchange support for common industry part numbers
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
              Offer technical support for bearing selection, fit, lubrication, and troubleshooting
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
              Maintain quality inspection and batch traceability on all inventory
            </li>
          </ul>
        </section>

        <section className="bg-surface border border-border rounded-xl p-8 not-prose">
          <h2 className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Who We Serve</h2>
          <div className="grid sm:grid-cols-2 gap-4 text-sm text-muted">
            <div className="bg-steel-100 rounded-lg p-4">
              <h3 className="font-semibold text-foreground mb-1">Maintenance Teams</h3>
              <p>Fast access to replacement bearings with same-day shipping on in-stock items.</p>
            </div>
            <div className="bg-steel-100 rounded-lg p-4">
              <h3 className="font-semibold text-foreground mb-1">Engineers</h3>
              <p>Technical specs, cross-reference data, and application guidance.</p>
            </div>
            <div className="bg-steel-100 rounded-lg p-4">
              <h3 className="font-semibold text-foreground mb-1">Procurement</h3>
              <p>Competitive pricing, volume quotes, and commercial documentation.</p>
            </div>
            <div className="bg-steel-100 rounded-lg p-4">
              <h3 className="font-semibold text-foreground mb-1">Small Shops</h3>
              <p>No minimum order requirements on most items. Guided selection when part number is unknown.</p>
            </div>
          </div>
        </section>

        <div className="text-center pt-4 not-prose">
          <div className="flex justify-center gap-4">
            <Link href="/shop" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-blue-500 transition-colors">
              Browse Catalog
            </Link>
            <Link href="/contact" className="border border-border px-6 py-3 rounded-lg font-semibold text-sm hover:bg-steel-100 transition-colors">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
