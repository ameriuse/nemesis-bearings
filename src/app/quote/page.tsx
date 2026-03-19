import type { Metadata } from 'next';
import Breadcrumb from '@/components/ui/Breadcrumb';
import QuoteForm from './QuoteForm';

export const metadata: Metadata = {
  title: 'Request a Quote',
  description: 'Submit a request for quote on industrial bearings. Include part numbers, quantities, and application details. We respond within 4 business hours.',
};

export default function QuotePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Request a Quote' },
      ]} />

      <h1 className="text-3xl font-extrabold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
        Request a Quote
      </h1>
      <p className="text-muted mb-8 max-w-2xl">
        Tell us what you need and we will respond with pricing, availability, and lead times.
        We aim to respond within 4 business hours during our operating hours (Mon–Fri 8AM–5PM EST).
      </p>

      <QuoteForm />

      <div className="mt-10 bg-steel-100 rounded-xl p-6">
        <h2 className="font-bold mb-3" style={{ fontFamily: 'var(--font-heading)' }}>Other Ways to Request a Quote</h2>
        <div className="grid sm:grid-cols-3 gap-4 text-sm">
          <div>
            <p className="font-semibold mb-1">Phone</p>
            <a href="tel:+19154010626" className="text-blue-600 hover:underline">(915) 401-0626</a>
            <p className="text-muted text-xs mt-1">Mon–Fri 8AM–5PM EST</p>
          </div>
          <div>
            <p className="font-semibold mb-1">Email</p>
            <a href="mailto:sales@nemesisbearings.com" className="text-blue-600 hover:underline">sales@nemesisbearings.com</a>
            <p className="text-muted text-xs mt-1">Include part numbers and quantities</p>
          </div>
          <div>
            <p className="font-semibold mb-1">Bulk Upload</p>
            <p className="text-muted">Send a CSV or spreadsheet with your part list to the email above for bulk quoting.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
