'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

const resources = [
  { title: 'Bearing Selector Guide', desc: 'Find the right bearing type for your application.', href: '/resources/selector-guide', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2', number: '01' },
  { title: 'Cross Reference', desc: 'Interchange part numbers across major brands.', href: '/resources/interchange', icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4', number: '02' },
  { title: 'Fit & Tolerance', desc: 'Shaft and housing fit recommendations.', href: '/resources/fit-tolerance', icon: 'M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4', number: '03' },
  { title: 'Lubrication Guide', desc: 'Grease and oil recommendations.', href: '/resources/lubrication-guide', icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z', number: '04' },
  { title: 'Damage Analysis', desc: 'Identify failure modes and root causes.', href: '/resources/damage-analysis', icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z', number: '05' },
  { title: 'Downloads', desc: 'Datasheets, CAD files, catalogs.', href: '/resources/downloads', icon: 'M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', number: '06' },
];

export default function ResourcesSection() {
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
    const els = sectionRef.current?.querySelectorAll('.fade-up');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative max-w-[1400px] mx-auto px-4 py-24 overflow-hidden">
      {/* Decorative background number */}
      <div className="deco-text absolute top-[5%] left-[-3%] opacity-20">
        03
      </div>

      <div className="text-center mb-16 fade-up">
        <div className="accent-line accent-line-center mb-4" />
        <span className="text-amber-600 text-xs font-bold uppercase tracking-[3px]">Technical Library</span>
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wide mt-3" style={{ fontFamily: 'var(--font-heading)' }}>
          Engineering Resources
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
        {resources.map((resource) => (
          <Link
            key={resource.href}
            href={resource.href}
            className="fade-up group relative bg-surface border border-border rounded-xl p-7 hover:shadow-xl hover:border-amber-500/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
          >
            {/* Hover gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/[0.02] group-hover:to-amber-500/[0.05] transition-all duration-500 rounded-xl" />

            {/* Top accent on hover */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Background number */}
            <span className="absolute top-2 right-4 text-[56px] font-black text-steel-100/50 group-hover:text-amber-500/[0.06] transition-colors duration-500 leading-none" style={{ fontFamily: 'var(--font-heading)' }}>
              {resource.number}
            </span>

            <div className="relative">
              <div className="w-12 h-12 bg-navy-900 rounded-xl flex items-center justify-center mb-5 group-hover:bg-amber-500 group-hover:shadow-lg group-hover:shadow-amber-500/20 transition-all duration-500">
                <svg className="w-5 h-5 text-amber-500 group-hover:text-navy-900 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={resource.icon} />
                </svg>
              </div>
              <h3 className="font-bold text-sm uppercase tracking-wider mb-2 group-hover:text-amber-600 transition-colors duration-300" style={{ fontFamily: 'var(--font-heading)' }}>
                {resource.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">{resource.desc}</p>

              {/* Arrow on hover */}
              <div className="mt-4 flex items-center gap-1 text-amber-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <span className="text-xs font-bold uppercase tracking-wider">Explore</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
