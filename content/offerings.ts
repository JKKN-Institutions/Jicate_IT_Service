/** Home page "Our Software" list. */
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
      "Build and manage software powered by the Business Data Model, with a complete developer platform",
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
