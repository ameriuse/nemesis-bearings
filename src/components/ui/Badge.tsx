import { AvailabilityStatus } from '@/types/product';

const statusConfig: Record<
  AvailabilityStatus,
  { label: string; className: string; dotClassName: string }
> = {
  'in-stock': {
    label: 'In Stock',
    className: 'bg-green-100 text-green-600 border-green-600/10',
    dotClassName: 'bg-green-500',
  },
  'low-stock': {
    label: 'Low Stock',
    className: 'bg-amber-300/35 text-amber-600 border-amber-500/15',
    dotClassName: 'bg-amber-500',
  },
  'made-to-order': {
    label: 'Made To Order',
    className: 'bg-blue-400/10 text-blue-600 border-blue-500/12',
    dotClassName: 'bg-blue-500',
  },
  discontinued: {
    label: 'Discontinued',
    className: 'bg-red-100 text-red-600 border-red-600/10',
    dotClassName: 'bg-red-600',
  },
  'quote-required': {
    label: 'Quote Required',
    className: 'bg-steel-100 text-steel-700 border-steel-300/60',
    dotClassName: 'bg-steel-500',
  },
};

export function AvailabilityBadge({ status }: { status: AvailabilityStatus }) {
  const config = statusConfig[status];

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] ${config.className}`}
    >
      <span className={`h-2 w-2 rounded-full ${config.dotClassName}`} />
      {config.label}
    </span>
  );
}

export function CategoryBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-blue-500/10 bg-blue-400/8 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-600">
      {label}
    </span>
  );
}
