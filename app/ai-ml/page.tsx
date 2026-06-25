import type { Metadata } from "next";

import {
  AiMlHero,
  StatementIntro,
  BeyondChat,
  FeatureRows,
  IndustriesBand,
  CtaCards,
  ClosingBand,
} from "@/components/ai-ml";

export const metadata: Metadata = {
  title: "AI / ML Platform",
  description:
    "Jicate's AI & ML platform — build, evaluate, and operate production-grade AI workflows end to end.",
};

export default function AiMlPage() {
  return (
    <main className="flex-1">
      <AiMlHero />
      <StatementIntro />
      <BeyondChat />
      <FeatureRows />
      <IndustriesBand />
      <CtaCards />
      <ClosingBand />
    </main>
  );
}
