import Link from 'next/link';
import Image from 'next/image';

type LogoProps = {
  /** Visual tone. 'dark' = for dark backgrounds (default). 'light' = for white backgrounds. */
  tone?: 'dark' | 'light';
  /** Optional override of the link target. Defaults to home. */
  href?: string;
  className?: string;
};

export function Logo({ tone = 'dark', href = '/', className = '' }: LogoProps) {
  const textColor = tone === 'dark' ? 'text-neutral-50' : 'text-ink-950';
  const subColor = tone === 'dark' ? 'text-neutral-500' : 'text-neutral-600';

  return (
    <Link
      href={href}
      aria-label="XEVORA Technologies — Home"
      className={`group inline-flex items-center gap-0.6 ${className}`}
    >
      {/* Logo mark — sits directly on the page background */}
      <span
        aria-hidden
        className="relative block h-10 w-10 transition-transform duration-300 group-hover:scale-[1.04]"
      >
        <Image
          src="/logo.png"
          alt=""
          fill
          priority
          className="object-contain"
          sizes="40px"
        />
      </span>

      {/* Wordmark */}
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[15px] font-semibold tracking-[-0.01em] ${textColor}`}
        >
          XEVORA
        </span>
        <span
          className={`mt-0.5 text-[9px] font-medium uppercase tracking-[0.18em] ${subColor}`}
        >
          Technologies
        </span>
      </span>
    </Link>
  );
}