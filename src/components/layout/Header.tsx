'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import SearchBar from './SearchBar';

const navItems = [
  {
    label: 'PRODUCTS',
    href: '/shop',
    children: [
      { label: 'Ball Bearings', href: '/shop/ball-bearings', desc: 'Deep groove, angular contact, self-aligning' },
      { label: 'Roller Bearings', href: '/shop/roller-bearings', desc: 'Cylindrical, tapered, needle' },
      { label: 'Spherical Bearings', href: '/shop/spherical-bearings', desc: 'Spherical roller & plain' },
      { label: 'Thrust Bearings', href: '/shop/thrust-bearings', desc: 'Ball & roller thrust types' },
      { label: 'Mounted Units', href: '/shop/mounted-units', desc: 'Pillow block, flanged, take-up' },
      { label: 'Housings', href: '/shop/housings', desc: 'Split & solid housings' },
      { label: 'Seals & Accessories', href: '/shop/seals-and-accessories', desc: 'Seals, lock nuts, adapters' },
    ],
  },
  {
    label: 'RESOURCES',
    href: '/resources',
    children: [
      { label: 'Selector Guide', href: '/resources/selector-guide', desc: 'Find the right bearing type' },
      { label: 'Cross Reference', href: '/resources/interchange', desc: 'Interchange part numbers' },
      { label: 'Lubrication Guide', href: '/resources/lubrication-guide', desc: 'Grease & oil selection' },
      { label: 'Fit & Tolerance', href: '/resources/fit-tolerance', desc: 'Shaft & housing fits' },
      { label: 'Damage Analysis', href: '/resources/damage-analysis', desc: 'Failure mode identification' },
      { label: 'Downloads', href: '/resources/downloads', desc: 'Datasheets, CAD, catalogs' },
    ],
  },
  { label: 'QUALITY', href: '/quality' },
  { label: 'SUPPORT', href: '/support' },
  { label: 'ABOUT', href: '/about' },
  { label: 'CONTACT', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass shadow-xl shadow-black/10'
          : 'bg-navy-900'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex items-center justify-between h-[76px]">
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:shadow-amber-500/30 group-hover:scale-105">
              <svg className="w-5 h-5 text-navy-900" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="12" cy="12" r="3.5" fill="currentColor" />
                <circle cx="12" cy="4" r="1.5" fill="currentColor" />
                <circle cx="12" cy="20" r="1.5" fill="currentColor" />
                <circle cx="4" cy="12" r="1.5" fill="currentColor" />
                <circle cx="20" cy="12" r="1.5" fill="currentColor" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-white text-xl tracking-[4px] font-bold leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                NEMESIS
              </span>
              <span className="text-steel-600 text-[9px] tracking-[3px] uppercase font-medium">Bearings</span>
            </div>
          </Link>

          <div className="hidden lg:block flex-1 max-w-xl mx-8">
            <SearchBar />
          </div>

          <nav className="hidden xl:flex items-center gap-0.5" aria-label="Main navigation">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="relative text-steel-400 hover:text-white px-3.5 py-2 text-xs font-semibold tracking-[1.5px] transition-all duration-300 inline-flex items-center gap-1 group"
                >
                  {item.label}
                  {item.children && (
                    <svg className={`w-3 h-3 opacity-50 transition-transform duration-300 ${openDropdown === item.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  )}
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>

                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-3 z-50" style={{ animation: 'countUp 0.2s ease forwards' }}>
                    <div className="bg-navy-800/95 backdrop-blur-xl border border-navy-600/50 rounded-xl shadow-2xl shadow-black/30 py-3 min-w-[300px] overflow-hidden">
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

                      <div className="px-4 pb-3 mb-2 border-b border-navy-600/50">
                        <Link href={item.href} className="text-amber-500 text-xs font-bold tracking-wider uppercase hover:text-amber-400 transition-colors inline-flex items-center gap-1.5 group/all">
                          View All {item.label}
                          <svg className="w-3 h-3 group-hover/all:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </Link>
                      </div>
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-3 hover:bg-navy-700/50 transition-all duration-200 group/item"
                        >
                          <span className="text-sm text-white font-medium group-hover/item:text-amber-400 transition-colors flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-amber-500/40 group-hover/item:bg-amber-500 transition-colors" />
                            {child.label}
                          </span>
                          {'desc' in child && (
                            <span className="block text-xs text-steel-500 mt-0.5 ml-3">
                              {(child as { desc: string }).desc}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/quote" className="hidden sm:inline-flex btn-amber text-xs tracking-wider !py-2.5 !px-5">
              GET QUOTE
            </Link>
            <Link href="/cart" className="relative text-steel-400 hover:text-amber-400 transition-all duration-300 p-2.5 group" aria-label="Shopping cart">
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" /></svg>
              <span className="absolute -top-[2px] -right-[2px] bg-amber-500 text-navy-900 text-[10px] w-[18px] h-[18px] rounded-full flex items-center justify-center font-bold shadow-sm">0</span>
            </Link>

            <button
              className="xl:hidden text-white p-2 hover:text-amber-500 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              <div className="w-6 h-6 relative flex items-center justify-center">
                <span className={`absolute w-5 h-[2px] bg-current transition-all duration-300 ${mobileMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`} />
                <span className={`absolute w-5 h-[2px] bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`absolute w-5 h-[2px] bg-current transition-all duration-300 ${mobileMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className={`xl:hidden fixed inset-0 top-[76px] z-50 transition-all duration-500 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        <div className="absolute inset-0 bg-navy-900/95 backdrop-blur-xl" />

        <div className="relative h-full overflow-y-auto">
          <div className="px-4 py-4">
            <SearchBar />
          </div>
          <nav className="px-2 pb-8" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="block text-white hover:text-amber-400 px-4 py-4 text-base font-bold tracking-[2px] border-b border-navy-700/50 transition-colors"
                  style={{ fontFamily: 'var(--font-heading)' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-4 bg-navy-800/30">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block text-steel-400 hover:text-amber-400 px-4 py-3 text-sm transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
