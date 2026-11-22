import { Button } from '@/components/ui/Button';
import type { Division } from '@/lib/content/divisions';

export function DivisionCTA({ division }: { division: Division }) {
  return (
    <section className="relative overflow-hidden border-t border-white/5">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(500px circle at 25% 30%, rgba(249,115,22,0.12), transparent 55%)',
        }}
      />
      <div className="relative mx-auto max-w-container px-6 py-20 md:px-8 md:py-24">
        <div className="max-w-2xl">
          <h2 className="font-display text-2xl font-semibold leading-tight tracking-tight text-neutral-50 md:text-3xl">
            Have something in mind for {division.shortName}?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-400">
            Tell us about your workflow, your constraints, and what a successful
            outcome looks like. We will respond with an honest assessment.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href={division.cta.href} variant="primary" size="lg">
              {division.cta.label}
            </Button>
            <Button href="/solutions" variant="secondary" size="lg">
              View all solutions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}