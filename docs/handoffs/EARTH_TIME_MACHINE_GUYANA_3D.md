# Earth Time Machine — Guyana, Providence and Future Lab
Date: 2026-09-09
Status: Incoming development handoff. Main-site integration prepared on a review branch; new 3D scenes are NOT implemented or published by this handoff.

## Start here
1. Read this entire handoff and the existing project rules before work.
2. Complete Senku intake below. Recover and preserve the existing Earth Time Machine source before editing its application.
3. Validate the website integration in this branch with `npm run build`; check framing and direct-link behavior on real devices before release.
4. Make present-day Guyana the next detailed release, with Providence Stadium the flagship scene. Preserve all existing globe/history/terrain lessons.
5. Build the satellite lesson and a separate 2526 Future Lab as subsequent coherent slices. Do not present this document as finished software.

The user wants a visually advanced educational world that children can explore on iPads and a Samsung S25 Ultra. The existing globe received positive appearance and device feedback. The new priorities are richer futuristic 3D effects with meaningful data, present-day Guyana, a detailed Providence Stadium with Amazon Warriors playing a simulated match, and an explorable imagined city 500 years ahead.

## Product vision hierarchy — non-negotiable
The main purpose of Earth Time Machine is to let children explore the planet's history in a cool, futuristic 3D experience. Every major design decision must strengthen that chronological journey.

1. **Core experience:** travel through Earth's history—from early formation through changing oceans and continents, major geological and biological events, ice ages and the present day—with an interactive 3D globe, clear dates, evidence, narration and age-appropriate explanations.
2. **Present-day deep dives:** Guyana, Providence Stadium and other places are detailed destinations reached from the main Earth timeline. They enrich the present-day chapter but must not turn the product into a Guyana-only application.
3. **Supporting technology:** Google satellite/terrain views, orbital visualizations and 3D landmark scenes are optional exploration layers. They must not replace, bury or slow the historical time-travel experience.
4. **Future extension:** 2526 is an explicitly imagined final chapter after Today. It is a scenario for creative learning, not the main experience or a factual prediction.
5. **Navigation rule:** a child must always understand the selected date, what changed on Earth, why it mattered, and how to return to the global timeline.

Success is measured first by how clearly and delightfully children can explore Earth's history. Visual effects should reveal scale, time, cause and change rather than act as decoration.

## Holographic interaction language — non-negotiable
The globe must not look or behave like a basic web map. Its visual target is a child-friendly futuristic holographic learning table: dimensional, responsive and exciting, while keeping labels and scientific explanations easy to read.

### Interface across every era
The holographic interface is the explorer's timeless viewing system and remains futuristic across the complete timeline. Early Earth, dinosaur periods, ice ages and Today should never fall back to a plain map or conventional popup design. The world data, discoveries, colors and environmental effects change with the selected time; the interaction quality and advanced spatial presentation remain consistent. Only the year 2526 changes the content into an imagined future scenario.

### Resting globe
- Present Earth as a luminous volumetric object in a dark observatory space, with controlled atmospheric rim light, subtle depth particles, faint geographic/grid arcs and time-reactive energy paths.
- Let the selected era change the visual system: palette, atmosphere, surface activity and available discoveries should respond to what existed then.
- Use motion to communicate planetary processes—rotation, plate movement between sourced snapshots, impacts, volcanism, ice extent, ocean change and orbit—not as random decorative noise.
- Keep the interface clear enough for young children to immediately find the date, play/pause, discoveries and return controls. Do not bury learning under dense science-fiction dashboard clutter.

### Touch-to-discover sequence
A successful tap on the globe should feel like the hologram recognized a place:
1. A surface pulse and scanning ring lock onto the selected coordinate.
2. A short vertical light beam or arc connects the point to an anchored label.
3. The label identifies the city, landmark, geological feature, event or habitat with its name, type and applicable date.
4. A compact visual card opens with an image, miniature 3D object, terrain slice, animation or diagram when an evidence-backed asset exists.
5. The child may open a deeper scene, hear the lesson, try a mission, compare eras or close the card and continue spinning the globe.

