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
    href: "https://www.palantir.com/platforms/aip/",
    video:
      "https://www.palantir.com/assets/xrfr7uokpv1b/1ZAGlJWcYtVmMckdqFKUNW/7ff05eda0bd3471eba68c522caa32872/homepage_-_AIP.mov?format=mp4",
  },
  {
    index: "/0.2",
    name: "Gotham",
    tagline: "Achieve AI-driven combat superiority, from space to mud",
    href: "https://www.palantir.com/platforms/gotham/",
    video:
      "https://www.palantir.com/assets/xrfr7uokpv1b/6pvakzOU4AhfZjrgbrRXr9/ed5bb90509c20aa199058c74b3d7efd0/homepage_-_Gotham.mov?format=mp4",
  },
  {
    index: "/0.3",
    name: "Foundry",
    tagline:
      "Build and manage Ontology-powered software, with a complete developer platform",
    href: "https://www.palantir.com/platforms/foundry/",
    video:
      "https://www.palantir.com/assets/xrfr7uokpv1b/2yuGstJPCnqZBe7DOcOVNx/85275c8cb70fef128d8eda7af4900690/homepage_-_Foundry.mov?format=mp4",
  },
  {
    index: "/0.4",
    name: "Ontology",
    tagline: "The central system for orchestrating decisions across Human+AI teams",
    href: "https://www.palantir.com/platforms/ontology/",
    video:
      "https://www.palantir.com/assets/xrfr7uokpv1b/727o8CbUwqHs2hTt02hIiO/cf08155d0843b07849af7d85c8e1aac0/Ontology.mov?format=mp4",
  },
  {
    index: "/0.5",
    name: "Apollo",
    tagline:
      "Autonomously deploy, monitor, and manage software across any environment",
    href: "https://www.palantir.com/platforms/apollo/",
    video:
      "https://www.palantir.com/assets/xrfr7uokpv1b/4hKQ7uw6vsjxrlntoFav6k/d9ea76812927c7b04539acc5463d3300/homepage_-_Apollo.mov?format=mp4",
  },
];
