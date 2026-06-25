import type { Metadata } from "next";

import {
  DiHero,
  VideoBand,
  Supercharged,
  FutureIntro,
  FeatureBand,
  ImpactStudy,
  ExpertForm,
} from "@/components/data-integration";
import { featureBands } from "@/content/data-integration";

export const metadata: Metadata = {
  title: "Foundry Data Integration",
  description:
    "Accelerate pipeline development and management with built-in automation. Deliver the full spectrum of use cases atop a trusted foundation.",
};

export default function DataIntegrationPage() {
  return (
    <main className="flex-1">
      <DiHero />
      <VideoBand />
      <Supercharged />
      <FutureIntro />
      {featureBands.map((band, i) => (
        <FeatureBand key={band.id} band={band} imageSide={i % 2 === 0 ? "left" : "right"} />
      ))}
      <ImpactStudy />
      <ExpertForm />
      {/* The shared site Footer renders from the root layout. */}
    </main>
  );
}
