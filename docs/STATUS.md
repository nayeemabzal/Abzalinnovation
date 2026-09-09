---
title: Abzal Innovation Website Status
type: status
project: abzal-innovation-website
status: active
priority: high
last_reviewed: 2026-09-09
source_of_truth: ../_HUB/status.json
---

# Status

## Earth Time Machine migration review — 2026-09-09

PR #1's temporary ChatGPT Sites iframe has been replaced on the integration branch
with direct routing to the independently hosted app at
https://earth-time-machine-tan.vercel.app/. The public app's 100 runtime files
were verified against Git, and its globe/Guyana/landmark browser checks pass.

The new website build, local checks and actual Vercel preview routing tests pass.
Owner enabled the specific preview exception; anonymous desktop/phone tests
completed with zero page errors. All 100 prefixed runtime files return HTTP 200
with correct content types. Physical-device acceptance and owner merge approval
remain pending.
PR #1 remains unmerged; the live website and old working app remain available.
See [verification and continuation](EARTH_TIME_MACHINE_VERCEL_INTEGRATION_2026-09-09.md).

The earlier One Better status below is retained as its historical checkpoint.

- **Current status:** Active; One Better microsite implemented and ready for deployment review.
- **Confidence:** Production build and responsive browser review completed on 2026-08-10.
- **Current focus:** Deploy the One Better pages, verify their public URLs, and finish Google Play internal testing.

## Working foundation

- React/Vite/TypeScript SPA with custom client router.
- Home, product, company, FAQ, contact, legal, and 404 routes.
- One Better landing, privacy, support, and terms routes with product-specific metadata.
- Vercel SPA rewrite and canonical/SEO/social metadata.
- Content-driven homepage and product presentation.

## Known issues and risks

- Git worktree had uncommitted changes at the 2026-07-10 audit.
- A nested same-named app folder and a separate backup exist; their roles must be confirmed before cleanup.
- Product claims can drift from Volt, Atlas, and Build if sibling sources are not checked.
- `SESSION_BOOT.md` predates the 2026-06-23 Hub status.
- One Better is not yet live on Google Play; the website intentionally says the
  release is in preparation and must be updated when the store listing is public.

## Immediate next action

Deploy the current build, verify `/one-better/privacy` is publicly reachable
without authentication, and use that URL in Play Console. Replace the launch
status CTA with the official Google Play listing only after approval.
