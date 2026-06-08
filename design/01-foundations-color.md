# 01 — Foundations: Color

**Project:** Jicate IT Service — homepage clone
**Design language source:** Palantir.com homepage (measured live)
**Scope:** Color foundations only (palette, contexts, contrast, tokens). Type/layout/motion live in sibling docs.

> All values in this document are the **canonical measured tokens** from the design brief. Do not invent, round, or
> "improve" any hex/rgba value — the entire system is built on a small, restrained, exact set. If a color you need is
> not in the table below, it does not exist in this system.

---

## 1. Color philosophy

Jicate's homepage is a **LIGHT site**: a white canvas (`#ffffff`) with near-black text (`#1e2124`), generous whitespace,
thin `0.8px` borders, and sharp (radius `0`) corners. It is **high-contrast, editorial, and utilitarian**.

Onto that light canvas drop **full-bleed DARK MEDIA sections** — the hero video, the dark split-CTA block, and parts of
the footer. These dark zones run on a near-black surface (`#202426`) with off-white text (`#efefef`) and are the **only**
place the blue (`#4e8af7`) appears (as a glow / dark-context accent).

A **single restrained brand accent** — pine green `#2b5945` — carries all brand emphasis on the light canvas, supported
by two low-opacity tints. There is **no secondary brand hue** on light surfaces. Restraint is the brand.

Two mental "contexts" govern every color decision:

| Context | Background | Default text | Accent(s) allowed |
| --- | --- | --- | --- |
| **LIGHT canvas** (default page) | `#ffffff` / surfaces / band | ink `#1e2124` | pine green `#2b5945` (+ its 5%/10% tints) |
| **DARK media** (hero, dark CTA, dark footer) | near-black `#202426` | off-white `#efefef` | blue `#4e8af7` (glow/accent only) |

Pick the context first, then pick colors only from that context's column.

---

## 2. Full palette table

Semantic name → canonical value → role → proposed CSS custom property. Property names follow the existing Tailwind v4
`@theme inline` convention in `src/app/globals.css` (`--color-*`).

### 2.1 Ink scale (text on the light canvas)

| Semantic name | Value | rgb | Role | CSS custom property |
| --- | --- | --- | --- | --- |
| Ink / primary text | `#1e2124` | `30, 33, 36` | Default body + headings on light; primary button text; borders | `--color-ink` |
| Ink medium | `#636363` | `99, 99, 99` | Statement/intro headlines (grey), secondary text | `--color-ink-medium` |
| Ink light | `#767676` | `118, 118, 118` | Captions, meta, de-emphasized labels | `--color-ink-light` |

### 2.2 Canvas, surfaces & band (light backgrounds)

| Semantic name | Value | rgb | Role | CSS custom property |
| --- | --- | --- | --- | --- |
| Canvas / page bg | `#ffffff` | `255, 255, 255` | Default page background | `--color-canvas` |
| Surface medium | `#f3f3f3` | `243, 243, 243` | Cards, testimonial cards, raised blocks | `--color-surface-medium` |
| Surface light | `#f9f9f9` | `249, 249, 249` | Subtle fills; solid (scrolled) nav bar background | `--color-surface-light` |
| Band / light section bg | `#efefef` | `239, 239, 239` | Alternating light section bands; light half of split CTA | `--color-band` |

> Note: `#efefef` does double duty — it is the **light band** background here, and it is also the **off-white text**
> color in dark contexts (see 2.4). Same value, opposite role depending on context.

### 2.3 Accent — pine green (the single brand color)

| Semantic name | Value | rgb / rgba | Role | CSS custom property |
| --- | --- | --- | --- | --- |
| Accent (brand) pine green | `#2b5945` | `43, 89, 69` | Brand accent: links, highlights, active markers on light | `--color-accent` |
| Accent 10% | `rgba(43,89,69,0.10)` | `43, 89, 69 / .10` | Tinted fills, hover wash, selected-state background | `--color-accent-10` |
| Accent 5% | `rgba(43,89,69,0.05)` | `43, 89, 69 / .05` | Very subtle wash / hover on light surfaces | `--color-accent-5` |
| Accent 5% opaque | `#f4f7f6` | `244, 247, 246` | Flattened equivalent of the 5% tint over white (use when transparency is undesirable, e.g. over images) | `--color-accent-5-opaque` |

### 2.4 Dark-context palette (full-bleed dark media)

