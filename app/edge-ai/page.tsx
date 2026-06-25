import type { Metadata } from "next";

import {
  SubNav,
  Hero,
  GenerationalShift,
  OperatingSuperiority,
  UseCases,
  WhitepaperForm,
} from "@/components/edge-ai";

export const metadata: Metadata = {
  title: "Edge AI",
  description: "Unparalleled technology. Pushed to the edge.",
};

export default function EdgeAiPage() {
  return (
    <main className="flex-1 bg-canvas">
      <SubNav />
      <Hero />
      <GenerationalShift />
      <OperatingSuperiority />
      <UseCases />
      <WhitepaperForm />
      {/* The shared site Footer renders from the root layout. */}
    </main>
  );
}