Do not imply that every coordinate can be reverse-geocoded or identified. If a tapped point has no curated discovery nearby, show its coordinates and a useful era-appropriate observation rather than inventing a city, landform, species or country.

### Three depths of learning
- **Discover:** name, icon, era and one memorable fact in a quick anchored holographic label.
- **Understand:** "What was here?", "What changed?" and "Why it matters," supported by a visual, narration and source/uncertainty access.
- **Explore:** enter a focused 3D terrain, cutaway, reconstruction, wildlife habitat, city or landmark scene with interactive learning points and a clear route back to the same date and globe position.

Every detailed scene must have an accessible list/button alternative to tapping small 3D targets.

### Time-aware discovery rules
Each discoverable item needs explicit time availability in its data, including a start, end or named chapter, evidence type and uncertainty. The renderer must filter discoveries from that data rather than maintaining unrelated hand-written visibility checks.

- Modern cities, Providence Stadium, current borders and present-day structures appear only in appropriate recent chapters.
- Dinosaurs, ancient organisms, glaciers, impact sites and volcanic events appear only in chapters supported by evidence.
- A modern landmark must not remain pinned to an ancient reconstructed continent. An ancient precursor may appear only as a separately sourced reconstruction with an honest label.
- When crossing a relevant date, discoveries may form, move, transform or fade with a short meaningful transition.
- Provide a timeline explanation when something is absent: for example, "Providence Stadium had not been built yet," rather than leaving confusing disabled markers everywhere.
- Keep measured facts, scientific reconstructions and imagined future content visually distinct. The year 2526 uses an unmistakable "Imagined future" status throughout.

### Visual and performance acceptance
- Use genuine 3D depth, occlusion, light and camera motion. Flat cards may provide readable text, but they should feel anchored to the spatial interaction.
- Establish a restrained visual language: cyan/teal planetary light, gold for discoveries and Guyana accents where relevant. Color must also carry readable text/icons, not act as the only status signal.
- Load detailed models, photography and local scenes only after selection. Keep the main globe and timeline ready first.
- Use one active rendering loop, adaptive detail, capped pixel density, instancing and asset disposal so the experience remains responsive on the tested iPads and Samsung S25 Ultra.
- Support reduced motion, pause and replay. Essential explanations must remain available when bloom, particles, audio or animation are reduced.
- Test the complete tap sequence in portrait and landscape. A technically functional marker with a generic popup does not meet the intended experience.

## Living lesson page below the globe — required
The interactive holographic globe is the main attraction, the primary navigation and the first experience on every visit. It must occupy the dominant opening view and remain the place where children choose time, touch locations and begin discoveries. The page beneath it is a rich supporting lesson layer synchronized with the selected date, place and discovery. A child explores through the globe first, then scrolls naturally into deeper learning without losing that context.

### Synchronized learning sections
For each supported era, the page should provide:
- **Snapshot:** what Earth looked like, the date range and the most important idea to remember.
- **What changed:** the major geological, atmospheric, climate or biological process and its cause/effect relationship.
- **Life at the time:** evidence-backed organisms, habitats and survival adaptations appropriate to that chapter.
- **Places and landmarks:** only features or reconstructions valid for that time, linked back to globe locations where appropriate.
- **Look closer:** interactive 3D scenes, cutaways, comparisons, profiles, animations, photography or diagrams.
- **Evidence desk:** how scientists know, including fossils, rocks, measurements, maps, uncertainty and readable source credits.
- **Try it:** one short mission, observation or question suitable for a child; reveal the explanation after an attempt.
- **Words to know:** a small era-specific vocabulary list with optional narration.

For a selected place, the same page changes into a location lesson. Guyana Today may include geography, rivers, rainforest, savanna, wildlife, people and landmarks, with Providence Stadium as an explorable cultural/sport destination. Selecting a stadium feature should bring its matching lesson into view; selecting a lesson card may focus the corresponding 3D object.