| Semantic name | Value | rgb | Role | CSS custom property |
| --- | --- | --- | --- | --- |
| Near-black | `#202426` | `32, 36, 38` | Dark section / hero overlay / dark CTA / dark footer background; inverse button bg; announcement bar bg | `--color-near-black` |
| Blue (dark-context accent) | `#4e8af7` | `78, 138, 247` | Hero glow + accent **only in dark/media contexts** — never on white | `--color-blue` |
| Off-white | `#efefef` | `239, 239, 239` | Hero headline + body text on dark surfaces | `--color-offwhite` |

### 2.5 Functional & interaction

| Semantic name | Value | rgb / rgba | Role | CSS custom property |
| --- | --- | --- | --- | --- |
| Error | `#ff4136` | `255, 65, 54` | Form validation errors, destructive states | `--color-error` |
| Hover (ink @ 33%) | `rgba(30,33,36,0.33)` | `30, 33, 36 / .33` | Hover color/opacity for links & ink elements on light (hover opacity = `0.33`) | `--color-hover` |

---

## 3. LIGHT canvas vs DARK media — which colors belong where

### LIGHT canvas (the default — most of the page)
- **Backgrounds:** `--color-canvas` `#ffffff`, `--color-surface-light` `#f9f9f9`, `--color-surface-medium` `#f3f3f3`, `--color-band` `#efefef`.
- **Text:** `--color-ink` `#1e2124` (primary), `--color-ink-medium` `#636363` (grey statement headlines / secondary), `--color-ink-light` `#767676` (captions/meta).
- **Accent:** `--color-accent` `#2b5945` plus `--color-accent-10` / `--color-accent-5` / `--color-accent-5-opaque` washes.
- **Borders:** `0.8px solid` `--color-ink` `#1e2124` (e.g. primary button, icon boxes).
- **Hover:** `--color-hover` `rgba(30,33,36,0.33)` (ink at 33% opacity) and arrow nudge.
- **NOT allowed here:** the blue `#4e8af7`. It must never sit on white.

### DARK media (hero video, dark split-CTA, dark footer)
- **Background:** `--color-near-black` `#202426` (often with a darkening overlay over hero video).
- **Text:** `--color-offwhite` `#efefef` (hero H1 and body on dark).
- **Accent:** `--color-blue` `#4e8af7` — hero glow and dark-context accents only.
- **Inverse button:** `--color-near-black` `#202426` bg with `--color-offwhite` text.
- **NOT allowed here:** pine-green tints rendered as `rgba` over `#fff` assumptions; recompute tints against the dark
  surface if you need a green wash on dark (prefer the off-white/blue dark palette instead).

### Components that switch context
- **Nav (86px):** TRANSPARENT over the hero → light wordmark + white-filled CTA (dark context). On scroll it becomes a
  SOLID light bar (`--color-surface-light` `#f9f9f9`) with DARK wordmark/text (light context). The transparent→solid
  background + text-color crossfade is the signature nav motion.
- **Announcement bar:** dark (`--color-near-black` `#202426`) strip with light text + inline underlined link, sits above
  the nav — a dark sliver in an otherwise light header region.
- **Split CTA:** one half light (`--color-band` `#efefef`, ink text), one half dark (`--color-near-black` `#202426`,
  off-white text) — both contexts side by side.
- **Footer:** dense directory that mixes light and dark regions; social pills are outlined (the only rounded elements).

---

## 4. WCAG contrast guidance

Contrast ratios below are computed from the canonical sRGB values using the WCAG 2.x relative-luminance formula
(`L = 0.2126·R + 0.7152·G + 0.0722·B` on linearized channels; `ratio = (L_light + 0.05) / (L_dark + 0.05)`).

WCAG thresholds: **AA** normal text ≥ 4.5:1, AA large text (≥ 24px, or ≥ 18.66px bold) ≥ 3:1, AAA normal ≥ 7:1.
This site's root is 18px, so "large" = roughly the body-large (20px) size and above; H1/H2/H3 are all "large".

### 4.1 Key pairs (computed)

