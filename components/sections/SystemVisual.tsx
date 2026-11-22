'use client';

export function SystemVisual() {
  return (
    <div
      aria-hidden
      className="relative mx-auto aspect-square w-full max-w-[520px] overflow-hidden"
    >
      {/* Soft backdrop glow */}
      <div
        className="absolute inset-0 rounded-[2rem]"
        style={{
          background:
            'radial-gradient(400px circle at 50% 40%, rgba(249,115,22,0.14), transparent 60%)',
        }}
      />

      {/* Main glass panel */}
      <div className="absolute inset-6 rounded-3xl border border-white/10 bg-ink-900/80 shadow-[0_20px_80px_-20px_rgba(0,0,0,0.8)]">
        {/* Fake window chrome */}
        <div className="flex items-center gap-2 border-b border-white/5 px-5 py-3.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-brand-orange/60" />
          <span className="ml-3 text-[11px] font-medium tracking-wide text-neutral-500">
            xevora / ecosystem
          </span>
        </div>

        {/* Content inside panel */}
        <div className="relative h-[calc(100%-3.25rem)] p-5">
          {/* Connection lines (SVG) */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 400 400"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="line-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#F97316" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#FACC15" stopOpacity="0.25" />
              </linearGradient>
            </defs>
            <path d="M 200 200 L 90 90"  stroke="url(#line-grad)" strokeWidth="1" strokeDasharray="3 4" />
            <path d="M 200 200 L 310 90" stroke="url(#line-grad)" strokeWidth="1" strokeDasharray="3 4" />
            <path d="M 200 200 L 90 310" stroke="url(#line-grad)" strokeWidth="1" strokeDasharray="3 4" />
            <path d="M 200 200 L 310 310" stroke="url(#line-grad)" strokeWidth="1" strokeDasharray="3 4" />
            <path d="M 200 200 L 200 320" stroke="url(#line-grad)" strokeWidth="1" strokeDasharray="3 4" />
          </svg>

          {/* Centre hub */}
          <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
            <div className="relative grid h-16 w-16 place-items-center rounded-2xl border border-brand-orange/40 bg-black shadow-[0_0_40px_-8px_rgba(249,115,22,0.7)]">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-brand-orange to-brand-yellow" />
              <span
                className="absolute inset-0 rounded-2xl border border-brand-orange/40"
                style={{ animation: 'pulse-ring 3s ease-out infinite' }}
              />
            </div>
          </div>

          {/* Corner cards */}
          <MiniCard label="Business" value="Systems" className="left-0 top-0" />
          <MiniCard label="Digital" value="Products" className="right-0 top-0" delay={0.4} />
          <MiniCard label="Connect" value="Messaging" className="left-0 bottom-0" delay={0.8} />
          <MiniCard label="Cloud" value="Infrastructure" className="right-0 bottom-0" delay={1.2} />

          {/* Bottom card */}
          <MiniCard
            label="Nexus"
            value="Financial tech"
            className="bottom-2 left-1/2 -translate-x-1/2"
            delay={1.6}
            horizontal
          />
        </div>
      </div>

      {/* Floating accent chips */}
      <div className="absolute -left-2 top-1/3 hidden rounded-full border border-white/10 bg-ink-900 px-3 py-1.5 text-[11px] font-medium text-neutral-300 md:block">
        <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-brand-orange align-middle" />
        automations active
      </div>
      <div className="absolute -right-2 bottom-1/3 hidden rounded-full border border-white/10 bg-ink-900 px-3 py-1.5 text-[11px] font-medium text-neutral-300 md:block">
        <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-brand-yellow align-middle" />
        systems connected
      </div>
    </div>
  );
}

type MiniCardProps = {
  label: string;
  value: string;
  className?: string;
  delay?: number;
  horizontal?: boolean;
};

function MiniCard({ label, value, className = '', delay = 0, horizontal }: MiniCardProps) {
  return (
    <div
      className={`absolute rounded-xl border border-white/10 bg-black px-3.5 py-2.5 transition-transform hover:-translate-y-0.5 ${
        horizontal ? 'w-[140px]' : 'w-[120px]'
      } ${className}`}
      style={{
        animation: `floaty 6s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    >
      <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-neutral-500">
        {label}
      </p>
      <p className="mt-0.5 text-[12px] font-semibold text-neutral-100">{value}</p>
    </div>
  );
}