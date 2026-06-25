/**
 * Content for the /data-integration page — a faithful design rebuild of the
 * reference "Foundry Data Integration" page, mapped onto this project's design
 * system. Layout/visual treatment matches the reference 1:1; body copy is
 * ORIGINAL Jicate content (short functional labels are kept). The user edits
 * final wording.
 *
 * Types are declared locally so the page is fully self-contained and touches no
 * shared files.
 *
 * Local media (in /public/data-integration):
 *   Asset_109.png, Asset_107.png, Asset_105.png, Asset_110.png   — supercharged grid art
 *   Data_Lineage_1.png, Foundry_Data_Catalog.png,
 *   Time_Series_1.png, Autoscaling_2.png                          — feature-band screenshots
 *   Energy_New.jpg                                                — impact-study photo
 */

/* ------------------------------ shared shapes ----------------------------- */

export interface CTA {
  label: string;
  href: string;
}

/** A card in the "Supercharged" 2x2 grid: art image, title, body, link. */
export interface ProductCard {
  /** Art image path (the colored geometric block on top). */
  image: string;
  alt: string;
  title: string;
  body: string;
  link?: CTA;
}

/** One capability block inside a feature band: uppercase label + body. */
export interface Feature {
  eyebrow: string;
  body: string;
  link?: CTA;
}

/** A big-headline feature band: giant title + lead image + capability blocks. */
export interface FeatureBand {
  id: string;
  title: string;
  /** Optional lead paragraph under the title. */
  lead?: string;
  /** Supporting screenshot image. */
  image?: string;
  alt?: string;
  imageLink?: CTA;
  features: Feature[];
}

/* --------------------------------- hero ----------------------------------- */

export const hero = {
  title: "Foundry Data Integration",
  body: "Accelerate pipeline development and management with built-in automation. Deliver the full spectrum of use cases atop a trusted foundation, solving problems as quickly as business needs evolve.",
  cta: { label: "Get a Demo", href: "/get-started" } satisfies CTA,
};

/* ------------------------------- video band ------------------------------- */

export const videoBand = {
  /** Top-left product breadcrumb shown over the media card. */
  brand: "Foundry",
  /** Top-right product tag. */
  tag: "PIPELINE BUILDER",
  speaker: "Kamran Khan",
  role: "Lead Product Manager",
  playLabel: "Play Video",
};

/* ---------------------- "Data Integration, Supercharged." ------------------ */

export const superchargedTitle = "Data Integration, Supercharged.";

export const productCards: ProductCard[] = [
  {
    image: "/data-integration/Asset_109.png",
    alt: "Hyperauto pipeline generation",
    title: "Groundbreaking Time to Value.",
    body: "Unlock complex data estates in hours. Jicate Hyperauto enables automatic and dynamic pipeline generation for the most common ERP, CRM, and SQL stores.",
    link: { label: "Learn more about Jicate Hyperauto", href: "#hyperauto" },
  },
  {
    image: "/data-integration/Asset_107.png",
    alt: "Pipeline Builder authoring",
    title: "Treat Data Like Code.",
    body: "Foundry offers both code-based and no-code interfaces for authoring production-grade pipelines. In both cases, Foundry treats data like code — bringing the power of git-style branching, merging, and rich change management to data pipelines.",
    link: { label: "Get to know Pipeline Builder", href: "#pipeline-builder" },
  },
  {
    image: "/data-integration/Asset_105.png",
    alt: "Open connectors and interoperability",
    title: "Built Open.",
    body: "Foundry is an open platform that connects to your existing data lakes, warehouses, lakehouses, data science environments, and BI tools. Beyond open interfaces, native connectors move every type of data and metadata — structured, unstructured, or streaming — in and out without lock-in.",
    link: { label: "See how Foundry interoperates with your architecture", href: "#interoperate" },
  },
  {
    image: "/data-integration/Asset_110.png",
    alt: "Intelligent pipeline orchestration",
    title: "Designed for Efficiency.",
    body: "Intelligent pipeline orchestration provides live data monitoring, temporal drift detection, and cost-effective refreshes. Foundry cuts spend and painful manual configuration with version tracking, job introspection, aggregate reporting, and alerting.",
  },
];

/* ----------------------- "The Future of Data Integration." ----------------- */

export const futureIntro = {
  title: "The Future of Data Integration.",
  lead: "Power diverse BI, analytics, AI, and operational applications from a single, unified integration layer.",
  image: "/data-integration/Data_Lineage_1.png",
  alt: "Interactive data lineage graph",
  imageLink: { label: "Data Lineage", href: "#data-lineage" } satisfies CTA,
};

/* ------------------------------ feature bands ----------------------------- */

