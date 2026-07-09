/**
 * Content for the /utilities page — a faithful DESIGN rebuild of the reference
 * "Palantir Utility Solutions" page, mapped onto this project's design system.
 * Layout matches the reference 1:1; the page is LIGHT (canvas bg, ink text).
 *
 * IMPORTANT: the reference's marketing prose, customer stats, and named-executive
 * quotes are the source's own content — they are NOT reproduced verbatim. Brand
 * names are swapped to Jicate; customer stats and quotes are neutral PLACEHOLDER
 * text; short functional labels (section/capability/theme names, form fields) and
 * the user-provided case-study video subjects are kept. User replaces all copy.
 *
 * Local media (in /public/utilities):
 *   Ontology_stack_-_Utilities__JD_Edits_.png — About section diagram
 *   Jacobs_X_Palantir_Twitter_Cutdown.mov     — Impact case 1 video
 *   -ENGLISH_SUBTITLES-_..._Sonnedix_..._.mov — Impact case 2 video (+ hero loop)
 *   SC_Edison_Cutdown_7__1_.mov               — Impact case 3 video
 *   Slide1 (1).jpg / Slide2 (1).jpg / Slide2 (2).jpg / Slide4 (1).jpg /
 *   Utilities_1.png / Utilities_2.png         — Capability tab images
 */

const BASE = "/utilities";
const SONNEDIX_VIDEO = `${BASE}/-ENGLISH_SUBTITLES-_Sonnedix_-_Foundry_Impact_-_Cutdown___1_.mov`;

/* ------------------------------ shared shapes ----------------------------- */

