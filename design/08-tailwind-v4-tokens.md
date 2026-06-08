# 08 — The Code Bridge: Tailwind CSS v4 Tokens

**Project:** Jicate IT Service — homepage clone
**Design language source:** palantir.com homepage (measured live)
**Scope:** Homepage only. Original Jicate content, Palantir design language replicated exactly.
**Stack:** Next.js 16.2.7 (App Router) · React 19.2.4 · Tailwind CSS v4 (CSS-first `@theme`, **no `tailwind.config.js`**) · TypeScript · `next/font` (Geist + Geist Mono already wired; this doc adds Space Grotesk).

> This is the **code bridge**: it turns the canonical measured tokens from docs **01 (color)**, **02 (typography)**, and **03 (layout/grid/spacing)** into a single, ready-to-paste `src/app/globals.css` plus the `layout.tsx` font wiring. Every value here is a **canonical measured token** — it must not contradict 01/02/03. If a value is not in those docs, it does not exist in this system. Copy the blocks in §3 and §4 verbatim and you have a working token layer.

---

## 1. Tailwind v4 specifics (read first)

Tailwind v4 is **CSS-first**. The mental model changed from v3 — do not reach for old patterns:

| Concern | Tailwind v3 (old) | **Tailwind v4 (this project)** |
| --- | --- | --- |
| Config | `tailwind.config.js` (JS) | **No config file.** Everything lives in CSS. |
| Import | `@tailwind base; @tailwind components; @tailwind utilities;` | **`@import "tailwindcss";`** (single line, top of `globals.css`) |
| Theme/tokens | `theme.extend` in JS | **`@theme { … }`** directive in CSS |
| Token → utility | JS keys (`colors.ink`) | CSS custom properties with **namespaced names** (`--color-ink` → `bg-ink`, `text-ink`, `border-ink`) |
| Content scanning | `content: [...]` globs | Automatic source detection (no config) |

**Key rules for the `@theme` block:**

- **Namespace prefixes generate utilities.** `--color-*` → color utilities (`bg-*`, `text-*`, `border-*`, `fill-*`, `ring-*`). `--font-*` → `font-*`. `--text-*` → `text-*` font-size utilities (with optional paired line-height). `--spacing-*` → spacing utilities (`p-*`, `m-*`, `gap-*`, `w-*`, `h-*`). `--breakpoint-*` → responsive variants (`tablet:`, `desktop:`, `wide:`). `--container-*` → `max-w-*`.
- **`@theme` vs `@theme inline`.** Use **`@theme inline`** when a token's value is *itself* a CSS variable that may be redefined elsewhere (e.g. `--font-display: var(--font-display)` coming from `next/font`, or a `--color-*` pointing at a `:root` var). `inline` makes Tailwind emit the *resolved reference* into the utility so it tracks the live variable instead of snapshotting its value at build time. This is exactly why docs 01–03 used `@theme inline`, and why the font tokens (which come from `next/font`) MUST be `inline`.
- **Two-layer pattern used in this project.** Raw canonical values live in `:root` as `--color-*` / `--space-*` / `--bp-*` etc.; the `@theme inline` block re-exposes them under Tailwind's namespaces. This keeps the source of truth in plain CSS variables (usable in hand-written CSS too) while still generating utilities. Docs 01–03 already follow this; §3 below consolidates them into one block.
- **`--text-*` line-height pairing.** In v4 you can attach a default line-height (and other props) to a font-size token with the `--text-{name}--line-height` companion key. Setting `--text-body: 1rem` and `--text-body--line-height: 1.389` makes `text-body` emit both `font-size` and `line-height`.
- **The `font-size: 18px` root is non-negotiable.** All `rem` math in docs 01–03 resolves on an **18px root** (`1rem = 18px`). It is set in `:root` below. Omit it and every `rem`-based size renders ~12.5% too small.

---

## 2. What this file wires up (token inventory)

Pulled directly from the canonical docs — no new values:

- **Color** (doc 01): ink scale, canvas/surfaces/band, accent pine green + tints, dark-context palette, functional/interaction. 15 tokens.
- **Typography** (doc 02): three font roles (display/body/mono) + nine `--text-*` sizes with line-heights.
- **Layout/grid/spacing** (doc 03): 8-step spacing scale, gutters, container max-widths, four breakpoints, nav height.

---

## 3. Ready-to-paste `globals.css`

Replace the entire contents of `src/app/globals.css` with the following. This **supersedes** the Create-Next-App starter (`--background`/`--foreground`, the `prefers-color-scheme: dark` flip, and the Arial body font are all intentionally removed per doc 01 §6 — this is a light site with deliberate per-section dark zones, not an OS-theme toggle).

```css
/* ============================================================
   Jicate IT Service — globals.css
   Tailwind CSS v4 (CSS-first @theme, no tailwind.config.js)
   All values are canonical measured tokens (docs 01/02/03).
   1rem = 18px  (root font-size below) — DO NOT change.
   ============================================================ */

@import "tailwindcss";

/* ----------------------------------------------------------------
   :root — raw canonical values (source of truth, plain CSS vars)
   ---------------------------------------------------------------- */
:root {
  /* Root unit — CRITICAL: 1rem = 18px for the whole system. */
  font-size: 18px;

  /* ---------- COLOR (doc 01) ---------- */
  /* Ink scale (text on light canvas) */
  --color-ink: #1e2124;            /* primary text, borders   rgb(30,33,36) */
  --color-ink-medium: #636363;     /* grey statement headlines, secondary   */
  --color-ink-light: #767676;      /* captions, meta                         */

  /* Light canvas / surfaces / band */
  --color-canvas: #ffffff;         /* page bg                                */
  --color-surface-medium: #f3f3f3; /* cards, testimonial cards               */
  --color-surface-light: #f9f9f9;  /* subtle fills, scrolled nav bar         */
  --color-band: #efefef;           /* light section bands, split-CTA light half */

  /* Accent — pine green (single brand color) */
  --color-accent: #2b5945;
  --color-accent-10: rgba(43, 89, 69, 0.10); /* tinted fill / hover wash      */
  --color-accent-5: rgba(43, 89, 69, 0.05);  /* very subtle wash              */
  --color-accent-5-opaque: #f4f7f6;          /* flattened 5% over white       */

  /* Dark-context palette (full-bleed dark media) */
  --color-near-black: #202426;     /* dark surfaces, hero overlay, inverse btn, announcement bar */
  --color-blue: #4e8af7;           /* dark-context accent / hero glow ONLY — never on white */
  --color-offwhite: #efefef;       /* text on dark; SAME value as --color-band */

  /* Functional & interaction */
  --color-error: #ff4136;
  --color-hover: rgba(30, 33, 36, 0.33); /* ink @ 33% opacity, hover-opacity = 0.33 */

  /* ---------- SPACING SCALE (doc 03) ---------- */
  --space-tiny: 3px;   /* 0.1667rem — hairline insets, optical tweaks */
  --space-xs:   10px;  /* 0.5556rem — tight padding; = gutter          */
  --space-s:    20px;  /* 1.1111rem — default gap, container padding; = v-gutter */
  --space-m:    20px;  /* 1.1111rem — alias of s                       */
  --space-l:    40px;  /* 2.2222rem — block separation, card padding   */
  --space-xl:   60px;  /* 3.3333rem — SECTION vertical spacing         */
  --space-2xl:  80px;  /* 4.4444rem — large section breaks            */
  --space-3xl:  120px; /* 6.6667rem — major full-bleed section padding */

  /* ---------- GRID & CONTAINER (doc 03) ---------- */
  --grid-columns: 12;
  --gutter: 10px;            /* 0.5556rem — column gap (= space-xs)     */
  --v-gutter: 20px;          /* 1.1111rem — row gap / h-spacing (= space-s) */
  --max-width: 1440px;       /* 80rem — primary content max width       */
  --max-width-wide: 1480px;  /* alt wide variant                        */
  --container-pad: 20px;     /* 1.1111rem — min side padding            */

  /* ---------- STRUCTURAL (doc 03) ---------- */
  --nav-height: 86px;
  --section-space: 60px;     /* = --space-xl */

  /* ---------- BREAKPOINTS (doc 03) ---------- */
  --bp-mobile: 640px;        /* <= 640   : mobile  */
  --bp-tablet: 1024px;       /* 641–1024 : tablet  */
  --bp-desktop: 1479px;      /* 1025–1479: desktop */
  --bp-wide: 1480px;         /* >= 1480  : wide    */
}

/* ----------------------------------------------------------------
   @theme inline — map raw vars to Tailwind v4 namespaces.
   `inline` so font tokens track the live next/font variables and
   color tokens track the :root values (no build-time snapshot).
   ---------------------------------------------------------------- */
@theme inline {
  /* ----- Colors → bg-*, text-*, border-*, fill-*, ring-* ----- */
  --color-ink:             var(--color-ink);
  --color-ink-medium:      var(--color-ink-medium);
  --color-ink-light:       var(--color-ink-light);
  --color-canvas:          var(--color-canvas);
  --color-surface-medium:  var(--color-surface-medium);
  --color-surface-light:   var(--color-surface-light);
  --color-band:            var(--color-band);
  --color-accent:          var(--color-accent);
  --color-accent-10:       var(--color-accent-10);
  --color-accent-5:        var(--color-accent-5);
  --color-accent-5-opaque: var(--color-accent-5-opaque);
  --color-near-black:      var(--color-near-black);
  --color-blue:            var(--color-blue);
  --color-offwhite:        var(--color-offwhite);
  --color-error:           var(--color-error);
  --color-hover:           var(--color-hover);

  /* ----- Fonts → font-* (values come from next/font in layout.tsx) ----- */
  --font-body:    var(--font-geist-sans); /* Geist        -> Alliance No.1 (body, most headings) */
  --font-display: var(--font-display);    /* Space Grotesk -> Alliance No.2 (hero, big display)  */
  --font-mono:    var(--font-geist-mono); /* Geist Mono   -> Apercu Mono   (UPPERCASE labels)     */
  /* Keep v4's default --font-sans pointing at the body face so unprefixed sans text matches: */
  --font-sans:    var(--font-geist-sans);

  /* ----- Type scale → text-* (size + paired line-height) ----- */
  /* px @18px root in comments; line-heights from doc 02 §4.      */
  --text-hero:                  4.4444rem; /* 80px  */
  --text-hero--line-height:     0.975;     /* 78/80 */
  --text-display:               2.7778rem; /* 50px  (big section H2)  */
  --text-display--line-height:  1.05;
  --text-headline:              1.8889rem; /* 34px  (--headline / feature H3) */
  --text-headline--line-height: 1.1;
  --text-headline-lg:           2.5556rem; /* 46px  (feature large + statement) */
  --text-headline-lg--line-height: 1.1;
  --text-eyebrow:               1.1111rem; /* 20px  (eyebrow / kicker) */
  --text-eyebrow--line-height:  1.3;
  --text-body-lg:               1.1111rem; /* 20px  (lead paragraphs)  */
  --text-body-lg--line-height:  1.3;
  --text-body:                  1rem;      /* 18px  (default copy)     */
  --text-body--line-height:     1.389;     /* 25px                     */
  --text-body-sm:               0.8889rem; /* 16px  (fine print/meta)  */
  --text-body-sm--line-height:  1.4286;
  --text-caption:               0.5556rem; /* 10px  (mono micro-label) */
  --text-caption--line-height:  1.6;

  /* ----- Spacing → p-*, m-*, gap-*, w-*, h-* ----- */
  --spacing-tiny: var(--space-tiny);
  --spacing-xs:   var(--space-xs);
  --spacing-s:    var(--space-s);
  --spacing-m:    var(--space-m);
  --spacing-l:    var(--space-l);
  --spacing-xl:   var(--space-xl);
  --spacing-2xl:  var(--space-2xl);
  --spacing-3xl:  var(--space-3xl);
  --spacing-nav:  var(--nav-height); /* 86px — for h-nav, top-nav, scroll offsets */

  /* ----- Container max-width → max-w-content / max-w-wide ----- */
  --container-content: var(--max-width);      /* 1440px */
  --container-wide:    var(--max-width-wide);  /* 1480px */

  /* ----- Breakpoints → tablet: / desktop: / wide: variants ----- */
  /* min-width, mobile-first. Mobile (<=640) is the unprefixed base. */
  --breakpoint-tablet:  641px;  /* 641–1024 */
  --breakpoint-desktop: 1025px; /* 1025–1479 */
  --breakpoint-wide:    1480px; /* >= 1480 */
}

/* ----------------------------------------------------------------
   Base layer — body defaults (doc 02 §1)
   ---------------------------------------------------------------- */
@layer base {
  body {
    font-family: var(--font-body);   /* Geist */
    font-size: 1rem;                 /* 18px */
    line-height: 1.389;              /* 25px */
    color: var(--color-ink);         /* #1e2124 */
    background: var(--color-canvas); /* #ffffff */
    -webkit-font-smoothing: antialiased;
  }
}

/* ----------------------------------------------------------------
   Layout helpers (doc 03 §9) — plain CSS (utility-class friendly)
   ---------------------------------------------------------------- */

/* Centered container: max 1440px, guaranteed 20px side rail. */
.h-contain {
  width: 100%;
  margin-inline: auto;
  max-width: var(--max-width);
  padding-inline: max((100% - var(--max-width)) / 2, var(--container-pad));
}
.h-contain--wide { max-width: var(--max-width-wide); } /* 1480px */

/* 12-col grid with the MEASURED minmax(10px,1fr) floor — NOT Tailwind's
   default grid-cols-12 (which is minmax(0,1fr)). Use this class, then
   place children with col-span-* / col-start-* utilities. */
.grid-12 {
  display: grid;
  grid-template-columns: repeat(12, minmax(10px, 1fr));
  column-gap: var(--gutter);  /* 10px */
  row-gap: var(--v-gutter);   /* 20px */
}

/* Standard section vertical rhythm: 60px (space-xl). */
.section { padding-block: var(--section-space); }

/* ----------------------------------------------------------------
   Reduced motion (doc honors motion foundations: disable autoplay,
   parallax, scroll-pinning; keep simple fades).
   ---------------------------------------------------------------- */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

> Why no `@media (prefers-color-scheme: dark)` block: per doc 01 §6, the dark-context palette is **not** wired to OS dark mode. This is a light site with deliberate full-bleed dark *sections*. Apply dark styling per-section (a `.is-dark` wrapper or `bg-near-black text-offwhite`), never globally.

---

## 4. `next/font` wiring for `layout.tsx`

Keep the existing **Geist** + **Geist Mono** and **add Space Grotesk** as the display font, exposing `--font-display` (doc 02 §3). Space Grotesk is the closest free match to Alliance No.2's peaked-apex character and is available via `next/font/google`.

```tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import { siteConfig } from "@/config/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans", // -> --font-body / --font-sans
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono", // -> --font-mono
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",    // -> --font-display (hero + big display)
  subsets: ["latin"],
  weight: ["400", "500", "700"], // 400 carries the hero; 500/700 for emphasis
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
```

**How the variables connect:** `next/font` injects `--font-geist-sans`, `--font-geist-mono`, and `--font-display` onto `<html>`. The `@theme inline` block in §3 maps them to `--font-body`, `--font-mono`, and `--font-display`, generating the `font-body` / `font-mono` / `font-display` utilities. The `inline` keyword is what lets the utility resolve the live `next/font` variable rather than snapshotting an empty value at build time.

---

## 5. Generated utility cheat-sheet

Every token in §3 produces utilities under its namespace. Common ones:

### 5.1 Color (`--color-*`)

| Utility examples | Token | Value | Context |
| --- | --- | --- | --- |
| `text-ink` `border-ink` | `--color-ink` | `#1e2124` | light: primary text + `0.8px` borders |
| `text-ink-medium` | `--color-ink-medium` | `#636363` | light: grey statement headline, secondary |
| `text-ink-light` | `--color-ink-light` | `#767676` | light: captions, micro-labels |
| `bg-canvas` | `--color-canvas` | `#ffffff` | light: page bg |
| `bg-surface-medium` | `--color-surface-medium` | `#f3f3f3` | light: cards |
| `bg-surface-light` | `--color-surface-light` | `#f9f9f9` | light: scrolled nav bar |
| `bg-band` | `--color-band` | `#efefef` | light: section bands, split-CTA light half |
| `text-accent` `bg-accent` `border-accent` | `--color-accent` | `#2b5945` | light: single brand accent (links/markers) |
| `bg-accent-10` | `--color-accent-10` | `rgba(43,89,69,0.10)` | light: hover wash / selected fill |
| `bg-accent-5` | `--color-accent-5` | `rgba(43,89,69,0.05)` | light: subtle wash |
| `bg-accent-5-opaque` | `--color-accent-5-opaque` | `#f4f7f6` | light: flat tint over imagery |
| `bg-near-black` | `--color-near-black` | `#202426` | dark: hero overlay, dark CTA, footer, inverse btn, announcement bar |
| `text-blue` | `--color-blue` | `#4e8af7` | **dark only**: hero glow / accent — never on white |
| `text-offwhite` | `--color-offwhite` | `#efefef` | dark: hero H1 + body on dark |
| `text-error` | `--color-error` | `#ff4136` | functional: form errors (pair with icon/label) |
| `text-hover` (or opacity) | `--color-hover` | `rgba(30,33,36,0.33)` | interaction: transient hover, never resting text |

