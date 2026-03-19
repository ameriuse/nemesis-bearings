'use client';

import { sampleProducts } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function FeaturedProducts() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll('.fade-up, .scale-up');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-steel-100 py-24 overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-40" />

      <div className="relative max-w-[1400px] mx-auto px-4">
        <div className="flex items-end justify-between mb-12 fade-up">
          <div>
            <div className="accent-line mb-4" />
            <span className="text-amber-600 text-xs font-bold uppercase tracking-[3px]">Popular Items</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wide mt-3" style={{ fontFamily: 'var(--font-heading)' }}>
              Featured Bearings
            </h2>
          </div>
          <Link href="/shop" className="hidden md:flex items-center gap-2 text-navy-900 font-bold text-sm uppercase tracking-wider hover:text-amber-600 transition-colors group">
            View All
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
          {sampleProducts.map((product) => (
            <div key={product.id} className="fade-up">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="text-center mt-10 md:hidden">
          <Link href="/shop" className="text-amber-600 font-bold text-sm uppercase tracking-wider hover:underline">
            View All Products &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
