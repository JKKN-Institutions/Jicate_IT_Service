/**
 * Content for the /digital-twin page — a faithful DESIGN rebuild of the Foundry
 * Digital Twin reference page, mapped onto this project's design system.
 *
 * Approach (same as the other clone pages): match the layout/visuals 100% and
 * keep the short functional headings/labels, but the body copy is written in
 * Jicate's own voice rather than copied verbatim. Types are local so the page
 * is self-contained and touches no shared files.
 *
 * Assets in /public/digital-twin:
 *   foundry_1.gif · 1-Interactive_Twin.png · 2-AI_ML.png · 3-Read_Write_Apps.png
 *   4-Next_Gen_Analytics.png · Digital_Twin.png · screenshot_digital_twin.png
 *   screenshot_code_workbook.png
 */

export interface CTA {
  label: string;
  href: string;
}

/** Image + title + description feature block (alternating sides). */
export interface FeatureBlock {
  image: string;
  alt: string;
  title: string;
  body: string;
  link?: CTA;
}

/** Uppercase-eyebrow capability item used in the multi-column stacks. */
export interface Capability {
  label: string;
  body: string;
}

/** Captioned product screenshot. */
export interface Shot {
  image: string;
  alt: string;
  caption: string;
}

/* -------------------------------- sub-nav -------------------------------- */

export const subNav = {
  brand: { label: "Foundry", href: "#" } as CTA,
  links: [
    { label: "About the Ontology", href: "#" },
    { label: "Industries", href: "#" },
    { label: "Capabilities", href: "#" },
    { label: "Learn Foundry", href: "#" },
  ] as CTA[],
  cta: { label: "Start Building Now", href: "#" } as CTA,
};

/* --------------------------------- hero ---------------------------------- */

export const hero = {
  title: "Foundry Digital Twin",
  subcopy:
    "Power next-generation operations with semantic data, AI/ML-based twins, and twin-based simulations.",
  cta: { label: "Get a Demo", href: "#get-in-touch" } as CTA,
  media: "/digital-twin/foundry_1.gif",
  mediaAlt: "Artistic rendering of the Jicate Digital Twin",
};

/* ----------------------- Virtualized Operations -------------------------- */

export const featureIntro = "Virtualized Operations. Real Impact.";

export const featureBlocks: FeatureBlock[] = [
  {
    image: "/digital-twin/1-Interactive_Twin.png",
    alt: "Interactive digital twin artwork",
    title: "Interactive Digital Twin.",
    body: "Bring the full range of your data and models into one unified, governed, and living representation of your organization. Scale the investments you already have and put decision-making in the hands of every team — in language they already understand.",
  },
  {
    image: "/digital-twin/2-AI_ML.png",
    alt: "Operational AI and ML artwork",
    title: "Operational AI/ML.",
    body: "Orchestrate the flow of data and models through real operational workflows. Give data scientists, ML engineers, business owners, and operators one shared substrate to build on together.",
    link: { label: "Get to know Jicate AI/ML", href: "#" },
  },
  {
    image: "/digital-twin/3-Read_Write_Apps.png",
    alt: "Read-write applications artwork",
    title: "Power Read-Write Applications.",
    body: "Move past read-only dashboards. Build applications that read and write — taking real-world actions back into the systems that run your business.",
    link: { label: "Learn how digital twins provide connectivity at scale", href: "#" },
  },
  {
    image: "/digital-twin/4-Next_Gen_Analytics.png",
    alt: "Next-generation analytics artwork",
    title: "Next-Gen Analytics.",
    body: "Run SQL workflows, object-driven semantic analysis, low-latency time-series analytics, imagery workflows, and far more — all on a single twin.",
  },
];

/* -------------------- Your Operations. Expressed Digitally. -------------- */

export const expressed = {
  heading: "Your Operations. Expressed Digitally.",
  subcopy:
    "Connect teams. Maximize data and model interpretability. Simulate future states of the world. Capture decisions.",
  image: "/digital-twin/Digital_Twin.png",
  alt: "Digital twin overview artwork",
  body: "The Ontology underpins every digital twin, mapping your datasets and models to object types, properties, link types, and action types to build a complete, living picture of your organization's world.",
};

/* --------------- Twins for Every Stage of Digital Transformation --------- */

export const twinsStages = {
  heading: "Twins for Every Stage of Digital Transformation.",
  items: [
    {
      label: "MULTI-MODAL, SEMANTIC DATA.",
      body: "Evolve from a legacy world of files and tables into a semantic, intuitive representation of your operations. Full-fidelity twins hold granular, live detail about real-world entities and events — customers, factories, work orders, shipments.",
    },
    {
      label: "AI/ML-BASED TWINS.",
      body: "Bring your landscape to life with native modeling of the actions and processes in your enterprise. Every operational action — such as adjusting pressure on a valve — can be modeled, associated, and governed.",
    },
    {
      label: "TWIN-BASED SIMULATIONS.",
      body: "Visualize and quantify cause and effect across the twin of your organization, and simulate future conditions to make optimal decisions and find the changes that matter most.",
    },
  ] as Capability[],
};

