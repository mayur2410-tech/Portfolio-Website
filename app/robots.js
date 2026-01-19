export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/private/'],
    },
    sitemap: 'https://mayur-waykar-portfolio.vercel.app/sitemap.xml',
  };
}
