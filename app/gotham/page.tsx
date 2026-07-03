import type { Metadata } from "next";

import { fullBleed } from "@/content/gotham";
import {
  Hero,
  FullBleed,
  DiscoverBand,
  Capabilities,
  QuoteBand,
  ReadyCTA,
} from "@/components/gotham";

export const metadata: Metadata = {
  title: "Gotham | Jicate",
  description:
    "Gotham — the operating system for global decision making, built for the world's most demanding missions.",
};

export default function GothamPage() {
  return (
    <main className="flex-1" style={{ backgroundColor: "#1e2124" }}>
      <Hero />
      {fullBleed.map((s, i) => (
        <FullBleed key={s.title} title={s.title} video={s.video} clip={s.clip} index={i + 1} />
      ))}
      <DiscoverBand />
      <Capabilities />
      <QuoteBand />
      <ReadyCTA />
      {/* The shared site Footer renders from the root layout. */}
    </main>
  );
}
