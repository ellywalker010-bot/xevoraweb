'use client';

import { useEffect, useRef } from 'react';
import type { VideoSource } from '@/lib/content/insights';

type VideoLightboxProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  video: VideoSource;
};

export function VideoLightbox({ open, onClose, title, video }: VideoLightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;
    previouslyFocused.current = document.activeElement as HTMLElement;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const t = window.setTimeout(() => dialogRef.current?.focus(), 20);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.clearTimeout(t);
      previouslyFocused.current?.focus?.();
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/95 p-4 md:p-8"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl outline-none"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close video"
          className="absolute -top-12 right-0 grid h-10 w-10 place-items-center rounded-full border border-white/20 text-neutral-300 transition-colors hover:border-white/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
        >
          <svg
            aria-hidden
            viewBox="0 0 16 16"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          >
            <path d="M4 4l8 8M12 4l-8 8" />
          </svg>
        </button>

        <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-black">
          <VideoPlayer video={video} title={title} />
        </div>

        <p className="mt-4 text-sm font-medium text-neutral-300">{title}</p>
      </div>
    </div>
  );
}

function VideoPlayer({ video, title }: { video: VideoSource; title: string }) {
  if (video.provider === 'file') {
    return (
      <video
        src={video.src}
        controls
        autoPlay
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full bg-black"
      >
        <track kind="captions" />
        Your browser does not support the video tag.
      </video>
    );
  }

  if (video.provider === 'youtube') {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0&modestbranding=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
      />
    );
  }

  return (
    <iframe
      src={`https://player.vimeo.com/video/${video.videoId}?autoplay=1`}
      title={title}
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
      className="absolute inset-0 h-full w-full"
    />
  );
}