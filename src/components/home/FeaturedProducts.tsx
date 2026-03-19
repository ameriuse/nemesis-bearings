'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import ProductCard from '@/components/product/ProductCard';
import { sampleProducts } from '@/data/products';

export default function FeaturedProducts() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );

    const animated = sectionRef.current?.querySelectorAll('.fade-up, .scale-up');
    animated?.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-steel-100/70 py-24">
      <div className="absolute inset-0 dot-pattern opacity-40" />
      <div className="relative mx-auto max-w-[1400px] px-4">
        <div className="fade-up grid gap-8 lg:grid-cols-[1fr_0.56fr] lg:items-end">
          <div>
            <span className="section-kicker">Featured Inventory</span>
            <h2 className="section-title mt-4 text-steel-950">Products presented with stronger hierarchy and cleaner buying cues.</h2>
            <p className="section-copy mt-5 max-w-3xl">
              Product cards now feel more commercial and trustworthy: clearer specs, better cross-reference context,
              stronger pricing emphasis, and more deliberate action buttons.
            </p>
          </div>
          <div className="surface-panel rounded-[1.8rem] p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-600">
              Why this matters
            </p>
            <p className="mt-3 text-sm leading-7 text-steel-600">
              Buyers can scan dimensions, load rating, availability, and commercial status at a glance without
              losing the premium visual feel of the site.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/shop" className="btn-dark">
                View All Products
              </Link>
              <Link href="/quote" className="btn-outline">
                Send RFQ
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4 stagger-children">
          {sampleProducts.map((product) => (
            <div key={product.id} className="fade-up">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
