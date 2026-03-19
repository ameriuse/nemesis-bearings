'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

type SearchMode = 'part-number' | 'dimensions' | 'application';

const quickLookups = [
  { label: '6205-2RS', mode: 'part-number' as const, value: '6205-2RS' },
  { label: '22210 E', mode: 'part-number' as const, value: '22210 E' },
  { label: '25 / 52 / 15', mode: 'dimensions' as const, value: '25,52,15' },
  { label: 'Conveyor', mode: 'application' as const, value: 'conveyor' },
];

export default function QuickSearch() {
  const router = useRouter();
  const sectionRef = useRef<HTMLElement>(null);
  const [mode, setMode] = useState<SearchMode>('part-number');
  const [partNumber, setPartNumber] = useState('');
  const [bore, setBore] = useState('');
  const [od, setOd] = useState('');
  const [width, setWidth] = useState('');
  const [application, setApplication] = useState('');

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

    const animated = sectionRef.current?.querySelectorAll('.fade-up, .scale-up');
    animated?.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (mode === 'part-number' && partNumber.trim()) {
      router.push(`/shop?q=${encodeURIComponent(partNumber.trim())}`);
      return;
    }

    if (mode === 'dimensions') {
      const params = new URLSearchParams();
      if (bore.trim()) params.set('bore', bore.trim());
      if (od.trim()) params.set('od', od.trim());
      if (width.trim()) params.set('w', width.trim());

      if (params.size > 0) {
        router.push(`/shop?${params.toString()}`);
      }

      return;
    }

    if (mode === 'application' && application.trim()) {
      router.push(`/shop?app=${encodeURIComponent(application.trim())}`);
    }
  };

  const handleLookupClick = (lookup: (typeof quickLookups)[number]) => {
    setMode(lookup.mode);

    if (lookup.mode === 'part-number') {
      router.push(`/shop?q=${encodeURIComponent(lookup.value)}`);
      return;
    }

    if (lookup.mode === 'dimensions') {
      const [nextBore, nextOd, nextWidth] = lookup.value.split(',');
      router.push(`/shop?bore=${encodeURIComponent(nextBore)}&od=${encodeURIComponent(nextOd)}&w=${encodeURIComponent(nextWidth)}`);
      return;
    }

    router.push(`/shop?app=${encodeURIComponent(lookup.value)}`);
  };

  return (
    <section ref={sectionRef} className="relative z-10 -mt-12 pb-8">
      <div className="surface-panel scale-up relative mx-auto max-w-6xl overflow-hidden p-6 md:p-8 lg:p-10">
        <div
          className="absolute inset-0 opacity-80"
          style={{
            background:
              'radial-gradient(circle at top left, rgba(77,131,255,0.08), transparent 30%), radial-gradient(circle at bottom right, rgba(243,179,92,0.12), transparent 32%)',
          }}
        />
        <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="fade-up">
            <span className="section-kicker">Search Smarter</span>
            <h2 className="mt-4 text-3xl font-bold text-steel-950 md:text-4xl" style={{ fontFamily: 'var(--font-heading)' }}>
              Find the right bearing even when you only have part of the story.
            </h2>
            <p className="mt-4 text-base leading-7 text-steel-600">
              Search by exact part number, dimensions, or application language. If the part is obsolete or
              cross-referenced, we can still move the request forward.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                'Part number and interchange lookup',
                'Dimension-led search for unknown bearings',
                'Application support for pumps, motors, conveyors',
                'Fast handoff to RFQ when catalog search is not enough',
              ].map((item) => (
                <div key={item} className="rounded-[1.3rem] border border-steel-200 bg-white/75 px-4 py-4 text-sm text-steel-700">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="fade-up rounded-[1.8rem] border border-steel-200 bg-white/78 p-5 shadow-sm md:p-6">
            <div className="flex flex-wrap gap-2 rounded-full bg-steel-100 p-1">
              {([
                { key: 'part-number', label: 'Part Number' },
                { key: 'dimensions', label: 'Dimensions' },
                { key: 'application', label: 'Application' },
              ] as const).map(({ key, label }) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setMode(key)}
                  className={`rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors ${
                    mode === key
                      ? 'bg-navy-900 text-white'
                      : 'text-steel-600 hover:text-steel-900'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="mt-6">
              {mode === 'part-number' && (
                <div className="grid gap-4">
                  <div>
                    <label htmlFor="qs-part" className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-steel-600">
                      Part number or cross-reference
                    </label>
                    <input
                      id="qs-part"
                      type="text"
                      value={partNumber}
                      onChange={(e) => setPartNumber(e.target.value)}
                      placeholder="6205-2RS, SKF 22210 E, UCP205"
                      className="mt-2 w-full rounded-[1.1rem] border border-steel-200 bg-white px-4 py-4 text-sm text-steel-900 shadow-sm focus:border-blue-400"
                    />
                  </div>
                  <button type="submit" className="btn-dark w-full sm:w-auto">
                    Search Catalog
                  </button>
                </div>
              )}

              {mode === 'dimensions' && (
                <div className="grid gap-4 md:grid-cols-[1fr_1fr_1fr_auto] md:items-end">
                  <div>
                    <label htmlFor="qs-bore" className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-steel-600">
                      Bore ID
                    </label>
                    <input
                      id="qs-bore"
                      type="number"
                      value={bore}
                      onChange={(e) => setBore(e.target.value)}
                      placeholder="25"
                      className="mt-2 w-full rounded-[1.1rem] border border-steel-200 bg-white px-4 py-4 text-sm text-steel-900 shadow-sm focus:border-blue-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="qs-od" className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-steel-600">
                      Outer diameter
                    </label>
                    <input
                      id="qs-od"
                      type="number"
                      value={od}
                      onChange={(e) => setOd(e.target.value)}
                      placeholder="52"
                      className="mt-2 w-full rounded-[1.1rem] border border-steel-200 bg-white px-4 py-4 text-sm text-steel-900 shadow-sm focus:border-blue-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="qs-width" className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-steel-600">
                      Width
                    </label>
                    <input
                      id="qs-width"
                      type="number"
                      value={width}
                      onChange={(e) => setWidth(e.target.value)}
                      placeholder="15"
                      className="mt-2 w-full rounded-[1.1rem] border border-steel-200 bg-white px-4 py-4 text-sm text-steel-900 shadow-sm focus:border-blue-400"
                    />
                  </div>
                  <button type="submit" className="btn-dark">
                    Search
                  </button>
                </div>
              )}

              {mode === 'application' && (
                <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
                  <div>
                    <label htmlFor="qs-app" className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-steel-600">
                      Application or equipment
                    </label>
                    <input
                      id="qs-app"
                      type="text"
                      value={application}
                      onChange={(e) => setApplication(e.target.value)}
                      placeholder="electric motor, conveyor, pump, fan"
                      className="mt-2 w-full rounded-[1.1rem] border border-steel-200 bg-white px-4 py-4 text-sm text-steel-900 shadow-sm focus:border-blue-400"
                    />
                  </div>
                  <button type="submit" className="btn-dark">
                    Search
                  </button>
                </div>
              )}
            </form>

            <div className="mt-6 border-t border-steel-200 pt-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-steel-500">
                Common lookups
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {quickLookups.map((lookup) => (
                  <button
                    key={`${lookup.mode}-${lookup.label}`}
                    type="button"
                    onClick={() => handleLookupClick(lookup)}
                    className="rounded-full border border-steel-200 bg-steel-50 px-4 py-2 text-xs font-semibold text-steel-700 hover:border-blue-400 hover:text-blue-600"
                  >
                    {lookup.label}
                  </button>
                ))}
              </div>
              <p className="mt-4 text-sm text-steel-600">
                Need help with an unavailable part or incomplete dimensions?{' '}
                <a href="/quote" className="font-semibold text-blue-600 hover:text-blue-500">
                  Send an RFQ
                </a>{' '}
                and we will help you identify the right replacement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
