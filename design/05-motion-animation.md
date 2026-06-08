# 05 — Motion & Animation

Design system documentation for the **Jicate IT Service** homepage clone.
Target: **full motion fidelity** to the reference design language (Palantir homepage), with original Jicate content.
Scope: homepage only. Stack: **Next.js 16.2.7 (App Router), React 19.2.4, Tailwind CSS v4 (CSS-first `@theme`), TypeScript, `next/font`.**

> All colors, sizes, durations, and easings in this document are drawn ONLY from the canonical measured design tokens. Do not invent new values. Where this file proposes a value not in the token list (e.g. a specific easing curve or a stagger delay), it is flagged as a **convention** and chosen to stay inside the measured duration bands (150–300ms micro, 400–800ms reveals).

---

## 1. Motion principles

The reference site reads as **engineered, utilitarian, editorial, high-contrast, precise**. Motion must reinforce that — never decorate it. Five principles:

1. **Restraint over spectacle.** Motion clarifies hierarchy and state; it is not entertainment. One thing moves at a time per region. No bounce, no overshoot, no spring wobble. The single accent (`#2b5945` pine green) and the dark-context blue (`#4e8af7`) are the only "energetic" colors and they barely move.
2. **Transform & opacity only.** Animate `transform` (`translate`, `scale`) and `opacity` exclusively — both are GPU-compositable and never trigger layout/paint. Never animate `width`, `height`, `top`, `left`, `margin`, `color` of large text blocks, or `box-shadow`. (Small UI color crossfades on nav text and hover are the documented exceptions and are cheap because they apply to small elements.)
3. **Choreography & stagger.** Grouped elements reveal in sequence, not all at once. A reveal group enters with a fixed per-item delay (**convention: 60–90ms stagger**), reading top-to-bottom / left-to-right. This produces the "settle-in" cadence of the hero and section reveals.
4. **Two duration bands.** Micro-interactions (hover, button inversion, arrow nudge, dismiss) live in **150–300ms**. Reveals and large transitions (scroll fades, nav crossfade, mega-menu, hero settle) live in **400–800ms**. Nothing sits between bands arbitrarily; pick a band per the table in §2.
5. **Reduced-motion is a first-class path, not an afterthought.** Every interaction below has an explicit `prefers-reduced-motion: reduce` fallback. The fallback principle: **disable video autoplay, parallax, and scroll-pinning; keep instantaneous or short opacity-only fades; preserve all final states and all dismiss/open functionality.** Motion is removed; behavior is not.

### Sharp-corner motif
Border-radius is `0` everywhere except footer social pills. Motion must not introduce rounded "soft" feeling — no easing that overshoots, no scaling that implies squash/stretch. Keep movement linear-feeling and crisp.

---

## 2. Global motion tokens

Add these to `globals.css` inside `@theme inline` (Tailwind v4 CSS-first) so durations/easings are reusable utilities and stay centralized. Values are conventions chosen to sit inside the measured bands.

```css
@theme inline {
  /* Durations — micro band 150–300ms */
  --duration-micro-fast: 150ms;   /* hover color shift, arrow nudge */
  --duration-micro:      200ms;   /* button inversion, dismiss collapse */
  --duration-micro-slow: 300ms;   /* nav text crossfade element */

  /* Durations — reveal band 400–800ms */
  --duration-reveal:      500ms;  /* default scroll-reveal item */
  --duration-reveal-slow: 700ms;  /* hero headline settle, mega-menu */
  --duration-reveal-max:  800ms;  /* nav transparent->solid bg, longest */

  /* Stagger between items in a reveal group */
  --stagger: 80ms;

  /* Easing curves (conventions) */
  --ease-out-quint:  cubic-bezier(0.22, 1, 0.36, 1);   /* reveals / settle — decelerate, no overshoot */
  --ease-standard:   cubic-bezier(0.4, 0, 0.2, 1);     /* micro state changes */
  --ease-out-soft:   cubic-bezier(0.16, 1, 0.3, 1);    /* mega-menu open */
}
```

Easing rationale: all curves **decelerate into rest** (ease-out family) so elements arrive calmly and crisply — consistent with the sharp, precise aesthetic. None overshoot past `1` on the value axis, so nothing bounces (respecting the radius-0 motif).

### Duration / easing assignment table

