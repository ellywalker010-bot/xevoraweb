export type InsightKind = 'video' | 'image' | 'article';

/** How a video insight should be played. */
export type VideoSource =
  | { provider: 'file'; src: string; mime?: string }
  | { provider: 'youtube'; videoId: string } // kept for future use
  | { provider: 'vimeo'; videoId: string };   // kept for future use

export type Insight = {
  slug: string;
  kind: InsightKind;
  title: string;
  excerpt: string;
  category: string;
  /** ISO date string, e.g. '2026-02-10'. */
  date: string;

  /* ---- image insights ---- */
  imageSrc?: string;

  /* ---- video insights ---- */
  video?: VideoSource;
  /** Poster / thumbnail shown in the card before the video plays. */
  poster?: string;

  /* ---- article insights ---- */
  href?: string;
};

/**
 * ⚠️ Content placeholders — replace with real XEVORA content.
 *
 * Video files are served from /public. Place them at:
 *   public/insights/videos/<filename>.mp4
 *
 * Poster images at:
 *   public/insights/<filename>.png
 */
export const insights: Insight[] = [
  {
    slug: 'intro-to-business-automation',
    kind: 'video',
    title: 'What business automation actually looks like',
    excerpt:
      'A short walkthrough of how a routine manual process — order intake, invoicing, follow-ups — gets mapped to a system that runs on its own.',
    category: 'Video',
    date: '2026-02-10',
    poster: '/insights/video-1-poster.png',
    video: { provider: 'file', src: '/insights/videos/intro-to-business-automation.mp4' },
  },
  {
    slug: 'inside-a-school-management-system',
    kind: 'image',
    title: 'Inside a school management system',
    excerpt:
      'What administrators actually see on a Monday morning: attendance, fee balances, class schedules, and the three reports that matter most.',
    category: 'Product',
    date: '2026-02-04',
    imageSrc: '/insights/image-1.png',
  },
  {
    slug: 'why-we-avoid-hype-stacks',
    kind: 'article',
    title: 'Why we avoid hype stacks',
    excerpt:
      'A practical note on choosing boring, stable technology for business systems — and the real cost of chasing the newest framework every six months.',
    category: 'Engineering',
    date: '2026-01-28',
    href: '/products',
  },
  {
    slug: 'infrastructure-is-invisible',
    kind: 'article',
    title: 'Infrastructure is invisible until it fails',
    excerpt:
      'The three things we check on every deployment before we consider a system ready: monitoring, backups, and recovery.',
    category: 'Cloud',
    date: '2026-01-22',
    href: '/solutions/cloud',
  },
  {
    slug: 'inventory-tracking-in-the-real-world',
    kind: 'article',
    title: 'Inventory tracking in the real world',
    excerpt:
      'Why off-the-shelf inventory software fails in small retail — and what a system designed around your actual counter workflow looks like instead.',
    category: 'Retail',
    date: '2026-01-15',
    href: '/solutions/business',
  },
  {
    slug: 'sms-delivery-you-can-trust',
    kind: 'article',
    title: 'SMS delivery you can actually trust',
    excerpt:
      'Delivery receipts, retry logic, and why we treat message confirmation as a first-class product feature rather than a logging detail.',
    category: 'Connect',
    date: '2026-01-08',
    href: '/solutions/connect',
  },
];