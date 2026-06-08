# 04 — Component Specs

**Project:** Jicate IT Service homepage clone
**Design language source:** Palantir.com homepage (measured live). We replicate the *design language* exactly — layout, grid, type scale, color, components, motion, motifs — with **original Jicate content**. Homepage only, full motion fidelity.

> **IP / legal rule:** Use only original Jicate IT Service copy. Never reproduce source marketing copy, testimonial quotes, or product names; never light find-replace their sentences. The labels below ("Get Started", section eyebrows, etc.) are generic structural placeholders — replace with original copy at build time.

---

## 0. Conventions used in this document

### 0.1 Root & rem math

- **Root font-size: 18px**, so **1rem = 18px**. Every `rem` below resolves on an 18px root.
- Quick reference: `0.5556rem = 10px`, `0.8889rem = 16px`, `1rem = 18px`, `1.1111rem = 20px`, `1.8889rem = 34px`, `3.3333rem = 60px`, `80rem = 1440px`.

### 0.2 Canonical token table (do not invent values)

These are the **only** colors, sizes, and dimensions permitted. They mirror the design-system spec and should be wired into `globals.css` `@theme inline`.

| Token | Value | Role |
|---|---|---|
| `--color-ink` | `#1e2124` (rgb 30,33,36) | Primary text |
| `--color-ink-medium` | `#636363` | Secondary text, grey statement headlines |
| `--color-ink-light` | `#767676` | Tertiary text, dimmed links |
| `--color-canvas` | `#ffffff` | Page background |
| `--color-surface-medium` | `#f3f3f3` | Cards / surfaces |
| `--color-surface-light` | `#f9f9f9` | Solid nav bar, light surfaces |
| `--color-band` | `#efefef` | Light section bands, light split-CTA |
| `--color-accent` | `#2b5945` | Brand pine green (single restrained accent) |
| `--color-accent-10` | `rgba(43,89,69,0.10)` | Accent fill / hover wash |
| `--color-accent-5` | `rgba(43,89,69,0.05)` | Faint accent wash |
| `--color-accent-5-opaque` | `#f4f7f6` | Opaque equivalent of accent 5% |
| `--color-near-black` | `#202426` | Announcement bar, dark CTA, dark footer, inverse btn |
| `--color-blue` | `#4e8af7` | Dark/media-context accent + hero glow (dark contexts ONLY) |
| `--color-offwhite` | `#efefef` | Hero headline text + text on dark blocks |
| `--color-error` | `#ff4136` | Error / destructive |
| `--color-hover` | `rgba(30,33,36,0.33)` | Hover state (derived from ink at hover-opacity = `0.33`) |

| Size token | Value | Notes |
|---|---|---|
| `--max-width` | `1440px` (80rem) | Content max; alt wide `1480px` |
| `--gutter` | `10px` (0.5556rem) | Grid column gap |
| `--v-gutter` / h-spacing | `20px` (1.1111rem) | |
| `--nav-height` | `86px` | |
| `--section-space` | `60px` (3.3333rem) | Section vertical rhythm |
| Spacing scale | `3 / 10 / 20 / 20 / 40` px (tiny/xs/s/m/l) | + extend `xl 60 / 2xl 80 / 3xl 120` |
| Grid | `repeat(12, minmax(10px, 1fr))` | 12 columns |
| Border | `0.8px solid` | Thin borders everywhere |
| Radius | `0` everywhere **except footer social pills** | |

### 0.3 Type roles

| Role | Size / line-height | Weight | Font | Notes |
|---|---|---|---|---|
| Hero H1 | 80px / 78px | 400 | display (Space Grotesk) | letter-spacing −3.4px (≈−0.0425em), color `#efefef`, transform none |
| Big section H2 | ~50px | 400 | display | |
| Feature H3 | 34px / 1–1.1765 | 400 | display | token `--headline = 1.8889rem`; 46px variant exists |
| Statement headline | ~46px | 400 | display | color ink-medium `#636363` |
| Section eyebrow | ~20px | 500 | grotesque/mono | |
| Body large | 20px (1.1111rem) / 1.3 | 400 | grotesque | |
| Body | 18px (1rem) / 1.389 (25px) | 400 | grotesque (Geist) | base |
| Body small | 16px (0.8889rem) / 1.4286 | 400 | grotesque | |
| Caption / micro-label | 10px (0.5556rem) / 1.6 | 500 | mono (Geist Mono) | letter-spacing 0.05em, UPPERCASE |

