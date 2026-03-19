import type { Metadata } from 'next';
import Link from 'next/link';
import { categories, sampleProducts } from '@/data/products';
import Breadcrumb from '@/components/ui/Breadcrumb';
import ProductCard from '@/components/product/ProductCard';

export const metadata: Metadata = {
  title: 'Shop | Browse All Bearings & Industrial Components',
  description: 'Browse our full catalog of industrial bearings, mounted units, housings, seals, and accessories. Search by part number, dimensions, or application.',
};

export default function ShopPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Shop' },
      ]} />

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="lg:w-64 flex-shrink-0">
          <div className="bg-surface border border-border rounded-xl p-5 sticky top-20">
            <h2 className="font-bold text-sm uppercase tracking-wider mb-4">Categories</h2>
            <ul className="space-y-1">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/shop/${cat.slug}`}
                    className="flex items-center justify-between py-2 px-3 rounded-lg text-sm hover:bg-steel-100 transition-colors"
                  >
                    <span>{cat.name}</span>
                    <span className="text-xs text-muted">{cat.productCount}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <hr className="my-5 border-border" />

            <h3 className="font-bold text-sm uppercase tracking-wider mb-3">Filters</h3>

            {/* Seal Type */}
            <div className="mb-4">
              <p className="text-xs font-semibold text-steel-700 mb-2">Seal Type</p>
              {['Open', 'Shielded', 'Sealed'].map((type) => (
                <label key={type} className="flex items-center gap-2 py-1 text-sm cursor-pointer">
                  <input type="checkbox" className="rounded border-steel-400" />
                  <span>{type}</span>
                </label>
              ))}
            </div>

            {/* Clearance */}
            <div className="mb-4">
              <p className="text-xs font-semibold text-steel-700 mb-2">Clearance</p>
              {['C2', 'CN (Normal)', 'C3', 'C4'].map((cl) => (
                <label key={cl} className="flex items-center gap-2 py-1 text-sm cursor-pointer">
                  <input type="checkbox" className="rounded border-steel-400" />
                  <span>{cl}</span>
                </label>
              ))}
            </div>

            {/* Availability */}
            <div className="mb-4">
              <p className="text-xs font-semibold text-steel-700 mb-2">Availability</p>
              {['In Stock', 'Made to Order'].map((status) => (
                <label key={status} className="flex items-center gap-2 py-1 text-sm cursor-pointer">
                  <input type="checkbox" className="rounded border-steel-400" />
                  <span>{status}</span>
                </label>
              ))}
            </div>

            <button className="w-full mt-2 text-sm text-blue-600 font-medium hover:underline">
              Clear All Filters
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl font-extrabold" style={{ fontFamily: 'var(--font-heading)' }}>All Products</h1>
              <p className="text-sm text-muted">{sampleProducts.length} products found</p>
            </div>
            <div className="flex items-center gap-3">
              <label htmlFor="sort" className="text-sm text-muted">Sort by:</label>
              <select id="sort" className="border border-border rounded-lg px-3 py-2 text-sm bg-surface">
                <option>Relevance</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Availability</option>
                <option>Part Number</option>
              </select>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {sampleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Empty state for zero results */}
          {sampleProducts.length === 0 && (
            <div className="text-center py-16 bg-surface rounded-xl border border-border">
              <svg className="w-16 h-16 text-steel-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <h3 className="text-lg font-semibold mb-2">No products found</h3>
              <p className="text-muted mb-4">Try adjusting your search or filters.</p>
              <Link href="/quote" className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-blue-500 transition-colors inline-block">
                Submit an RFQ Instead
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
