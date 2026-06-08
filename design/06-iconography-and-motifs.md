# 06 — Iconography & Motifs

**Jicate IT Service — Design System · Homepage clone · Palantir design language · Original Jicate brand**

This file owns the *small marks*: the arrow glyph vocabulary, the geometric "earmark" glyphs, the numbered index motif, mono UPPERCASE labels, the folded dog-ear card corner, the sharp-corner law (and its single exception), hairline borders, the icon-set recommendation, and the **original** Jicate logo lockup.

> **Canonical-token rule:** every color, size, weight, duration, and spacing value below is taken verbatim from the measured token set. Never invent a value. If you need one that isn't documented, flag it — don't guess.
>
> **Legal / IP rule:** we replicate the *design language* of the reference (glyph semantics, geometry, motion), never its copy, product names, or its actual logo mark. The Jicate logo below is an **original** design.

---

## 1. Iconography philosophy

Wayfinding here is **glyphs, not chrome**. Icons are utilitarian, monochrome, and hairline-weight — they read as drafted engineering marks, not decoration. Three rules govern everything in this file:

1. **Sharp by default.** `border-radius: 0` on every box, frame, and icon container. The *only* rounded elements in the whole system are the footer social pills (Section 8).
2. **Hairline weight.** Borders and icon strokes are thin — **0.8px** borders; custom SVG icons drawn on a **24px** viewBox with a thin stroke.
3. **Monochrome + restraint.** Icons inherit ink `#1e2124` (or `#636363` / `#767676` when dimmed). The accent **pine green `#2b5945`** is used sparingly; blue `#4e8af7` only in dark/media contexts. Off-white `#efefef` is the on-dark icon/text color.

### Color tokens used by icons & marks

| Role | Token | Where |
|---|---|---|
| Ink / primary glyph | `#1e2124` | default icon & arrow color on light |
| Ink medium | `#636363` | dimmed / secondary glyph |
| Ink light | `#767676` | most-dimmed footer links/glyphs |
| On-dark glyph | `#efefef` (off-white) | icons over `#202426` / hero video |
| Accent (pine green) | `#2b5945` | rare emphasis (hover, active index) |
| Accent 10% | `rgba(43,89,69,0.10)` | subtle fills behind a mark |
| Accent 5% | `rgba(43,89,69,0.05)` | faintest fill |
| Accent 5% opaque | `#f4f7f6` | opaque equivalent of accent-5% |
| Blue (dark-context only) | `#4e8af7` | on-dark accent / hero glow only |
| Hover state | `rgba(30,33,36,0.33)` | ink at hover opacity **0.33** |

---

## 2. Arrow glyph language

Four arrows form a precise semantic vocabulary. Each glyph has **one meaning** — do not mix them. Prefer the Unicode glyph inline in text; use the custom SVG (Section 7) when you need pixel control, a hover-nudge transform target, or crisp rendering at large sizes (the big CTA).

| Glyph | Unicode | Name | Meaning | Placement |
|---|---|---|---|---|
| ↗ | `U+2197` (`&#8599;`) | North-east arrow | **External / forward** — link leaves the page, opens a new context, or "see more out there" | Trailing the label (right) |
| ↳ | `U+21B3` (`&#8627;`) | Down-then-right arrow | **Drill-in / learn-more** — go deeper into this same topic (story cards, featured cards) | Leading the label (left) |
| ↖ | `U+2196` (`&#8598;`) | North-west arrow | **CTA prefix** — marks the primary "Get Started" action | Leading the label (left), prefix |
| → | `U+2192` (`&#8594;`) | Rightwards arrow | **Big CTA** — the large split-CTA blocks; bold directional "go" | Right-aligned, far edge of the block |

### Usage rules

- **↗ external/forward** — sits *after* the label with a small gap: `Documentation ↗`. Use for outbound links, newsroom items, anything that forwards the user onward.
- **↳ drill-in** — sits *before* the label: `↳ Learn more`. Use on featured story cards (image + 34px headline + caption + `↳` link) and mega-menu drill-in items.
- **↖ CTA** — prefixes the primary button label: `↖ Get Started`. This is the only place ↖ appears. Keep it tied to the primary button identity.
- **→ big CTA** — only inside the big split-CTA row (two-up: one light `#efefef` ink-text block + one black `#202426` white-text block). The arrow is **right-aligned** to the far edge of each block, scaled up to match the large grotesque label.
- One arrow per link. Never stack arrows. Never use ↗ where ↳ is meant (external vs. drill-in is a real distinction).
- Arrows inherit the label color and follow the dim states (`#636363` / `#767676`) and on-dark color (`#efefef`).

