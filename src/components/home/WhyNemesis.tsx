'use client';

import { useEffect, useRef } from 'react';

const features = [
  {
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    title: 'Quality Inspection',
    description: 'Every shipment undergoes incoming inspection. Dimensional verification, visual inspection, and documentation review.',
    number: '01',
  },
  {
    icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4',
    title: 'Cross-Reference',
    description: 'Interchange assistance for major industry bearing series. We help identify the right replacement.',
    number: '02',
  },
  {
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    title: 'Fast Availability',
    description: 'Same-day shipping on in-stock items. Expedited orders available. Transparent lead times.',
    number: '03',
  },
  {
    icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    title: 'Technical Support',
    description: 'Application engineering from experienced bearing specialists. Selection, fit, lubrication, troubleshooting.',
    number: '04',
  },
  {
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
    title: 'Batch Traceability',
    description: 'Full batch tracking. Documentation and certificates of conformance available upon request.',
    number: '05',
  },
  {
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
    title: 'Dedicated Accounts',
    description: 'Volume pricing, scheduled deliveries, and dedicated support for recurring industrial customers.',
    number: '06',
  },
];

export default function WhyNemesis() {
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
    const els = sectionRef.current?.querySelectorAll('.fade-up, .fade-left, .fade-right');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative max-w-[1400px] mx-auto px-4 py-24 overflow-hidden">
      {/* Decorative background */}
      <div className="deco-text absolute top-[5%] left-[-3%] opacity-20">
        02
      </div>

      <div className="text-center mb-16 fade-up">
        <div className="accent-line accent-line-center mb-4" />
        <span className="text-amber-600 text-xs font-bold uppercase tracking-[3px]">Why Choose Us</span>
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wide mt-3 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
          Built for Industry
        </h2>
        <p className="text-muted mt-3 max-w-xl mx-auto text-lg">
          Reliable bearing solutions with transparent sourcing, real technical support, and straightforward terms.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="fade-up group relative bg-surface border border-border rounded-xl p-7 hover:border-amber-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl overflow-hidden"
          >
            {/* Background number */}
            <span className="absolute top-3 right-4 text-[72px] font-black text-steel-100/60 group-hover:text-amber-500/[0.06] transition-colors duration-500 leading-none" style={{ fontFamily: 'var(--font-heading)' }}>
              {feature.number}
            </span>

            {/* Hover gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/[0.02] group-hover:to-amber-500/[0.05] transition-all duration-500 rounded-xl" />

            <div className="relative">
              <div className="w-14 h-14 rounded-xl bg-navy-900 flex items-center justify-center mb-5 group-hover:bg-amber-500 group-hover:shadow-lg group-hover:shadow-amber-500/20 transition-all duration-500">
                <svg className="w-6 h-6 text-amber-500 group-hover:text-navy-900 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                </svg>
              </div>
              <h3 className="font-bold text-base uppercase tracking-wider mb-3 group-hover:text-amber-600 transition-colors duration-300" style={{ fontFamily: 'var(--font-heading)' }}>
                {feature.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