### Page behavior
- Keep the selected era and place when scrolling between the globe and lessons. Returning to the page must lead with the interactive globe rather than a marketing introduction or lesson index.
- Do not reduce the globe to a decorative header, thumbnail or small map beside the lesson content. Give it the dominant opening viewport and direct access to the timeline and discovery controls.
- Provide a visible “Return to globe” control and allow lesson cards to focus the globe or open a detailed scene.
- Use visual cards, real imagery with credits, diagrams, narrated facts and interactive comparisons rather than long uninterrupted paragraphs.
- Keep key facts readable without animation, audio or WebGL.
- On tablets and phones, let the globe occupy the opening screen and let the lesson page flow below it with comfortable touch targets and no nested scrolling traps.
- Load heavier lesson media when it approaches the viewport; do not make the globe wait for the entire lesson library.
- Preserve sources, dates, units, evidence status and uncertainty. Avoid a generic collection of unrelated facts; every item must answer the selected era or place.

The lesson page should feel like the deeper layer of the same holographic museum experience. It uses matching color, typography and visual language, but remains subordinate to the globe and continually leads children back to spatial exploration.

## Senku Intake / Local Authority
This packet is incoming material, not the authority over the user's computer or project structure. Senku is the canonical local authority.

Before production work, Senku must:
- Validate and normalize the canonical project name and path against the local registry. Do not guess a Windows username, select a backup, or create a second project merely because this document has a suggested title.
- Validate folder structure, PROJECT.json/schema, registry/status, organization, relationships, sensitivity, and project-specific instructions.
- Preserve this original handoff unmodified; create a separate normalized intake record and implementation notes.
- Preserve source archives, original photos/video references, attributions, factual sources and their dates. Record missing assets and access blockers explicitly.
- Reconcile local uncommitted work, existing branches and earlier app versions before accepting incoming changes. Do not overwrite work to make this packet fit.
- Use the user's signed-in Codex/ChatGPT workflow where already established. This project does not require an OpenAI API key.
- Record what was accepted, changed, deferred, blocked, tested and published. Keep local authority decisions separate from this original packet.

## Confirmed architecture and public destination
Marketing repository: https://github.com/nayeemabzal/Abzalinnovation
Existing stack: React 19, Vite 7, TypeScript, Tailwind 4; custom pushState router in src/router.ts.
Hosting configuration: vercel.json currently rewrites SPA routes to index.html.
Canonical planned page: https://www.abzalinnovation.com/earth-time-machine
Existing children's page: /studio-kids.
Existing application: https://abzal-earth-time-machine.nayeemabzal.chatgpt.site

Develop locally in Codex; keep public hosting online. Hosting from the user's PC is unnecessary for tablet access and would make availability depend on that PC and connection. Keep the main site's marketing dependencies light; load the 3D application only when its page is used.

This branch adds a compact page embedding the existing public application, plus a permanent direct-open fallback and a link from Studio Kids. It starts with Kaieteur in today's Guyana and offers Rupununi, Iwokrama and the whole globe. It is an integration bridge, not a migration of the app's code.

Do not repoint the root domain or replace the main website. Preserve its existing product truth, contact details, SEO and protected metadata. Public publication of this educational page is authorized by the user's request; still satisfy the actual build and repository requirements.

## Source recovery and current baseline
The last known published Earth Time Machine source is commit:
078be5df7039cca96d46989de1c37cc74b85c2e3

Its original managed checkout was /workspace/sites/earth-time-machine. This is a historical remote-workspace path, NOT a requested local PC location.
Source is backed by the existing Sites project's source repository. Resolve that same Site by its existing public URL and original hosting manifest using the authorized Sites workflow. Obtain source access normally; never put credentials in this packet or repository.

The current turn's execution workspace was offline: shell and Node access both returned environment_offline. No new stadium, city, or satellite-overlay code was committed to the Earth Time Machine app. The existing source and asset archive are not attached to this document; retrieving them remains a prerequisite. Do not reconstruct the app from this description or claim the original source is lost.