### 5.2 Type (`--font-*`, `--text-*`)

| Utility | Token | Resolves to |
| --- | --- | --- |
| `font-body` | `--font-body` | Geist (default body face) |
| `font-display` | `--font-display` | Space Grotesk (hero / big headings) |
| `font-mono` | `--font-mono` | Geist Mono (UPPERCASE labels, `/0.x` index) |
| `text-hero` | `--text-hero` | `80px` / line-height `0.975` |
| `text-display` | `--text-display` | `50px` / `1.05` |
| `text-headline` | `--text-headline` | `34px` / `1.1` (`--headline`) |
| `text-headline-lg` | `--text-headline-lg` | `46px` / `1.1` (feature large + statement) |
| `text-eyebrow` | `--text-eyebrow` | `20px` / `1.3` |
| `text-body-lg` | `--text-body-lg` | `20px` / `1.3` |
| `text-body` | `--text-body` | `18px` / `1.389` |
| `text-body-sm` | `--text-body-sm` | `16px` / `1.4286` |
| `text-caption` | `--text-caption` | `10px` / `1.6` (mono UPPERCASE) |

### 5.3 Spacing (`--spacing-*`) — works on `p-*`, `m-*`, `gap-*`, `w-*`, `h-*`, `top-*`, etc.

| Utility | Token | Value |
| --- | --- | --- |
| `p-tiny` `gap-tiny` | `--spacing-tiny` | `3px` |
| `p-xs` `gap-xs` | `--spacing-xs` | `10px` (= gutter) |
| `p-s` `gap-s` | `--spacing-s` | `20px` (= v-gutter, container pad) |
| `p-m` `gap-m` | `--spacing-m` | `20px` (alias of s) |
| `p-l` `gap-l` | `--spacing-l` | `40px` |
| `py-xl` | `--spacing-xl` | `60px` (section rhythm) |
| `py-2xl` | `--spacing-2xl` | `80px` |
| `py-3xl` | `--spacing-3xl` | `120px` |
| `h-nav` `top-nav` | `--spacing-nav` | `86px` (nav height / sticky offset) |

