/**
 * Content for the /jicate-for-rail page — a faithful DESIGN rebuild of the
 * reference "Palantir for Rail" page, mapped onto this project's design system.
 * Layout matches the reference 1:1; LIGHT theme, with a sticky sub-nav.
 *
 * IMPORTANT (IP): the reference's marketing prose, partner names/logos, and case
 * statistics are the source's own copyrighted content and are NOT reproduced. The
 * long-form copy below is ORIGINAL, Jicate-voiced prose conveying the same general
 * substance in fresh wording; partners and case studies are genericized (no real
 * names or verbatim stats). Short functional labels (section titles, work
 * categories/items, differentiator titles, form fields) are kept for design parity.
 *
 * Local media (in /public/jicate-for-rail):
 *   Hero_Image.jpg     — intro image
 *   Ontology_Image.png — How it Works diagram
 *   Master_Classes…AIPCon…-4821_(2).jpg — Spotlight AIPCon photo
 */

const BASE = "/jicate-for-rail";

/* ------------------------------ shared shapes ----------------------------- */

export interface NavItem {
  label: string;
  href: string;
}

export interface WorkGroup {
  category: string;
  items: string[];
}

export interface ImpactStat {
  stat: string;
  body: string;
}

export interface Differentiator {
  title: string;
  body: string;
}

/* -------------------------------- sub-nav --------------------------------- */

export const subNav: NavItem[] = [
  { label: "Our Partners", href: "#our-partners" },
  { label: "Our Work", href: "#our-work" },
  { label: "Impact", href: "#impact" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Key Differentiators", href: "#key-differentiators" },
];

/* --------------------------------- hero ----------------------------------- */

export const hero = {
  title: "Jicate for Rail",
  image: `${BASE}/Hero_Image.jpg`,
  alt: "High-speed rail and overhead lines",
  paragraphs: [
    "Jicate software is powering workflows for some of the largest rail companies in the world.",
    "Our flexible, configurable platform enables organizations to create a connected operating picture across commercial, transportation, track engineering, and mechanical functions.",
    "All in a single platform.",
  ],
  cta: { label: "Start the conversation", href: "#contact" },
};

/* ------------------------------ our partners ------------------------------ */

export const partners = {
  heading: "Our Partners",
  logos: ["Partner One", "Partner Two", "Partner Three"],
  note: "& other Class I and international railroads",
};

/* -------------------------------- our work -------------------------------- */

export const work = {
  heading: "Our Work",
  groups: [
    { category: "COMMERCIAL", items: ["Leased fleet management", "Claims management (auto, reefers)", "Terminal operations / containers management"] },
    { category: "TRANSPORTATION", items: ["Network planning", "Service disruption", "Fuel management"] },
    { category: "TRACK ENGINEERING", items: ["Maintenance scheduling", "Preventative maintenance / inspections", "Capital planning"] },
    { category: "MECHANICAL", items: ["Material cost reduction / reliability", "Locomotive maintenance", "Shop operations", "Wayside detectors alerts and health"] },
  ] satisfies WorkGroup[],
};

/* --------------------------------- impact --------------------------------- */

export const impact = {
  heading: "Impact",
  stats: [
    {
      stat: "Multi-million-dollar annual recovery & double-digit material-spend reduction",
      body: "A major railroad brought part details together from across its financial and operational systems, so warranty opportunities that used to slip through the cracks were surfaced automatically. With claims streamlined, the railroad recovered significant value and cut its annual material spend.",
    },
    {
      stat: "0 to deployment — in months",
      body: "A major railroad compressed its build timeline to stand up a safety-critical application for real-time wayside-detector alerts and equipment-health diagnostics — reaching a production-ready system in a matter of months, not years.",
    },
  ] satisfies ImpactStat[],
};

/* ------------------------------ how it works ------------------------------ */

export const howItWorks = {
  heading: "How it Works",
  image: `${BASE}/Ontology_Image.png`,
  imageAlt: "Ontology architecture diagram for rail",
  paragraphs: [
    "Jicate software integrates your data and models into the Ontology, a real-world representation of your business — from individual railcars to throughput targets.",
    "The Ontology serves as the foundation for tackling your highest-priority use cases quickly, but without sacrificing future scalability and flexibility.",
    "It enables you to simulate operations, automate processes, and federate decision-making across operators, devices, and environments, all while continuously capturing feedback and entrenched knowledge in a closed loop.",
  ],
};

/* ------------------------------- spotlight -------------------------------- */

export const spotlight = {
  heading: "Spotlight: Jicate for Rail at AIPCon",
  intro: "AIPCon has become a landmark event for the rail industry. Leaders from across major rail companies — spanning operations, technology, business, and innovation — come together to trade ideas on where the industry is headed and what the latest technology makes possible, and leave with concrete, actionable steps they can put to work in their own organizations.",
  photo: `${BASE}/Master_Classes___AIP_Bootcamp_AIPCon_Sept_14_2023__Steven_Gregory_Photography-4821__2_.jpg`,
  photoAlt: "Attendees at AIPCon",
  keynote: { label: "Watch the keynote", href: "#" },
};

/* --------------------------- key differentiators -------------------------- */

export const differentiators = {
  heading: "Key Differentiators",
  items: [
    { title: "Speed.", body: "Integrate and transform large-scale data. Assuming a complex customer landscape, Jicate integrates with all existing visualization, data store, data lake, and cloud partners." },
    { title: "Forward-Deployed Model.", body: "Engineers work alongside your team to gather signal directly from the field and drive change management." },
    { title: "Real-Time Connectivity.", body: "Power live collaboration between your data, models, and operators." },
    { title: "Data Security & Governance.", body: "Granular, role- and purpose-based access controls keep sensitive rail data protected, with a full, auditable record of who accessed what across every system." },
    { title: "AI/ML-Powered Decisions.", body: "Put AI and machine-learning models to work on live operational data, turning forecasts and recommendations into action with a human in the loop." },
  ] satisfies Differentiator[],
};

/* --------------------------------- form ----------------------------------- */

export const contactForm = {
  title: "Reach out to our Jicate for Rail team",
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
