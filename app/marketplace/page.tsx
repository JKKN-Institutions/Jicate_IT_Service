import type { Metadata } from "next";

import {
  MkHero,
  SpotlightVideo,
  KeyFeatures,
  HowItWorks,
  IndustriesUseCases,
  GetInTouch,
} from "@/components/marketplace";

export const metadata: Metadata = {
  title: "Foundry Marketplace",
  description: "Build and launch data products as SaaS.",
};

export default function MarketplacePage() {
  return (
    <main className="flex-1">
      <MkHero />
      <SpotlightVideo />
      <KeyFeatures />
      <HowItWorks />
      <IndustriesUseCases />
      <GetInTouch />
      {/* The shared site Footer renders from the root layout. */}
    </main>
  );
}
