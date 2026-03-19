import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';

export const metadata: Metadata = {
  title: 'Quality Assurance & Traceability',
  description: 'Learn about Nemesis Bearings quality inspection process, batch traceability, supplier qualification, and documentation standards.',
};

export default function QualityPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Quality Assurance' },
      ]} />

      <h1 className="text-3xl font-extrabold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
        Quality Assurance & Traceability
      </h1>
      <p className="text-muted mb-10 max-w-2xl">
        We take quality seriously. Our processes ensure that every bearing we ship meets the technical requirements
        of your application.
      </p>

      <div className="space-y-10">
        {/* Supplier Qualification */}
        <section className="bg-surface border border-border rounded-xl p-8">
          <h2 className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Supplier Qualification</h2>
          <p className="text-muted mb-4">
            We source from established bearing manufacturers with documented quality management systems.
            Our supplier evaluation considers manufacturing capability, quality control processes,
            industry reputation, and track record.
          </p>
          <ul className="space-y-2 text-sm text-muted">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold mt-0.5">&#8226;</span>
              Manufacturer quality system review
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold mt-0.5">&#8226;</span>
              Sample testing and evaluation before onboarding
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold mt-0.5">&#8226;</span>
              Ongoing performance monitoring
            </li>
          </ul>
        </section>

        {/* Incoming Inspection */}
        <section className="bg-surface border border-border rounded-xl p-8">
          <h2 className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Incoming Inspection</h2>
          <p className="text-muted mb-4">
            Every incoming shipment is inspected before being added to our inventory.
            Our inspection process includes:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: 'Dimensional Verification', desc: 'Bore, OD, and width measurements against published tolerances' },
              { title: 'Visual Inspection', desc: 'Surface finish, markings, seal condition, and packaging integrity' },
              { title: 'Documentation Review', desc: 'Mill certificates, test reports, and manufacturing documentation' },
              { title: 'Packaging Check', desc: 'Proper packaging and labeling verification' },
            ].map((item) => (
              <div key={item.title} className="bg-steel-100 rounded-lg p-4">
                <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Traceability */}
        <section className="bg-surface border border-border rounded-xl p-8">
          <h2 className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Batch Traceability</h2>
          <p className="text-muted mb-4">
            We maintain batch and lot tracking from receipt through shipment.
            This means we can trace any product back to its manufacturing lot, supplier, and inspection records.
          </p>
          <p className="text-muted">
            Certificates of conformance are available upon request. If your application requires specific
            documentation or certification, please let us know at the time of ordering.
          </p>
        </section>

        {/* Important Note */}
        <section className="bg-amber-50 border border-amber-200 rounded-xl p-6">
          <h2 className="text-lg font-bold mb-2 text-amber-800">A Note on Certifications</h2>
          <p className="text-sm text-amber-700">
            Nemesis Bearings operates with quality-focused internal processes.
            We do not currently hold ISO 9001 or other third-party quality management system certifications.
            We are transparent about this because trust matters.
            If your application requires products from a certified facility, please let us know and we can
            discuss options.
          </p>
        </section>

        {/* CTA */}
        <div className="text-center py-6">
          <p className="text-muted mb-4">Have questions about our quality process or need specific documentation?</p>
          <div className="flex justify-center gap-4">
            <Link href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-blue-500 transition-colors">
              Contact Us
            </Link>
            <Link href="/quote" className="border border-border px-6 py-3 rounded-lg font-semibold text-sm hover:bg-steel-100 transition-colors">
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