### Hover nudge

Arrows animate on hover/focus of their parent link via `translateX` only (transform/opacity — never layout). The label may also shift to ink-at-`0.33` (`rgba(30,33,36,0.33)`).

| Arrow | Nudge direction | Suggested transform | Timing |
|---|---|---|---|
| ↗ external | up-right | `translate(2px, -2px)` | 150–300ms micro |
| ↳ drill-in | right | `translateX(2px)` | 150–300ms micro |
| ↖ CTA | (button inverts; arrow holds) | inherits button invert / opacity 0.33 | 150–300ms |
| → big CTA | right | `translateX(4px)` (larger glyph, larger nudge) | 150–300ms |

```css
/* Pattern: arrow nudges on parent hover. Transform/opacity only. */
.link-arrow {
  display: inline-block;
  transition: transform 200ms ease, opacity 200ms ease;
  will-change: transform;
}
/* ↳ drill-in (leading) */
.link:hover .arrow-drillin { transform: translateX(2px); }
/* ↗ external (trailing) */
.link:hover .arrow-external { transform: translate(2px, -2px); }
/* → big CTA */
.cta-big:hover .arrow-big { transform: translateX(4px); }

@media (prefers-reduced-motion: reduce) {
  .link-arrow { transition: none; }
  .link:hover .arrow-drillin,
  .link:hover .arrow-external,
  .cta-big:hover .arrow-big { transform: none; }
}
```

---

## 3. Numbered index motif `/0.x`

A monospace running index that labels and advances through the scroll-pinned services/platform list.

- **Form:** `/0.1`, `/0.2`, `/0.3` … — a leading slash, then `0.` + the item number.
- **Font:** mono (Geist Mono in-project; fallback JetBrains Mono / IBM Plex Mono / Space Mono).
- **Case / tracking:** UPPERCASE convention, letter-spacing **0.05em** (matches caption/micro-label spec).
- **Suggested size:** caption / micro-label — **10px** (`0.5556rem`), line-height 1.6. Scale up to the eyebrow size **20px** when the index is a prominent section marker rather than a fine label.
- **Color:** ink `#1e2124`, or `#636363` when the index is dimmed/inactive. The **active** index in the scroll-pinned list may take accent pine green `#2b5945` to mark the current item.
- **Motion:** the index advances as the scroll-pinned services list pins and steps through items (see `05-motion-animation.md` / the motion spec). Transform/opacity only; honor `prefers-reduced-motion` (no pinning — index renders statically per item).

```html
<span class="index-marker">/0.1</span>
```

```css
.index-marker {
  font-family: var(--font-geist-mono), "JetBrains Mono", monospace;
  font-size: 0.5556rem;     /* 10px */
  line-height: 1.6;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #636363;           /* inactive */
}
.index-marker[data-active="true"] { color: #2b5945; } /* active item */
```

---

## 4. Mono UPPERCASE letter-spaced labels

The technical voice of the system. Used for section eyebrows, client names on testimonial cards, captions, and the numbered index.

| Property | Value |
|---|---|
| Font | mono (Geist Mono in-project; fallback JetBrains/IBM Plex/Space Mono) |
| Case | `text-transform: uppercase` |
| Letter-spacing | **0.05em** |
| Caption / micro-label size | **10px** (`0.5556rem`), line-height 1.6 |
| Eyebrow / label size | **20px** |
| Color | ink `#1e2124`; dim with `#636363` / `#767676`; on-dark `#efefef` |

```css
.mono-label {
  font-family: var(--font-geist-mono), "JetBrains Mono", monospace;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.mono-label--caption { font-size: 0.5556rem; line-height: 1.6; }   /* 10px */
.mono-label--eyebrow { font-size: 20px; }                          /* section eyebrow */
```

- Client names on testimonial cards: mono UPPERCASE, letter-spaced (per the testimonial card spec).
- Keep these short. Mono UPPERCASE is for labels, not body copy.

---

## 5. Geometric "earmark" glyphs (recreate as SVG)

