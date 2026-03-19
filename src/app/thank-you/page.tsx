import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Thank You',
  description: 'Your request has been submitted. We will respond within 4 business hours.',
};

export default function ThankYouPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
      <svg className="w-20 h-20 text-green-600 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <h1 className="text-3xl font-extrabold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Thank You!</h1>
      <p className="text-lg text-muted mb-2">Your request has been submitted successfully.</p>
      <p className="text-muted mb-8">We will review it and respond within 4 business hours (Mon–Fri 8AM–5PM EST).</p>

      <div className="bg-steel-100 rounded-xl p-6 mb-8">
        <p className="font-semibold mb-2">Need faster assistance?</p>
        <p className="text-sm text-muted">
          Call us directly at{' '}
          <a href="tel:+19154010626" className="text-blue-600 font-semibold hover:underline">(915) 401-0626</a>
        </p>
      </div>

      <div className="flex justify-center gap-4">
        <Link href="/shop" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-blue-500 transition-colors">
          Continue Shopping
        </Link>
        <Link href="/" className="border border-border px-6 py-3 rounded-lg font-semibold text-sm hover:bg-steel-100 transition-colors">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
