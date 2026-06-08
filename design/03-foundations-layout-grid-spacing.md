# 03 — Foundations: Layout, Grid & Spacing

**Project:** Jicate IT Service — homepage clone
**Design language source:** palantir.com homepage (measured live)
**Scope:** Homepage only. Original Jicate content, Palantir design language replicated exactly.
**Stack:** Next.js 16.2.7 (App Router) · React 19.2.4 · Tailwind CSS v4 (CSS-first `@theme`, no `tailwind.config.js`) · TypeScript · `next/font` (Geist + Geist Mono already wired).

> This document defines the spatial system: the root unit, the 12-column grid, the container, the spacing scale, responsive breakpoints, and the rules for full-bleed vs. contained sections and vertical rhythm. Every value below is a **canonical measured token** — do not invent new sizes. All other foundation docs (color, typography, components, motion) sit on top of this spatial frame.

---

## 1. Root unit — the `rem` basis

The single most important fact in this system: **the root font-size is `18px`**, not the browser default of `16px`.

```css
/* Set on :root / html. EVERY rem in this design resolves on an 18px root. */
:root {
  font-size: 18px; /* 1rem = 18px */
}
```

| Property | Value | Notes |
| --- | --- | --- |
| Root font-size | `18px` | `1rem = 18px` |
| Body font | "Alliance No.1" → **Geist** (free substitute) | already loaded via `next/font` as `--font-geist-sans` |
| Body size | `18px` (`1rem`) | |
| Body line-height | `25px` (`≈1.389`) | unitless `1.389` recommended in CSS |
| Body text color (ink) | `#1e2124` | rgb(30,33,36) |
| Body background (canvas) | `#ffffff` | |

**Why this matters for layout:** every spacing, grid, and container token below is published in both `px` (the measured truth) and `rem` (the authored value). The `rem` figures **only resolve correctly when the root is 18px**. If you forget to set `font-size: 18px` on `:root`, every `rem`-based gap, gutter, and max-width will render ~12.5% too small (because the browser falls back to 16px). Set the root once and author everything else in `rem`.

> **Rounding note:** `rem` values are quoted to 4 decimals (e.g. `1.1111rem`). These are derived as `px ÷ 18`. Browsers round to sub-pixel, so the rendered result matches the measured `px` within < 0.5px. Where pixel-exactness is critical (borders, 1px hairlines), prefer the raw `px`.

---

## 2. The 12-column grid

The page content is laid out on a **12-column CSS grid**.

```css
.grid-12 {
  display: grid;
  grid-template-columns: repeat(12, minmax(10px, 1fr));
  column-gap: 10px;      /* gutter */
  row-gap: 20px;         /* v-gutter / h-spacing */
}
```

| Property | Value | Token |
| --- | --- | --- |
| Columns | `12` | |
| Template | `repeat(12, minmax(10px, 1fr))` | each column min `10px`, otherwise an equal fraction |
| Column gap (gutter) | `10px` (`0.5556rem`) | `--gutter` |
| Row gap (v-gutter / h-spacing) | `20px` (`1.1111rem`) | `--v-gutter` |

### Reading the template

`repeat(12, minmax(10px, 1fr))` means: twelve tracks, each at least `10px` wide but otherwise sharing the available width equally (`1fr`). The `minmax(10px, …)` floor prevents columns from collapsing to zero on very narrow viewports, while the `1fr` ceiling keeps them fluid and equal at normal sizes. Combined with the `10px` column gap, this is a classic fluid editorial grid: fixed gutters, fluid columns.

### Column-span vocabulary

Lay elements out by spanning grid columns rather than using fixed widths. Common spans observed on the source:

| Use | Span | Tailwind v4 utility |
| --- | --- | --- |
| Full-width row inside container | `1 / -1` (all 12) | `col-span-12` |
| Half / two-up split (big CTA) | `6` + `6` | `col-span-6` |
| Three-up feature/story cards | `4` + `4` + `4` | `col-span-4` |
| Four-up footer/link columns | `3 ×4` | `col-span-3` |
| Statement headline (indented) | offset + `8` | `col-start-3 col-span-8` (example) |

