import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: 'https://www.xevoratechnologies.com/sitemap.xml',
    host: 'https://www.xevoratechnologies.com',
  };
}