| Interaction | Band | Duration token | Easing | Properties |
|---|---|---|---|---|
| Announcement-bar dismiss | micro | `--duration-micro` (200ms) | `--ease-standard` | `opacity`, `transform: translateY` / `scaleY` |
| Nav bg transparent→solid | reveal | `--duration-reveal-max` (800ms) cap; typ. crossfade ~300ms | `--ease-standard` | `background-color`, `border-color` |
| Nav text/wordmark color crossfade | micro | `--duration-micro-slow` (300ms) | `--ease-standard` | `color`, `fill` |
| Hero video fade-in (over poster) | reveal | `--duration-reveal` (500ms) | `--ease-out-quint` | `opacity` |
| Hero headline settle-in | reveal | `--duration-reveal-slow` (700ms) | `--ease-out-quint` | `opacity`, `transform: translateY` |
| Scroll-reveal (fade + translateY) | reveal | `--duration-reveal` (500ms) | `--ease-out-quint` | `opacity`, `transform: translateY` |
| Services sticky scrolly index advance | reveal | per-step ~400–600ms | `--ease-out-quint` | `opacity`, `transform` |
| Testimonial scroll-snap settle | micro→reveal | native snap; drag inertia | n/a (browser) | `scroll` position |
| Hover opacity 0.33 | micro | `--duration-micro-fast` (150ms) | `--ease-standard` | `opacity` |
| Hover arrow nudge (translateX) | micro | `--duration-micro-fast` (150ms) | `--ease-standard` | `transform: translateX` |
| Hover color shift | micro | `--duration-micro` (200ms) | `--ease-standard` | `color` |
| Button inversion (Get Started) | micro | `--duration-micro` (200ms) | `--ease-standard` | `background-color`, `color`, `opacity` |
| Mega-menu open/close | reveal | `--duration-reveal-slow` (700ms) | `--ease-out-soft` | `opacity`, `transform: translateY` |

---

## 3. Named interaction specs

Each spec: **behavior → tokens → transitions → implementation → reduced-motion fallback.**

### 3.1 Announcement bar — dismiss

**Behavior.** Full-width dark bar (`#202426`) above the nav, centered text + inline underlined link + close `×`. Dismissible. On `×` click: bar collapses and removes from flow; nav and page below shift up to fill. Dismissal persists for the session (e.g. `sessionStorage` flag) so it does not re-animate on every route render.

**Tokens.** bg `#202426`; text off-white `#efefef`; link underlined; close glyph `×`. Duration `--duration-micro` (200ms); easing `--ease-standard`.

**Transition.** Animate `opacity` 1→0 and `transform: translateY(-100%)` (or `scaleY(1→0)` with `transform-origin: top`). To avoid an abrupt layout jump as the bar leaves flow, animate the bar's `max-height`/`height` is **discouraged** (layout-thrash); instead animate the bar out on transform/opacity, then set `display:none` / unmount on `transitionend`, and let the sticky nav re-settle. If a height collapse is required, prefer a CSS grid-rows `0fr→1fr` trick or a wrapper `height: auto` measured to a fixed px, animated once.

**Implementation (React 19 + CSS).**
- State: `const [dismissed, setDismissed] = useState(false)`, initialized from `sessionStorage`.
- Apply a `data-state="closing"` attribute, listen for `onTransitionEnd` to unmount.
- Keep the close button a real `<button aria-label="Dismiss announcement">`; move focus to the nav after dismiss.

**Reduced motion.** No collapse animation. On click, unmount immediately (set `display:none`) — instantaneous. Still fully dismissible and persisted.

---

### 3.2 Nav — transparent → solid on scroll (crossfade)

**Behavior.** Nav is **86px** tall. Over the hero it is **transparent** with a **light wordmark** (off-white `#efefef`), white-filled "Get Started" CTA, and outlined search + hamburger boxes. On scroll past the hero threshold it becomes a **solid light bar** (`≈#f9f9f9`, subtle) with a **dark wordmark/text** (`#1e2124`). Reverses on scroll back up.

**Tokens.**
- Transparent state: `background: transparent`; text/fill `#efefef`.
- Solid state: `background: #f9f9f9`; text/fill `#1e2124`; optional thin bottom border `0.8px` (`#1e2124` at low alpha, or `rgba(30,33,36,0.10)` — use accent-10 pattern `rgba(43,89,69,0.10)` only if branded). Convention: use `rgba(30,33,36,0.10)`-style hairline; do not invent a new hex.
- Background transition up to `--duration-reveal-max` (800ms) but a crisp ~300ms crossfade reads best; text/fill color crossfade `--duration-micro-slow` (300ms). Easing `--ease-standard`.

