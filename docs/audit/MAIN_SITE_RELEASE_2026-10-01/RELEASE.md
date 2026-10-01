# Abzal Innovation main website release — 2026-10-01

This release clarifies product access and fixes navigation/contact behavior on the existing company website. Build is described as in development; Volt and Atlas link to their dedicated sites; One Better offers an overview and current-availability inquiry. No prices, launch dates, adoption claims or store availability were added.

The canonical repository is `Apps/01_ABZAL_INNOVATION/Abzal Innovation Website` (`nayeemabzal/Abzalinnovation`). The owner explicitly authorized stale-lock recovery and publication on October 1. Recovery advanced the original checkout from `c9dc07d` to already-merged `e807c88` without creating another project or reviving PR #1. The 90 protected files retained exact hashes, the two saved documentation additions were reapplied, and 11 upstream integration files matched Git. Git's stale index entries required rebuilding only the restored docs' entries; no content changes were staged by that step.

Volt, Atlas and EarthTimeMachine remain separate apps/deployments. No EarthTimeMachine app code, proxy destination, DNS, credentials or security setting was changed. Existing index SEO/schema and branding/assets remain intact. The newer standalone link/proxy behavior from merged main is retained.

## Changes

- Replace implied commercial availability and unsupported registration claims with product-site/availability inquiry wording. Keep Build’s development status explicit.
- Explain separate product workspaces and jurisdiction-specific Atlas research; remove implied data sync and municipal launch claims.
- Add browser route metadata using the existing hook; include hero headings in the main landmark and use the shared frame for About.
- Support keyboard product navigation and Escape focus restoration; maintain phone-menu focus and a 44px toggle.
- Make same-page anchors update history, move focus, and respect reduced motion; Back returns from the anchor.
- Normalize contact emails; associate errors with fields and focus the first invalid field. Require explicit service acceptance, bound waiting to 15 seconds, protect submitted fields, prevent duplicate requests, preserve failure drafts, and provide Cancel waiting and direct email.
- Update the Earth integration test to use the photo viewer’s actual accessible Close action rather than its replaced legacy ID. Retain all behavior assertions, add failure diagnostics, and allow bounded 60-second upstream loading. No product functionality was relaxed.
- Add a portable marketing browser suite using the existing Playwright runtime; no dependency or service added.

## Evidence-based completion checklist

| Acceptance criterion | Evidence / status |
|---|---|
| TypeScript and production build succeed on integrated current main | Passed `npm run build`: 70 modules; JS 367.55KB / 101.34KB gzip; CSS 71.47KB / 13.24KB gzip. |
| Main-site routes render and fit desktop, phone and landscape | Passed 249 assertions over 17 routes at1440/390/320/844x390; zero browser errors. |
| Navigation/Back, anchor history/focus, desktop and mobile Escape work | Included in the 249 browser assertions. |
| Contact empty/rejected/503/timeout/cancel/accepted/reset behavior works | Five synthetic requests intercepted; trimmed email and protected pending fields checked. No real inquiry sent. |
| Latest-main Earth integration works with current upstream | Existing suite covers native Studio Kids entry, global default, Back/Forward, duplicate queries/fragments, Guyana photo, landmark reload/maps, manifest, MIME and missing-asset404. Final run output recorded in local release evidence. |
| Exact remote commit and production deployment match release | Verified after publication; see the appended publication record. |
| Public marketing and Earth proxy remain healthy after publication | GET-only production checks recorded after publication. |
| Keyboard focus, main landmarks, error/status associations and reduced-motion anchors work | Covered locally. Full assistive-technology/WCAG acceptance remains open. |
| Real phones/tablets and all target browsers accepted | Open: automated viewport checks do not establish physical-device acceptance. |
| Contact reaches the actual mailbox | Open: separately authorized delivery test needed. Mocked service acceptance is not mailbox delivery. |
| Commercial access, billing, accounts and store listing are verified | Outside this umbrella-site release. Conservative text avoids readiness claims; product owners govern those workflows. |
| Static crawler/social metadata is route-specific | Open: browser metadata updates after JS; original index remains the static default. Prerendering is a separate decision. |

No known blocking marketing regression remains after the recorded checks. The early Earth test hit a network-ready timeout and then a stale photo-close selector; the current viewer uses the accessible “Close enlarged picture” control. Failure captures remain local; successful final assertions supersede those intermediate runs without hiding them.

## Reproduction

Run `npm run build`, start `npm run preview -- --host 127.0.0.1 --port 4176 --strictPort`, then execute `scripts/test-marketing.mjs` from a writable evidence folder. Set `PLAYWRIGHT_MODULE_PATH` to the installed Playwright module when it is not a local dependency; `BROWSER_CHANNEL` optionally selects an installed browser. `MARKETING_URL` selects the preview/public origin. Every test contact request is intercepted.

Run `npm run test:earth` with the same Playwright module setting. `EARTH_ARTIFACT_DIR` optionally retains failures. Without `SITE_URL`, the suite uses a local routing adapter with live upstream, which is not Vercel routing verification. Set `SITE_URL=https://www.abzalinnovation.com` for GET-only production integration verification after publication.

Local artifacts live beside this report: recovery hashes/doc snapshots, browser results/screenshots, and Earth diagnostics. Machine-local snapshots and unrelated `PROJECT.json`/earlier audits are excluded from the release commit. The linked existing-Vault summary is `Nayeem AI Command Center/02_PROJECTS/ABZAL_WEBSITE_MAIN_REVIEW_2026-10-01.md`; shared indexes are coordinator-owned and unchanged.
