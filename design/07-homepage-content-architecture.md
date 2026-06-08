# 07 — Homepage Content Architecture

> **Brand:** Jicate IT Service · **Scope:** Homepage clone (single page, top → bottom) · **Design language source:** Palantir.com homepage (measured live)
> This document is the **section-by-section blueprint** for the Jicate homepage. It maps the reference's *structure* (section order, layout, component vocabulary, motion choreography) onto **original IT-services content** for Jicate IT Service. Every color/size/spacing token referenced here is one of the **canonical measured tokens** from files 01–06 — do not invent new values. The sample microcopy is **original**; see the Legal/IP reminder at the top and bottom of this file.

---

## 0. LEGAL / IP REMINDER — read before writing any copy

> **ALL COPY ON THIS PAGE IS ORIGINAL.** Do **not** reproduce Palantir's marketing copy, testimonial quotes, or product names verbatim, and do **not** do a light find-replace of their sentences. We replicate the **design language and content *architecture* only** — section order, layout, grid, type scale, components, motion, motifs. Every headline, subcopy line, CTA label, eyebrow, testimonial, and footer link below is **freshly written for Jicate IT Service** (an IT services company: managed IT, cloud, cybersecurity, software/automation, support). Treat all sample microcopy in this file as **production-ready original copy**, not placeholder to be "translated" from any reference. If you add new copy, write it from scratch in Jicate's voice. **This reminder is repeated at the end of the document.**

---

## 1. Section map (top → bottom)

The homepage is **nine stacked sections** plus the global header (announcement bar + nav). Order matches the reference structure; content is Jicate's.

| # | Section | Context | Primary purpose | Key component(s) |
| --- | --- | --- | --- | --- |
| 1 | Announcement bar | DARK `#202426` | Timely single message + dismiss | Announcement bar |
| 2 | Nav + mega-menu | TRANSPARENT → SOLID | Wayfinding / primary CTA | Nav (86px), mega menu |
| 3 | Hero | DARK media (video) | First impression, brand promise, primary CTA | Hero video bg, display H1, Get Started button |
| 4 | Featured case-study band | LIGHT (band `#efefef`) | Social proof via flagship outcome | Featured story card |
| 5 | Services numbered scrolly | LIGHT canvas `#ffffff` | Explain the five service lines | Sticky-pinned numbered list, `/0.x` index, earmark glyphs |
| 6 | Value / manifesto band | LIGHT (band `#efefef`) or canvas | State the operating philosophy | Statement headline (grey `#636363`) |
| 7 | Testimonials | LIGHT canvas | Client trust, multi-voice | Testimonial cards (dog-ear), horizontal scroll |
| 8 | Split CTA | LIGHT + DARK side-by-side | Convert: two intents | Big split CTA (light half + black half) |
| 9 | Footer | Mixed (mostly DARK) | Directory, social, legal | Footer link groups, social pills |

> Context legend (from `01`/`02` color docs): **LIGHT canvas** = `#ffffff` bg, ink `#1e2124` text, accent pine green `#2b5945`. **DARK media** = `#202426` bg, off-white `#efefef` text, blue `#4e8af7` accent only. Pick the context first, then pick colors only from that context.

---

## 2. Shared layout primitives (apply to every section)

So each section spec below can stay focused, these grid/spacing rules apply globally (from `04` layout/grid and `01` foundations):

| Primitive | Value | Token / note |
| --- | --- | --- |
| Grid | 12 columns, `repeat(12, minmax(10px, 1fr))` | All content snaps to this grid |
| Max content width | `1440px` (alt wide `1480px`) | `--h-contain` centered |
| Side padding (min) | `20px` | `max((100% - max-width)/2, 20px)` |
| Gutter | `10px` | column gap |
| v-gutter / h-spacing | `20px` | |
| Section vertical spacing | `60px` | top/bottom rhythm between sections |
| Spacing scale | `3 / 10 / 20 / 40` (+ build extends `60 / 80 / 120`) | tiny / xs / s·m / l / xl·2xl·3xl |
| Borders | `0.8px solid #1e2124` | thin, on light |
| Corners | `border-radius: 0` everywhere **except footer social pills** | sharp |
| Root | `font-size: 18px` ⇒ `1rem = 18px` | all rem math resolves on 18px |

