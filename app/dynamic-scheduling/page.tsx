import type { Metadata } from "next";

import {
  DsHero,
  SpotlightVideo,
  KeyFeatures,
  Spotlight,
  HowItWorks,
  ExampleIndustries,
  ExampleUseCases,
  GetInTouch,
} from "@/components/dynamic-scheduling";

export const metadata: Metadata = {
  title: "Foundry Dynamic Scheduling",
  description:
    "Translate your real-world complexity into real-time adaptation. All while planning for the future.",
};

export default function DynamicSchedulingPage() {
  return (
    <main className="flex-1">
      <DsHero />
      <SpotlightVideo />
      <KeyFeatures />
      <Spotlight />
      <HowItWorks />
      <ExampleIndustries />
      <ExampleUseCases />
      <GetInTouch />
      {/* The shared site Footer renders from the root layout. */}
    </main>
  );
}
