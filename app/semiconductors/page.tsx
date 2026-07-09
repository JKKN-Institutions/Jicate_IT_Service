import type { Metadata } from "next";

import { Hero, AcceleratingRD, DemoForm } from "@/components/semiconductors";

export const metadata: Metadata = {
  title: "Offerings | Semiconductors",
  description:
    "Perform sensitivity analysis and quickly design the next set of experiments to improve chip yield.",
};

export default function SemiconductorsPage() {
  return (
    <main className="flex-1 bg-canvas">
      <Hero />
      <AcceleratingRD />
      <DemoForm />
      {/* The shared site Footer renders from the root layout. */}
    </main>
  );
}
