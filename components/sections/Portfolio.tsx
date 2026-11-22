import { Section, SectionHeading } from '@/components/ui/Section';
import { projects } from '@/lib/content/projects';

export function Portfolio() {
  return (
    <Section id="portfolio" tone="darkest">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow="Selected Work"
          title="Platforms we've designed and built."
          description="A sample of the kinds of systems XEVORA designs. Entries marked “Demo” are demonstrations of capability, not client engagements."
        />
      </div>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.slug}
            className="group flex flex-col rounded-2xl border border-white/10 bg-ink-900 p-6 transition-colors hover:border-brand-orange/40"
          >
            {/* Header: division + status */}
            <div className="mb-5 flex items-center justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
                {p.division}
              </span>
              {p.status === 'demonstration' && (
                <span className="rounded-full border border-brand-orange/30 bg-brand-orange/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand-orange">
                  Demo
                </span>
              )}
              {p.status === 'in-development' && (
                <span className="rounded-full border border-white/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-neutral-400">
                  In development
                </span>
              )}
            </div>

            {/* Title + summary */}
            <h3 className="font-display text-lg font-semibold tracking-tight text-neutral-50">
              {p.title}
            </h3>
            <p className="mt-3 flex-1 text-[13px] leading-relaxed text-neutral-400">
              {p.summary}
            </p>

            {/* Tags */}
            <div className="mt-6 flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-white/[0.04] px-2 py-0.5 text-[10px] font-medium text-neutral-400"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <p className="mt-10 text-xs text-neutral-500">
        Additional case studies will be published here as projects complete and clients
        approve publication.
      </p>
    </Section>
  );
}