'use client';

import { useEffect, useRef } from 'react';

const industries = [
  { name: 'Mining & Quarry', icon: 'M6 20l6-10 6 10M12 10V4m0 0L9 7m3-3l3 3' },
  { name: 'Agriculture', icon: 'M12 3v18M7 8c0 2.2 1.3 4 3 4s3-1.8 3-4-1.3-4-3-4-3 1.8-3 4zm0 8c0 2.2 1.3 4 3 4s3-1.8 3-4' },
  { name: 'Food & Beverage', icon: 'M7 4v7a5 5 0 0010 0V4M9 4v7m6-7v7' },
  { name: 'Automotive', icon: 'M3 14l2-5h14l2 5M5 14v4m14-4v4M7 14h10' },
  { name: 'HVAC', icon: 'M12 3v18m9-9H3m15.4-5.4L5.6 18.4M18.4 18.4L5.6 5.6' },
  { name: 'Manufacturing', icon: 'M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4L4.2 7.7l5.4-.8L12 2z' },
  { name: 'Paper & Pulp', icon: 'M7 4h7l5 5v11H7zM14 4v5h5' },
  { name: 'Power Generation', icon: 'M13 2L4 14h6l-1 8 9-12h-6l1-8z' },
  { name: 'Water Treatment', icon: 'M12 3s6 6.2 6 10.5A6 6 0 016 13.5C6 9.2 12 3 12 3z' },
  { name: 'Oil & Gas', icon: 'M12 2c3 4 5 7 5 10a5 5 0 11-10 0c0-3 2-6 5-10z' },
  { name: 'Material Handling', icon: 'M4 7h16v10H4zM9 7V4h6v3M7 17v3m10-3v3' },
  { name: 'Textile', icon: 'M8 4a4 4 0 108 0 4 4 0 00-8 0zm4 4v12m0 0l-4-4m4 4l4-4' },
];

export default function IndustriesSection() {
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

    const animated = sectionRef.current?.querySelectorAll('.fade-up');
    animated?.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-navy-950 py-28 text-white">
      <div className="absolute inset-0 grid-pattern opacity-45" />
      <div className="absolute left-[12%] top-[8%] h-[26rem] w-[26rem] rounded-full bg-blue-500/12 blur-[120px]" />
      <div className="absolute right-[6%] bottom-[-8rem] h-[34rem] w-[34rem] rounded-full bg-amber-500/12 blur-[150px]" />

      <div className="relative mx-auto max-w-[1400px] px-4">
        <div className="fade-up flex flex-col gap-5 text-center">
          <span className="section-kicker section-kicker-light accent-line-center">Markets We Serve</span>
          <h2 className="section-title text-white">An industrial visual language carried through the application areas too.</h2>
          <p className="mx-auto max-w-3xl text-base leading-8 text-steel-300 md:text-lg">
            Even the industry section now feels less generic. The cards use cleaner iconography, stronger spacing,
            and a more deliberate presentation to match the rest of the redesigned experience.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 stagger-children">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="fade-up rounded-[1.6rem] border border-white/8 bg-white/5 p-5 backdrop-blur-sm"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-[1rem] bg-white/8 text-amber-400">
                  <svg className="h-[22px] w-[22px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={industry.icon} />
                  </svg>
                </div>
                <p className="text-base font-semibold text-white">{industry.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
