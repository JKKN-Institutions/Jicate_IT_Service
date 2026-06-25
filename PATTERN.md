# PATTERN.md — How to build a page in this project

This document describes the **one structural pattern** every page in Jicate IT
Service follows. The rule is simple:

> **Same skeleton on every page. Different content + visual treatment per page.**

The home page (`app/page.tsx`) is the reference implementation. Read it once, and
this doc, and you can build About / Services / Contact / any page the same way —
without making them all look identical.

---

## 1. The mental model

A page is **not** a big custom layout. A page is an **ordered stack of
self-contained section components**, rendered inside the shared chrome.

```
RootLayout (app/layout.tsx)
└─ <SiteHeader/>          ← shared, every page
   <main>                 ← the page owns ONLY this
     <SectionA/>          ← a self-contained band
     <SectionB/>
     <SectionC/>
   </main>
   <Footer/>              ← shared, every page
```

The header, footer, fonts, and `<html>/<body>` come from the root layout. A page
file never touches them. A page file only decides **which sections stack, and in
what order**.

---

## 2. The five layers (where each kind of code lives)

| Layer | Folder | Responsibility | Example |
|-------|--------|----------------|---------|
| **1. Page (manifest)** | `app/<route>/page.tsx` | Imports sections, stacks them in order. No markup logic. | `app/page.tsx` |
| **2. Sections** | `components/<page>/` | One vertical band each. Composes primitives + content. | `components/home/Hero.tsx` |
| **3. UI primitives** | `components/ui/` | Reusable, page-agnostic building blocks. | `Section`, `Container`, `Grid` |
| **4. Content (data)** | `content/<page>.ts` | All copy/data as typed objects. No JSX. | `content/home.ts` |
| **5. Types** | `types/` | Shapes for the content objects. | `types/content.ts` |

**Golden rule:** copy lives in layer 4, never hardcoded in layer 2. Layout lives
in layer 3, never re-invented in layer 2. Layer 1 is just a list.

---

## 3. Layer 1 — the page file is a manifest

`app/page.tsx` (the home page) in full:

```tsx
import {
  Hero,
  ProductCarousel,
  StatementBand,
  OurSoftware,
  ManifestoBand,
  Testimonials,
  SplitCTA,
} from "@/components/home";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <ProductCarousel />
      <StatementBand />
      <OurSoftware />
      <ManifestoBand />
      <Testimonials />
      <SplitCTA />
    </main>
  );
}
```

That is the **entire** contract for a page file:

1. `import { ...sections } from "@/components/<page>"` (the barrel — see §4).
2. Return `<main className="flex-1">` wrapping the sections in visual order.
3. No `<div>` soup, no inline styles, no copy. If you're writing markup here,
   it belongs in a section component instead.

`flex-1` matters: the root `<body>` is `min-h-full flex flex-col`, so `main`
flexing to fill pushes the footer to the bottom on short pages.

### Optional: per-page metadata
A route can export its own `metadata` (title/description). The root layout sets a
title **template** (`%s | Jicate IT Service`), so a page only supplies the `%s`:

```tsx
export const metadata = { title: "About", description: "..." };
```

---

## 4. Layer 2 — sections, grouped per page, behind a barrel

Each page gets its **own folder** under `components/`, with an `index.ts` barrel
that re-exports every section:

```
components/
  home/
    Hero.tsx
    ProductCarousel.tsx
    StatementBand.tsx
    ...
    index.ts          ← export { Hero } from "./Hero"; ...
```

`components/home/index.ts`:

```ts
export { Hero } from "./Hero";
export { ProductCarousel } from "./ProductCarousel";
export { StatementBand } from "./StatementBand";
// ...one line per section
```

The barrel is what lets the page file do a single clean import. **Always add a new
section to the barrel** or the page can't import it.

### Anatomy of a section component

Every section follows the same shape. `StatementBand` is the minimal canonical
example:

```tsx
import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { softwareStatement } from "@/content/home";

export function StatementBand() {
  return (
    <Section tone="light" className="bg-canvas" aria-label="What our software does">
      <Reveal>
        <Container>
          <p className="mx-auto max-w-[24ch] text-center font-display ...">
            {softwareStatement.before}
            <span className="text-ink-light">{softwareStatement.highlight}</span>
            {softwareStatement.after}
          </p>
        </Container>
      </Reveal>
    </Section>
  );
}

export default StatementBand;
```

The repeating recipe:

1. **Outer `<Section>`** — owns the band: vertical rhythm, `tone`, background,
   and an `aria-label`.
2. **`<Reveal>`** (optional) — scroll-in fade/stagger. Wrap content that should
   animate on entry.
3. **`<Container>`** — the centered content rail (max-width + side padding).
   Omit it deliberately when a child must bleed to the viewport edge (see the
   "full-bleed" note below).
