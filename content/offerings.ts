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
    name: "AIP",
    tagline: "Automate operations, from the factory floor to the front lines",
    href: "/aip",
    video: "/home/homepage-AIP.mp4",
  },
  {
    index: "/0.2",
    name: "Gotham",
    tagline: "Achieve AI-driven combat superiority, from space to mud",
    href: "/gotham",
    video: "/home/homepage-Gotham.mp4",
  },
  {
    index: "/0.3",
    name: "Foundry",
    tagline:
      "Build and manage Ontology-powered software, with a complete developer platform",
    href: "/foundry",
    video: "/home/homepage-Foundry.mp4",
  },
  {
    index: "/0.4",
    name: "Ontology",
    tagline: "The central system for orchestrating decisions across Human+AI teams",
    href: "/ontology",
    video: "/home/homepage-Ontology.mp4",
  },
  {
    index: "/0.5",
    name: "Apollo",
    tagline:
      "Autonomously deploy, monitor, and manage software across any environment",
    href: "/apollo",
    video: "/home/homepage-Apollo.mp4",
  },
];