| Foreground | Background | Ratio | Normal AA (4.5) | Large AA (3.0) | AAA (7.0) | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Ink `#1e2124` | Canvas `#ffffff` | **≈ 16.2:1** | Pass | Pass | Pass | Primary text — excellent, well above AAA. |
| Ink medium `#636363` | Canvas `#ffffff` | **≈ 6.0:1** | Pass | Pass | Fail | Grey statement headlines / secondary text — AA only; do not use below ~16px for body-critical info. |
| Ink light `#767676` | Canvas `#ffffff` | **≈ 4.5:1** | Pass (borderline) | Pass | Fail | Captions/meta — sits right at the AA normal threshold. Safe for ≥16px; avoid for the 10px micro-caption as the primary information carrier. |
| Off-white `#efefef` | Near-black `#202426` (hero/dark) | **≈ 13.6:1** | Pass | Pass | Pass | Hero H1 + dark-context body — excellent. (Hero video overlay only increases effective contrast.) |
| Accent pine green `#2b5945` | Canvas `#ffffff` | **≈ 8.0:1** | Pass | Pass | Pass | Brand accent as text/links on white — meets AAA. |
| Off-white `#efefef` | Canvas `#ffffff` | **≈ 1.2:1** | Fail | Fail | Fail | Reference only: confirms `#efefef` is a **background/band** on light, never text on white. |
| Blue `#4e8af7` | Near-black `#202426` | **≈ 4.7:1** | Pass | Pass | Fail | Dark-context accent — clears AA normal on dark; fine for text/links/glyphs on dark. |
| Blue `#4e8af7` | Canvas `#ffffff` | **≈ 3.3:1** | Fail | Pass (large only) | Fail | Even at large sizes blue on white is marginal and fails AA normal — keep blue off the white canvas (brand rule reinforces this). |
| Error `#ff4136` | Canvas `#ffffff` | **≈ 3.5:1** | Fail | Pass | Fail | Error text passes large only — pair the color with an icon/text label; don't rely on hue alone, and bump weight/size for inline error messages. |

> Treat the ratios as guidance computed from the exact tokens. The three pass/fail-critical takeaways: ink and pine
> green are bullet-proof on white; the two greys (`#636363`, `#767676`) are AA-normal only (mind small sizes); blue and
> off-white are dark-context-only by contrast as well as by brand rule.

### 4.2 Practical contrast rules
- Body copy (18px) and small body (16px): use `--color-ink` `#1e2124` on light. It clears AAA with huge margin.
- Grey statement headlines use `--color-ink-medium` `#636363` — acceptable because they are **large** (~46px). Do not
  reuse `#636363`/`#767676` for small, information-dense body text.
- The 10px micro-caption (`--color-ink-light` `#767676` at ~4.5:1) is decorative/secondary. Never put
  must-read content there as the sole carrier; keep it ≥ AA and support it with adjacent ink text.
- On dark media, always use `--color-offwhite` `#efefef` for text and reserve `--color-blue` `#4e8af7` for large
  accents/glyphs/links — never for paragraph text.
- The hover state lowers ink to `rgba(30,33,36,0.33)` (~33% opacity) — this is **intentionally low contrast** and is a
  transient affordance, not a resting text color. Never ship resting text at hover opacity.

---

## 5. Do / Don't

### Do
- Do keep a single brand accent: pine green `#2b5945` on light surfaces, plus its 10%/5% tints for washes.
- Do choose the **context** (light vs dark) first, then pick colors only from that context.
- Do use `#202426` for every dark surface (hero overlay, dark CTA, dark footer, inverse button, announcement bar) so the
  dark zones read as one material.
- Do reserve blue `#4e8af7` exclusively for dark/media contexts (hero glow + dark accents).
- Do use ink `#1e2124` for `0.8px` borders and primary text; it is the workhorse on light.
- Do use the off-white `#efefef` for text **only** on dark, and as a band background **only** on light.
- Do reach for `--color-accent-5-opaque` `#f4f7f6` instead of the 5% rgba tint when the surface underneath is not pure
  white (e.g. over imagery) and you need a predictable flat color.
- Do pair the error color `#ff4136` with an icon and text, not color alone.

### Don't
- Don't introduce any hue outside this palette (no extra greens, no purples, no gradients-as-brand-color).
- Don't put blue `#4e8af7` on the white canvas (fails contrast and breaks the dark-only rule).
- Don't use the greys `#636363` / `#767676` for small dense body text — they are AA-normal only.
- Don't use off-white `#efefef` as text on white (it is invisible — ~1.1:1) or as a dark-surface background.
- Don't ship resting text at the hover opacity `rgba(30,33,36,0.33)`.
- Don't round the 5%/10% accent tints into new opaque hexes; keep them as rgba so they compose over varied surfaces
  (the one provided opaque flatten, `#f4f7f6`, is the only exception).