Type roles referenced below (from `02`): Hero H1 `80px`/lh`78px`/w400/ls`-3.4px`; Big H2 `~50px`; Feature H3 `34px` (`--headline = 1.8889rem`) or `46px` variant; Statement headline `~46px` w400 grey `#636363`; eyebrow `~20px`; body large `20px`/lh`1.3`; body `18px`/lh`1.389`; body small `16px`/lh`1.4286`; caption `10px`/lh`1.6`/ls`0.05em` MONO UPPERCASE.

Arrow glyphs (from `motifs`): **↗** external/forward · **↳** drill-in/learn-more · **↖** CTA prefix · **→** big CTA.

---

## 3. Section 1 — Announcement bar

**Purpose.** A dismissible, full-width sliver above the nav carrying one timely message (an event, a release, a compliance milestone) with a single inline link.

**Layout.** Full-bleed **DARK** strip on `--color-near-black` `#202426`; centered text; one inline **underlined** link; a close `×` at the right edge. Sits *above* the 86px nav. Dismissible (persist dismissal in `localStorage`; collapsing it shifts nav/hero up).

**Components.** Announcement bar (see `05` components).

**Content slots.** `message` (1 short line) · `inlineLinkLabel` + `href` (underlined) · `dismiss` (× icon button).

**Color / type.** bg `#202426`; text + link `#efefef` (off-white, dark context); link underlined; body small `16px` or caption scale; `×` is an icon button, radius `0`. Blue `#4e8af7` may tint the link on hover (dark context only). Hover opacity `0.33` on the `×`.

**Original sample microcopy**

| Slot | Copy |
| --- | --- |
| message | `Jicate is now SOC 2 Type II certified — see what it means for your data.` |
| inlineLinkLabel | `Read the report ↗` |
| dismiss | `×` (aria-label: "Dismiss announcement") |

> Alt messages to rotate (all original): `Now onboarding for Q3 cloud migrations — limited slots.` · `New: 24/7 managed detection & response. Learn more ↗`

---

## 4. Section 2 — Nav + mega-menu IA

**Purpose.** Persistent wayfinding and the primary conversion CTA. Signature motion: transparent over the hero, solid on scroll.

**Layout.** `86px` tall. **Left:** Jicate wordmark + small circular "sphere/eye" mark. **Right:** primary "Get Started" button + square search icon box + square hamburger box. Over the hero it is **TRANSPARENT** with a **light wordmark + white-filled CTA** (dark context). On scroll it crossfades to a **SOLID light bar** on `--color-surface-light` `#f9f9f9` with **dark wordmark/text** (light context) — see `06` motion.

**Components.** Nav (86px), primary button, icon buttons (square, `0.8px` border, radius `0`), mega menu overlay.

**Top-level nav items** (the canonical IA for this clone):

| Order | Label | Type | Opens |
| --- | --- | --- | --- |
| 1 | Services | Mega-menu group | Full overlay, 5 service columns + featured card |
| 2 | Industries | Mega-menu group | Overlay column |
| 3 | Case Studies | Link / small group | Overlay column or direct |
| 4 | Resources | Mega-menu group | Overlay column |
| 5 | Company | Mega-menu group | Overlay column |
| 6 | Contact | Link | Direct (`/contact`) |
| — | Get Started | Primary CTA button | `/get-started` |
| — | Search | Icon box | Search overlay |
| — | Hamburger | Icon box | Opens the full mega-menu overlay |

**Mega menu (full overlay).** Opened by the hamburger. Groups laid out as link columns; featured cards use **↳** (drill-in) and **↗** (external/forward) arrow links. Information architecture:

| Group | Items (original labels) |
| --- | --- |
| **Services** | `Managed IT` · `Cloud` · `Cybersecurity` · `Software Development` · `Support` |
| **Industries** | `Healthcare` · `Finance` · `Retail & E-commerce` · `Manufacturing` · `Public Sector` · `Education` |
| **Case Studies** | `All Case Studies ↗` · featured: `How [Client] cut downtime 40%` |
| **Resources** | `Blog` · `Guides & Whitepapers` · `Documentation ↗` · `Webinars` · `Service Status ↗` |
| **Company** | `About` · `Our Approach` · `Careers ↗` · `Partners` · `Newsroom` |
| **Contact** | `Talk to an Expert ↳` · `Support Portal ↗` · `Find an Office` |

