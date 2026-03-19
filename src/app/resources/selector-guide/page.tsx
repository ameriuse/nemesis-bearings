import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';

export const metadata: Metadata = {
  title: 'Bearing Selector Guide',
  description: 'Interactive bearing selector guide. Choose the right bearing type based on load, speed, environment, and mounting requirements.',
};

export default function SelectorGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Resources', href: '/resources' },
        { label: 'Bearing Selector Guide' },
      ]} />

      <h1 className="text-3xl font-extrabold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Bearing Selector Guide</h1>
      <p className="text-muted mb-10">Use this guide to determine the right bearing type for your application.</p>

      <div className="space-y-6">
        {[
          { type: 'Deep Groove Ball Bearings', best: 'General purpose. Moderate radial and light axial loads. High speeds.', apps: 'Electric motors, pumps, fans, conveyors', series: '6000, 6200, 6300' },
          { type: 'Angular Contact Ball Bearings', best: 'Combined radial and axial loads. High speed, high precision.', apps: 'Machine tool spindles, pumps, compressors', series: '7200, 7300' },
          { type: 'Cylindrical Roller Bearings', best: 'Heavy radial loads. High speeds under radial load.', apps: 'Gearboxes, rolling mills, electric motors', series: 'NU, NJ, NUP' },
          { type: 'Tapered Roller Bearings', best: 'Combined heavy radial and axial loads.', apps: 'Automotive hubs, gearboxes, machine tools', series: '30000, 32000, 33000' },
          { type: 'Spherical Roller Bearings', best: 'Heavy loads with misalignment, shock, vibration.', apps: 'Mining, crushers, vibrating screens, paper mills', series: '22200, 22300, 23000' },
          { type: 'Thrust Bearings', best: 'Axial loads only. Low to moderate speeds.', apps: 'Screw jacks, turntables, vertical pumps', series: '51100, 51200, 51300' },
        ].map((b) => (
          <div key={b.type} className="bg-surface border border-border rounded-xl p-6">
            <h2 className="font-bold text-lg mb-3" style={{ fontFamily: 'var(--font-heading)' }}>{b.type}</h2>
            <div className="grid sm:grid-cols-3 gap-4 text-sm">
              <div><p className="font-semibold text-xs uppercase text-steel-700 mb-1">Best For</p><p className="text-muted">{b.best}</p></div>
              <div><p className="font-semibold text-xs uppercase text-steel-700 mb-1">Applications</p><p className="text-muted">{b.apps}</p></div>
              <div><p className="font-semibold text-xs uppercase text-steel-700 mb-1">Series</p><p className="text-muted">{b.series}</p></div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <p className="text-muted mb-4">Need help selecting?</p>
        <Link href="/quote" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-blue-500 transition-colors">
          Submit an RFQ
        </Link>
      </div>
    </div>
  );
}