### 5.4 Container & breakpoints

| Utility | Token | Value |
| --- | --- | --- |
| `max-w-content` | `--container-content` | `1440px` |
| `max-w-wide` | `--container-wide` | `1480px` |
| `tablet:` prefix | `--breakpoint-tablet` | min-width `641px` |
| `desktop:` prefix | `--breakpoint-desktop` | min-width `1025px` |
| `wide:` prefix | `--breakpoint-wide` | min-width `1480px` |

> Mobile (`<= 640px`) is the **unprefixed base** — author mobile-first, then add `tablet:` / `desktop:` / `wide:` overrides.

---

## 6. Usage examples

### 6.1 Centered container + 12-col grid

The measured grid (`minmax(10px, 1fr)`) is the `.grid-12` helper class, **not** Tailwind's `grid-cols-12` (which uses a `minmax(0,1fr)` floor). Compose the class with `col-span-*` utilities:

```tsx
<section className="section">                {/* 60px vertical rhythm */}
  <div className="h-contain grid-12">         {/* centered 1440px, measured 12-col grid */}
    <h2 className="col-span-12 desktop:col-start-3 desktop:col-span-8
                   font-display text-display text-ink">
      Run your business on infrastructure you can trust
    </h2>
    {/* three-up feature cards: full width on mobile, 3-across on desktop */}
    <article className="col-span-12 tablet:col-span-6 desktop:col-span-4">…</article>
    <article className="col-span-12 tablet:col-span-6 desktop:col-span-4">…</article>
    <article className="col-span-12 tablet:col-span-6 desktop:col-span-4">…</article>
  </div>
</section>
```

