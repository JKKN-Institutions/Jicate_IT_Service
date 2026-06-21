# Palantir Homepage Parity — Design Spec

> **Date:** 2026-06-19 · **Brand:** Jicate IT Service · **Scope:** Homepage only (`app/page.tsx`)
> **Goal:** Bring the remaining homepage sections to parity with the **live** `palantir.com` homepage — matching its section set, order, layout, motion, **and (per explicit user decision) its verbatim text/media**.

---

## 0. Decisions locked in (from brainstorming)

| Decision | Choice |
| --- | --- |
| Content for parity sections | **Reproduce Palantir's text verbatim** (hot-linked from Palantir's CDN, same pattern as the existing `content/showcase.ts`). |
| Impact Studies band | **Leave `FeaturedCaseStudy` unmounted** — the live reference has no standalone impact band, so strict parity = don't show it. Code stays in the repo. |
| Old AI-services slider | **Keep `ServicesSlider` / `ServicesScrolly` + their content in the repo, unmounted.** Not deleted. |
| Section order | Already matches the reference — verify, don't re-order. |

### ⚠️ IP / production note (acknowledged, proceeding as asked)
Palantir's product names (AIP, Gotham, Foundry, Ontology, Apollo), marketing copy, testimonial quotes, and media are Palantir's trademarks / IP. This spec reproduces them as **scaffolding**, continuing the pattern already in `content/showcase.ts` (which hot-links Palantir's Contentful CDN). **Before this site ships to a real production domain, the verbatim Palantir copy/trademarks/media must be swapped for Jicate's own.** This is a build/prototyping fidelity exercise, not production-ready brand content. The repo's `design/` docs document a stricter "design-language-only, original-copy" rule; this spec consciously overrides it per user instruction for the parity goal.

---

## 1. Reference section map (live palantir.com, top → bottom)

Measured live via headless Chrome on 2026-06-19:

| # | Reference band | Layout | Jicate counterpart | Status |
| --- | --- | --- | --- | --- |
| 1 | Nav (transparent → solid) + mega-menu | Floating bar | `SiteHeader` + `MegaMenu` | ✅ exists — polish |
| 2 | Hero | Dark video bg, H1 + `↖ Get Started` | `Hero` | ✅ exists — content align |
| 3 | "Latest News" carousel | Tabbed featured carousel, dark card, `See All` + `← →` | `ProductCarousel` | ✅ matches (uses `content/showcase.ts`) |
| 4 | **"Our Software"** offerings | Numbered `/0.1`–`/0.5` list, **interactive video preview per product** | `ServicesSlider` (different interaction) | ❌ **rebuild → `OurSoftware`** |
| 5 | Manifesto | Statement + `Learn More` | `ManifestoBand` | ⚠️ content swap |
| 6 | Testimonials | "What our partners say about us", partner quotes | `Testimonials` | ⚠️ content swap |
| 7 | Final CTA | Two buttons: `Request a Demo →` / `Start Building →` | `SplitCTA` | ⚠️ content swap |
| 8 | Footer | Dense directory, social pills, locale US/UK/JP | `Footer` | ✅ exists — locale/IA polish |

> There is **no** standalone "Impact Studies" body band on the live homepage. "Latest Impact / Impact Studies" appears only as a nav/menu link. The impact/news/events content is folded into band #3.

---

## 2. Section specs

### 2.1 Offerings — `OurSoftware` (the main build)

**Replaces** the mounted `ServicesSlider` in `app/page.tsx`. Structural starting point is the existing **`ServicesScrolly`** (sticky-pinned numbered `/0.x` list) — extended with a video-preview panel.

**Layout.** Light canvas. Section heading **"Our Software"**. A numbered list of 5 products; each row: `/0.x` mono index + product logo/name + tagline. A media panel shows the **active** product's looping video preview; non-active products are dimmed (matches the existing `ServicesSlider`/`ServicesScrolly` active-item pattern).

**Interaction / progressive enhancement** (follow existing component conventions in `ServicesScrolly.tsx` / `ProductCarousel.tsx`):
- **Baseline (no JS / `prefers-reduced-motion`):** plain stacked `<ol>` of products, every item legible; videos render as `poster` images (or first-frame), nothing pinned/dimmed.
- **Enhanced:** sticky-pinned stage; scroll/hover selects the active product; active product's `<video>` autoplays muted+looped; others paused/dimmed. Honor reduced-motion (poster only), `useHydrated` flag (no setState-in-effect), horizontal-only scroll where applicable — reuse the established hooks (`useActiveStep`, `useReducedMotion`).

**Content** — new `content/offerings.ts` (mirror `content/showcase.ts` structure + header comment):

| `/0.x` | Product | Tagline (verbatim) | href | Video asset |
| --- | --- | --- | --- | --- |
| /0.1 | AIP | Automate operations, from the factory floor to the front lines | `https://www.palantir.com/platforms/aip/` | `…/1ZAGlJWcYtVmMckdqFKUNW/7ff05eda0bd3471eba68c522caa32872/homepage_-_AIP.mov?format=mp4` |
| /0.2 | Gotham | Achieve AI-driven combat superiority, from space to mud | `…/platforms/gotham/` | `…/6pvakzOU4AhfZjrgbrRXr9/ed5bb90509c20aa199058c74b3d7efd0/homepage_-_Gotham.mov` |
| /0.3 | Foundry | Build and manage Ontology-powered software, with a complete developer platform | `…/platforms/foundry/` | **capture during build** |
| /0.4 | Ontology | The central system for orchestrating decisions across Human+AI teams | `…/platforms/ontology/` | **capture during build** |
| /0.5 | Apollo | Autonomously deploy, monitor, and manage software across any environment | `…/platforms/apollo/` | `…/4hKQ7uw6vsjxrlntoFav6k/d9ea76812927c7b04539acc5463d3300/homepage_-_Apollo.mov?format=mp4` |

Video base host: `https://www.palantir.com/assets/xrfr7uokpv1b/…` (public; works cross-origin for `<video src>`). Normalize all 5 to the absolute form, as `showcase.ts` does for images. Foundry + Ontology `.mov` URLs to be captured from the live page during implementation (same browser session/pattern).

A new type (e.g. `Offering`) added to `types/content.ts`: `{ index, name, tagline, href, video, poster? }`.

### 2.2 Manifesto — `ManifestoBand` content swap (`content/home.ts`)
- `statement`: **"There is so much left to build"**
- `support`: **"Palantirians deliver mission-critical outcomes for the West's most important institutions."**
- `link`: **"Learn More"** → `/careers` (reference points to `palantir.com/careers`)

### 2.3 Testimonials — `Testimonials` content swap (`content/home.ts`)
Verbatim partner quotes (captured live):
1. **Wendy's Quality Supply Chain Co-op** — "Now, we've not only fixed our inventory problem, we've now taken a problem that would go on for weeks and days and fixed it in five minutes, making our people incredibly efficient." — *Pete Suerken, President & CEO, Wendy's Quality Supply Chain Co-op*
2. **Walgreens** — "We started with the goal of piloting 10 stores within about six months. However, leveraging Foundry and AIP, we began to see real promise quickly in composing AI-powered, end-to-end workflows that allowed us to get to about 4000 stores within eight months." — *Jeff Hoffman, VP, Product Pharmacy, Walgreens*
3. **AT&T** — "[S.C.O.U.T] began as a joint effort between AT&T and Palantir, and now has over 100 AT&T dedicated engineers and a dedicated support team…for this application. It's just one of the 660 applications we have on Foundry today." — *Dan Wagner, Dir. of Technology, AT&T*
4. **Parexel** — "We estimate that this solution reduces our time to submission materials by over 50% from the current 10 to 12 week average to around 3 to 4 weeks…and cut [in] half the time that is required to get there." — *Dan Ballard, SVP Digital Innovation, Parexel*
5. **Heineken** — "We had a great chassis of the car. But our engine was underpowered. So we went to Palantir because we want to have the best engine out there…In three months, [the teams] built what took us three years before." — *Laurens van de Rotte, COO, Heineken USA*

> The existing `Testimonial` type is `{ quote, clientName, role }` — maps cleanly (clientName = company in MONO UPPERCASE, role = name + title). Add a 6th (2nd Walgreens) if its full quote is captured.

### 2.4 Final CTA — `SplitCTA` content swap (`content/home.ts`)
- Half A: **"Request a Demo"** → (demo route)
- Half B: **"Start Building"** → (build/get-started route)
- Both use the `→` big-CTA arrow (already the component's behavior).

### 2.5 Hero — verify/align (`content/home.ts`)
- Keep H1 "AI-Powered Automation for Every Decision" (already present).
- Keep `↖ Get Started` primary CTA. Align subcopy/secondary link to the reference if a mismatch is found during build (low priority — hero already largely matches).

### 2.6 Header / footer parity polish
- **`AnnouncementBar` stays UNMOUNTED.** Correction to an earlier assumption: the live reference has **no announcement strip**, so strict parity = keep it off the page (component remains in the repo).
- **Footer locale** → `US / UK / JP` (currently "Global (EN)"), in `content/navigation.ts` `legal.locale`. Social pills already match (Youtube/X/Linkedin/Github/Store).
- **Platforms IA** → add a `Platforms` group (AIP / Gotham / Foundry / Ontology / Apollo) to the mega menu and footer, mirroring the reference's primary platform directory. Other columns keep Jicate's route-safe IA.

---

## 3. Files

**New**
- `content/offerings.ts` — 5 offerings, verbatim, hot-linked CDN videos (mirror `showcase.ts` + IP header comment).
- `components/home/OurSoftware.tsx` — numbered `/0.x` offerings list with interactive video preview.

**Changed**
- `app/page.tsx` — swap `ServicesSlider` → `OurSoftware` (remove `ServicesSlider` from the render; keep the import/component file in repo).
- `app/layout.tsx` — mount `AnnouncementBar`.
- `content/home.ts` — manifesto, testimonials, splitCTA (and hero if needed).
- `content/navigation.ts` — footer `legal.locale`; nav/footer IA tweaks.
- `types/content.ts` — add `Offering` type.
- `components/home/index.ts` — export `OurSoftware`.

**Untouched (kept, unmounted)**
- `components/home/ServicesSlider.tsx`, `ServicesScrolly.tsx`, `FeaturedCaseStudy.tsx` and their content remain in the repo, not rendered.

---

## 4. Verification
- `npm run build` (or the project's build) passes — **read `node_modules/next/dist/docs/` first** per `AGENTS.md` (non-standard Next.js).
- Lint/typecheck clean (new `Offering` type wired).
- Manual check via the dev server + Chrome DevTools: page order matches the reference; `OurSoftware` videos autoplay on active / poster under reduced-motion; `AnnouncementBar` shows and dismisses; no hydration warnings (SSR snapshot discipline preserved); a11y (carousel/list roles, focus, reduced-motion) intact.
- Confirm hot-linked CDN videos/images actually load from `palantir.com` / `images.ctfassets.net`.

## 5. Out of scope
Inner/subpages, real Jicate production copy/media (explicitly deferred per §0), the unmounted `FeaturedCaseStudy`/`ServicesSlider`/`ServicesScrolly`, analytics, search overlay behavior.
