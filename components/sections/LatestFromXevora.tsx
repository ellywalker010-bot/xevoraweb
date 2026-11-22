'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Section } from '@/components/ui/Section';
import { insights, type Insight } from '@/lib/content/insights';
import { VideoLightbox } from '@/components/sections/VideoLightbox';

export function LatestFromXevora() {
  const items = insights.slice(0, 6);
  const [activeVideo, setActiveVideo] = useState<Insight | null>(null);

  return (
    <Section id="latest" tone="darkest">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-orange">
            Latest from XEVORA
          </p>
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-neutral-50 md:text-4xl">
            Insights, tips, and updates.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-400">
            Short pieces on how we build, what we are working on, and lessons from
            the systems we design and run.
          </p>
        </div>
      </div>

      <Carousel items={items} onPlayVideo={setActiveVideo} />

      {activeVideo?.video && (
        <VideoLightbox
          open
          onClose={() => setActiveVideo(null)}
          title={activeVideo.title}
          video={activeVideo.video}
        />
      )}
    </Section>
  );
}

function Carousel({
  items,
  onPlayVideo,
}: {
  items: Insight[];
  onPlayVideo: (item: Insight) => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const scrollToIndex = (i: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(i, items.length - 1));
    const cards = el.querySelectorAll<HTMLElement>('[data-card]');
    const card = cards[clamped];
    if (!card) return;

    const containerWidth = el.clientWidth;
    const cardWidth = card.offsetWidth;
    const isMobileViewport = cardWidth >= containerWidth - 80;

    const target = isMobileViewport
      ? card.offsetLeft - (containerWidth - cardWidth) / 2
      : card.offsetLeft;

    el.scrollTo({ left: target, behavior: reducedMotion ? 'auto' : 'smooth' });
    setIndex(clamped);
  };

  const next = () => {
    setIndex((i) => {
      const nextIndex = i >= items.length - 1 ? 0 : i + 1;
      scrollToIndex(nextIndex);
      return nextIndex;
    });
  };

  const prev = () => {
    setIndex((i) => {
      const prevIndex = i <= 0 ? items.length - 1 : i - 1;
      scrollToIndex(prevIndex);
      return prevIndex;
    });
  };

  useEffect(() => {
    if (!autoPlay || paused || reducedMotion) return;
    const id = window.setInterval(next, 5000);
    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoPlay, paused, reducedMotion]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const containerWidth = el.clientWidth;
      const scrollLeft = el.scrollLeft;
      const cards = el.querySelectorAll<HTMLElement>('[data-card]');
      let closest = 0;
      let closestDist = Infinity;
      cards.forEach((card, i) => {
        const cardWidth = card.offsetWidth;
        const isMobileViewport = cardWidth >= containerWidth - 80;
        const centre = isMobileViewport
          ? card.offsetLeft + cardWidth / 2
          : card.offsetLeft;
        const viewCentre = isMobileViewport
          ? scrollLeft + containerWidth / 2
          : scrollLeft;
        const dist = Math.abs(centre - viewCentre);
        if (dist < closestDist) {
          closestDist = dist;
          closest = i;
        }
      });
      setIndex(closest);
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  function onKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      setAutoPlay(false);
      next();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setAutoPlay(false);
      prev();
    }
  }

  return (
    <div
      className="mt-14"
      role="region"
      aria-roledescription="carousel"
      aria-label="Latest from XEVORA"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={onKeyDown}
      tabIndex={0}
    >
      <div
        ref={scrollRef}
        className="
          flex gap-4 overflow-x-auto scroll-smooth
          snap-x snap-mandatory
          [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
          -mx-6 px-6 scroll-px-6
          sm:mx-0 sm:px-0 sm:scroll-px-0
        "
      >
        {items.map((item) => (
          <div
            key={item.slug}
            data-card
            className="
              shrink-0 snap-center
              w-[calc(100vw-5rem)] max-w-[420px]
              sm:w-[calc(50%-0.5rem)] sm:max-w-none
              lg:w-[calc(33.333%-0.667rem)]
            "
          >
            <InsightCard item={item} onPlayVideo={onPlayVideo} />
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {items.map((_, i) => {
            const active = i === index;
            return (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                aria-current={active}
                onClick={() => {
                  setAutoPlay(false);
                  scrollToIndex(i);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  active
                    ? 'w-6 bg-brand-orange'
                    : 'w-1.5 bg-neutral-700 hover:bg-neutral-500'
                }`}
              />
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label={autoPlay ? 'Pause auto-advance' : 'Resume auto-advance'}
            onClick={() => setAutoPlay((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-neutral-400 transition-colors hover:border-border-strong hover:text-neutral-100"
          >
            {autoPlay ? <PauseIcon /> : <PlayIcon />}
          </button>
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => {
              setAutoPlay(false);
              prev();
            }}
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-neutral-400 transition-colors hover:border-border-strong hover:text-neutral-100"
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={() => {
              setAutoPlay(false);
              next();
            }}
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-neutral-400 transition-colors hover:border-border-strong hover:text-neutral-100"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}

function InsightCard({
  item,
  onPlayVideo,
}: {
  item: Insight;
  onPlayVideo: (item: Insight) => void;
}) {
  const dateLabel = formatDate(item.date);
  const isVideo = item.kind === 'video' && !!item.video;

  const inner = (
    <>
      <div className="relative aspect-[16/10] w-full">
        <InsightMedia item={item} />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-3 text-[11px]">
          <span className="rounded-full border border-white/10 px-2.5 py-0.5 font-medium uppercase tracking-wider text-neutral-400">
            {item.category}
          </span>
          <span className="text-neutral-600">·</span>
          <span className="text-neutral-500">{dateLabel}</span>
        </div>

        <h3 className="font-display text-lg font-semibold leading-snug tracking-tight text-neutral-50">
          {item.title}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-400">
          {item.excerpt}
        </p>

        <div className="mt-5">
          {isVideo ? (
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-100 transition-colors group-hover:text-brand-yellow">
              Watch
              <ArrowRight />
            </span>
          ) : item.href ? (
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-100 transition-colors group-hover:text-brand-yellow">
              Read more
              <ArrowRight />
            </span>
          ) : (
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-500">
              Coming soon
            </span>
          )}
        </div>
      </div>
    </>
  );

  if (isVideo) {
    return (
      <button
        type="button"
        onClick={() => onPlayVideo(item)}
        className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-950 text-left transition-colors hover:border-brand-orange/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
      >
        {inner}
      </button>
    );
  }

  if (item.href) {
    return (
      <Link
        href={item.href}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-950 transition-colors hover:border-brand-orange/40"
      >
        {inner}
      </Link>
    );
  }

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-950 transition-colors hover:border-brand-orange/40">
      {inner}
    </div>
  );
}

function InsightMedia({ item }: { item: Insight }) {
  if (item.kind === 'video') {
    return (
      <>
        {item.poster ? (
          <Image
            src={item.poster}
            alt=""
            fill
            className="object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-100"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-ink-900 via-ink-950 to-black" />
        )}
        <div className="absolute inset-0 grid place-items-center">
          <span className="grid h-14 w-14 place-items-center rounded-full border border-white/20 bg-black/60 transition-transform duration-300 group-hover:scale-105">
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              className="ml-0.5 h-5 w-5 text-neutral-50"
              fill="currentColor"
            >
              <path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11-6.86a1 1 0 0 0 0-1.72l-11-6.86A1 1 0 0 0 8 5.14Z" />
            </svg>
          </span>
        </div>
      </>
    );
  }

  if (item.kind === 'image' && item.imageSrc) {
    return (
      <Image
        src={item.imageSrc}
        alt=""
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
    );
  }

  return (
    <div className="absolute inset-0 bg-gradient-to-br from-ink-900 via-ink-950 to-black">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 30% 30%, rgba(249,115,22,0.6), transparent 45%)',
        }}
      />
      <div className="absolute bottom-4 left-4 flex items-center gap-2 text-[11px] font-medium text-neutral-400">
        <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
        Essay
      </div>
    </div>
  );
}

function ArrowRight() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 16 16"
      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

function ChevronLeft() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 16 16"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 3L5 8l5 5" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 16 16"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 3l5 5-5 5" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg aria-hidden viewBox="0 0 16 16" className="h-4 w-4" fill="currentColor">
      <path d="M5 3.5v9a.5.5 0 0 0 .77.42l7-4.5a.5.5 0 0 0 0-.84l-7-4.5A.5.5 0 0 0 5 3.5Z" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg aria-hidden viewBox="0 0 16 16" className="h-4 w-4" fill="currentColor">
      <rect x="4" y="3" width="2.5" height="10" rx="0.5" />
      <rect x="9.5" y="3" width="2.5" height="10" rx="0.5" />
    </svg>
  );
}

function formatDate(iso: string): string {
  try {
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return iso;
    return d.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  } catch {
    return iso;
  }
}