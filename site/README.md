# Energym — comic prototype

A static, multi-page concept site for Energym New Malden and West Ealing. It
reuses the real team portraits, gym photos, logo, copy, prices, facilities and
timetable, and re-skins them with a comic / cel-shaded poster language.

This is a pitch prototype, not Energym's production site and not a Wix
migration. No GTA/Rockstar assets, logos, characters or UI are used.

## Run it

```bash
cd site
npm install
npm run dev
```

Open the URL Astro prints (usually `http://localhost:4321`).

Production build:

```bash
npm run build
npm run preview
```

The static output lands in `site/dist/`.

## Routes

| Route | Page |
| --- | --- |
| `/` | Landing sequence + video bay |
| `/membership` | Prices and Clubwise join links |
| `/new-malden` | Club hub: contact, zones, timetable |
| `/west-ealing` | Club hub: contact, zones, timetable |
| `/crew` | All 19 trainers, filterable by club |
| `/timetable` | Full weekly timetable, club toggle |
| `/classes` | Featured classes + full class list |
| `/contact` | Both clubs + demo enquiry form |

## Where the content came from

- Live pages: `energym.co.uk` (home, membership, team, facilities, timetable,
  contact, join pages), scraped 21 Nov 2026.
- Images: `../site-assets/` (originals from `static.wixstatic.com`).
- The timetable was transcribed from full-page Playwright screenshots of
  `/new-malden-classes` and `/west-ealing-classes`.
- Membership prices were taken from `/join-new-malden` and `/join-west-ealing`.

Data lives in `src/data/site.ts`. Update prices, timetable slots or crew there.

## Visual system

- Tokens and textures: `src/styles/global.css`.
- Panels, stickers, hard shadows, halftone photo treatment, speed lines.
- Fonts are bundled in `public/fonts/` (Anton, Archivo Black, Space Grotesk,
  Permanent Marker).
- Page transitions use Astro's `<ClientRouter />` plus a clip-path comic wipe.
- The landing entrance uses GSAP; scroll reveals use IntersectionObserver.
- `prefers-reduced-motion` disables the big entrance, ticker and scanline
  animations.

## Video

- `public/video/join-the-crew.mp4` — the full 15s cut (with audio and end
  card), used in “The Nod” trailer bay.
- `public/video/join-the-crew-hero.mp4` — a 12.3s silent, trimmed loop used as
  the hero background.
- `public/img/gym/hero-video-poster.jpg` — poster/fallback frame.
- The hero video is muted, autoplays and loops; reduced-motion users see the
  poster instead. The trailer bay uses native controls and keeps the audio.

## Known prototype shortcuts

- The contact form is client-side only and shows a demo success message.
- Join buttons open the existing Clubwise pages.
- "Book a tour" routes to `/contact`; there is no booking backend.
- TBC timetable slots are shown as TBC stickers.
- Legal/small-print links go to the existing live Energym pages.
- The video is a concept cut; get consent before using real staff likeness in
  any public or paid version.