### 0.4 Free-font substitution (commercial → free)

- Body grotesque "Alliance No.1" → **Geist** (already wired in `layout.tsx`).
- Display / peaked-apex "Alliance No.2" → **Space Grotesk** (closest free match to the peaked-apex 'A').
- Mono "Apercu Mono Pro" → **Geist Mono** (already wired).
- Serif accent "Rosart" → **Fraunces** or **Newsreader** (optional editorial accent only).

### 0.5 Arrow glyph language

| Glyph | Meaning | Used on |
|---|---|---|
| ↗ | external / forward | mega-menu featured links, external links |
| ↳ | drill-in / learn-more | featured story card, mega-menu sub-links |
| ↖ | CTA prefix | primary "Get Started" button |
| → | big CTA | split-CTA blocks, advance |

### 0.6 Global a11y baselines (apply to every component)

- **Visible focus ring** on all interactive elements: `2px solid var(--color-accent)` with `2px` offset (never rely on the hover opacity change alone). On dark backgrounds use `var(--color-blue)` or `var(--color-offwhite)` for the ring so it remains visible.
- **Minimum touch target 44×44px.** Many visual elements are smaller (10px captions, thin-border icon boxes) — pad the hit area to 44px even when the visual box is smaller.
- **Icon-only buttons require `aria-label`** (search, hamburger, close ×, social pills).
- **Keyboard:** everything operable without a pointer; logical tab order; `Esc` closes overlays; arrow-key nav inside the mega-menu and horizontal testimonial scroller.
- **Motion:** honor `prefers-reduced-motion` (see §13). Color is never the sole state signal.
- **Contrast:** ink `#1e2124` on canvas `#ffffff` and off-white `#efefef` on near-black `#202426` both pass AA. The `0.33` hover opacity is decorative only — do not use it as the resting state of body text or essential links.

---

## 1. Announcement bar

Full-width strip that sits **above** the nav.

### Anatomy
`[ centered message · inline underlined link ] ......................... [ × close ]`

### Tokens
| Property | Value |
|---|---|
| Background | `--color-near-black` `#202426` |
| Text color | `--color-offwhite` `#efefef` |
| Text size | body small 16px (0.8889rem) or body 18px |
| Inline link | underlined, same color, hover → opacity 0.33 |
| Height | content + vertical padding `10px` (xs) top/bottom |
| Horizontal padding | `20px` (s) via `--h-contain` |
| Close (×) | square icon box, `0.8px` border or borderless glyph, radius 0 |

### States
| State | Treatment |
|---|---|
| Default | dark bar, centered text |
| Link hover | underline retained, color → `rgba(30,33,36,0.33)` equivalent on dark → use `rgba(239,239,239,0.33)` for visibility on dark |
| Close hover | opacity 0.33 on glyph |
| Focus | accent/blue focus ring on link and × |
| Dismissed | bar removed; persist via `localStorage`/cookie so it stays closed on revisit; nav reflows up by the bar's height |

### Responsive
- Mobile (≤640): text may wrap to 2 lines; keep × pinned top-right with 44px hit area; reduce font to 16px.
- Single line centered from tablet up.

### a11y
- `role="region"` + `aria-label="Announcement"`.
- Close button: `aria-label="Dismiss announcement"`, 44px touch target, returns focus to a sensible element (e.g. nav) after dismiss.
- Not a focus trap; fully keyboard-dismissible.

---

## 2. Navigation bar (86px)

Two visual modes driven by scroll position.

### Anatomy
`[ logo lockup ] .................... [ nav links? ] [ search box ] [ Get Started ] [ hamburger box ]`

- **Logo lockup:** wordmark "Jicate" + small **circular "sphere/eye" mark** at far left.
- **Right cluster:** search icon box + primary "Get Started" button (white/ink) + hamburger icon box. (Inline nav links optional; primary nav lives in the mega-menu.)

### Modes / tokens
| Property | Transparent-over-hero | Solid-on-scroll |
|---|---|---|
| Height | 86px | 86px |
| Background | transparent (over dark hero video) | `--color-surface-light` `#f9f9f9` (subtle) |
| Wordmark + text | light / `--color-offwhite` `#efefef` | dark `--color-ink` `#1e2124` |
| Icon box borders | `0.8px` light/translucent | `0.8px solid #1e2124` |
| "Get Started" btn | white bg / ink text (stands out on dark) | white bg / ink text / `0.8px` ink border |
| Horizontal padding | `--h-contain` (min 20px sides, centered on 1440px) | same |
| Radius | 0 | 0 |

