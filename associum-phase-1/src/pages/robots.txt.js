// Dynamic robots.txt, generated at build time.
// - Production: allow crawling and advertise the @astrojs/sitemap output.
// - Any non-production build (e.g. staging): disallow everything so the site is
//   never crawled or indexed. This pairs with the site-wide <meta robots noindex>
//   (Layout.astro) and the X-Robots-Tag header on the staging CloudFront distro.
const isProduction = (process.env.DEPLOY_ENV ?? 'production') === 'production';

export function GET({ site }) {
  let body;
  if (isProduction) {
    const sitemapUrl = new URL('sitemap-index.xml', site).href;
    body = ['User-agent: *', 'Allow: /', '', `Sitemap: ${sitemapUrl}`, ''].join('\n');
  } else {
    body = ['User-agent: *', 'Disallow: /', ''].join('\n');
  }

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