Previously working capabilities:
- 13 dated Earth chapters, factual PALEOMAP snapshots, educational text and narration.
- NASA day surface and historical clouds; NASA 2016 night composite with an equinox day/night model, selected-point sunlight controls and one-day animation.
- Modern globe coordinates, grid, eight landmark pins, challenges.
- Eight regional terrain explorations using signed elevation/bathymetry data, learning stops and profiles.
- Guyana destinations Kaieteur, Rupununi and Iwokrama, terrain, wildlife and credited photography.
- Four educational 2D cutaways: Earth, volcano, mountain and pyramid.

Known integration interfaces from the preceding verified handoff; recheck against recovered source:
- createGlobe(stage, onInteraction, options) callbacks: onPoint, onLandmark, onNightStatus, onSolarChange, onSpinChange.
- setGrid, setPins, setPoint, focusPoint, inspectCenter, clearPoint; setSolarMode, setSolarLongitude, setSolarCycle.
- Existing Guyana URL: ?view=guyana&place=kaieteur&era=today
- Globe tools: dist/globe-tools.js, globe-overlays.js, globe-geography.js, globe-learning-data.js.
- Existing validations: scripts/validate-globe.mjs and scripts/validate-landmarks.mjs.

## Release A — Guyana today and Providence Stadium
Product flow: globe → Guyana → choose a place → enter detailed scene → select a viewpoint or learning object → return without losing the journey.
Providence belongs in today's Guyana. The imaginary city belongs in Future Lab.

### Providence likeness requirements
Use actual photographs and the architect's material. A generic symmetric fully roofed bowl labeled Providence is not acceptable.

| Feature | Evidence-grounded target | Accuracy limit |
| --- | --- | --- |
| Northwest | Red Stand | Recent ticket listing metadata and historical reporting agree; inspect current photo coverage |
| Southwest | Green Stand | Same limitation |
| Southeast | Orange Stand | Same limitation |
| Northeast | Open grass mound / adjacent party area | Retain the visibly open quadrant |
| North end | Media/broadcast pavilion | Position from 2007 report; current fit-out requires newer references |
| South end | Players/hospitality pavilion | Position from 2007 report; no verified interior floor plans |
| Perimeter | Six floodlight towers | Guyana government joint statement, 2024-10-01 |
| Roofs | Separate partial canopies with repeated structure | Reference architect photos; dimensions not surveyed |
| Pitch | 20.12 m by 3.05 m | MCC Law 6; prepared central square is larger |
| Outfield | Oval grass with boundary rope and prepared strips | Exact oval/boundary coordinates still unverified |

Model tiered seats and aisles, railings, roof framing, lattice towers, perimeter circulation, sightscreens, pitch creases and stumps. Distinguish verified dimensions from modeled approximations. Do not invent a survey or describe modeled pavilion interiors as authentic.

Visual/detail pipeline:
- Block out the actual asymmetric footprint from references before adding decoration.
- Create reusable mesh modules and levels of detail. Use instancing for seating/crowds and shared materials.
- Add restrained light bloom, dusk/bright-day controls, moving flags, crowd motion and pitch materials after likeness is right.
- Use a close-view level of detail for visible structural features. Crowd detail can decrease at distance.
- Maintain readable scene hotspots and a touch-friendly interface; decorative heads-up graphics must not cover the play.

### Simulated Amazon Warriors exhibition
Persistent label: "Simulated exhibition match". Do not display a live-feed badge or fabricated real match statistics.
Start with representative Warriors colors and generic player identities. A real roster or exact kit year requires a dated team source.

Include:
- Two batters, eleven fielders including the bowler and wicketkeeper, and two umpires.
- A coherent sequence: bowling run-up → release → bounce/bat contact → ball travel → fielding/run or boundary → result → reset.
- One match-state authority. Runs, wickets, striker, delivery count and field animation must agree; an over advances after six legal balls.
- Deterministic replay for the first demo. Support play/pause, restart over, replay delivery and speed control.
- Camera choices: aerial, pavilion, boundary, behind bowler and ball-follow. Add touch exploration around the ground and a reset view.
- Clickable pitch, crease, boundary, scoreboard and floodlights with brief teaching text.
- Optional sound only after a user gesture; separate mute and volume. No autoplay audio requirement.
- No betting, betting odds, real-player performance claims or unofficial live match feed needed for this educational scene.

