/**
 * Content for the /government-financial-management page — a faithful DESIGN
 * rebuild of the reference "Palantir Financial Management | Government" page,
 * mapped onto this project's design system. Layout matches the reference 1:1;
 * the page is DARK (rgb(30,33,36) background, white text).
 *
 * IMPORTANT: the reference's marketing prose, the Army case-study, and its
 * statistics are the source's own content — they are NOT reproduced here.
 * Long-form copy, the quote, and case details below are neutral PLACEHOLDER
 * text; short functional labels (section titles, tab/feature names, form
 * fields) are kept for parity. User replaces all copy.
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
  videoPoster: null as string | null,
};

/* ------------------------- 01 critical missions --------------------------- */

export const critical = {
  number: "01",
  heading: "Critical Missions, Limited Budgets",
  image: `${BASE}/shutterstock_1481978897__1_ (1).jpg`,
  alt: "Government analyst at work",
  body: "Placeholder paragraph. From safeguarding national security to protecting public health, government organizations serve our nation's most critical missions — and must do so with disciplined, transparent stewardship of every dollar.",
};

/* --------------------------- 02 case study -------------------------------- */

export const caseStudy = {
  number: "02",
  heading: "Case Study: Vantage Contract Management",
  quote: "Placeholder quote. During a recent fiscal year, the agency successfully deobligated billions in funding, well above prior-year levels…",
  attribution: "Placeholder Name, Title",
  partner: "Placeholder Partner",
  problem: "Placeholder problem-space. Describe how it was historically difficult for personnel to understand how much funding was on a given contract and when that funding would expire.",
  problem2: "Placeholder paragraph. Answering these questions required analysts to query multiple disconnected systems for large chunks of data and then piece it together from various sources.",
  image: null as string | null,
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
  intro: "Placeholder paragraph. Once established, an integrated foundation can power a multitude of financial workflows — from budgeting to auditing, and all the steps in-between.",
  cards: [
    {
      title: "Budgeting",
      body: "Placeholder description. Describe how budget analysts move from manual, spreadsheet-bound processes to a connected, auditable budgeting workflow.",
      image: null,
      alt: "Budgeting workflow",
    },
    {
      title: "Auditing",
      body: "Placeholder description. Describe how billions of transactions stream into a single environment for continuous, explainable auditing.",
      image: null,
      alt: "Auditing dashboard",
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
    { name: "jobTitle", label: "Job Title", type: "text", required: true },
    { name: "company", label: "Company / Institution", type: "text", required: true },
    { name: "country", label: "Country", type: "select", required: true },
  ],
  submitLabel: "Submit",
  privacyHref: "/privacy",
};
