import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';

export const metadata: Metadata = {
  title: 'Technical Support',
  description: 'Technical support for bearing selection, installation, lubrication, troubleshooting, and failure analysis from Nemesis Bearings.',
};

export default function SupportPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Technical Support' },
      ]} />

      <h1 className="text-3xl font-extrabold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Technical Support</h1>
      <p className="text-muted mb-8 max-w-2xl">
        Our technical team can help with bearing selection, application engineering, installation guidance,
        and troubleshooting. We support maintenance teams, engineers, and buyers.
      </p>

      <div className="grid sm:grid-cols-2 gap-5 mb-10">
        {[
          { title: 'Bearing Selection', desc: 'Help identifying the right bearing type, size, and configuration for your application.', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01' },
          { title: 'Cross-Reference', desc: 'Interchange and cross-reference lookup for part numbers across brands.', icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4' },
          { title: 'Fit & Installation', desc: 'Shaft and housing fit recommendations, mounting procedures, and tolerance guidance.', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' },
          { title: 'Failure Analysis', desc: 'Help diagnosing bearing failure modes and identifying root causes for prevention.', icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' },
        ].map((service) => (
          <div key={service.title} className="bg-surface border border-border rounded-xl p-6">
            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} /></svg>
            </div>
            <h2 className="font-semibold mb-2">{service.title}</h2>
            <p className="text-sm text-muted">{service.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-navy-900 text-white rounded-xl p-8">
        <h2 className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Contact Technical Support</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <p className="text-steel-300 text-sm mb-4">
              For fastest response, call us during business hours. For non-urgent inquiries, email
              with as much detail as possible about your application.
            </p>
            <div className="space-y-3">
              <a href="tel:+19154010626" className="flex items-center gap-3 text-blue-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                (915) 401-0626
              </a>
              <a href="mailto:sales@nemesisbearings.com" className="flex items-center gap-3 text-blue-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                sales@nemesisbearings.com
              </a>
              <p className="text-sm text-steel-400">Mon–Fri 8:00 AM – 5:00 PM EST</p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-sm mb-3">Helpful Information to Include:</h3>
            <ul className="text-sm text-steel-300 space-y-1">
              <li>Current part number (if known)</li>
              <li>Equipment make and model</li>
              <li>Application and operating conditions</li>
              <li>Dimensions (bore, OD, width) if part number unknown</li>
              <li>Photos of the bearing or failure (if applicable)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Resources */}
      <div className="mt-10">
        <h2 className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Self-Service Resources</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { label: 'Selector Guide', href: '/resources/selector-guide' },
            { label: 'Cross Reference', href: '/resources/interchange' },
            { label: 'Fit & Tolerance', href: '/resources/fit-tolerance' },
            { label: 'Lubrication Guide', href: '/resources/lubrication-guide' },
            { label: 'Damage Analysis', href: '/resources/damage-analysis' },
            { label: 'FAQ', href: '/faq' },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="bg-surface border border-border rounded-lg px-4 py-3 text-sm font-medium hover:border-blue-300 hover:text-blue-600 transition-colors">
              {link.label} &rarr;
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
