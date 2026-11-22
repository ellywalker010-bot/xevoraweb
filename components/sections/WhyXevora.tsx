import { Section } from '@/components/ui/Section';

const principles = [
  {
    title: 'Business-first engineering',
    body: 'Every system we build starts from your workflow and operational reality — not from a template, and not from what is convenient for us to build.',
  },
  {
    title: 'Systems that scale with you',
    body: 'We build on foundations that can handle growth: proper databases, versioned code, and architecture that does not need to be replaced in a year.',
  },
  {
    title: 'Maintainable, not black-box',
    body: 'You receive documentation, source access where agreed, and a codebase that a competent engineer can pick up. Nothing is deliberately locked in.',
  },
  {
    title: 'One partner across layers',
    body: 'Infrastructure, software, communication, and design under one roof means fewer handoffs, faster fixes, and a single point of accountability.',
  },
  {
    title: 'Support that answers',
    body: 'Post-launch maintenance is part of the engagement. When something breaks, you reach the people who built it.',
  },
];

export function WhyXevora() {
  return (
    <Section id="why" tone="darkest">
      <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        {/* Left: heading */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-orange">
            Why XEVORA
          </p>
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-neutral-50 md:text-4xl">
            A technology partner built for operational reality.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-neutral-400">
            We are not interested in shipping software that looks impressive in a
            screenshot. We are interested in systems that quietly work, every day,
            for the people who depend on them.
          </p>
        </div>

        {/* Right: principles list */}
        <ol className="relative">
          {/* Vertical rule */}
          <div
            aria-hidden
            className="absolute left-0 top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-brand-orange/50 via-white/10 to-transparent md:block"
          />
          <div className="space-y-10 md:pl-8">
            {principles.map((p, i) => (
              <li key={p.title} className="relative">
                {/* Node on the rule */}
                <span
                  aria-hidden
                  className="absolute -left-8 top-1.5 hidden h-2 w-2 -translate-x-1/2 rounded-full bg-brand-orange md:block"
                />
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-neutral-600">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold tracking-tight text-neutral-50">
                      {p.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-neutral-400">
                      {p.body}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </div>
        </ol>
      </div>
    </Section>
  );
}