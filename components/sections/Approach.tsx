import { Section, SectionHeading } from '@/components/ui/Section';

const steps = [
  {
    n: '01',
    title: 'Discover',
    body: 'We start by understanding the actual problem — how you work today, what costs you time, and what success looks like.',
  },
  {
    n: '02',
    title: 'Design',
    body: 'We map the solution at a system and interface level before writing code. You approve the direction early.',
  },
  {
    n: '03',
    title: 'Develop',
    body: 'We build in visible milestones, not a black box. You see working software regularly, not just at the end.',
  },
  {
    n: '04',
    title: 'Deploy',
    body: 'We handle the infrastructure, migration, and rollout. Deployment is planned, not improvised.',
  },
  {
    n: '05',
    title: 'Support',
    body: 'Post-launch, we monitor, fix, and improve. Systems evolve — support is a phase, not an afterthought.',
  },
];

export function Approach() {
  return (
    <Section id="approach">
      <SectionHeading
        eyebrow="Our Approach"
        title="A process built for delivery, not for slide decks."
        description="Every engagement follows the same five phases. It keeps expectations clear on both sides and prevents surprises at the end."
      />

      {/* Desktop: horizontal timeline. Mobile: vertical. */}
      <div className="mt-16">
        {/* Horizontal connector (desktop) */}
        <div className="relative hidden lg:block">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-[26px] h-px bg-gradient-to-r from-brand-orange/60 via-white/15 to-transparent"
          />
          <ol className="relative grid grid-cols-5 gap-6">
            {steps.map((s) => (
              <li key={s.n} className="flex flex-col">
                {/* Node */}
                <span className="relative z-10 grid h-[52px] w-[52px] place-items-center rounded-full border border-white/10 bg-ink-950">
                  <span className="font-mono text-xs font-semibold text-brand-orange">
                    {s.n}
                  </span>
                  <span
                    aria-hidden
                    className="absolute inset-0 rounded-full border border-brand-orange/20"
                  />
                </span>
                <h3 className="mt-6 font-display text-base font-semibold tracking-tight text-neutral-50">
                  {s.title}
                </h3>
                <p className="mt-3 text-[13px] leading-relaxed text-neutral-400">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* Vertical (mobile / tablet) */}
        <div className="relative lg:hidden">
          <div
            aria-hidden
            className="absolute left-[25px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-brand-orange/60 via-white/15 to-transparent"
          />
          <ol className="space-y-8">
            {steps.map((s) => (
              <li key={s.n} className="relative flex gap-6">
                <span className="relative z-10 grid h-[52px] w-[52px] shrink-0 place-items-center rounded-full border border-white/10 bg-ink-950">
                  <span className="font-mono text-xs font-semibold text-brand-orange">
                    {s.n}
                  </span>
                </span>
                <div className="pt-2">
                  <h3 className="font-display text-base font-semibold tracking-tight text-neutral-50">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-neutral-400">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}