Small geometric marks that punctuate the services/platform list — one earmark per item alongside its `/0.x` index. The reference vocabulary includes a **circle ("O")** and a **house/triangle ("A")**. Recreate these as **original custom SVG**, not as Palantir's actual marks.

### Drawing rules (apply to every earmark)

| Rule | Value |
|---|---|
| viewBox | `0 0 24 24` (**24px**) |
| Stroke | thin — `stroke-width: 1.5` (visually ~hairline at 24px); use `1` for an even finer line |
| Fill | `none` (outline marks); `currentColor` only for deliberately solid variants |
| Stroke color | `currentColor` → inherits ink `#1e2124` / dim `#636363` / on-dark `#efefef` / active accent `#2b5945` |
| Linecap / linejoin | `round` is acceptable, but `miter`/`square` better matches the engineered, sharp aesthetic |
| Corners | sharp — no rounded geometry (radius-0 law applies to drawn marks too) |

> Tip: set `stroke="currentColor" fill="none"` and color the glyph via the parent's `color`. This lets one SVG serve ink, dim, on-dark, and accent states with zero duplication.

### Earmark A — circle ("O")

A centered hairline ring. Reads as a node / endpoint / generic item marker.

```svg
<svg viewBox="0 0 24 24" width="24" height="24" fill="none"
     stroke="currentColor" stroke-width="1.5" aria-hidden="true" focusable="false">
  <circle cx="12" cy="12" r="7.5" />
</svg>
```

Variants:
- **Filled dot** (solid state): `<circle cx="12" cy="12" r="3.5" fill="currentColor" />` (no stroke).
- **Concentric / "eye"** (echoes the logo sphere mark, Section 9): add an inner `<circle cx="12" cy="12" r="2.5" fill="currentColor" />`.

### Earmark B — house / triangle ("A")

A peaked geometric mark: a triangle, optionally a house silhouette. The peaked apex visually rhymes with the display font's peaked-apex character.

```svg
<!-- Pure triangle (peaked apex) -->
<svg viewBox="0 0 24 24" width="24" height="24" fill="none"
     stroke="currentColor" stroke-width="1.5" stroke-linejoin="miter"
     aria-hidden="true" focusable="false">
  <path d="M12 4 L20 19 L4 19 Z" />
</svg>
```

```svg
<!-- House variant (triangle roof over a square body) -->
<svg viewBox="0 0 24 24" width="24" height="24" fill="none"
     stroke="currentColor" stroke-width="1.5" stroke-linejoin="miter"
     aria-hidden="true" focusable="false">
  <path d="M4 11 L12 4 L20 11" />   <!-- roof -->
  <path d="M6 11 V20 H18 V11" />     <!-- body -->
</svg>
```

### Sizing & placement in the list

- Render the earmark inline with the item, paired with its `/0.x` index. Box the icon at 24px; the visual mark sits inside the 24px viewBox with optical padding.
- Active item may switch `color` to accent `#2b5945` so both the earmark and its index light up together.
- All earmarks share one `currentColor`-driven recolor path — no per-state SVG copies.

---

## 6. Folded / dog-ear card corner (testimonial cards)

Testimonial cards use a **surface background** (`#efefef` or `#f3f3f3`) with a **folded / dog-ear top-right corner**. The client name is mono UPPERCASE letter-spaced; the quote is body grotesque. Cards sit in a **horizontal-scroll** row with scroll-snap. Build the fold one of two ways:

### Option A — `clip-path` notch (cleanest, single element)

Clips the top-right corner so the card silhouette itself is dog-eared. Note `clip-path` removes the corner pixels (transparent), so this works best when the card sits on the white canvas `#ffffff`.

```css
.testimonial-card {
  background: #efefef;                /* surface band; or #f3f3f3 */
  border: 0.8px solid #1e2124;        /* hairline ink border (optional) */
  border-radius: 0;                   /* sharp — radius-0 law */
  padding: 20px;                      /* spacing-s = 20px */
  /* 16px dog-ear cut from the top-right corner */
  clip-path: polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%);
}
```

### Option B — pseudo-element triangle (lets you shade the fold)

A two-triangle fold: the card keeps a square top-right, a small triangle "lifts" to reveal the fold underside. This reads more like a turned page and lets you tint the underside.

