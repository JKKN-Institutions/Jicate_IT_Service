# 02 — Foundations: Typography

> **Brand:** Jicate IT Service · **Scope:** Homepage clone · **Design language source:** Palantir.com homepage (measured live)
> This document defines the typographic foundation for the Jicate homepage. We replicate Palantir's **type system** (scale, roles, rhythm, mono-label motif) exactly, while using **free fonts** and **original Jicate content**. All values below are the canonical measured tokens — do not invent new sizes, weights, or spacing.

---

## 1. Root & Base

The single most important fact for all math on this page:

> **Root font-size = `18px`** ⇒ **`1rem = 18px`**

All `rem` values in this document resolve against an 18px root, **not** the browser-default 16px. Set this explicitly so the whole type scale is portable:

```css
:root {
  font-size: 18px; /* 1rem = 18px — canonical root for the Jicate clone */
}
```

**Base body defaults:**

| Property | Value | Notes |
| --- | --- | --- |
| Font family | body grotesque (substitute: **Geist**) | Reference: Alliance No.1 |
| Font size | `18px` (`1rem`) | |
| Line-height | `25px` (≈ `1.389`) | Use the unitless `1.389` in CSS |
| Color | `#1e2124` (ink / primary text) | rgb(30,33,36) |
| Background | `#ffffff` (canvas) | Light site |

```css
body {
  font-family: var(--font-body); /* Geist */
  font-size: 1rem;        /* 18px */
  line-height: 1.389;     /* 25px */
  color: #1e2124;
  background: #ffffff;
  -webkit-font-smoothing: antialiased;
}
```

---

## 2. Reference Fonts (commercial — must be substituted)

These are the four typefaces measured on the source homepage. **All are commercial** and may not ship in the clone; each is mapped to a free substitute in §3.

| Reference font | Classification | Weights observed | Distinctive trait | Role on source |
| --- | --- | --- | --- | --- |
| **Alliance No.1** | Neo-grotesque sans | 400 / 500 / 600 / 700 (+ italics) | Clean, neutral, tight | Body + most headings |
| **Alliance No.2** | Display / grotesque | 400 | **Peaked-apex `A`**, sharper display character | Hero H1 + big display headings |
| **Apercu Mono Pro** | Monospace | 500 | Humanist mono, even rhythm | Mono labels / client names (UPPERCASE) |
| **Rosart** | Serif (display) | 400 | Editorial high-contrast serif | Occasional editorial accent |

---

## 3. Free-Font Substitution (decisions + reasoning)

The project already loads **Geist** and **Geist Mono** via `next/font/google` in `src/app/layout.tsx` (variables `--font-geist-sans`, `--font-geist-mono`). We extend that with **Space Grotesk** for display.

