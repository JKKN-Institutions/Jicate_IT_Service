# Jicate IT Service — Design System

**Homepage clone · Palantir design language · Original Jicate brand · Full motion fidelity**

This is the entry-point document for the Jicate IT Service homepage design system. Start here, then follow the [Index](#index) to the detailed specs (01–08).

---

## 1. What this system is

This design system captures a **single, internally consistent visual + interaction language** for the Jicate IT Service homepage. Every token in these documents — color, type scale, grid, spacing, component geometry, motion timing — was **MEASURED LIVE from `palantir.com` via headless Chrome** (computed styles read off the rendered DOM, not eyeballed from screenshots). The numbers here are the *canonical source of truth*; they are not approximations. When in doubt, the measured value wins.

Because the values are measured rather than invented, this system is **buildable as-specified**: an engineer can wire the tokens into Tailwind v4's `@theme` and the components will land on the same grid, type rhythm, and motion curves as the reference.

> **Canonical-token rule for all contributors:** Never invent a color, size, weight, or duration. Use only the measured values documented across files 01–08. If a value you need isn't documented, flag it — don't guess.

---

## 2. Brand framing

**Jicate IT Service** is an IT services company — managed IT, cloud, cybersecurity, software/automation, and support. We render that brand inside Palantir's *design language*, not its content.

| Dimension | Decision |
|---|---|
| **What we copy** | The DESIGN LANGUAGE only: layout, 12-column grid, type scale, color system, component geometry, motion choreography, and motifs. |
| **What we do NOT copy** | Marketing copy, testimonial quotes, product names, or any sentence-level text. No verbatim reproduction, no light find-replace of their wording. |
| **Brand** | Jicate IT Service — original wordmark, original voice, original sample copy. |
| **Scope** | **Homepage only.** Single page, top to bottom. |
| **Fidelity** | **Full motion fidelity** — nav scroll transition, hero video, scroll reveals, sticky/pinned services list, horizontal-scroll testimonials, hover micro-interactions. |
| **Accent** | A single restrained **pine green `#2b5945`** stands in for the reference's accent, giving Jicate its own identity within the borrowed structure. |

---

## 3. Design principles

Eight principles, distilled directly from the measured tokens. Each is enforced by specific values documented in 01–08.

1. **Engineered precision.** Sharp corners everywhere (`border-radius: 0`) and thin **0.8px** borders. The *only* rounded elements in the entire system are the footer social pills. Geometry reads as drafted, not decorated.

2. **Editorial gravitas.** Oversized display headlines (Hero H1 at **80px / line-height 78px / weight 400 / letter-spacing -3.4px**), generous whitespace, and high contrast. The page carries itself like a serious publication, not a sales funnel.

3. **Light canvas, full-bleed dark media.** The site is fundamentally **light** — white canvas `#ffffff`, near-black ink `#1e2124`. Drama comes from **full-bleed dark sections** (`#202426`): the hero video, the dark split CTA, parts of the footer. Dark is an event, not the default.

4. **One restrained accent.** A single brand accent — **pine green `#2b5945`** — used sparingly (plus its 10% / 5% tints). The cooler **blue `#4e8af7`** appears *only* in dark/media contexts (hero glow, on-dark accents). No rainbow; restraint signals engineering confidence.

5. **Systematic 12-column grid.** `repeat(12, minmax(10px, 1fr))`, max content width **1440px** (alt wide **1480px**), **10px** gutter, **20px** v-gutter, side padding clamped to a **20px** minimum. Everything snaps to this grid; nothing floats arbitrarily.

6. **Motion as choreography.** Motion is structural, not ornamental: nav transparent→solid crossfade on scroll, staggered fade + `translateY` reveals (transform/opacity only), a **scroll-pinned numbered services list**, and horizontal scroll-snap testimonials. Micro-interactions **150–300ms**, reveals **400–800ms**. `prefers-reduced-motion` is honored (poster instead of video, no pinning, simple fades).

7. **Utilitarian iconography.** A precise arrow vocabulary — **↗** external/forward, **↳** drill-in/learn-more, **↖** CTA prefix, **→** big CTA — plus a numbered index motif **`/0.1`, `/0.2`** and small geometric earmark glyphs. Wayfinding is glyphs, not chrome.

8. **Mono labels for technical voice.** Eyebrows, client names, captions, and the numbered index sit in **mono, UPPERCASE, 0.05em letter-spacing**. The monospace voice telegraphs "engineered" and anchors the brand's IT-services credibility.

---

## 4. The feel

Engineered, editorial, and high-contrast — a near-black-on-white canvas with drafted-sharp corners and hairline borders, punctuated by full-bleed dark media that lets the work breathe. A single pine-green accent and a monospace technical voice give it restraint and credibility, while choreographed scroll motion makes the page feel precise and alive rather than decorated. It should read like infrastructure: confident, exact, and quietly powerful.

---

## 5. Index

The complete spec is split across eight files. Read in order for a first build; jump directly when implementing a specific layer.

| # | File | What it covers |
|---|---|---|
| 00 | **README.md** (this file) | Index + overview: what the system is, brand framing, design principles, the feel, legal note. |
| 01 | [`01-foundations-color.md`](./01-foundations-color.md) | Full color system: ink scale (`#1e2124`/`#636363`/`#767676`), surfaces (`#f3f3f3`/`#f9f9f9`/`#efefef`), pine-green accent `#2b5945` + tints, dark `#202426`, blue `#4e8af7`, off-white `#efefef`, error `#ff4136`, hover `rgba(30,33,36,0.33)`. WCAG contrast tables + `@theme` token block. |
| 02 | [`02-foundations-typography.md`](./02-foundations-typography.md) | Root sizing (**18px root, 1rem = 18px**), type scale and roles (Hero H1 80px → caption 10px), reference fonts (Alliance No.1/No.2, Apercu Mono, Rosart) and free substitutes (Geist / Space Grotesk / Geist Mono), `clamp()` fluid rules. |
| 03 | [`03-foundations-layout-grid-spacing.md`](./03-foundations-layout-grid-spacing.md) | 12-column grid `repeat(12, minmax(10px, 1fr))`, 1440px/1480px max widths, gutters, spacing scale (3/10/20/40/60/80/120), nav height 86px, breakpoints, vertical rhythm. |
| 04 | [`04-components.md`](./04-components.md) | Component specs: announcement bar, two-mode nav, mega menu, buttons (primary/inverse/icon), split CTA, dog-ear testimonial cards, story cards, footer + pill social buttons — anatomy, states, a11y. |
| 05 | [`05-motion-animation.md`](./05-motion-animation.md) | Motion choreography: nav scroll transition, hero video, scroll reveals, sticky services list, horizontal testimonials, hover timings, reduced-motion fallbacks, Next.js/React implementation strategy. |
| 06 | [`06-iconography-and-motifs.md`](./06-iconography-and-motifs.md) | Arrow language (↗ ↳ ↖ →), numbered index `/0.x`, earmark glyphs (recreate-as-SVG), dog-ear corner, sharp corners + pill exception, 0.8px borders, mono UPPERCASE labels, original Jicate logo lockup. |
| 07 | [`07-homepage-content-architecture.md`](./07-homepage-content-architecture.md) | Homepage blueprint, top→bottom: all nine sections (announcement → hero → featured → services scrolly → manifesto → testimonials → split CTA → footer), nav/footer IA, and **original** Jicate sample microcopy. |
| 08 | [`08-tailwind-v4-tokens.md`](./08-tailwind-v4-tokens.md) | The code bridge: ready-to-paste Tailwind v4 `globals.css` (`:root` + `@theme inline`), next/font wiring (Geist + Geist Mono + Space Grotesk display), utility cheat-sheet, usage examples. |

> All eight specs plus this README exist on disk. This README is the stable contract for what each file owns; keep filenames and topics in sync if files are renamed.

---

## 6. Stack

| Layer | Choice |
|---|---|
| Framework | **Next.js 16.2.7** (App Router) — *note: this project pins a non-standard Next; read `node_modules/next/dist/docs/` before writing code, conventions may differ from training data.* |
| UI | **React 19.2.4** |
| Styling | **Tailwind CSS v4** — CSS-first `@theme inline`, **no `tailwind.config.js`** |
| Language | **TypeScript** |
| Fonts | **next/font** — Geist + Geist Mono already wired in `src/app/layout.tsx` via `--font-geist-sans` / `--font-geist-mono`. Add Space Grotesk for display. |

> The framework/library versions above track the project's `package.json` (verify there before relying on them) — they are *not* measured design tokens and are maintained in one place.

---

## 7. Legal / IP note

This is a **design-language study**, not a content clone. We replicate Palantir's *structural and visual patterns* (grid, type scale, color system, component geometry, motion) measured from their public homepage. We do **not** reproduce their marketing copy, testimonial quotes, or product names — verbatim or via light find-replace. All copy on the Jicate IT Service homepage is **original** and written for the **Jicate IT Service brand**. References to the reference site describe generic, structural design patterns only.