> **Tailwind v4 note:** the default `grid-cols-12` utility emits `repeat(12, minmax(0, 1fr))` — note the `0` floor, not `10px`. To match the measured grid exactly, define a custom utility or grid class (see §8). The 12-column **span** utilities (`col-span-*`, `col-start-*`) work as-is on top of it.

---

## 3. The container (`--h-contain`)

Content is centered with a maximum width and a guaranteed minimum side padding. This is the horizontal containment rule that all contained sections obey.

| Property | Value | Token | Notes |
| --- | --- | --- | --- |
| Max content width | `1440px` (`80rem`) | `--max-width` | primary |
| Alt wide max width | `1480px` | `--max-width-wide` | wider variant for select bands |
| Min side padding | `20px` (`1.1111rem`) | the spacing-`s`/`m` step | never less than this |

The container keeps content centered up to `1440px`, then pins a **minimum `20px` gutter** on each side so text never touches the viewport edge on small screens.

```css
:root {
  --max-width: 1440px;       /* 80rem */
  --max-width-wide: 1480px;  /* alt wide */
}

/* Centered container with guaranteed 20px side padding. */
.h-contain {
  width: 100%;
  margin-inline: auto;
  max-width: var(--max-width);
  /* Padding is the larger of: the leftover space split in two, OR 20px. */
  padding-inline: max((100% - var(--max-width)) / 2, 20px);
}
```

### How the `max(…)` padding behaves

`padding-inline: max((100% - max-width)/2, 20px)`:

- **Viewport wider than 1440px:** `(100% - 1440px)/2` is positive and larger than `20px`, so the padding grows to absorb the extra space — content stays centered at `1440px`. (Equivalent to `margin: auto` centering, expressed as padding so the grid lives edge-to-edge inside.)
- **Viewport at or below ~1480px:** `(100% - 1440px)/2` shrinks toward zero, so `20px` wins — content fills the width minus a `20px` rail on each side.

Either author the container with `max-width + margin-inline: auto + padding-inline: 20px`, **or** with the single `padding-inline: max(...)` expression. Both produce the same result; the `max(...)` form is what the source uses and keeps the side rail explicit.

### Wide variant

For bands that should breathe wider (e.g. a full-width media strip with contained captions), swap `--max-width` for `--max-width-wide` (`1480px`). Keep the same `20px` minimum side padding.

---

## 4. Spacing scale

A small, deliberate spacing scale. The measured base scale is **tiny / xs / s / m / l**; the build extends it upward with **xl / 2xl / 3xl** to cover section-level rhythm (these three are explicitly authorized extensions for this clone, not invented ad-hoc).

| Token | px | rem (@18px root) | Typical use |
| --- | --- | --- | --- |
| `space-tiny` | `3px` | `0.1667rem` | hairline insets, icon nudges, optical tweaks |
| `space-xs` | `10px` | `0.5556rem` | tight inner padding, button padding, **= gutter** |
| `space-s` | `20px` | `1.1111rem` | default gap, container side padding, **= v-gutter** |
| `space-m` | `20px` | `1.1111rem` | same step as `s` (paired naming; use either) |
| `space-l` | `40px` | `2.2222rem` | block separation, card padding, group gaps |
| `space-xl` | `60px` | `3.3333rem` | **section vertical spacing** (see §6) |
| `space-2xl` | `80px` | `4.4444rem` | large section breaks, hero/footer padding |
| `space-3xl` | `120px` | `6.6667rem` | major full-bleed section padding, generous whitespace |

> **`s` and `m` are both `20px`.** This is intentional in the measured system — they are aliases at the same step, named for semantic intent (`s` = small gap, `m` = medium/standard gap). Do not "fix" one to a different value. Pick the name that reads best at the call site.

### Relationship between scale and grid

The scale is internally consistent with the grid primitives, which makes alignment effortless:

- `gutter` = `10px` = `space-xs`
- `v-gutter` / `h-spacing` = `20px` = `space-s` / `space-m` = container side padding
- `space-l` (`40px`) = `2 × space-s`
- `space-xl` (`60px`) = `3 × space-s` = section vertical spacing
- `space-2xl` (`80px`) = `4 × space-s`
- `space-3xl` (`120px`) = `6 × space-s` = `2 × space-xl`

