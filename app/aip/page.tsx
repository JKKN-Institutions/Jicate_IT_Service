import type { Metadata } from "next";

import {
  AiMlHero,
  StatementIntro,
  BeyondChat,
  FeatureRows,
  IndustriesBand,
  CtaCards,
} from "@/components/aip";

export const metadata: Metadata = {
  title: "Jicate AI Platform — Artificial Intelligence Platform",
  description:
    "Explore Jicate AI Platform — integrate AI into operational decision making. Build AI apps, actions, and agents on a single operational platform.",
};

export default function AipPage() {
  return (
    <main className="flex-1">
      <AiMlHero />
      <StatementIntro />
      <BeyondChat />
      <FeatureRows />
      <IndustriesBand />
      <CtaCards />
    </main>
  );
}
