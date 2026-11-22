import Link from 'next/link';

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  breadcrumb?: BreadcrumbItem[];
};

export function PageHero({ eyebrow, title, description, breadcrumb }: PageHeroProps) {
  return (
    <div className="relative overflow-hidden border-b border-white/5">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(600px circle at 18% 15%, rgba(249,115,22,0.14), transparent 50%), radial-gradient(500px circle at 88% 55%, rgba(250,204,21,0.07), transparent 55%)',
        }}
      />
      <div className="relative mx-auto max-w-container px-6 py-24 md:px-8 md:py-32">
        {breadcrumb && breadcrumb.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-xs text-neutral-500">
              {breadcrumb.map((item, i) => {
                const isLast = i === breadcrumb.length - 1;
                return (
                  <li key={item.label} className="flex items-center gap-2">
                    {item.href && !isLast ? (
                      <Link
                        href={item.href}
                        className="transition-colors hover:text-brand-yellow"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span
                        aria-current={isLast ? 'page' : undefined}
                        className="text-neutral-300"
                      >
                        {item.label}
                      </span>
                    )}
                    {!isLast && (
                      <span aria-hidden className="text-neutral-700">
                        /
                      </span>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        )}

        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand-orange">
          {eyebrow}
        </p>
        <h1 className="max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-neutral-50 md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-400">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}