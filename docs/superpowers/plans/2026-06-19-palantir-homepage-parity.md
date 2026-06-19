# Palantir Homepage Parity Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Bring the Jicate homepage to parity with the live `palantir.com` homepage — add the numbered "Our Software" offerings section with interactive video previews, and swap the manifesto / testimonials / final-CTA / footer-locale content to the reference's verbatim text.

**Architecture:** Next.js App Router page composed of section components fed by typed content modules in `content/`. New work mirrors existing patterns exactly: a `content/offerings.ts` data module (like `content/showcase.ts`) and a client `OurSoftware` section component (like `ServicesScrolly`) using the established `useActiveStep` / `useReducedMotion` / `useHydrated` progressive-enhancement hooks. Content-only changes edit `content/home.ts` and `content/navigation.ts`.

**Tech Stack:** Next.js 16.2.7 (App Router), React 19.2.4, Tailwind CSS v4 (CSS-first `@theme`, **no** `tailwind.config.js`), TypeScript, `next/font` (Geist / Geist Mono / Space Grotesk), `lucide-react`.

## Global Constraints

- **Non-standard Next.js:** `AGENTS.md` requires reading the relevant guide under `node_modules/next/dist/docs/` before writing code — APIs may differ from training data. Server vs Client Components: `node_modules/next/dist/docs/01-app/01-getting-started/05-server-and-client-components.md`.
- **No test framework exists.** Scripts are only `dev` / `build` / `lint`. The verification cycle for every task is: `npm run lint` + `npm run build` (this is the typecheck) + a DOM assertion on `npm run dev` via Chrome DevTools. There is no `npm test`.
- **Canonical design tokens only** (`design/01`–`08`): never invent a color/size/weight/duration. Pine-green accent `#2b5945` (`text-accent`), near-black `#202426` (`bg-near-black`), off-white `#efefef` (`text-offwhite`), ink `#1e2124` (`text-ink`). Sharp corners (`radius 0`) everywhere except footer social pills; `0.8px` borders.
- **SSR / hydration discipline:** use the existing `useHydrated` `useSyncExternalStore` trick (server snapshot `false`, client `true`) — never `setState` in an effect for hydration. Gate all JS-initiated motion behind `useReducedMotion`. Both SSR and client must render the same semantic markup.
- **Content is Palantir-verbatim scaffolding** (explicit user decision). Hot-link Palantir's CDN with absolute URLs, mirroring `content/showcase.ts`. Add the same IP header comment to new content files. This is prototyping fidelity, not production brand content — to be swapped before a real launch.
- **Strict parity:** the live reference has **no** standalone Impact band and **no** announcement strip. Keep `FeaturedCaseStudy`, `ServicesSlider`, `ServicesScrolly`, and `AnnouncementBar` in the repo but **unmounted**. Do not delete them.
- **Commit** at the end of every task. Branch is already `feature/palantir-homepage-parity`.

---

### Task 1: Offerings data layer

Adds the typed content module for the five products, reproduced verbatim from the reference with hot-linked CDN videos (normalized to absolute `https://www.palantir.com/...` and `?format=mp4` for cross-browser playback, mirroring `content/showcase.ts`).

**Files:**
- Modify: `types/content.ts` (add the `Offering` interface)
- Create: `content/offerings.ts`

**Interfaces:**
- Produces: `interface Offering { index: string; name: string; tagline: string; href: string; video: string; poster?: string; }`
- Produces: `export const offerings: Offering[]` and `export const ourSoftwareHeading: string` from `@/content/offerings`.

- [ ] **Step 1: Add the `Offering` type**

In `types/content.ts`, append after the existing `ShowcaseCard` / `Showcase` interfaces (end of file):

```ts
export interface Offering { index: string; name: string; tagline: string; href: string; video: string; poster?: string; }
```

(`types/index.ts` already re-exports everything via `export * from "./content"`, so no barrel change is needed.)

- [ ] **Step 2: Create the offerings content module**

Create `content/offerings.ts`:

```ts
/**
 * "Our Software" offerings content.
 *
 * NOTE: Placeholder content reproduced verbatim from Palantir's homepage
 * "Our Software" section — names, taglines, links, and video previews all
 * point at palantir.com / its CDN. Swap these for original Jicate offerings
 * before launch.
 *
 * Video normalization: the reference serves previews as site-relative
 * `/assets/{spaceId}/…/*.mov` paths (some already `?format=mp4`). We use the
 * absolute `https://www.palantir.com/...` form and force `?format=mp4` on all
 * five so they decode in browsers that won't play raw QuickTime `.mov`.
 */
import type { Offering } from "@/types";

export const ourSoftwareHeading = "Our Software";

export const offerings: Offering[] = [
  {
    index: "/0.1",
    name: "AIP",
    tagline: "Automate operations, from the factory floor to the front lines",
    href: "https://www.palantir.com/platforms/aip/",
    video:
      "https://www.palantir.com/assets/xrfr7uokpv1b/1ZAGlJWcYtVmMckdqFKUNW/7ff05eda0bd3471eba68c522caa32872/homepage_-_AIP.mov?format=mp4",
  },
  {
    index: "/0.2",
    name: "Gotham",
    tagline: "Achieve AI-driven combat superiority, from space to mud",
    href: "https://www.palantir.com/platforms/gotham/",
    video:
      "https://www.palantir.com/assets/xrfr7uokpv1b/6pvakzOU4AhfZjrgbrRXr9/ed5bb90509c20aa199058c74b3d7efd0/homepage_-_Gotham.mov?format=mp4",
  },
  {
    index: "/0.3",
    name: "Foundry",
    tagline:
      "Build and manage Ontology-powered software, with a complete developer platform",
    href: "https://www.palantir.com/platforms/foundry/",
    video:
      "https://www.palantir.com/assets/xrfr7uokpv1b/2yuGstJPCnqZBe7DOcOVNx/85275c8cb70fef128d8eda7af4900690/homepage_-_Foundry.mov?format=mp4",
  },
  {
    index: "/0.4",
    name: "Ontology",
    tagline: "The central system for orchestrating decisions across Human+AI teams",
    href: "https://www.palantir.com/platforms/ontology/",
    video:
      "https://www.palantir.com/assets/xrfr7uokpv1b/727o8CbUwqHs2hTt02hIiO/cf08155d0843b07849af7d85c8e1aac0/Ontology.mov?format=mp4",
  },
  {
    index: "/0.5",
    name: "Apollo",
    tagline:
      "Autonomously deploy, monitor, and manage software across any environment",
    href: "https://www.palantir.com/platforms/apollo/",
    video:
      "https://www.palantir.com/assets/xrfr7uokpv1b/4hKQ7uw6vsjxrlntoFav6k/d9ea76812927c7b04539acc5463d3300/homepage_-_Apollo.mov?format=mp4",
  },
];
```

- [ ] **Step 3: Verify it typechecks**

Run: `npm run build`
Expected: build SUCCEEDS (compiles + typechecks). The new module is not imported yet, so no behavior change — this only proves the type + content compile.

- [ ] **Step 4: Commit**

```bash
git add types/content.ts content/offerings.ts
git commit -m "Add Offering type and verbatim offerings content"
```

---

### Task 2: `OurSoftware` section component + mount it

Builds the numbered `/0.1`–`/0.5` offerings list with an interactive video preview per product, then swaps it in for `ServicesSlider` on the page. Mirrors `ServicesScrolly`'s progressive-enhancement contract: a plain stacked list at baseline / under reduced motion; scroll-spy active-item highlighting + active-video playback once hydrated.

**Files:**
- Create: `components/home/OurSoftware.tsx`
- Modify: `components/home/index.ts` (export `OurSoftware`)
- Modify: `app/page.tsx` (render `OurSoftware` in place of `ServicesSlider`)

**Interfaces:**
- Consumes: `offerings`, `ourSoftwareHeading` from `@/content/offerings` (Task 1); `useActiveStep(count) → { activeIndex, registerStep }`, `useReducedMotion() → boolean`; `Container`, `Eyebrow`, `NumberedIndex` from `@/components/ui`.
- Produces: `export function OurSoftware()` (and default export).

- [ ] **Step 1: Read the Server/Client Components guide**

Read `node_modules/next/dist/docs/01-app/01-getting-started/05-server-and-client-components.md` (per `AGENTS.md`). Confirm the `"use client"` directive convention used by `ServicesScrolly.tsx` still applies. This component must be a Client Component (it uses effects + refs).

- [ ] **Step 2: Create the component**

Create `components/home/OurSoftware.tsx`:

```tsx
"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";