### Transition (motion)
- On scroll past hero threshold: **crossfade** background (transparent → `#f9f9f9`) and **color** (off-white text → ink text) together. Duration 150–300ms. See §13.
- Use `transform`/`opacity` and `background-color`/`color` transitions only; do not animate layout.

### States
| State | Treatment |
|---|---|
| Default | per mode above |
| Link / wordmark hover | opacity 0.33 (`rgba(30,33,36,0.33)` solid mode; `rgba(239,239,239,0.33)` transparent mode) |
| Focus | visible ring (accent in solid mode, blue/off-white in transparent mode) |
| Active (mega-menu open) | hamburger box shows active fill / × glyph |
| Sticky | nav is `position: sticky`/`fixed`; sits below announcement bar when present |

### Responsive
- Wide/desktop: full cluster.
- Tablet/mobile (≤1024): collapse to logo + Get Started (optional) + hamburger; search may move inside the mega-menu.
- Keep 86px height; ensure all icon boxes are ≥44px touch targets.

### a11y
- `<header>` + `<nav aria-label="Primary">`.
- Logo links to home with accessible name "Jicate IT Service — Home".
- In transparent mode over video, guarantee text/icon contrast against the dark overlay (off-white on `#202426`-level darkness passes); never rely on the video frame.
- Each icon box has `aria-label` (see §4).

---

## 3. Mega-menu overlay

Full-screen overlay opened by the hamburger box.

### Anatomy
- Full-viewport overlay panel (light canvas `#ffffff` or `#f9f9f9`).
- **Link groups** (generic structural labels — write original Jicate copy): Services / Platforms, Offerings, Case Studies / Impact, Documentation, Careers, Newsroom, About.
- **Featured cards** using `↳` (drill-in) and `↗` (external) arrow links.
- Close affordance: hamburger box toggles to × (top-right), and `Esc` closes.

### Tokens
| Property | Value |
|---|---|
| Overlay bg | `--color-canvas` `#ffffff` (or `#f9f9f9`) |
| Group heading | section eyebrow ~20px / weight 500, ink |
| Group sub-links | body 18px, ink; dimmed variants `--color-ink-light` `#767676` |
| Featured card | image + 34px H3 + caption + `↳`/`↗` link |
| Column grid | aligns to 12-col grid, `--gutter` 10px |
| Padding | `--h-contain`, top offset = nav height 86px |
| Radius / borders | 0 / `0.8px` dividers where used |

### States
| State | Treatment |
|---|---|
| Closed | `display:none` / unmounted; hamburger shows ☰ |
| Open | overlay visible; hamburger shows ×; body scroll locked |
| Link hover | opacity 0.33; arrow nudges `translateX(+2–4px)` |
| Focus | visible accent ring; focus trapped within overlay |
| Reduced motion | open as instant/simple fade, no large transform |

### Motion
- Open: fade + subtle `translateY` of groups, staggered (transform/opacity only), 400–800ms reveal band; hover arrow nudge 150–300ms.

### Responsive
- Desktop: multi-column directory + featured cards in a side rail.
- Mobile: single-column, vertically scrollable accordion-style groups; full-height.

### a11y
- `role="dialog"` + `aria-modal="true"` + `aria-label="Site menu"`.
- **Focus trap** while open; on close return focus to the hamburger toggle.
- Hamburger toggle: `aria-expanded`, `aria-controls` pointing at the overlay.
- `Esc` closes; arrow keys move between group links; all targets ≥44px.

---

## 4. Icon buttons (search, hamburger, close)

Square utilitarian boxes.

### Tokens
| Property | Value |
|---|---|
| Shape | square box, radius **0** |
| Border | `0.8px solid #1e2124` (solid mode) / `0.8px` translucent light (transparent mode) |
| Visual size | ~nav-scale; pad to **44×44px** touch target minimum |
| Glyph | search / ☰ hamburger / × close |
| Background | transparent (inherits nav mode) |

### States
| State | Treatment |
|---|---|
| Default | thin-border box |
| Hover | inversion or opacity 0.33 on glyph; optional `--color-accent-5` wash |
| Focus | visible ring (accent / blue per context) |
| Active | filled / pressed; hamburger → × when menu open |
| Disabled | opacity lowered, `cursor: not-allowed`, `aria-disabled` (rare) |