Everything is a multiple of `10px` (`space-xs`) except `space-tiny` (`3px`). Treat `10px` as the underlying spatial grain and `20px` as the working unit.

---

## 5. Full-bleed vs. contained sections

This is a **light site** (white `#ffffff` canvas, near-black `#1e2124` text) punctuated by **full-bleed dark media sections** (hero video, dark CTA, parts of the footer). Two section archetypes drive the whole page:

### A. Contained section (default)

Content lives inside the `.h-contain` container (`max-width 1440px`, `20px` min side padding). Background is the canvas or a light surface; the section edges are defined by whitespace, not color.

```html
<section class="section">           <!-- vertical rhythm only, no bg -->
  <div class="h-contain grid-12">    <!-- centered, max 1440px, 12-col grid -->
    …content spanning columns…
  </div>
</section>
```

Use for: services/platform intro, feature cards, testimonial row (the card track is contained even though cards scroll horizontally), most editorial copy.

### B. Full-bleed section

The **background** spans the entire viewport width (edge to edge, no side padding on the colored layer), while the **content inside** is still constrained by an inner `.h-contain`. This is how dark media bands read as full-width while their text stays aligned to the same grid as everything else.

```html
<section class="section section--bleed bg-near-black">  <!-- bg edge-to-edge -->
  <div class="h-contain grid-12">                        <!-- content re-contained -->
    …content…
  </div>
</section>
```

Backgrounds used for full-bleed bands (from the color tokens):

| Band | Background token | Value | Foreground |
| --- | --- | --- | --- |
| Hero (video) | near-black + dark overlay; blue glow accent | `#202426`, glow `#4e8af7` | off-white headline `#efefef` |
| Dark CTA / black split | near-black | `#202426` | off-white / white text |
| Light split half | band bg | `#efefef` | ink `#1e2124` |
| Light contrast band | surface medium / light | `#f3f3f3` / `#f9f9f9` | ink `#1e2124` |
| Footer (dark portions) | near-black | `#202426` | off-white |

**Edge-to-edge mechanics.** Inside a `max-width` page wrapper you can break out with either of these patterns — pick one and use it consistently:

```css
/* Pattern 1: full-bleed utility (viewport-relative). */
.section--bleed {
  width: 100vw;
  margin-inline: calc(50% - 50vw); /* pull back to viewport edges */
}

/* Pattern 2 (preferred for this build): sections are direct children of <body>,
   which is full width by default; only the inner .h-contain is constrained.
   No breakout math needed. */
```

> Prefer **Pattern 2** for the homepage: render each `<section>` as a full-width flow child (the `layout.tsx` body is already `min-h-full flex flex-col`), apply the background to the section, and constrain only the inner `.h-contain`. This avoids `100vw` scrollbar-width overflow bugs.

---

## 6. Vertical rhythm

### Section spacing

The measured **section vertical spacing is `60px` (`3.3333rem`)** — this is the standard breathing room between major sections, applied as vertical padding on each section.

```css
.section {
  padding-block: 60px; /* space-xl — standard section rhythm */
}
```

Scale section padding by archetype:

| Section type | Vertical padding | Token |
| --- | --- | --- |
| Standard contained section | `60px` top & bottom | `space-xl` |
| Large break / hero-adjacent | `80px` | `space-2xl` |
| Major full-bleed feature / dark CTA | `120px` | `space-3xl` |
| Tight sub-section / card inner | `40px` | `space-l` |

### Within-section rhythm

- **Block-to-block gap** inside a section: `40px` (`space-l`) for grouped blocks; `20px` (`space-s`) for tightly related items.
- **Grid row gap:** `20px` (`v-gutter`) — already set on `.grid-12`.
- **Eyebrow → headline → body** stack: lead with the smaller spacing steps (`tiny` 3 / `xs` 10 / `s` 20) between type lines, reserving `l`/`xl` for whole-block separation.
- **Collapse, don't double.** Use a single owner for the gap (the parent's `gap` / `padding-block`), not margins on both adjacent children, to avoid margin doubling between sections.

### The whitespace character

