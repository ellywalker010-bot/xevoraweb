import type { DivisionService } from '@/lib/content/divisions';

type StatusStyle = {
  label: string;
  className: string;
};

const statusStyles: Record<DivisionService['status'], StatusStyle> = {
  live: {
    label: 'Available',
    className: 'border-brand-orange/40 bg-brand-orange/10 text-brand-orange',
  },
  'in-development': {
    label: 'In development',
    className: 'border-brand-yellow/30 bg-brand-yellow/[0.08] text-brand-yellow-300',
  },
  concept: {
    label: 'Concept',
    className: 'border-white/15 bg-white/[0.03] text-neutral-400',
  },
};

export function ServicesGrid({
  services,
}: {
  services: DivisionService[];
}) {
  return (
    <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-2">
      {services.map((s) => {
        const style = statusStyles[s.status];
        return (
          <div
            key={s.name}
            className="flex items-start justify-between gap-4 bg-ink-950 p-6"
          >
            <div>
              <p className="text-sm font-medium text-neutral-100">{s.name}</p>
              {s.note && (
                <p className="mt-1 text-xs leading-relaxed text-neutral-500">
                  {s.note}
                </p>
              )}
            </div>
            <span
              className={`shrink-0 rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${style.className}`}
            >
              {style.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}