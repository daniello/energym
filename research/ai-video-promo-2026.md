# AI video for the Energym promo — landscape and recommended approach

Research note, 21 Nov 2026. Model names and prices move weekly; every figure
below is date-stamped and linked to the source it came from.

## Executive summary

- The best results do **not** come from one text-to-video prompt. The reliable
  pipeline is: **generate or select stills → image-to-video → edit → grade and
  sound**.
- **Higgsfield** (the thing you heard as "Hicksfield") is not a model. It is an
  aggregator/UI on top of Kling, Seedance, Wan, Veo and others. It is convenient,
  but per-second API access through Higgsfield or fal is cheaper and more
  flexible for a one-off project.
- **Sora 2 is gone.** OpenAI shut the Videos API and `sora-2` / `sora-2-pro` on
  24 Sep 2026 with no replacement.
- **Veo 3.1 Preview in the Gemini API was shut down on 22 Oct 2026.** Veo 3.1
  still exists as a GA model through Google's enterprise platform and through
  resellers such as Runway, but Google's current developer-facing video model is
  **Gemini Omni Flash 1.2**.
- Current quality leaders for this job: **Gemini Omni Flash 1.2**, **Kling 4.0**,
  **Seedance 2.5**, **Runway Gen-4.5**, with **Wan 3.0** as the cheap workhorse.
- A realistic 20–30 second promo costs roughly **$15–50 in generation credits**
  with disciplined retries, or **$50–150** if you iterate heavily on hero shots.
  Editing can be done in free DaVinci Resolve.

## What is actually available (Nov 2026)

| Model | Owner | Length / resolution | Audio | Indicative price | Best use |
| --- | --- | --- | --- | --- | --- |
| **Gemini Omni Flash 1.2** | Google | 3–15 s, 720p/1080p/4K upscale | Native audio | $0.10/s at 1080p on Runway Dev; 4K ~$0.21/s | Conversational editing, reference-to-video with up to 6 images, consistent characters |
| **Kling 4.0** | Kuaishou | 3–30 s, up to 4K | Included | ~$0.077/s from Higgsfield API; ~$0.126/s 720p / ~$0.188/s 1080p on Runway (promo) | Cinematic motion, good value, long takes |
| **Kling 4.0 Flash** | Kuaishou | 3–20 s, up to 720p | Included | ~$0.063/s | Cheap drafts and B-roll |
| **Kling 3.0 Standard / Pro** | Kuaishou | 3–15 s, up to 4K | Optional | $0.084–0.112/s silent on fal; $0.09–0.17/s on Runway | Proven, cheaper than 4.0 |
| **Seedance 2.5** | ByteDance | 4–30 s, up to 4K | Optional | ~$0.118/s from Higgsfield; $0.20–1.10/s on Runway depending on resolution | Long single takes, reference-to-video, dialogue |
| **Seedance 2.0** | ByteDance | 4–15 s, up to 4K | Optional | ~$0.08/s from Higgsfield | Cheaper long takes |
| **Wan 3.0 / 3.0 Prime** | Alibaba | 2–30 s, up to 1080p | Optional | $0.038–0.05/s from Higgsfield; $0.05–0.20/s on fal/Runway | Cheapest usable motion, drafts, abstract gym B-roll |
| **Runway Gen-4.5** | Runway | 5–10 s, 720p, 4K upscale | No native audio | $0.12/s | Restyling existing footage, professional formats, edit bay |
| **Luma Ray3.2** | Luma | 5–10 s native, up to 20 s modify, 1080p | No native audio | Credit-based; check Luma | 16-keyframe control, motion transfer, HDR/EXR finishing |
| **Veo 3.1 (GA)** | Google | 4–8 s, up to 4K | Native audio | $0.20/s silent, $0.40/s audio standard; Fast $0.10/$0.15 | Still good, but no longer the default developer path |
| **MiniMax H3 Max** | MiniMax | Short clips, 1080p | Optional | $0.05/s on fal | Cheap drafts |
| **Grok Imagine 1.5** | xAI | Short clips | Optional | $0.05/s on fal; Lite from $0.01–0.03/s | Very cheap experimentation |
| **PixVerse V6** | PixVerse | Short clips | Optional | $0.005/s on fal | Throwaway tests only |

Primary sources: Google Gemini video/Omni docs, Runway Dev pricing, fal pricing,
Higgsfield API pricing, Luma Ray3.2 page.

## Platforms vs models

| Layer | What it is | Examples | When to use |
| --- | --- | --- | --- |
| **Model owner API** | Direct access to one family | Google Gemini API, Kling API, Luma API | You want one model and the lowest markup |
| **Aggregator API** | One key, many models, pay per second | fal, Higgsfield API, Runway Dev, Replicate | You want to compare models and script generation |
| **Creator UI** | Credits/subscription, templates, timeline | Higgsfield, Runway, Krea, Freepik, Pika | You want to click, not code |
| **Editing** | Cut, grade, titles, sound | DaVinci Resolve (free), Premiere, CapCut | Always the final step |

