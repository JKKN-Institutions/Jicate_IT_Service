/**
 * Content for the /aip-developers page — a faithful rebuild of the reference
 * "AIP for Developers" page, mapped onto this project's design system.
 *
 * Types are declared locally (not in `@/types`) so the page is fully
 * self-contained and touches no shared files.
 *
 * Local media (in /public/aip-developers):
 *   videos — aipnow-product.mp4, aip-osdk.mp4, workflow-builder.mp4, automation.mp4
 *   svgs   — ontology-sdk.svg, ontology.svg, pipelining.svg, connectivity.svg
 */

/* ----------------------------- shared shapes ----------------------------- */

export interface CTA {
  label: string;
  href: string;
}

export interface FeatureCard {
  title: string;
  body: string;
}

export interface LinkCard {
  title: string;
  body: string;
  href: string;
}

/** A scroll-told step: pinned caption + body alongside a looping clip. */
export interface MediaStep {
  index: string; // "01" | "02" | "03"
  title: string;
  body: string;
  /** Local video path, or null when no asset is available (poster only). */
  video: string | null;
}

/** One captioned slab in the isometric "Modular" stack. */
export interface Slab {
  /** Accent dot color for the slab face. */
  dot: string;
  label: string;
  svg: string;
  body: string;
}

/* ------------------------------- sub-nav --------------------------------- */

export const subNav: CTA[] = [
  { label: "SDK for your Business", href: "#sdk-for-your-business" },
  { label: "Modular & Interoperable", href: "#modular-interoperable" },
  { label: "Build Alpha, Not Infra", href: "#alpha-not-infra" },
  { label: "Speed to Deploy", href: "#rapid-deploying" },
  { label: "View Docs ↗", href: "#" },
];

/* --------------------------------- hero ---------------------------------- */

export const hero = {
  headline: "The most powerful and flexible developer platform",
  focusLines: ["FOCUS ON", "ALPHA,", "NOT INFRA"],
  time: "TIME: 3 MINS",
  scroll: ["SCROLL", "TO EXPLORE"],
  pricingLabel: "PRICING",
  signUp: { label: "SIGN UP FOR AIP", href: "#sign-up" } as CTA,
  /** Looping product clip shown under the headline. */
  video: "/aip-developers/aipnow-product.mp4",
};

/* ------------------ §1  SDK for your Business (anchor) -------------------- */

export const sdkSection = {
  id: "sdk-for-your-business",
  heading: "Hyperscalers deprecated infra. AIP deprecates backend.",
  steps: [
    {
      caption: "Define your operational data model in AIP’s Ontology",
      video: "/aip-developers/workflow-builder.mp4",
    },
    {
      caption: "…and AIP generates a custom SDK for your business",
      video: "/aip-developers/aip-osdk.mp4",
    },
  ],
  cards: [
    {
      title: "INCREDIBLE SPEED TO VALUE",
      body: "Ontology SDK provides a set of tools and libraries that simplifies developing applications on top of your Ontology.",
    },
    {
      title: "CODE GENERATION FOR COMMON TASKS",
      body: "The Ontology SDK can generate boilerplate code for many tasks, potentially saving time and reducing the risk of errors.",
    },
    {
      title: "A FAMILIAR DEVELOPER ENVIRONMENT",
      body: "The Ontology SDK is designed to reduce the learning curve and increase productivity.",
    },
    {
      title: "BUILD IN ANY LANGUAGE",
      body: "Available as an NPM package for TypeScript, Pip or Conda for Python, or through OpenAPI for any language.",
    },
    {
      title: "POWERED BY THE ONTOLOGY",
      body: "Engage with your data in the standard business terms, in language shared by all of your company’s developers.",
    },
    {
      title: "AUTO-GENERATED DOCUMENTATION",
      body: "Get started quickly with example code and docs, generated specifically for your Ontology.",
    },
  ] as FeatureCard[],
  links: [
    {
      title: "Watch on YouTube",
      body: "Watch devs build with Ontology SDK",
      href: "#",
    },
    {
      title: "Join the Community",
      body: "Ask questions or help out other devs in the Developer Community.",
      href: "#",
    },
    {
      title: "Read the docs",
      body: "Learn how the Ontology SDK works",
      href: "#",
    },
  ] as LinkCard[],
};

/* ----------------- §2  Modular & Interoperable (anchor) ------------------ */

export const modularSection = {
  id: "modular-interoperable",
  heading: "Modular and interoperable",
  subcopy:
    "Interoperable across the entire stack. Connect to any source. Bring any containerized code. Build powerful custom front-ends.",
  slabs: [
    {
      dot: "#c879c8",
      label: "Ontology SDK",
      svg: "/aip-developers/ontology-sdk.svg",
      body: "Ontology SDK enables pro-code builders to build custom applications with no limits. Build in any language in any dev environment.",
    },
    {
      dot: "#4e8af7",
      label: "Ontology",
      svg: "/aip-developers/ontology.svg",
      body: "The Ontology creates an API enabling you to build operational apps on top of any data, modeling, or systems of action. No-code builders can use AIP’s app building suite, while pro-code builders can leverage the Ontology SDK.",
    },
    {
      dot: "#33c2a6",
      label: "Pipelining",
      svg: "/aip-developers/pipelining.svg",
      body: "Leverage AIP’s powerful out-of-the-box transforms for data in any format, at any scale.",
    },
    {
      dot: "#f5a623",
      label: "Connectivity",
      svg: "/aip-developers/connectivity.svg",
      body: "Connect to any system. AIP’s federated data model avoids data duplication while enabling powerful data integration.",
    },
  ] as Slab[],
};

