'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

const process = [
  {
    step: '01',
    title: 'Source Qualification',
    description: 'Approved manufacturers, verified paperwork, and clear commercial communication before stock hits the shelf.',
  },
  {
    step: '02',
    title: 'Incoming Inspection',
    description: 'Dimensional checks, labeling review, packaging verification, and visible condition inspection at receipt.',
  },
  {
    step: '03',
    title: 'Traceability Control',
    description: 'Batch and lot information recorded so support teams can answer questions after the order ships.',
  },
  {
    step: '04',
    title: 'Customer Documentation',
    description: 'Certificates of conformance and related support paperwork can be prepared when the order requires it.',
  },
];

const qualityHighlights = [
  'Incoming inspection on all inventory',
  'Batch tracking for order support and traceability',
  'Documentation available on request',
  'Technical review support before purchase',
];

export default function QualitySection() {
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
    <section ref={sectionRef} className="relative overflow-hidden bg-navy-950 py-28 text-white">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute inset-0 noise-overlay" />
      <div className="absolute left-[10%] top-[-6rem] h-[26rem] w-[26rem] rounded-full bg-blue-500/12 blur-[120px]" />
      <div className="absolute right-[8%] bottom-[-8rem] h-[30rem] w-[30rem] rounded-full bg-amber-500/14 blur-[140px]" />
      <div className="deco-text absolute right-[-2%] top-[8%] opacity-30">QA</div>

      <div className="relative mx-auto max-w-[1400px] px-4">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="fade-left">
            <span className="section-kicker section-kicker-light">Quality System</span>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl" style={{ fontFamily: 'var(--font-heading)' }}>
              Quality language that feels grounded, specific, and credible.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-steel-300 md:text-lg">
              The new section frames quality around inspection, traceability, and response readiness instead of vague
              claims. That is a better fit for industrial buyers and support conversations.
            </p>

            <div className="mt-8 grid gap-3">
              {qualityHighlights.map((item) => (
                <div key={item} className="rounded-[1.4rem] border border-white/8 bg-white/5 px-5 py-4 text-sm text-steel-200">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-amber-500/12 text-amber-400">
                      <svg className="h-[14px] w-[14px]" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/quality" className="btn-amber">
                View Quality Page
              </Link>
              <Link href="/resources/downloads" className="btn-outline !text-white !bg-white/6 !border-white/12">
                Documentation
              </Link>
            </div>
          </div>

          <div className="fade-right surface-dark rounded-[2rem] p-6 md:p-8">
            <div className="flex items-center justify-between gap-4 border-b border-white/8 pb-5">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-400">
                  Workflow overview
                </p>
                <p className="mt-2 text-lg font-semibold text-white">Inspection and traceability flow</p>
              </div>
              <div className="rounded-full border border-white/8 bg-white/5 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-steel-400">
                Operations-ready
              </div>
            </div>

            <div className="mt-6 space-y-5">
              {process.map((item) => (
                <div key={item.step} className="grid gap-4 rounded-[1.5rem] border border-white/8 bg-white/5 p-5 md:grid-cols-[84px_1fr]">
                  <div className="flex items-center">
                    <span className="text-4xl font-bold text-amber-400" style={{ fontFamily: 'var(--font-heading)' }}>
                      {item.step}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-steel-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
