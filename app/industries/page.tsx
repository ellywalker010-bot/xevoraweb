import type { Metadata } from 'next';
import Link from 'next/link';
import { Section, SectionHeading } from '@/components/ui/Section';
import { PageHero } from '@/components/sections/PageHero';
import { ClosingCTA } from '@/components/sections/ClosingCTA';
import { industries } from '@/lib/content/industries';

export const metadata: Metadata = {
  title: 'Industries We Serve',
  description:
    'XEVORA Technologies builds software for education, retail, SMEs, professional services, financial technology, logistics, and public institutions.',
  alternates: { canonical: 'https://xevoratechnologies.com/industries' },
};

export default function IndustriesPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Industries"
        title="Sectors we are built to serve."
        description="Software only solves problems when it fits the operational reality of the sector it is used in. These are the industries where XEVORA is designed to work."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Industries' }]}
      />

      <Section>
        <SectionHeading
          eyebrow="Focus"
          title="Where our experience and approach fit best."
          description="Each industry has specific pressures — regulatory, operational, or competitive. We build software that responds to those pressures rather than ignoring them."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:grid-cols-2">
          {industries.map((ind, i) => (
            <article
              key={ind.slug}
              className="group relative bg-ink-950 p-8 transition-colors hover:bg-ink-900 md:p-10"
            >
              <p className="mb-6 font-mono text-[11px] text-neutral-600">
                {String(i + 1).padStart(2, '0')}
              </p>
              <h3 className="font-display text-xl font-semibold tracking-tight text-neutral-50">
                {ind.name}
              </h3>
              <p className="mt-2 text-sm font-medium text-brand-orange">
                {ind.tagline}
              </p>
              <p className="mt-5 text-sm leading-relaxed text-neutral-400">
                {ind.body}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-10 text-xs text-neutral-500">
          Each industry is presented as a target area for XEVORA&apos;s services. Specific
          client engagements in a given sector will be listed here once publication is
          approved.
        </p>
      </Section>

      {/* CTA */}
      <Section tone="darkest">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-neutral-50 md:text-3xl">
              Do not see your industry listed?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-400">
              The sectors above are where our experience fits most directly. If your
              business has a software problem outside this list, we are still glad to
              hear about it.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 self-start rounded-full bg-brand-orange px-6 py-3 text-sm font-semibold text-ink-950 transition-colors hover:bg-brand-orange-400 md:self-end"
          >
            Start a conversation
            <svg
              aria-hidden
              viewBox="0 0 16 16"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </Link>
        </div>
      </Section>
    </main>
  );
}