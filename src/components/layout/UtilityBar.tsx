'use client';

import Link from 'next/link';

export default function UtilityBar() {
  return (
    <div className="bg-navy-900 border-b border-navy-800/50 text-steel-500 text-xs relative overflow-hidden">
      {/* Subtle animated gradient */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(245,158,11,0.05), transparent)',
          backgroundSize: '200% 100%',
          animation: 'gradient-shift 12s ease infinite',
        }}
      />
      <div className="relative max-w-[1400px] mx-auto px-4 flex flex-wrap items-center justify-between gap-2 py-2">
        <div className="flex items-center gap-3 flex-wrap">
          <a href="tel:+19154010626" className="hover:text-amber-400 transition-colors flex items-center gap-1.5 font-medium">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            (915) 401-0626
          </a>
          <span className="text-navy-600">|</span>
          <a href="mailto:sales@nemesisbearings.com" className="hidden sm:flex hover:text-amber-400 transition-colors items-center gap-1.5">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            sales@nemesisbearings.com
          </a>
          <span className="hidden md:inline text-navy-600">|</span>
          <span className="hidden md:inline tracking-wider">MON-FRI 8AM-5PM EST</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden lg:flex items-center gap-2 text-green-500 font-semibold">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            Same-day shipping available
          </span>
          <span className="text-navy-600 hidden lg:inline">|</span>
          <Link href="/quote" className="text-amber-500 hover:text-amber-400 font-bold tracking-wider uppercase transition-colors">
            Request Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