```css
.testimonial-card {
  position: relative;
  background: #efefef;          /* card surface */
  border-radius: 0;             /* sharp */
  padding: 20px;
  overflow: hidden;             /* clip the fold to the card box */
}

/* The "cut": a triangle of page-canvas color masking the top-right corner */
.testimonial-card::before {
  content: "";
  position: absolute;
  top: 0; right: 0;
  width: 16px; height: 16px;
  background: #ffffff;          /* page canvas shows through the cut */
  /* triangle covering the top-right corner */
  clip-path: polygon(0 0, 100% 0, 100% 100%);
}

/* The folded-down flap (underside), giving the dog-ear its turned-page shading */
.testimonial-card::after {
  content: "";
  position: absolute;
  top: 0; right: 0;
  width: 16px; height: 16px;
  background: #f3f3f3;          /* slightly darker surface = fold underside */
  clip-path: polygon(0 0, 0 100%, 100% 100%);
}
```

Guidance:
- Fold size: keep it small and consistent — **~16px** works against 20px padding. Scale proportionally if card padding changes; do not exceed the corner whitespace.
- Underside shading: use surface tokens only — card `#efefef`, underside `#f3f3f3` (or the inverse). Don't introduce new greys.
- Prefer **Option A** when the card is on the white canvas and you only need the silhouette. Use **Option B** when you want a visible turned-page underside.
- Keep all *other* corners square (radius 0). The dog-ear is a deliberate clipped notch, not a `border-radius`.

---

## 7. Custom SVG arrows (when Unicode isn't enough)

For the big CTA, large hero contexts, or precise `translateX` hover targets, draw arrows as 24px-viewBox SVGs so they render crisply and animate independently of text. Match the earmark drawing rules (24px viewBox, thin stroke, `currentColor`, sharp joins).

```svg
<!-- → big CTA arrow -->
<svg viewBox="0 0 24 24" width="24" height="24" fill="none"
     stroke="currentColor" stroke-width="1.5" stroke-linecap="square"
     stroke-linejoin="miter" class="arrow-big" aria-hidden="true" focusable="false">
  <path d="M4 12 H20" />
  <path d="M14 6 L20 12 L14 18" />
</svg>
```

```svg
<!-- ↗ external/forward -->
<svg viewBox="0 0 24 24" width="24" height="24" fill="none"
     stroke="currentColor" stroke-width="1.5" stroke-linecap="square"
     stroke-linejoin="miter" class="arrow-external" aria-hidden="true" focusable="false">
  <path d="M7 17 L17 7" />
  <path d="M9 7 H17 V15" />
</svg>
```

```svg
<!-- ↳ drill-in / learn-more -->
<svg viewBox="0 0 24 24" width="24" height="24" fill="none"
     stroke="currentColor" stroke-width="1.5" stroke-linecap="square"
     stroke-linejoin="miter" class="arrow-drillin" aria-hidden="true" focusable="false">
  <path d="M7 4 V13 H18" />
  <path d="M13 9 L18 13 L13 17" />
</svg>
```

```svg
<!-- ↖ CTA prefix -->
<svg viewBox="0 0 24 24" width="24" height="24" fill="none"
     stroke="currentColor" stroke-width="1.5" stroke-linecap="square"
     stroke-linejoin="miter" class="arrow-cta" aria-hidden="true" focusable="false">
  <path d="M17 17 L7 7" />
  <path d="M7 15 V7 H15" />
</svg>
```

Decorative icons get `aria-hidden="true"` + `focusable="false"`; the link text carries the accessible name. If an icon is the *only* content of a control, give the control an `aria-label`.

---

## 8. Geometry laws: sharp corners, borders, the pill exception

### The sharp-corner law

`border-radius: 0` on **everything** — buttons (primary/inverse/icon boxes), cards, the announcement bar, nav, mega-menu panels, the split CTA blocks, image frames, input/search boxes, earmark geometry. Sharp corners are the system's signature; treat any non-zero radius as a bug.

### The single exception — footer social pills

The footer's outlined social buttons (`YOUTUBE`, `X`, `LINKEDIN`, `GITHUB`, `STORE`, UPPERCASE) are the **only rounded elements in the entire system**. They are pill-shaped: a full radius on a short outlined button.

```css
/* The ONE rounded element. Everywhere else: radius 0. */
.social-pill {
  border: 0.8px solid #1e2124;
  border-radius: 999px;            /* full pill — exception */
  text-transform: uppercase;
  letter-spacing: 0.05em;          /* mono UPPERCASE label */
  /* mono font, hairline outline, no fill */
}
```