Proposed first acceptance scene: one replayable over, both batters visible, delivery phases readable, a small set of diverse outcomes, score updated once per completed delivery. Extend gameplay only after the scene works.

### Verified present-day Guyana content
- Kaieteur: Potaro River drop of 741 ft, approximately 226 m. Source: Guyana Tourism Authority, https://guyanatourism.com/kaieteur-falls/ (undated, checked 2026-09-09).
- Iwokrama: 371,000 hectares (3,710 square kilometres); international centre established 1996. https://iwokrama.org/home/ (checked 2026-09-09).
- Rupununi: seasonal flooding can connect waterways and fish habitats. Historical surveys, not live flood or animal data: https://iwokrama.org/wp-content/uploads/2025/06/Fish-of-Iwokrama.pdf . Bibliographic issue February 2005, interior date inconsistency; avoid presenting its species count as a current census.
- Georgetown: east bank of the Demerara near the Atlantic. https://ntg.gov.gy/historic-georgetown/3/ (checked 2026-09-09).
- Coastal drainage: canals, culverts, sluices and pumps are part of Guyana's flood-management network. World Bank release dated 2024-06-10: https://www.worldbank.org/en/news/press-release/2024/06/10/guyana-to-strengthen-coastal-resilience-and-adaptation . Its announced repairs are plans, not a completed asset count.

## Release B — Orbital learning layer
The user wants the globe to feel like an advanced observatory. Make the effects explain something: orbital paths, selected spacecraft, day/night and communication geometry. Do not add meaningless flashing numbers.

Start with a small illustrative fleet in low Earth orbit and readable labels for purpose, selected model altitude and accelerated motion. Never call this "all satellites" or "live tracking".
- Clearly state spacecraft are enlarged and time accelerated.
- A chosen 550 km circular orbit is a teaching input, not an observed satellite record.
- Low Earth orbit is below 2,000 km. Geostationary altitude is approximately 35,786 km, with a period of 23 h 56 min 4 s, above the equator.
- GEO appears at about 6.62 Earth radii from the centre; do not squeeze it against the surface without labeling distorted distances.
- If actual orbital data is added later, preserve publisher, retrieval timestamp, orbital-element epoch and propagation method; display stale/error states.
- Share the existing renderer. Pause motion for hidden documents and dialogs. Keep ordinary drag/pinch and landmark selection working.
Primary source: ESA, https://www.esa.int/Enabling_Support/Space_Transportation/Types_of_orbits (page 2020-03-30, checked 2026-09-09).

## Release C — Future Lab: 2526
Label: "2526 — an imagined future".
Intro: "Imagine Guyana 500 years from now. Explore one possible city and the systems that could help people and nature thrive. This is a design story, not a forecast."

Do not project known coastlines, climate, population or satellite counts 500 years into the future as fact. Existing textures remain dated reference imagery. The setting is a fictional city inspired by Guyana, not an announced development or a proposed building site inside a protected forest.

Build a compact explorable district with four selectable systems:
1. Solar roofs → battery → school/clinic: illustrative electricity flow. Storage and controls matter; avoid invented output or outage guarantees.
2. Roof capture → tank/garden → storage basin → outlet: trace a raindrop. A rain control is a teaching animation, not a flood-risk model or proof of drinking-water safety.
3. Connected green/river habitat → crossing → adjoining habitat: find a route for wildlife. Fictional routes, not real tracking or guaranteed species suitability.
4. Shaded walking/cycling links + shared electric shuttle: select a stop, ride along and return to aerial view. No fabricated ridership or carbon savings.

Useful system sources:
- DOE microgrid overview: https://www.energy.gov/sites/default/files/2024-02/46060_DOE_GDO_Microgrid_Overview_Fact_Sheet_RELEASE_508.pdf
- EPA green infrastructure: https://www.epa.gov/green-infrastructure/types-green-infrastructure
- US Fish and Wildlife Service habitat corridors: https://www.fws.gov/story/wildlife-corridors
- US DOT active transportation: https://www.transportation.gov/mission/health/active-transportation-and-health

