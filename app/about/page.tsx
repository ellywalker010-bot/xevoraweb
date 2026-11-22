import type { Metadata } from 'next';
import { Section, SectionHeading } from '@/components/ui/Section';
import { PageHero } from '@/components/sections/PageHero';
import { ClosingCTA } from '@/components/sections/ClosingCTA';
import { site } from '@/lib/content/site';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'XEVORA Technologies builds software, digital platforms, and communication systems that simplify business operations for organisations across industries.',
  alternates: { canonical: 'https://xevoratechnologies.com/about' },
};

const values = [
  {
    name: 'Innovation',
    body: 'We look for the simpler, sturdier way to solve a problem — not the fashionable one.',
  },
  {
    name: 'Integrity',
    body: 'We tell clients what is realistic, including when a project is not the right fit.',
  },
  {
    name: 'Reliability',
    body: 'Systems we build are meant to keep working when we are not watching them.',
  },
  {
    name: 'Simplicity',
    body: 'Good software reduces the number of moving parts a business has to think about.',
  },
  {
    name: 'Continuous improvement',
    body: 'A first version is a starting point. We improve what we ship as we learn how it is used.',
  },
  {
    name: 'Customer-focused development',
    body: 'We build around real workflows and real constraints, not assumptions made in isolation.',
  },
];

export default function AboutPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="About XEVORA"
        title="A technology company built around operational clarity."
        description={`${site.name} exists to simplify how businesses and institutions run — through software that is practical, well-built, and maintainable over years.`}
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'About Us' }]}
      />

      {/* Who we are */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-orange">
              Who we are
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-neutral-50 md:text-3xl">
              Software as a practical tool, not a badge of modernity.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-neutral-400">
            <p>
              XEVORA Technologies is a technology company focused on business software,
              digital products, communication systems, and infrastructure. We work with
              businesses, institutions, and individual clients who have real operational
              problems — not abstract digital transformation agendas.
            </p>
            <p>
              We operate as five distinct divisions under one engineering and design
              standard. That structure lets each area go deep in its domain without
              losing the coherence of a single partner who understands the whole
              picture.
            </p>
            <p>
              Everything we build starts with the same question: what is this system
              going to take off someone&apos;s plate? If the answer is unclear, the
              software is not ready to be built.
            </p>
          </div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section tone="darkest">
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          <div className="rounded-2xl border border-white/10 bg-ink-950 p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-orange">
              Mission
            </p>
            <p className="mt-5 font-display text-xl font-medium leading-snug tracking-tight text-neutral-50 md:text-2xl">
              To simplify business operations through innovative, practical, and
              accessible technology solutions.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-ink-950 p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-yellow-300">
              Vision
            </p>
            <p className="mt-5 font-display text-xl font-medium leading-snug tracking-tight text-neutral-50 md:text-2xl">
              To become a trusted technology partner empowering businesses and
              institutions through intelligent digital solutions.
            </p>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section>
        <SectionHeading
          eyebrow="Core Values"
          title="What we hold to when a project gets difficult."
          description="Values only matter at the moments they are inconvenient to follow. These are the ones we apply under pressure."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <div key={v.name} className="bg-ink-950 p-8">
              <h3 className="font-display text-base font-semibold tracking-tight text-neutral-50">
                {v.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Approach to technology */}
      <Section tone="darkest">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-orange">
              Our approach to technology
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-neutral-50 md:text-3xl">
              We prefer boring infrastructure and clear interfaces.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-neutral-400">
            <p>
              Technology that impresses in a demo is often the technology that fails in
              production. We build with proven tools, well-understood patterns, and
              infrastructure that has been tested at scale. Novelty is not a virtue
              here.
            </p>
            <p>
              Interfaces are designed around the people who will use them daily. Data
              should be visible where decisions are made, and hidden where it is noise.
            </p>
            <p>
              Nothing is deliberately proprietary. Where we work with a client, we
              structure the engagement so the client retains ownership of their data and
              has a path to maintain the system if the partnership ever ends.
            </p>
          </div>
        </div>
      </Section>

      <ClosingCTA />
    </main>
  );
}