### a11y
- `aria-label`: "Search", "Open menu" / "Close menu" (toggle text matches state), "Dismiss".
- Real `<button>` elements; Enter/Space activate; 44px minimum hit area even though border box may be smaller.

---

## 5. Primary button — "Get Started"

The signature CTA. Sharp, inverted-on-hover.

### Anatomy
`[ ↖  Get Started ]` — optional `↖` arrow glyph prefix + label.

### Tokens
| Property | Value |
|---|---|
| Background | `--color-canvas` `#ffffff` |
| Text | `--color-ink` `#1e2124` |
| Border | `0.8px solid #1e2124` |
| Radius | **0** (sharp) |
| Padding | ~`10px` (xs) — pad to 44px min height for touch |
| Font size | 16px (0.8889rem), weight 400 |
| Transform | none (no uppercase) |
| Arrow | `↖` prefix glyph |

### States
| State | Treatment |
|---|---|
| Default | white bg, ink text, thin ink border |
| Hover | **inversion** — bg → `#1e2124`, text → `#ffffff` (alt: opacity 0.33). 150–300ms |
| Focus | visible accent ring `2px` + offset (in addition to/instead of inversion) |
| Active | inverted, slight press; arrow may nudge |
| Disabled | reduce opacity, `cursor:not-allowed`, `aria-disabled="true"`, no inversion |

### Responsive
- Persists in nav across breakpoints (may be the only visible CTA on mobile). Keep ≥44px tall.

### a11y
- Real `<button>`/`<a role="button">` with descriptive text; `↖` is decorative (`aria-hidden`).
- Focus ring must be visible even mid-inversion; do not signal focus by color alone.

---

## 6. Inverse button

Dark counterpart used on light sections.

### Tokens
| Property | Value |
|---|---|
| Background | `--color-near-black` `#202426` |
| Text | `--color-offwhite` `#efefef` |
| Border | none (or `0.8px` matching) |
| Radius | 0 |
| Padding / font | as primary button (~10px, 16px/400) |

### States
| State | Treatment |
|---|---|
| Default | dark bg, off-white text |
| Hover | opacity 0.33 / lighten; arrow nudge if present |
| Focus | visible ring using `--color-blue` or `--color-offwhite` (for contrast on dark) |
| Active | pressed |
| Disabled | reduced opacity, `aria-disabled` |

### a11y
- Off-white on near-black passes AA. Focus ring must contrast against the dark fill (use blue/off-white, not accent green).

---

## 7. Big split CTA block

Two-up full-width row ending the content area.

### Anatomy
`[ LIGHT half — large label …………… → ]  [ BLACK half — large label …………… → ]`
Each half is a large grotesque label with a right-aligned `→` arrow; both clickable.

### Tokens
| Property | Light half | Black half |
|---|---|---|
| Background | `--color-band` `#efefef` | `--color-near-black` `#202426` |
| Text | `--color-ink` `#1e2124` | `--color-offwhite` `#efefef` |
| Label | big grotesque (~46–50px, display, weight 400) | same |
| Arrow | `→` right-aligned, ink | `→` right-aligned, off-white |
| Radius | 0 (sharp) | 0 |
| Border | none / `0.8px` divider between halves | |
| Padding | section-scale, `--h-contain` aligned | |

### States
| State | Treatment |
|---|---|
| Default | two solid halves |
| Hover | `→` nudges `translateX(+4–8px)`; subtle bg shift (light → accent-5 wash `#f4f7f6`; black → slight lighten); 150–300ms |
| Focus | visible ring per half context (accent on light, blue/off-white on black) |
| Active | pressed / deeper shift |

### Responsive
- Desktop: side-by-side halves (each 6 cols).
- Mobile: stack vertically full-width; each half full-bleed, arrow stays right-aligned.

### a11y
- Each half is a single large link/button with an accessible name = its label; `→` decorative `aria-hidden`.
- Entire half is the click target (large, well over 44px). Focus order: light then black.

---

## 8. Testimonial card

Surface card with a folded dog-ear corner, arranged in a horizontal-scroll row.

### Anatomy
```
┌───────────────────────────╮ ← folded / dog-ear top-right corner
│  CLIENT NAME (mono caps)    │
│                             │
│  "Original Jicate quote     │
│   in body grotesque…"       │
└─────────────────────────────┘
```

