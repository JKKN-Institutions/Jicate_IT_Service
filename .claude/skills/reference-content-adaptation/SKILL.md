---
name: reference-content-adaptation
description: >-
  Use this skill when the user wants an EXISTING local page or route to say the
  same thing as a reference web page — updating, matching, syncing, filling in,
  or rewriting only its visible text/copy while keeping the design frozen. The
  tell is a reference (a URL or "the Palantir X page") plus a local route,
  combined with any "text-only / copy-only / keep the layout, components, and
  styling exactly as they are / zero design changes / don't touch the design"
  constraint. Also trigger for "text-only clone," "make the copy match," "fill
  in placeholder copy from this page," or "match headings exactly and reword the
  long paragraphs." This fits the Jicate Palantir-clone repo, where designs are
  already built and only the wording needs to match. Do NOT trigger for: building
  a brand-new page, restructuring or moving sections, design/CSS/layout fixes,
  typo fixes, translation, or writing fresh original content with no reference
  page to match. This skill NEVER changes buttons, CTAs, or links — neither their
  visible label text nor their href/destination — nor any shared form/header/footer;
  it only rewrites body prose and plain section headings.
---

# Reference Content Adaptation (Text Only)

## What this does and why

The user is rebuilding reference pages (usually Palantir) as their own site (Jicate).
The **design is already built and correct** — the only job here is to make the
**visible words** convey the same thing as the reference, without disturbing a
single pixel of the design. Think of yourself as a copy editor working on a locked
layout: you may retype the words in the boxes, but you may not move, resize,
recolor, or restructure the boxes.

Two forces are in tension and both must be honored:

1. **Fidelity** — the page should say the same things, in the same order, at the
   same level of detail as the reference.
2. **Originality / IP safety** — you must NOT reproduce the reference's copyrighted
   prose. Short functional labels are fine to copy; substantial prose must be
   genuinely rewritten (not word-swapped); creative/literary/biographical content
   is genericized or left as placeholder.

Getting this balance right is the whole point of the skill.

## Inputs

The user provides:
1. **Reference Page URL** (e.g. `https://www.palantir.com/offerings/energy/`)
2. **Local page path/route** (e.g. `/energy`)

If either is missing, ask for it — but otherwise run the whole thing end-to-end
without stopping for confirmations.

## The core rule: edit text VALUES, not markup

In this project, page copy lives in a **content file**, not in the JSX. Almost
always the visible strings for a route `/X` live in `content/X.ts` (sometimes
`content/X-page.ts` when the plain name is already taken — e.g. `offerings.ts` is
the homepage list, `offerings-page.ts` is the `/offerings` page). The components in
`components/X/*.tsx` just render those strings.

**So: change string values in the content file(s). Do not touch the components,
classes, layout, or structure.** Editing the content file is how you update text
without any risk of changing design. Only touch a component's JSX if a piece of
visible text is hard-coded there with no content-file source — and then change
*only* the text node, nothing around it.

Find the right files first:
- `content/<route>.ts` (and `content/<route>-page.ts` if present)
- `components/<route>/` to confirm which content fields are actually rendered
- `app/<route>/page.tsx` for the `metadata` (title/description) — update these too,
  they are visible-ish page text and page-scoped (NOT the shared header/footer).

## Step-by-step

### 1. Locate the page's content
Glob `content/<route>*.ts` and `components/<route>/**`. Read the content file(s) so
you know every string the page renders and how it's grouped (hero, sections, cards,
CTAs, form labels, etc.).

### 2. Read the ENTIRE reference page
The reference is a lazy single-page app — content loads as you scroll. Open it with
the chrome-devtools MCP, set a desktop viewport (1440), then **slow-scroll top to
bottom** (e.g. 300px steps with ~120ms pauses) to trigger every lazy section before
extracting. Then pull the text in reading order (headings, paragraphs, list items,
card titles/bodies, stats, CTAs, captions, form labels, badges, metadata). Do not
skip a section. Understand the whole page before writing anything.

Practical extraction tip: query leaf text nodes / `h1–h6,p,li,button,a` in the
`<main>`, sort by vertical position, and cap long strings so a single dump doesn't
blow the token budget. Some labels are uppercased by CSS (`text-transform`), so the
extracted text may look ALL-CAPS while the source string is sentence-case — compare
against the *source* casing you'll actually write.

### 3. Classify every piece of text
For each string, decide which bucket it's in:

- **Generic / functional (copy verbatim):** short, standard UI or marketing wording
  that isn't creative authorship — section headings that are plain phrases, form
  labels/placeholders, eyebrows, stat labels, list labels. Match these
  **character-for-character**: capitalization, punctuation, symbols (→, ↳, &), and
  spacing. Fix your local copy to match exactly. **Exception — buttons and
  redirection links are NOT in this bucket:** leave every button/CTA label and
  every link's text *and* destination exactly as the site already has them (see
  "Buttons & redirection are preserved" under Hard boundaries). Do not adopt the
  reference's CTA wording or link targets.