/* -------------------------- Analytics. Twin-Powered. --------------------- */

export const analytics = {
  heading: "Analytics. Twin-Powered.",
  items: [
    {
      label: "OBJECT-DRIVEN ANALYTICS.",
      body: "Unlock next-generation analytics that are truly self-service and empower operational users. Every element of your twin — forecasts, parts, customers — can be explored and securely updated through consistent, durable interfaces. Open APIs power your existing BI, like Tableau or Microsoft Power BI.",
    },
    {
      label: "ADVANCED ANALYTICS & WORKFLOWS.",
      body: "Use purpose-built applications for complex analytical workflows, and let object-aware apps trigger actions on underlying systems through a fully governed, auditable framework that keeps every workflow consistent.",
    },
    {
      label: "SIMULATIONS & SCENARIOS ACROSS YOUR TWIN.",
      body: "Monitor, simulate, and optimize operational decisions based on current, predicted, or proposed conditions. Simulations can be backed by simple logic-based rules, physics models, deep-learning models, or hybrid approaches.",
    },
  ] as Capability[],
  shots: [
    {
      image: "/digital-twin/screenshot_digital_twin.png",
      alt: "Digital twin simulation screenshot",
      caption:
        "Interact with and interrogate your digital twin through integration with any model, forecast, or business logic published on the platform.",
    },
    {
      image: "/digital-twin/screenshot_code_workbook.png",
      alt: "Code workbook screenshot",
      caption:
        "By incorporating AI/ML models with native model integration, your digital twin becomes a single source of truth — not just for data, but for logic.",
    },
  ] as Shot[],
};

/* ----------------- Operations and data science. United. ------------------ */

export const opsDataScience = {
  heading: "Operations and data science. United at last.",
  items: [
    {
      label: "TWIN-BACKED MODEL BUILDING.",
      body: "Integrate models built in other tools (e.g. SageMaker, AzureML, Vertex AI) or author them from scratch. Once on the platform, a model-management framework operationalizes logic across the twin and provides a gateway for context, relevant data, metadata, and evaluation of candidates.",
    },
    {
      label: "COLLABORATION ACROSS AI/ML STAKEHOLDERS.",
      body: "Your twin is a shared substrate for everyone invested in model performance. As operators, processes, and systems make decisions and act, the platform captures it as new data — feeding monitoring, evaluation, re-training, and MLOps.",
    },
    {
      label: "IMPROVED INTERPRETABILITY.",
      body: "Make it easy for end users to understand model results without needing to know machine learning. Outputs are defined in real-world terms — a forecast, an estimate, a classification.",
    },
  ] as Capability[],
};

/* --------------------------- Digital Twin In Action ---------------------- */

export const inAction = {
  heading: "Digital Twin In Action",
  video: {
    title: "Twin-based Asset and Risk Management",
    // No video asset shipped — render a poster/play-button placeholder.
    poster: null as string | null,
  },
  caseStudy: {
    title: "Twin-based COGS and Production Optimization",
    intro: [
      "At a Fortune 100 consumer-goods company, the platform integrated 7+ ERP data sources to produce a digital twin of the organization's value chain. The twin provides the substrate for a granular COGS and profitability model that applies at the SKU level.",
      "Optimizing raw-material purchases now takes minutes instead of weeks — and is projected to generate millions in annual savings.",
    ],
    challenge: {
      title: "Challenge",
      body: "Profitability was reported only at an aggregate company level, but the customer needed to compute it with far more granularity to optimize COGS, improve output, and inform daily operations. The data lived across more than seven ERP systems, where it is stored natively and is inaccessible to most decision-makers — every analysis took weeks of costly manual work, and a growing backlog meant IT had to postpone its most valuable projects.",
      questions: [
        "How can we take advantage of pricing changes to raw materials and reduce COGS through spot-buy opportunities?",
        "How can we avoid miscalculations of raw materials to reduce waste?",
        "How can we optimize production through greater visibility into the cost and profitability of our product formulations?",
      ],
    },
    solution: {
      title: "Solution",
      leads: [
        "The platform integrated 7+ ERP data sources into a digital twin of the value chain — from the hand of the supplier to the hand of the customer.",
        "Instead of querying complex ERP databases, supply-chain managers, plant managers, and demand planners now interact in a no-code way with a real-world object model of plants, SKUs, customers, and other core business concepts.",
      ],
      outro:
        "This foundation lets analysts build a granular COGS and profitability model at the SKU level. New workflows incorporating these models help teams:",
      bullets: [
        {
          lead: "Optimize COGS.",
          body: "Within one week, an out-of-the-box Bill of Materials workflow let users begin optimizing raw-material purchases for the first time — assessing spot-buy opportunities while accounting for formulation constraints, existing inventory, and forecasted demand.",
        },
        {
          lead: "Optimize Production.",
          body: "Using the granular profitability model, supply-chain managers evaluate how new product formulations compare to existing ones and develop strategies to maximize production.",
        },
      ],
    },
  },
};

/* ----------------------------- Contact form ------------------------------ */

export const contact = {
  id: "get-in-touch",
  heading: "Get in Touch to Learn More",
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