### Tokens
| Property | Value |
|---|---|
| Background | `--color-band` `#efefef` or `--color-surface-medium` `#f3f3f3` |
| Dog-ear | folded top-right corner; rendered via clip-path / pseudo-element triangle; sharp |
| Client label | **mono UPPERCASE**, 10px (0.5556rem) caption or larger, letter-spacing `0.05em`, color ink/ink-medium |
| Quote | body grotesque 18px (1rem) / line 1.389, color ink `#1e2124` |
| Radius | 0 (corners sharp; dog-ear is a fold, not a radius) |
| Padding | `20px` (s) / `40px` (l) interior |
| Border | none or `0.8px` |

### Layout / motion
- **Horizontal-scroll row** with **scroll-snap** (`scroll-snap-type: x mandatory`, items `scroll-snap-align: start`); drag + wheel + keyboard.
- Hover: subtle lift via opacity/shadow-free shift (keep flat aesthetic); arrow/affordance nudge if present.

### States
| State | Treatment |
|---|---|
| Default | surface card, dog-ear visible |
| Hover | minor emphasis (opacity/translate); no rounded change |
| Focus (card/scroller) | visible ring on the scroll container and on any in-card link |
| Active drag | snap to nearest card |

### Responsive
- Desktop: 2–3 cards visible, horizontal scroll for the rest.
- Mobile: 1 card per viewport width, swipe with snap; show a peek of the next card.

### a11y
- Client name conveyed as text (not just visual); quote in `<blockquote>` with `<cite>` for attribution.
- Scroller: keyboard-scrollable (arrow keys / Tab to each card), `aria-label="Client testimonials"`, `role="group"`; provide visible prev/next controls (≥44px) as a non-drag alternative.
- Do not trap scroll; respect reduced motion (no auto-advance).

---

## 9. Featured story card

Editorial card linking to a story/case study.

### Anatomy
`[ image ]` → `[ 34px H3 headline ]` → `[ short caption ]` → `[ ↳ learn more ]`

### Tokens
| Property | Value |
|---|---|
| Image | full-width of card, sharp corners (radius 0) |
| Headline | Feature H3 **34px** (`--headline 1.8889rem`) / line 1–1.1765, weight 400, display, ink |
| Caption | body small 16px (0.8889rem) / 1.4286, color ink-medium `#636363` |
| Link | `↳` learn-more, body, ink; hover opacity 0.33 + arrow nudge |
| Spacing | `20px` (s) vertical rhythm between elements |
| Radius / border | 0 / none |

### States
| State | Treatment |
|---|---|
| Default | static card |
| Hover | `↳` nudges `translateX`; headline/link opacity shift 0.33; optional image subtle scale (transform only) |
| Focus | visible accent ring on the card link |
| Reveal | fade + `translateY` on scroll into view, staggered |

### Responsive
- Desktop: grid of cards (e.g. 3–4 across, aligned to 12-col).
- Mobile: single column, full-width image.

### a11y
- Whole card is one link (image `alt` original + headline). If image + text are separate links, avoid duplicate adjacent links — prefer a single wrapping link or a shared accessible name.
- `↳` decorative `aria-hidden`; link text is meaningful ("Read the case study", not "click here").

---

## 10. Footer — mega-directory + pill social buttons

Dense directory; the **only** place rounded corners appear (social pills).

### Anatomy
```
[ outlined PILL social buttons: ◯ YOUTUBE  ◯ X  ◯ LINKEDIN  ◯ GITHUB  ◯ STORE ]   ← rounded, the only ones
[ Col: Industries ] [ Col: Case Studies ] [ Col: Solutions ] [ Col: Company / Legal ] …
```
May sit on a dark band (`#202426`) in parts.

### Tokens
| Property | Value |
|---|---|
| Background | `--color-canvas` `#ffffff` / `--color-band` `#efefef`, with dark `#202426` sub-bands |
| Social pills | **outlined, PILL-shaped (rounded — only rounded elements)**, `0.8px` border, UPPERCASE label, mono or grotesque |
| Pill text | UPPERCASE, letter-spacing `0.05em`, ink (or off-white on dark band) |
| Column heading | section eyebrow ~20px / 500, ink |
| Column links | body 18px / body small 16px; **dimmed** links use `--color-ink-light` `#767676` |
| Grid | 12-col, `--gutter` 10px; columns grouped by category |
| Section padding | `--section-space` 60px top/bottom, `--h-contain` |
| Radius | links/headings 0; **pills = full pill radius** |

