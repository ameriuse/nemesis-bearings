import Link from 'next/link';

export default function UtilityBar() {
  return (
    <div className="relative overflow-hidden border-b border-white/8 bg-navy-950 text-steel-300">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(77,131,255,0.18) 35%, rgba(243,179,92,0.16) 65%, transparent 100%)',
        }}
      />
      <div className="relative mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-3 px-4 py-2.5 text-[11px] uppercase tracking-[0.18em]">
        <div className="flex flex-wrap items-center gap-3 text-steel-400">
          <span className="inline-flex items-center gap-2 font-semibold text-steel-200">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Quote response in 4 business hours
          </span>
          <span className="hidden md:inline text-steel-700">/</span>
          <a href="tel:+19154010626" className="hover:text-white">
            (915) 401-0626
          </a>
          <span className="hidden md:inline text-steel-700">/</span>
          <a href="mailto:sales@nemesisbearings.com" className="hover:text-white">
            sales@nemesisbearings.com
          </a>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden lg:inline text-steel-500">
            Same-day shipping on in-stock orders
          </span>
          <Link href="/quote" className="font-semibold text-amber-400 hover:text-amber-300">
            Request RFQ
          </Link>
        </div>
      </div>
    </div>
  );
}
