# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Marketing/landing site for **Associum** (associum.ai) — an AI associate product for finance,
consulting, accounting, and legal professionals. Built with **Astro** (static output) using
**React islands** for interactivity, deployed as a static bundle to **AWS S3 + CloudFront**.

## Commands

Uses **pnpm**. Requires **Node 18.20.8+ / 20 / 22** — Astro 5 will not build on older Node
(Node 12 OOMs during the build).

- `pnpm dev` — Astro dev server (http://localhost:4321)
- `pnpm build` — static build to `dist/`
- `pnpm preview` — serve the built `dist/` locally

There is no lint, test, or typecheck step. Source is plain JSX (no TypeScript) plus `.astro` route files.

## Architecture

This was migrated from a React Router SPA to Astro. The mental model:

- **`.astro` route = thin wrapper; React component = the page body.** Each file in `src/pages/*.astro`
  is a route (file-based routing replaces React Router). A route imports `Layout.astro`, passes SEO
  props, and renders the page's React body as a hydrated island:

  ```astro
  ---
  import Layout from '../layouts/Layout.astro';
  import { ProductPage } from '../components/pages/ProductPage.jsx';
  ---
  <Layout title="..." description="..." canonical="/product">
    <ProductPage client:load />
  </Layout>
  ```

  The page bodies live in `src/components/pages/*.jsx` (moved out of `src/pages/` so they don't
  collide with Astro routing). They are full React trees composing section components from
  `src/components/`.

- **`Layout.astro`** (`src/layouts/`) owns the `<head>` (meta, fonts, favicons, per-page SEO/OG
  tags via props), Astro **View Transitions** (`<ClientRouter />`), the global SCSS import, and the
  persistent `NavBar` + `Footer`. It replaces the old `App.jsx` shell. SEO is prop-driven here —
  there is **no react-helmet** anymore. It normalizes `Astro.url.pathname` (strips the trailing
  `.html` that `build.format: 'file'` produces) and passes a clean `pathname` to `NavBar` for
  active-link state. Canonical is only emitted when a route passes a `canonical` prop.

- **Islands & hydration.** ~36 of 43 components use framer-motion, so most are hydrated. Page bodies
  use `client:load`; `NavBar` is `client:load` + `transition:persist`. React 19 auto-emits
  `<link rel="preload" as="image">` for hero images during SSR — do **not** add manual preload tags
  for them (it duplicates). *(Optimization opportunity: components whose only client behavior is a
  scroll-reveal could become static `.astro` + CSS to drop their JS.)*

- **MPA routing.** Astro is multi-page, so there is no React Router. Internal links are plain
  `<a href>` (see `NavBar`, `Footer`, `ButtonLink`). `AnimatePresence` route-exit animations are
  gone; cross-page transitions come from Astro View Transitions, and in-view animations
  (`ScrollReveal`, framer-motion `whileInView`) still work as islands.

- **Contact form → Attio (currently unwired).** `ContactSupportSection.jsx` POSTs to `/api/contact`,
  which does not exist on static hosting. The original Vercel serverless handler (upserts a Person +
  Note in Attio using a server-side `ATTIO_API_KEY`) is preserved at `api/contact.js` for reference.
  See `DEPLOYMENT.md` → "Contact form" before re-enabling — the key must stay server-side.

## Styling

- **SCSS Modules** — every component has a co-located `*.module.scss`; import as `styles` and use
  `styles.className`. Global resets are in `src/styles/global.scss` (imported once by `Layout.astro`).
- **Design tokens** — `src/styles/variables.scss` holds colors, fonts, radii, shadows, breakpoints.
  Use these instead of hardcoding. Modules pull them in with `@use '../../styles/variables' as *;`
  (note the depth: page modules under `src/components/pages/` need `../../styles/`, component modules
  under `src/components/` need `../styles/`). Responsive styles use the `up($width)` mixin from
  `src/styles/mixins.scss` with the `$bp-*` variables.
- **Assets** — imported in JSX from `src/assets/` (Vite returns the URL). Public/SEO files
  (favicons, OG images, `robots.txt`) live in `public/`.

## Deployment

GitHub Actions → S3 + CloudFront on push to `main`. Full setup (AWS resources, the CloudFront
clean-URL function in `infra/cloudfront-rewrite.js`, and the required GitHub secrets/vars) is
documented in `DEPLOYMENT.md`. The build emits `<route>.html` files, so CloudFront needs the
rewrite function to serve clean URLs like `/product`.

> Note: `public/sitemap.xml` is a hand-maintained file, while `@astrojs/sitemap` also generates
> `sitemap-index.xml` at build. Reconcile these (point `robots.txt` at the generated one) when
> touching SEO.
