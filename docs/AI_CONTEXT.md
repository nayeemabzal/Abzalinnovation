# AI_CONTEXT — Abzal Innovation Website

## Identity
- **Product:** Abzal Innovation Website (marketing site)
- **Family:** Abzal Innovation
- **Domain:** https://www.abzalinnovation.com
- **Version:** 0.1.0

## Purpose
Marketing site for Abzal Innovation. Positions the company and its three product lines: **Volt** (live), **Land Use Atlas** (live), **Abzal Build** (upcoming). Drives inbound interest to sales and contact channels.

## Target audience
- Electrical contractors evaluating Volt
- Municipalities and planners evaluating the Atlas
- General contractors watching Abzal Build
- Press, partners, and prospective hires

## What the site is
- Client-side React SPA with a custom lightweight router (`src/router.ts`, pushState + event dispatch)
- Vercel-hosted; `vercel.json` rewrites all paths to `index.html`
- Content-driven home + product + company pages
- Legal pages (Privacy Policy, Terms of Use)

## What the site is NOT
- Not a product. Product apps live in their own repos.
- Not a CMS-backed site. Content lives in TypeScript files under `src/data/`.
- Not a framework-router app. No React Router dependency.

## Current architecture

### Entry
- `index.html` — canonical URL, OpenGraph, Twitter Card, Schema.org Organization + WebSite
- `src/main.tsx` — React root render to `#root`
- `src/App.tsx` — `resolveRoute()` switch statement driving page selection

### Routes
- `/`, `/about`, `/contact`, `/products`, `/faq`, `/privacy-policy`, `/terms-of-use`, `/volt`, `/atlas`, `/build` + 404

### `src/`
- `pages/` — 11 page components (Home, About, Contact, Products, FAQ, Volt, Atlas, Build, PrivacyPolicy, TermsOfUse, NotFound)
- `components/home/` — Hero, ProductGrid, Capabilities, CompanyVision, ProofBand, CtaBand, QuickLookStrip, TrustStrip, UpcomingGrid
- `components/site/` — Header, Footer, PageShell, SiteFrame, GradientHero, LegalPageTemplate, Link
- `components/product/` — ProductOverview
- `components/ui/` — Reveal (animation)
- `data/homepageContent.ts` — typed content (`Solution`, `ComingSoonProduct`, `FutureModule`, `TrustMark`, `VoltFeature`) + `heroContent`
- `router.ts` — pushState router

## Stack
React 19 + TypeScript 5.7 + Vite 7 + Tailwind CSS 4.1 (@tailwindcss/vite plugin). Hosted on Vercel as SPA. ESM modules.

## Critical files
- `index.html` — SEO + Schema.org metadata
- `src/App.tsx` — routing switch
- `src/router.ts` — custom router
- `src/data/homepageContent.ts` — content source
- `src/components/site/Header.tsx`, `Footer.tsx`, `PageShell.tsx`
- `src/pages/Volt.tsx`, `Atlas.tsx`, `Build.tsx` — product pages
- `vercel.json` — SPA rewrite rule

## Non-negotiable rules
1. **Do not claim unreleased product features.** Build is coming-soon; no feature claims.
2. **Preserve SEO + Schema.org metadata** in `index.html`.
3. **Preserve canonical URL** and email contacts.
4. **Keep bundle lean** — no framework router, no heavy UI kits.
5. **Content comes from `src/data/`** — do not scatter copy across components unless structural.

## UI / UX rules
- Marketing-first, clear hierarchy.
- Strong hero + trust strip + product grid on home.
- Legal templates consistent across Privacy/Terms.
- Mobile improvements shipped recently — keep mobile-first mindset.

## Major workflows / sections (in repo)
- Home (hero + product preview + vision + proof + CTA)
- Products overview
- Volt product page
- Atlas product page
- Build coming-soon page
- About
- Contact (uses `sales@abzalinnovation.com`, `contact@abzalinnovation.com`)
- FAQ
- Privacy Policy, Terms of Use
- 404

## Current risks / uncertainties
- No README or docs existed before this bootstrap.
- No `.env` or secrets management visible.
- No analytics / tracking in `index.html`.
- No CI beyond Vercel deployment.
- Product preview images exist under `/public/product-previews/`; usage paths inferred from home components.

## Definition of done — ongoing marketing passes
- Claims match actual product state in sibling repos (Volt live, Atlas live, Build coming-soon).
- SEO meta intact.
- `npm run build` passes.
- No heavy deps added.
- Response in required format.
