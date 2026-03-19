'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

const resources = [
  {
    title: 'Bearing Selector Guide',
    desc: 'A guided starting point for matching load, speed, and application needs to the right bearing family.',
    href: '/resources/selector-guide',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
  },
  {
    title: 'Cross Reference',
    desc: 'Interchange help for part numbers across widely used bearing brands and series.',
    href: '/resources/interchange',
    icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4',
  },
  {
    title: 'Fit & Tolerance',
    desc: 'Clearer guidance for shaft fits, housing fits, and practical mounting choices.',
    href: '/resources/fit-tolerance',
    icon: 'M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4',
  },
  {
    title: 'Lubrication Guide',
    desc: 'Grease and oil recommendations positioned as usable support content instead of filler.',
    href: '/resources/lubrication-guide',
    icon: 'M19.4 15.4a2 2 0 00-1-.5l-2.4-.5a6 6 0 00-3.9.5l-.3.2a6 6 0 01-3.9.5l-1.9-.4a2 2 0 00-1.8.5M8 4h8l-1 1v5.2a2 2 0 00.6 1.4l5 5c1.3 1.3.4 3.4-1.4 3.4H4.8c-1.8 0-2.7-2.1-1.4-3.4l5-5A2 2 0 009 10.2V5L8 4z',
  },
  {
    title: 'Damage Analysis',
    desc: 'A more organized route into troubleshooting, wear review, and failure pattern identification.',
    href: '/resources/damage-analysis',
    icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
  },
  {
    title: 'Downloads',
    desc: 'Datasheets, certificates, and supporting files presented more like a technical library.',
    href: '/resources/downloads',
    icon: 'M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.6a1 1 0 01.7.3l5.4 5.4a1 1 0 01.3.7V19a2 2 0 01-2 2z',
  },
];

export default function ResourcesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [featured, ...secondary] = resources;

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

    const animated = sectionRef.current?.querySelectorAll('.fade-up');
    animated?.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative mx-auto max-w-[1400px] overflow-hidden px-4 py-24">
      <div className="deco-text absolute left-[-3%] top-[8%] opacity-20">03</div>

      <div className="fade-up text-center">
        <span className="section-kicker accent-line-center">Technical Resources</span>
        <h2 className="section-title mt-4 text-steel-950">Support content that feels useful and intentionally organized.</h2>
        <p className="section-copy mx-auto mt-5 max-w-3xl">
          The resource area now reads more like an engineering library, which reinforces trust with technical buyers
          and gives the site more depth beyond simple catalog browsing.
        </p>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Link href={featured.href} className="fade-up surface-card hover-lift group rounded-[2rem] p-7 md:p-8">
          <div className="flex h-14 w-14 items-center justify-center rounded-[1.2rem] bg-navy-900 text-amber-400">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={featured.icon} />
            </svg>
          </div>
          <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-600">
            Featured guide
          </p>
          <h3 className="mt-3 text-4xl font-bold text-steel-950" style={{ fontFamily: 'var(--font-heading)' }}>
            {featured.title}
          </h3>
          <p className="mt-4 max-w-2xl text-base leading-8 text-steel-600">{featured.desc}</p>
          <div className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 group-hover:text-blue-500">
            Open guide
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </Link>

        <div className="grid gap-5 sm:grid-cols-2">
          {secondary.map((resource) => (
            <Link
              key={resource.href}
              href={resource.href}
              className="fade-up surface-card hover-lift group rounded-[1.8rem] p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-[1rem] bg-steel-100 text-navy-900">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={resource.icon} />
                </svg>
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-steel-950" style={{ fontFamily: 'var(--font-heading)' }}>
                {resource.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-steel-600">{resource.desc}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 group-hover:text-blue-500">
                Explore
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