- Don't add `border-radius` driven by color theming — corners stay sharp (`0`) everywhere except footer social pills;
  that is a shape rule, noted here only so color states don't sneak rounding in.

---

## 6. Token map (CSS custom properties)

Add these under `:root` and expose them through Tailwind v4's `@theme inline` block in
`src/app/globals.css`, matching the existing `--color-*` naming so utilities like `bg-canvas`, `text-ink`,
`text-accent`, `bg-near-black` resolve. The existing `--background` / `--foreground` vars can be re-pointed to
`--color-canvas` / `--color-ink`.

```css
:root {
  /* Ink scale */
  --color-ink: #1e2124;            /* primary text, borders */
  --color-ink-medium: #636363;     /* grey statement headlines, secondary */
  --color-ink-light: #767676;      /* captions, meta */

  /* Light canvas / surfaces / band */
  --color-canvas: #ffffff;         /* page bg */
  --color-surface-medium: #f3f3f3; /* cards */
  --color-surface-light: #f9f9f9;  /* subtle fills, scrolled nav */
  --color-band: #efefef;           /* light section bands, split-CTA light half */

  /* Accent — pine green (single brand color) */
  --color-accent: #2b5945;
  --color-accent-10: rgba(43, 89, 69, 0.10);
  --color-accent-5: rgba(43, 89, 69, 0.05);
  --color-accent-5-opaque: #f4f7f6; /* flattened 5% over white */

  /* Dark-context palette */
  --color-near-black: #202426;     /* dark surfaces, hero overlay, inverse btn, announcement bar */
  --color-blue: #4e8af7;           /* dark-context accent / hero glow ONLY */
  --color-offwhite: #efefef;       /* text on dark; same value as --color-band */

  /* Functional & interaction */
  --color-error: #ff4136;
  --color-hover: rgba(30, 33, 36, 0.33); /* ink @ 33% opacity, hover-opacity = 0.33 */
}

@theme inline {
  --color-ink: var(--color-ink);
  --color-ink-medium: var(--color-ink-medium);
  --color-ink-light: var(--color-ink-light);
  --color-canvas: var(--color-canvas);
  --color-surface-medium: var(--color-surface-medium);
  --color-surface-light: var(--color-surface-light);
  --color-band: var(--color-band);
  --color-accent: var(--color-accent);
  --color-accent-10: var(--color-accent-10);
  --color-accent-5: var(--color-accent-5);
  --color-accent-5-opaque: var(--color-accent-5-opaque);
  --color-near-black: var(--color-near-black);
  --color-blue: var(--color-blue);
  --color-offwhite: var(--color-offwhite);
  --color-error: var(--color-error);
  --color-hover: var(--color-hover);
}
```

> The dark-context palette is **not** wired to `prefers-color-scheme: dark`. This is a light site with deliberate
> full-bleed dark sections, not a theme toggle. The current `@media (prefers-color-scheme: dark)` block in
> `globals.css` (which flips `--background`/`--foreground`) should be removed or neutralized so the canvas stays white
> regardless of OS theme. Apply dark styling per-section (e.g. a `.is-dark` / dark wrapper), not globally.

---

## 7. Quick reference — value → token

| Value | Token | Context |
| --- | --- | --- |
| `#1e2124` | `--color-ink` | light (text/border) |
| `#636363` | `--color-ink-medium` | light (text) |
| `#767676` | `--color-ink-light` | light (text) |
| `#ffffff` | `--color-canvas` | light (bg) |
| `#f3f3f3` | `--color-surface-medium` | light (bg) |
| `#f9f9f9` | `--color-surface-light` | light (bg) |
| `#efefef` | `--color-band` / `--color-offwhite` | bg on light / text on dark |
| `#2b5945` | `--color-accent` | light (accent) |
| `rgba(43,89,69,0.10)` | `--color-accent-10` | light (tint) |
| `rgba(43,89,69,0.05)` | `--color-accent-5` | light (tint) |
| `#f4f7f6` | `--color-accent-5-opaque` | light (flat tint) |
| `#202426` | `--color-near-black` | dark (bg) |
| `#4e8af7` | `--color-blue` | dark (accent only) |
| `#ff4136` | `--color-error` | functional |
| `rgba(30,33,36,0.33)` | `--color-hover` | interaction (hover) |