| Role | Reference | **Chosen free substitute** | License | Reasoning |
| --- | --- | --- | --- | --- |
| **Display** (hero / big headings) | Alliance No.2 | **Space Grotesk** | SIL OFL | Closest free match to Alliance No.2's character. Space Grotesk is a proportional grotesque derived from Space Mono; it carries the sharp, slightly mechanical apex and tight grotesque proportions that read like Alliance No.2 at large display sizes (80px). Variable weights 300–700, OFL/free, available via `next/font/google`. |
| **Body** (paragraphs, most headings, buttons) | Alliance No.1 | **Geist** *(already in project)* | SIL OFL | Geist is a neutral neo-grotesque with a very close metric/feel to Alliance No.1 (clean, engineered, tight apertures). Already wired into `layout.tsx` — zero new dependency. Inter is an acceptable fallback if Geist is dropped. |
| **Mono** (UPPERCASE labels, client names, `/0.x` index) | Apercu Mono Pro | **Geist Mono** *(already in project)* | SIL OFL | Geist Mono matches the humanist, even-width rhythm of Apercu Mono and pairs natively with Geist. **JetBrains Mono** or **Space Mono** are equally valid free alternatives (Space Mono shares Space Grotesk's lineage, so it pairs cleanly with the display face if you prefer a single foundry feel). |
| **Serif accent** (optional editorial) | Rosart | **Fraunces** (or **Newsreader**) | SIL OFL | Only if an editorial serif accent is actually used on the homepage. Fraunces offers the high-contrast display character closest to Rosart; load lazily/optional — do not block on it. |

### 3.1 `next/font` wiring (recommended)

Add Space Grotesk alongside the existing Geist setup in `src/app/layout.tsx`:

```tsx
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

// className on <html>:
// `${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} ...`
```

### 3.2 Tailwind v4 `@theme` tokens (in `globals.css`)

The project uses Tailwind v4 CSS-first theming (no `tailwind.config.js`). Expose semantic font tokens so components reference roles, not raw faces:

```css
@theme inline {
  --font-body:    var(--font-geist-sans);  /* Geist      → Alliance No.1 */
  --font-display: var(--font-display);     /* Space Grotesk → Alliance No.2 */
  --font-mono:    var(--font-geist-mono);  /* Geist Mono → Apercu Mono   */
  /* --font-serif: var(--font-fraunces);   optional editorial accent      */
}
```

> Usage in JSX: `font-body` (default), `font-display` (hero/big headings), `font-mono` (labels/index).

---

## 4. Type Scale (canonical measured roles)

All `px` values are the measured source tokens; `rem` is computed at the **18px root**. Use the unitless line-height in CSS where a ratio is given.

| Role | Font | Size (px) | Size (rem @18px) | Weight | Line-height | Letter-spacing | Transform | Color |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Hero H1** | display (Space Grotesk) | `80px` | `4.4444rem` | 400 | `78px` (≈ `0.975`) | `-3.4px` (≈ `-0.0425em`) | none | `#efefef` (on dark) |
| **Big section H2** | display (Space Grotesk) | `50px` | `2.7778rem` | 400 | `1.0`–`1.1` | normal / slight neg | none | `#1e2124` |
| **Feature H3** | display / body | `34px` | `1.8889rem` *(token `--headline`)* | 400–500 | `1.0`–`1.1765` | normal | none | `#1e2124` |
| **Feature H3 (large variant)** | display / body | `46px` | `2.5556rem` | 400 | `1.0`–`1.1` | normal | none | `#1e2124` |
| **Statement headline** | display / body | `46px` | `2.5556rem` | 400 | `1.1`–`1.2` | normal | none | `#636363` (ink-medium grey) |
| **Section eyebrow / label** | body / mono | `20px` | `1.1111rem` | 400–500 | `1.3` | normal (mono variant: `0.05em` UPPERCASE) | none / UPPERCASE | `#1e2124` or `#636363` |
| **Body large** | body (Geist) | `20px` | `1.1111rem` | 400 | `1.3` | normal | none | `#1e2124` |
| **Body** *(default)* | body (Geist) | `18px` | `1rem` | 400 | `25px` (≈ `1.389`) | normal | none | `#1e2124` |
| **Body small** | body (Geist) | `16px` | `0.8889rem` | 400 | `1.4286` | normal | none | `#1e2124` / `#636363` |
| **Caption / micro-label** | mono (Geist Mono) | `10px` | `0.5556rem` | 500 | `1.6` | `0.05em` | **UPPERCASE** | `#767676` / `#636363` |

> **Notes on the measured tokens:**
> - The `--headline` token is exactly `1.8889rem = 34px` with line-height in the `1.0`–`1.1765` band (tight display leading).
> - The **statement headline** is the one large headline rendered in **grey `#636363`** (services / platform intro) — keep it ink-medium, not full ink.
> - Hero is the only role with a meaningful negative tracking (`-3.4px` at 80px ≈ `-0.0425em`); express it as `em` so it survives fluid scaling (see §5).
> - Caption/eyebrow mono labels carry the **`0.05em` UPPERCASE** mono motif — this is the recurring Palantir-style label treatment used for client names and `/0.x` index markers.

### 4.1 Tailwind v4 scale tokens (optional, for `text-*` utilities)

```css
@theme inline {
  --text-hero:       4.4444rem;  /* 80px */
  --text-display:    2.7778rem;  /* 50px */
  --text-headline:   1.8889rem;  /* 34px */
  --text-headline-lg:2.5556rem;  /* 46px (also statement headline) */
  --text-eyebrow:    1.1111rem;  /* 20px */
  --text-body-lg:    1.1111rem;  /* 20px */
  --text-body:       1rem;       /* 18px */
  --text-body-sm:    0.8889rem;  /* 16px */
  --text-caption:    0.5556rem;  /* 10px */
}
```

---

## 5. Fluid Sizing (mobile → desktop)

Only the **display roles** (hero + big H2) need fluid scaling; body roles stay fixed for predictable rhythm. Use `clamp(min, preferred, max)` so the hero never overflows on small screens while preserving the measured 80px on desktop. Keep the negative tracking in `em` so it scales with the font.

```css
/* Hero H1 — target 80px desktop, ~40px floor on mobile */
.hero-h1 {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: clamp(2.2222rem, 6vw + 1rem, 4.4444rem); /* ~40px → 80px @18px root */
  line-height: 0.975;            /* 78/80 */
  letter-spacing: -0.0425em;     /* ≈ -3.4px at 80px, scales fluidly */
  color: #efefef;                /* on dark hero media */
  text-transform: none;
}

/* Big section H2 — target 50px desktop, ~32px floor */
.section-h2 {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: clamp(1.7778rem, 3.5vw + 1rem, 2.7778rem); /* ~32px → 50px */
  line-height: 1.05;
  color: #1e2124;
}

/* Feature / statement headline (34–46px) — optional fluid */
.headline {
  font-size: clamp(1.6667rem, 2.5vw + 0.75rem, 2.5556rem); /* ~30px → 46px */
  line-height: 1.1;
}
```

> **Floors are recommendations**, derived to keep the hero readable on `≤640px` mobile; the **max values are canonical** (80px, 50px, 46px, 34px). Tune the middle `vw` term against the defined breakpoints — mobile ≤640, tablet 641–1024, desktop 1025–1479, wide ≥1480 — but never exceed the measured maxima.

---

## 6. Per-Element Usage Guidance

| Element | Role(s) to use | Font | Key details |
| --- | --- | --- | --- |
| **Hero headline** | Hero H1 | display | `#efefef` on dark video; `-0.0425em` tracking; settle-in reveal (opacity + translateY). One per page. |
| **Big section intros** | Big H2 (50px) | display | Ink `#1e2124` on light. Used to open major sections. |
| **Statement headline** (services / platform intro) | Statement 46px | display / body | Render in **grey `#636363`** — this is the deliberate muted intro treatment. Weight 400. |
| **Feature card title** | Feature H3 (34px, `--headline`) | display / body | Pairs with the `↳` learn-more arrow link and a short caption. |
| **Larger feature title** | Feature H3 large (46px) | display / body | For the higher-emphasis feature blocks. |
| **Section eyebrow / kicker** | Eyebrow (20px) | body or mono | If mono: UPPERCASE + `0.05em`. Sits above an H2/H3. |
| **Lead paragraphs** | Body large (20px) | body | Line-height `1.3`. Use sparingly for intro lede text. |
| **Default copy** | Body (18px) | body | Line-height `1.389`. The workhorse. |
| **Fine print / meta / footer links** | Body small (16px) | body | `#636363` for dimmed/secondary links. |
| **Client names · `/0.x` index · micro-labels** | Caption (10px) | **mono** | **UPPERCASE**, `0.05em`, weight 500. Color `#767676`/`#636363`. This is the signature label motif — testimonial client names, numbered index markers, earmark labels. |
| **Buttons** ("Get Started", split CTA) | Body 16px | body | Weight 400, **no transform**, sharp corners (radius 0), `0.8px` border. Big split-CTA labels are large grotesque with a right-aligned `→`. |
| **Footer social pills** | Body small, mono optional | body / mono | UPPERCASE labels (YOUTUBE, X, LINKEDIN, GITHUB, STORE) in the only rounded elements on the page. |

### 6.1 Arrow-glyph type convention

Arrows are part of the type language and should sit inline with the label text (mono or body) at the matching size:

| Glyph | Meaning | Used in |
| --- | --- | --- |
| `↗` | external / forward | Links out, featured cards |
| `↳` | drill-in / learn-more | Feature card links |
| `↖` | CTA prefix | Primary "Get Started" button |
| `→` | big CTA | Split CTA, right-aligned |

---

## 7. Color × Type Pairings (text colors only — full palette lives in the color doc)

| Text token | Hex | Typical type roles |
| --- | --- | --- |
| Ink / primary | `#1e2124` | Body, H2/H3 on light, button text |
| Ink medium | `#636363` | Statement headline (grey), secondary copy, dimmed footer links |
| Ink light | `#767676` | Caption / micro-labels |
| Off-white (on dark) | `#efefef` | Hero H1 over dark video, text in dark CTA/footer blocks |
| Accent (pine green) | `#2b5945` | Single restrained accent — links/markers only, never body |
| Blue (dark contexts) | `#4e8af7` | Accent **only** in dark/media contexts (hero glow) |

> Hover treatment for text/links: opacity `0.33` ⇒ effectively `rgba(30,33,36,0.33)`; pair with a `150–300ms` micro-transition and arrow `translateX` nudge.

---

## 8. Accessibility & Motion Notes

- **Contrast:** Ink `#1e2124` on `#ffffff` and `#efefef` on `#202426` both clear WCAG AA for body and large text. Use **ink-medium `#636363`** for the grey statement headline only at **large sizes (46px)** where AA-large applies; do not use `#767676` for small body copy on white at long lengths.
- **Caption legibility:** the `10px` mono caption is intentionally a micro-label — keep it short, UPPERCASE, `0.05em`; never set running body text at 10px.
- **`prefers-reduced-motion`:** keep type reveals as simple fades (drop translateY/parallax). Headline settle-in and arrow nudges should be suppressed or reduced. Type sizing/clamp is unaffected.
- **Variable fonts:** Space Grotesk and Geist are variable — prefer a single variable axis load over multiple static weights to keep the font payload small.

---

## 9. Quick Reference — canonical numbers

- Root: **18px** (`1rem = 18px`)
- Body: **18px / 25px (1.389)**, `#1e2124` on `#fff`
- Hero: **80px / 78px**, weight **400**, **`-3.4px`** (`-0.0425em`), `#efefef`, display font
- Display H2: **~50px** · Headline: **34px** (`--headline = 1.8889rem`) · Feature large / statement: **46px** (statement = grey `#636363`)
- Eyebrow / body-lg: **20px (1.1111rem)** · Body-sm: **16px (0.8889rem, 1.4286)** · Caption: **10px (0.5556rem, 1.6)** mono UPPERCASE `0.05em`
- Fonts: **display = Space Grotesk** · **body = Geist** · **mono = Geist Mono / JetBrains Mono** · serif accent (optional) = Fraunces
