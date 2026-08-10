# ROADMAP — Abzal Innovation Website

## Stabilization
- Keep bundle lean; no framework router; no heavy UI kit.
- Preserve SEO / OpenGraph / Twitter / Schema.org metadata.
- Keep canonical URL and contact emails consistent.

## Content
- Volt page reflects the live product honestly.
- Atlas page reflects Atlas / Land Use Atlas honestly.
- Build page stays coming-soon; no feature claims.
- Homepage product preview strip updates as product state changes.
- Legal pages (Privacy, Terms) stay current.

## Marketing / measurement
- Decide on analytics (privacy-respecting) or explicit none.
- Consider light social/OG preview testing.
- Contact flow audit — `sales@abzalinnovation.com`, `contact@abzalinnovation.com` reachable and triaged.

## Mobile
- Continue mobile homepage polish thread (2026-04-11).
- Header + logo sizing (2026-04-13) reviewed across breakpoints.

## Deploy / CI
- Vercel rewrites all paths to `index.html` (SPA).
- Consider lightweight `npm run build` CI check.
- No environment config needed today; revisit when/if the site needs server-side behavior.