City interaction target: orbit/pinch overview, selectable districts, guided street-level viewpoints, follow-shuttle camera, day/night, pause/reset and accessible text alternatives. Add free walking only with tested collision/navigation boundaries.

## Reference register for Providence
| Source | Purpose | Distribution / date notes |
| --- | --- | --- |
| https://www.rkaindia.net/works/cricket-stadium | Architect's design and roof/framing references | Original planned capacity 15,000; do not label as verified current capacity. Photos have no confirmed reusable license |
| https://www.icc-cricket.com/tournaments/t20cricketworldcup/news/welcoming-the-world-west-indies-t20-world-cup-2024-venue-guide | Construction in 2006 for 2007 World Cup; site on Demerara east bank; shaded stands and mound | 2024 venue guide |
| https://dpi.gov.gy/joint-statement-from-the-ministry-of-culture-youth-and-sport-and-the-guyana-power-and-light-inc/ | Six floodlight towers | Government statement 2024-10-01 |
| https://www.stabroeknews.com/2007/03/28/news/guyana/all-set-sport-minister/ | Contemporaneous layout with site engineer/minister statements | Historical 2007 structure, not current interiors |
| https://www.lords.org/mcc/the-laws/the-pitch | Pitch dimensions | 20.12 m by 3.05 m |
| https://commons.wikimedia.org/wiki/File:Guyana_National_Stadium_from_Air_-_panoramio.jpg | Overall massing | Marco Farouk Basir, taken 2008-12-07, CC BY-SA 3.0 |
| https://commons.wikimedia.org/wiki/File:Smaller_Providence_Stadium_inside.jpg | Historical field-level view | FrWaters, uploaded February 2007; CC BY 2.5 offered |

Reusable assets have not been downloaded in this turn. Retrieve their original files and license pages, preserve credits and identify changes. The 2007/2008 images do not establish today's surrounding development or fit-out.

## Engineering and validation gates
- Load city/stadium assets only on entry; no heavy new bundle for the main marketing pages.
- Cap pixel ratio and use suitable texture sizes. Establish device performance budgets from actual iPad/S25 Ultra measurements.
- Dispose inactive scenes, textures, geometries, listeners, animation frames and renderers. Prevent simultaneous hidden render loops.
- Respect reduced motion; preserve manual stepping and camera controls.
- Provide large touch controls, keyboard-accessible hotspot lists, focus restoration, and readable WebGL loading/error/fallback states.
- Keep scientific data units and source dates visible on demand. Distinguish measured, modeled and imagined data.
- Verify current-page integration: direct refresh on /earth-time-machine; Studio Kids navigation and Back; initial Kaieteur; each destination; frame embedding policy; direct-open fallback; portrait/landscape and text enlargement.
- Match simulation tests must cover score progression, legal-ball count, repeat/restart, pause/resume and run attribution. Do not test geometry by merely duplicating constants.
- Before accepting stadium likeness, compare aerial and field-level views with references. A generic symmetric bowl fails.
- Run the repository-required npm run build before any main-site merge or deployment. The current turn could not run it because the workspace is offline.
- No browser or GPU validation was performed in this turn. Existing V7 device feedback does not validate this new integration or future scenes.

## Work completed in this branch
- Added the /earth-time-machine route and lightweight embedded explorer page.
- Added preset links to the existing current-Guyana destinations and the globe, with a direct-open fallback.
- Linked the page from Studio Kids.
- Preserved main-site routing, dependencies, product copy and root SEO.
- Prepared this sourced implementation handoff.

## Outstanding work
- Recover/export the existing V7 app source and assets into the canonical local project.
- Build/test the integration, check real-device framing and review the branch.
- Implement the actual detailed Providence scene, cricket simulation, orbital layer and Future Lab city.
- Publish only verified milestones and record exact delivered functionality.
