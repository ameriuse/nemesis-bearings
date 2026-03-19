'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function QualitySection() {
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
    <section ref={sectionRef} className="relative bg-navy-900 text-white diagonal-top py-28 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0 noise-overlay" />

      {/* Decorative text */}
      <div className="deco-text absolute top-[8%] right-[-3%] opacity-20">
        QA
      </div>

      {/* Ambient glow */}
      <div
        className="absolute top-[-100px] left-[20%] w-[500px] h-[500px] rounded-full blur-[150px]"
        style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-[1400px] mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="fade-left">
            <div className="accent-line mb-4" />
            <span className="text-amber-500 text-xs font-bold uppercase tracking-[3px]">Quality Assurance</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wide mt-3 mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
              Quality You Can Verify
            </h2>
            <p className="text-steel-400 mb-8 leading-relaxed text-lg">
              Our quality process includes incoming inspection, dimensional verification, and batch tracking.
              We maintain documentation and provide certificates of conformance upon request.
            </p>
            <ul className="space-y-4 text-steel-400 mb-10">
              {[
                'Incoming inspection on all products',
                'Batch and lot traceability',
                'Certificates of conformance available',
                'Verified sourcing from established manufacturers',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 group">
                  <span className="w-6 h-6 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-amber-500/20 transition-colors">
                    <svg className="w-3.5 h-3.5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </span>
                  <span className="group-hover:text-steel-300 transition-colors">{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/quality" className="btn-amber inline-block">
              VIEW QUALITY PROCESS
            </Link>
          </div>

          <div className="fade-right">
            <div className="bg-navy-800/80 rounded-2xl p-8 border border-navy-700/50 backdrop-blur-sm relative overflow-hidden">
              {/* Card glow */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

              <h3 className="font-black text-lg mb-8 uppercase tracking-wider flex items-center gap-3" style={{ fontFamily: 'var(--font-heading)' }}>
                <span className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                Our Process
              </h3>
              <ol className="space-y-7">
                {[
                  { step: '01', title: 'Supplier Qualification', desc: 'Established manufacturers with documented quality systems' },
                  { step: '02', title: 'Incoming Inspection', desc: 'Dimensional checks, visual inspection, packaging verification' },
                  { step: '03', title: 'Documentation Review', desc: 'Mill certificates, test reports, and compliance documents' },
                  { step: '04', title: 'Batch Recording', desc: 'Full lot tracking from receipt through shipment' },
                ].map((item) => (
                  <li key={item.step} className="flex gap-5 group">
                    <span className="text-amber-500 font-black text-3xl leading-none group-hover:text-amber-400 transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>{item.step}</span>
                    <div className="border-l-2 border-navy-600 pl-5 group-hover:border-amber-500/30 transition-colors">
                      <p className="font-bold text-sm uppercase tracking-wider mb-1">{item.title}</p>
                      <p className="text-steel-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
