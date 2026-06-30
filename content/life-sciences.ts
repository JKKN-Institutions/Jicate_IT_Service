/**
 * Content for the /life-sciences page — a faithful DESIGN rebuild of the Palantir
 * for Life Sciences reference page, mapped onto this project's design system.
 * Short functional headings/labels are kept; body copy is written in Jicate's own
 * voice (placeholder text the user will swap), not copied verbatim. Brand names are
 * renamed (Palantir→Jicate, Foundry→"the platform") and the named CRO is
 * genericized. Types are local so the page touches no shared files.
 *
 * Assets in /public/life-sciences: image__2_.png (hero — lab pipettes / well plate),
 * Asset_13Industries.png (case-study — microscope), Pharma2.mov (unused video).
 */

export interface CTA {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  body: string;
}

export interface CasePoint {
  strong: string;
  body: string;
}

export interface CaseTab {
  tab: string;
  partner: string;
  quote: string;
  cite: string;
  overview: string;
  pointsLabel: string;
  points: CasePoint[];
  image: string;
  imageAlt: string;
  watchLabel: string;
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

/* --------------------------- transformation ------------------------------ */

export const transformation = {
  heading: "Real AI Transformation Starts with Jicate",
  tabs: [
    {
      tab: "At a Global CRO",
      partner: "Global CRO",
      quote:
        "“We estimate that this solution reduces our time to submission materials by over 50%, from the current 10 to 12 week average to around 3 to 4 weeks… we can create this process, standardize it… and cut half the time that is required to get there.”",
      cite: "Digital Innovation Lead, Global CRO",
      overview:
        "This global CRO is among the world’s largest clinical research organizations. They run the clinical trials essential for testing new medicines in patients on behalf of biopharma clients, accelerating delivery of life-changing treatments. Historically, their process involved manually creating comprehensive submission packages for regulatory review — time-consuming and labor-intensive, typically involving ~1,500 employees. They sought to modernize this process to improve efficiency and reduce time to market while maintaining quality and traceability, keeping patient safety at the core.",
      pointsLabel: "Examples of our work together",
      points: [
        {
          strong: "Centralized Study Ontology",
          body: "The CRO uses Jicate AIP to ingest and process hundreds of pages of diversified inputs — from PDFs to Excel and text files — into a centralized study Ontology.",
        },
        {
          strong: "Automated Submission Processing",
          body: "The CRO automated production of submission deliverables, tabular datasets, annotated documents, and reproducible code by orchestrating a series of AI agents across the process — reducing the time to prepare submission materials by over 50%, from 10–12 weeks to 3–4 weeks, for quicker approval and market access.",
        },
        {
          strong: "Data Mapping & Annotation",
          body: "AI agents annotate and map study data into standardized forms, with a human in the loop to manually override any model decisions.",
        },
        {
          strong: "Increased Data Visibility",
          body: "The system provides earlier access to standardized data, accelerating downstream operations with better first-time-quality data to support safety trends, signaling, and medical reviews — enabling faster patient access to new drugs and improving overall healthcare outcomes.",
        },
      ],
      image: "/life-sciences/Asset_13Industries.png",
      imageAlt: "Researcher using a laboratory microscope",
      watchLabel: "Watch: Keynote Session at the AI Conference",
    },
    {
      tab: "At a Large Pharma",
      partner: "Large Pharma",
      quote:
        "“The platform gave our R&D and commercial teams one trusted source of truth — work that used to take weeks now takes days.”",
      cite: "Head of Data Science, Large Pharma",
      overview:
        "A leading global pharmaceutical company deployed the platform to unify research, clinical, manufacturing, and commercial data into a single governed environment — accelerating decisions while preserving strict compliance and patient privacy.",
      pointsLabel: "Examples of our work together",
      points: [
        {
          strong: "Faster Discovery",
          body: "Integrated research and real-world data shorten the path from hypothesis to validated insight across therapeutic areas.",
        },
        {
          strong: "Connected Operations",
          body: "Manufacturing, quality, and supply data feed live models, surfacing issues before they disrupt production.",
        },
        {
          strong: "Trusted Governance",
          body: "Granular, purpose-based access controls and full data lineage give compliance teams confidence in every automated action.",
        },
      ],
      image: "",
      imageAlt: "Large pharma case study visual",
      watchLabel: "Watch: Large Pharma case study",
    },
  ] as CaseTab[],
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
      body: "Unify public databases, internal sources, and study documents into a single source of truth — the Ontology — to power next-generation trial designs. Connect financial data to serve as a foundation for future reporting, analytics, and data-driven operations.",
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
      title: "AIP Powered Sales Co-Pilot",
      body: "Using natural language, empower sales reps to leverage customer history and AI insights to customize the next best action.",
    },
    {
      title: "Tracking and Impact Measurement",
      body: "Determine sales uplift caused by changes in selling and targeting strategies.",
    },
    {
      title: "Medical, Legal, Operational, & Regulatory (MLOR) Review Automation",
      body: "AIP improves content quality and decreases the time required for MLOR reviews by acting as a review assistant — capable of flagging issues in real time, but also recommending solutions to enable rapid resolution.",
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
    { name: "jobTitle", label: "JOB TITLE:", type: "text", required: true },
  ],
  countryLabel: "COUNTRY:",
  submit: "Submit",
  privacyNote: "Please see our Privacy Policy regarding how we will handle the information.",
};
