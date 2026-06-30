/**
 * Content for the /semiconductors page — a faithful DESIGN rebuild of the
 * reference "Offerings | Semiconductors" page, mapped onto this project's
 * design system. Layout matches the reference 1:1; the page is LIGHT
 * (canvas background, ink text).
 *
 * IMPORTANT: the reference's marketing prose, brand/product names, and the
 * third-party press releases are the source's own content — they are NOT
 * reproduced verbatim. Brand names are swapped to Jicate, the news items are
 * neutral PLACEHOLDER headlines, and long-form copy is lightly Jicate-voiced.
 * Short functional labels (section titles, form fields) are kept for parity.
 * User replaces all copy.
 *
 * Local media (in /public/semiconductors):
 *   Image__35_.png  — knowledge-graph diagram (section 2, row A)
 *   Figure3__1_.jpg — product screenshot on a laptop (section 2, row B)
 */

const BASE = "/semiconductors";

/* ------------------------------ shared shapes ----------------------------- */

export interface CTA {
  label: string;
  href: string;
  external?: boolean;
}

export interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "select" | "textarea";
  required?: boolean;
}

export interface OptIn {
  name: string;
  label: string;
}

export interface NewsItem {
  date: string;
  title: string;
  href: string;
}

/* --------------------------------- hero ----------------------------------- */

export const hero = {
  title: "Jicate for Semiconductors",
  statement:
    "Perform sensitivity analysis and quickly design the next set of experiments to improve chip yield",
  cta: { label: "Schedule a Demo", href: "#semiconductors-demo-form" } satisfies CTA,
};

/* ------------------------- accelerating R&D section ----------------------- */

export const accelerating = {
  /** Row A — knowledge graph image (left) + heading & whitepaper CTA (right). */
  graphImage: `${BASE}/Image__35_.png`,
  graphAlt: "Semiconductor knowledge graph",
  graphCaption: "Knowledge Graph Powered Research",

  heading: "Accelerating Research & Development Time",
  lead:
    "Help drive future hypothesis testing by leveraging our AI platform and data ontology to rapidly query and develop Research Insights of your business.",
  whitepaperPrompt:
    "Learn more about accelerating research and development in the semiconductor industry:",
  whitepaperCta: { label: "Download the Whitepaper", href: "#" } satisfies CTA,

  /** Row B — body paragraphs (left) + product screenshot (right). */
  body: [
    "The global shortage of semiconductor and PCB products has sent rippling effects across semiconductor and microelectronics companies, and adjoining industries — from automotive and aviation to consumer goods.",
    "Manufacturers are struggling to purchase the required raw materials and build up production capacity to meet the demand. Supply chain disruptions, increasing lead times, and staffing shortages have compounded these issues.",
    "Those who can scale up production to meet the market can become the trusted leaders for decades to come.",
  ],
  bodyCta: { label: "Learn more about Jicate for Semiconductors", href: "#" } satisfies CTA,
  screenshotImage: `${BASE}/Figure3__1_.jpg`,
  screenshotAlt: "Semiconductor product screenshot",
};

/* ------------------------------ latest news ------------------------------- */

export const latestNews = {
  heading: "The Latest News",
  items: [
    {
      date: "DECEMBER 7, 2021",
      title:
        "Placeholder headline — accelerating the use of AI and big data to solve critical semiconductor challenges.",
      href: "#",
    },
    {
      date: "JULY 13, 2022",
      title: "Placeholder headline — a pioneering data collaboration for semiconductor manufacturing.",
      href: "#",
    },
  ] satisfies NewsItem[],
};

/* ------------------------------ demo form --------------------------------- */

export const demoForm = {
  title: "Request a Demo",
  fields: [
    { name: "firstName", label: "First Name", type: "text", required: true },
    { name: "lastName", label: "Last Name", type: "text", required: true },
    { name: "email", label: "Email Address", type: "email", required: true },
    { name: "company", label: "Company Name", type: "text", required: true },
    { name: "jobTitle", label: "Job Title", type: "text", required: true },
    { name: "country", label: "Country", type: "select", required: true },
    { name: "phone", label: "Phone Number", type: "tel" },
    {
      name: "project",
      label:
        "Tell us a bit about your project, a bit of context will allow us to connect you to the right team faster.",
      type: "textarea",
    },
  ] satisfies FormField[],
  optIns: [
    { name: "optProduct", label: "Opt-in to receive Jicate product updates" },
    { name: "optSales", label: "Opt-in to personalized sales outreach" },
    { name: "optEvents", label: "Opt-in to receive invites to future events" },
    { name: "optEducation", label: "Opt-in to receive educational resources" },
  ] satisfies OptIn[],
  submitLabel: "Submit",
  privacyHref: "/legal/privacy",
};

/** Country options for the COUNTRY select (abbreviated; user can extend). */
export const countries = [
  "Australia",
  "Canada",
  "China",
  "France",
  "Germany",
  "India",
  "Israel",
  "Japan",
  "Korea",
  "Netherlands",
  "Singapore",
  "Taiwan",
  "United Kingdom",
  "United States",
];