export const featureBands: FeatureBand[] = [
  {
    id: "governance",
    title: "Data Governance. Automated.",
    image: "/data-integration/Data_Lineage_1.png",
    alt: "Dynamic data lineage view",
    imageLink: { label: "Data Lineage", href: "#data-lineage" },
    features: [
      {
        eyebrow: "DYNAMIC DATA LINEAGE",
        body: "Move past theoretical, best-guess lineage crawlers. Foundry captures active metadata and full user attribution to apply and maintain lineage across every data element automatically. Every version of every dataset records exactly which code and parent datasets produced it.",
      },
      {
        eyebrow: "MULTI-MODAL SECURITY",
        body: "Eliminate “bolt-on” and legacy cloud security approaches. Foundry enforces role-, marking-, and purpose-based access controls as active, immutable metadata. Its security and lineage engines work in concert, giving a detailed account of who accessed what, and why, across data versions.",
      },
      {
        eyebrow: "EMBEDDED DATA HEALTH",
        body: "Bring data quality to life through an integrated suite for defining, monitoring, and responding to data issues across all assets. Proactive health checks apply via point-and-click or code, operating at the level of individual jobs or entire pipeline orchestrations with granular success criteria.",
      },
    ],
  },
  {
    id: "collaboration",
    title: "Global Collaboration. Universal Impact.",
    image: "/data-integration/Foundry_Data_Catalog.png",
    alt: "Foundry Data Catalog search",
    imageLink: { label: "Foundry Data Catalog", href: "#data-catalog" },
    features: [
      {
        eyebrow: "TREAT DATA LIKE CODE",
        body: "Bring branching, merging, and granular change management to data pipelines. Branching isolates proposed changes in a sandboxed branch that can be fully materialized, examined, and iterated on with atomic commits — with impact analysis on every downstream asset.",
      },
      {
        eyebrow: "DISCOVERABILITY AND CATALOGING",
        body: "Leverage integrated applications like Foundry Data Catalog for search, cataloging, metadata management, and dataset and usage analytics. The catalog offers a curated view of data, while search traverses every key metadata field.",
      },
      {
        eyebrow: "INTEGRATED PROJECT MANAGEMENT",
        body: "Use a full suite of project-management capabilities with rich controls for user access, SDLC policies, and resource management. Federated governance and role management help projects scale while dynamic resource tracking keeps IT in control.",
      },
    ],
  },
  {
    id: "sql",
    title: "SQL. And Much More.",
    image: "/data-integration/Time_Series_1.png",
    alt: "Quiver time-series analytics",
    imageLink: { label: "Quiver", href: "#quiver" },
    features: [
      {
        eyebrow: "BROAD SQL CONNECTIVITY",
        body: "Enable a broad range of advanced SQL integration and consumption patterns with JDBC and ODBC connectivity. A Spark-based engine powers complex queries, and a Direct Read engine can bypass Spark to stream data straight to the consumer.",
      },
      {
        eyebrow: "CUTTING-EDGE TIME SERIES",
        body: "Quiver puts time-series analytics in users’ hands like never before. On the backend, a next-generation time-series database eliminates the traditional trade-offs of warehouse and data-lake architectures, scaling horizontally as usage and data volume grow.",
      },
      {
        eyebrow: "POWERING DIGITAL TWINS",
        body: "Fuel the next generation of analytics and operational software with object and action modeling. REST APIs unlock the ability to access, monitor, and evolve semantic object backends — powering enterprise-scale digital twins.",
      },
    ],
  },
  {
    id: "scale",
    title: "Scale. Fast and Far.",
    image: "/data-integration/Autoscaling_2.png",
    alt: "Autoscaling service mesh",
    features: [
      {
        eyebrow: "AUTOSCALING",
        body: "A Kubernetes-based service mesh delivers autoscaling even in the most complex operational settings. Battle-tested in demanding environments, the mesh provides ephemeral nodes, rich cost accountability, and secure code execution.",
      },
      {
        eyebrow: "CONTINUOUS DELIVERY AND ZERO DOWNTIME",
        body: "Every component within Foundry is powered by Apollo, the next-generation platform for autonomous scaling, management, and monitoring of critical infrastructure.",
        link: { label: "Jicate Apollo", href: "#apollo" },
      },
      {
        eyebrow: "MISSION CONTROL FOR YOUR DATA",
        body: "Stay in command with Foundry’s full-spectrum governance that weaves together control planes for data and metadata governance, usage governance, rich reporting, and federated workflows.",
      },
    ],
  },
];

/* ------------------------------ impact study ------------------------------ */

export const impactStudy = {
  eyebrow: "IMPACT STUDY",
  partner: "Global Energy Company",
  heading: "The Challenge",
  body: "A global energy company uses Jicate to integrate more than 300 ERP datasets and flag attempts to buy materials already held in inventory. With all ERP data unified, an alerting workflow identifies surplus materials and catches duplicate orders before they are placed — surfacing tens of millions in recoverable working capital.",
  image: "/data-integration/Energy_New.jpg",
  alt: "Energy company operations",
  metrics: [
    { value: "300+", label: "ERP data sets integrated" },
    { value: "$50M+", label: "in working capital identified in weeks" },
  ],
  tags: [
    { label: "ERP Integration", href: "#erp-integration" },
    { label: "Cost of Goods Sold", href: "#cogs" },
    { label: "Inventory Optimization", href: "#inventory" },
  ] satisfies CTA[],
};

/* --------------------------------- form ----------------------------------- */

export const expertForm = {
  title: "Talk to a Jicate Expert",
  fields: [
    { name: "firstName", label: "First Name", type: "text", required: true },
    { name: "lastName", label: "Last Name", type: "text", required: true },
    { name: "businessEmail", label: "Business Email", type: "email", required: true },
    { name: "company", label: "Company", type: "text", required: true },
    { name: "jobTitle", label: "Job Title", type: "text", required: true },
    { name: "country", label: "Country", type: "select", required: true },
  ],
  message: { name: "message", label: "How can we help?", type: "textarea", required: false },
  submitLabel: "Submit",
  privacyNote: "Please see our Privacy Policy regarding how we will handle this information.",
  privacyHref: "/privacy",
};
