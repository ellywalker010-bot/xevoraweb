'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Logo } from '@/components/brand/Logo';
import { Button } from '@/components/ui/Button';
import { primaryNav } from '@/lib/content/site';

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-white/5 bg-black'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-container items-center justify-between px-6 md:h-20 md:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                isActive(item.href)
                  ? 'text-neutral-50'
                  : 'text-neutral-400 hover:text-neutral-100'
              }`}
            >
              {item.label}
              {isActive(item.href) && (
                <span
                  aria-hidden
                  className="absolute inset-x-3.5 -bottom-0.5 h-px bg-gradient-to-r from-brand-orange to-brand-yellow"
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <Button href="/contact" variant="primary" size="md">
              Let&apos;s Talk
            </Button>
          </div>

          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="relative grid h-10 w-10 place-items-center rounded-md border border-white/10 text-neutral-200 transition hover:border-white/20 lg:hidden"
          >
            <span className="sr-only">Menu</span>
            <span
              aria-hidden
              className={`absolute h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                open ? 'rotate-45' : '-translate-y-1.5'
              }`}
            />
            <span
              aria-hidden
              className={`absolute h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                open ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              aria-hidden
              className={`absolute h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                open ? '-rotate-45' : 'translate-y-1.5'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu — collapses to zero height when closed */}
      <div
        id="mobile-menu"
        className={`overflow-hidden transition-[max-height,opacity] duration-300 lg:hidden ${
          open ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mx-4 mb-4 rounded-2xl border border-white/10 bg-ink-900 p-4">
          <nav aria-label="Mobile navigation" className="flex flex-col">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center justify-between rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                  isActive(item.href)
                    ? 'bg-white/[0.04] text-neutral-50'
                    : 'text-neutral-300 hover:bg-white/[0.04] hover:text-neutral-50'
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <span
                    aria-hidden
                    className="h-1.5 w-1.5 rounded-full bg-brand-orange"
                  />
                )}
              </Link>
            ))}

            <div className="mt-3 border-t border-white/5 pt-3">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="w-full"
              >
                Let&apos;s Talk
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}