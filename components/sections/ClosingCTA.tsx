import { Button } from '@/components/ui/Button';

export function ClosingCTA() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-ink-950">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(600px circle at 30% 30%, rgba(249,115,22,0.14), transparent 55%), radial-gradient(500px circle at 75% 70%, rgba(250,204,21,0.08), transparent 55%)',
        }}
      />
      <div className="relative mx-auto max-w-container px-6 py-24 md:px-8 md:py-32">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand-orange">
            Get Started
          </p>
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-neutral-50 md:text-5xl">
            Let&apos;s build something that matters.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-400 md:text-lg">
            Have a business challenge that technology could solve? Tell us what you are
            trying to achieve. We will tell you honestly whether we are the right partner
            for it.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/contact" variant="primary" size="lg">
              Start a Project
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Contact XEVORA
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}