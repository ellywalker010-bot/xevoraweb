import type { MetadataRoute } from 'next';
import { divisions } from '@/lib/content/divisions';

const base = 'https://www.xevoratechnologies.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`,           changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/about`,      changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/solutions`,  changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/industries`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/contact`,    changeFrequency: 'yearly',  priority: 0.7 },
  ];

  const divisionPages: MetadataRoute.Sitemap = divisions.map((d) => ({
    url: `${base}/solutions/${d.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...divisionPages];
}