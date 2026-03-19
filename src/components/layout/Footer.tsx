'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

const footerLinks = {
  Products: [
    { label: 'Ball Bearings', href: '/shop/ball-bearings' },
    { label: 'Roller Bearings', href: '/shop/roller-bearings' },
    { label: 'Spherical Bearings', href: '/shop/spherical-bearings' },
    { label: 'Thrust Bearings', href: '/shop/thrust-bearings' },
    { label: 'Mounted Units', href: '/shop/mounted-units' },
    { label: 'Housings', href: '/shop/housings' },
    { label: 'Seals & Accessories', href: '/shop/seals-and-accessories' },
  ],
  Resources: [
    { label: 'Selector Guide', href: '/resources/selector-guide' },
    { label: 'Cross Reference', href: '/resources/interchange' },
    { label: 'Lubrication Guide', href: '/resources/lubrication-guide' },
    { label: 'Fit & Tolerance', href: '/resources/fit-tolerance' },
    { label: 'Downloads', href: '/resources/downloads' },
    { label: 'FAQ', href: '/faq' },
  ],
  Company: [
    { label: 'About Nemesis', href: '/about' },
    { label: 'Quality Assurance', href: '/quality' },
    { label: 'Contact', href: '/contact' },
    { label: 'Technical Support', href: '/support' },
    { label: 'Shipping & Delivery', href: '/shipping' },
    { label: 'Returns & Warranty', href: '/returns' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
};

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    const els = footerRef.current?.querySelectorAll('.fade-up');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef} className="bg-navy-900 text-steel-500 mt-0 relative overflow-hidden">
      <div className="relative bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(45deg, transparent 25%, rgba(0,0,0,0.1) 25%, rgba(0,0,0,0.1) 50%, transparent 50%, transparent 75%, rgba(0,0,0,0.1) 75%)`,
            backgroundSize: '20px 20px',
          }}
        />

        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: 'linear-gradient(90deg, transparent 40%, rgba(255,255,255,0.3) 50%, transparent 60%)',
            animation: 'shimmer-sweep 4s ease-in-out infinite',
          }}
        />

        <div className="relative max-w-[1400px] mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-navy-900 text-center md:text-left">
            <h3 className="text-2xl font-black uppercase tracking-wide" style={{ fontFamily: 'var(--font-heading)' }}>
              Need a bearing urgently?
            </h3>
            <p className="text-navy-900/70 text-sm font-medium mt-1">Same-day shipping on in-stock items. Call for expedited orders.</p>
          </div>
          <div className="flex gap-3">
            <Link href="/quote" className="bg-navy-900 text-amber-500 px-7 py-3.5 rounded-lg font-bold text-sm uppercase tracking-wider hover:bg-navy-800 transition-all duration-300 hover:shadow-xl" style={{ fontFamily: 'var(--font-heading)' }}>
              Request Quote
            </Link>
            <a href="tel:+19154010626" className="bg-white/20 text-navy-900 px-7 py-3.5 rounded-lg font-bold text-sm uppercase tracking-wider hover:bg-white/30 transition-all duration-300 border border-navy-900/20" style={{ fontFamily: 'var(--font-heading)' }}>
              Call Now
            </a>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 grid-pattern pointer-events-none" style={{ top: '200px' }} />

      <div className="relative max-w-[1400px] mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 fade-up">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center">
                <svg className="w-[18px] h-[18px] text-navy-900" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="12" cy="12" r="3.5" fill="currentColor" />
                </svg>
              </div>
              <div>
                <span className="text-white text-lg font-bold tracking-[3px] block leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>NEMESIS</span>
                <span className="text-steel-600 text-[8px] tracking-[2px] uppercase">Bearings</span>
              </div>
            </div>
            <p className="text-sm text-steel-600 mb-5 leading-relaxed">
              Industrial bearing solutions with cross-reference support, quality inspection, and expert technical support.
            </p>
            <div className="space-y-2.5 text-sm">
              <a href="tel:+19154010626" className="flex items-center gap-2 text-steel-400 hover:text-amber-500 transition-colors font-medium group">
                <span className="w-7 h-7 rounded-md bg-navy-800 flex items-center justify-center group-hover:bg-amber-500/10 transition-colors">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </span>
                (915) 401-0626
              </a>
              <a href="mailto:sales@nemesisbearings.com" className="flex items-center gap-2 text-steel-400 hover:text-amber-500 transition-colors group">
                <span className="w-7 h-7 rounded-md bg-navy-800 flex items-center justify-center group-hover:bg-amber-500/10 transition-colors">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </span>
                sales@nemesisbearings.com
              </a>
              <p className="text-steel-600 text-xs ml-9">Mon-Fri 8AM - 5PM EST</p>
            </div>
          </div>

          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white font-bold text-xs uppercase tracking-[2px] mb-5 flex items-center gap-2" style={{ fontFamily: 'var(--font-heading)' }}>
                <span className="w-5 h-[2px] bg-amber-500" />
                {section}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-steel-500 hover:text-amber-500 transition-colors duration-300 hover:translate-x-1 inline-block">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-navy-800 mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 fade-up">
          <p className="text-xs text-steel-700">
            &copy; {new Date().getFullYear()} Nemesis Bearings. All rights reserved.
          </p>
          <p className="text-[10px] text-steel-700 max-w-lg text-center md:text-right leading-relaxed">
            All trademarks referenced are the property of their respective owners and are used for cross-reference and identification purposes only.
            Nemesis Bearings is not affiliated with or endorsed by these trademark owners.
          </p>
        </div>
      </div>
    </footer>
  );
}