### Thin 0.8px borders

Borders throughout are hairline — **0.8px solid**, typically ink `#1e2124` (or a dim ink for secondary frames). This applies to the primary button, icon boxes (search, hamburger), card outlines, and the social pills.

```css
:root { --border-hair: 0.8px; }
.bordered { border: var(--border-hair) solid #1e2124; }
```

> Sub-pixel borders can disappear on low-DPR displays. Keep **0.8px** as the design token (it's the measured value); if a hairline drops out in QA, address it with rendering tricks (transform-scaled pseudo-borders) rather than changing the token.

---

## 9. Icon-set recommendation

A **two-track** icon strategy keeps the brand-defining marks custom while avoiding hand-drawing every utility glyph.

| Track | Use for | Source | Notes |
|---|---|---|---|
| **Custom SVG** | The four arrows (↗ ↳ ↖ →), the earmark glyphs (circle, triangle/house), the logo mark | Hand-authored SVG, 24px viewBox, thin stroke, `currentColor` | These carry brand semantics; never outsource them. Sections 5 & 7. |
| **Lucide** | Generic utility icons (search/magnifier, hamburger/menu, close ×, chevrons, external-link, social glyphs, etc.) | [Lucide](https://lucide.dev) | Open-source (ISC), thin-stroke, 24px viewBox — already matches our hairline aesthetic. Tree-shakeable React components. |

Why this split:
- **Lucide** is hairline, 24px, and stroke-based out of the box, so it sits cleanly inside our square icon boxes (search, hamburger) with the 0.8px border and radius 0. Set `strokeWidth={1.5}` and color via `currentColor` to match.
- **Custom SVG** owns anything brand-load-bearing: the arrow vocabulary's exact semantics, the earmarks, and the logo. These must be consistent and original.
- Normalize both tracks: **24px viewBox**, `stroke="currentColor"`, `fill="none"` (unless intentionally solid), thin stroke. One sizing/color contract across the whole icon system.

```tsx
// Utility icons via Lucide — match our hairline, currentColor, square-box aesthetic
import { Search, Menu, X } from "lucide-react";

<button className="icon-box" aria-label="Search">
  <Search size={24} strokeWidth={1.5} /> {/* inherits color: #1e2124 */}
</button>
```

```css
.icon-box {                      /* square icon button: search, hamburger */
  width: 44px; height: 44px;     /* generous tap target */
  display: grid; place-items: center;
  border: 0.8px solid #1e2124;
  border-radius: 0;              /* sharp */
  background: transparent;
  color: #1e2124;
}
.icon-box:hover { color: rgba(30,33,36,0.33); }  /* hover opacity 0.33 */
/* Over hero/dark contexts, the box flips to off-white */
.on-dark .icon-box { border-color: #efefef; color: #efefef; }
```

---

## 10. The Jicate IT Service logo (ORIGINAL — do NOT copy the reference mark)

We do **not** reproduce Palantir's wordmark or its sphere/eye mark. Below is an **original** Jicate lockup designed in the same minimal, engineered spirit (sharp geometry, hairline weight, mono/grotesque type).

### Lockup structure

A horizontal lockup: **mark + wordmark**, left-aligned, matching the reference's "small mark at left of the wordmark" pattern but with original geometry.

```
[ ◇J ]  Jicate IT Service
 mark      wordmark
```

### The mark — "the Linked Node"

An original, simple geometric mark that signals *IT / connection / infrastructure* without copying anyone:

- **Concept:** a single hairline **square rotated 45° (a diamond)** with a small **solid node dot** centered inside it — a "linked node" / packet-in-a-frame. It reads as a network node, a data packet, and a precise engineered token all at once. The sharp diamond honors the radius-0 law; the rotated square subtly echoes the peaked-apex `A` of the display font.
- **Geometry (24px viewBox):** outer diamond as a stroked square rotated 45°, hairline stroke; centered solid dot.
- **Optional motion-state variant:** the inner dot can pulse to accent pine green `#2b5945` on hover of the wordmark (opacity/scale only, 150–300ms) — a single restrained accent moment.

```svg
<!-- Jicate mark: hairline diamond frame + solid center node -->
<svg viewBox="0 0 24 24" width="24" height="24" aria-label="Jicate IT Service"
     role="img">
  <!-- diamond = square rotated 45° about center; sharp corners, hairline stroke -->
  <rect x="6.5" y="6.5" width="11" height="11"
        transform="rotate(45 12 12)"
        fill="none" stroke="currentColor" stroke-width="1.5"
        stroke-linejoin="miter" />
  <!-- center node -->
  <circle cx="12" cy="12" r="2.5" fill="currentColor" />
</svg>
```

### The wordmark

- **Text:** `Jicate IT Service` (full) for the footer/legal lockup; **`Jicate`** alone may serve as the compact nav wordmark, with the diamond mark to its left.
- **Type:** body grotesque — **Geist** (in-project; fallback Inter). Weight **400–500**. A neo-grotesque, not the display face — the display/peaked-apex face (Space Grotesk, standing in for Alliance No.2) is reserved for hero/big headlines, not the wordmark.
- **Case & color:** Title-case `Jicate IT Service` in ink `#1e2124`. The wordmark may be **all-caps with 0.05em letter-spacing** in fine/footer contexts to match the mono-label voice, but the primary nav wordmark stays title-case grotesque for legibility.
- **Tracking:** tight but not condensed; let Geist's default metrics carry it. No custom negative tracking like the hero H1.

### Color & context behavior (matches nav motion)

| Context | Mark color | Wordmark color |
|---|---|---|
| Over hero / dark media (transparent nav) | off-white `#efefef` | off-white `#efefef` |
| Solid scrolled nav (light bar ≈ `#f9f9f9`) | ink `#1e2124` | ink `#1e2124` |
| Hover accent (optional) | node dot → pine green `#2b5945` | ink `#1e2124` |

The lockup uses `currentColor` for the mark so it crossfades with the nav's transparent→solid color transition (see the motion spec) for free.

### Logo do's and don'ts

- **Do** keep the mark sharp (radius 0), hairline-stroked, and monochrome by default.
- **Do** preserve clear space around the lockup ≥ the mark's height on all sides.
- **Do** use `currentColor` so the logo recolors with nav state.
- **Don't** reproduce, trace, or lightly modify Palantir's actual sphere/eye mark or wordmark.
- **Don't** round the diamond's corners, add gradients/shadows, or introduce colors outside the token set.
- **Don't** set the wordmark in the display face — that face is for hero/big headlines only.

---

## 11. Quick reference

| Motif | Spec |
|---|---|
| ↗ external/forward | trailing label; hover nudge `translate(2px,-2px)`; `U+2197` |
| ↳ drill-in / learn-more | leading label; hover nudge `translateX(2px)`; `U+21B3` |
| ↖ CTA prefix | leading the primary button label; `U+2196` |
| → big CTA | right-aligned in split-CTA blocks; hover nudge `translateX(4px)`; `U+2192` |
| Numbered index `/0.x` | mono UPPERCASE, 0.05em tracking, 10px (`0.5556rem`)/line 1.6; active = `#2b5945` |
| Mono UPPERCASE label | mono, `text-transform:uppercase`, 0.05em; caption 10px, eyebrow 20px |
| Earmark glyphs | custom SVG, 24px viewBox, thin stroke, `currentColor`, sharp joins; circle + triangle/house |
| Dog-ear corner | ~16px notch via `clip-path` (Option A) or pseudo-element triangle (Option B); surfaces `#efefef`/`#f3f3f3` |
| Sharp corners | `border-radius: 0` everywhere |
| Pill exception | footer social pills only — `border-radius: 999px` |
| Borders | hairline `0.8px solid` ink `#1e2124` |
| Icons | Lucide (utility) + custom SVG (arrows/earmarks/logo); all 24px viewBox, `currentColor`, thin stroke |
| Logo | original "Linked Node" — hairline 45° diamond + center dot + Geist wordmark; `currentColor` recolor; never copy the reference mark |

---

*Token source: canonical measured design tokens (see README §1). Sibling specs: `01-foundations-color.md` (color), `02-foundations-typography.md` (type), `03-foundations-layout-grid-spacing.md` (grid/spacing), `04-components.md` (components), `05-motion-animation.md` (motion), `07-homepage-content-architecture.md` (content). This file (`06-iconography-and-motifs.md`) is the motifs/iconography spec in the README index.*
