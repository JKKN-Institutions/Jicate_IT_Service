/**
 * Content for the /marketplace page — a faithful design rebuild of the
 * reference "Foundry Marketplace" page, mapped onto this project's design
 * system. Layout/visual treatment matches the reference 1:1; long-form body
 * copy is ORIGINAL Jicate content (short functional labels/headings are kept).
 * The user edits final wording.
 *
 * Types are declared locally so the page is fully self-contained.
 *
 * Local media (in /public/marketplace):
 *   Screenshot_2023-01-27_at_11.09.56_AM_copy.png — Key Features isometric art
 *   Asset_9TPM_Monitor.png                         — How It Works "Develop"
 *   GanttChart_4__1_.mp4                           — How It Works "Deploy" clip
 *   Asset_11TPM_Monitor.png                        — How It Works "Discover"
 *   Asset_10TPM_Monitor.png                        — How It Works "Manage"
 *   (hero band poster Asset_27Marketplace not shipped — placeholder used)
 */

/* ------------------------------ shared shapes ----------------------------- */

export interface CTA {
  label: string;
  href: string;
}

/** A "Key Features" entry: bold lead phrase + body. */
export interface Feature {
  title: string;
  body: string;
}

/** One step in "How It Works": label + body + media. */
export interface Step {
  title: string;
  body: string;
  image?: string;
  alt?: string;
  video?: string;
  mediaSide: "left" | "right";
}

/* --------------------------------- hero ----------------------------------- */

export const hero = {
  title: "Foundry Marketplace",
  body: "Build and launch data products as SaaS.",
};

/* ------------------------- hero media / spotlight band -------------------- */

export const spotlightBand = {
  eyebrow: "Foundry Marketplace",
  title: "Find and deploy data products for Foundry",
  body: "Browse, install, and manage packaged data products from a single storefront.",
  playLabel: "Play Video",
  wordmark: "Jicate",
  copyright:
    "© 2026 Jicate IT Service. The information in this video is provided for informational purposes only. Actual results and experiences may vary.",
};

/* ------------------------------ key features ------------------------------ */

export const keyFeatures = {
  heading: "Key Features",
  image: "/marketplace/Screenshot_2023-01-27_at_11.09.56_AM_copy.png",
  alt: "Marketplace data products",
  features: [
    {
      title: "Publish data products in a few clicks.",
      body: "Rapidly develop and deploy packages of data-backed workflows built in Foundry — your organization’s ontology, AI models, pipelines, data connections, or end-to-end use cases.",
    },
    {
      title: "Integrated CI/CD for complex data products.",
      body: "Automated version and dependency management for your complex data products, ensuring seamless synchronization of modular components as you scale across customers.",
    },
    {
      title: "Secure collaboration among developers and consumers.",
      body: "Multi-layer security lets marketplace owners configure granular controls to enforce strict governance across customer workspaces and clear barriers for cross-organization collaboration.",
    },
    {
      title: "Consumer-facing storefront.",
      body: "Facilitate easy discoverability for internal and external consumers to install your published data products. Recommendations let existing consumers extend and enhance products.",
    },
  ] satisfies Feature[],
};

/* ------------------------------ how it works ------------------------------ */

export const howItWorks = {
  heading: "How It Works",
  steps: [
    {
      title: "Develop",
      body: "Select a data asset or workflow built in Foundry to publish.",
      image: "/marketplace/Asset_9TPM_Monitor.png",
      alt: "Develop a data product",
      mediaSide: "left",
    },
    {
      title: "Deploy",
      body: "Publish your data product to Marketplace with a point-and-click UI.",
      video: "/marketplace/GanttChart_4__1_.mp4",
      alt: "Deploy to Marketplace",
      mediaSide: "right",
    },
    {
      title: "Discover",
      body: "Consumers discover and install your data product on Marketplace.",
      image: "/marketplace/Asset_11TPM_Monitor.png",
      alt: "Discover data products",
      mediaSide: "left",
    },
    {
      title: "Manage",
      body: "Easily manage updates with full visibility into dependencies and automated versioning.",
      image: "/marketplace/Asset_10TPM_Monitor.png",
      alt: "Manage data products",
      mediaSide: "right",
    },
  ] satisfies Step[],
};

/* ------------------------- industries / use cases ------------------------- */

export const industries = {
  heading: "Industries",
  items: ["Financial Services", "Manufacturing", "Supply Chain", "Healthcare", "Defense"],
};

export const useCases = {
  heading: "Example Use Cases",
  items: [
    { label: "Skywise", href: "#skywise" },
    { label: "Syntropy", href: "#syntropy" },
    { label: "Athinia", href: "#athinia" },
  ] satisfies CTA[],
};

/* --------------------------------- form ----------------------------------- */

export const contactForm = {
  title: "Get in touch.",
  fields: [
    { name: "firstName", label: "First Name", type: "text", required: true },
    { name: "lastName", label: "Last Name", type: "text", required: true },
    { name: "businessEmail", label: "Business Email Address", type: "email", required: true },
    { name: "phone", label: "Phone Number", type: "tel", required: false },
    { name: "jobTitle", label: "Job Title", type: "text", required: true },
    { name: "company", label: "Company / Institution", type: "text", required: true },
    { name: "country", label: "Country", type: "select", required: true },
  ],
  message: { name: "message", label: "How can we help?", type: "textarea", required: false },
  submitLabel: "Submit",
  privacyHref: "/privacy",
};
