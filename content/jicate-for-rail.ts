/** Content for the /jicate-for-rail page. */

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
  { label: "Our Work", href: "#our-work" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Key Differentiators", href: "#key-differentiators" },
];

/* --------------------------------- hero ----------------------------------- */

export const hero = {
  title: "Jicate for Rail",
  image: `${BASE}/Hero_Image.jpg`,
  alt: "High-speed rail and overhead lines",
  paragraphs: [
    "Our flexible, configurable platform enables organizations to create a connected operating picture across commercial, transportation, track engineering, and mechanical functions.",
    "All in a single platform.",
  ],
  cta: { label: "Start the conversation", href: "#contact" },
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

/* ------------------------------ how it works ------------------------------ */

export const howItWorks = {
  heading: "How it Works",
  image: `${BASE}/Ontology_Image.png`,
  imageAlt: "Business Data Model architecture diagram for rail",
  paragraphs: [
    "Jicate software integrates your data and models into the Business Data Model, a real-world representation of your business — from individual railcars to throughput targets.",
    "The Business Data Model serves as the foundation for tackling your highest-priority use cases quickly, but without sacrificing future scalability and flexibility.",
    "It enables you to simulate operations, automate processes, and federate decision-making across operators, devices, and environments, all while continuously capturing feedback and entrenched knowledge in a closed loop.",
  ],
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
