import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
      <h1 className="text-6xl font-extrabold text-steel-300 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>404</h1>
      <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
      <p className="text-muted mb-8">
        The page you are looking for does not exist or has been moved.
      </p>
      <div className="flex justify-center gap-4">
        <Link href="/shop" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-blue-500 transition-colors">
          Browse Catalog
        </Link>
        <Link href="/quote" className="border border-border px-6 py-3 rounded-lg font-semibold text-sm hover:bg-steel-100 transition-colors">
          Request a Quote
        </Link>
        <Link href="/" className="border border-border px-6 py-3 rounded-lg font-semibold text-sm hover:bg-steel-100 transition-colors">
          Home
        </Link>
      </div>
    </div>
  );
}
