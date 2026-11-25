/**
 * "Our Software" offerings content.
 *
 * NOTE: Placeholder content reproduced verbatim from Palantir's homepage
 * "Our Software" section — names, taglines, links, and video previews all
 * point at palantir.com / its CDN. Swap these for original Jicate offerings
 * before launch.
 *
 * Video normalization: the reference serves previews as site-relative
 * `/assets/{spaceId}/…/*.mov` paths (some already `?format=mp4`). We use the
 * absolute `https://www.palantir.com/...` form and force `?format=mp4` on all
 * five so they decode in browsers that won't play raw QuickTime `.mov`.
 */
import type { Offering } from "@/types";

export const ourSoftwareHeading = "Our Software";

export const offerings: Offering[] = [
  {
    index: "/0.1",
    name: "Jicate AI Platform",
    tagline: "Automate operations, from the factory floor to the front lines",
    href: "/aip",
  },
  {
    index: "/0.2",
    name: "Jicate Data Platform",
    tagline:
      "Build and manage Ontology-powered software, with a complete developer platform",
    href: "/foundry",
  },
  {
    index: "/0.3",
    name: "Business Data Model",
    tagline: "The central system for orchestrating decisions across Human+AI teams",
    href: "/ontology",
  },
  {
    index: "/0.4",
    name: "Jicate Deployment Service",
    tagline:
      "Autonomously deploy, monitor, and manage software across any environment",
    href: "/apollo",
  },
];
