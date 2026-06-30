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
const SONNEDIX_VIDEO = `${BASE}/-ENGLISH_SUBTITLES-_Palantir_and_Sonnedix_-_Foundry_Impact_-_Cutdown___1_.mov`;

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

/* ------------------------------- sub-nav ---------------------------------- */

export const subNav = [
  { label: "About Our Work", href: "#about-our-work" },
  { label: "Our Partners", href: "#our-partners" },
  { label: "Our Impact", href: "#our-impact" },
  { label: "Our Capabilities", href: "#our-capabilities" },
  { label: "Get Started", href: "#utilities-demo-form" },
];

/* ----------------------------- about our work ----------------------------- */

export const about = {
  eyebrow: "About Our Work",
  lead:
    "Extreme weather conditions, the transition to renewables, and enabling new ways to produce and consume energy are just some of the real-world challenges those in utilities face today.",
  paragraphs: [
    "Organizations now need to leverage vast quantities of data across increasingly complex digital ecosystems — while effectively turning these insights into actions. Jicate's Ontology operationalizes data from distribution management systems, asset records, inspections, geographical layout, and IoT devices, alongside risk and connectivity models to enable more informed decision making across the grid.",
    "Our utility customers across the globe are able to quickly build and deploy flexible, production-ready applications to enable predictive operations, automate processes, simulate scenarios, and federate decision-making across teams and environments. We're empowering them to build more reliable and efficient utilities — from grid management to customer care.",
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
      name: "Southern California Edison",
      stat: "Placeholder — integrated data from millions of grid assets across its digital grid into the platform.",
      note: "Placeholder metric — significant reduction in missed customer notifications for proactive power shutoffs, with notification time cut from hours to minutes.",
      link: { label: "Learn more", href: "#" },
    },
    {
      name: "Jacobs",
      stat: "Placeholder — integrating Jicate and proprietary algorithms to enhance staff productivity, according to company leadership.",
      note: "Placeholder metric — eliminated operational fines while also reducing greenhouse gas emissions.",
      link: { label: "Learn more", href: "#" },
    },
    {
      name: "Sonnedix",
      stat: "Placeholder — using Jicate and machine-learning models to enable remote monitoring of solar farms.",
      note: "Placeholder metric — anticipating a reduction in revenue loss associated with tracker failure.",
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
  link: CTA;
}

export const impact = {
  heading: "Our Impact",
  cases: [
    {
      name: "Jacobs",
      video: `${BASE}/Jacobs_X_Palantir_Twitter_Cutdown.mov`,
      stat: "PLACEHOLDER — SIGNIFICANT PLANT-WIDE POWER SAVINGS THROUGH PREDICTIVE OPERATIONS.",
      theme: "Predictive Operations",
      quote:
        "“Placeholder quote — describe the outcome the customer achieved, the value realized, and why it matters. The user will replace this with the approved testimonial.”",
      attribution: "— Name, Title, Company",
      link: { label: "Find out more", href: "#" },
    },
    {
      name: "Sonnedix",
      video: SONNEDIX_VIDEO,
      stat: "PLACEHOLDER — AUTOMATIC NOTIFICATION OF ASSETS IN NEED OF MAINTENANCE, AND PREVENTABLE MECHANICAL FAILURES REDUCED.",
      theme: "Digitize Renewables",
      quote:
        "“Placeholder quote — describe the customer's goal of relying on real-time, fully integrated data to make critical business decisions. The user will replace this with the approved testimonial.”",
      attribution: "— Name, Title, Company",
      link: { label: "Find out more", href: "#" },
    },
    {
      name: "Southern California Edison",
      video: `${BASE}/SC_Edison_Cutdown_7__1_.mov`,
      stat: "PLACEHOLDER — MAJOR REDUCTION IN MISSED CUSTOMER NOTIFICATIONS FOR PROACTIVE POWER SHUTOFFS.",
      theme: "Enhance Customer Experience",
      quote:
        "“Placeholder quote — describe the transformation from hardware-defined to software-defined operations across multiple use cases. The user will replace this with the approved testimonial.”",
      attribution: "— Name, Title, Company",
      link: { label: "Find out more", href: "#" },
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
      body: "Placeholder — improve pre-, mid-, and post-event planning by integrating geospatial and asset data to create a single view of your grid, potential outages, and customer notification status.",
      image: `${BASE}/Slide2%20(1).jpg`,
      link: { label: "Learn more", href: "#" },
    },
    {
      tab: "Asset management",
      title: "ASSET MANAGEMENT",
      body: "Placeholder — build a unified, real-time view of asset health across the grid to prioritize inspections, maintenance, and replacements where they matter most.",
      image: `${BASE}/Slide1%20(1).jpg`,
      link: { label: "Learn more", href: "#" },
    },
    {
      tab: "Procurement",
      title: "PROCUREMENT",
      body: "Placeholder — streamline sourcing and supplier decisions with integrated spend, inventory, and lead-time data across the organization.",
      image: `${BASE}/Slide2%20(2).jpg`,
      link: { label: "Learn more", href: "#" },
    },
    {
      tab: "Risk-based work planning",
      title: "RISK-BASED WORK PLANNING",
      body: "Placeholder — plan and sequence field work using risk, connectivity, and condition models so crews focus on the highest-impact tasks first.",
      image: `${BASE}/Utilities_1.png`,
      link: { label: "Learn more", href: "#" },
    },
    {
      tab: "Process mining",
      title: "PROCESS MINING",
      body: "Placeholder — surface bottlenecks and inefficiencies across operational processes to drive continuous improvement and cost reduction.",
      image: `${BASE}/Slide4%20(1).jpg`,
      link: { label: "Learn more", href: "#" },
    },
    {
      tab: "Capital delivery",
      title: "CAPITAL DELIVERY",
      body: "Placeholder — track capital programs end to end with integrated schedule, cost, and progress data to keep projects on time and on budget.",
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
    { name: "jobTitle", label: "Job Title", type: "text", required: true },
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
