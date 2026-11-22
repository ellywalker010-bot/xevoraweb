import type { Metadata } from 'next';
import Link from 'next/link';
import { Section, SectionHeading } from '@/components/ui/Section';
import { divisions } from '@/lib/content/divisions';

export const metadata: Metadata = {
  title: 'Solutions',
  description:
    'Five integrated divisions covering business software, digital development, communication systems, cloud infrastructure, and financial technology.',
  alternates: { canonical: 'https://xevoratechnologies.com/solutions' },
};

export default function SolutionsPage() {
  return (
    <main id="main">
      {/* Page hero */}
      <div className="relative overflow-hidden border-b border-white/5">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(600px circle at 20% 0%, rgba(249,115,22,0.14), transparent 50%), radial-gradient(500px circle at 90% 40%, rgba(250,204,21,0.07), transparent 55%)',
          }}
        />
        <div className="relative mx-auto max-w-container px-6 py-24 md:px-8 md:py-32">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand-orange">
            Our Solutions
          </p>
          <h1 className="max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-neutral-50 md:text-5xl lg:text-6xl">
            Five divisions. One integrated technology partner.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-400">
            XEVORA operates as specialised divisions so that each area receives the
            focus it deserves — while remaining connected under a single engineering
            and design standard.
          </p>
        </div>
      </div>

      {/* Division list */}
      <Section>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-2 lg:grid-cols-3">
          {divisions.map((d, i) => (
            <Link
              key={d.slug}
              href={`/solutions/${d.slug}`}
              className="group relative flex flex-col justify-between bg-ink-950 p-8 transition-colors hover:bg-ink-900"
            >
              <div>
                <p className="mb-6 font-mono text-[11px] text-neutral-600">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
                  {d.category}
                </p>
                <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-neutral-50">
                  {d.name}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-neutral-400">
                  {d.summary}
                </p>
              </div>
              <div className="mt-10 flex items-center gap-2 text-sm font-semibold text-neutral-300 transition-colors group-hover:text-brand-yellow">
                Explore
                <svg
                  aria-hidden
                  viewBox="0 0 16 16"
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </main>
  );
}