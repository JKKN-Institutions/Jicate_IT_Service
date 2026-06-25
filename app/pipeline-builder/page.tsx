import type { Metadata } from "next";

import {
  PbHero,
  VideoBand,
  DataDemocratized,
  HowItWorks,
  EngineeredGrid,
  GetStarted,
} from "@/components/pipeline-builder";

export const metadata: Metadata = {
  title: "Next-Generation Pipeline Builder",
  description:
    "Build production-grade data pipelines with integrated security, data quality, and governed collaboration. Coding skills not required.",
};

export default function PipelineBuilderPage() {
  return (
    <main className="flex-1">
      <PbHero />
      <VideoBand />
      <DataDemocratized />
      <HowItWorks />
      <EngineeredGrid />
      <GetStarted />
      {/* The shared site Footer renders from the root layout. */}
    </main>
  );
}
