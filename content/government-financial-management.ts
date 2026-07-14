/**
 * Content for the /government-financial-management page — a faithful DESIGN
 * rebuild of the reference "Palantir Financial Management | Government" page,
 * mapped onto this project's design system. Layout matches the reference 1:1;
 * the page is DARK (rgb(30,33,36) background, white text).
 *
 * IMPORTANT (IP): the reference's marketing prose, its case-study, and its
 * statistics are the source's own copyrighted content and are NOT reproduced.
 * The long-form copy below is ORIGINAL, Jicate-voiced prose conveying the same
 * general substance in fresh wording; the case study is genericized (no real
 * named customer, product, quote, or attribution). Short functional labels
 * (section titles, feature names, form fields) are kept for design parity.
 *
 * Local media (in /public/government-financial-management):
 *   shutterstock_1481978897__1_ (1).jpg — section 01 image
 *   shutterstock_534465133.jpg          — section 03 image
 */

const BASE = "/government-financial-management";

/* ------------------------------ shared shapes ----------------------------- */

export interface CTA {
  label: string;
  href: string;
}

export interface SolutionCard {
  title: string;
  body: string;
  image: string | null;
  alt: string;
}

/* --------------------------------- hero ----------------------------------- */

export const hero = {
  title: "Financial Management",
  tagline: "Ensure every cent serves the mission.",
  links: ["Auditing", "Budgeting", "Contract Management"],
  cta: { label: "Request a Demo", href: "#contact" } satisfies CTA,
  videoLabel: "Play Video",
  videoPoster: `${BASE}/Screenshot 2026-07-13 171732.png` as string | null,
};

/* ------------------------- 01 critical missions --------------------------- */

export const critical = {
  number: "01",
  heading: "Critical Missions, Limited Budgets",
  image: `${BASE}/shutterstock_1481978897__1_ (1).jpg`,
  alt: "Government analyst at work",
  body: "From safeguarding national security to protecting public health, government organizations carry the country's most consequential missions — and they must deliver on them while accounting for every dollar. As budgets tighten and oversight grows, finance teams need to see exactly where funding is committed, where it risks lapsing, and where it can do the most good. Jicate gives them that clarity, so disciplined stewardship becomes a daily habit rather than a year-end scramble.",
};

/* --------------------------- 02 case study -------------------------------- */

export const caseStudy = {
  number: "02",
  heading: "Case Study: Contract Management at Scale",
  quote: "By bringing our funding data together in one place, our teams could finally see what was committed and what was about to expire — and we returned unspent funds for reuse well ahead of past cycles.",
  attribution: "Finance Modernization Lead, Federal Agency",
  partner: "A federal agency",
  problem: "For years it was hard for staff to answer a simple question: how much funding remained on a given contract, and when would it expire? The information existed, but it was scattered across programs and buried in different formats.",
  problem2: "Getting an answer meant pulling large extracts from several disconnected systems and stitching them together by hand — slow, error-prone work that left little time for the analysis that actually mattered.",
  image: `${BASE}/Screen_Shot_2021-09-15_at_6.21.39_PM.png` as string | null,
  alt: "Excess-funds data visualization",
  link: { label: "Read more", href: "#" } satisfies CTA,
};

/* --------------------------- 03 power more impact ------------------------- */

export const impact = {
  number: "03",
  heading: "Power More Impact",
  statements: [
    "Jicate unifies financial data across silos, systems, and functions without a full system migration —",
    "Creating a collaborative, secure foundation for financial management professionals to analyze portfolios, track budgets, and intelligently reallocate funds.",
  ],
  image: `${BASE}/shutterstock_534465133.jpg`,
  alt: "Data center server racks",
};

/* --------------------------- 04 end-to-end -------------------------------- */

export const solutions = {
  number: "04",
  heading: "End-to-End Financial Solutions",
  intro: "Once that integrated foundation is in place, it can power the full range of financial work — from budget formation through execution and auditing, and every step in between. Teams stop maintaining data and start acting on it.",
  cards: [
    {
      title: "Budgeting",
      body: "Budget analysts move off manual, spreadsheet-bound processes onto a connected workflow where every figure is traceable to its source. Plans, adjustments, and approvals stay in sync, so the budget is always current and always auditable.",
      image: `${BASE}/shutterstock_715806535.jpg`,
      alt: "Secure data-center infrastructure powering financial workflows",
    },
    {
      title: "Auditing",
      body: "Millions of transactions flow into a single, governed environment where they can be checked continuously rather than once a year. Every result is explainable and traceable back to the underlying records, turning audit prep into an everyday state.",
      image: `${BASE}/shutterstock_1899127129.jpg`,
      alt: "Close-up examination in a precision lab environment",
    },
  ] satisfies SolutionCard[],
};

/* --------------------------------- form ----------------------------------- */

export const contactForm = {
  title: "Request a Demo",
  fields: [
    { name: "firstName", label: "First Name", type: "text", required: true },
    { name: "lastName", label: "Last Name", type: "text", required: true },
    { name: "businessEmail", label: "Business Email Address", type: "email", required: true },
    { name: "phone", label: "Phone Number", type: "tel", required: true },
    { name: "company", label: "Company / Institution", type: "text", required: true },
    { name: "country", label: "Country", type: "select", required: true },
  ],
  submitLabel: "Submit",
  privacyHref: "/privacy",
};