import { cn } from "@/lib/utils";
import { offerings, ourSoftwareHeading } from "@/content/offerings";
import { Container, Eyebrow, NumberedIndex } from "@/components/ui";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useActiveStep } from "@/hooks/useActiveStep";

/** Hydration flag without setState-in-effect: server snapshot `false`,
 *  client snapshot `true` (same trick as ServicesScrolly / ServicesSlider). */
const noopSubscribe = () => () => {};
function useHydrated(): boolean {
  return useSyncExternalStore(noopSubscribe, () => true, () => false);
}

/**
 * "Our Software" — the numbered /0.1–/0.5 offerings list (reference: Palantir
 * homepage "Our Software"). Each product shows a looping muted video preview.
 *
 * Progressive enhancement:
 *  - Baseline (no JS / prefers-reduced-motion): a plain stacked list; every
 *    product fully legible; videos sit paused on their first frame (preload
 *    "metadata"), nothing dimmed.
 *  - Enhanced: a scroll-spy (useActiveStep, viewport-center band) marks the
 *    centered product active — its index lights to the accent, siblings dim,
 *    and only the active product's video plays (others pause).
 */
export function OurSoftware() {
  const reducedMotion = useReducedMotion();
  const hydrated = useHydrated();
  const { activeIndex, registerStep } = useActiveStep(offerings.length);
  const enhanced = hydrated && !reducedMotion;

  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  // Play the active offering's video; pause the rest. Inert until enhanced.
  useEffect(() => {
    if (!enhanced) return;
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === activeIndex) {
        void video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [enhanced, activeIndex]);

  return (
    <section className="section bg-canvas" aria-label={ourSoftwareHeading}>
      <Container>
        <Eyebrow as="h2" size="eyebrow" className="font-display text-headline-lg font-normal text-ink">
          {ourSoftwareHeading}
        </Eyebrow>

        <ol className="mt-2xl grid gap-2xl">
          {offerings.map((item, i) => {
            const active = enhanced ? i === activeIndex : undefined;
            const dimmed = active === false;
            return (
              <li
                key={item.index}
                ref={enhanced ? registerStep(i) : undefined}
                className={cn(
                  "grid items-center gap-l desktop:grid-cols-[3fr_4fr]",
                  "transition-opacity duration-[var(--duration-reveal)] ease-[var(--ease-out-quint)] motion-reduce:transition-none",
                  dimmed && "opacity-40",
                )}
              >
                {/* Text */}
                <div className="flex flex-col gap-s">
                  <div className="flex items-center gap-s">
                    <NumberedIndex value={item.index} active={active} />
                    <span className="font-mono text-caption uppercase tracking-[0.05em] text-ink-light">
                      {item.name}
                    </span>
                  </div>
                  <h3 className="font-display text-headline text-ink max-w-[18ch]">
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="transition-opacity duration-200 hover:opacity-[0.66]"
                    >
                      {item.tagline}
                    </a>
                  </h3>
                </div>

                {/* Video preview */}
                <div className="aspect-video w-full overflow-hidden bg-near-black">
                  <video
                    ref={(el) => {
                      videoRefs.current[i] = el;
                    }}
                    className="h-full w-full object-cover"
                    src={item.video}
                    poster={item.poster}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-label={`${item.name} preview`}
                  />
                </div>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}

export default OurSoftware;
```

> Note: `Eyebrow` accepts `as` + `size` + `className` (see `components/ui/Eyebrow.tsx` — `EyebrowProps`). If `as`/`size` don't exist with those names, open `components/ui/Eyebrow.tsx` and use its real props; the heading must render as an `<h2>` with the display style. Plain `<video>` (not `next/image`) is intentional and needs no `next.config` change — same rationale as `ProductCarousel`'s `<img>`.

- [ ] **Step 3: Export the component**

In `components/home/index.ts`, add (keep alphabetical-ish grouping near the other services exports):

```ts
export { OurSoftware } from "./OurSoftware";
```

- [ ] **Step 4: Mount it on the page (replace `ServicesSlider`)**

In `app/page.tsx`, change the import and the render so `OurSoftware` takes `ServicesSlider`'s slot:

```tsx
import {
  Hero,
  ProductCarousel,
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
      <OurSoftware />
      <ManifestoBand />
      <Testimonials />
      <SplitCTA />
    </main>
  );
}
```

(`ServicesSlider` stays exported from `index.ts` and on disk — just no longer rendered.)

- [ ] **Step 5: Verify build + lint**

Run: `npm run build` then `npm run lint`
Expected: both SUCCEED. No "ServicesSlider is defined but never used" error (it's removed from `page.tsx`'s import). If lint flags the `<video>` element, it is valid — no `no-img-element` rule applies to `<video>`.

- [ ] **Step 6: Verify in the browser (DOM assertion)**

Start the dev server: `npm run dev` (background). Then, using Chrome DevTools MCP, navigate to `http://localhost:3000/` and run this assertion script:

```js
() => {
  const txt = (s) => (s||'').replace(/\s+/g,' ').trim();
  const sec = Array.from(document.querySelectorAll('section')).find(s => /Our Software/i.test(txt(s.textContent)));
  const items = sec ? Array.from(sec.querySelectorAll('li')) : [];
  const vids = sec ? sec.querySelectorAll('video').length : 0;
  const indices = items.map(li => (txt(li.textContent).match(/\/0\.[1-5]/)||[])[0]).filter(Boolean);
  return { found: !!sec, itemCount: items.length, videoCount: vids, indices, names: items.map(li => txt(li.querySelector('span')?.textContent)) };
}
```

Expected: `{ found: true, itemCount: 5, videoCount: 5, indices: ["/0.1","/0.2","/0.3","/0.4","/0.5"], names: ["AIP","Gotham","Foundry","Ontology","Apollo"] }`. Visually confirm the active product's video plays and siblings dim as you scroll. (If videos don't load, open one `video.src` directly in a tab to confirm the CDN URL serves — they are external to localhost.)

- [ ] **Step 7: Commit**

```bash
git add components/home/OurSoftware.tsx components/home/index.ts app/page.tsx
git commit -m "Add OurSoftware offerings section with video previews; mount in place of ServicesSlider"
```

---

### Task 3: Verbatim content swaps (manifesto, testimonials, final CTA)

Replaces the body copy in `content/home.ts` with the reference's verbatim text. No component changes — the existing `ManifestoBand`, `Testimonials`, and `SplitCTA` already render these shapes.

**Files:**
- Modify: `content/home.ts` (the `manifesto`, `testimonials`, `splitCTA` exports)

**Interfaces:**
- Consumes: existing types `Manifesto { statement, support?, link? }`, `Testimonial { quote, clientName, role }`, `SplitCTAHalf { label, sublabel?, href, tone }` (unchanged).

- [ ] **Step 1: Swap the manifesto**

In `content/home.ts`, replace the `manifesto` export body with:

```ts
export const manifesto: Manifesto = {
  statement: "There is so much left to build",
  support:
    "Palantirians deliver mission-critical outcomes for the West's most important institutions.",
  link: {
    label: "Learn More",
    href: "/careers",
    arrow: "drillin",
  },
};
```

- [ ] **Step 2: Swap the testimonials**

Replace the `testimonials` export with the five reference partner quotes:

```ts
export const testimonials: Testimonial[] = [
  {
    quote:
      "Now, we've not only fixed our inventory problem, we've now taken a problem that would go on for weeks and days and fixed it in five minutes, making our people incredibly efficient.",
    clientName: "WENDY'S QUALITY SUPPLY CHAIN CO-OP",
    role: "Pete Suerken · President & CEO",
  },
  {
    quote:
      "We started with the goal of piloting 10 stores within about six months. However, leveraging Foundry and AIP, we began to see real promise quickly in composing AI-powered, end-to-end workflows that allowed us to get to about 4000 stores within eight months.",
    clientName: "WALGREENS",
    role: "Jeff Hoffman · VP, Product Pharmacy",
  },
  {
    quote:
      "S.C.O.U.T began as a joint effort between AT&T and Palantir, and now has over 100 AT&T dedicated engineers and a dedicated support team for this application. It's just one of the 660 applications we have on Foundry today.",
    clientName: "AT&T",
    role: "Dan Wagner · Dir. of Technology",
  },
  {
    quote:
      "We estimate that this solution reduces our time to submission materials by over 50% — from the current 10-to-12-week average to around 3 to 4 weeks — and cuts in half the time required to get there.",
    clientName: "PAREXEL",
    role: "Dan Ballard · SVP Digital Innovation",
  },
  {
    quote:
      "We had a great chassis of the car, but our engine was underpowered. So we went to Palantir because we want the best engine out there. In three months, the teams built what took us three years before.",
    clientName: "HEINEKEN",
    role: "Laurens van de Rotte · COO, Heineken USA",
  },
];
```

- [ ] **Step 3: Swap the final CTA**

Replace the `splitCTA` export with the reference's two intents:

```ts
export const splitCTA: SplitCTAHalf[] = [
  {
    label: "Request a Demo",
    href: "/contact/demo",
    tone: "light",
  },
  {
    label: "Start Building",
    href: "/get-started",
    tone: "dark",
  },
];
```

- [ ] **Step 4: Verify build + lint**

Run: `npm run build` then `npm run lint`
Expected: both SUCCEED. (Removing the `sublabel` fields is fine — it's optional on `SplitCTAHalf`.)

- [ ] **Step 5: Verify in the browser**

With `npm run dev` running, navigate to `http://localhost:3000/` and run:

```js
() => {
  const t = document.body.innerText;
  return {
    manifesto: /There is so much left to build/.test(t),
    partners: /Wendy|Walgreens|AT&T|Parexel|Heineken/i.test(t),
    cta: /Request a Demo/.test(t) && /Start Building/.test(t),
  };
}
```

Expected: `{ manifesto: true, partners: true, cta: true }`.

- [ ] **Step 6: Commit**

```bash
git add content/home.ts
git commit -m "Swap manifesto, testimonials, and final CTA to reference-verbatim copy"
```

---

### Task 4: Footer locale + platforms IA (header/footer parity)

Aligns the visible footer/menu directory toward the reference: region locale becomes `US / UK / JP`, and a Platforms group lists the five products. Per strict parity, the `AnnouncementBar` stays **unmounted** (the live reference has no announcement strip) — this refines the spec's §2.6, which predated that finding.

**Files:**
- Modify: `content/navigation.ts` (`legal.locale`, add a Platforms group/column)

**Interfaces:**
- Consumes: existing `LegalInfo`, `FooterColumn`, `MegaMenuGroup`, `NavLink` types (unchanged).

- [ ] **Step 1: Add a shared Platforms link array**

In `content/navigation.ts`, add near the other shared `NavLink[]` arrays (after `industryLinks`):

```ts
/** The five reference platforms (verbatim — scaffolding). */
export const platformLinks: NavLink[] = [
  { label: "AIP", href: "https://www.palantir.com/platforms/aip/", arrow: "external", external: true },
  { label: "Gotham", href: "https://www.palantir.com/platforms/gotham/", arrow: "external", external: true },
  { label: "Foundry", href: "https://www.palantir.com/platforms/foundry/", arrow: "external", external: true },
  { label: "Ontology", href: "https://www.palantir.com/platforms/ontology/", arrow: "external", external: true },
  { label: "Apollo", href: "https://www.palantir.com/platforms/apollo/", arrow: "external", external: true },
];
```

- [ ] **Step 2: Add the Platforms group to the mega menu and footer**

In `megaMenuGroups`, add as the FIRST group (before `Services`):

```ts
  {
    heading: "Platforms",
    links: platformLinks,
  },
```

In `footerColumns`, add as the FIRST column (before `Services`):

```ts
  {
    heading: "Platforms",
    links: platformLinks,
  },
```

- [ ] **Step 3: Update the footer locale**

In the `legal` export, change the `locale` line:

```ts
  locale: "US / UK / JP",
```

- [ ] **Step 4: Verify build + lint**

Run: `npm run build` then `npm run lint`
Expected: both SUCCEED.

- [ ] **Step 5: Verify in the browser**

With `npm run dev` running, navigate to `http://localhost:3000/` and run:

```js
() => {
  const f = document.querySelector('footer');
  const t = f ? f.innerText : '';
  return {
    locale: /US \/ UK \/ JP/.test(t),
    platforms: /AIP/.test(t) && /Gotham/.test(t) && /Foundry/.test(t) && /Ontology/.test(t) && /Apollo/.test(t),
    announcementUnmounted: !document.querySelector('[aria-label="Announcement"]'),
  };
}
```

Expected: `{ locale: true, platforms: true, announcementUnmounted: true }`.

- [ ] **Step 6: Commit**

```bash
git add content/navigation.ts
git commit -m "Footer locale US/UK/JP and Platforms directory group"
```

---

### Task 5: Integration verification

Confirms the whole page matches the reference section order and the enhancement degrades correctly. No new code unless a check fails.

**Files:** none (verification only; fix-forward into the relevant task's files if a check fails).

- [ ] **Step 1: Full build + lint**

Run: `npm run build` then `npm run lint`
Expected: both SUCCEED with no warnings about unused imports in `app/page.tsx` or `app/layout.tsx`.

- [ ] **Step 2: Verify section order matches the reference**

With `npm run dev` running, navigate to `http://localhost:3000/` and run:

```js
() => {
  const txt = (s) => (s||'').replace(/\s+/g,' ').trim();
  const secs = Array.from(document.querySelectorAll('main > *, main section')).map(s => ({
    label: s.getAttribute('aria-label') || txt(s.querySelector('h2,h3')?.textContent || '').slice(0,40),
    top: Math.round(s.getBoundingClientRect().top + window.scrollY),
  })).filter(x => x.label).sort((a,b)=>a.top-b.top);
  return secs.map(s => s.label);
}
```

Expected order (labels), top → bottom: Hero → (Latest News / products carousel) → **Our Software** → Manifesto → Testimonials → (Request a Demo / Start Building) split CTA. The reference order is Hero → News → Software → Manifesto → Testimonials → CTA → Footer; confirm the mounted sections match.

- [ ] **Step 3: Verify reduced-motion degradation**

Using Chrome DevTools MCP, emulate `prefers-reduced-motion: reduce` (CDP `Emulation.setEmulatedMedia`, or the devtools rendering pane), reload `http://localhost:3000/`, and confirm: all five offering products are fully visible (none dimmed), no video is auto-playing, and there are no console hydration warnings. Expected: page is fully legible and static; console has no React hydration mismatch errors.

- [ ] **Step 4: Final confirmation**

Confirm the unmounted components still exist on disk and are NOT rendered: `FeaturedCaseStudy`, `ServicesSlider`, `ServicesScrolly`, `AnnouncementBar`. Run:

```bash
git status --short
```

Expected: clean working tree (all task commits made). The four components remain as files but are absent from `app/page.tsx` / `app/layout.tsx`.

- [ ] **Step 5: Commit any fixes**

If steps 1–4 required changes, commit them:

```bash
git add -A
git commit -m "Integration fixes for homepage parity"
```

---

## Self-Review (completed during authoring)

- **Spec coverage:** Offerings video list → Tasks 1–2. Manifesto/testimonials/CTA verbatim → Task 3. Header/footer parity (locale, platforms IA) → Task 4. Exact section order → Task 5 verifies (already matched). Impact band → intentionally not built (strict parity, documented). Announcement bar → intentionally unmounted (refines spec §2.6 per live finding). All five offering video URLs are concrete (no capture step remains).
- **Placeholder scan:** none — every code block is complete; the only optional field (`poster`) is genuinely optional and omitted in content.
- **Type consistency:** `Offering` shape defined in Task 1 is used identically in Task 2's component; `offerings` / `ourSoftwareHeading` names match across tasks; `platformLinks` defined once in Task 4 and reused in both menu and footer.
- **Known follow-ups (out of scope):** the hero reel video (`Website_Reel_Update_V7.mp4`) is available if hero-video parity is later wanted; nav/footer columns other than Platforms keep Jicate's IA; CDN videos are external to localhost (verify they serve).
