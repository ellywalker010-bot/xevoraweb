import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { SolutionsOverview } from '@/components/sections/SolutionsOverview';
import { WhyXevora } from '@/components/sections/WhyXevora';
import { Approach } from '@/components/sections/Approach';
import { Portfolio } from '@/components/sections/Portfolio';
import { LatestFromXevora } from '@/components/sections/LatestFromXevora';
import { ClosingCTA } from '@/components/sections/ClosingCTA';

export default function HomePage() {
  return (
    <main id="main" className="relative">
      {/* ---------- HERO ---------- */}
      <div className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(700px circle at 15% 10%, rgba(249,115,22,0.16), transparent 45%), radial-gradient(600px circle at 85% 25%, rgba(250,204,21,0.08), transparent 45%)',
          }}
        />

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />

        <section className="relative mx-auto max-w-container px-6 md:px-8">
          <div className="grid items-center py-10 pb-5 md:min-h-[calc(100vh-5rem)] md:py-12 md:pb-6 lg:min-h-[calc(100dvh-5rem)] lg:grid-cols-[1fr_1.1fr] lg:gap-0">
            <div className="relative z-10 max-w-2xl transform-gpu lg:pr-12">
              <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium tracking-wide text-neutral-300">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
                Software · Automation · Infrastructure · Communication
              </p>

              <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-neutral-50 md:text-5xl lg:text-6xl xl:text-7xl">
                Technology That Moves{' '}
                <span className="bg-gradient-to-r from-brand-orange to-brand-yellow bg-clip-text text-transparent">
                  Business Forward.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-relaxed text-neutral-400 md:text-xl">
                We design intelligent software, digital platforms, and communication
                systems that simplify operations, connect people, and help businesses
                grow.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href="/solutions" variant="primary" size="lg">
                  Explore Our Solutions
                </Button>
                <Button href="/contact" variant="secondary" size="lg">
                  Work With Us
                </Button>
              </div>

              <div className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/5 pt-8">
                <MicroSignal value="5" label="Service divisions" />
                <MicroSignal value="7+" label="Industries served" />
                <MicroSignal value="1" label="Integrated partner" />
              </div>
            </div>

            <div
              className="relative hidden lg:block"
              aria-hidden
              style={{ marginRight: 'calc(-1 * max(0px, (100vw - 80rem) / 2))' }}
            >
              <div className="relative h-[calc(100dvh-5rem)] min-h-[640px] w-full">
                <Image
                  src="/images/hero.jpg"
                  alt=""
                  fill
                  priority
                  sizes="(max-width: 1024px) 0vw, 55vw"
                  className="object-cover object-center"
                />

                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    backgroundImage:
                      'linear-gradient(to right, #000000 0%, rgba(0,0,0,0.85) 12%, rgba(0,0,0,0.4) 28%, rgba(0,0,0,0) 55%)',
                  }}
                />

                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    backgroundImage:
                      'linear-gradient(to top, #000000 0%, rgba(0,0,0,0.7) 12%, rgba(0,0,0,0) 35%)',
                  }}
                />

                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    backgroundImage:
                      'linear-gradient(to bottom, #000000 0%, rgba(0,0,0,0.5) 10%, rgba(0,0,0,0) 25%)',
                  }}
                />

                <div
                  className="pointer-events-none absolute inset-0 mix-blend-soft-light"
                  style={{
                    backgroundImage:
                      'radial-gradient(60% 80% at 70% 40%, rgba(249,115,22,0.35), transparent 70%)',
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ---------- SECTIONS ---------- */}
      <SolutionsOverview />
      <WhyXevora />
      <Approach />
      <Portfolio />
      <LatestFromXevora />
      <ClosingCTA />
    </main>
  );
}

function MicroSignal({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display text-2xl font-semibold tracking-tight text-neutral-50 md:text-3xl">
        {value}
      </p>
      <p className="mt-1 text-xs leading-snug text-neutral-500">{label}</p>
    </div>
  );
}