### States
| State | Treatment |
|---|---|
| Default | columns + outlined pills |
| Link hover | opacity 0.33 (dimmed links brighten toward ink) |
| Pill hover | inversion (fill with ink/off-white) or accent-5 wash; arrow/label nudge optional |
| Focus | visible ring on every link and pill |

### Responsive
- Desktop: multi-column directory, pills in a left rail / top row.
- Tablet: 2–3 columns.
- Mobile: stacked single column (optionally collapsible groups); pills wrap, each ≥44px tall.

### a11y
- `<footer>` with `role="contentinfo"`; each column group `<nav aria-label="…">` or headed list.
- Social pills are icon+text links with `aria-label` (e.g. "Jicate on LinkedIn"); ≥44px touch target; pill rounding is the only radius exception — keep border `0.8px`.
- Dimmed `#767676` links: verify AA contrast on their background; if borderline, reserve dimming for non-essential/secondary links only.

---

## 11. Numbered index + earmark markers

Structural motifs, not standalone controls.

### Anatomy / tokens
| Marker | Form | Tokens |
|---|---|---|
| Numbered index | `/0.1`, `/0.2`, … | **mono** (Geist Mono), caption/micro scale, letter-spacing 0.05em, color ink or ink-medium; advances in the sticky services list |
| Earmark glyphs | small geometric marks — circle `O`, house/triangle `A` | thin `0.8px` stroke or filled, ink; one per item in the services list |

### Behavior / motion
- In the **services / platform section** (sticky-pinned, scroll-driven numbered list), the index `/0.x` **advances** as each item activates; earmark glyph shown per item. Transform/opacity only.
- Markers are decorative typographic accents — pair with a real heading/label.

### a11y
- Index and earmark glyphs are **decorative**: `aria-hidden="true"`. The list must convey order via real semantics (`<ol>` or headings), not the `/0.x` glyph alone.
- Do not make the marker the only focusable/clickable affordance — attach interaction to the item's heading/link.

---

## 12. Statement headline (grey intro)

Large grey editorial intro used above services/platform sections.

### Tokens
| Property | Value |
|---|---|
| Size | ~46px (display variant) |
| Weight | 400 |
| Color | `--color-ink-medium` `#636363` (intentionally grey, lower emphasis) |
| Font | display (Space Grotesk) |
| Transform | none |

### a11y
- It is a real heading (`<h2>`/`<h3>`); grey `#636363` on white still passes AA at this large size — keep it as a heading, not body, so screen readers announce structure.

---

## 13. Motion reference (applies across components)

| Pattern | Spec |
|---|---|
| Nav transparent → solid | background + text color crossfade on scroll past hero; 150–300ms |
| Hero | autoplay/muted/looping full-bleed video + dark overlay; headline settle-in; blue `#4e8af7` glow (dark context only) |
| Scroll reveals | fade + `translateY`, staggered; **transform/opacity only**; 400–800ms |
| Services list | scroll-driven / sticky-pinned; `/0.x` index advances; earmark per item |
| Testimonials | horizontal scroll / drag with scroll-snap |
| Hover micro | opacity 0.33, arrow nudge (`translateX`), color shift; 150–300ms |

### `prefers-reduced-motion`
- Disable video autoplay → show **poster image** instead.
- Remove parallax and scroll-pinning; convert reveals to simple instant or short fades.
- No auto-advancing testimonials; arrows still nudge minimally or not at all.

---

## 14. Cross-cutting motif checklist

- [ ] Sharp corners (radius **0**) everywhere **except footer social pills**.
- [ ] Thin **0.8px** borders.
- [ ] Arrow glyphs used per §0.5 (↗ external, ↳ drill-in, ↖ CTA, → big CTA); arrows are `aria-hidden`.
- [ ] Mono UPPERCASE labels with `0.05em` letter-spacing (client names, captions, social pills, index).
- [ ] Numbered index `/0.x` in mono.
- [ ] Single restrained accent `#2b5945`; blue `#4e8af7` ONLY in dark/media contexts.
- [ ] Light canvas with full-bleed dark media sections (hero, dark CTA, dark footer bands).
- [ ] Every icon-only control has an `aria-label`; every interactive target ≥44px; visible focus ring on all.
- [ ] All copy is original Jicate IT Service content — no source copy reproduced or find-replaced.
