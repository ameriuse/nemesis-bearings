import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProductBySlug, sampleProducts, getCategoryBySlug } from '@/data/products';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { AvailabilityBadge } from '@/components/ui/Badge';

interface Props {
  params: Promise<{ category: string; product: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { product: slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: 'Product Not Found' };
  return {
    title: product.metaTitle,
    description: product.metaDescription,
  };
}

export function generateStaticParams() {
  return sampleProducts.map((p) => ({
    category: p.category,
    product: p.slug,
  }));
}

export default async function ProductPage({ params }: Props) {
  const { category, product: slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const cat = getCategoryBySlug(category);

  // Product JSON-LD
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
        availability: product.availability === 'in-stock'
          ? 'https://schema.org/InStock'
          : 'https://schema.org/PreOrder',
        seller: { '@type': 'Organization', name: 'Nemesis Bearings' },
      },
    }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Shop', href: '/shop' },
          { label: cat?.name || product.category, href: `/shop/${product.category}` },
          { label: product.partNumber },
        ]} />

        {/* Above the Fold */}
        <div className="grid lg:grid-cols-2 gap-10 mb-12">
          {/* Image Gallery */}
          <div className="bg-surface border border-border rounded-xl p-8 flex items-center justify-center min-h-[400px] relative">
            <div className="text-steel-400">
              <svg className="w-40 h-40 opacity-20" viewBox="0 0 100 100" fill="currentColor">
                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="3"/>
                <circle cx="50" cy="50" r="15" fill="currentColor" opacity="0.3"/>
                <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4"/>
              </svg>
            </div>
            {product.images[0]?.isRepresentative && (
              <p className="absolute bottom-4 right-4 text-xs text-steel-500 italic">Representative image only</p>
            )}
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
              {product.name}
            </h1>
            <p className="text-muted text-sm mb-1">Part #: <strong className="text-foreground">{product.partNumber}</strong></p>
            <p className="text-muted text-sm mb-4">SKU: {product.sku}</p>

            <div className="flex items-center gap-3 mb-4">
              <AvailabilityBadge status={product.availability} />
              <span className="text-sm text-muted">{product.leadTime}</span>
            </div>

            {/* Comparable brands */}
            {product.comparableBrands.length > 0 && (
              <div className="bg-steel-100 rounded-lg p-3 mb-5">
                <p className="text-xs font-semibold text-steel-700 mb-1">Cross-reference / Interchange</p>
                <p className="text-sm text-steel-600">
                  {product.comparableBrands.join(' | ')}
                </p>
                <p className="text-xs text-steel-500 mt-1 italic">
                  Trademarks are property of their respective owners, used for cross-reference only.
                </p>
              </div>
            )}

            {/* Price */}
            <div className="border-t border-b border-border py-4 mb-5">
              {product.quoteOnly ? (
                <p className="text-lg font-bold">Price: Contact for Quote</p>
              ) : (
                <p className="text-3xl font-extrabold">${product.unitPrice?.toFixed(2)} <span className="text-sm font-normal text-muted">/ each</span></p>
              )}
              {product.moq > 1 && (
                <p className="text-xs text-muted mt-1">Minimum order: {product.moq} units</p>
              )}
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <div className="flex items-center gap-2">
                <label htmlFor="qty" className="text-sm font-medium">Qty:</label>
                <input
                  id="qty"
                  type="number"
                  defaultValue={1}
                  min={product.moq}
                  className="w-20 border border-border rounded-lg px-3 py-2.5 text-sm text-center"
                />
              </div>
              {product.quoteOnly ? (
                <Link
                  href={`/quote?part=${product.partNumber}`}
                  className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold text-center hover:bg-blue-500 transition-colors"
                >
                  Request a Quote
                </Link>
              ) : (
                <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-500 transition-colors">
                  Add to Cart
                </button>
              )}
              <Link
                href={`/quote?part=${product.partNumber}`}
                className="px-5 py-3 border border-border rounded-lg font-semibold text-sm text-center hover:bg-steel-100 transition-colors"
              >
                Add to Quote Cart
              </Link>
            </div>

            <p className="text-sm text-muted">{product.shortDescription}</p>

            {/* Quick Support */}
            <div className="mt-6 bg-blue-50 rounded-lg p-4 flex items-start gap-3">
              <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <div>
                <p className="text-sm font-semibold text-steel-900">Need technical help?</p>
                <p className="text-xs text-steel-600">
                  Call <a href="tel:+19154010626" className="text-blue-600 hover:underline">(915) 401-0626</a> or{' '}
                  <Link href="/support" className="text-blue-600 hover:underline">contact support</Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Below the Fold - Tabs */}
        <div className="bg-surface border border-border rounded-xl overflow-hidden mb-12">
          {/* Specifications */}
          <div className="border-b border-border">
            <h2 className="font-bold text-lg px-6 py-4 bg-steel-100" style={{ fontFamily: 'var(--font-heading)' }}>
              Specifications
            </h2>
            <div className="p-6">
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ['Bore (d)', `${product.boreID} mm`],
                    ['Outer Diameter (D)', `${product.outerDiameter} mm`],
                    ['Width (B)', `${product.width} mm`],
                    ['Dynamic Load Rating', `${product.dynamicLoadRating} kN`],
                    ['Static Load Rating', `${product.staticLoadRating} kN`],
                    ['Max Speed', `${product.maxSpeed} RPM`],
                    ['Temperature Range', `${product.temperatureRange.min}°C to ${product.temperatureRange.max}°C`],
                    ['Seal Type', product.sealType],
                    ['Clearance', product.clearance],
                    ['Precision', product.precisionRating],
                    ['Cage Material', product.cageMaterial],
                    ['Ring Material', product.ringMaterial],
                    ['Lubrication', product.lubricationType],
                    ['Relubrication', product.relubricationAllowed ? 'Yes' : 'No'],
                    ['Mounting Style', product.mountingStyle],
                    ['Locking Style', product.lockingStyle || 'N/A'],
                  ].map(([label, value]) => (
                    <tr key={label} className="border-b border-steel-100 last:border-0">
                      <td className="py-2.5 pr-4 font-medium text-steel-700 w-1/3">{label}</td>
                      <td className="py-2.5">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Dimensions Table */}
          {product.dimensionsTable && product.dimensionsTable.length > 0 && (
            <div className="border-b border-border">
              <h2 className="font-bold text-lg px-6 py-4 bg-steel-100" style={{ fontFamily: 'var(--font-heading)' }}>
                Dimensions
              </h2>
              <div className="p-6">
                <table className="w-full text-sm">
                  <tbody>
                    {product.dimensionsTable.map((row) => (
                      <tr key={row.label} className="border-b border-steel-100 last:border-0">
                        <td className="py-2.5 pr-4 font-medium text-steel-700 w-1/3">{row.label}</td>
                        <td className="py-2.5">{row.value} {row.unit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Applications */}
          {product.applications.length > 0 && (
            <div className="border-b border-border">
              <h2 className="font-bold text-lg px-6 py-4 bg-steel-100" style={{ fontFamily: 'var(--font-heading)' }}>
                Applications
              </h2>
              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((app) => (
                    <span key={app} className="bg-steel-100 text-steel-700 px-3 py-1.5 rounded-lg text-sm">
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Technical Notes */}
          {product.technicalNotes && (
            <div className="border-b border-border">
              <h2 className="font-bold text-lg px-6 py-4 bg-steel-100" style={{ fontFamily: 'var(--font-heading)' }}>
                Technical Notes
              </h2>
              <div className="p-6">
                <p className="text-sm text-muted leading-relaxed">{product.technicalNotes}</p>
              </div>
            </div>
          )}

          {/* Documents */}
          {product.documents.length > 0 && (
            <div>
              <h2 className="font-bold text-lg px-6 py-4 bg-steel-100" style={{ fontFamily: 'var(--font-heading)' }}>
                Downloads
              </h2>
              <div className="p-6">
                <ul className="space-y-2">
                  {product.documents.map((doc) => (
                    <li key={doc.url}>
                      <a href={doc.url} className="flex items-center gap-3 text-sm text-blue-600 hover:underline">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                        {doc.title} ({doc.fileSize})
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Shipping / Returns Summary */}
        <div className="grid sm:grid-cols-3 gap-5 mb-12">
          {[
            { title: 'Shipping', desc: 'Same-day shipping on in-stock orders placed before 2 PM EST. Expedited options available.', href: '/shipping', icon: 'M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8' },
            { title: 'Returns', desc: 'Unused bearings may be returned within 30 days. See our return policy for details.', href: '/returns', icon: 'M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z' },
            { title: 'Warranty', desc: 'Standard manufacturer warranty. Contact us for warranty claims and technical support.', href: '/returns', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
          ].map((item) => (
            <Link key={item.title} href={item.href} className="bg-surface border border-border rounded-xl p-5 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-2">
                <svg className="w-5 h-5 text-steel-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} /></svg>
                <h3 className="font-semibold text-sm">{item.title}</h3>
              </div>
              <p className="text-xs text-muted">{item.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
