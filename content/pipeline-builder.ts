/**
 * Content for the /pipeline-builder page — a faithful design rebuild of the
 * reference "Foundry Pipeline Builder" page, mapped onto this project's design
 * system. Layout/visual treatment matches the reference 1:1; all body copy is
 * ORIGINAL Jicate content written in our own words (only short functional
 * labels/headings are kept). The user edits final wording.
 *
 * Types are declared locally so the page is fully self-contained.
 *
 * Local media (in /public/pipeline-builder):
 *   2-AI_ML (1).png            — "Data, Democratized." artwork
 *   pipeline-add-data--01.png  — How It Works "Add Data" image
 *   (video poster + Transforms / sequence / layers / 3D diagram not shipped —
 *    placeholders used)
 */

/* ------------------------------ shared shapes ----------------------------- */

export interface CTA {
  label: string;
  href: string;
}

/** A "Data, Democratized." feature row: arrow heading + body. */
export interface FeatureRow {
  title: string;
  body: string;
}

/** A step in the How-It-Works vertical-tab walkthrough. */
export interface WalkStep {
  tab: string;
  eyebrow: string;
  lines: string[];
  image: string | null;
  alt: string;
}

/** A card in the "Engineered for…" grid: title + body. */
export interface GridItem {
  title: string;
  body: string;
}

/* --------------------------------- hero ----------------------------------- */

export const hero = {
  title: "Next-Generation Pipeline Builder",
  body: "Ship production data pipelines that come with security, data quality, and governed teamwork built in from day one.",
  note: "Coding skills not required.",
  cta: { label: "Get a demo", href: "/get-started" } satisfies CTA,
};

/* ------------------------------- video band ------------------------------- */

export const videoBand = {
  brand: "Foundry",
  tag: "PIPELINE BUILDER",
  speaker: "Kamran Khan",
  role: "Lead Product Manager",
  playLabel: "Play Video",
};

/* --------------------------- data, democratized --------------------------- */

export const dataDemocratized = {
  heading: "Data, Democratized.",
  image: "/pipeline-builder/2-AI_ML%20(1).png",
  alt: "Pipeline Builder artwork",
  rows: [
    {
      title: "Pipelines In Record Time",
      body: "A rethought architecture separates schema work from data work, so you can build and preview pipelines interactively — at full production scale — without the usual wait.",
    },
    {
      title: "Empower All Users",
      body: "A clean point-and-click canvas lets anyone on the team — technical or not — assemble complex pipelines and shape data, no engineering background required.",
    },
    {
      title: "Support Heavy-Duty Data",
      body: "This isn't just for small datasets. Handle batch, micro-batch, and streaming workloads across structured, unstructured, IoT, and geospatial data alike.",
    },
    {
      title: "Built For Collaboration",
      body: "No-code, low-code, and pro-code teams work side by side. Export to code and lean on open standards so nothing is ever locked in.",
    },
  ] satisfies FeatureRow[],
};

/* ------------------------------ how it works ------------------------------ */

export const howItWorks = {
  heading: "How It Works",
  subheading: "Pipeline Builder is designed around speed and simplicity.",
  body: "Stop fighting code, libraries, builds, and repository sprawl — and put your time into the work that actually moves the needle.",
  steps: [
    {
      tab: "Add Data",
      eyebrow: "ADD DATA",
      lines: [
        "Begin by picking the datasets you want to work with directly inside Foundry.",
        "Pull data in from virtually any source system — structured, unstructured, IoT, or geospatial — with minimal setup.",
        "Need a quick one-off? Drag and drop raw files straight into Foundry.",
      ],
      image: "/pipeline-builder/pipeline-add-data--01.png",
      alt: "Adding data in Pipeline Builder",
    },
    {
      tab: "Transform Data",
      eyebrow: "TRANSFORM DATA",
      lines: [
        "With your datasets in place, reshape them entirely through the visual interface — no code needed.",
        "Turn raw XML, JSON, PDF and more into clean tables, and stitch datasets together with joins and unions.",
        "Reach for a deep library of functions — clean, derive, pivot, encrypt, aggregate, filter — plus image, geospatial, and finance operations.",
      ],
      image: null,
      alt: "Transforming data",
    },
    {
      tab: "Collaborate with Branches",
      eyebrow: "COLLABORATE WITH BRANCHES",
      lines: [
        "Working on a live pipeline? Spin up a branch and make changes in isolation, leaving the main version untouched.",
        "Run many branches in parallel — even branches of branches — so teams can iterate, add features, and fix issues at the same time.",
      ],
      image: null,
      alt: "Collaborating with branches",
    },
    {
      tab: "Merge Changes",
      eyebrow: "MERGE CHANGES",
      lines: [
        "When your branch is ready, propose merging it back. A side-by-side view makes every change obvious.",
        "Builder flags merge conflicts — including overlaps from teammates editing the same transforms — and walks you through resolving them.",
        "A full history of versions, edits, and merges is always on hand, so large teams can move fast with confidence.",
      ],
      image: null,
      alt: "Merging changes",
    },
    {
      tab: "Deploy",
      eyebrow: "DEPLOY",
      lines: [
        "Before anything ships, Builder validates the whole pipeline to confirm your logic produces every required column — heading off costly downtime.",
        "Once it checks out, the merge lands and the branch deploys to refresh your pipeline outputs.",
        "Target batch, streaming, time series, or modeling outputs, with Builder guiding you through each input it needs.",
      ],
      image: null,
      alt: "Deploying a pipeline",
    },
  ] satisfies WalkStep[],
};

/* ----------------------- engineered for speed grid ------------------------ */

export const engineered = {
  heading: "Engineered for Speed, Scale, & Stability",
  items: [
    {
      title: "Independent Pipeline Logic",
      body: "Plug into whichever execution engine fits the job — Spark, Flink, and others are all supported.",
    },
    {
      title: "Full Version Control",
      body: "Branch and version freely to experiment safely and roll out changes with confidence.",
    },
    {
      title: "Reusable Logic",
      body: "Lift logic out of one pipeline and reuse it in another, saving the time and cost of rebuilding from scratch.",
    },
    {
      title: "Type-Safe Functions",
      body: "Strong typing surfaces errors as you build rather than at run time, heading off breaks that are expensive to repair.",
    },
    {
      title: "Abstract Implementation Details",
      body: "Describe the pipeline and the outputs you want; builds, syncs, and orchestration are handled for you in the background.",
    },
    {
      title: "Strict Output Targets",
      body: "When the expected output target isn't satisfied, deployment is blocked to protect everything downstream.",
    },
    {
      title: "Built-In Security",
      body: "Granular security checks and Git-style change control come standard — without slowing you down.",
    },
    {
      title: "Interoperability",
      body: "Export to code at any time, on an architecture built from the ground up to stay runtime-agnostic and lock-in free.",
    },
  ] satisfies GridItem[],
};

/* --------------------------------- form ----------------------------------- */

export const contactForm = {
  title: "Get Started with Pipeline Builder",
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