4. **Content** — pulled from `@/content/<page>`, never hardcoded.
5. Named export **and** a `default` export.

### Server-first, client at the leaf
Sections are **Server Components by default** (no `"use client"`). Only the
interactive sub-part hydrates. Pattern: the section is a server shell that renders
a small `"use client"` leaf for the interactive bit. Example — `Testimonials`
(server) renders the eyebrow + heading on the server and delegates the draggable
scroller to `<TestimonialRow>` (client). Keep `"use client"` as deep and as small
as possible.

### Full-bleed sections
When something must touch the viewport edge (edge-bleeding carousels, split CTAs),
render it **outside** `<Container>` and let it span full width. `SplitCTA` uses
`<Section className="!py-0">` with a `<Grid className="gap-0">` of two
edge-to-edge halves. `Testimonials` keeps its heading in a `<Container>` but
renders the scroller outside it so cards can peek past the rail.

---

## 5. Layer 3 — the UI primitives (this is the consistency engine)

These three primitives appear in almost every section. They are why pages share a
structure even when they look different. **Use them; do not hand-roll their
behavior with raw Tailwind.**

### `<Section>` — the band
`components/ui/Section.tsx`

```tsx
<Section tone="light" | "dark" as="section" className="..." id="..." />
```

- Applies the `.section` class → **60px top/bottom padding** (the global vertical
  rhythm, `--space-xl`).
- `tone="dark"` inverts the band to near-black surface + off-white text in one
  prop. `tone="light"` (default) leaves it on the canvas.
- `as` lets you change the tag (e.g. `as="header"`, `as="footer"`).
- Add `relative`, `overflow-hidden`, a specific `bg-*`, or padding overrides
  (`!py-0`) via `className`.

### `<Container>` — the centered rail
`components/ui/Container.tsx`

```tsx
<Container wide?>...</Container>
```

- Maps to `.h-contain`: **max-width 1440px** (or **1480px** with `wide`),
  centered, with a guaranteed **20px** side rail. Never set page max-width by
  hand — use this.

### `<Grid>` — the 12-column grid
`components/ui/Grid.tsx`

```tsx
<Grid className="gap-...">
  <div className="col-span-12 desktop:col-span-6">...</div>
</Grid>
```

