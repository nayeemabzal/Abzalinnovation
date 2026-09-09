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

## Actual Vercel preview verification — 09:07 EDT

Owner enabled the exception for
https://abzalinnovation-h89byipg3-nayeem-abzals-projects.vercel.app,
deployment 6349764370 from implementation commit
aa0a1d8096f31944964ccfb713d3954dcf1dbd2f. The earlier HTTP 302 authentication
block is resolved. Running `npm run test:earth` with SITE_URL set to that origin
and the existing PLAYWRIGHT_MODULE_PATH above exited 0:

```text
PASS 1280x820: native Studio Kids entry, global default, no iframe/old host, history, duplicate queries/fragments, Guyana photo, landmark stop reload/flat map, manifest; 0 page errors.
PASS 412x915: native Studio Kids entry, global default, no iframe/old host, history, duplicate queries/fragments, Guyana photo, landmark stop reload/flat map, manifest; 0 page errors.
PASS routing/MIME/missing-asset checks; mode=deployed site
```

Independent read-only audit fetched all 100 runtime resources through the real
`/earth-time-machine/` prefix: 100 HTTP 200, 100 correct MIME types, no auth or
resource redirects, 27,903,099 bytes. 99 files exactly match Git blob hashes.
The entire original 14,640-byte index.html is preserved and Vercel appends its
163-byte feedback-toolbar script. No application content was missing or altered.

This follow-up changes documentation only; application code, routing configuration,
dependencies and tests remain identical to the verified implementation commit.
The allowed preview above remains the device-review target even if documentation
pushes produce a newer protected deployment URL.

## Release continuation

Owner has been asked to check iPad/Samsung portrait and landscape, globe drag/zoom,
era changes and Guyana. Browser emulation does not establish physical-device
acceptance. Obtain explicit approval to merge existing PR #1, then publish and
run the same SITE_URL checks against https://www.abzalinnovation.com. The global
owner AGENTS instruction requires explicit approval of exact merge targets;
conditional route-verification instructions have now been satisfied, but no
explicit merge approval has been received. Keep the old deployment available
through final public-route verification. Major 3D work remains on hold.

Development was isolated in the existing website repository's worktree at
`C:\Users\gtbad\NayeemAI\_worktrees\earth-time-machine-website-integration`, branch
`codex/earth-time-machine-vercel-integration`. Canonical website main and its
pre-existing untracked PROJECT.json are untouched. No repository duplication,
dependency installation, paid API, source relocation or deletion occurred.
