/**
 * Content for the /federal-health page — a faithful DESIGN rebuild of the
 * reference "Federal Health" offering page, mapped onto this project's design
 * system. Layout/visual treatment matches the reference 1:1; LIGHT theme.
 *
 * IMPORTANT: the reference's marketing prose, customer case studies, and press
 * headlines are the source's own content — they are NOT reproduced here.
 * Long-form copy, impact descriptions, and news titles below are neutral
 * PLACEHOLDER text; short functional labels (section titles, capability tab
 * names, solution categories, form fields) are kept for parity. User replaces.
 *
 * Types are declared locally so the page is fully self-contained.
 *
 * Local media (in /public/federal-health): 9 photos mapped across the hero,
 * play-video band, solution cards, and resource cards (best-guess mapping; the
 * user re-assigns as needed).
 */

const BASE = "/federal-health";

/* ------------------------------ shared shapes ----------------------------- */

export interface CTA {
  label: string;
  href: string;
}

export interface ImpactItem {
  title: string;
  body: string;
}

export interface SolutionCard {
  eyebrow: string;
  image: string;
  alt: string;
  body: string;
  cta: CTA;
}

export interface CapabilityTab {
  tab: string;
  number: string;
  eyebrow: string;
  heading: string;
  body: string;
  bullets: string[];
}

export interface ResourceCard {
  image: string;
  body: string;
  cta: CTA;
}

export interface NewsLink {
  title: string;
  href: string;
}

/* --------------------------------- hero ----------------------------------- */

export const hero = {
  title: "Federal Health",
  subtitle: "Transforming the work of federal health agencies by enabling connectivity across the health data ecosystem",
  image: `${BASE}/shutterstock_offset_1877556748_cropped.jpg`,
  alt: "Healthcare professional",
  videoPoster: `${BASE}/shutterstock_offset_1895301283.jpg`,
  videoLabel: "Play Video",
  contactLink: { label: "Contact Us", href: "#contact" } satisfies CTA,
};

/* ------------------------------- our impact ------------------------------- */

export const impact = {
  heading: "Our Impact",
  intro: "Placeholder paragraph. For the first time, agencies can easily collaborate on diverse data sets and workflows — from accelerating fundamental research to modernizing public health information systems.",
  items: [
    {
      title: "Program One",
      body: "Placeholder description. Describe how the platform helps facilitate pandemic response, management, reporting, and data sharing.",
    },
    {
      title: "Program Two",
      body: "Placeholder description. Describe how the platform enables researchers to better understand complex health conditions at scale.",
    },
  ] satisfies ImpactItem[],
};

/* ------------------------------ our solutions ----------------------------- */

export const solutions = {
  heading: "Our Solutions",
  cards: [
    {
      eyebrow: "PUBLIC HEALTH SURVEILLANCE + RESPONSE",
      image: `${BASE}/hans-reniers-lQGJCMY5qcM-unsplash.jpg`,
      alt: "Laboratory work",
      body: "Placeholder description. Oversee operations and make decisions on top of high-quality real-world data while enabling secure collaboration and protecting data within the platform.",
      cta: { label: "Learn More", href: "#capabilities" },
    },
    {
      eyebrow: "POPULATION HEALTH",
      image: `${BASE}/shutterstock_1665408049.jpg`,
      alt: "A crowd of people",
      body: "Placeholder description. Drive informed decisions about population health interventions at the micro- and macro-levels while protecting privacy of the public.",
      cta: { label: "Learn More", href: "#capabilities" },
    },
    {
      eyebrow: "EMERGENCY PREPAREDNESS, RESPONSE, + RECOVERY",
      image: `${BASE}/shutterstock_1827506501.jpg`,
      alt: "Emergency responders",
      body: "Placeholder description. Model scenarios and prepare for emergencies, leveraging platform tools to improve transparency and explainability.",
      cta: { label: "Learn More", href: "#capabilities" },
    },
  ] satisfies SolutionCard[],
};

/* ------------------------------ capabilities ------------------------------ */

