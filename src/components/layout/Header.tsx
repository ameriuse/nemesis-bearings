'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import SearchBar from './SearchBar';

const navItems = [
  {
    label: 'Products',
    href: '/shop',
    children: [
      { label: 'Ball Bearings', href: '/shop/ball-bearings', desc: 'Deep groove, angular contact, self-aligning' },
      { label: 'Roller Bearings', href: '/shop/roller-bearings', desc: 'Cylindrical, tapered, and needle styles' },
      { label: 'Spherical Bearings', href: '/shop/spherical-bearings', desc: 'Roller and plain spherical options' },
      { label: 'Thrust Bearings', href: '/shop/thrust-bearings', desc: 'Axial load support for pumps and gearboxes' },
      { label: 'Mounted Units', href: '/shop/mounted-units', desc: 'Pillow block, flange, and take-up units' },
      { label: 'Housings', href: '/shop/housings', desc: 'Split and solid bearing housings' },
      { label: 'Seals & Accessories', href: '/shop/seals-and-accessories', desc: 'Lock nuts, sleeves, and lubrication accessories' },
    ],
  },
  {
    label: 'Resources',
    href: '/resources',
    children: [
      { label: 'Selector Guide', href: '/resources/selector-guide', desc: 'Match the right bearing to the application' },
      { label: 'Cross Reference', href: '/resources/interchange', desc: 'Interchange help for major brands' },
      { label: 'Lubrication Guide', href: '/resources/lubrication-guide', desc: 'Grease and oil guidance' },
      { label: 'Fit & Tolerance', href: '/resources/fit-tolerance', desc: 'Shaft and housing recommendations' },
      { label: 'Damage Analysis', href: '/resources/damage-analysis', desc: 'Troubleshooting wear and failure patterns' },
      { label: 'Downloads', href: '/resources/downloads', desc: 'Datasheets, certificates, and catalogs' },
    ],
  },
  { label: 'Quality', href: '/quality' },
  { label: 'Support', href: '/support' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

function isActivePath(pathname: string, href: string) {
  if (href === '/') {
    return pathname === href;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const lightChrome = pathname !== '/' || scrolled;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        lightChrome ? 'glass-light shadow-lg shadow-steel-950/6' : 'glass'
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-4">
        <div className="flex h-[82px] items-center justify-between gap-5">
          <Link href="/" className="group flex items-center gap-3 min-w-0">
            <div
              className={`relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border transition-all ${
                lightChrome
                  ? 'border-steel-200 bg-white text-navy-900'
                  : 'border-white/10 bg-white/6 text-white'
              }`}
            >
              <div
                className="absolute inset-0 opacity-70"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(77,131,255,0.18), transparent 45%, rgba(243,179,92,0.2) 100%)',
                }}
              />
              <svg className="relative h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="8.5" strokeWidth="1.8" />
                <circle cx="12" cy="12" r="2.9" fill="currentColor" strokeWidth="0" />
                <circle cx="12" cy="3.8" r="1.3" fill="currentColor" strokeWidth="0" />
                <circle cx="12" cy="20.2" r="1.3" fill="currentColor" strokeWidth="0" />
                <circle cx="3.8" cy="12" r="1.3" fill="currentColor" strokeWidth="0" />
                <circle cx="20.2" cy="12" r="1.3" fill="currentColor" strokeWidth="0" />
              </svg>
            </div>
            <div className="min-w-0">
              <span
                className={`block text-lg font-bold tracking-[0.28em] ${
                  lightChrome ? 'text-navy-950' : 'text-white'
                }`}
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                NEMESIS
              </span>
              <span className="block text-[10px] uppercase tracking-[0.26em] text-steel-500">
                Bearings supply and support
              </span>
            </div>
          </Link>

          <div className="hidden lg:block flex-1 max-w-xl">
            <SearchBar tone={lightChrome ? 'light' : 'dark'} />
          </div>

          <nav className="hidden xl:flex items-center gap-1" aria-label="Main navigation">
            {navItems.map((item) => {
              const active = isActivePath(pathname, item.href);
              const tone = lightChrome
                ? active
                  ? 'text-navy-950'
                  : 'text-steel-600 hover:text-navy-900'
                : active
                  ? 'text-white'
                  : 'text-steel-400 hover:text-white';

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`group inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[12px] font-semibold uppercase tracking-[0.18em] ${tone}`}
                  >
                    <span>{item.label}</span>
                    {item.children && (
                      <svg
                        className={`h-3 w-3 transition-transform ${
                          openDropdown === item.label ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                    <span
                      className={`absolute inset-x-3 bottom-1 h-[2px] rounded-full transition-all ${
                        active ? 'bg-amber-500' : 'scale-x-0 bg-blue-500 group-hover:scale-x-100'
                      }`}
                    />
                  </Link>

                  {item.children && openDropdown === item.label && (
                    <div className="absolute left-0 top-full pt-4">
                      <div className="surface-panel w-[340px] p-3">
                        <div className="mb-2 px-2">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-600">
                            Explore {item.label}
                          </p>
                        </div>
                        <div className="space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block rounded-2xl px-4 py-3 hover:bg-steel-50"
                            >
                              <span className="block text-sm font-semibold text-steel-900">
                                {child.label}
                              </span>
                              <span className="block text-xs text-steel-500">{child.desc}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/quote" className="hidden sm:inline-flex btn-amber !px-5 !py-3">
              Get Quote
            </Link>
            <Link
              href="/cart"
              className={`relative inline-flex h-11 w-11 items-center justify-center rounded-full border ${
                lightChrome
                  ? 'border-steel-200 bg-white text-steel-700 hover:text-navy-950'
                  : 'border-white/10 bg-white/6 text-steel-300 hover:text-white'
              }`}
              aria-label="Shopping cart"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.3 2.3c-.63.63-.18 1.7.71 1.7H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"
                />
              </svg>
              <span className="absolute right-[2px] top-[2px] flex h-[18px] w-[18px] items-center justify-center rounded-full bg-amber-500 text-[10px] font-bold text-navy-950">
                0
              </span>
            </Link>
            <button
              className={`xl:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border ${
                lightChrome
                  ? 'border-steel-200 bg-white text-navy-950'
                  : 'border-white/10 bg-white/6 text-white'
              }`}
              onClick={() => setMobileMenuOpen((current) => !current)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              <div className="relative h-4 w-5">
                <span
                  className={`absolute left-0 top-0 h-[2px] w-full rounded-full bg-current transition-all ${
                    mobileMenuOpen ? 'translate-y-[7px] rotate-45' : ''
                  }`}
                />
                <span
                  className={`absolute left-0 top-[7px] h-[2px] w-full rounded-full bg-current transition-opacity ${
                    mobileMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`absolute left-0 top-[14px] h-[2px] w-full rounded-full bg-current transition-all ${
                    mobileMenuOpen ? '-translate-y-[7px] -rotate-45' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`xl:hidden fixed inset-x-0 top-[118px] bottom-0 z-40 transition-all duration-300 ${
          mobileMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="absolute inset-0 bg-navy-950/80 backdrop-blur-md" />
        <div className="relative h-full overflow-y-auto px-4 pb-8 pt-5">
          <div className="surface-dark mx-auto max-w-3xl p-5">
            <SearchBar tone="dark" />
            <div className="mt-5 rounded-3xl border border-white/8 bg-white/5 p-2">
              {navItems.map((item) => (
                <div key={item.label} className="border-b border-white/6 last:border-b-0">
                  <Link
                    href={item.href}
                    className={`flex items-center justify-between rounded-2xl px-4 py-4 text-sm font-semibold uppercase tracking-[0.18em] ${
                      isActivePath(pathname, item.href) ? 'text-amber-400' : 'text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    {!item.children && (
                      <svg className="h-4 w-4 text-steel-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                  </Link>
                  {item.children && (
                    <div className="px-4 pb-4">
                      <div className="grid gap-2 rounded-2xl bg-navy-900/70 p-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="rounded-2xl border border-white/6 bg-white/4 px-4 py-3"
                          >
                            <span className="block text-sm font-semibold text-white">{child.label}</span>
                            <span className="block text-xs text-steel-400">{child.desc}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <a
                href="tel:+19154010626"
                className="rounded-full border border-white/10 bg-white/6 px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Call Sales
              </a>
              <Link href="/quote" className="btn-amber">
                Submit RFQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
