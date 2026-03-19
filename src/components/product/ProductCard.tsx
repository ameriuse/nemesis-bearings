import Link from 'next/link';
import { Product } from '@/types/product';
import { AvailabilityBadge } from '@/components/ui/Badge';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card bg-surface border border-border rounded-xl overflow-hidden group">
      {/* Image */}
      <Link href={`/shop/${product.category}/${product.slug}`} className="block bg-steel-50 p-8 relative overflow-hidden">
        <div className="w-full aspect-square flex items-center justify-center">
          <div className="product-img text-steel-300">
            <svg className="w-28 h-28 opacity-25" viewBox="0 0 100 100" fill="currentColor">
              <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="4"/>
              <circle cx="50" cy="50" r="16" fill="currentColor" opacity="0.3"/>
              <circle cx="50" cy="50" r="28" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5 3"/>
              {[0, 60, 120, 180, 240, 300].map((a) => {
                const r = (a * Math.PI) / 180;
                return <circle key={a} cx={50 + 28 * Math.cos(r)} cy={50 + 28 * Math.sin(r)} r="5" fill="currentColor" opacity="0.4" />;
              })}
            </svg>
          </div>
        </div>
        {product.images[0]?.isRepresentative && (
          <span className="absolute bottom-2 right-3 text-[10px] text-steel-400 italic">Representative</span>
        )}

        {/* Quick actions overlay */}
        <div className="absolute inset-0 bg-navy-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
          <span className="bg-white text-navy-900 px-4 py-2 rounded-md text-xs font-bold uppercase tracking-wider">
            View Details
          </span>
        </div>
      </Link>

      {/* Info */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <Link href={`/shop/${product.category}/${product.slug}`} className="group-hover:text-amber-600 transition-colors">
            <h3 className="font-bold text-sm leading-tight" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '0.3px' }}>
              {product.name}
            </h3>
          </Link>
        </div>

        <p className="part-number text-muted mb-1">#{product.partNumber}</p>

        {/* Inline specs */}
        <div className="flex gap-3 text-[11px] text-steel-500 mb-2 font-mono">
          <span>{product.boreID}×{product.outerDiameter}×{product.width}mm</span>
          <span>{product.dynamicLoadRating}kN</span>
        </div>

        <div className="mb-3">
          <AvailabilityBadge status={product.availability} />
        </div>

        {/* Cross-ref */}
        {product.comparableBrands.length > 0 && (
          <p className="text-[10px] text-steel-500 mb-3 leading-relaxed">
            Xref: {product.comparableBrands.slice(0, 2).join(', ')}
            {product.comparableBrands.length > 2 && ` +${product.comparableBrands.length - 2}`}
          </p>
        )}

        {/* Price & Actions */}
        <div className="border-t border-border pt-3">
          <div className="flex items-center justify-between mb-3">
            {product.quoteOnly ? (
              <span className="text-sm font-bold text-steel-700">Quote Required</span>
            ) : (
              <span className="text-xl font-black text-navy-900" style={{ fontFamily: 'var(--font-heading)' }}>
                ${product.unitPrice?.toFixed(2)}
              </span>
            )}
            <span className="text-[10px] text-steel-400 uppercase tracking-wider">{product.leadTime}</span>
          </div>

          <div className="flex gap-2">
            {product.quoteOnly ? (
              <Link
                href={`/quote?part=${product.partNumber}`}
                className="flex-1 text-center btn-amber text-xs py-2"
              >
                GET QUOTE
              </Link>
            ) : (
              <button className="flex-1 btn-amber text-xs py-2">
                ADD TO CART
              </button>
            )}
            <Link
              href={`/quote?part=${product.partNumber}`}
              className="px-3 py-2 border border-border rounded-md text-steel-600 hover:border-amber-500 hover:text-amber-600 transition-colors"
              title="Request quote"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
