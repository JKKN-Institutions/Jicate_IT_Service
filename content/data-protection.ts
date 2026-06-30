/**
 * Content for the /data-protection page — a faithful DESIGN rebuild of the
 * Palantir "Data Protection" offering reference page, mapped onto this project's
 * design system. Short functional headings/labels are kept; all body copy is
 * written in Jicate's own voice (placeholder text the user will swap), not copied
 * from the reference. Types are local so the page touches no shared files.
 *
 * Assets in /public/data-protection: shutterstock_255556879.jpg (hero image),
 * ncmec-graph.svg (Data Subject Access Request module image), Beyond_Anonymisation.png
 * (Handling Personal Data card). The Right-to-be-Forgotten module image
 * (values-graph) is not shipped — rendered as a placeholder.
 */

export interface CTA {
  label: string;
  href: string;
}

export interface Module {
  tab: string;
  number: string;
  eyebrow: string;
  description: string;
  image: string;
  alt: string;
}

/* ---------------------------------- hero --------------------------------- */

export const hero = {
  title: "Jicate and Data Protection",
  subcopy: "A comprehensive approach to privacy and governance",
  cta: { label: "Get Started", href: "#start-a-conversation" } as CTA,
  image: "/data-protection/shutterstock_255556879.jpg",
  imageAlt: "Close-up of a circuit board",
};

/* ------------------------------- intro band ------------------------------ */

export const intro = {
  heading:
    "Around the world, Jicate is helping customers meet their compliance obligations in ever-evolving regulatory environments.",
  statement:
    "At Jicate, we're committed to helping organizations protect privacy and strengthen trust in how they use information and achieve the potential of their digital transformation.",
  paragraphs: [
    "Organizations use the Jicate platform as their secure and accountable infrastructure to maximize the utility of their data while making sure that it's processed in accordance with the rules, regulations, and norms that govern data privacy.",
    "Among others, Jicate currently offers the following data protection modules, developed to help our customers comply with data subject rights requests under the EU General Data Protection Regulation (GDPR) and comparable privacy laws in other jurisdictions (e.g., Brazil's LGPD, the California Consumer Privacy Act (CCPA) and its amendments through the California Privacy Rights Act (CPRA), and others).",
  ],
  link: { label: "Privacy & Civil Liberties", href: "#" } as CTA,
};

/* --------------------- Data Protection Modules ribbon -------------------- */

export const modules = {
  heading: "Data Protection Modules and Capabilities",
  items: [
    {
      tab: "Data Subject Access Request Module",
      number: "01",
      eyebrow: "01 — DATA SUBJECT ACCESS REQUEST MODULE",
      description:
        "This module helps organizations satisfy Article 15 of the GDPR and comparable privacy regulations, giving data subjects the right to obtain confirmation from the controller as to whether any data is being processed about them, as well as access to basic information about that data.",
      image: "/data-protection/ncmec-graph.svg",
      alt: "Network graph of linked data sources",
    },
    {
      tab: "Right to be Forgotten Module",
      number: "02",
      eyebrow: "02 — RIGHT TO BE FORGOTTEN MODULE",
      description:
        "This module helps organizations satisfy Article 17 of the GDPR and comparable privacy regulations, giving data subjects the right to request erasure of the data being processed about them — colloquially known as the “Right to be Forgotten” or “Right to Erasure.”",
      // values-graph is not shipped — Modules renders a placeholder for this item.
      image: "",
      alt: "Surface-plot visualization of data values",
    },
  ] as Module[],
  footnote:
    "Both of these modules can be deployed together as they share a common data asset that tracks data sources and sensitive data.",
  footnoteLink: { label: "Learn More About Data Protection in the Platform", href: "#" } as CTA,
};

/* ------------------------- Handling Personal Data ------------------------ */

export const handling = {
  image: "/data-protection/Beyond_Anonymisation.png",
  imageAlt: "Beyond Anonymisation — a comprehensive approach to handling personal data",
  heading: "Handling Personal Data",
  bodyLead: "Learn more about our approach to helping customers ",
  bodyLink: "reduce data re-identification risk",
  bodyTrail: ".",
  cta: { label: "Download the Whitepaper", href: "#" } as CTA,
};

/* ------------------------------ Contact form ---------------------------- */

export const contact = {
  id: "start-a-conversation",
  heading: "Interested in using Jicate software for data protection regulation obligations?",
  subline: "Submit your interest.",
  fields: [
    { name: "firstName", label: "FIRST NAME:", type: "text", required: true },
    { name: "lastName", label: "LAST NAME:", type: "text", required: true },
    { name: "email", label: "BUSINESS EMAIL:", type: "email", required: true },
    { name: "phone", label: "PHONE NUMBER:", type: "tel", required: true },
    { name: "jobTitle", label: "JOB TITLE:", type: "text", required: true },
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