**Featured cards in the overlay** (each: small image + `34px` H3 + short caption + `↳`):

| Slot | Copy |
| --- | --- |
| Card A headline | `Managed IT, run like infrastructure` |
| Card A caption | `Always-on monitoring, patching, and helpdesk under one SLA.` |
| Card A link | `Explore Managed IT ↳` |
| Card B headline | `Migrate to cloud without the downtime` |
| Card B caption | `Lift, shift, and modernize on AWS, Azure, or GCP.` |
| Card B link | `See cloud services ↳` |

**Color / type.** Transparent state: wordmark/labels off-white `#efefef`, CTA = white-filled (bg `#fff`, text `#1e2124`, `0.8px` border). Solid state: bar `#f9f9f9`, labels ink `#1e2124`. Mega-menu overlay = light context (`#ffffff`/`#f9f9f9`), accent pine green `#2b5945` on active/hover; hover opacity `0.33` + arrow nudge `translateX`. Nav labels at body small/`16px`; group headers may use mono UPPERCASE caption with `0.05em`.

**Primary "Get Started" button spec.** bg `#fff`, text `#1e2124`, border `0.8px solid #1e2124`, radius `0`, padding `~10px`, `16px`/w400, no text-transform, prefixed with **↖**. Hover = inversion / opacity `0.33`.

**Original sample microcopy**

| Slot | Copy |
| --- | --- |
| wordmark | `Jicate` (+ sphere/eye mark) |
| primary CTA | `↖ Get Started` |
| search (aria) | `Search` |
| menu (aria) | `Open menu` |

---

## 5. Section 3 — Hero

**Purpose.** First impression and brand promise; convert intent immediately with the primary CTA. The most cinematic moment on the page.

**Layout.** Full-bleed **DARK media**: autoplay/muted/looping background video on `--color-near-black` `#202426` with a darkening overlay. Big display **H1** left-aligned (or centered on mobile), a one-line subcopy beneath, and the **Get Started** CTA. Optional secondary text link. Nav sits transparent on top (Section 2). A subtle **blue `#4e8af7` glow** is the only color accent permitted here.

**Components.** Hero video bg + overlay, display H1, primary button (Get Started), optional secondary text link (↳).

**Content slots.** `video` (mp4/webm) + `poster` (still) · `eyebrow` (optional mono label) · `headline` (display H1) · `subcopy` (body large) · `primaryCTA` · `secondaryLink` (optional).

**Color / type.** bg `#202426` + overlay; H1 = **Hero H1** `80px`/lh`78px`/w400/ls`-3.4px`, color off-white `#efefef`, display font (Space Grotesk substitute). Subcopy = body large `20px`/lh`1.3`, `#efefef`. Eyebrow = mono UPPERCASE caption `0.05em`, `#efefef` (or blue `#4e8af7` glyph). CTA = white-filled primary button (`#fff`/`#1e2124`). **Motion:** headline settle-in; `prefers-reduced-motion` → poster image instead of autoplay video (see `06`).

**Original sample microcopy**

| Slot | Copy |
| --- | --- |
| eyebrow | `MANAGED IT · CLOUD · SECURITY` |
| headline | `IT that keeps your business moving.` |
| subcopy | `Jicate runs, secures, and modernizes the technology your teams depend on — so you can focus on the work that matters.` |
| primaryCTA | `↖ Get Started` |
| secondaryLink | `Talk to an expert ↳` |

> Alt headline options (original, same display role): `Your infrastructure, engineered to stay up.` · `Less firefighting. More forward.`

---

## 6. Section 4 — Featured case-study band

**Purpose.** Immediately back the hero promise with one flagship, outcome-led proof point.

**Layout.** **LIGHT** band on `--color-band` `#efefef`. A featured story card: large image/media on one side, text block on the other (image-left / text-right on desktop, stacked on mobile). Text block = eyebrow + `34px` H3 headline + short caption + `↳` "learn more" arrow link. Quantified result is the hook.

**Components.** Featured story card (image + `34px` headline + caption + `↳`).

**Content slots.** `eyebrow` (mono label, e.g. CASE STUDY) · `image`/`media` · `headline` (H3 34px) · `caption` (body) · `metric`(s) (optional stat row) · `link` (↳).

