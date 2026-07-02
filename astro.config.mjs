// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// Only production should be discoverable. CI sets DEPLOY_ENV per environment;
// local builds default to production.
const isProduction = (process.env.DEPLOY_ENV ?? 'production') === 'production';

// https://astro.build/config
export default defineConfig({
  // Per-environment base URL (canonical/OG/sitemap). CI sets SITE_URL for
  // staging vs production; falls back to the production domain for local builds.
  site: process.env.SITE_URL || 'https://www.associum.ai',
  output: 'static',
  // Prefetch linked pages so navigation is instant. `viewport` prefetches links
  // as soon as they're visible (so the nav bar's links are ready before the user
  // even hovers), and ClientRouter then swaps them in with no browser loader.
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  // Directory-style output (/product/index.html) to match the IaC website
  // module's `directory-index` CloudFront Function (associo-iac). The 404 page
  // is still emitted as /404.html, which the module maps via custom error responses.
  build: {
    format: 'directory',
  },
  integrations: [
    react(),
    sitemap({
      // Drop the 404 from the sitemap. On non-production the whole site is
      // disallowed in robots.txt and noindex'd, so the sitemap stays prod-focused.
      filter: (page) => !page.includes('/404'),
    }),
  ],
});
