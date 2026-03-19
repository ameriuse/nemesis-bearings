'use client';

import Link from 'next/link';
import { categories } from '@/data/products';
import { useEffect, useRef } from 'react';

const categoryIcons: Record<string, string> = {
  'ball-bearings': 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14a4 4 0 110-8 4 4 0 010 8z',
  'roller-bearings': 'M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z',
  'spherical-bearings': 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93z',
  'thrust-bearings': 'M12 2l-5.5 9h11L12 2zm0 3.84L13.93 9h-3.87L12 5.84zM17.5 13c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5z',
  'mounted-units': 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM12 8a4 4 0 100 8 4 4 0 000-8z',
  'housings': 'M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z',
  'seals-and-accessories': 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z',
};

export default function CategoryGrid() {
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
    <section ref={sectionRef} className="relative max-w-[1400px] mx-auto px-4 py-24 overflow-hidden">
      {/* Decorative background number */}
      <div className="deco-text absolute top-0 right-[-5%] opacity-20">
        01
      </div>

      <div className="fade-up text-center mb-16">
        <div className="accent-line accent-line-center mb-4" />
        <span className="text-amber-600 text-xs font-bold uppercase tracking-[3px]">Browse By Category</span>
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wide mt-3 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
          Product Categories
        </h2>
        <p className="text-muted max-w-xl mx-auto text-lg">
          Browse our full catalog of industrial bearings, mounted units, and accessories.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 stagger-children">
        {categories.map((cat, i) => (
          <Link
            key={cat.slug}
            href={`/shop/${cat.slug}`}
            className="fade-up group relative bg-navy-900 rounded-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-2"
          >
            {/* Hover gradient reveal */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/0 to-amber-500/0 group-hover:from-amber-500/5 group-hover:via-transparent group-hover:to-amber-500/10 transition-all duration-500" />

            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative p-7 flex flex-col min-h-[180px] justify-between">
              {/* Category number */}
              <span className="absolute top-4 right-4 text-[64px] font-black text-white/[0.02] group-hover:text-amber-500/[0.06] transition-colors duration-500 leading-none" style={{ fontFamily: 'var(--font-heading)' }}>
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-5 group-hover:bg-amber-500/20 group-hover:border-amber-500/40 group-hover:shadow-lg group-hover:shadow-amber-500/10 transition-all duration-500">
                <svg className="w-6 h-6 text-amber-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d={categoryIcons[cat.slug] || 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14a4 4 0 110-8 4 4 0 010 8z'} />
                </svg>
              </div>

              <div>
                <h3 className="font-bold text-white text-base mb-1.5 group-hover:text-amber-400 transition-colors duration-300" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '0.5px' }}>
                  {cat.name.toUpperCase()}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-steel-600 group-hover:text-steel-500 transition-colors">{cat.productCount} products</span>
                  <div className="flex items-center gap-1 text-steel-600 group-hover:text-amber-500 transition-all duration-300">
                    <span className="text-[10px] uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">View</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
