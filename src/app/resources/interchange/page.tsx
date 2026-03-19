import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';

export const metadata: Metadata = {
  title: 'Bearing Interchange & Cross Reference',
  description: 'Cross-reference and interchange lookup for bearing part numbers across major brands including SKF, NSK, FAG, NTN, and Timken.',
};

const interchangeData = [
  { nemesis: '6205-2RS', skf: '6205-2RS1', nsk: '6205DDU', fag: '6205-2RSR', ntn: '6205LLU', timken: '6205-2RS' },
  { nemesis: '6206-2RS', skf: '6206-2RS1', nsk: '6206DDU', fag: '6206-2RSR', ntn: '6206LLU', timken: '6206-2RS' },
  { nemesis: '6207-2RS', skf: '6207-2RS1', nsk: '6207DDU', fag: '6207-2RSR', ntn: '6207LLU', timken: '6207-2RS' },
  { nemesis: '6208-2RS', skf: '6208-2RS1', nsk: '6208DDU', fag: '6208-2RSR', ntn: '6208LLU', timken: '6208-2RS' },
  { nemesis: '22210 E', skf: '22210 E', nsk: '22210EAE4', fag: '22210-E1', ntn: '22210E', timken: '22210EJW33' },
  { nemesis: '32008 X', skf: '32008 X/Q', nsk: 'HR32008XJ', fag: '32008-X', ntn: '32008X', timken: '32008X' },
];

export default function InterchangePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Resources', href: '/resources' },
        { label: 'Interchange / Cross Reference' },
      ]} />

      <h1 className="text-3xl font-extrabold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
        Bearing Interchange & Cross Reference
      </h1>
      <p className="text-muted mb-8 max-w-3xl">
        Use this table to find interchange part numbers across major bearing brands.
        This cross-reference is provided as guidance. Always verify suitability for your specific application.
      </p>

      {/* Search */}
      <div className="bg-surface border border-border rounded-xl p-6 mb-8">
        <label htmlFor="xref-search" className="block text-sm font-semibold mb-2">Search by Part Number</label>
        <div className="flex gap-3">
          <input
            id="xref-search"
            type="text"
            placeholder="Enter any brand's part number..."
            className="flex-1 border border-border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-blue-500 transition-colors">
            Search
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-surface border border-border rounded-xl overflow-hidden mb-8">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-steel-100 border-b border-border">
                <th className="text-left px-4 py-3 font-semibold">Nemesis</th>
                <th className="text-left px-4 py-3 font-semibold">SKF*</th>
                <th className="text-left px-4 py-3 font-semibold">NSK*</th>
                <th className="text-left px-4 py-3 font-semibold">FAG*</th>
                <th className="text-left px-4 py-3 font-semibold">NTN*</th>
                <th className="text-left px-4 py-3 font-semibold">Timken*</th>
              </tr>
            </thead>
            <tbody>
              {interchangeData.map((row) => (
                <tr key={row.nemesis} className="border-b border-steel-100 hover:bg-steel-100 transition-colors">
                  <td className="px-4 py-3 font-medium">
                    <Link href={`/shop?q=${row.nemesis}`} className="text-blue-600 hover:underline">{row.nemesis}</Link>
                  </td>
                  <td className="px-4 py-3 text-muted">{row.skf}</td>
                  <td className="px-4 py-3 text-muted">{row.nsk}</td>
                  <td className="px-4 py-3 text-muted">{row.fag}</td>
                  <td className="px-4 py-3 text-muted">{row.ntn}</td>
                  <td className="px-4 py-3 text-muted">{row.timken}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
        <p className="text-sm text-amber-800">
          <strong>Disclaimer:</strong> This cross-reference information is provided for general guidance only.
          Part numbers marked with * are trademarks of their respective owners (SKF, NSK, FAG/Schaeffler, NTN, Timken)
          and are used here solely for identification and interchange purposes. Nemesis Bearings is not affiliated with,
          endorsed by, or authorized by these companies. It is the buyer&apos;s responsibility to verify that a replacement
          bearing meets the requirements of their specific application.
        </p>
      </div>

      <div className="text-center">
        <p className="text-muted mb-4">Can&apos;t find your part number?</p>
        <div className="flex justify-center gap-4">
          <Link href="/quote" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-blue-500 transition-colors">
            Submit an RFQ
          </Link>
          <Link href="/support" className="border border-border px-6 py-3 rounded-lg font-semibold text-sm hover:bg-steel-100 transition-colors">
            Ask Technical Support
          </Link>
        </div>
      </div>
    </div>
  );
}
