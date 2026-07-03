/**
 * Apollo platform page content for Jicate IT Service (`/apollo`).
 *
 * Layout/structure design-clones the reference Apollo platform page. Short
 * functional labels (section titles, feature names, environment names, nav
 * labels) mirror the reference; longer copy is neutral placeholder — swap
 * before launch. Assets live under `/public/apollo` (scraped from reference).
 */
import type { ArrowKind } from "@/types";

type Link = { label: string; href: string; arrow?: ArrowKind; external?: boolean };

/* — Hero (light, two-column: text left, image right) ------------------- */

export const hero = {
  title: "Apollo",
  heading: "Deploy Software\nBeyond Limits.",
  cta: { label: "Request a demo", href: "#request-a-demo" } as Link,
  image: "/apollo/apollo-hero.jpg",
  imageAlt: "Apollo",
};

/* — Sticky in-page sub-nav --------------------------------------------- */

export const subNav: Link[] = [
  { label: "Product", href: "#product" },
  { label: "Explore Solutions", href: "#explore-solutions" },
  { label: "Content Hub", href: "#content-hub" },
  { label: "Developer Docs", href: "#developer-docs" },
];

/* — Intro paragraphs --------------------------------------------------- */

export const intro = {
  paragraphs: [
    "With today’s customer, security, and regulatory demands, software deployment is becoming more complex.",
    "Apollo brings years of R&D across advanced deployments into an intelligent platform that is flexible and extensible to you — and your customers’ — particular needs.",
  ],
};

/* — "Apollo allows you to:" 4-feature grid ----------------------------- */

export const features = {
  heading: "Apollo allows you to:",
  items: [
    {
      icon: "/apollo/no-code.png",
      iconAlt: "Icon of desktop computer with checkmark",
      title: "Understand your software deployment landscape within hours",
      link: { label: "Auto-discovery & Software Control Center", href: "#" } as Link,
    },
    {
      icon: "/apollo/decision-loop.png",
      iconAlt: "Icon of arrow in continuous loop",
      title: "Reliably deploy your software and manage releases",
      link: { label: "Continuous Deployment", href: "#" } as Link,
    },
    {
      icon: "/apollo/rule-engine.png",
      iconAlt: "Icon of checklist",
      title: "Efficiently support your software",
      link: { label: "CD + Day 2 Ops", href: "#" } as Link,
    },
    {
      icon: "/apollo/data-protection.png",
      iconAlt: "Icon of shield for protection",
      title: "Fortify compliance by making security the default",
      link: { label: "SecOps", href: "#" } as Link,
    },
  ],
  whitepaper: { label: "Download the Whitepaper", href: "#" } as Link,
};

/* — DevOps statement + cube image -------------------------------------- */

export const devops = {
  heading: "Your DevOps strategy can make or break your ability to grow →",
  image: "/apollo/apollo-cube.jpg",
  imageAlt: "Apollo Cube",
};

/* — Explore Apollo Solutions (list) ------------------------------------ */

export const exploreSolutions = {
  heading: "Explore Apollo Solutions",
  // Row-wise order fills the 2-col grid: L/R, L/R, L/R (matches reference).
  items: [
    "Multi-cloud, Multi-prem, Private SaaS, and Single Tenant Deployment",
    "Continuous Security & Compliance",
    "Airgapped + Highside SaaS",
    "Digital Transformation and DORA Metrics",
    "Microservice Orchestration",
    "Apollo for Edge",
  ],
  watchDemo: { label: "Watch the Demo", href: "#" } as Link,
};

/* — Federal Government CTA --------------------------------------------- */

export const federal = {
  heading: "Looking to Deploy Software to the Federal Government?",
  link: { label: "FedStart", href: "/fedstart", arrow: "drillin" as ArrowKind },
};

/* — "From one to many environments" carousel --------------------------- */

export const environments = {
  heading: "From one to many environments",
  cards: [
    { label: "Amazon Web Services", img: "/apollo/env-aws.svg" },
    { label: "AWS Outposts", img: "/apollo/env-aws-outposts.svg" },
    { label: "Microsoft Azure", img: "/apollo/env-azure.svg" },
    { label: "Google Cloud Platform", img: "/apollo/env-gcp.svg" },
    { label: "Private Cloud", img: "/apollo/env-private-cloud.svg" },
    { label: "On-Premises", img: "/apollo/env-on-prem.svg" },
    { label: "Hybrid Cloud", img: "/apollo/env-hybrid.svg" },
    { label: "Air Gapped Networks", img: "/apollo/env-air-gapped.svg" },
    { label: "Ruggedized Environments", img: "/apollo/env-ruggedized.svg" },
  ],
};

/* — Request a Demo form heading ---------------------------------------- */

export const demoForm = { title: "Request a Demo" };