The design language is **engineered, editorial, high-contrast with lots of whitespace**. Vertical rhythm is the primary tool for that feel: generous, consistent multiples of `20px`. When in doubt between two steps, choose the larger — the source errs toward space.

---

## 7. Responsive breakpoints

Four breakpoint bands. The grid stays 12 columns conceptually; spans collapse and the container side padding holds at `20px`.

| Band | Range | Container behavior |
| --- | --- | --- |
| **mobile** | `≤ 640px` | Single-column flow. Most 4/6-col spans become full width (`col-span-12`). `20px` side padding. Section padding may step down (`60px` → `40px`). |
| **tablet** | `641px – 1024px` | 2-up layouts (e.g. cards 2 across via `col-span-6`). Container = viewport − `20px` rails. Section padding `60px`. |
| **desktop** | `1025px – 1479px` | Full 12-col layout. Container = viewport − `20px` rails until it reaches `1440px`. Standard spans (3/4/6). |
| **wide** | `≥ 1480px` | Content centered at `1440px` (or `1480px` for wide-variant bands); `max(...)` padding grows the side rails to keep content centered. Full-bleed backgrounds still span the viewport. |

### Breakpoint tokens

```css
/* Suggested named breakpoints for the build. */
:root {
  --bp-mobile: 640px;   /* ≤ 640  : mobile */
  --bp-tablet: 1024px;  /* 641–1024 : tablet */
  --bp-desktop: 1479px; /* 1025–1479 : desktop */
  --bp-wide: 1480px;    /* ≥ 1480 : wide */
}
```

