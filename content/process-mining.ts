/**
 * Content for the /process-mining page — a faithful DESIGN rebuild of the
 * Foundry Process Mining & Automation reference page, mapped onto this
 * project's design system. Match the layout/visuals and keep the short
 * functional headings/labels; body copy is written in Jicate's own voice.
 * Types are local so the page touches no shared files.
 *
 * Assets in /public/process-mining: Screenshot_2023-01-27_at_11.18.55_AM.png,
 * Product_Images-01/02/03/05/06.png, Machinery_Impact_2.jpg,
 * Machinery_Impact_4.jpg, Group_1.png. The hero video thumbnail is not shipped
 * → poster placeholder.
 */

export interface CTA {
  label: string;
  href: string;
}

/** Bold label + body feature item. */
export interface Feature {
  title: string;
  body: string;
}

/** A "How It Works" step: heading + body + optional images. */
export interface Step {
  title: string;
  body: string;
  images?: string[];
}

/** Impact case study: title + image + Challenge/Solution/Impact bullet groups. */
export interface CaseStudy {
  title: string;
  image: string;
  alt: string;
  groups: { label: string; bullets: string[] }[];
}

/* ---------------------------------- hero --------------------------------- */

export const hero = {
  title: "Foundry Process Mining & Automation",
  subcopy: "Mine processes. Reveal inefficiencies. Drive change. Continuously optimize.",
  cta: { label: "Get in touch", href: "#get-in-touch" } as CTA,
  posterLabel: "Process Mining & Automation",
};

/* ------------------------------ Key Features ----------------------------- */

export const keyFeatures = {
  heading: "Key Features",
  image: "/process-mining/Screenshot_2023-01-27_at_11.18.55_AM.png",
  alt: "Process mining diagram",
  items: [
    {
      title: "Speed to value.",
      body: "Leverage automatic data transformations to rapidly integrate and restructure your datasets into interactive process visualizations in just a few clicks.",
    },
    {
      title: "Streamline processes.",
      body: "Drill down into the causes of process bottlenecks with the Ontology, and evaluate alternatives with ML- and algorithm-agnostic forecasting and simulation.",
    },
    {
      title: "Insights drive action.",
      body: "Transform your processes by writing back to ERP and CRM systems with APIs, or by integrating insights with out-of-the-box workflows.",
    },
    {
      title: "Proactive issue spotting.",
      body: "Configure business rules with low-code tools to continuously monitor process deviations, and integrate ML to help predict process behavior.",
    },
    {
      title: "Orchestrate operations among siloed systems.",
      body: "Build new or manage existing RPA tools using webhooks, alerts, and applications that work across disparate systems.",
    },
  ] as Feature[],
};

/* ------------------------------ How It Works ----------------------------- */

export const howItWorks = {
  heading: "How It Works",
  steps: [
    {
      title: "Connect.",
      body: "Rapidly integrate business process data into the Ontology with built-in connectors, unlocking connectivity and insight that spans your entire organization.",
      images: ["/process-mining/Product_Images-01.png"],
    },
    {
      title: "Understand.",
      body: "Mine processes to produce a point-and-click visualization and model the ideal path. An easy-to-navigate view of expected behavior and its deviations lets you investigate at any level of granularity — from individual steps to high-level trends.",
      images: ["/process-mining/Product_Images-03.png", "/process-mining/Product_Images-02.png"],
    },
    {
      title: "Analyze.",
      body: "With the Ontology, query related objects from across your business to understand the drivers of unexpected process transitions. Rapidly analyze deviations, diagnose bottlenecks, and perform root-cause analysis.",
    },
    {
      title: "Act.",
      body: "Process orchestration lets you take action to address inefficiencies, writing back to external systems to fix problems at their source — while keeping all your systems in sync.",
      images: ["/process-mining/Product_Images-05.png", "/process-mining/Product_Images-06.png"],
    },
    {
      title: "Automate.",
      body: "Continuously optimize your processes with custom triggers for automatic action when steps are completed, milestones are met, or thresholds are breached.",
    },
  ] as Step[],
};

/* -------------------------------- Impact --------------------------------- */

export const impact = {
  heading: "Impact",
  caseStudies: [
    {
      title: "Reducing Vehicle Downtime at a Multi-National Car Rental Company",
      image: "/process-mining/Machinery_Impact_2.jpg",
      alt: "Vehicle maintenance facility",
      groups: [
        {
          label: "Challenge",
          bullets: [
            "Vehicle out-of-service events are the biggest drag on rental-car profitability.",
            "Planning and executing efficient maintenance is key to uptime across fleets of hundreds of thousands of vehicles.",
          ],
        },
        {
          label: "Solution",
          bullets: [
            "Process Mining & Automation lets every level of the maintenance organization — from location managers to regional fleet managers — diagnose which parts of the process drive the most downtime.",
            "Every layer of management can understand location performance and diagnose specific breakdowns by vehicle characteristic, such as body dimensions or class.",
          ],
        },
        {
          label: "Impact",
          bullets: [
            "$15 million / year | Target savings by reducing out-of-service time by 2%",
            "500K vehicles | Global fleet size under maintenance responsibility",
          ],
        },
      ],
    },
    {
      title: "Accelerating Resolution of Quality Defects at a Global Manufacturer",
      image: "/process-mining/Machinery_Impact_4.jpg",
      alt: "Manufacturing quality inspection",
      groups: [
        {
          label: "Challenge",
          bullets: [
            "Throughout production, quality defects arise in the form of non-conformities.",
            "These defects must be eliminated quickly to reduce the cost of non-quality and hits to production targets.",
            "Lead time can be lengthy for complex issues requiring input from quality, production, logistics, and procurement teams.",
          ],
        },
        {
          label: "Solution",
          bullets: [
            "Process Mining & Automation was deployed to quality managers in two weeks, reducing the lead time to resolve defects.",
          ],
        },
        {
          label: "Impact",
          bullets: [
            "10% | Reduction in lead time to resolve defects, achieved in two weeks",
            "25% | Head of Quality's target lead-time reduction as the tool rolls out across the team",
          ],
        },
      ],
    },
  ] as CaseStudy[],
};

/* --------------------------- Example lists ------------------------------- */

export const exampleIndustries = {
  heading: "Example Industries",
  items: ["Financial Services", "Telecommunications", "Manufacturing"],
};

export const exampleUseCases = {
  heading: "Example Use Cases",
  items: ["Purchase-to-pay", "Quality control", "Export control", "Customer journeys", "Order-to-cash"],
};

/* ------------------------------ White paper ------------------------------ */

export const whitepaper = {
  heading: "Learn More: Foundry Process Mining & Automation White Paper",
  cta: { label: "Download", href: "#" } as CTA,
};

/* ------------------------- Reference architecture ------------------------ */

export const referenceArchitecture = {
  heading: "Foundry Process Mining & Automation: Reference Architecture",
  image: "/process-mining/Group_1.png",
  alt: "Process Mining & Automation Suite reference architecture diagram",
};

/* ------------------------------ Contact form ----------------------------- */

export const contact = {
  id: "get-in-touch",
  heading: "Get in touch.",
  fields: [
    { name: "firstName", label: "FIRST NAME:", type: "text", required: true },
    { name: "lastName", label: "LAST NAME:", type: "text", required: true },
    { name: "email", label: "BUSINESS EMAIL ADDRESS:", type: "email", required: true },
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