**Color / type.** Band bg `#efefef`; ink `#1e2124` text; eyebrow mono UPPERCASE caption; headline `34px` (`--headline`) w400 lh`1`–`1.1765`; caption body `18px`; metrics may use big H2 `~50px` for the number, mono caption for the label; link uses accent `#2b5945` + arrow nudge on hover (opacity `0.33`).

**Original sample microcopy**

| Slot | Copy |
| --- | --- |
| eyebrow | `CASE STUDY · HEALTHCARE` |
| headline | `A regional clinic network cut unplanned downtime by 40%` |
| caption | `Jicate consolidated three help desks into one managed service, hardened the network, and moved records to a compliant cloud — without a single missed appointment.` |
| metric 1 | `40%` — `LESS DOWNTIME` |
| metric 2 | `< 8 min` — `AVG. RESPONSE` |
| link | `Read the case study ↳` |

---

## 7. Section 5 — Services numbered scrolly section

**Purpose.** The core explainer: the five Jicate service lines, presented as a scroll-driven, sticky-pinned numbered list so each gets a full beat of attention.

**Layout.** **LIGHT canvas** `#ffffff`. Sticky/pinned construction (from `06` motion): a left (or sticky) panel holds the section eyebrow/intro; the right side scrolls through five numbered items. The numbered index **`/0.1` → `/0.5`** (mono) advances as you scroll; a small geometric **earmark glyph** marks each item. Each item: index `/0.x` + `34px` (or `46px`) H3 + body paragraph + `↳` link. `prefers-reduced-motion` → no pinning, items become simple stacked reveals.

**Components.** Sticky-pinned numbered list, `/0.x` mono index, earmark glyphs (circle `O`, house/triangle `A`), H3 headings, `↳` links.

**Content slots (per item ×5).** `index` (/0.x) · `earmark` glyph · `title` (H3) · `body` · `link` (↳). Plus section-level `eyebrow` + `intro` headline.

**Section intro copy**

| Slot | Copy |
| --- | --- |
| eyebrow | `WHAT WE DO` |
| intro headline | `Five disciplines, one accountable team.` |

**The five service items (original)**

| Index | Earmark | Title | Body | Link |
| --- | --- | --- | --- | --- |
| `/0.1` | O | `Managed IT` | `We run your day-to-day technology end to end — monitoring, patching, asset management, and a help desk your people actually like calling. One SLA, one number to call.` | `Explore Managed IT ↳` |
| `/0.2` | A | `Cloud` | `Plan, migrate, and operate on AWS, Azure, or Google Cloud. We right-size for cost, build for resilience, and hand you a platform you can grow on.` | `See cloud services ↳` |
| `/0.3` | O | `Cybersecurity` | `Layered defense built around your risk: managed detection and response, identity, endpoint hardening, and audit-ready compliance for SOC 2, HIPAA, and ISO 27001.` | `Explore security ↳` |
| `/0.4` | A | `Software Development` | `Custom applications, integrations, and automation that retire manual work. We ship in small, tested increments and stay on for the long run.` | `See how we build ↳` |
| `/0.5` | O | `Support` | `Responsive support across email, chat, and phone — backed by clear escalation, real humans, and SLAs we publish and meet.` | `Meet the support team ↳` |

**Color / type.** Canvas `#ffffff`; ink `#1e2124`; `/0.x` index + earmark in mono UPPERCASE caption `0.05em` (accent `#2b5945` for the active item is permitted); titles `34px`/`46px` w400; body `18px`/lh`1.389`; active-item accent wash may use `--color-accent-5` `rgba(43,89,69,0.05)` / `--color-accent-10`. Links accent `#2b5945` + `↳` nudge.

---

## 8. Section 6 — Value / manifesto band

**Purpose.** State Jicate's operating philosophy — the *why* and *how* behind the services. A quiet, editorial beat that builds trust between proof and testimonials.

**Layout.** Calm **LIGHT** band — either `--color-band` `#efefef` or canvas `#ffffff` with generous whitespace. A single large **statement headline** rendered in **grey ink-medium `#636363`** (the measured "statement headline" treatment), optionally with a short supporting paragraph and a `↳` link to the About/Approach page. Centered or wide-left, lots of breathing room (`60px`+ vertical spacing).

