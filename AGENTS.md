# AGENTS.md — Abzal Innovation Website

## Mandatory pre-work
1. Read `docs/AI_CONTEXT.md` — identity, architecture, non-negotiables
2. Read `docs/SESSION_BOOT.md` — current state and next best focus
3. Read `docs/PROJECT_BRAIN.md` — source hierarchy, boundaries, and workspace relationships
4. Read `docs/STATUS.md` — concise current review state and known conflicts

## Product identity
**Abzal Innovation Website** is the marketing site for Abzal Innovation — the software company serving electrical contractors, construction teams, and municipal land-use professionals. Three product lines are surfaced: Volt (live), Land Use Atlas (live), Abzal Build (upcoming).

## Working posture
- **Site is the front door.** Clear positioning for Volt, Atlas, and Build; everything else supports that.
- **Client-side SPA with a custom router.** Vercel rewrites everything to `index.html`.
- **No new heavy dependencies.** Bundle stays tight (no framework router; custom pushState router).
- **Content-driven.** `src/data/homepageContent.ts` + content-like files are the source for sections.
- **Align with Abzal family voice.** Keep marketing truthful to actual product state (Volt live, Atlas live, Build coming soon).

## Hard rules
- Do not invent product features that aren't live in the underlying repos.
- Do not claim Abzal Build is shipping — it is coming soon.
- Keep SEO meta, OpenGraph, Twitter Card, and Schema.org organization/website data intact in `index.html`.
- Contact emails are `sales@abzalinnovation.com` and `contact@abzalinnovation.com`.
- Canonical URL is `https://www.abzalinnovation.com`.

## Discoverable commands
```
npm run dev      # Vite dev server
npm run build    # tsc + vite build
npm run preview  # preview production build
```
`.claude/settings.local.json` only allows `Bash(npx tsc:*)` and `Bash(npx vite:*)`.

## Required response format
1. Momentum / milestone reached
2. Files modified
3. What changed
4. Why it changed
5. Remaining gaps / risks
6. Build / validation status (`npm run build`)

## Never hallucinate
- No analytics or tracking code currently present — do not claim there is.
- No environment config visible beyond Vercel defaults.
- No README.md in this repo before this bootstrap.
- Mark anything uncertain as `inferred` / `unknown`.
