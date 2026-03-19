'use client';

import { useEffect, useRef } from 'react';

const industries = [
  { name: 'Mining & Quarry', icon: '⛏' },
  { name: 'Agriculture', icon: '🌾' },
  { name: 'Food & Beverage', icon: '🏭' },
  { name: 'Automotive', icon: '🚗' },
  { name: 'HVAC', icon: '❄' },
  { name: 'Manufacturing', icon: '⚙' },
  { name: 'Paper & Pulp', icon: '📄' },
  { name: 'Power Generation', icon: '⚡' },
  { name: 'Water Treatment', icon: '💧' },
  { name: 'Oil & Gas', icon: '🛢' },
  { name: 'Material Handling', icon: '📦' },
  { name: 'Textile', icon: '🧵' },
];

export default function IndustriesSection() {
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
    <section ref={sectionRef} className="relative bg-navy-900 diagonal-top py-28 overflow-hidden">
      <div className="absolute inset-0 grid-pattern" />

      <div
        className="absolute bottom-[-100px] right-[10%] w-[500px] h-[500px] rounded-full blur-[150px]"
        style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.05) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-[1400px] mx-auto px-4">
        <div className="text-center mb-16 fade-up">
          <div className="accent-line accent-line-center mb-4" />
          <span className="text-amber-500 text-xs font-bold uppercase tracking-[3px]">Applications</span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wide mt-3 text-white" style={{ fontFamily: 'var(--font-heading)' }}>
            Industries We Serve
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 stagger-children">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="fade-up group bg-navy-800/60 rounded-xl p-5 border border-navy-700/50 hover:border-amber-500/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-500/5 text-center backdrop-blur-sm"
            >
              <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {industry.icon}
              </div>
              <p className="text-sm font-medium text-steel-400 group-hover:text-amber-400 transition-colors duration-300">{industry.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
