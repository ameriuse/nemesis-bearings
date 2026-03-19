import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';

export const metadata: Metadata = {
  title: 'Resources | Engineering Guides & Technical Documents',
  description: 'Bearing selector guides, cross-reference tools, fit & tolerance charts, lubrication guides, and technical downloads from Nemesis Bearings.',
};

const resources = [
  {
    title: 'Bearing Selector Guide',
    description: 'Determine the right bearing type based on your load, speed, environment, and mounting requirements.',
    href: '/resources/selector-guide',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
  },
  {
    title: 'Interchange / Cross Reference',
    description: 'Look up interchange part numbers across major bearing brands. Find compatible alternatives.',
    href: '/resources/interchange',
    icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4',
  },
  {
    title: 'Fit & Tolerance Guide',
    description: 'Shaft and housing fit recommendations, tolerance tables, and installation best practices.',
    href: '/resources/fit-tolerance',
    icon: 'M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4',
  },
  {
    title: 'Lubrication Guide',
    description: 'Grease and oil selection, relubrication intervals, and lubrication best practices for bearings.',
    href: '/resources/lubrication-guide',
    icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
  },
  {
    title: 'Bearing Damage Analysis',
    description: 'Identify common bearing failure modes, root causes, and prevention strategies.',
    href: '/resources/damage-analysis',
    icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
  },
  {
    title: 'Industry Applications',
    description: 'Bearing solutions by industry: mining, agriculture, food processing, automotive, and more.',
    href: '/resources/applications',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
  },
  {
    title: 'Downloads Library',
    description: 'Datasheets, CAD files, technical documents, and product catalogs.',
    href: '/resources/downloads',
    icon: 'M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  },
];

export default function ResourcesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Resources' },
      ]} />

      <h1 className="text-3xl font-extrabold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
        Engineering Resources
      </h1>
      <p className="text-muted mb-10 max-w-2xl">
        Technical guides, cross-reference tools, and documentation to help you select, install, and maintain bearings.
      </p>

      <div className="grid sm:grid-cols-2 gap-5">
        {resources.map((resource) => (
          <Link
            key={resource.href}
            href={resource.href}
            className="bg-surface border border-border rounded-xl p-6 hover:shadow-lg hover:border-blue-200 transition-all group"
          >
            <div className="w-12 h-12 bg-steel-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-50 transition-colors">
              <svg className="w-6 h-6 text-steel-600 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={resource.icon} />
              </svg>
            </div>
            <h2 className="font-bold mb-2 group-hover:text-blue-600 transition-colors">{resource.title}</h2>
            <p className="text-sm text-muted">{resource.description}</p>
          </Link>
        ))}
      </div>

      <div className="mt-12 bg-navy-900 text-white rounded-xl p-8 text-center">
        <h2 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
          Need Personalized Technical Help?
        </h2>
        <p className="text-steel-300 mb-6">
          Our team is available to assist with bearing selection, application engineering, and troubleshooting.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/support" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-blue-500 transition-colors">
            Contact Technical Support
          </Link>
          <a href="tel:+19154010626" className="border border-steel-500 text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-white/10 transition-colors">
            Call (915) 401-0626
          </a>
        </div>
      </div>
    </div>
  );
}