**Transition.** Crossfade `background-color` + `border-color` on the nav container, and `color`/`fill` on wordmark + links + icon-box borders, simultaneously. No vertical movement of the nav (stays pinned at 86px). This is the one place a `background-color`/`color` animation is sanctioned — elements are small and few.

**Implementation.**
- Detect scroll past threshold with **`IntersectionObserver`** on a 1px sentinel placed at the bottom of the hero (preferred — no scroll listener, no jank): when the sentinel leaves the viewport top, toggle `data-solid` on `<nav>`.
- CSS drives the crossfade from `nav[data-solid]` selectors; no per-frame JS.
- Avoid a `scroll` event + `getBoundingClientRect` per frame (forces layout). If you must, throttle with `requestAnimationFrame` and a passive listener.

```css
nav { transition: background-color 300ms var(--ease-standard), border-color 300ms var(--ease-standard); background: transparent; }
nav, nav a, nav .wordmark { transition: color 300ms var(--ease-standard), fill 300ms var(--ease-standard); color: #efefef; }
nav[data-solid] { background: #f9f9f9; border-bottom: 0.8px solid rgba(30,33,36,0.10); }
nav[data-solid], nav[data-solid] a, nav[data-solid] .wordmark { color: #1e2124; }
```

**Reduced motion.** Toggle states **instantly** (`transition: none`). The nav still becomes solid/legible on scroll; only the crossfade is removed. The state change itself must remain so text stays readable against the now-light page.

---

### 3.3 Hero — looping muted video bg + dark overlay + headline settle

**Behavior.** Full-bleed background `<video>`: `autoplay muted loop playsinline`, with a dark overlay for legibility. Hero **H1** (80px / line-height 78px / weight 400 / letter-spacing -3.4px / color `#efefef` / display font Space Grotesk) **settles in** on load: fades + small upward translate to rest. Blue glow accent `#4e8af7` may appear as a subtle dark-context element. Overlay tints toward near-black `#202426`.

**Tokens.** Headline `#efefef`, 80px/78px, ls -3.4px. Overlay: dark, near-black `#202426` family. Glow `#4e8af7`. Headline settle `--duration-reveal-slow` (700ms), `--ease-out-quint`, translateY start **convention +12px** → 0. Video fade-in over poster `--duration-reveal` (500ms) opacity.

**Transition.**
- Video element starts at `opacity: 0` over a `poster` still; on `canplay`/`playing`, fade to `opacity: 1` (500ms). This hides decode/buffer pop.
- Overlay is a static dark layer (`background: #202426` at reduced alpha, or gradient) — no animation needed; legibility-first.
- Headline: `opacity 0→1`, `transform: translateY(12px)→0`, 700ms, ease-out-quint, starting just after first paint. May stagger sub-lines / eyebrow with `--stagger` (80ms).

**Implementation.**
- `<video autoPlay muted loop playsInline poster="/hero-poster.jpg">`. `muted` + `playsInline` are required for mobile autoplay.
- Headline settle: CSS keyframe on mount, or a small one-shot class added after hydration. Prefer CSS animation (no JS frame loop). Use `will-change: transform, opacity` only during the animation, then remove.
- Do not block LCP: the poster image should be the LCP candidate; preload it. Lazy-attach the video source if needed.

**Reduced motion.**
- **Do not autoplay video.** Render the `poster` still image only (omit `autoPlay`, or `pause()` on mount when `matchMedia('(prefers-reduced-motion: reduce)').matches`).
- No headline translate; show final state immediately, or at most a short opacity fade (≤300ms). No glow pulse, no parallax.

---

### 3.4 Scroll-reveal — fade + translateY, staggered

**Behavior.** As sections enter the viewport, their elements **fade in and rise** (translateY). Grouped items stagger top-to-bottom / left-to-right. Applies to feature blocks, statement headlines, story cards, footer columns. Transform/opacity only.

**Tokens.** `opacity 0→1`; `transform: translateY(start)→0`, **convention start +20px** (matches spacing scale `s = 20px`). Duration `--duration-reveal` (500ms); easing `--ease-out-quint`; per-item `--stagger` (80ms).