**Components.** Statement headline (`~46px`, w400, grey `#636363`), optional body paragraph, optional `↳` link.

**Content slots.** `statement` (large grey headline) · `support` (optional body) · `link` (optional ↳).

**Color / type.** Statement headline `~46px` w400 color **`#636363`** (ink-medium — acceptable at this large size per `01` contrast guidance); support body `18px` ink `#1e2124`; link accent `#2b5945`. Scroll reveal = fade + `translateY` (transform/opacity only).

**Original sample microcopy**

| Slot | Copy |
| --- | --- |
| statement | `We treat your systems the way good engineers treat their own: documented, monitored, and built to fail quietly.` |
| support | `No mystery boxes, no lock-in, no surprise invoices. You own your stack — we make sure it keeps its promises.` |
| link | `How we work ↳` |

> Alt statement (original): `Reliability isn't luck. It's the boring work, done relentlessly.`

---

## 9. Section 7 — Testimonials (client cards)

**Purpose.** Multi-voice social proof in the clients' own words; reduce risk before the final CTA.

**Layout.** **LIGHT canvas** `#ffffff`. A **horizontal-scroll row** of testimonial cards with **scroll-snap** / drag (see `06` motion). Each card: surface bg (`#efefef` / `#f3f3f3`), a **folded / dog-ear top-right corner**, the **client name in MONO UPPERCASE** (letter-spaced `0.05em`), and the quote in body grotesque. Optional role/company line. Sharp corners (the dog-ear is a clipped corner, not a radius).

**Components.** Testimonial card (dog-ear), horizontal-scroll row with scroll-snap.

**Content slots (per card).** `quote` (body) · `clientName` (mono UPPERCASE) · `role` / `company` (caption) · optional `logo`/mono client label.

**Color / type.** Card bg `--color-surface-medium` `#f3f3f3` or `--color-band` `#efefef`; quote body `18px`/lh`1.389` ink `#1e2124`; client name mono UPPERCASE caption `0.05em` (ink or ink-light `#767676`); role line caption `10px` ink-light `#767676`. Corners radius `0` with a clipped dog-ear top-right.

**Original sample microcopy** (all quotes invented for Jicate)

| Card | Quote | Client name | Role |
| --- | --- | --- | --- |
| 1 | `"Our team stopped thinking about IT — which is the highest compliment I can give a managed provider."` | `NORTHWIND LOGISTICS` | `VP, Operations` |
| 2 | `"The cloud migration was the first big project in years that finished on time and under budget."` | `MERIDIAN FINANCE` | `CTO` |
| 3 | `"After the security overhaul we passed our audit on the first pass. Jicate had the evidence ready before we asked."` | `CEDARLINE HEALTH` | `Compliance Director` |
| 4 | `"When something breaks at 2 a.m., a real person answers and it gets fixed. That's the whole pitch, and they deliver it."` | `ATLAS MANUFACTURING` | `IT Manager` |

---

## 10. Section 8 — Split CTA

**Purpose.** The conversion climax: present two clear intents side by side so every visitor has an obvious next step.

**Layout.** **Two-up row** (the big split CTA from `05`): one **LIGHT** half on `--color-band` `#efefef` (ink text) and one **BLACK** half on `--color-near-black` `#202426` (off-white text). Each half is a **large grotesque label** with a **→** arrow right-aligned. Sharp corners. Stacks vertically on mobile (light on top, dark below, or vice versa).

**Components.** Big split CTA (light half + black half), each a large label + right-aligned `→`.

**Content slots.** Light half: `label` + `→` + `href`. Black half: `label` + `→` + `href`. Optional small sublabel/caption per half.

**Color / type.** Light half bg `#efefef`, label ink `#1e2124`. Black half bg `#202426`, label off-white `#efefef` (blue `#4e8af7` permitted as the dark-context accent on the arrow/hover). Labels at big H2 `~50px` (or `46px`) grotesque, w400; `→` right-aligned; hover = arrow nudge `translateX` + opacity `0.33`.

**Original sample microcopy**

| Half | Label | Sublabel (optional) | Arrow |
| --- | --- | --- | --- |
| Light (`#efefef`) | `Talk to an Expert` | `A 30-minute call, no sales script.` | `→` |
| Dark (`#202426`) | `Get Started` | `Tell us what's slowing you down.` | `→` |

