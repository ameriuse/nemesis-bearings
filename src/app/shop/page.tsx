import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import ProductCard from '@/components/product/ProductCard';
import { categories, sampleProducts } from '@/data/products';

export const metadata: Metadata = {
  title: 'Shop | Browse All Bearings & Industrial Components',
  description:
    'Browse our full catalog of industrial bearings, mounted units, housings, seals, and accessories. Search by part number, dimensions, or application.',
};

const filterGroups = [
  {
    title: 'Seal Type',
    items: ['Open', 'Shielded', 'Sealed'],
  },
  {
    title: 'Clearance',
    items: ['C2', 'CN (Normal)', 'C3', 'C4'],
  },
  {
    title: 'Availability',
    items: ['In Stock', 'Made To Order'],
  },
];

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-[1400px] px-4 py-8 md:py-10">
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Shop' },
        ]}
      />

      <section className="surface-dark overflow-hidden rounded-[2rem] p-7 md:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="section-kicker section-kicker-light">Catalog Overview</span>
            <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl" style={{ fontFamily: 'var(--font-heading)' }}>
              Browse bearings with a layout that feels built for buyers, not just browsers.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-steel-300">
              The shop view now carries the same premium structure as the homepage: clearer product grouping,
              stronger filter presentation, and more deliberate calls to action for buying or quoting.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/quote" className="btn-amber">
                Request RFQ
              </Link>
              <Link href="/resources/interchange" className="btn-outline !text-white !bg-white/6 !border-white/12">
                Cross Reference Help
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.6rem] border border-white/8 bg-white/5 p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-400">Categories</p>
              <p className="mt-3 text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                {categories.length}
              </p>
              <p className="mt-2 text-sm text-steel-400">Core product families arranged into clearer commercial paths.</p>
            </div>
            <div className="rounded-[1.6rem] border border-white/8 bg-white/5 p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-400">Featured SKUs</p>
              <p className="mt-3 text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                {sampleProducts.length}
              </p>
              <p className="mt-2 text-sm text-steel-400">Representative products shown with stronger spec and price hierarchy.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-10 flex flex-col gap-8 xl:flex-row">
        <aside className="xl:w-[320px] xl:flex-shrink-0">
          <div className="surface-panel sticky top-28 rounded-[1.8rem] p-6">
            <div className="border-b border-border pb-5">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-steel-600">Browse Categories</h2>
              <ul className="mt-4 space-y-2">
                {categories.map((cat) => (
                  <li key={cat.slug}>
                    <Link
                      href={`/shop/${cat.slug}`}
                      className="flex items-center justify-between rounded-[1rem] px-4 py-3 text-sm text-steel-700 hover:bg-steel-50 hover:text-steel-950"
                    >
                      <span>{cat.name}</span>
                      <span className="rounded-full bg-steel-100 px-2.5 py-1 text-[11px] font-semibold text-steel-500">
                        {cat.productCount}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 space-y-6">
              {filterGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-steel-500">
                    {group.title}
                  </h3>
                  <div className="mt-3 space-y-2">
                    {group.items.map((item) => (
                      <label key={item} className="flex cursor-pointer items-center gap-3 rounded-[1rem] px-3 py-2.5 hover:bg-steel-50">
                        <input type="checkbox" className="h-4 w-4 rounded border-steel-300" />
                        <span className="text-sm text-steel-700">{item}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-6 text-sm font-semibold text-blue-600 hover:text-blue-500">
              Clear all filters
            </button>
          </div>
        </aside>

        <div className="flex-1">
          <div className="surface-panel rounded-[1.8rem] p-5 md:p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-600">Catalog results</p>
                <h2 className="mt-2 text-3xl font-bold text-steel-950" style={{ fontFamily: 'var(--font-heading)' }}>
                  All Products
                </h2>
                <p className="mt-2 text-sm text-steel-600">{sampleProducts.length} featured products currently shown</p>
              </div>
              <div className="flex items-center gap-3">
                <label htmlFor="sort" className="text-sm text-steel-500">
                  Sort by
                </label>
                <select id="sort" className="rounded-full border border-steel-200 bg-white px-4 py-3 text-sm text-steel-700">
                  <option>Relevance</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Availability</option>
                  <option>Part Number</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 2xl:grid-cols-3">
            {sampleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {sampleProducts.length === 0 && (
            <div className="surface-panel mt-6 rounded-[1.8rem] p-12 text-center">
              <svg className="mx-auto h-14 w-14 text-steel-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <h3 className="mt-4 text-2xl font-semibold text-steel-950" style={{ fontFamily: 'var(--font-heading)' }}>
                No products found
              </h3>
              <p className="mt-3 text-sm text-steel-600">Try adjusting the filters or send us an RFQ for sourcing support.</p>
              <Link href="/quote" className="btn-dark mt-6">
                Submit RFQ
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