**Transition.** Reveal fires **once** when the element crosses ~10–15% into the viewport. After reveal, no re-hide on scroll up (avoids distracting re-triggers). Stagger via incremental `transition-delay` (`--index * --stagger`).

**Implementation (CSS + IntersectionObserver — recommended baseline).**
```css
.reveal { opacity: 0; transform: translateY(20px); transition:
  opacity var(--duration-reveal) var(--ease-out-quint),
  transform var(--duration-reveal) var(--ease-out-quint);
  transition-delay: calc(var(--i, 0) * var(--stagger)); }
.reveal[data-visible] { opacity: 1; transform: none; }
```
```ts
// one shared observer, threshold ~0.12, unobserve after reveal
const io = new IntersectionObserver((entries) => {
  for (const e of entries) if (e.isIntersecting) {
    e.target.setAttribute('data-visible', '');
    io.unobserve(e.target);
  }
}, { threshold: 0.12, rootMargin: '0px 0px -10% 0px' });
```
- One observer instance shared across all `.reveal` nodes; set `--i` per item for stagger.
- Render with the final (visible) markup; only add the `.reveal` hiding class after hydration so no-JS / SSR users see content (progressive enhancement).

**Reduced motion.** No translate, no stagger. Either show everything immediately, or apply a single short opacity fade (≤300ms). Never leave content stuck at `opacity: 0` if JS/observer fails — the `data-visible` state must also be reachable, and reduced-motion CSS should default `.reveal { opacity: 1; transform: none; }`.

---

### 3.5 Services / platform — sticky-pinned numbered scrolly section

**Behavior.** A **scroll-driven, sticky-pinned** numbered list (the services section). As the user scrolls, the section pins and steps through items; the numbered index motif **`/0.1` → `/0.2` → …** advances (mono label), each item carries a small geometric **earmark** glyph (circle `O`, house/triangle `A`). Active item is emphasized; prior/next are de-emphasized.

**Tokens.** Index in **mono**, format `/0.x`. Statement/feature headline 34px (`--headline = 1.8889rem`) or 46px variant; statement color ink-medium `#636363` (grey) for the intro, ink `#1e2124` for active. Section vertical spacing 60px. Per-step transition ~400–600ms (reveal band), `--ease-out-quint`, transform/opacity only.

**Transition.**
- The section wrapper is `position: sticky; top: 86px` (clears the nav) inside a tall scroll track; scroll progress maps to the active step index.
- On step change: outgoing item fades/translates out (small Y), incoming fades/translates in; the `/0.x` index swaps with a quick opacity crossfade; earmark glyph for the active item highlights (opacity / accent `#2b5945`).
- No layout animation — items are stacked/absolute and toggled via opacity+transform.

**Implementation — three options (pick per constraints):**

| Approach | How | Pros | Cons |
|---|---|---|---|
| **A. IntersectionObserver step markers (recommended baseline)** | Place invisible per-step sentinels down the scroll track; observer reports which step is active; CSS classes drive the pin content. | No library, robust, accessible, cheap. Pin via `position: sticky`. | Manual progress math; coarse (step granularity, not continuous). |
| **B. Native CSS scroll-driven animations** | `animation-timeline: view()` / `scroll()` to drive index + reveals from scroll progress, no JS. | Zero JS, runs off main thread, smooth. | Newer API; verify Next 16 / target-browser support; **must** ship JS/IO fallback + reduced-motion. |
| **C. GSAP ScrollTrigger (`pin: true`, `scrub`)** | ScrollTrigger pins the section and scrubs a timeline; ideal for continuous index/earmark choreography. | Best for complex, continuous, frame-accurate scrolly. | Extra dependency/bundle; commercial-plugin caveats for some features; must integrate with React 19 (`useGSAP`/cleanup in `useEffect`). |

Recommendation: **A** for fidelity-with-restraint and minimal bundle; escalate to **C** only if the choreography needs continuous scrubbing the IO step model can't express. Avoid Framer Motion here — its scroll/`useScroll` works but pinning a sticky section is more naturally expressed in IO/GSAP.

**Reduced motion.** **Remove pinning and scroll-driving entirely.** Render the services as a normal, fully-visible vertical list — every item, its `/0.x` index, and earmark shown statically in document order. No pin, no scrub, no step transitions (or a single ≤300ms opacity fade per item via the standard reveal fallback).

