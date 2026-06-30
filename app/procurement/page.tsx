import type { Metadata } from "next";

import {
  Hero,
  OperatingSystem,
  Transformation,
  Partners,
  Operationalizing,
  DemoForm,
} from "@/components/procurement";

export const metadata: Metadata = {
  title: "Procurement",
  description: "AI Platforms delivering cost savings and increasing efficiencies at procurement departments.",
};

export default function ProcurementPage() {
  return (
    <main className="flex-1 bg-canvas">
      <Hero />
      <OperatingSystem />
      <Transformation />
      <Partners />
      <Operationalizing />
      <DemoForm />
      {/* The shared site Footer renders from the root layout. */}
    </main>
  );
}
