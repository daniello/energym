# Energym — comic-style site revamp (prototype)

Status: approved direction, implementing. Date: 21 Nov 2026.

## Intent

Give the Energym managers a “what if your website looked like this?” moment
before we pitch the promo video. Same gym, same offer, same people — rebuilt as
a full multi-page site with a comic/cel-shaded poster language inspired by the
*idea* of late-90s/early-2000s open-world game art. No GTA logos, characters,
UI, fonts or trade dress. Nothing identifiable as Rockstar.

The landing page is the showpiece: a short comic-panel transition sequence and a
reserved 16:9 “video bay” where the promo drops in later.

## Goals

- Full multi-page prototype: 8 pages, not the current ~18 Wix URLs.
- Reuse the real team portraits, gym photos, logo, copy, prices, timetable and
  facilities.
- Strong, consistent comic visual system: ink outlines, halftone, flat colour,
  panel layouts, sticker typography, hard shadows.
- Landing page with a signature entrance and a video placeholder.
- Fast, static, deployable; easy to swap real content later.
- Responsive and readable on laptop and phone.

## Non-goals

- No Rockstar/GTA assets, characters, logos, UI or copied cover art.
- No Wix migration or CMS.
- No working payments, bookings or backend. Join buttons go to the existing
  Clubwise pages; the contact form is a client-side demo.
- No AI-generated fake staff. Portraits are the real team, treated graphically.
- No full brand rewrite. The existing copy voice is already strong; we art-
  direct it.

## Constraints

- Current site is Wix, with duplicated per-location pages and little structured
  content. Data was extracted from the live pages and timetable screenshots.
- Prices and timetable can change. The prototype is a snapshot, not a source of
  truth.
- The prototype is a pitch artifact, not Energym’s production site.
- Must work without a build server in the room: static output.

## Approaches considered

1. **Astro + GSAP + View Transitions (chosen).** Static multi-page output, shared
   layouts/components, client-side page transitions, easy Vercel deploy. Best
   balance of speed, structure and animation control.
2. **React SPA (Vite + React Router + Framer Motion).** Most control over
   persistent transitions, but heavier, worse initial load and unnecessary for
   a content site.
3. **Plain HTML/CSS/JS.** Simplest to hand over, but duplicates layout across 8
   pages and makes the transition system brittle.

## Information architecture

1. **Home** — landing sequence, manifesto, three pillars, facilities/crew/
   timetable teasers, membership CTA, both locations, video bay.
2. **Membership** — both clubs, prices, day pass, join links, small print.
3. **New Malden** — address, contact, hours, six facility zones, timetable
   teaser, join CTA, directions.
4. **West Ealing** — same structure, West Ealing content.
5. **The Crew** — all 19 trainers, filter by club, comic trading-card grid,
   short bios.
6. **Timetable** — club toggle, full weekly grid, TBC slots styled as stickers.
7. **Classes** — featured class cards plus the full class list and Reform
   Pilates callout.
8. **Contact** — both clubs, phone/email/hours, demo enquiry form, book-a-tour
   CTA.

## Visual system

- **Palette:** ink black `#0b0b0b`, newsprint cream `#f3ead7`, Energym green
  `#54ff2f`, acid yellow `#e4ff1a`, hot pink `#ff2d6f` as a sparing accent,
  teal `#18e0d0` as a secondary accent.
- **Type:** heavy condensed display (Anton), blocky subheads (Archivo Black),
  clean body (Space Grotesk), marker accents (Permanent Marker).
- **Texture:** halftone dot fields, paper grain, ink splatter, speed lines,
  torn-paper edges.
- **Panels:** 4px ink borders, hard offset shadows, slight rotations, tape and
  sticker labels. Asymmetric grid, never a clean corporate card grid.
- **Photos:** real images treated as comic panels: high contrast, posterised
  colour, green/black duotone, halftone overlay, heavy keyline. Faces stay
  recognisable.
- **Motion:** one signature move per page. Landing: logo stamp, panel split,
  crew/facility panels slide in, video bay scanlines. Other pages: panel wipe on
  navigation, scroll-triggered panel rotations, hover lift. Respect
  `prefers-reduced-motion`.

## Data

- `src/data/site.ts`: locations, prices, timetable, facilities, crew, classes,
  nav.
- Source content from the live Energym pages on 21 Nov 2026.
- Images: optimised copies in `public/img/` from `../site-assets`.

## Technical shape

- `site/` — Astro project (kept separate from scraped assets and research).
- `src/layouts/BaseLayout.astro` — head, nav, footer, transition overlay,
  global SVG filters.
- `src/components/` — Nav, Footer, ComicPanel, CrewCard, PriceCard, Timetable,
  VideoBay, Sticker, Marquee.
- `src/pages/` — the 8 routes.
- `src/styles/global.css` — tokens, textures, layout primitives, motion.
- Astro View Transitions for page changes; GSAP timeline for the landing
  sequence and scroll reveals.
- Static output, no server runtime.

## Acceptance

- All 8 routes build and load.
- Nav works between pages; page transition plays.
- Landing sequence plays once without blocking content.
- Video bay is clearly a placeholder and labelled for the future promo.
- Real prices, timetable and crew names are present.
- Mobile layout works at 390px and desktop at 1440px.
- No GTA/Rockstar names, logos or copied art.
- Reduced-motion mode disables the big entrance and parallax.
