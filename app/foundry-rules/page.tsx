import type { Metadata } from "next";

import {
  FrHero,
  SpotlightVideo,
  QuoteBand,
  KeyFeatures,
  HowItWorks,
  Applications,
  GetInTouch,
} from "@/components/foundry-rules";

export const metadata: Metadata = {
  title: "Foundry Rules & Real-Time Alerting",
  description:
    "Create object-aware alerts with rules made by your experts. Seamlessly connect alerts to action across your business.",
};

export default function FoundryRulesPage() {
  return (
    <main className="flex-1">
      <FrHero />
      <SpotlightVideo />
      <QuoteBand />
      <KeyFeatures />
      <HowItWorks />
      <Applications />
      <GetInTouch />
      {/* The shared site Footer renders from the root layout. */}
    </main>
  );
}