- **Copyrighted informational prose (rewrite in fresh wording):** longer marketing
  paragraphs, service/platform/solution/feature descriptions, capability write-ups,
  "how it works" copy, case-study summaries. Facts and ideas are not copyrightable,
  but the *expression* is. Read it, understand it fully, then **write it anew in
  your own words** — same information, same intent, same detail level, same order.
  Do NOT go sentence-by-sentence or swap a few words; that is still copying. The
  result should read as if an independent writer conveyed the same substance.

- **Creative / literary / biographical (genericize or keep placeholder):** manifestos,
  essays, mission/vision prose whose value *is* the wording; personal bios; real
  named individuals; named third-party customers/partners; verbatim quotes; press
  headlines. Here there is no neutral "information" you can preserve without copying
  expression, and reproducing real people's names/quotes raises separate concerns.
  Keep these as neutral placeholder copy or genericize them (e.g. "a global solar
  operator", "a national research center", generic fellow names). This matches how
  these pages were originally built and keeps you safe. Prefer preserving any
  existing placeholder the content file already has over inventing look-alike names.

When unsure between "informational prose" and "creative content", lean toward
genericizing — it's the safe default and rarely hurts the design or the message.

For worked before/after examples of each bucket — including a "too close vs.
genuine rewrite" comparison, the repo's customer-genericization map, and the
exact character-level fixes made on real pages — read `references/examples.md`.

### 4. Rebrand
Replace **Palantir → Jicate** everywhere. Genericize other company-specific
references so they naturally read as Jicate while keeping the meaning (product names
like "Foundry"/"Gotham" follow whatever this project already calls them — check the
content file and existing pages for the established name rather than inventing one).
Named customers/partners → generic descriptors. Never introduce the string
"Palantir" into the codebase.

### 5. Apply edits
Edit only string values in the content file(s) (and page `metadata`). Preserve every
key, type, interface, import, export, and the file's structure. Don't reformat,
reorder, or "clean up" anything — change the words, nothing else. Leave every
button/CTA label and every redirection link untouched — neither its text nor its
`href`/destination — keeping exactly what the site already uses.

### 6. Verify
- `npx tsc --noEmit` → 0 errors (you only changed strings, so this should stay clean;
  if it breaks you accidentally touched syntax — fix that).
- Render the page (dev server; the port drifts between runs — it has been 3000 and
  3001, so probe both with `curl` and use whichever returns 200). Open it in
  chrome-devtools, slow-scroll, and compare section-by-section against the reference:
  generic labels match exactly; rewritten prose says the same thing originally;
  no "Palantir" remains; no placeholder left where real (non-copyrighted) copy exists.
- Confirm you changed **nothing visual**: same layout, spacing, order, images, icons.
  A pure content-string edit can't move the design — if anything shifted, you edited
  the wrong thing; revert and redo via the content file.

## Hard boundaries (do not cross)

- **Design is frozen.** No changes to layout, component/HTML structure, CSS/Tailwind
  classes, spacing, padding, margins, colors, typography, fonts, sizes, weights, line
  heights, borders, shadows, icons, images, videos, animations, transitions, hover
  effects, responsiveness, or any JS/TS logic/functionality. Only visible text values.
- **Buttons & redirection are preserved.** Never change a button/CTA label or a
  redirection link — not its text, not its `href`/destination — to match the
  reference. Keep exactly what the site already uses (its own "Get Started", "Get a
  Demo", "Contact us", "Start Building Now", "Read More →", and its own routes like
  `/enquiry-form`, `/contact`, `/aip`). The reference's CTAs and links point at the
  source's brand and routes; the site's calls-to-action and navigation are
  intentional and must stay as-is. This overrides the "copy generic labels verbatim"
  rule for anything clickable that navigates.
- **Header & Footer are protected** — never edit them or their data (`components/layout/*`,
  the nav/mega-menu/search, footer sections/links/social/copyright, `content/navigation.ts`),
  even if the reference's header/footer differ.
- **Shared components are protected** — the shared contact/enquiry form
  (`components/shared/*`), and anything imported by multiple pages. Only touch files
  that belong to the one target route.
- **Scope = one page.** Do not edit other pages, global files, config, or routes.
- **HTML structure** may only change if literally required to place updated text, and
  then minimally.

## Success criteria
- Design pixel-identical; layout, header, footer, functionality, animations, and
  responsiveness all unchanged.
- **Every button, CTA, and link is byte-for-byte unchanged — its visible label text
  AND its `href`/destination stay exactly as the site already had them.** The skill
  never adopts the reference's button/link wording or targets. This is a hard,
  verifiable check: diff every clickable string and route before and after — they
  must be identical.
- Only the target page's main content strings updated.
- Generic UI/functional text matches the reference exactly.
- Long copyrighted prose rewritten originally, preserving 100% of the meaning, intent,
  order, and detail.
- Creative/biographical content genericized or placeholdered (no copyrighted prose,
  real names, or quotes reproduced).
- All branding is "Jicate"; no "Palantir" anywhere.
- `tsc` clean; page renders; production-ready in one pass.

## Notes for this repo
- Content-file architecture: `content/<route>.ts` → `components/<route>/*` → `app/<route>/page.tsx`.
- Reply to the user in Tanglish (English letters, no Tamil script) if that's the
  session norm.
- Dev server port varies (3000/3001) — probe before assuming.
