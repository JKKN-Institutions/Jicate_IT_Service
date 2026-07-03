/**
 * Content for the /ontology page — a faithful DESIGN rebuild of the Palantir
 * Ontology platform page (https://www.palantir.com/platforms/ontology/). LIGHT
 * theme with a lavender/purple accent (#967EFF). Short functional headings kept;
 * body copy in Jicate's voice (placeholder text the user will swap). IP-safe:
 * Palantir → Jicate; generic term "Ontology" kept. Types local.
 *
 * Assets in /public/ontology were scraped from the reference (layered SVG
 * animation frames + PNG diagrams) and stacked to form each section's composite
 * visual. The user will swap these later.
 */

export interface Feature {
  title: string;
  body: string;
}

export interface SubNavItem {
  label: string;
  href: string;
}

/* -------------------------------- sub-nav -------------------------------- */

export const subnav: SubNavItem[] = [
  { label: "Ontology Overview", href: "#overview" },
  { label: "Ontology Language", href: "#language" },
  { label: "Ontology Engine", href: "#engine" },
  { label: "Ontology Toolchain", href: "#toolchain" },
];

/* ---------------------------------- hero --------------------------------- */

export const hero = {
  title: "Ontology",
  subcopy: "The central system for orchestrating decisions across Human+AI teams.",
  layers: [
    "/ontology/hero-circuits.svg",
    "/ontology/hero-layer2.svg",
    "/ontology/hero-layer3.svg",
    "/ontology/hero-layer4.svg",
    "/ontology/hero-layer5.svg",
    "/ontology/hero-layer6.svg",
  ],
};

/* ------------------------------- statement ------------------------------- */

export const statement = {
  text: "The Ontology encodes the data, logic, action, and security of your enterprise to automate decisions across your operations.",
  cardTitle: "The Ontology System",
  visual: "/ontology/ontology-system-visual.png",
  visualAlt: "The Ontology System connecting data, logic, and action",
};

/* -------------------------- power autonomous ----------------------------- */

export const powerAutonomous = {
  heading: "Power ",
  accent: "autonomous operations.",
  layers: [
    "/ontology/power-ontology.svg",
    "/ontology/power-layer2.svg",
    "/ontology/power-layer3.svg",
    "/ontology/power-layer4.svg",
    "/ontology/power-agents-a.svg",
    "/ontology/power-agents-b.svg",
  ],
  aspect: "1176 / 823",
};

/* ---------------------------- language (model) --------------------------- */

export const model = {
  heading: "Model the components of ",
  accent: "Human+AI decisions.",
  layers: [
    "/ontology/model-ontology.svg",
    "/ontology/model-arrow-1.svg",
    "/ontology/model-arrow-2.svg",
    "/ontology/model-arrow-3.svg",
    "/ontology/model-arrow-4.svg",
    "/ontology/model-arrow-5.svg",
    "/ontology/model-arrow-6.svg",
    "/ontology/model-arrow-7.svg",
    "/ontology/model-arrow-8.svg",
    "/ontology/model-arrow-9.svg",
  ],
  aspect: "1230 / 580",
  features: [
    {
      title: "Encode the data of the enterprise.",
      body: "Bring together fragmented data sources into a single, coherent picture of your operations — records, sensors, documents, and systems of record modeled as objects, properties, and links.",
    },
    {
      title: "Capture the logic of the enterprise.",
      body: "Encode the rules, reasoning, and decision frameworks your teams rely on every day, and keep them evolving as your operations change.",
    },
    {
      title: "Model the actions of the enterprise.",
      body: "Represent real-world actions as first-class building blocks — from simple updates to multi-step workflows that write back to your operational systems.",
    },
    {
      title: "Govern the human-agent labor force.",
      body: "Apply consistent security and governance across data, logic, and action — enforcing granular controls whether the actor is a person or an agent.",
    },
  ] as Feature[],
};

/* --------------------------- engine (orchestrate) ------------------------ */

export const orchestrate = {
  heading: "Orchestrate complex operations ",
  accent: "at enterprise scale.",
  layers: [
    "/ontology/orchestrate-left.png",
    "/ontology/orchestrate-right.png",
    "/ontology/orchestrate-ontology.svg",
  ],
  aspect: "1367 / 644",
  features: [
    {
      title: "Millions of reads, millions of writes. One unified reality.",
      body: "A scalable architecture handles real-time operations across your Human+AI teams while preserving consistency and integrity.",
    },
    {
      title: "Activate your existing infrastructure.",
      body: "Coordinate reads and writes across your existing systems — from live queries to high-scale batch updates — without ripping and replacing.",
    },
    {
      title: "Operate in sync.",
      body: "Continuous synchronization keeps decisions in step with the systems where actions take effect, with very low latency.",
    },
  ] as Feature[],
};

/* ------------------------------- toolchain ------------------------------- */

export const toolchain = {
  heading: "Empower developers and agents to treat the ",
  accent: "Ontology as a backend.",
  layers: ["/ontology/toolchain-1.svg", "/ontology/toolchain-2.svg"],
  aspect: "1303 / 600",
  features: [
    {
      title: "Build rich AI-enabled applications and services.",
      body: "A powerful developer SDK and a deep set of DevOps capabilities let your teams ship operational use-cases quickly and safely.",
    },
    {
      title: "Create tools for any human or any agent.",
      body: "Define reusable tools that query any data, call any model or piece of logic, or run any action — all under one governance framework.",
    },
    {
      title: "Power external agents with Ontology MCP.",
      body: "Expose your ontology to external agents as MCP tools, so outside systems can read, query, and act through a governed interface.",
    },
    {
      title: "Turn specialized expertise into shared infrastructure.",
      body: "Let operators, analysts, and engineers package their know-how into reusable building blocks the whole enterprise can build on.",
    },
  ] as Feature[],
};
