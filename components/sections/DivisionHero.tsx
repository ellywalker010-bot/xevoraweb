import Link from 'next/link';
import type { Division } from '@/lib/content/divisions';

export function DivisionHero({ division }: { division: Division }) {
  return (
    <div className="relative overflow-hidden border-b border-white/5">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(600px circle at 15% 20%, rgba(249,115,22,0.16), transparent 50%), radial-gradient(500px circle at 85% 60%, rgba(250,204,21,0.07), transparent 55%)',
        }}
      />

      <div className="relative mx-auto max-w-container px-6 py-24 md:px-8 md:py-32">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-xs text-neutral-500">
            <li>
              <Link
                href="/solutions"
                className="transition-colors hover:text-brand-yellow"
              >
                Solutions
              </Link>
            </li>
            <li aria-hidden className="text-neutral-700">
              /
            </li>
            <li aria-current="page" className="text-neutral-300">
              {division.shortName}
            </li>
          </ol>
        </nav>

        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand-orange">
          {division.category}
        </p>

        <h1 className="max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-neutral-50 md:text-5xl lg:text-6xl">
          {division.name}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-400">
          {division.purpose}
        </p>
      </div>
    </div>
  );
}