import Link from 'next/link';
import { Product } from '@/types/product';
import { AvailabilityBadge, CategoryBadge } from '@/components/ui/Badge';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card surface-card card-premium group overflow-hidden">
      <Link
        href={`/shop/${product.category}/${product.slug}`}
        className="relative block overflow-hidden border-b border-border bg-navy-950 p-6"
      >
        <div
          className="absolute inset-0 opacity-80"
          style={{
            background:
              'radial-gradient(circle at top left, rgba(243,179,92,0.22), transparent 40%), radial-gradient(circle at bottom right, rgba(77,131,255,0.22), transparent 42%)',
          }}
        />
        <div className="relative flex aspect-square items-center justify-center">
          <div className="product-img text-white/75">
            <svg className="h-32 w-32" viewBox="0 0 100 100" fill="currentColor">
              <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="3" />
              <circle cx="50" cy="50" r="14" fill="currentColor" opacity="0.28" />
              <circle
                cx="50"
                cy="50"
                r="25"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="5 4"
              />
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
        </div>

        <div className="relative mt-4 flex items-center justify-between gap-3">
          <CategoryBadge label={product.category.replaceAll('-', ' ')} />
          {product.images[0]?.isRepresentative && (
            <span className="text-[10px] uppercase tracking-[0.18em] text-white/60">
              Representative
            </span>
          )}
        </div>
      </Link>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="part-number text-steel-500">#{product.partNumber}</p>
            <Link href={`/shop/${product.category}/${product.slug}`}>
              <h3
                className="mt-2 text-lg font-semibold text-steel-900 group-hover:text-blue-600"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {product.name}
              </h3>
            </Link>
          </div>
          <AvailabilityBadge status={product.availability} />
        </div>

        <p className="mt-3 line-clamp-2 text-sm leading-6 text-steel-600">
          {product.shortDescription}
        </p>

        <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-steel-500">
          <span className="rounded-full bg-steel-100 px-3 py-1.5">{product.boreID} mm bore</span>
          <span className="rounded-full bg-steel-100 px-3 py-1.5">{product.outerDiameter} mm od</span>
          <span className="rounded-full bg-steel-100 px-3 py-1.5">{product.dynamicLoadRating} kN</span>
        </div>

        {product.comparableBrands.length > 0 && (
          <p className="mt-4 text-xs leading-5 text-steel-500">
            Xref: {product.comparableBrands.slice(0, 2).join(', ')}
            {product.comparableBrands.length > 2 && ` +${product.comparableBrands.length - 2} more`}
          </p>
        )}

        <div className="mt-5 flex items-end justify-between gap-4 border-t border-border pt-4">
          <div>
            {product.quoteOnly ? (
              <p className="text-sm font-semibold text-steel-800">Quote required</p>
            ) : (
              <p className="text-2xl font-bold text-navy-950" style={{ fontFamily: 'var(--font-heading)' }}>
                ${product.unitPrice?.toFixed(2)}
              </p>
            )}
            <p className="text-xs uppercase tracking-[0.16em] text-steel-500">{product.leadTime}</p>
          </div>

          <div className="flex gap-2">
            {product.quoteOnly ? (
              <Link href={`/quote?part=${product.partNumber}`} className="btn-amber !px-4 !py-3 text-[11px]">
                Get Quote
              </Link>
            ) : (
              <button className="btn-dark !px-4 !py-3 text-[11px]">Add To Cart</button>
            )}
            <Link
              href={`/shop/${product.category}/${product.slug}`}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-steel-600 hover:border-blue-500/20 hover:text-blue-600"
              title="View product details"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