### 6.2 Type / role classes

```tsx
{/* Hero H1 — display face, off-white on dark, measured negative tracking */}
<h1 className="font-display text-hero text-offwhite tracking-[-0.0425em]">
  Managed IT that keeps Jicate clients always on
</h1>

{/* Statement headline — large, deliberately GREY (ink-medium), weight 400 */}
<p className="font-display text-headline-lg font-normal text-ink-medium">
  We design, secure, and operate the systems your teams depend on.
</p>

{/* Mono UPPERCASE micro-label / numbered index motif (10px, 0.05em) */}
<span className="font-mono text-caption uppercase tracking-[0.05em] text-ink-light">
  /0.2&nbsp;&nbsp;Cloud &amp; Infrastructure
</span>

{/* Default body copy (18px / 25px) inherits from <body>; explicit if needed: */}
<p className="font-body text-body text-ink">…</p>
```

> The hero's `-3.4px` tracking is expressed as the `em` arbitrary value `tracking-[-0.0425em]` so it survives fluid scaling (doc 02 §5). For fluid hero sizing use an arbitrary `text-[clamp(...)]` value per doc 02 §5; the `text-hero` token holds the canonical 80px max.

### 6.3 Accent usage (light context only)

```tsx
{/* Brand accent as a link/marker — pine green, never body text */}
<a className="text-accent hover:text-hover transition-colors duration-200">
  Explore services <span aria-hidden>↳</span>
</a>

{/* Selected / active wash using the 10% tint */}
<li className="bg-accent-10 border-l-2 border-accent px-s py-xs">Active item</li>
```

