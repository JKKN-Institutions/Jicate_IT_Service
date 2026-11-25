import type { Metadata } from "next";

import {
  SubNav,
  Hero,
  Work,
  HowItWorks,
  Differentiators,
  ContactForm,
} from "@/components/jicate-for-rail";

export const metadata: Metadata = {
  title: "Jicate for Rail",
  description: "A connected operating picture across commercial, transportation, track engineering, and mechanical functions.",
};

export default function JicateForRailPage() {
  return (
    <main className="flex-1">
      <Hero />
      <SubNav />
      <Work />
      <HowItWorks />
      <Differentiators />
      <ContactForm />
      {/* The shared site Footer renders from the root layout. */}
    </main>
  );
}