**Higgsfield** pricing (subscription, Nov 2026): roughly $19 Starter / $59 Plus /
$129 Ultra per month, with credits that do not roll over; annual billing is
cheaper. Its API is separately metered and often undercuts fal on the same model
(for example Kling 3.0 Pro at $0.144/s vs fal $0.168/s, per Higgsfield's own
comparison). Treat the comparison as vendor marketing and verify on the day.

**fal** is the simplest pay-as-you-go aggregator: no subscription, per-second
billing, broad model catalogue. Good default for scripted generation from this
repo.

## Recommended pipeline for the gym promo

1. **Lock the brief and screen spec.**
   - Ask the gym for the actual screen resolution and orientation first. Most
     big TVs are 16:9 1920×1080 or 3840×2160, but video walls can be 3×1 or
     portrait.
   - Target 16:9, 4K master, 24 or 30 fps, 20–30 s, seamless loop, muted-safe.
   - Assume no one hears the audio. Put the message in the visuals and big type.

2. **Build a shot list of 6–8 beats.**
   Example: dark gym establishing shot → chalk clap macro → plates loading →
   cable pull / sled push → spin class lights → team portrait freeze → logo end
   card. Each beat 3–5 s.

3. **Create keyframes, not text prompts.**
   - Use the scraped team photos and gym stills as style references.
   - Generate or retouch one still per shot with Nano Banana Pro / Seedream 5 /
     FLUX 3 at 2K–4K. This is where you lock the green-lit look, wardrobe and
     composition.
   - Keep faces either real (with consent) or obscured/stylised. AI-generated
     fake staff in a real gym's ad is a trust risk.

4. **Animate with image-to-video.**
   - Hero shots: Gemini Omni Flash 1.2 (reference-to-video), Kling 4.0, or
     Seedance 2.5.
   - Drafts and B-roll: Wan 3.0 or Kling 4.0 Flash at 720p.
   - Use first/last-frame or multi-keyframe control where you need a specific
     transition. Luma Ray3.2 and Gemini Omni both support keyframes.

5. **Edit and finish.**
   - Cut in DaVinci Resolve (free). Add the Energym logo, end card, and one
     short line of copy. Grade to match the green/black brand look.
   - Add licensed music or sound design. Do not rely on model-generated music
     for a commercial display without checking rights.
   - Export H.264/H.265, high bitrate, 4K, plus a 1080p fallback and a 9:16
     social cutdown.

## What it costs

A 30 s promo is about 7 shots × 5 s, with 2–3 takes per shot = 70–105 s of
generated footage.

| Approach | Rate | 105 s of generation | Notes |
| --- | --- | --- | --- |
| Wan 3.0 720p | $0.10/s | ~$10.50 | Cheapest serious draft pass |
| Kling 3.0 Standard silent | $0.084/s | ~$8.80 | Good value |
| Gemini Omni Flash 1.2 1080p | $0.10/s | ~$10.50 | Strong consistency, native audio |
| Kling 4.0 1080p (promo) | $0.188/s | ~$19.70 | Better motion, audio included |
| Seedance 2.5 1080p (Runway) | $0.68/s | ~$71 | Only for hero shots |
| Veo 3.1 Standard audio | $0.40/s | ~$42 | Good but no longer default |

Add keyframe images (~$1–5), music ($0–30), and your time. A disciplined first
pass is **$15–30**; a polished hero-heavy version is **$50–100**.

## Recommendation

- **For a one-off pitch:** use **fal** or **Higgsfield API** pay-as-you-go.
  Do not buy an annual subscription before testing.
- **Model shortlist:** Gemini Omni Flash 1.2 for consistency and editing;
  Kling 4.0 for cinematic motion; Wan 3.0 for cheap drafts; Runway Gen-4.5 if
  you want to restyle real footage.
- **Avoid:** Sora 2 (shut down), Veo 3.1 Preview (shut down), and any workflow
  that relies on one long text-to-video generation. Short shots cut together
  always beat one 30 s generation.
- **Pitch strategy:** lead with the gym's real team and real equipment. Use AI
  for atmosphere, transitions and impossible camera moves, not to invent
  people. That is both more credible and cheaper.

## Sources

Primary:

- Google, Gemini API video generation (Omni Flash, Veo 3.1 preview shutdown):
  <https://ai.google.dev/gemini-api/docs/video>
- Google, Gemini Omni Flash capabilities and parameters:
  <https://ai.google.dev/gemini-api/docs/omni>
- Runway Dev API pricing (Kling, Seedance, Wan, Omni, Gen-4.5):
  <https://docs.dev.runwayml.com/guides/pricing/>
- fal pricing (per-model video rates):
  <https://fal.ai/pricing>
- Higgsfield API pricing:
  <https://open.higgsfield.ai/pricing>
- Luma Ray3.2 (keyframes, Modify Video, HDR/EXR):
  <https://lumalabs.ai/ray>
- OpenAI deprecations (Sora 2 removed 24 Sep 2026):
  <https://platform.openai.com/docs/deprecations>

Secondary:

- Higgsfield subscription pricing (third-party snapshot, 10 Nov 2026):
  <https://vtrends.me/blog/higgsfield-pricing>
- Veo 3.1 rate card summary (CloudZero, Oct 2026):
  <https://www.cloudzero.com/blog/veo-3-pricing/>