### 6.4 Full-bleed dark section (per-section dark, not global)

```tsx
{/* Background spans viewport; content re-contained. Blue allowed here ONLY. */}
<section className="section bg-near-black text-offwhite py-3xl">
  <div className="h-contain grid-12">
    <h2 className="col-span-12 font-display text-display text-offwhite">
      Ready when you are
    </h2>
    {/* big split CTA: light half + black half, sharp corners */}
    <a className="col-span-12 tablet:col-span-6 bg-band text-ink p-l flex justify-between">
      <span className="text-headline">Talk to our team</span><span aria-hidden>→</span>
    </a>
    <a className="col-span-12 tablet:col-span-6 bg-near-black text-offwhite border border-offwhite p-l flex justify-between">
      <span className="text-headline">Start a project</span><span aria-hidden>→</span>
    </a>
  </div>
</section>
```

### 6.5 Primary button (sharp corners, 0.8px border)

```tsx
{/* Get Started: white bg, ink text, 0.8px ink border, radius 0, no transform */}
<button className="bg-canvas text-ink border-[0.8px] border-ink rounded-none
                   px-xs py-xs text-body-sm font-normal
                   hover:bg-ink hover:text-canvas transition-colors duration-200">
  <span aria-hidden>↖</span> Get Started
</button>
```

