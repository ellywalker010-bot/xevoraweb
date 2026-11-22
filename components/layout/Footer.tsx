import Link from 'next/link';
import { Logo } from '@/components/brand/Logo';
import { site, footerNav } from '@/lib/content/site';

const socialEntries = Object.entries(site.social).filter(
  ([, url]) => url && url.trim().length > 0
);

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-ink-950">
      <div className="mx-auto max-w-container px-6 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand column */}
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-neutral-400">
              {site.name} builds software, digital platforms, and communication
              systems that simplify business operations.
            </p>

            <div className="mt-6 space-y-1.5 text-sm text-neutral-400">
              {site.contact.email && (
                <p>
                  <span className="text-neutral-500">Email: </span>
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="text-neutral-200 transition-colors hover:text-brand-yellow"
                  >
                    {site.contact.email}
                  </a>
                </p>
              )}
              {site.contact.phone && (
                <p>
                  <span className="text-neutral-500">Phone: </span>
                  <a
                    href={`tel:${site.contact.phone}`}
                    className="text-neutral-200 transition-colors hover:text-brand-yellow"
                  >
                    {site.contact.phone}
                  </a>
                </p>
              )}
              {site.contact.address && (
                <p>
                  <span className="text-neutral-500">Address: </span>
                  <span className="text-neutral-200">{site.contact.address}</span>
                </p>
              )}
            </div>

            {socialEntries.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-3">
                {socialEntries.map(([name, url]) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/10 px-3.5 py-1.5 text-xs font-medium capitalize text-neutral-300 transition hover:border-brand-yellow/50 hover:text-brand-yellow"
                  >
                    {name}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Company links */}
          <div className="md:col-span-2">
            <h3 className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
              Company
            </h3>
            <ul className="mt-5 space-y-3">
              {footerNav.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-300 transition-colors hover:text-brand-yellow"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions links */}
          <div className="md:col-span-3">
            <h3 className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
              Solutions
            </h3>
            <ul className="mt-5 space-y-3">
              {footerNav.solutions.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-300 transition-colors hover:text-brand-yellow"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div className="md:col-span-2">
            <h3 className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
              Legal
            </h3>
            <ul className="mt-5 space-y-3">
              {footerNav.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-300 transition-colors hover:text-brand-yellow"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/5 pt-8 text-xs text-neutral-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}