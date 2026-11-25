import type { Metadata } from "next";

import { Hero, Objectives, Program, Resources } from "@/components/information-security";

export const metadata: Metadata = {
  title: "Information Security",
  description:
    "InfoSec at Jicate — our Information Security Program and open source contribution.",
};

export default function InformationSecurityPage() {
  return (
    <main className="flex-1 bg-canvas">
      <Hero />
      <Objectives />
      <Program />
      <Resources />
      {/* The shared site Footer renders from the root layout. */}
    </main>
  );
}