---

## 11. Section 9 — Footer

**Purpose.** Dense mega-directory for the full site, social presence, and legal — the page's closing infrastructure.

**Layout.** Dense directory, mostly **DARK** region(s) on `--color-near-black` `#202426` with off-white `#efefef` text (some links dimmed via ink-light/lower opacity). **Left:** a row of outlined **PILL-shaped (rounded — the ONLY rounded elements in the system)** social buttons in **UPPERCASE**. Then multiple link columns grouped by category. Bottom: legal row (copyright, privacy, terms) + locale.

**Components.** Footer link groups, social pills (outlined, rounded, UPPERCASE), legal row.

**Social pills** (outlined, UPPERCASE — original/standard channel labels): `YOUTUBE` · `X` · `LINKEDIN` · `GITHUB` · `STORE`

**Footer link groups (original labels)**

| Column | Links |
| --- | --- |
| **Services** | `Managed IT` · `Cloud` · `Cybersecurity` · `Software Development` · `Support` |
| **Industries** | `Healthcare` · `Finance` · `Retail & E-commerce` · `Manufacturing` · `Public Sector` · `Education` |
| **Case Studies** | `All Case Studies` · `Healthcare` · `Finance` · `Manufacturing` |
| **Resources** | `Blog` · `Guides & Whitepapers` · `Documentation ↗` · `Webinars` · `Service Status ↗` |
| **Company** | `About` · `Our Approach` · `Careers ↗` · `Partners` · `Newsroom` · `Contact` |
| **Legal** | `Privacy Policy` · `Terms of Service` · `Security` · `Accessibility` · `Cookie Settings` |

**Bottom / legal row**

| Slot | Copy |
| --- | --- |
| copyright | `© 2026 Jicate IT Service. All rights reserved.` |
| tagline (optional) | `Engineered to stay up.` |
| locale | `Global (EN)` |

**Color / type.** Dark region bg `#202426`; text off-white `#efefef`; dimmed links via `--color-ink-light` `#767676`-equivalent or lowered opacity; column headers mono UPPERCASE caption `0.05em`; links body small `16px`. Social pills = outlined (`0.8px`), **rounded** (the lone exception to radius `0`), UPPERCASE mono. Hover opacity `0.33` + arrow nudge on `↗` links.

---

## 12. Build assembly notes

- **Order is load-bearing.** Render the nine sections in the order in §1. Announcement bar + nav form the persistent header; sections 3–8 are page content; footer closes.
- **Context switching.** Sections 1, 3, parts of 8, and 9 are **DARK** (`#202426`, off-white `#efefef`, blue `#4e8af7` accent only). Sections 4, 5, 6, 7 and the light half of 8 are **LIGHT** (`#ffffff`/`#efefef`, ink `#1e2124`, pine green `#2b5945` accent). Apply dark styling per-section (a `.is-dark` wrapper), **not** globally — the canvas stays white regardless of OS theme.
- **One CTA verb.** "Get Started" is the single primary action (nav, hero, dark half of split CTA). "Talk to an Expert" is the softer secondary intent (hero secondary link, light half of split CTA). Keep these consistent.
- **Motion hooks** (see `06`): nav transparent→solid on scroll; hero headline settle-in + video; sections 4/6/7 fade+`translateY` reveals; section 5 sticky-pinned with advancing `/0.x`; section 7 horizontal scroll-snap; all hovers opacity `0.33` + arrow nudge. Honor `prefers-reduced-motion`.
- **Copy length discipline.** Headlines stay short enough to live in the display/H2/H3 roles without wrapping awkwardly at `80px`/`50px`/`34px`; body slots target 1–3 lines at `18px`.

---

## 13. LEGAL / IP REMINDER (repeat)

> **ALL COPY IN THIS DOCUMENT IS ORIGINAL** and written for **Jicate IT Service**. We replicate Palantir's **design language and content architecture** (section order, layout, grid, type scale, components, motion, motifs) — **never** their marketing copy, testimonial quotes, or product names, and **never** a light find-replace of their sentences. Every headline, subcopy line, CTA label, testimonial, and link label above is fresh Jicate copy and may ship as-is. If you write more copy, write it from scratch in Jicate's voice. References to the source site describe **generic structural patterns only**.
