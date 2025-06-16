import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/stack', '/airdrop', '/redeem'],
    },
    sitemap: `${process.env.APP_URL}/sitemap.xml`,
  };
}
