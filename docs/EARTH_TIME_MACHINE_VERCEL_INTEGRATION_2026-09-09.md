# Earth Time Machine Vercel integration — 2026-09-09

Owner supplied the public Production domain in the Vercel screenshot and accepted
using the existing `www.abzalinnovation.com/earth-time-machine` route. No new custom
domain or root-domain change is needed. This branch replaces PR #1's temporary
ChatGPT Sites iframe; it does not implement new 3D scenes.

## Result and routing

- Verified public app origin: `https://earth-time-machine-tan.vercel.app`.
- `/earth-time-machine` redirects temporarily to `/earth-time-machine/` while
  preserving query parameters. The slash is needed before relative entry assets load.
- Exact slash-root and wildcard external rewrites serve the app and its files
  before the marketing SPA fallback. Missing app assets retain upstream 404s.
- Studio Kids uses the slash URL. The shared Link component allows native document
  navigation for that path, preserving browser history and modified-click behavior.
- The remaining React route is a lightweight direct-open fallback with the full
  original query/fragment; it creates no iframe and has no forced Guyana/Today preset.

The main website's index.html and unrelated marketing content remain unchanged.
The original handoff remains intact. App updates continue through the separate
Earth Time Machine repository, independent of the website's release cycle.

## Verification

Public application: all 100 runtime files return HTTP 200 and exactly match their
Git blob hashes (27,902,936 bytes). Desktop and phone Chromium checks render the
globe, era selection, Rupununi terrain/photo and Mariana terrain. Selected
`stop=bend`, tracking query and hash survive reload; no JavaScript errors or
horizontal overflow. A test navigation aborted one image request; a targeted
Today rerun completed both modern texture transfers with HTTP 200 and no failures.
This is emulation, not physical-device or Safari acceptance.

`npm run build` runs TypeScript checking and the Vite production build. Final output:
70 modules; `index-Cz5-mnWF.js` 363.32 kB and `index-DDRDWuU0.css` 70.80 kB.

Local integration verification (existing installed Playwright, no added dependency):

```powershell
$env:PLAYWRIGHT_MODULE_PATH='C:\Users\gtbad\Apps\01_ABZAL_INNOVATION\DuelCircuit\node_modules\playwright\index.mjs'
npm run test:earth
```

Observed exit 0:

```text
PASS 1280x820: native Studio Kids entry, global default, no iframe/old host, history, duplicate queries/fragments, Guyana photo, landmark stop reload/flat map, manifest; 0 page errors.
PASS 412x915: native Studio Kids entry, global default, no iframe/old host, history, duplicate queries/fragments, Guyana photo, landmark stop reload/flat map, manifest; 0 page errors.
PASS fallback: complete query/fragment preserved by direct public app link; no iframe.
PASS routing/MIME/missing-asset checks; mode=local routing adapter with live upstream
```

The local adapter reads this branch's routing rules and proxies the actual public
app. It does not prove that Vercel applies those rules identically. Set SITE_URL
to the real deployment to run the same route/browser checks there. All owned
test servers and browsers close after each run.

## Release continuation

Push this change to PR #1's existing head branch, wait for its actual Vercel preview
and run the test with SITE_URL set to that preview. Keep the PR unmerged and old app
running until route verification. Check iPad/Samsung portrait and landscape before
declaring the migration accepted and lifting the major 3D hold.

Development was isolated in the existing website repository's worktree at
`C:\Users\gtbad\NayeemAI\_worktrees\earth-time-machine-website-integration`, branch
`codex/earth-time-machine-vercel-integration`. Canonical website main and its
pre-existing untracked PROJECT.json are untouched. No repository duplication,
dependency installation, paid API, source relocation or deletion occurred.
