---
title: Abzal Innovation Website Project Brain
type: project-brain
project: abzal-innovation-website
status: active
priority: high
last_reviewed: 2026-07-10
source_of_truth: ../_HUB/status.json
---

# Abzal Innovation Website Project Brain

## Identity and purpose

The company marketing site is the public front door for Abzal Innovation. It presents Abzal Volt and Land Use Atlas as live products and Abzal Build as coming soon, serving contractors, municipalities/planners, partners, press, and prospective hires.

## Scope and architecture

- React 19 + Vite 7 + TypeScript + Tailwind CSS 4.1.
- Client-side SPA with the custom router in `src/router.ts`; Vercel rewrites routes to `index.html`.
- Content is owned primarily by `src/data/homepageContent.ts` and product page data/components.
- SEO, OpenGraph, Twitter Card, Schema.org, canonical URL, and contact emails in `index.html` are protected.
- Out of scope: becoming a product app, CMS, or framework-router application.

## Source hierarchy

| Category | Path | Status |
| --- | --- | --- |
| Project rules | [`../AGENTS.md`](../AGENTS.md) | confirmed |
| Architecture | [`AI_CONTEXT.md`](AI_CONTEXT.md) | confirmed |
| Current declared status | [`../_HUB/status.json`](../_HUB/status.json) | confirmed |
| Marketing content | [`../src/data/homepageContent.ts`](../src/data/homepageContent.ts) | confirmed |
| SEO/canonical metadata | [`../index.html`](../index.html) | confirmed |
| History/older boot state | [`SESSION_BOOT.md`](SESSION_BOOT.md) | useful but older than `_HUB/status.json` |

## Current phase and constraints

The project metadata says **Ready for Final Review** with **High** priority as of 2026-06-23. Product claims must be checked against the owning product repositories; Build remains coming soon unless current owner instruction changes that fact. No heavy router/UI dependency should be introduced.

## Related projects

- Innovation Hub indexes the site but does not own its content.
- Volt, Land Use Atlas, and Build own the product truth used by website claims.
- `Abzal Innovation Website backup` is a related backup, not the default work root.

## How Codex should work here

Read `AGENTS.md`, this brain, `STATUS.md`, `_HUB/status.json`, and the relevant product source before editing copy. Preserve SEO metadata and the custom router. Update project status/changelog only for meaningful work; update the root registry only if identity, location, state, priority, relationship, or source of truth changes.
