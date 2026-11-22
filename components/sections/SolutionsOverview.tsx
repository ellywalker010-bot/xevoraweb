import Link from 'next/link';
import { Section, SectionHeading } from '@/components/ui/Section';
import { divisions, type Division } from '@/lib/content/divisions';

export function SolutionsOverview() {
  const [primary, ...rest] = divisions;

  return (
    <Section id="solutions">
      <SectionHeading
        eyebrow="Our Solutions"
        title="One technology partner. Multiple disciplines."
        description="XEVORA operates as five integrated divisions. Each stands on its own — together they cover the full path from infrastructure to interface."
      />

      <div className="mt-14 grid gap-4 lg:grid-cols-2">
        {/* Featured (first) division — larger card */}
        <DivisionCardLarge division={primary} />

        {/* Remaining four — compact stacked cards */}
        <div className="grid gap-4 sm:grid-cols-2">
          {rest.map((d) => (
            <DivisionCardCompact key={d.slug} division={d} />
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------- Featured card ---------- */

function DivisionCardLarge({ division }: { division: Division }) {
  return (
    <Link
      href={`/solutions/${division.slug}`}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-ink-900 p-8 transition-colors hover:border-brand-orange/40 md:p-10"
    >
      {/* Corner accent glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(circle, rgba(249,115,22,0.22) 0%, transparent 70%)',
        }}
      />

      <div className="relative">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-orange">
          {division.category}
        </p>
        <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-neutral-50 md:text-3xl">
          {division.name}
        </h3>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-neutral-400 md:text-base">
          {division.summary}
        </p>
      </div>

      <div className="relative mt-10 flex flex-wrap gap-2">
        {division.services.slice(0, 4).map((s) => (
          <span
            key={s.name}
            className="rounded-full border border-white/10 px-3 py-1 text-[11px] font-medium text-neutral-400"
          >
            {s.name}
          </span>
        ))}
      </div>

      <span className="relative mt-8 inline-flex items-center gap-2 text-sm font-semibold text-neutral-100 transition-colors group-hover:text-brand-yellow">
        Explore {division.shortName}
        <ArrowRight />
      </span>
    </Link>
  );
}

/* ---------- Compact card ---------- */

function DivisionCardCompact({ division }: { division: Division }) {
  return (
    <Link
      href={`/solutions/${division.slug}`}
      className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-ink-900 p-6 transition-colors hover:border-brand-orange/40"
    >
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
          {division.category}
        </p>
        <h3 className="mt-3 font-display text-lg font-semibold tracking-tight text-neutral-50">
          {division.name}
        </h3>
        <p className="mt-3 text-[13px] leading-relaxed text-neutral-400">
          {division.summary}
        </p>
      </div>
      <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-300 transition-colors group-hover:text-brand-yellow">
        Learn more
        <ArrowRight small />
      </span>
    </Link>
  );
}

/* ---------- Icon ---------- */

function ArrowRight({ small }: { small?: boolean }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 16 16"
      className={`${small ? 'h-3 w-3' : 'h-4 w-4'} transition-transform group-hover:translate-x-0.5`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}