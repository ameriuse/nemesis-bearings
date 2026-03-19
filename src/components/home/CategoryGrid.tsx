'use client';

import Link from 'next/link';
import { categories } from '@/data/products';
import { useEffect, useRef } from 'react';

const categoryIcons: Record<string, string> = {
  'ball-bearings': 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14a4 4 0 110-8 4 4 0 010 8z',
  'roller-bearings': 'M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z',
  'spherical-bearings': 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 0c-4.42 0-8 3.58-8 8 0 3.74 2.57 6.88 6.03 7.74L10 12l4-4 3.97-.26C16.73 4.78 14.33 2 12 2z',
  'thrust-bearings': 'M12 3l5.5 8H6.5L12 3zm0 4.1L10.15 10h3.7L12 7.1zM17.5 13a4.5 4.5 0 100 9 4.5 4.5 0 000-9z',
  'mounted-units': 'M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-7 13a4 4 0 110-8 4 4 0 010 8z',
  housings: 'M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z',
  'seals-and-accessories': 'M12 2a10 10 0 100 20 10 10 0 000-20zm0 15a5 5 0 110-10 5 5 0 010 10z',
};

export default function CategoryGrid() {
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
    <section ref={sectionRef} className="relative mx-auto max-w-[1400px] overflow-hidden px-4 py-24">
      <div className="deco-text absolute right-[-4%] top-[5%] opacity-25">01</div>

      <div className="fade-up flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <span className="section-kicker">Catalog Structure</span>
          <h2 className="section-title mt-4 text-steel-950">A cleaner path into the product families buyers search most.</h2>
          <p className="section-copy mt-5">
            The catalog now reads more like an industrial storefront: clearer category entry points,
            better product context, and faster access to the route that matters.
          </p>
        </div>
        <div className="surface-card max-w-md rounded-[1.6rem] p-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-600">
            Quick summary
          </p>
          <p className="mt-3 text-sm leading-7 text-steel-600">
            Ball, roller, spherical, thrust, mounted units, housings, and accessories all sit on the same
            visual system so the site feels more complete instead of stitched together.
          </p>
        </div>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4 stagger-children">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/shop/${cat.slug}`}
            className="fade-up surface-card hover-lift group flex h-full flex-col rounded-[1.8rem] p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-[1.2rem] bg-navy-900 text-amber-400">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d={categoryIcons[cat.slug] || categoryIcons['ball-bearings']} />
                </svg>
              </div>
              <span className="rounded-full bg-steel-100 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-steel-600">
                {cat.productCount} SKUs
              </span>
            </div>

            <div className="mt-6">
              <h3 className="text-2xl font-semibold text-steel-950" style={{ fontFamily: 'var(--font-heading)' }}>
                {cat.name}
              </h3>
              <p className="mt-3 text-sm leading-7 text-steel-600">{cat.description}</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {cat.subcategories.slice(0, 3).map((sub) => (
                <span
                  key={sub.slug}
                  className="rounded-full border border-steel-200 bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-steel-500"
                >
                  {sub.name}
                </span>
              ))}
            </div>

            <div className="mt-auto pt-8">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 group-hover:text-blue-500">
                Browse category
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
