# DECISIONS — Abzal Innovation Website

## Architecture
- **D1. SPA over SSG.** Client-side routing via custom `src/router.ts` (pushState); single-bundle deploy. *(Source: repo survey.)*
- **D2. Custom lightweight router; no React Router dependency.** Keeps bundle minimal. *(Source: `src/router.ts`.)*
- **D3. Vite 7 + Tailwind 4 + @tailwindcss/vite plugin.** Modern build tooling, fast HMR. *(Source: `package.json`.)*
- **D4. Vercel SPA rewrites.** `vercel.json` rewrites all paths to `/index.html`. *(Source: `vercel.json`.)*
- **D5. Content-driven structure.** `src/data/homepageContent.ts` + typed content interfaces (CMS-ready for future). *(Source: repo survey.)*

## Meta + identity
- **D6. Canonical URL `https://www.abzalinnovation.com`.** *(Source: `index.html`.)*
- **D7. Schema.org Organization + WebSite structured data.** *(Source: `index.html`.)*
- **D8. Contact emails `sales@abzalinnovation.com`, `contact@abzalinnovation.com`.** *(Source: git log 2026-04-22.)*
- **D9. One Better uses `hello@abzalinnovation.com` for app-specific support.** General company and sales contact addresses remain unchanged. *(Source: owner instruction, 2026-08-10.)*

## Inferred decisions (need human confirmation)
- **D-I1. No analytics on purpose.** None visible in `index.html`; policy not documented.
- **D-I2. Legal page template is canonical for future legal pages.** `LegalPageTemplate` suggests reuse.
- **D-I3. Mobile-first polish cadence continues.** Implied by 2026-04-11 commit.
- **D-I4. No i18n planned near term.** Single English site.
