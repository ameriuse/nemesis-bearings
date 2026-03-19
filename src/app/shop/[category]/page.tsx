import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getCategoryBySlug, getProductsByCategory, categories } from '@/data/products';
import Breadcrumb from '@/components/ui/Breadcrumb';
import ProductCard from '@/components/product/ProductCard';

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) return { title: 'Category Not Found' };
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
  if (!cat) notFound();

  const products = getProductsByCategory(category);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Shop', href: '/shop' },
        { label: cat.name },
      ]} />

      <div className="mb-8">
        <h1 className="text-3xl font-extrabold mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
          {cat.name}
        </h1>
        <p className="text-muted max-w-3xl">{cat.description}</p>
      </div>

      {/* Subcategories */}
      {cat.subcategories.length > 0 && (
        <div className="flex flex-wrap gap-3 mb-8">
          {cat.subcategories.map((sub) => (
            <Link
              key={sub.slug}
              href={`/shop/${cat.slug}?sub=${sub.slug}`}
              className="bg-surface border border-border rounded-lg px-4 py-2 text-sm font-medium hover:border-blue-300 hover:text-blue-600 transition-colors"
            >
              {sub.name}
              <span className="ml-2 text-xs text-muted">({sub.productCount})</span>
            </Link>
          ))}
        </div>
      )}

      {/* Products */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {products.length === 0 && (
        <div className="text-center py-16 bg-surface rounded-xl border border-border">
          <h3 className="text-lg font-semibold mb-2">More products coming soon</h3>
          <p className="text-muted mb-4">We are expanding our {cat.name.toLowerCase()} catalog. Need a specific part?</p>
          <Link href="/quote" className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-blue-500 transition-colors inline-block">
            Submit an RFQ
          </Link>
        </div>
      )}

      {/* SEO Content Block */}
      <section className="mt-16 bg-surface border border-border rounded-xl p-8">
        <h2 className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
          About {cat.name}
        </h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <p>{cat.description}</p>
          <p>
            Nemesis provides cross-reference support for widely used {cat.name.toLowerCase()} series from major industry brands.
            Our technical team can help identify the right bearing for your application, recommend interchange options,
            and provide specifications and documentation.
          </p>
          <p>
            Need help selecting the right bearing?{' '}
            <Link href="/resources/selector-guide" className="text-blue-600 hover:underline">Use our Bearing Selector Guide</Link>{' '}
            or <Link href="/contact" className="text-blue-600 hover:underline">contact our technical support team</Link>.
          </p>
        </div>
      </section>
    </div>
  );
}
