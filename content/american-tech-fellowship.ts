/**
 * Content for the /american-tech-fellowship page — a faithful DESIGN rebuild of
 * the reference page, mapped onto this project's design system. Layout/visual
 * treatment matches the reference 1:1.
 *
 * IMPORTANT: the reference's long-form essay and the individual fellow bios are
 * the source's own editorial/biographical content. They are NOT reproduced here
 * — every paragraph below is neutral PLACEHOLDER text and the fellows use
 * generic placeholder names. The user replaces all copy with their own.
 *
 * Types are declared locally so the page is fully self-contained.
 *
 * Local media (in /public/offerings-american-tech-fellowship):
 *   shutterstock_2589895863.png — hero image
 *   shutterstock_2076774316.jpeg — fellowship image
 *   (fellow videos + press images not shipped — placeholders used)
 */

const HERO_IMG_BASE = "/offerings-american-tech-fellowship";

/* ------------------------------ shared shapes ----------------------------- */

export interface CTA {
  label: string;
  href: string;
}

export interface Fellow {
  name: string;
  /** Short placeholder bio paragraph. */
  bio: string;
  /** Pull-quote placeholder. */
  quote: string;
  /** Video path, or null when not shipped (poster placeholder). */
  video: string | null;
}

export interface PressItem {
  date: string;
  source: string;
  title: string;
  cta: string;
  image: string | null;
}

/* --------------------------------- hero ----------------------------------- */

export const hero = {
  title: "The American Tech Fellowship",
  body: "A placeholder tagline goes here — swap in your own headline copy.",
  image: `${HERO_IMG_BASE}/shutterstock_2589895863.png`,
  alt: "Fellowship hero image",
};

/* ----------------------------- renaissance essay -------------------------- */

export const renaissance = {
  heading: "A New Technological Renaissance",
  // Neutral placeholder paragraphs — replace with your own editorial copy.
  paragraphs: [
    "This is placeholder copy. Replace it with your own opening paragraph describing the program's mission and the people it serves.",
    "Placeholder paragraph. Use this space to introduce the builders, makers, and technologists the fellowship is designed for.",
    "Placeholder paragraph. Describe the broader story you want to tell about technology, craft, and opportunity.",
    "Placeholder paragraph. Add the context and history that frames why this program exists.",
    "Placeholder paragraph. Continue the narrative here with your own words.",
    "Placeholder paragraph. Outline the challenge the program responds to.",
    "Placeholder paragraph. Describe the role of new technology and how people put it to work.",
    "Placeholder paragraph. Share the belief or principle that guides the program.",
    "Placeholder paragraph. Reinforce that conviction with a concrete example.",
    "Placeholder paragraph. Explain how the work supports people in their craft.",
    "Placeholder closing paragraph. Tie the vision back to the fellowship and the opportunity it creates.",
  ],
  link: { label: "competitive advantage", href: "#" } satisfies CTA,
};

/* ------------------------------- the fellowship --------------------------- */

export const fellowship = {
  heading: "The Fellowship",
  body: "Placeholder description of the fellowship — a high-intensity training program that equips participants with in-demand skills. Replace with your own copy.",
  bodyTwo: "Placeholder line: exceptional graduates connect directly with employers who need their skills.",
  highlights: [
    {
      title: "High-intensity training:",
      body: "Placeholder — describe the hands-on curriculum and the tools participants learn.",
    },
    {
      title: "Job-placement opportunities:",
      body: "Placeholder — describe how graduates are matched with hiring partners across the country.",
    },
    {
      title: "No tech-degree needed:",
      body: "Placeholder — describe how the program is open to people from many backgrounds, not just résumé pedigrees.",
    },
  ],
  image: `${HERO_IMG_BASE}/shutterstock_2076774316.jpeg`,
  alt: "Fellowship image",
};

/* -------------------------------- apply band ------------------------------ */

export const applyBand = {
  eyebrow: "Applicants: Reawaken the Giant.",
  heading: "Ready to Build the Future?",
  cta: { label: "Apply Now", href: "#apply" } satisfies CTA,
};

/* ----------------------------- meet the fellows --------------------------- */

export const meetFellows = {
  bigHeading: "Unlocking America's Next Generation of Builders",
  heading: "Meet the Fellows",
  intro:
    "Placeholder intro. From thousands of applicants, a select cohort was chosen for their drive, ingenuity, and practical skill. The first cohorts include:",
  cohort: [
    "Placeholder cohort line one",
    "Placeholder cohort line two",
    "Placeholder cohort line three",
  ],
  unitesLabel: "What unites them:",
  unites:
    "Placeholder — a shared commitment to learning, building, and solving real problems. Replace with your own copy.",
  capstoneLabel: "Capstone Projects:",
  capstone:
    "Placeholder — fellows complete an end-to-end capstone project that demonstrates their ability to apply new tools to real-world challenges.",
};

export const fellows: Fellow[] = [
  {
    name: "Fellow One",
    bio: "Placeholder bio. Replace with a short profile of this fellow — their background, their path, and what they bring to the program.",
    quote: "Placeholder pull-quote from the fellow goes here.",
    video: null,
  },
  {
    name: "Fellow Two",
    bio: "Placeholder bio. Replace with a short profile of this fellow.",
    quote: "Placeholder pull-quote from the fellow goes here.",
    video: null,
  },
  {
    name: "Fellow Three",
    bio: "Placeholder bio. Replace with a short profile of this fellow.",
    quote: "Placeholder pull-quote from the fellow goes here.",
    video: null,
  },
  {
    name: "Fellow Four",
    bio: "Placeholder bio. Replace with a short profile of this fellow.",
    quote: "Placeholder pull-quote from the fellow goes here.",
    video: null,
  },
  {
    name: "Fellow Five",
    bio: "Placeholder bio. Replace with a short profile of this fellow.",
    quote: "Placeholder pull-quote from the fellow goes here.",
    video: null,
  },
];

/* -------------------------------- hiring band ----------------------------- */

export const hiringBand = {
  heading: "Interested in hiring a Fellow?",
  cta: { label: "Contact us", href: "#contact" } satisfies CTA,
};

/* ------------------------------- press & media ---------------------------- */

export const pressMedia = {
  heading: "Press & Media",
  items: [
    { date: "Placeholder date", source: "Source One", title: "Placeholder press headline one.", cta: "Read now", image: null },
    { date: "Placeholder date", source: "Source Two", title: "Placeholder press headline two.", cta: "Read now", image: null },
    { date: "Placeholder date", source: "Source Three", title: "Placeholder press headline three.", cta: "Read now", image: null },
    { date: "Placeholder date", source: "Source Four", title: "Placeholder press headline four.", cta: "Read Now", image: null },
  ] satisfies PressItem[],
};
