/** Content for the /life-sciences page. */

export interface CTA {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  body: string;
}

/* ---------------------------------- hero --------------------------------- */

export const hero = {
  image: "/life-sciences/image__2_.png",
  imageAlt: "Laboratory pipettes dispensing samples into a well plate",
  title: "Jicate for Life Sciences",
  subcopy: "Transforming Pharma Development with AI",
};

/* --------------------------------- intro --------------------------------- */

export const intro = {
  heading: "Delivering speed to value by harnessing AI across the pharmaceutical value chain",
  statements: [
    "Life Science companies require the highest levels of data security and usage governance, while needing to accelerate the development and application of new therapies to improve the lives of patients.",
    "Our partners’ critical workflows are powered by Jicate software, enabling the latest AI advancements to generate new insights and automate decision-making — while keeping a human in the loop and powering strategic, scalable impact.",
  ],
};

/* ------------------------- capability sections --------------------------- */

export const clinicalDevelopment = {
  heading: "Clinical Development",
  features: [
    {
      title: "Site Selection & Feasibility",
      body: "Empower feasibility experts to identify optimal clinical sites based on site performance, study parameters, and health data.",
    },
    {
      title: "Clinical Trial Planning and Design",
      body: "Unify public databases, internal sources, and study documents into a single source of truth — the Business Data Model — to power next-generation trial designs. Connect financial data to serve as a foundation for future reporting, analytics, and data-driven operations.",
    },
    {
      title: "Gen AI Enabled Clinical Data Automapping",
      body: "Deploy generative AI to automate source-to-target mapping of SDTM datasets and clinical data submissions, with a human in the loop.",
    },
  ] as Feature[],
};

export const commercialOperations = {
  heading: "Commercial Operations",
  features: [
    {
      title: "Provider Targeting and Segmentation",
      body: "Generate insights from unstructured data to cohort providers and optimize sales-team interactions with different segments of customers.",
    },
    {
      title: "Jicate AI Platform Powered Sales Co-Pilot",
      body: "Using natural language, empower sales reps to leverage customer history and AI insights to customize the next best action.",
    },
    {
      title: "Tracking and Impact Measurement",
      body: "Determine sales uplift caused by changes in selling and targeting strategies.",
    },
    {
      title: "Medical, Legal, Operational, & Regulatory (MLOR) Review Automation",
      body: "Jicate AI Platform improves content quality and decreases the time required for MLOR reviews by acting as a review assistant — capable of flagging issues in real time, but also recommending solutions to enable rapid resolution.",
    },
  ] as Feature[],
};

export const researchDiscovery = {
  heading: "Research & Discovery",
  features: [
    {
      title: "Real World Evidence (RWE)",
      body: "The platform’s capabilities enable the integration of large, disparate RWE sources into a secure environment, empowering democratized data access and analytics to innovate and accelerate data insights.",
    },
    {
      title: "Connected Lab",
      body: "The digital twin of your organization to streamline laboratory operations, automate experiment analysis, and enhance collaboration to accelerate discoveries.",
    },
  ] as Feature[],
};

export const biomanufacturing = {
  heading: "Biomanufacturing",
  features: [
    {
      title: "Manufacturing & Quality Control",
      body: "The platform helps predict manufacturing delays so they can be proactively addressed, and leverages automated alerting on material or batch variance, full lineage of inputs, and scenario analysis of inventory routing.",
    },
    {
      title: "Quality Assurance & Regulatory Reporting",
      body: "Automated governance and approval workflows with granular, purpose-based access controls pair for secure and compliant data management.",
    },
  ] as Feature[],
};

/* ------------------------------ contact form ----------------------------- */

export const contact = {
  id: "contact-us",
  heading: "Contact Us",
  fields: [
    { name: "firstName", label: "FIRST NAME:", type: "text", required: true },
    { name: "lastName", label: "LAST NAME:", type: "text", required: true },
    { name: "email", label: "EMAIL ADDRESS:", type: "email", required: true },
    { name: "company", label: "COMPANY NAME:", type: "text", required: true },
  ],
  countryLabel: "COUNTRY:",
  submit: "Submit",
  privacyNote: "Please see our Privacy Policy regarding how we will handle the information.",
};
