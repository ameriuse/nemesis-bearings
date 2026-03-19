'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

const features = [
  {
    title: 'Commercial Clarity',
    description: 'Lead time, MOQ, quote handling, and alternate options are easier to understand throughout the catalog.',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.6a1 1 0 01.7.3l5.4 5.4a1 1 0 01.3.7V19a2 2 0 01-2 2z',
  },
  {
    title: 'Technical Confidence',
    description: 'Cross-reference, load, dimensions, fit, and application guidance are surfaced in a more structured way.',
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    title: 'Faster Decisions',
    description: 'The updated layout is more scannable on both desktop and mobile, which reduces friction for urgent sourcing.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    title: 'Stronger Brand Signal',
    description: 'Typography, spacing, and surfaces now look intentional, which makes the business feel more established online.',
    icon: 'M12 2l7 4v6c0 5-3.4 9.8-7 10-3.6-.2-7-5-7-10V6l7-4z',
  },
];

const outcomeStats = [
  { value: 'Same-day', label: 'handling on stocked orders' },
  { value: '4 hrs', label: 'target quote reply during business hours' },
  { value: 'Traceable', label: 'lot and documentation workflows' },
];

export default function WhyNemesis() {
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

    const animated = sectionRef.current?.querySelectorAll('.fade-up, .fade-left, .fade-right');
    animated?.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative mx-auto max-w-[1400px] overflow-hidden px-4 py-24">
      <div className="deco-text absolute left-[-3%] top-[10%] opacity-20">02</div>

      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="fade-left surface-panel rounded-[2rem] p-7 md:p-8">
          <span className="section-kicker">Why The Redesign Helps</span>
          <h2 className="mt-4 text-4xl font-bold text-steel-950 md:text-5xl" style={{ fontFamily: 'var(--font-heading)' }}>
            More than a prettier homepage. The whole buying path reads better.
          </h2>
          <p className="mt-5 text-base leading-8 text-steel-600">
            The refresh makes the site feel like a serious industrial supplier instead of a starter template.
            Shared components, consistent spacing, stronger hierarchy, and cleaner product presentation now work together.
          </p>

          <div className="mt-7 grid gap-3">
            {outcomeStats.map((stat) => (
              <div key={stat.label} className="rounded-[1.4rem] border border-steel-200 bg-white/82 px-5 py-4">
                <p className="text-2xl font-bold text-navy-950" style={{ fontFamily: 'var(--font-heading)' }}>
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-steel-600">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/quality" className="btn-dark">
              View Quality
            </Link>
            <Link href="/contact" className="btn-outline">
              Contact Team
            </Link>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 stagger-children">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="fade-up surface-card hover-lift rounded-[1.8rem] p-6"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-[1.2rem] bg-navy-900 text-amber-400">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={feature.icon} />
                </svg>
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-steel-950" style={{ fontFamily: 'var(--font-heading)' }}>
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-steel-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
