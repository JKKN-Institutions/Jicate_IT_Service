/**
 * Content for the /jicate-for-builders page — a faithful DESIGN rebuild of the
 * Palantir for Builders reference page, mapped onto this project's design system.
 * Short functional headings/labels are kept; body copy is written in Jicate's own
 * voice (placeholder text the user will swap), not copied from the reference.
 * Types are local so the page touches no shared files.
 *
 * No assets shipped — every image/video renders as a styled placeholder block.
 */

export interface CTA {
  label: string;
  href: string;
}

export interface InfraCard {
  title: string;
  icon: "cloud" | "chart" | "llm" | "agent" | "decision";
}

/* ------------------------------- sub-nav --------------------------------- */

export const subNav: CTA[] = [
  { label: "Overview", href: "#overview" },
  { label: "Startups", href: "#startups" },
  { label: "SMBs", href: "#smbs" },
  { label: "Service Providers", href: "#service-providers" },
];

/* ---------------------------------- hero --------------------------------- */

export const hero = {
  title: "Jicate for Builders",
  subcopy: "World-class AI software platform now available to startups, small and medium-sized companies.",
  cta: { label: "Build With Us", href: "#build-with-us" } as CTA,
  image: "/jicate-for-builders/scott-blake-x-ghf9LjrVg-unsplash.jpg",
  imageAlt: "Construction crew surveying a large building site from a rooftop",
};

/* -------------------------------- big data ------------------------------- */

export const bigData = {
  heading: "Big data solutions shouldn’t just be for big companies.",
  intro:
    "Jicate for Builders gives startups and small to mid-sized businesses full access to AIP and the Jicate platform — our enterprise-grade software.",
  platformHeading: "Jicate’s enterprise-grade software platforms.",
  platformBody:
    "Backed by years of product development and proven across major organizations worldwide, Jicate delivers a modern, end-to-end AI platform that enables organizations to fully customize internal systems, integrate LLMs into operational workflows, build and scale customer-facing products, all while maintaining robust security and governance.",
  image: "/jicate-for-builders/jeriden-villegas-VLPUm5wP5Z0-unsplash.jpg",
  videoAlt: "Builder measuring and cutting timber on a job site",
  videoCaption: "Our team discusses the Jicate for Builders program and mission.",
  quote: "“It is the same enterprise-grade software, but we’re leaning on the talent of our customers to do the building.”",
  attribution: "— Product Lead, Jicate",
};

/* ----------------------------- infrastructure ---------------------------- */

export const infrastructure = {
  heading: "Jicate offers a continuously updated, fully managed AI infrastructure spanning:",
  cards: [
    { title: "Cloud hosting and data integration", icon: "cloud" },
    { title: "Flexible analytics and visualization", icon: "chart" },
    { title: "Access to state-of-the-art LLMs OOTB", icon: "llm" },
    { title: "Agent building and application deployment", icon: "agent" },
    { title: "Operational decision-making and capture", icon: "decision" },
  ] as InfraCard[],
};

/* ------------------------------- regulatory ------------------------------ */

export const regulatory = {
  heading:
    "Our solutions also meet rigorous regulatory and industry requirements, including GDPR, HIPAA, FedRAMP, IL5/6, and SOC 2.",
  image: "/jicate-for-builders/danist-soh-8Gg2Ne_uTcM-unsplash.jpg",
  logoAlt: "Tower cranes rising over a high-rise building under construction",
};

/* ------------------------------- empowering ------------------------------ */

export const empowering = {
  heading:
    "Empowering innovators to launch bold companies, build faster and harmonize human expertise with AI",
};

/* ------------------------------ build with us ---------------------------- */

export const buildForm = {
  id: "build-with-us",
  preHeading: "The Work of Building Tomorrow Begins Today.",
  heading: "Build With Us:",
  fields: [
    { name: "firstName", label: "FIRST NAME:", type: "text", required: true },
    { name: "lastName", label: "LAST NAME:", type: "text", required: true },
    { name: "email", label: "BUSINESS EMAIL ADDRESS:", type: "email", required: true },
    { name: "phone", label: "PHONE NUMBER:", type: "tel", required: true },
    { name: "company", label: "COMPANY / INSTITUTION:", type: "text", required: true },
  ],
  countryLabel: "COUNTRY:",
  projectLabel:
    "TELL US ABOUT YOUR PROJECT, A BIT OF CONTEXT WILL ALLOW US TO CONNECT YOU TO THE RIGHT TEAM FASTER:",
  optIns: [
    "OPT-IN TO RECEIVE JICATE PRODUCT UPDATES:",
    "OPT-IN TO PERSONALIZED SALES OUTREACH:",
    "OPT-IN TO RECEIVE INVITES TO FUTURE EVENTS:",
    "OPT-IN TO RECEIVE EDUCATIONAL RESOURCES:",
  ],
  submit: "Submit",
  privacyNote: "Please see our Privacy Policy regarding how we will handle this information.",
};