---

### 3.6 Testimonials — horizontal scroll-snap / drag

**Behavior.** Testimonial cards (surface bg `#efefef`/`#f3f3f3`, **dog-ear / folded top-right corner**, client name in **mono UPPERCASE** letter-spaced `0.05em`, quote in body grotesque) arranged in a **horizontal-scroll row** with **scroll-snap** and pointer **drag**. Sample copy must be original Jicate content (no verbatim reference quotes).

**Tokens.** Card bg `#efefef` or `#f3f3f3`; client name mono uppercase, letter-spacing `0.05em`; quote body 18px/25px `#1e2124`. Gutter between cards 10px / spacing `s = 20px`. Snap behavior native; drag inertia browser-native. Any hover micro-interaction uses the §3.7 tokens.

**Transition / behavior.**
- Container: `overflow-x: auto; scroll-snap-type: x mandatory; scroll-behavior: smooth;` each card `scroll-snap-align: start;`.
- Drag: prefer **native** horizontal scroll (trackpad / touch already drag). For mouse-drag affordance, a small pointer-events handler that maps pointer delta to `scrollLeft` (passive where possible); release lets native momentum/snap settle. Do not animate `transform` on the track for drag — use real `scrollLeft` so snap + a11y scrolling work.
- Show no custom inertia curve; rely on the platform. Optional left/right arrow buttons (`→`) scroll by one card width using `scrollBy({ behavior: 'smooth' })`.

**Implementation.**
- CSS-first scroll-snap; minimal JS only for optional drag-to-scroll and arrow buttons.
- Keep cards keyboard-reachable (focusable, `tabindex` as needed); arrow buttons are real `<button>`s.
- `overscroll-behavior-x: contain` to avoid hijacking page back-swipe.

