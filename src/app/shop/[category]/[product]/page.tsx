import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { AvailabilityBadge, CategoryBadge } from '@/components/ui/Badge';
import { getCategoryBySlug, getProductBySlug, sampleProducts } from '@/data/products';

interface Props {
  params: Promise<{ category: string; product: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { product: slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: 'Product Not Found' };
  }

  return {
    title: product.metaTitle,
    description: product.metaDescription,
  };
}

export function generateStaticParams() {
  return sampleProducts.map((product) => ({
    category: product.category,
    product: product.slug,
  }));
}

export default async function ProductPage({ params }: Props) {
  const { category, product: slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const cat = getCategoryBySlug(category);

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    sku: product.sku,
    mpn: product.partNumber,
    brand: { '@type': 'Brand', name: 'Nemesis' },
    ...(product.unitPrice && {
      offers: {
        '@type': 'Offer',
        price: product.unitPrice,
        priceCurrency: product.currency,
        availability:
          product.availability === 'in-stock'
            ? 'https://schema.org/InStock'
            : 'https://schema.org/PreOrder',
        seller: { '@type': 'Organization', name: 'Nemesis Bearings' },
      },
    }),
  };

  const specRows = [
    ['Bore (d)', `${product.boreID} mm`],
    ['Outer Diameter (D)', `${product.outerDiameter} mm`],
    ['Width', `${product.width} mm`],
    ['Dynamic Load Rating', `${product.dynamicLoadRating} kN`],
    ['Static Load Rating', `${product.staticLoadRating} kN`],
    ['Max Speed', `${product.maxSpeed} RPM`],
    ['Temperature Range', `${product.temperatureRange.min} C to ${product.temperatureRange.max} C`],
    ['Seal Type', product.sealType],
    ['Clearance', product.clearance],
    ['Precision Rating', product.precisionRating],
    ['Cage Material', product.cageMaterial],
    ['Ring Material', product.ringMaterial],
    ['Lubrication', product.lubricationType],
    ['Relubrication', product.relubricationAllowed ? 'Yes' : 'No'],
    ['Mounting Style', product.mountingStyle],
    ['Locking Style', product.lockingStyle || 'N/A'],
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      <div className="mx-auto max-w-[1400px] px-4 py-8 md:py-10">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Shop', href: '/shop' },
            { label: cat?.name || product.category, href: `/shop/${product.category}` },
            { label: product.partNumber },
          ]}
        />

        <section className="surface-panel overflow-hidden rounded-[2rem] p-6 md:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.02fr] lg:items-start">
            <div className="surface-dark relative flex min-h-[420px] items-center justify-center overflow-hidden rounded-[1.9rem] p-8">
              <div
                className="absolute inset-0 opacity-80"
                style={{
                  background:
                    'radial-gradient(circle at top left, rgba(243,179,92,0.18), transparent 40%), radial-gradient(circle at bottom right, rgba(77,131,255,0.18), transparent 42%)',
                }}
              />
              <div className="absolute inset-0 dot-pattern opacity-30" />
              <div className="relative text-white/80">
                <svg className="h-56 w-56 md:h-72 md:w-72" viewBox="0 0 100 100" fill="currentColor">
                  <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="3" />
                  <circle cx="50" cy="50" r="14" fill="currentColor" opacity="0.28" />
                  <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5 4" />
                  {[0, 60, 120, 180, 240, 300].map((angle) => {
                    const radians = (angle * Math.PI) / 180;

                    return (
                      <circle
                        key={angle}
                        cx={50 + 25 * Math.cos(radians)}
                        cy={50 + 25 * Math.sin(radians)}
                        r="4.5"
                        fill="currentColor"
                        opacity="0.5"
                      />
                    );
                  })}
                </svg>
              </div>
              {product.images[0]?.isRepresentative && (
                <p className="absolute bottom-5 right-5 rounded-full border border-white/10 bg-navy-950/80 px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-steel-400">
                  Representative image
                </p>
              )}
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-3">
                <CategoryBadge label={product.category.replaceAll('-', ' ')} />
                <AvailabilityBadge status={product.availability} />
              </div>

              <h1 className="mt-5 text-4xl font-bold text-steel-950 md:text-5xl" style={{ fontFamily: 'var(--font-heading)' }}>
                {product.name}
              </h1>

              <div className="mt-4 flex flex-wrap gap-4 text-sm text-steel-600">
                <span>
                  Part #: <strong className="text-steel-950">{product.partNumber}</strong>
                </span>
                <span>
                  SKU: <strong className="text-steel-950">{product.sku}</strong>
                </span>
                <span>{product.leadTime}</span>
              </div>

              <p className="mt-5 text-base leading-8 text-steel-600">{product.description}</p>

              {product.comparableBrands.length > 0 && (
                <div className="mt-6 rounded-[1.5rem] border border-steel-200 bg-steel-50 p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-600">
                    Cross-reference / interchange
                  </p>
                  <p className="mt-3 text-sm leading-7 text-steel-700">
                    {product.comparableBrands.join(' | ')}
                  </p>
                  <p className="mt-2 text-xs text-steel-500">
                    Trademarks are property of their respective owners and referenced only for product identification and interchange support.
                  </p>
                </div>
              )}

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-[1.4rem] border border-steel-200 bg-white p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-steel-500">Dimensions</p>
                  <p className="mt-2 text-2xl font-bold text-navy-950" style={{ fontFamily: 'var(--font-heading)' }}>
                    {product.boreID} x {product.outerDiameter} x {product.width}
                  </p>
                  <p className="mt-1 text-sm text-steel-600">mm</p>
                </div>
                <div className="rounded-[1.4rem] border border-steel-200 bg-white p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-steel-500">Dynamic load</p>
                  <p className="mt-2 text-2xl font-bold text-navy-950" style={{ fontFamily: 'var(--font-heading)' }}>
                    {product.dynamicLoadRating} kN
                  </p>
                  <p className="mt-1 text-sm text-steel-600">Application-ready spec</p>
                </div>
                <div className="rounded-[1.4rem] border border-steel-200 bg-white p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-steel-500">Commercial</p>
                  <p className="mt-2 text-2xl font-bold text-navy-950" style={{ fontFamily: 'var(--font-heading)' }}>
                    {product.quoteOnly ? 'RFQ' : `$${product.unitPrice?.toFixed(2)}`}
                  </p>
                  <p className="mt-1 text-sm text-steel-600">{product.quoteOnly ? 'Pricing on request' : 'Each / USD'}</p>
                </div>
              </div>

              <div className="mt-7 rounded-[1.8rem] border border-steel-200 bg-white p-5">
                <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-600">
                      Pricing and action
                    </p>
                    <div className="mt-3 flex items-baseline gap-3">
                      {product.quoteOnly ? (
                        <p className="text-3xl font-bold text-steel-950" style={{ fontFamily: 'var(--font-heading)' }}>
                          Contact for quote
                        </p>
                      ) : (
                        <p className="text-4xl font-bold text-steel-950" style={{ fontFamily: 'var(--font-heading)' }}>
                          ${product.unitPrice?.toFixed(2)}
                        </p>
                      )}
                      {!product.quoteOnly && <span className="text-sm text-steel-500">per unit</span>}
                    </div>
                    {product.moq > 1 && (
                      <p className="mt-2 text-sm text-steel-600">Minimum order: {product.moq} units</p>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <label htmlFor="qty" className="text-sm font-semibold text-steel-600">
                      Qty
                    </label>
                    <input
                      id="qty"
                      type="number"
                      defaultValue={Math.max(1, product.moq)}
                      min={product.moq}
                      className="w-24 rounded-full border border-steel-200 bg-steel-50 px-4 py-3 text-center text-sm text-steel-900"
                    />
                  </div>
                </div>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  {product.quoteOnly ? (
                    <Link href={`/quote?part=${product.partNumber}`} className="btn-amber flex-1">
                      Request Quote
                    </Link>
                  ) : (
                    <button className="btn-dark flex-1">Add To Cart</button>
                  )}
                  <Link href={`/quote?part=${product.partNumber}`} className="btn-outline flex-1">
                    Add To Quote Cart
                  </Link>
                </div>
              </div>

              <div className="mt-6 rounded-[1.5rem] border border-blue-500/12 bg-blue-400/8 p-5">
                <p className="text-sm font-semibold text-steel-900">Need technical help?</p>
                <p className="mt-2 text-sm leading-7 text-steel-600">
                  Call{' '}
                  <a href="tel:+19154010626" className="font-semibold text-blue-600 hover:text-blue-500">
                    (915) 401-0626
                  </a>{' '}
                  or{' '}
                  <Link href="/support" className="font-semibold text-blue-600 hover:text-blue-500">
                    contact technical support
                  </Link>{' '}
                  for selection guidance, fit recommendations, and interchange review.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-10 grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
          <section className="surface-panel rounded-[1.8rem] overflow-hidden">
            <div className="border-b border-border bg-white/70 px-6 py-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-600">Technical data</p>
              <h2 className="mt-2 text-3xl font-bold text-steel-950" style={{ fontFamily: 'var(--font-heading)' }}>
                Specifications
              </h2>
            </div>
            <div className="px-6 py-3">
              <table className="w-full text-sm">
                <tbody>
                  {specRows.map(([label, value]) => (
                    <tr key={label} className="border-b border-steel-100 last:border-b-0">
                      <td className="py-3 pr-4 font-semibold text-steel-700">{label}</td>
                      <td className="py-3 text-steel-600">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <div className="grid gap-8">
            {product.dimensionsTable && product.dimensionsTable.length > 0 && (
              <section className="surface-panel rounded-[1.8rem] overflow-hidden">
                <div className="border-b border-border bg-white/70 px-6 py-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-600">Dimension table</p>
                  <h2 className="mt-2 text-3xl font-bold text-steel-950" style={{ fontFamily: 'var(--font-heading)' }}>
                    Dimensions
                  </h2>
                </div>
                <div className="px-6 py-3">
                  <table className="w-full text-sm">
                    <tbody>
                      {product.dimensionsTable.map((row) => (
                        <tr key={row.label} className="border-b border-steel-100 last:border-b-0">
                          <td className="py-3 pr-4 font-semibold text-steel-700">{row.label}</td>
                          <td className="py-3 text-steel-600">
                            {row.value} {row.unit}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {product.applications.length > 0 && (
              <section className="surface-panel rounded-[1.8rem] p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-600">Application fit</p>
                <h2 className="mt-2 text-3xl font-bold text-steel-950" style={{ fontFamily: 'var(--font-heading)' }}>
                  Applications
                </h2>
                <div className="mt-5 flex flex-wrap gap-2">
                  {product.applications.map((app) => (
                    <span
                      key={app}
                      className="rounded-full border border-steel-200 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-steel-600"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {product.technicalNotes && (
              <section className="surface-panel rounded-[1.8rem] p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-600">Technical notes</p>
                <h2 className="mt-2 text-3xl font-bold text-steel-950" style={{ fontFamily: 'var(--font-heading)' }}>
                  Notes
                </h2>
                <p className="mt-4 text-sm leading-8 text-steel-600">{product.technicalNotes}</p>
              </section>
            )}

            {product.documents.length > 0 && (
              <section className="surface-panel rounded-[1.8rem] p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-600">Downloads</p>
                <h2 className="mt-2 text-3xl font-bold text-steel-950" style={{ fontFamily: 'var(--font-heading)' }}>
                  Supporting files
                </h2>
                <ul className="mt-5 space-y-3">
                  {product.documents.map((doc) => (
                    <li key={doc.url}>
                      <a
                        href={doc.url}
                        className="flex items-center justify-between rounded-[1.2rem] border border-steel-200 bg-white px-4 py-4 text-sm text-steel-700 hover:border-blue-400 hover:text-blue-600"
                      >
                        <span>{doc.title}</span>
                        <span className="text-xs text-steel-500">{doc.fileSize}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {[
            {
              title: 'Shipping',
              desc: 'Same-day shipping on in-stock orders placed before 2 PM EST. Expedited options available.',
              href: '/shipping',
            },
            {
              title: 'Returns',
              desc: 'Unused bearings may be returned within 30 days. See our return policy for details.',
              href: '/returns',
            },
            {
              title: 'Warranty',
              desc: 'Standard manufacturer warranty support with technical follow-through when issues arise.',
              href: '/returns',
            },
          ].map((item) => (
            <Link key={item.title} href={item.href} className="surface-card hover-lift rounded-[1.6rem] p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-600">{item.title}</p>
              <p className="mt-3 text-sm leading-7 text-steel-600">{item.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
