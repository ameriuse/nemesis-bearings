'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

type SearchMode = 'part-number' | 'dimensions' | 'application';

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
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll('.fade-up, .scale-up');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === 'part-number' && partNumber.trim()) {
      router.push(`/shop?q=${encodeURIComponent(partNumber.trim())}`);
    } else if (mode === 'dimensions') {
      const params = new URLSearchParams();
      if (bore) params.set('bore', bore);
      if (od) params.set('od', od);
      if (width) params.set('w', width);
      router.push(`/shop?${params.toString()}`);
    } else if (mode === 'application' && application.trim()) {
      router.push(`/shop?app=${encodeURIComponent(application.trim())}`);
    }
  };

  return (
    <section ref={sectionRef} className="scale-up bg-surface border border-border rounded-2xl p-8 md:p-10 shadow-xl -mt-8 relative z-10 max-w-5xl mx-auto overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

      <h2 className="text-xl font-black uppercase tracking-wider mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
        Find Your Bearing
      </h2>

      {/* Mode Tabs */}
      <div className="flex gap-0.5 bg-steel-100 rounded-lg p-1 mb-7 w-fit">
        {([
          { key: 'part-number', label: 'Part Number' },
          { key: 'dimensions', label: 'By Dimensions' },
          { key: 'application', label: 'By Application' },
        ] as const).map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setMode(key)}
            className={`px-5 py-2.5 rounded-md text-xs font-bold tracking-wider uppercase transition-all duration-300 ${
              mode === key
                ? 'bg-navy-900 text-amber-500 shadow-md'
                : 'text-steel-600 hover:text-steel-900'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        {mode === 'part-number' && (
          <div className="flex gap-3">
            <div className="flex-1">
              <label htmlFor="qs-part" className="block text-xs font-bold text-steel-700 mb-2 uppercase tracking-wider">
                Part Number or Cross-Reference
              </label>
              <input
                id="qs-part"
                type="text"
                value={partNumber}
                onChange={(e) => setPartNumber(e.target.value)}
                placeholder="e.g., 6205-2RS, SKF 22210 E, 25×52×15"
                className="w-full border border-steel-300 rounded-lg px-5 py-3.5 text-sm font-mono focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all hover:border-steel-400"
              />
            </div>
            <button type="submit" className="self-end btn-amber whitespace-nowrap">
              SEARCH
            </button>
          </div>
        )}

        {mode === 'dimensions' && (
          <div className="flex flex-wrap gap-3 items-end">
            <div className="flex-1 min-w-[100px]">
              <label htmlFor="qs-bore" className="block text-xs font-bold text-steel-700 mb-2 uppercase tracking-wider">Bore ID (mm)</label>
              <input id="qs-bore" type="number" value={bore} onChange={(e) => setBore(e.target.value)} placeholder="25" className="w-full border border-steel-300 rounded-lg px-5 py-3.5 text-sm font-mono focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 hover:border-steel-400 transition-all" />
            </div>
            <div className="flex-1 min-w-[100px]">
              <label htmlFor="qs-od" className="block text-xs font-bold text-steel-700 mb-2 uppercase tracking-wider">OD (mm)</label>
              <input id="qs-od" type="number" value={od} onChange={(e) => setOd(e.target.value)} placeholder="52" className="w-full border border-steel-300 rounded-lg px-5 py-3.5 text-sm font-mono focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 hover:border-steel-400 transition-all" />
            </div>
            <div className="flex-1 min-w-[100px]">
              <label htmlFor="qs-width" className="block text-xs font-bold text-steel-700 mb-2 uppercase tracking-wider">Width (mm)</label>
              <input id="qs-width" type="number" value={width} onChange={(e) => setWidth(e.target.value)} placeholder="15" className="w-full border border-steel-300 rounded-lg px-5 py-3.5 text-sm font-mono focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 hover:border-steel-400 transition-all" />
            </div>
            <button type="submit" className="btn-amber whitespace-nowrap">
              SEARCH
            </button>
          </div>
        )}

        {mode === 'application' && (
          <div className="flex gap-3">
            <div className="flex-1">
              <label htmlFor="qs-app" className="block text-xs font-bold text-steel-700 mb-2 uppercase tracking-wider">Application or Industry</label>
              <input
                id="qs-app"
                type="text"
                value={application}
                onChange={(e) => setApplication(e.target.value)}
                placeholder="e.g., electric motor, conveyor, pump, mining"
                className="w-full border border-steel-300 rounded-lg px-5 py-3.5 text-sm focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 hover:border-steel-400 transition-all"
              />
            </div>
            <button type="submit" className="self-end btn-amber whitespace-nowrap">
              SEARCH
            </button>
          </div>
        )}
      </form>

      <p className="text-xs text-steel-500 mt-5">
        Can&apos;t find what you need?{' '}
        <a href="/quote" className="text-amber-600 font-bold hover:underline">Submit an RFQ</a>{' '}
        and our team will identify the right bearing for your application.
      </p>
    </section>
  );
}