/* ------------------ §3  Run any code, anywhere (scrolly) ----------------- */

export const runAnyCode = {
  heading: "Run any code, in any language, anywhere in AIP",
  steps: [
    {
      index: "01",
      title: "Bring any container into AIP…",
      body: "No need to rewrite code for AIP. Run anything that can be containerized.",
      video: "/aip-developers/automation.mp4",
    },
    {
      index: "02",
      title: "…and run it from Workshop…",
      body: "Call your functions from anywhere within AIP. Configure front-end actions in Workshop that can trigger the functions in your container.",
      video: "/aip-developers/workflow-builder.mp4",
    },
    {
      index: "03",
      title: "…or call it from your custom Ontology SDK.",
      body: "Your functions get their own endpoint in the Ontology SDK, so you can write custom code against them.",
      video: "/aip-developers/aip-osdk.mp4",
    },
  ] as MediaStep[],
  cards: [
    {
      title: "INTEGRATE CODE IN ANY LANGUAGE",
      body: "No need to rewrite code for AIP. Run anything that can be containerized. Bring a Docker image and use it throughout AIP.",
    },
    {
      title: "DON'T WORRY ABOUT COMPUTE",
      body: "AIP ensures higher availability by scaling the number of available replicas up or down based on current and historic load.",
    },
    {
      title: "CONNECT TO ANYTHING IN OR OUT OF AIP",
      body: "Write custom logic leveraging AIP products, like reading and writing data or media sets, or connecting to external systems.",
    },
  ] as FeatureCard[],
};

/* ------------------- §4  Focus on alpha, not infra (tabs) ---------------- */

export const focusAlpha = {
  id: "alpha-not-infra",
  heading: "Focus on alpha, not infra",
  subcopy:
    "Never think about production infrastructure again. From scaling to security, AIP handles your infra, so you can focus on value for your customers.",
  tabs: [
    { id: "ai-first", label: "AI-first", index: "01" },
    { id: "ontology", label: "Ontology", index: "02" },
    { id: "media", label: "Media", index: "03" },
    { id: "scaling", label: "Scaling", index: "04" },
    { id: "connectivity", label: "Connectivity", index: "05" },
  ],
  // Active-tab panel (AI-first) — matches the reference default state.
  panel: {
    title: "The AI platform that takes you from prototype to production.",
    body: "Prototype, build, and deploy your AI-enabled app in hours.",
    video: "/aip-developers/aipnow-product.mp4",
  },
  aiCards: [
    {
      title: "The IDE for LLMs",
      body: "Launch your AI app with an LLM function-builder, high-fidelity debugging, and a powerful evals suite.",
    },
    {
      title: "Power workflows with any model",
      body: "Use the Language Model Service to choose from popular models or integrate any model of your own.",
    },
    {
      title: "The Ontology enables AI",
      body: "The Ontology makes your data easier for LLMs to understand and can help minimize hallucinating.",
    },
    {
      title: "Integrate AI at every level",
      body: "AIP supports LLM integration in your pipeline transforms, functions, applications, chats, and more.",
    },
  ] as FeatureCard[],
  cards: [
    {
      title: "SENSIBLE AND POWERFUL DEFAULTS",
      body: "AIP’s default infrastructure has been stress-tested by some of the largest enterprises and governments in the world. Only configure what you care about, only when you need to.",
    },
    {
      title: "BUILD COMPLEX PRODUCTS QUICKLY",
      body: "AIP closes the seams between services that frequently break in complex stacks, saving countless hours that would otherwise block shipping new product.",
    },
  ] as FeatureCard[],
};

/* ----------------------- §5  Rapid Deploying (scrolly) ------------------- */

export const rapidDeploy = {
  id: "rapid-deploying",
  heading: "Rapid Deploying",
  subcopy: "Deploy to prod faster than your competition can build a prototype.",
  steps: [
    {
      index: "01",
      title: "Build quickly with AIP’s app builder",
      body: "Use Workshop to build and deploy production applications faster than your competition can design mocks.",
      video: "/aip-developers/workflow-builder.mp4",
    },
    {
      index: "02",
      title: "Easily maintainable pipelines",
      body: "Use Pipeline Builder to build and deploy production pipelines without writing a line of code.",
      video: "/aip-developers/automation.mp4",
    },
    {
      index: "03",
      title: "Build and test powerful LLM functions",
      body: "Use AIP Logic to test and deploy AI-enabled functions in minutes.",
      video: "/aip-developers/aip-osdk.mp4",
    },
  ] as MediaStep[],
};

/* --------------------------- §6  Closing statement ----------------------- */

export const closing = {
  heading: "We built AIP for ourselves / And it is now available to every developer.",
  paragraphs: [
    "We build complex applications in the field, from factory floors to the front lines.",
    "We needed a tool to handle connectivity, scaling, and security – so we could focus on the mission.",
  ],
  // Emphasis line rendered with highlighted fragments.
  emphasis: {
    before: "AIP enables us to go from ",
    a: "zero to prototype",
    mid: " in minutes and ",
    b: "prototype to production",
    after: " in hours.",
  },
  tagline: "It is the most powerful developer platform in the world.",
};

/* ------------------------------ §7  Final CTA ---------------------------- */

export const finalCTA = {
  id: "sign-up",
  heading: "Sign up for AIP",
  subcopy: "Build and deploy your first app today.",
  href: "#",
};
