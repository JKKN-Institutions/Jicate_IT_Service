import type { Metadata } from "next";

import { Hero, Objectives, Program, Resources } from "@/components/information-security";

export const metadata: Metadata = {
  title: "Information Security",
  description:
    "InfoSec at Jicate — our Information Security Program, compliance and accreditation, open source contribution, and penetration testing.",
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