In Tailwind v4, register matching custom breakpoints in `@theme` (the framework's defaults — `sm 640 / md 768 / lg 1024 / xl 1280 / 2xl 1536` — do **not** line up with these measured bands, so define explicit ones):

```css
@theme {
  --breakpoint-mobile: 640px;
  --breakpoint-tablet: 641px;
  --breakpoint-desktop: 1025px;
  --breakpoint-wide: 1480px;
}
/* usage: class="col-span-12 tablet:col-span-6 desktop:col-span-4" */
```

> Note: Tailwind breakpoints are **min-width** (mobile-first). The ranges above are inclusive bands; author mobile-first and add `tablet:` / `desktop:` / `wide:` overrides as the viewport grows.

### What changes at each breakpoint

| Concern | mobile ≤640 | tablet 641–1024 | desktop 1025–1479 | wide ≥1480 |
| --- | --- | --- | --- | --- |
| Column spans | mostly 12 | 6 / 12 | 3 / 4 / 6 / 12 | 3 / 4 / 6 / 12 |
| Side padding | `20px` | `20px` | `20px` (until 1440) | grows via `max(...)` |
| Section padding | `40–60px` | `60px` | `60px` | `60px`+ |
| Nav | hamburger, `86px` | hamburger, `86px` | full nav, `86px` | full nav, `86px` |
| Hero headline | scales down from `80px` | scales | `80px` | `80px` |

---

## 8. Nav height

The navigation bar is a fixed structural constant of the layout.

| Property | Value | Token |
| --- | --- | --- |
| Nav height | `86px` | `--nav-height` |

The nav is **transparent over the hero** (light wordmark, white-filled "Get Started" CTA, search + hamburger icon boxes) and transitions to a **solid light bar** (`≈#f9f9f9`) with dark text on scroll (motion is documented in the motion foundations doc). For layout purposes:

- The hero sits **under** the nav (nav is `position: fixed` / overlay; hero starts at viewport top, full-bleed). No top offset on the hero.
- All **subsequent** sections that are not full-bleed-behind-nav should account for the `86px` nav when computing sticky offsets and scroll-anchored positions.
- Sticky/pinned elements (e.g. the services scroll-pinned list) should use `top: 86px` (or `var(--nav-height)`) so they pin just below the bar.

```css
:root {
  --nav-height: 86px;
}
```

---

## 9. Token reference — drop-in for `globals.css`

The project's `globals.css` currently sets only `--background`, `--foreground`, and Geist fonts. Extend the `:root` and `@theme` blocks with the spatial tokens below. **Do not change the existing font wiring** (`--font-geist-sans` / `--font-geist-mono` are already provided by `next/font` in `layout.tsx`).

```css
:root {
  /* Root unit — CRITICAL: 1rem = 18px for the whole system. */
  font-size: 18px;

  /* Grid */
  --grid-columns: 12;
  --gutter: 10px;        /* 0.5556rem — column gap */
  --v-gutter: 20px;      /* 1.1111rem — row gap / h-spacing */

  /* Container */
  --max-width: 1440px;       /* 80rem  */
  --max-width-wide: 1480px;  /* alt wide */
  --container-pad: 20px;     /* 1.1111rem — min side padding */

  /* Spacing scale (px) */
  --space-tiny: 3px;     /* 0.1667rem */
  --space-xs: 10px;      /* 0.5556rem */
  --space-s: 20px;       /* 1.1111rem */
  --space-m: 20px;       /* 1.1111rem (alias of s) */
  --space-l: 40px;       /* 2.2222rem */
  --space-xl: 60px;      /* 3.3333rem — section vertical spacing */
  --space-2xl: 80px;     /* 4.4444rem */
  --space-3xl: 120px;    /* 6.6667rem */

  /* Structural */
  --nav-height: 86px;
  --section-space: 60px; /* = --space-xl */

  /* Breakpoints */
  --bp-mobile: 640px;
  --bp-tablet: 1024px;
  --bp-desktop: 1479px;
  --bp-wide: 1480px;
}

@theme inline {
  /* Expose spacing to Tailwind utilities (e.g. p-s, gap-xl). */
  --spacing-tiny: var(--space-tiny);
  --spacing-xs:   var(--space-xs);
  --spacing-s:    var(--space-s);
  --spacing-m:    var(--space-m);
  --spacing-l:    var(--space-l);
  --spacing-xl:   var(--space-xl);
  --spacing-2xl:  var(--space-2xl);
  --spacing-3xl:  var(--space-3xl);

  /* Breakpoints (min-width, mobile-first). */
  --breakpoint-mobile:  640px;
  --breakpoint-tablet:  641px;
  --breakpoint-desktop: 1025px;
  --breakpoint-wide:    1480px;
}

/* Container + grid helpers. */
.h-contain {
  width: 100%;
  margin-inline: auto;
  max-width: var(--max-width);
  padding-inline: max((100% - var(--max-width)) / 2, var(--container-pad));
}
.h-contain--wide { max-width: var(--max-width-wide); }

.grid-12 {
  display: grid;
  grid-template-columns: repeat(12, minmax(10px, 1fr));
  column-gap: var(--gutter);
  row-gap: var(--v-gutter);
}

.section { padding-block: var(--section-space); } /* 60px default rhythm */
```

> **Tailwind v4 reminder:** there is no `tailwind.config.js`. All design tokens are declared CSS-first in `@theme` inside `globals.css`. `@theme inline` lets these reference other custom properties. The `--spacing-*` keys generate spacing utilities (`p-s`, `m-l`, `gap-xl`, etc.); `--breakpoint-*` keys generate responsive variants (`tablet:`, `desktop:`, `wide:`).

---

## 10. Engineer checklist

- [ ] `:root { font-size: 18px }` is set **before** authoring any `rem` value.
- [ ] Grid uses `repeat(12, minmax(10px, 1fr))` — **not** Tailwind's default `minmax(0, 1fr)`.
- [ ] Column gap `10px`, row gap `20px`.
- [ ] Container caps at `1440px` (`1480px` wide variant), centered, with `max(..., 20px)` side padding.
- [ ] Section vertical padding `60px` by default; step to `80px` / `120px` for large / full-bleed bands.
- [ ] Full-bleed sections: background spans viewport, inner content re-contained in `.h-contain` (prefer body-flow-child pattern, avoid `100vw` overflow).
- [ ] Spacing comes only from the scale (`3 / 10 / 20 / 40 / 60 / 80 / 120`); `s` and `m` are both `20px`.
- [ ] Breakpoints: mobile ≤640, tablet 641–1024, desktop 1025–1479, wide ≥1480; mobile-first overrides.
- [ ] Sticky/pinned offsets use `top: var(--nav-height)` (`86px`).
- [ ] No invented sizes — every value traces to a canonical token in this document.
