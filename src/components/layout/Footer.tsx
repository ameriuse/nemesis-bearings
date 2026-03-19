import Link from 'next/link';

const footerLinks = {
  Products: [
    { label: 'Ball Bearings', href: '/shop/ball-bearings' },
    { label: 'Roller Bearings', href: '/shop/roller-bearings' },
    { label: 'Spherical Bearings', href: '/shop/spherical-bearings' },
    { label: 'Thrust Bearings', href: '/shop/thrust-bearings' },
    { label: 'Mounted Units', href: '/shop/mounted-units' },
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
    { label: 'Quality', href: '/quality' },
    { label: 'Support', href: '/support' },
    { label: 'Contact', href: '/contact' },
    { label: 'Shipping', href: '/shipping' },
    { label: 'Returns', href: '/returns' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
};

const capabilityItems = [
  { label: 'Cross-reference help', value: 'Major brand interchange support' },
  { label: 'Fast response', value: 'Same-day handling on stocked items' },
  { label: 'Traceable supply', value: 'Batch tracking and documentation ready' },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-steel-300">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute left-1/2 top-0 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-amber-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-[1400px] px-4 pt-16">
        <div className="surface-dark overflow-hidden rounded-[2rem] p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <span className="section-kicker section-kicker-light">Start The Conversation</span>
              <h2 className="mt-5 max-w-2xl text-4xl font-bold text-white md:text-5xl" style={{ fontFamily: 'var(--font-heading)' }}>
                Need a reliable bearing source that can move fast when production is on the line?
              </h2>
              <p className="mt-5 max-w-2xl text-base text-steel-400 md:text-lg">
                Send the part number, application, or dimensions. We will help you match the right product,
                confirm availability, and keep the quote process moving.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/quote" className="btn-amber">
                  Request Quote
                </Link>
                <a href="tel:+19154010626" className="btn-outline !text-white !bg-white/6 !border-white/12">
                  Call Sales
                </a>
              </div>
            </div>

            <div className="grid gap-3">
              {capabilityItems.map((item) => (
                <div key={item.label} className="rounded-[1.5rem] border border-white/8 bg-white/5 p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-400">
                    {item.label}
                  </p>
                  <p className="mt-2 text-base font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-[1400px] px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_repeat(4,1fr)]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/8 bg-white/6">
                <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="12" cy="12" r="8.5" strokeWidth="1.8" />
                  <circle cx="12" cy="12" r="2.9" fill="currentColor" strokeWidth="0" />
                  <circle cx="12" cy="3.8" r="1.3" fill="currentColor" strokeWidth="0" />
                  <circle cx="12" cy="20.2" r="1.3" fill="currentColor" strokeWidth="0" />
                  <circle cx="3.8" cy="12" r="1.3" fill="currentColor" strokeWidth="0" />
                  <circle cx="20.2" cy="12" r="1.3" fill="currentColor" strokeWidth="0" />
                </svg>
              </div>
              <div>
                <span className="block text-lg font-bold tracking-[0.28em] text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                  NEMESIS
                </span>
                <span className="block text-[10px] uppercase tracking-[0.26em] text-steel-500">
                  Industrial bearings
                </span>
              </div>
            </div>

            <p className="mt-6 max-w-sm text-sm leading-7 text-steel-400">
              Practical bearing support for maintenance teams, engineers, and buyers who need fast answers,
              solid interchange guidance, and dependable follow-through.
            </p>

            <div className="mt-6 space-y-3 text-sm">
              <a href="tel:+19154010626" className="flex items-center gap-3 hover:text-white">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/8 bg-white/6">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M3 5a2 2 0 012-2h3.3a1 1 0 01.95.68l1.5 4.49a1 1 0 01-.5 1.21l-2.26 1.13a11.04 11.04 0 005.52 5.52l1.13-2.26a1 1 0 011.21-.5l4.49 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z"
                    />
                  </svg>
                </span>
                <span>(915) 401-0626</span>
              </a>
              <a href="mailto:sales@nemesisbearings.com" className="flex items-center gap-3 hover:text-white">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/8 bg-white/6">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M3 8l7.9 5.26a2 2 0 002.2 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <span>sales@nemesisbearings.com</span>
              </a>
              <p className="flex items-center gap-3 text-steel-500">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/8 bg-white/6">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                <span>Mon-Fri 8 AM - 5 PM EST</span>
              </p>
            </div>
          </div>

          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3
                className="text-xs font-semibold uppercase tracking-[0.24em] text-steel-500"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {section}
              </h3>
              <ul className="mt-5 space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-steel-400 hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/8 pt-6 text-xs text-steel-500 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Nemesis Bearings. All rights reserved.</p>
          <p className="max-w-3xl leading-6 md:text-right">
            All referenced trademarks remain the property of their respective owners and are used only for
            identification, interchange, and compatibility guidance.
          </p>
        </div>
      </div>
    </footer>
  );
}
