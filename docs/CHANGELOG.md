# CHANGELOG — Abzal Innovation Website

## 2026-10-01 — Main website clarity and reliability

- Reconcile canonical main with merged EarthTimeMachine integration, preserving
  all local marketing work and documentation additions.
- Clarify product-site access, Build development and One Better availability;
  preserve separate app/hosting boundaries and branding.
- Improve route metadata/main landmarks, keyboard menu Escape focus and anchor
  history/Back/reduced-motion behavior.
- Harden contact acceptance/error/timeout/cancel/draft behavior and trim emails.
- Add marketing regression coverage; refresh Earth photo-close selectors and
  explicit view-readiness waits without changing its app or proxy configuration.
- See [release checklist/evidence](audit/MAIN_SITE_RELEASE_2026-10-01/RELEASE.md).


## 2026-09-09 — Earth Time Machine Vercel integration prepared

- Replace the temporary iframe with prefix routing to the verified independent
  Vercel app; preserve complete destination queries and fragments.
- Studio Kids opens the standalone app with native document navigation. The
  unparameterized entry retains the app's global timeline default.
- Retain a direct-open fallback for development/older SPA pages. Preserve the
  original handoff and marketing metadata/content.
- Verify the production build and desktop/phone integration behavior locally;
  deployment preview and device acceptance remain required before release.

## 2026-08-10 — One Better app microsite

- Added a content-driven One Better landing page at `/one-better` with truthful
  1.0.0 features, local-first privacy positioning, responsive app preview, and
  Google Play release-preparation status.
- Added dedicated public routes for One Better privacy, support, and terms,
  using `hello@abzalinnovation.com` as the confirmed app-support inbox.
- Added route-specific title, description, social metadata, canonical URL, and
  Schema.org data without adding a router or UI dependency.
- Added One Better to the Products page, product menus, and footer, and copied
  the verified 512 × 512 app icon into public website assets.
- Verified the production build and 390-pixel landing/privacy layouts.

## 2026-07-10 — Project brain initialized

- Added `docs/PROJECT_BRAIN.md` and `docs/STATUS.md` as concise navigation/status layers around existing `_HUB`, context, decision, roadmap, and changelog sources.
- Updated `AGENTS.md` pre-work links.
- No application source, product claims, deployment configuration, or runtime behavior changed.

Format: `## YYYY-MM-DD — Title` then bullets.

---

## 2026-04-22 — Bootstrap AI context
- Initialized `AGENTS.md`, `docs/AI_CONTEXT.md`, `docs/SESSION_BOOT.md`, `docs/ROADMAP.md`, `docs/CHANGELOG.md`, `docs/DECISIONS.md`.
- No application code changed.

---

## 2026-04-22 — Homepage + contact polish
- Add homepage product preview strip.
- Refine product and company website pages.
- Update website contact emails.

## 2026-04-13 — Header
- Increase header logo size.

## 2026-04-11 — Mobile homepage
- Improve mobile homepage layout.

## 2026-04-10 — Branding + messaging
- Update website logo branding.
- Polish homepage messaging and CTAs.
- Refine website experience and contact flow.

## 2026-03-25 — CTA polish
- Point Atlas CTA to branded subdomain.
- Fix shared CTA link colors.


## Local main-site review — 2026-10-01

Session `abzal-website-main-review-2026-10-01`. [Current local review](audit/MAIN_SITE_REVIEW_2026-10-01/REVIEW.md). Build passes;231 browser assertions/zero errors. Local unpublished marketing batch; remote PR1 merged, canonical checkout fast-forward blocked by existing index.lock. Older deployment/audit statements above are historical. Product/route boundaries preserved.
