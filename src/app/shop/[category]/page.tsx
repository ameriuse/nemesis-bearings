import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/ui/Breadcrumb';
import ProductCard from '@/components/product/ProductCard';
import { categories, getCategoryBySlug, getProductsByCategory } from '@/data/products';

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryBySlug(category);

  if (!cat) {
    return { title: 'Category Not Found' };
  }

  return {
    title: cat.metaTitle,
    description: cat.metaDescription,
  };
}

export function generateStaticParams() {
  return categories.map((cat) => ({ category: cat.slug }));
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);

  if (!cat) {
    notFound();
  }

  const products = getProductsByCategory(category);

  return (
    <div className="mx-auto max-w-[1400px] px-4 py-8 md:py-10">
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Shop', href: '/shop' },
          { label: cat.name },
        ]}
      />

      <section className="surface-panel overflow-hidden rounded-[2rem] p-7 md:p-9">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="section-kicker">Category View</span>
            <h1 className="mt-4 text-4xl font-bold text-steel-950 md:text-5xl" style={{ fontFamily: 'var(--font-heading)' }}>
              {cat.name}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-steel-600">{cat.description}</p>

            {cat.subcategories.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {cat.subcategories.map((sub) => (
                  <Link
                    key={sub.slug}
                    href={`/shop/${cat.slug}?sub=${sub.slug}`}
                    className="rounded-full border border-steel-200 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-steel-600 hover:border-blue-400 hover:text-blue-600"
                  >
                    {sub.name} ({sub.productCount})
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="surface-card rounded-[1.8rem] p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-600">
              Category summary
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.4rem] border border-steel-200 bg-white px-5 py-4">
                <p className="text-3xl font-bold text-navy-950" style={{ fontFamily: 'var(--font-heading)' }}>
                  {cat.productCount}
                </p>
                <p className="mt-1 text-sm text-steel-600">Items represented in this family</p>
              </div>
              <div className="rounded-[1.4rem] border border-steel-200 bg-white px-5 py-4">
                <p className="text-3xl font-bold text-navy-950" style={{ fontFamily: 'var(--font-heading)' }}>
                  {cat.subcategories.length}
                </p>
                <p className="mt-1 text-sm text-steel-600">Subcategory routes available</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/quote" className="btn-dark">
                Request Quote
              </Link>
              <Link href="/resources/selector-guide" className="btn-outline">
                Selector Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {products.length === 0 && (
        <div className="surface-panel mt-8 rounded-[1.8rem] p-12 text-center">
          <h3 className="text-2xl font-semibold text-steel-950" style={{ fontFamily: 'var(--font-heading)' }}>
            More products coming soon
          </h3>
          <p className="mt-3 text-sm text-steel-600">
            We are expanding our {cat.name.toLowerCase()} catalog. Need a specific part? We can still quote it.
          </p>
          <Link href="/quote" className="btn-dark mt-6">
            Submit RFQ
          </Link>
        </div>
      )}

      <section className="surface-panel mt-10 rounded-[1.8rem] p-7 md:p-8">
        <span className="section-kicker">Category Context</span>
        <h2 className="mt-4 text-3xl font-bold text-steel-950" style={{ fontFamily: 'var(--font-heading)' }}>
          About {cat.name}
        </h2>
        <div className="mt-5 space-y-4 text-sm leading-8 text-steel-600">
          <p>{cat.description}</p>
          <p>
            Nemesis provides cross-reference support for widely used {cat.name.toLowerCase()} series from major
            industry brands. Our team can help identify interchange options, review application fit, and support
            the commercial side of the sourcing process.
          </p>
          <p>
            Need help selecting the right bearing?{' '}
            <Link href="/resources/selector-guide" className="font-semibold text-blue-600 hover:text-blue-500">
              Use the selector guide
            </Link>{' '}
            or{' '}
            <Link href="/contact" className="font-semibold text-blue-600 hover:text-blue-500">
              contact our support team
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