**Reduced motion.**
- Set `scroll-behavior: auto` (no smooth animation) and the arrow buttons jump instantly.
- Snapping itself is fine (it's positional, not animated), but **disable any smooth/inertia**. The row remains scrollable. If drag-momentum was simulated in JS, disable it and use direct positioning.

---

### 3.7 Hover — opacity 0.33, arrow translateX nudge, color shift

**Behavior.** Three composable hover micro-interactions used across links, buttons, cards, and arrow glyphs:
1. **Opacity 0.33** — interactive element dims to the measured hover opacity (`0.33`), i.e. text hover color `rgba(30,33,36,0.33)`.
2. **Arrow nudge** — arrow glyphs (`↗` external, `↳` drill-in, `↖` CTA, `→` big CTA) translate toward their direction on hover (`→`/`↗`: `translateX(+)`; `↳`: small `translate`).
3. **Color shift** — e.g. link/label shifts toward accent `#2b5945`, or button inverts (see below).

**Tokens.** Hover opacity `0.33`; hover text color `rgba(30,33,36,0.33)`; accent `#2b5945`. Nudge distance **convention +4px** (within `tiny`/`xs` scale, 3–10px). Opacity/nudge `--duration-micro-fast` (150ms); color shift `--duration-micro` (200ms); easing `--ease-standard`.

**Primary "Get Started" button.** bg `#fff`, text `#1e2124`, border `0.8px solid #1e2124`, **radius 0**, padding ~10px, 16px/weight 400, often prefixed `↖`. Hover = **inversion / opacity 0.33**: invert to dark fill or drop to `opacity 0.33`. Inverse button variant: dark `#202426` bg, off-white `#efefef` text. Transition `--duration-micro` (200ms), `--ease-standard`, on `background-color`/`color`/`opacity`.

```css
.link:hover { color: rgba(30,33,36,0.33); transition: color 200ms var(--ease-standard); }
.arrow { display: inline-block; transition: transform 150ms var(--ease-standard); }
.link:hover .arrow, .cta:hover .arrow { transform: translateX(4px); }
.btn-primary { background:#fff; color:#1e2124; border:0.8px solid #1e2124; border-radius:0;
  transition: background-color 200ms var(--ease-standard), color 200ms var(--ease-standard), opacity 200ms var(--ease-standard); }
.btn-primary:hover { background:#202426; color:#efefef; }   /* inversion */
```
- Always pair `:hover` with `:focus-visible` so keyboard users get the same affordance.
- Use `@media (hover: hover)` to scope hover effects away from touch devices.

**Reduced motion.** Keep the **color/opacity** shift (it conveys state, costs no motion) but **drop the `translateX` nudge** — arrows stay put. Button inversion stays (color change, not movement). Wrap nudge rules in `@media (prefers-reduced-motion: no-preference)`.

---

### 3.8 Mega-menu — open / close

**Behavior.** Hamburger (square icon box) opens a **full overlay** mega menu. Groups (generic / original Jicate labels): Platforms/Services, Offerings, Case Studies/Impact, Documentation, Careers, Newsroom, About — plus featured cards using `↳` and `↗` arrow links. Closes via `×`, `Esc`, or backdrop/outside click.

**Tokens.** Overlay surface light/canvas; eyebrow/label ~20px; mono uppercase labels `0.05em`. Featured-card headline 34px. Open/close `--duration-reveal-slow` (700ms), easing `--ease-out-soft`; backdrop fade `--duration-reveal` (500ms). Inner groups may stagger with `--stagger` (80ms).

**Transition.**
- Backdrop: `opacity 0→1` (500ms).
- Panel: `opacity 0→1` + `transform: translateY(-8px → 0)` **or** a short reveal from top (700ms, ease-out-soft). Avoid animating height; the panel is a fixed full overlay, animate transform/opacity.
- Inner column groups + featured cards stagger in (reuse §3.4 reveal mechanism, `--i` per group).
- Close mirrors open (reverse), or a faster opacity-only fade (`--duration-micro-slow`, 300ms) to feel responsive.

**Implementation (React 19).**
- Control with state + `data-open` on the overlay root; CSS drives transitions. Unmount on close `transitionend` (or keep mounted with `inert` when closed).
- **Accessibility:** trap focus within the open menu; move focus to the first item / close button on open and restore to the hamburger on close. Close on `Escape`. Set `aria-expanded` on the hamburger and `aria-modal`/`role="dialog"` on the overlay. Lock body scroll while open (`overflow: hidden` on `html`).
- This is a strong candidate for **Framer Motion** (`AnimatePresence`) if you want clean enter/exit with stagger (`variants` + `staggerChildren`) and automatic unmount handling. Trade-off below.

**Reduced motion.** Open/close **instantly** (`transition: none`), or at most a single ≤300ms opacity fade with **no translate** and **no stagger**. All behavior (focus trap, `Esc`, backdrop close, scroll lock) is preserved.

---

## 4. Implementation strategy for Next.js 16 / React 19

### 4.1 Recommended baseline: CSS + IntersectionObserver first

Default to **CSS transitions/animations driven by data-attributes**, with **IntersectionObserver** for "is it on screen" and **scroll sentinels** for the nav and scrolly steps. Reasons:

- **Zero/near-zero JS for animation** — transitions run on the compositor, off the main thread; nothing per-frame in JS.
- **Server Components friendly.** Most of the homepage can stay RSC. Isolate interactivity into small `"use client"` leaf components (the nav state toggle, the announcement bar, the reveal-observer hook, the testimonial drag, the mega-menu). Keep the client boundary small.
- **Progressive enhancement.** SSR ships final, visible content; the hiding `.reveal` class and observers attach after hydration. If JS fails, content is still visible (critical — never trap content at `opacity:0`).
- **Cheap, predictable, no bundle cost.**

A shared `useReveal()` / `useInView()` client hook wrapping a single `IntersectionObserver` covers §3.3 (assist), §3.4, §3.5 (option A), and §3.8 inner stagger. A `useReducedMotion()` hook (read `matchMedia('(prefers-reduced-motion: reduce)')`, subscribe to changes) gates the motion paths.

### 4.2 Native CSS scroll-driven animations (optional, modern)

For the nav crossfade, scroll-reveals, and the services scrolly index, **CSS `animation-timeline: scroll()` / `view()`** can drive everything **without JS**, off the main thread.

- **Pros:** no JS, no bundle, smoothest possible, declarative.
- **Cons:** relatively new; **verify support** for the target browser matrix (and that Next 16's build/PostCSS pipeline passes it through). Older/Safari support is incomplete — **always ship an IntersectionObserver fallback and a reduced-motion path.**
- **Verdict:** Use as a **progressive enhancement** layered on the §4.1 baseline, not as the sole mechanism.

### 4.3 Framer Motion (`motion` / `AnimatePresence`)

- **Best for:** mega-menu enter/exit (§3.8) and any orchestrated stagger where automatic unmount + presence handling saves real code. Built-in `useReducedMotion()`.
- **Pros:** declarative `variants`, `staggerChildren`, exit animations, spring/tween control; React-idiomatic; works with React 19.
- **Cons:** client-component only (`"use client"`), adds bundle weight, can over-tempt springy motion that conflicts with the crisp/sharp aesthetic — if used, **stick to `tween` + ease-out**, no spring bounce. Verify the installed version is React-19-compatible.
- **Verdict:** Optional, scoped to the mega-menu (and maybe testimonials). Don't adopt it project-wide just for fades the CSS baseline already does.

### 4.4 GSAP + ScrollTrigger

- **Best for:** the **services sticky-pinned scrolly** (§3.5) if it needs continuous, frame-accurate, scrubbed choreography that IO step markers can't express (`pin: true`, `scrub`).
- **Pros:** most powerful pin/scrub timeline control; battle-tested.
- **Cons:** largest dependency footprint; must integrate cleanly with React 19 (`useGSAP` hook or manual `gsap.context()` setup/cleanup in `useEffect` to avoid leaks across navigations); some plugins are membership-gated. Honor reduced-motion by `ScrollTrigger.disable()` / not registering when `reduce` is set.
- **Verdict:** Reach for it **only** for the scrolly section, **only** if option A (IO) proves insufficient. Otherwise skip.

### 4.5 Decision summary

| Interaction | Primary mechanism | Escalate to |
|---|---|---|
| Announcement dismiss | CSS transition + React state | — |
| Nav crossfade | IO sentinel + CSS | CSS `scroll()` timeline |
| Hero video + headline | `<video>` + CSS keyframe | — |
| Scroll-reveal | IO + CSS (`useReveal`) | CSS `view()` timeline |
| Services scrolly | `position: sticky` + IO steps | GSAP ScrollTrigger |
| Testimonials | CSS scroll-snap + tiny drag JS | — |
| Hover / buttons | CSS `:hover`/`:focus-visible` | — |
| Mega-menu | React state + CSS, focus trap | Framer Motion `AnimatePresence` |

**Guiding rule:** start at the cheapest tier (CSS + IO). Add a library only where it removes meaningful complexity for a single named interaction — never wholesale.

---

## 5. Global reduced-motion handling

Implement both a **CSS global guard** and a **JS hook**, because some motion is JS-initiated (video autoplay, drag inertia, GSAP).

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  .reveal { opacity: 1 !important; transform: none !important; }   /* never trap content hidden */
}
```

```ts
// useReducedMotion — gate JS motion (video autoplay, scrolly, drag, GSAP)
function useReducedMotion() {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    const mq = matchMedia('(prefers-reduced-motion: reduce)');
    const on = () => setReduce(mq.matches);
    on(); mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, []);
  return reduce;
}
```

**Reduced-motion checklist (per the principles):**
- Hero video: do **not** autoplay — show poster only.
- Remove parallax and **scroll-pinning** (services renders as a plain list).
- Keep simple **opacity fades** (≤300ms) or instant state changes; remove all translate/scale.
- All **dismiss / open / scroll / focus** behavior preserved — only motion is removed.
- Never leave any element stuck at `opacity: 0` or off-position if observers/JS don't run.

---

## 6. Performance & quality checklist

- Animate **only** `transform` and `opacity` (plus sanctioned small `color`/`background-color`/`fill` crossfades on nav + hover).
- Add `will-change: transform, opacity` **only** during an active animation; remove after (`transitionend`/`animationend`) to free GPU memory.
- One **shared** `IntersectionObserver`; `unobserve` each element after its one-shot reveal.
- Scroll detection via **sentinels + IO**, not per-frame `scroll` listeners; if a scroll listener is unavoidable, make it `passive` and `rAF`-throttled.
- Respect LCP: hero **poster** is the LCP image (preload); video fades in after and must not be the LCP candidate.
- Keep the `"use client"` boundary minimal — RSC for static content, client leaves for interactivity.
- Test full keyboard path: `:focus-visible` mirrors every `:hover`; mega-menu focus trap + `Esc` + scroll lock; all controls are real `<button>`s with `aria-*`.
- Verify each interaction in both motion modes before sign-off.
