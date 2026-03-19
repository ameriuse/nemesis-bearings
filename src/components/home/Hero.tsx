'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

const proofPoints = [
  'Cross-reference support for major brands',
  'Traceable lots and inspection-ready documentation',
  'Same-day handling on in-stock lines',
  'Technical help for fit, lubrication, and selection',
];

const metrics = [
  { value: '4 hrs', label: 'Typical quote turnaround during business hours' },
  { value: '7', label: 'Core product families stocked and sourced' },
  { value: '12+', label: 'Industries served across maintenance and OEM demand' },
  { value: '1:1', label: 'Direct support from a bearing specialist' },
];

const serviceCards = [
  {
    label: 'Interchange Review',
    value: 'SKF / NSK / FAG / Timken',
    note: 'Part numbers, dimensions, and application checks',
  },
  {
    label: 'Commercial Response',
    value: 'RFQ + stock confirmation',
    note: 'Fast follow-up for buyers and maintenance teams',
  },
  {
    label: 'Technical Review',
    value: 'Fit, load, lubrication',
    note: 'Support before you place the order',
  },
];

export default function Hero() {
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

    const animated = sectionRef.current?.querySelectorAll('.fade-up, .fade-left, .fade-right, .scale-up');
    animated?.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-navy-950 text-white">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute inset-0 noise-overlay" />
      <div className="absolute left-[-8rem] top-[-4rem] h-[28rem] w-[28rem] rounded-full bg-blue-500/18 blur-[120px]" />
      <div className="absolute right-[-6rem] top-[10%] h-[34rem] w-[34rem] rounded-full bg-amber-500/14 blur-[160px]" />
      <div className="deco-text absolute left-[-2%] top-[12%] opacity-40">NB</div>

      <div className="relative mx-auto max-w-[1400px] px-4 pb-24 pt-18 md:pb-28 md:pt-20">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="fade-left">
            <span className="eyebrow">Industrial Bearing Supply</span>
            <h1 className="mt-7 max-w-3xl text-5xl font-bold leading-[0.94] tracking-[-0.06em] text-white md:text-6xl xl:text-[5.25rem]" style={{ fontFamily: 'var(--font-heading)' }}>
              A stronger digital front door for fast industrial bearing sourcing.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-steel-300 md:text-xl">
              Nemesis Bearings helps maintenance, engineering, and procurement teams move from part
              number confusion to a clear quote, supported interchange, and dependable order follow-up.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/shop" className="btn-amber">
                Browse Catalog
              </Link>
              <Link href="/quote" className="btn-outline !text-white !bg-white/6 !border-white/12">
                Request Quote
              </Link>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {proofPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-[1.4rem] border border-white/8 bg-white/5 px-4 py-4 text-sm text-steel-200 backdrop-blur-sm"
                >
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
                    <span>{point}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="scale-up">
            <div className="surface-dark card-premium relative overflow-hidden p-6 md:p-8">
              <div className="absolute inset-0 opacity-70" style={{ background: 'linear-gradient(160deg, rgba(77,131,255,0.1), transparent 35%, rgba(243,179,92,0.12) 100%)' }} />
              <div className="relative flex items-center justify-between gap-4 border-b border-white/8 pb-5">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-400">
                    Live intake workflow
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">From part number to confident order review</p>
                </div>
                <div className="rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-green-500">
                  Same-day response
                </div>
              </div>

              <div className="relative mt-6 grid gap-4 lg:grid-cols-[0.78fr_1fr]">
                <div className="grid gap-4">
                  {serviceCards.map((card) => (
                    <div key={card.label} className="rounded-[1.5rem] border border-white/8 bg-white/5 p-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-steel-400">
                        {card.label}
                      </p>
                      <p className="mt-2 text-base font-semibold text-white">{card.value}</p>
                      <p className="mt-1 text-sm leading-6 text-steel-400">{card.note}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-[1.75rem] border border-white/8 bg-white/[0.04] p-5">
                  <div className="relative flex aspect-[1.02] items-center justify-center overflow-hidden rounded-[1.4rem] border border-white/8 bg-navy-900">
                    <div className="absolute inset-0 dot-pattern opacity-40" />
                    <div className="absolute inset-[18%] rounded-full border border-white/8" />
                    <div className="absolute inset-[9%] rounded-full border border-white/5" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative h-[70%] w-[70%]">
                        <svg
                          viewBox="0 0 500 500"
                          className="absolute inset-0 h-full w-full text-white/85"
                          style={{ animation: 'spin-slow 48s linear infinite' }}
                        >
                          <defs>
                            <linearGradient id="hero-ring" x1="0" y1="0" x2="1" y2="1">
                              <stop offset="0%" stopColor="#94a8c6" />
                              <stop offset="45%" stopColor="#ffffff" />
                              <stop offset="100%" stopColor="#f3b35c" />
                            </linearGradient>
                          </defs>
                          <circle cx="250" cy="250" r="190" fill="none" stroke="url(#hero-ring)" strokeWidth="30" opacity="0.82" />
                          <circle cx="250" cy="250" r="144" fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth="58" />
                          <circle cx="250" cy="250" r="92" fill="rgba(8,17,31,0.95)" />
                          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
                            const radians = (angle * Math.PI) / 180;
                            const x = 250 + 144 * Math.cos(radians);
                            const y = 250 + 144 * Math.sin(radians);

                            return <circle key={angle} cx={x} cy={y} r="20" fill="rgba(255,255,255,0.58)" />;
                          })}
                        </svg>
                      </div>
                    </div>

                    <div className="absolute left-4 top-4 rounded-2xl border border-white/8 bg-navy-950/80 px-4 py-3 backdrop-blur-sm">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-steel-500">Matched spec</p>
                      <p className="mt-1 text-lg font-semibold text-white">25 x 52 x 15 mm</p>
                    </div>
                    <div className="absolute bottom-4 right-4 rounded-2xl border border-white/8 bg-navy-950/80 px-4 py-3 backdrop-blur-sm">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-steel-500">Load note</p>
                      <p className="mt-1 text-lg font-semibold text-white">14.8 kN dynamic</p>
                    </div>
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-[1.3rem] border border-white/8 bg-white/5 p-4">
                      <p className="text-[11px] uppercase tracking-[0.18em] text-steel-500">Commercial</p>
                      <p className="mt-2 text-sm text-white">Pricing, lead time, MOQ, and alternate options in one response.</p>
                    </div>
                    <div className="rounded-[1.3rem] border border-white/8 bg-white/5 p-4">
                      <p className="text-[11px] uppercase tracking-[0.18em] text-steel-500">Technical</p>
                      <p className="mt-2 text-sm text-white">Selection help for application, speed, fit, and lubrication.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="fade-up mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-[1.6rem] border border-white/8 bg-white/5 px-5 py-5 backdrop-blur-sm">
              <p className="text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                {metric.value}
              </p>
              <p className="mt-2 text-sm leading-6 text-steel-300">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
