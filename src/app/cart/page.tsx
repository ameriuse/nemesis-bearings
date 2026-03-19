import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';

export const metadata: Metadata = {
  title: 'Shopping Cart',
  description: 'Review your shopping cart and proceed to checkout or request a quote.',
};

export default function CartPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Cart' },
      ]} />

      <h1 className="text-3xl font-extrabold mb-8" style={{ fontFamily: 'var(--font-heading)' }}>Shopping Cart</h1>

      {/* Empty State */}
      <div className="bg-surface border border-border rounded-xl p-12 text-center">
        <svg className="w-20 h-20 text-steel-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
        </svg>
        <h2 className="text-xl font-bold mb-2">Your cart is empty</h2>
        <p className="text-muted mb-6">Browse our catalog to find the bearings you need.</p>
        <div className="flex justify-center gap-4">
          <Link href="/shop" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-blue-500 transition-colors">
            Browse Catalog
          </Link>
          <Link href="/quote" className="border border-border px-6 py-3 rounded-lg font-semibold text-sm hover:bg-steel-100 transition-colors">
            Request a Quote
          </Link>
        </div>
      </div>

      {/* Cart Table Structure (hidden when empty, shown when items exist) */}
      {/* In production, this would be a client component with state management */}
      <div className="hidden">
        <div className="bg-surface border border-border rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-steel-100 border-b border-border">
                <th className="text-left px-4 py-3 font-semibold">Product</th>
                <th className="text-left px-4 py-3 font-semibold">Part #</th>
                <th className="text-right px-4 py-3 font-semibold">Price</th>
                <th className="text-center px-4 py-3 font-semibold">Qty</th>
                <th className="text-right px-4 py-3 font-semibold">Subtotal</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody id="cart-body"></tbody>
          </table>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-6">
          <Link href="/shop" className="text-blue-600 font-medium text-sm hover:underline">
            &larr; Continue Shopping
          </Link>
          <div className="text-right">
            <p className="text-2xl font-extrabold mb-3">Total: $0.00</p>
            <div className="flex gap-3">
              <Link href="/quote" className="border border-border px-6 py-3 rounded-lg font-semibold text-sm hover:bg-steel-100 transition-colors">
                Request Quote Instead
              </Link>
              <Link href="/checkout" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-sm hover:bg-blue-500 transition-colors">
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
