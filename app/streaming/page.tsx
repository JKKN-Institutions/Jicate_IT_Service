import type { Metadata } from "next";

import {
  Hero,
  Statement,
  RealTimeOntology,
  UseCases,
  InAction,
  Whitepaper,
  ContactForm,
} from "@/components/streaming";

export const metadata: Metadata = {
  title: "Streaming",
  description:
    "Use real-time data to drive real-time decisions — with the full context of your organization.",
};

export default function StreamingPage() {
  return (
    <main className="flex-1 bg-canvas">
      <Hero />
      <Statement />
      <RealTimeOntology />
      <UseCases />
      <InAction />
      <Whitepaper />
      <ContactForm />
      {/* The shared site Footer renders from the root layout. */}
    </main>
  );
}
