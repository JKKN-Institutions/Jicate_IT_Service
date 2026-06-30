import type { Metadata } from "next";

import {
  Hero,
  Intro,
  DesignCards,
  WhereWeWork,
  ImpactStudies,
  Partnerships,
  GetStartedForm,
} from "@/components/telecommunications";

export const metadata: Metadata = {
  title: "Telecommunications",
  description: "Making data and analytics operational — from Circuit to Customer.",
};

export default function TelecommunicationsPage() {
  return (
    <main className="flex-1 bg-canvas">
      <Hero />
      <Intro />
      <DesignCards />
      <WhereWeWork />
      <ImpactStudies />
      <Partnerships />
      <GetStartedForm />
      {/* The shared site Footer renders from the root layout. */}
    </main>
  );
}
