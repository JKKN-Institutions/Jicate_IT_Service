import type { Metadata } from "next";

import {
  AmHero,
  AboutWork,
  Offerings,
  Impact,
  DefineFuture,
} from "@/components/automotive-mobility";

export const metadata: Metadata = {
  title: "Automotive & Mobility",
  description: "Mobility is on the cusp of total transformation. Jicate and its customers are leading the charge.",
};

export default function AutomotiveMobilityPage() {
  return (
    <main className="flex-1">
      <AmHero />
      <AboutWork />
      <Offerings />
      <Impact />
      <DefineFuture />
      {/* The shared site Footer renders from the root layout. */}
    </main>
  );
}