export interface CTA {
  label: string;
  href: string;
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

/* --------------------------------- hero ----------------------------------- */

export const hero = {
  title: "Jicate for Utilities",
  tagline: "AI-powered operations for the connected utility of the future.",
  cta: { label: "Schedule a Demo", href: "#utilities-demo-form" } satisfies CTA,
  video: SONNEDIX_VIDEO,
  playLabel: "Play Video",
};

/* ----------------------------- about our work ----------------------------- */

export const about = {
  eyebrow: "About Our Work",
  lead:
    "Extreme weather, the shift to renewables, and new ways of producing and consuming energy are just a few of the real-world pressures facing utilities today.",
  paragraphs: [
    "Utilities now have to draw on enormous volumes of data spread across ever more complex digital ecosystems — and, crucially, turn that insight into action. Jicate's Ontology brings together data from distribution management systems, asset records, inspections, geographic layouts, and IoT devices, alongside risk and connectivity models, so teams can make better-informed decisions across the grid.",
    "Utility operators around the world use Jicate to rapidly build and ship flexible, production-ready applications — predicting operations, automating processes, simulating scenarios, and coordinating decisions across teams and environments. The result is more reliable, more efficient utilities, from grid management right through to customer care.",
  ],
  image: `${BASE}/Ontology_stack_-_Utilities__JD_Edits_.png`,
  imageAlt: "Utilities ontology stack diagram",
};

/* ------------------------------ our partners ------------------------------ */

export interface Partner {
  name: string;
  stat: string;
  note: string;
  link: CTA;
}

export const partners = {
  heading: "Our Partners",
  items: [
    {
      name: "A major electric utility",
      stat: "Integrated data from millions of grid assets across its digital grid into the platform.",
      note: "Sharply reduced missed customer notifications for proactive power shutoffs, cutting notification time from hours to minutes.",
      link: { label: "Learn more", href: "#" },
    },
    {
      name: "A global engineering firm",
      stat: "Combined Jicate with its own proprietary algorithms to lift staff productivity.",
      note: "Eliminated operational fines while also reducing greenhouse-gas emissions.",
      link: { label: "Learn more", href: "#" },
    },
    {
      name: "A global solar power producer",
      stat: "Uses Jicate and machine-learning models to remotely monitor its solar farms.",
      note: "Expects a meaningful reduction in revenue lost to tracker failures.",
      link: { label: "Learn more", href: "#" },
    },
  ] satisfies Partner[],
};

/* ------------------------------- our impact ------------------------------- */

export interface ImpactCase {
  name: string;
  video: string;
  stat: string;
  theme: string;
  quote: string;
  attribution: string;
  link?: CTA;
}

export const impact = {
  heading: "Our Impact",
  cases: [
    {
      name: "Global Engineering Firm",
      video: `${BASE}/Jacobs_Twitter_Cutdown.mov`,
      stat: "SIGNIFICANT PLANT-WIDE POWER SAVINGS DELIVERED THROUGH PREDICTIVE OPERATIONS.",
      theme: "Predictive Operations",
      quote:
        "“Being able to anticipate issues before they happen is where the real value sits — the efficiency gains add up quickly, both for us and for the clients we serve.”",
      attribution: "— Engineering Leader",
    },
    {
      name: "Solar Power Producer",
      video: SONNEDIX_VIDEO,
      stat: "AUTOMATIC NOTIFICATION OF ASSETS NEEDING MAINTENANCE, WITH PREVENTABLE MECHANICAL FAILURES SHARPLY REDUCED.",
      theme: "Digitize Renewables",
      quote:
        "“Our aim is to run on real-time, fully integrated data across the whole business, so every clean-energy decision is backed by information our teams can trust.”",
      attribution: "— Company Executive",
    },
    {
      name: "Electric Utility",
      video: `${BASE}/SC_Edison_Cutdown_7__1_.mov`,
      stat: "MAJOR REDUCTION IN MISSED CUSTOMER NOTIFICATIONS FOR PROACTIVE POWER SHUTOFFS.",
      theme: "Enhance Customer Experience",
      quote:
        "“We've moved from hardware-defined to software-defined operations across a growing set of use cases, and it's changing how we run and improve the grid.”",
      attribution: "— Chief Information Officer",
    },
  ] satisfies ImpactCase[],
};

/* ---------------------------- our capabilities ---------------------------- */

export interface Capability {
  tab: string;
  title: string;
  body: string;
  image: string;
  link: CTA;
}

export const capabilities = {
  heading: "Our Capabilities",
  items: [
    {
      tab: "Emergency operations",
      title: "EMERGENCY OPERATIONS",
      body: "Strengthen planning before, during, and after events by combining geospatial and asset data into a single view of your grid, likely outages, and customer-notification status.",
      image: `${BASE}/Slide2%20(1).jpg`,
      link: { label: "Learn more", href: "#" },
    },
    {
      tab: "Asset management",
      title: "ASSET MANAGEMENT",
      body: "Build a unified, real-time picture of asset health across the grid, so inspections, maintenance, and replacements go where they'll matter most.",
      image: `${BASE}/Slide1%20(1).jpg`,
      link: { label: "Learn more", href: "#" },
    },
    {
      tab: "Procurement",
      title: "PROCUREMENT",
      body: "Make faster sourcing and supplier decisions with spend, inventory, and lead-time data integrated across the organization.",
      image: `${BASE}/Slide2%20(2).jpg`,
      link: { label: "Learn more", href: "#" },
    },
    {
      tab: "Risk-based work planning",
      title: "RISK-BASED WORK PLANNING",
      body: "Plan and sequence field work using risk, connectivity, and condition models, so crews tackle the highest-impact tasks first.",
      image: `${BASE}/Utilities_1.png`,
      link: { label: "Learn more", href: "#" },
    },
    {
      tab: "Process mining",
      title: "PROCESS MINING",
      body: "Surface bottlenecks and inefficiencies across operational processes to drive continuous improvement and lower costs.",
      image: `${BASE}/Slide4%20(1).jpg`,
      link: { label: "Learn more", href: "#" },
    },
    {
      tab: "Capital delivery",
      title: "CAPITAL DELIVERY",
      body: "Track capital programs end to end with integrated schedule, cost, and progress data to keep projects on time and on budget.",
      image: `${BASE}/Utilities_2.png`,
      link: { label: "Learn more", href: "#" },
    },
  ] satisfies Capability[],
};

/* ------------------------------- demo form -------------------------------- */

export const demoForm = {
  title: "Get Started with Jicate for Utilities",
  fields: [
    { name: "firstName", label: "First Name", type: "text", required: true },
    { name: "lastName", label: "Last Name", type: "text", required: true },
    { name: "email", label: "Business Email", type: "email", required: true },
    { name: "phone", label: "Phone Number", type: "tel", required: true },
    { name: "company", label: "Company / Institution", type: "text", required: true },
    { name: "country", label: "Country", type: "select", required: true },
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

export const countries = [
  "Australia",
  "Canada",
  "France",
  "Germany",
  "India",
  "Japan",
  "Netherlands",
  "Singapore",
  "Spain",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
];
