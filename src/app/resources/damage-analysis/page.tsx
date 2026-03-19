import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';

export const metadata: Metadata = {
  title: 'Bearing Damage Analysis',
  description: 'Identify bearing failure modes, root causes, and prevention strategies.',
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Resources', href: '/resources' },
        { label: 'Bearing Damage Analysis' },
      ]} />

      <h1 className="text-3xl font-extrabold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Bearing Damage Analysis</h1>
      <p className="text-muted mb-10">Identify bearing failure modes, root causes, and prevention strategies.</p>

      <div className="bg-surface border border-border rounded-xl p-12 text-center">
        <svg className="w-16 h-16 text-steel-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
        <h2 className="text-xl font-bold mb-2">Coming Soon</h2>
        <p className="text-muted mb-6">This resource is being developed. In the meantime, our technical team can help.</p>
        <div className="flex justify-center gap-4">
          <Link href="/support" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-blue-500 transition-colors">
            Contact Technical Support
          </Link>
          <Link href="/resources" className="border border-border px-6 py-3 rounded-lg font-semibold text-sm hover:bg-steel-100 transition-colors">
            View All Resources
          </Link>
        </div>
      </div>
    </div>
  );
}