export const capabilities = {
  heading: "Our Capabilities",
  intro: "Foundry is designed to resolve some of the key challenges caused by a fragmented landscape",
  tabs: [
    {
      tab: "Data Integration + Harmonization",
      number: "01",
      eyebrow: "01 — DATA INTEGRATION + HARMONIZATION",
      heading: "Collect, integrate, and harmonize data flexibly",
      body: "Placeholder paragraph. The platform integrates and harmonizes complex, multi-modal data, making it analysis-ready through a secure open architecture, APIs, and a dynamic ontology.",
      bullets: [
        "Secure integration, transformation, and harmonization of data into one open environment",
        "Bi-directional connectivity to any systems, including EHRs/EMRs",
        "Interoperability of data previously unusable side-by-side",
        "Interoperability of data models and terminologies",
      ],
    },
    {
      tab: "Data Sharing",
      number: "02",
      eyebrow: "02 — DATA SHARING",
      heading: "Share data securely across teams and agencies",
      body: "Placeholder paragraph. Describe how the platform enables secure, governed data sharing across organizational boundaries.",
      bullets: ["Placeholder bullet one.", "Placeholder bullet two.", "Placeholder bullet three."],
    },
    {
      tab: "Data Access",
      number: "03",
      eyebrow: "03 — DATA ACCESS",
      heading: "Grant the right access to the right users",
      body: "Placeholder paragraph. Describe granular, role-based access control across the data ecosystem.",
      bullets: ["Placeholder bullet one.", "Placeholder bullet two.", "Placeholder bullet three."],
    },
    {
      tab: "Data Quality",
      number: "04",
      eyebrow: "04 — DATA QUALITY",
      heading: "Ensure data quality and up-to-date data",
      body: "Placeholder paragraph. Describe automated checks and monitoring that keep data accurate and current.",
      bullets: ["Placeholder bullet one.", "Placeholder bullet two.", "Placeholder bullet three."],
    },
    {
      tab: "Data-Driven Workflows",
      number: "05",
      eyebrow: "05 — DATA-DRIVEN WORKFLOWS",
      heading: "Operationalize decisions with data-driven workflows",
      body: "Placeholder paragraph. Describe how analysis turns into action through configurable workflows.",
      bullets: ["Placeholder bullet one.", "Placeholder bullet two.", "Placeholder bullet three."],
    },
    {
      tab: "Interoperability",
      number: "06",
      eyebrow: "06 — INTEROPERABILITY",
      heading: "Connect systems and standards seamlessly",
      body: "Placeholder paragraph. Describe interoperability across health data standards and external systems.",
      bullets: ["Placeholder bullet one.", "Placeholder bullet two.", "Placeholder bullet three."],
    },
    {
      tab: "Data Privacy + Security",
      number: "07",
      eyebrow: "07 — DATA PRIVACY + SECURITY",
      heading: "Protect data with privacy and security by design",
      body: "Placeholder paragraph. Describe the privacy-preserving and security-first foundations of the platform.",
      bullets: ["Placeholder bullet one.", "Placeholder bullet two.", "Placeholder bullet three."],
    },
  ] satisfies CapabilityTab[],
};

/* -------------------------------- resources ------------------------------- */

export const resources = {
  heading: "Resources",
  cards: [
    {
      image: `${BASE}/shutterstock_1481978897__1_.jpg`,
      body: "Placeholder description. A leader unpacks what's critical for meeting a crisis head-on and sustaining the response.",
      cta: { label: "Watch the Talk", href: "#" },
    },
    {
      image: `${BASE}/shutterstock_1652886169.jpg`,
      body: "Placeholder description. This impact study discusses how a major agency used the platform's interoperability capabilities.",
      cta: { label: "Download Impact Study", href: "#" },
    },
    {
      image: `${BASE}/shutterstock_297132446.jpg`,
      body: "Placeholder description. Learn how the platform is helping a hospital create a connected health system and improve outcomes.",
      cta: { label: "Read Blog Post", href: "#" },
    },
    {
      image: `${BASE}/john-towner-p-rN-n6Miag-unsplash.jpg`,
      body: "Placeholder description. This event showcases how the software is used by the life sciences and manufacturing industries.",
      cta: { label: "Watch the Demo", href: "#" },
    },
  ] satisfies ResourceCard[],
};

/* ----------------------------- news + accolades --------------------------- */

export const news = {
  heading: "News + Accolades",
  links: [
    { title: "Placeholder headline one — replace with your own news item.", href: "#" },
    { title: "Placeholder headline two — replace with your own news item.", href: "#" },
    { title: "Placeholder headline three — replace with your own news item.", href: "#" },
    { title: "Placeholder headline four — replace with your own accolade.", href: "#" },
  ] satisfies NewsLink[],
};

/* --------------------------------- form ----------------------------------- */

export const contactForm = {
  title: "Interested in solving problems with Jicate software?",
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