- Maps to `.grid-12`: a real 12-column grid with the **measured
  `minmax(10px, 1fr)`** floor (NOT Tailwind's default `grid-cols-12`).
- Place children with `col-span-*` / `col-start-*`. Column gap 10px, row gap 20px
  by default.

### Other primitives in `components/ui/`
`Eyebrow`, `Button`, `IconButton`, `ArrowLink`, `Arrow`, `Logo`, `Metric`,
`NumberedIndex`, `DogEarCard`, `EarmarkGlyph`. Import from the barrel:

```ts
import { Section, Container, Grid, Eyebrow, Button } from "@/components/ui";
```

Motion lives in `components/motion/` (e.g. `<Reveal>`). The CSS contract is in
`globals.css` (`.reveal`, `.settle`) — components only toggle classes/data-attrs;
they never animate layout properties, only `opacity`/`transform`.

---

## 6. Layer 4 — content is data, separated from markup

All copy/data for a page lives in `content/<page>.ts` as **typed exported
objects/arrays**. Sections import named values; markup carries no literal copy.

`content/home.ts` (excerpt):

```ts
import type { Hero, SoftwareStatement /* ... */ } from "@/types";

export const hero: Hero = {
  eyebrow: "MANAGED IT · CLOUD · SECURITY",
  headline: "AI-Powered Automation for Every Decision",
  subcopy: "Jicate runs, secures, and modernizes ...",
  primaryCTA: { label: "Get Started", href: "/get-started", arrow: "cta" },
  // ...
};

export const softwareStatement: SoftwareStatement = {
  before: "We build ",
  highlight: "AI-driven",
  after: " software ...",
};
```

Why this matters for "different per page": to restyle or re-copy a page you edit
**one data file + the section's classes** — you never dig through tangled JSX.

**Shared data is defined once and reused.** Navigation/footer link arrays live in
`content/navigation.ts` and are imported by both the mega-menu and the footer, so
the IA stays in sync. Follow the same idea for any data two sections share.

---

## 7. Layer 5 — types

Content object shapes live in `types/` (e.g. `types/content.ts`,
`types/navigation.ts`), re-exported from `types/index.ts`. Import from `@/types`.
Every content export is annotated with its type (`export const hero: Hero = …`),
so a typo in copy structure fails at build time, not in the browser.

---

## 8. Design tokens — change visuals WITHOUT breaking the pattern

This is the key to "all pages visually different." The **structure** is fixed by
the primitives; the **look** is driven by tokens defined in `app/globals.css`
(Tailwind v4, CSS-first `@theme` — there is **no `tailwind.config.js`**). Vary the
look of a page by choosing different tokens, not by writing bespoke CSS.

> ⚠️ Root unit: **`1rem = 18px`** for the whole system. Do not change it.

### Color (use as `bg-*`, `text-*`, `border-*`)
- Ink (text on light): `ink`, `ink-medium`, `ink-light`
- Surfaces: `canvas` (#fff), `surface-light`, `surface-medium`, `band` (#efefef)
- Brand accent (pine green): `accent`, `accent-10`, `accent-5`, `accent-5-opaque`
- Dark context: `near-black`, `offwhite`, `blue` (dark-only accent — never on white)

### Spacing scale (use as `p-*`, `m-*`, `gap-*`)
`tiny` 3 · `xs` 10 · `s`/`m` 20 · `l` 40 · `xl` 60 · `2xl` 80 · `3xl` 120 (px).
Section padding is `xl` (60px) by default via `<Section>`.

### Type scale (use as `text-*`, pair with `font-display`/`font-body`/`font-mono`)
`hero` (40→80, fluid) · `display` (30→50) · `headline-lg` (28→46) ·
`headline` (24→34) · `eyebrow`/`body-lg` (20) · `body` (18) · `body-sm` (16) ·
`caption` (10). Display sizes are fluid `clamp()` — mobile-friendly floor up to the
canonical desktop value.

### Fonts
- `font-display` — Space Grotesk → big hero/section headlines
- `font-body` (default) — Geist → body + most headings
- `font-mono` — Geist Mono → UPPERCASE eyebrows/labels

### Breakpoints (mobile-first variants)
Base = mobile (≤640). `tablet:` (≥641) · `desktop:` (≥1025) · `wide:` (≥1480).

### Motion tokens
Durations `duration-micro-fast|micro|micro-slow|reveal|reveal-slow|reveal-max`,
eases `ease-out-quint|standard|out-soft`, `--stagger` 80ms. Honor
`prefers-reduced-motion` — the global CSS already resolves reveals to their final
state, so never trap content hidden.

**To make a page look distinct:** pick a different `tone` rhythm (e.g. lead with a
dark hero), a different background per band (`bg-canvas` vs `bg-band` vs
`bg-surface-light`), different type sizes, different grid splits. The skeleton is
identical; the palette/typography/rhythm choices make it its own page.

---

## 9. Recipe — add a new page (e.g. `/about`)

1. **Types** — add shapes in `types/content.ts` (only if the page needs new data
   shapes), export them from `types/index.ts`.
2. **Content** — create `content/about.ts` with typed exports for every section's
   copy/data.
3. **Sections** — create `components/about/` with one component per band, each:
   - a Server Component by default (`"use client"` only on interactive leaves),
   - built from `<Section>` / `<Container>` / `<Grid>` + primitives,
   - importing its copy from `@/content/about`,
   - wrapped in `<Reveal>` where entry animation is wanted,
   - with a named **and** default export.
4. **Barrel** — create `components/about/index.ts` re-exporting each section.
5. **Page** — create `app/about/page.tsx`: import the sections from
   `@/components/about` and stack them inside `<main className="flex-1">`.
   Optionally export `metadata`.
6. **Make it look different** — vary `tone`, per-band backgrounds, type scale, and
   grid layout using the tokens in §8. Do **not** introduce new ad-hoc CSS or a new
   max-width; reuse the primitives.

That's the whole pattern. Structure is inherited; identity is chosen.

---

## 10. Do / Don't

**Do**
- Keep page files as thin manifests.
- Build every band from `<Section>` + `<Container>`/`<Grid>`.
- Put all copy in `content/`, all shapes in `types/`.
- Reuse shared data arrays (don't duplicate nav/footer links).
- Style with tokens (`bg-band`, `text-ink`, `gap-l`, `text-headline-lg`).
- Keep `"use client"` at the smallest possible leaf.

**Don't**
- Hardcode copy inside JSX.
- Re-invent containers/grids/max-widths with raw Tailwind.
- Add a `tailwind.config.js` or new global CSS for one page — extend tokens in
  `globals.css` if a genuinely new token is needed.
- Make a page file render markup other than the section stack.
- Animate layout properties — only `opacity`/`transform`, via the motion CSS
  contract.
```

---

## TL;DR

`app/<route>/page.tsx` = an ordered list of section components inside
`<main className="flex-1">`. Each section lives in `components/<page>/`, is built
from the shared `<Section>/<Container>/<Grid>` primitives, pulls its copy from
`content/<page>.ts`, and is typed by `types/`. Pages stay **structurally
identical** and become **visually distinct** purely through token choices (tone,
background, type scale, grid, motion) defined in `app/globals.css`.