> **Shape rule (doc on components/motifs):** `rounded-none` everywhere except footer social pills. Borders are the thin `0.8px` hairline — use the arbitrary `border-[0.8px]` value since Tailwind's named border widths are integer px.

### 6.6 Sticky element pinned below the nav

```tsx
{/* Scroll-pinned services list pins just under the 86px nav. */}
<div className="sticky top-nav">…/0.x numbered list…</div>
```

---

## 7. Consistency contract (this file vs 01/02/03)

This doc introduces **no new values**. Cross-checks:

| Concern | Source doc | This file matches? |
| --- | --- | --- |
| Color tokens & names (`--color-ink` … `--color-hover`) | 01 §6 | Yes — identical names + values |
| `prefers-color-scheme` removed (light site) | 01 §6 | Yes — no OS dark block |
| Font roles & substitutes (Geist / Space Grotesk / Geist Mono) | 02 §3 | Yes — `--font-body/display/mono` |
| Type scale + line-heights | 02 §4 / §4.1 | Yes — `--text-*` with `--text-*--line-height` |
| Hero tracking `-0.0425em` | 02 §4/§5 | Yes — example uses `tracking-[-0.0425em]` |
| Root `18px` (`1rem = 18px`) | 02 §1 / 03 §1 | Yes — `:root { font-size: 18px }` |
| Spacing scale `3/10/20/20/40/60/80/120` | 03 §4 | Yes — `--space-*` + `--spacing-*` |
| Grid `repeat(12, minmax(10px, 1fr))`, gaps 10/20 | 03 §2 | Yes — `.grid-12` helper |
| Container `1440px` / `1480px`, `max(...,20px)` pad | 03 §3 | Yes — `.h-contain` |
| Breakpoints 641 / 1025 / 1480 (mobile-first) | 03 §7 | Yes — `--breakpoint-*` |
| Nav height `86px` | 03 §8 | Yes — `--nav-height` / `--spacing-nav` |

---

## 8. Engineer checklist

- [ ] `src/app/globals.css` starts with `@import "tailwindcss";` (single line) — no `@tailwind` directives, no `tailwind.config.js`.
- [ ] `:root { font-size: 18px }` is present and first.
- [ ] All 15 color tokens, the 9 `--text-*` sizes (with line-heights), 8 spacing steps, container max-widths, 3 breakpoints, and nav height are in `@theme inline`.
- [ ] Font tokens use `@theme inline` so they track the live `next/font` variables.
- [ ] `layout.tsx` adds `Space_Grotesk` with `variable: "--font-display"` and appends `${spaceGrotesk.variable}` to the `<html>` className.
- [ ] No `@media (prefers-color-scheme: dark)` global flip; dark styling is per-section (`bg-near-black text-offwhite`).
- [ ] Use `.grid-12` (measured `minmax(10px,1fr)`) for the grid, not `grid-cols-12`.
- [ ] Blue (`text-blue`) appears only inside dark/media sections.
- [ ] Corners `rounded-none` except footer social pills; borders `border-[0.8px]`.
- [ ] Every value traces to a canonical token in docs 01/02/03 — nothing invented.
```
