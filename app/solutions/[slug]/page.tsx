import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { divisions, divisionsBySlug, type Division } from '@/lib/content/divisions';
import { DivisionHero } from '@/components/sections/DivisionHero';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { DivisionCTA } from '@/components/sections/DivisionCTA';
import { Section } from '@/components/ui/Section';

/** Generate all five division pages at build time. */
export function generateStaticParams() {
  return divisions.map((d) => ({ slug: d.slug }));
}

/** Per-division SEO metadata. */
export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const division = divisionsBySlug[params.slug as Division['slug']];
  if (!division) return {};

  const description = `${division.name} — ${division.category}. ${division.purpose}`;
  return {
    title: division.name,
    description,
    alternates: {
      canonical: `https://xevoratechnologies.com/solutions/${division.slug}`,
    },
    openGraph: {
      title: `${division.name} — XEVORA Technologies`,
      description,
      url: `https://xevoratechnologies.com/solutions/${division.slug}`,
      type: 'website',
    },
  };
}

export default function DivisionPage({ params }: { params: { slug: string } }) {
  const division = divisionsBySlug[params.slug as Division['slug']];
  if (!division) notFound();

  return (
    <main id="main">
      <DivisionHero division={division} />

      {/* Intro */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-orange">
              Overview
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-neutral-50 md:text-3xl">
              What {division.shortName} does.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-neutral-400">
            {division.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section tone="darkest">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-orange">
              Capabilities
            </p>
            <h2 className="mt-3 max-w-xl font-display text-2xl font-semibold tracking-tight text-neutral-50 md:text-3xl">
              Services and products within {division.shortName}.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-neutral-500">
            Items marked <span className="text-brand-orange">Available</span> are
            operational today. Others are actively in development or being scoped.
          </p>
        </div>

        <ServicesGrid services={division.services} />

        {division.complianceNote && (
          <div className="mt-10 rounded-xl border border-white/10 bg-white/[0.02] p-5 text-sm leading-relaxed text-neutral-400">
            <p className="mb-1 font-semibold text-neutral-200">Important notice</p>
            {division.complianceNote}
          </div>
        )}
      </Section>

      <DivisionCTA division={division} />
    </main>
  );
}