/**
 * Search index for the site-wide search page (/search).
 *
 * Built from the existing navigation content so it stays in sync with the real
 * pages that ship on this site. Descriptions are original one-liners. The search
 * page filters this list by a case-insensitive substring match on title +
 * description.
 */
import { platformLinks, footerColumns, industryLinks, serviceLinks } from "./navigation";

export interface SearchItem {
  title: string;
  href: string;
  description: string;
  category: string;
}

export interface PopularSearch {
  label: string;
  query: string;
}

/** Quick-pick queries shown under the input (mirrors the reference). */
export const popularSearches: PopularSearch[] = [
  { label: "Foundry", query: "Foundry" },
  { label: "Gotham", query: "Gotham" },
  { label: "Apollo", query: "Apollo" },
  { label: "Ontology", query: "Ontology" },
  { label: "Artificial Intelligence (AI)", query: "AI" },
];

const platformTaglines: Record<string, string> = {
  AIP: "Automate operations across your enterprise, from the factory floor to the front lines.",
  Foundry: "Build and manage Ontology-powered software with a complete developer platform.",
  Gotham: "Achieve AI-driven decision advantage across your most critical missions.",
  Ontology: "The central system for orchestrating decisions across Human+AI teams.",
  Apollo: "Autonomously deploy, monitor, and manage software across any environment.",
};

const linksOf = (heading: string) =>
  footerColumns.find((c) => c.heading === heading)?.links ?? [];

const platforms: SearchItem[] = platformLinks.map((l) => ({
  title: l.label,
  href: l.href,
  description: platformTaglines[l.label] ?? `Explore ${l.label} on the Jicate platform.`,
  category: "Platform",
}));

const offerings: SearchItem[] = linksOf("OFFERINGS").map((l) => ({
  title: l.label,
  href: l.href,
  description: `${l.label} — an industry solution powered by the Jicate platform.`,
  category: "Offering",
}));

const capabilities: SearchItem[] = linksOf("CAPABILITIES").map((l) => ({
  title: l.label,
  href: l.href,
  description: `${l.label} — a capability of the Jicate platform.`,
  category: "Capability",
}));

const services: SearchItem[] = serviceLinks.map((l) => ({
  title: l.label,
  href: l.href,
  description: `${l.label} — a core Jicate IT service line.`,
  category: "Service",
}));

const industries: SearchItem[] = industryLinks.map((l) => ({
  title: l.label,
  href: l.href,
  description: `${l.label} — how Jicate delivers outcomes for this industry.`,
  category: "Industry",
}));

export const searchItems: SearchItem[] = [
  ...platforms,
  ...offerings,
  ...capabilities,
  ...services,
  ...industries,
];

/** Case-insensitive substring search over title + description. */
export function runSearch(query: string): SearchItem[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return searchItems.filter(
    (item) =>
      item.title.toLowerCase().includes(q) || item.description.toLowerCase().includes(q),
  );
}
