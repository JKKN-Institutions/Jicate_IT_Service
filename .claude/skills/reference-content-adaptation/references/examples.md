# Worked examples: classify, then adapt

Read this when you're unsure how to treat a specific piece of text. It turns the
three buckets from SKILL.md into concrete decisions.

> The "Reference" snippets below are **fabricated, generic illustrations** — not
> copied from any real site — written only to show the *pattern*. Never paste
> real reference prose into these examples or into the page. Treat them as a
> teaching aid, not a script.

## The three buckets at a glance

| Bucket | Looks like | Action |
| --- | --- | --- |
| **Generic / functional** | short labels, buttons, plain headings, form fields | **Copy verbatim** (character-for-character) |
| **Informational prose** | marketing/feature/solution paragraphs; facts & claims | **Rewrite in fresh wording**, keep all the information |
| **Creative / biographical** | essays, manifestos, bios, named people, named customers, quotes, press headlines | **Genericize or keep placeholder** (don't reproduce the expression) |

When a string sits on a boundary, prefer the safer bucket to its right.

---

## Bucket 1 — Generic / functional → copy verbatim

These are standard UI/marketing tokens; matching them exactly is expected and safe.
Match **capitalization, punctuation, symbols (→ ↳ &), and spacing** precisely.

- Plain section headings: `Press & Media`, `Meet the Fellows`, `The Fellowship`, `Ready to Build the Future?`
- Form labels / placeholders: `First Name`, `Business Email`, `Country`, `Select…`
- Eyebrows / badges: `POPULAR SEARCHES`, `Applicants: Reawaken the Giant.`

> **NOT here: buttons & redirection links.** Button/CTA labels (`Get Started`,
> `Get a Demo`, `Apply Now`, `Read More →`, `Start Building Now`) and any link's
> text *or* destination are **preserved as the site already has them** — never
> matched to the reference. See "Buttons & redirection" below.

**A single character counts** (for the labels that *are* in this bucket). Real
fixes made in this repo:
- local `Job-placement opportunities:` → reference `Job placement opportunities:` (drop the hyphen)
- local `No tech-degree needed:` → reference `No tech degree needed` (drop the hyphen *and* the trailing colon)

Tip: some labels are uppercased by CSS (`text-transform`), so extracted page text
may read ALL-CAPS while the *source string* is sentence-case. Compare against the
casing you'll actually type into the content file, not the rendered caps.

---

## Bucket 2 — Informational prose → rewrite originally

Facts and ideas aren't copyrightable, but the *sentences* are. Read it, understand
it, then re-express the same substance in your own structure.

**Reference (illustrative):**
> Our platform unifies fragmented data from across your operations — ERP, CRM,
> sensors, and document stores — into a single model your teams can act on in
> real time.

**❌ Too close (this is still copying — minor word swaps):**
> Our system unifies scattered data from across your operations — ERP, CRM,
> sensors, and document repositories — into one model your teams can act on
> instantly.

**✅ Genuine rewrite (same information, new expression, Palantir→Jicate):**
> Jicate pulls together the data that's normally scattered across ERP systems,
> CRMs, sensors, and document stores, and turns it into one coherent picture your
> teams can work from as events unfold.

Why the ✅ works: every fact is preserved (the four data sources, the "unify into
one model", the real-time action) but the sentence is rebuilt from scratch —
different verbs, order, and phrasing. That's adaptation, not substitution.

Checklist for a good rewrite:
- Same information, same claims, same level of detail, same order.
- No shared sentence skeletons; if a reader could diff yours against the source
  word-by-word, rewrite harder.
- Don't invent facts or add filler marketing the reference didn't make.

---

## Bucket 3 — Creative / biographical → genericize or placeholder

Here the wording *is* the value, or the content is about real people/companies —
so there's nothing you can safely "preserve" by rewriting. Neutralize instead.

- **Manifestos / essays / mission prose:** keep a neutral placeholder paragraph.
  Don't paraphrase line-by-line — that just launders the original expression.
- **Named customers / partners → generic descriptors.** Established mappings used
  across this repo (reuse these for consistency):

  | Real name | Generic descriptor |
  | --- | --- |
  | Jacobs | a global engineering partner |
  | Sonnedix | a global solar operator |
  | Southern California Edison | a major US utility |
  | Skywise / Airbus | an aviation data platform |
  | Trafigura | a global commodities trader |
  | Doosan Infracore | a heavy machinery manufacturer |
  | DISH | a US 5G operator |
  | Deutsche Telekom | a European telecom leader |
  | Swiss Re | a global reinsurer |
  | Cleveland Clinic / Tampa General | a leading hospital network |

- **Real individuals** (fellows, executives) → generic placeholder names
  (`Fellow One`, `Fellow Two`) or drop the name entirely.
- **Verbatim quotes / testimonials** → placeholder, or a generic line attributed
  to a role ("a plant operations lead") rather than a real person.
- **Press headlines / article titles** → placeholder headlines.

Prefer preserving any placeholder the content file already ships over inventing a
new look-alike.

---

## Buttons & redirection → always preserved (never match the reference)

Anything clickable that navigates — a button/CTA label **or** a link's text and
its destination — stays exactly as the site already has it. Do not sync these to
the reference, even though they look like "generic labels".

Why: the reference's CTAs point at the source's brand and routes; the site's
buttons and links are intentional wiring (its own labels, its own `/enquiry-form`,
`/contact`, `/aip`, in-page anchors, etc.). Overwriting them breaks navigation or
re-brands the wrong thing.

| Element | Reference says | What you do |
| --- | --- | --- |
| Primary CTA | "Request a Demo" → some Palantir URL | keep the site's existing label + `href` (e.g. "Get a Demo" → `/enquiry-form`) |
| Sub-nav CTA | "Start Building Now" → palantir route | keep the site's label + route unchanged |
| Card link | "Read More →" → source article | keep the site's link text + destination |
| Nav/anchor link | any label/target | untouched |

So in a content file, leave `cta`, `link`, `href`, button `label`, and any
`{ label, href }` pair **as-is** — only adapt the non-clickable prose and labels
around them. (A form's submit label like `Submit` is fine to leave as the site has
it too.)

---

## Branding quick-map

- `Palantir` → `Jicate` — never leave the string "Palantir" in the codebase.
- The "Foundry" product page → this repo calls it **"Jicate Platform"** / "the
  platform" — check the content file for the established name rather than inventing one.
- "Ontology" is a generic technical term — **keep it** (e.g. "the Jicate Ontology").

## Editing mechanics (where the text lives)

- Edit **string values** in `content/<route>.ts` (and `content/<route>-page.ts`
  if the plain name is taken — e.g. `offerings.ts` is the homepage list,
  `offerings-page.ts` is the `/offerings` page).
- Update `app/<route>/page.tsx` `metadata` (title/description) — page-scoped, so
  allowed; this is NOT the shared header/footer.
- Never edit components, Tailwind classes, the shared form (`components/shared/*`),
  the header/footer (`components/layout/*`, `content/navigation.ts`), other pages,
  or global files.
- Leave every button/CTA label and every link's text **and** `href`/destination
  untouched — see "Buttons & redirection" above. Adapt only the non-clickable prose
  and labels around them.
- Verify: `npx tsc --noEmit` clean → render the page (dev port drifts 3000/3001,
  probe both) → compare section-by-section → confirm no "Palantir" remains and the
  design didn't move.
