import type { Metadata } from "next";

import {
  SubNav,
  Hero,
  BigData,
  Infrastructure,
  Regulatory,
  Empowering,
  BuildForm,
} from "@/components/palantir-for-builders";

export const metadata: Metadata = {
  title: "Jicate for Builders",
  description: "World-class AI software platform now available to startups, small and medium-sized companies.",
};

export default function PalantirForBuildersPage() {
  return (
    <main className="flex-1 bg-canvas">
      <SubNav />
      <Hero />
      <BigData />
      <Infrastructure />
      <Regulatory />
      <Empowering />
      <BuildForm />
      {/* The shared site Footer renders from the root layout. */}
    </main>
  );
}
