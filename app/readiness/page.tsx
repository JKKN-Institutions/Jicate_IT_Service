import type { Metadata } from "next";

import { Hero, AreYouReady, ReadinessModule, Reseller, GetReady } from "@/components/readiness";
import { modules } from "@/content/readiness";

export const metadata: Metadata = {
  title: "Readiness",
  description:
    "Jicate can help ensure organizational readiness with a full picture of asset, personnel, and financial operations.",
};

export default function ReadinessPage() {
  return (
    <main className="flex-1 bg-canvas">
      <Hero />
      <AreYouReady />
      {modules.map((m) => (
        <ReadinessModule key={m.no} module={m} />
      ))}
      <Reseller />
      <GetReady />
      {/* The shared site Footer renders from the root layout. */}
    </main>
  );
}
