import { AvailabilityStatus } from '@/types/product';

const statusConfig: Record<AvailabilityStatus, { label: string; className: string }> = {
  'in-stock': { label: 'In Stock', className: 'bg-green-100 text-green-600' },
  'low-stock': { label: 'Low Stock', className: 'bg-amber-100 text-amber-600' },
  'made-to-order': { label: 'Made to Order', className: 'bg-blue-50 text-blue-600' },
  'discontinued': { label: 'Discontinued', className: 'bg-red-100 text-red-600' },
  'quote-required': { label: 'Quote Required', className: 'bg-steel-200 text-steel-700' },
};

export function AvailabilityBadge({ status }: { status: AvailabilityStatus }) {
  const config = statusConfig[status];
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${config.className}`}>
      {status === 'in-stock' && (
        <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-1.5" />
      )}
      {config.label}
    </span>
  );
}

export function CategoryBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-steel-200 text-steel-700">
      {label}
    </span>
  );
}
