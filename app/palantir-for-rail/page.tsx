import type { Metadata } from "next";

import {
  SubNav,
  Hero,
  Partners,
  Work,
  Impact,
  HowItWorks,
  Spotlight,
  Differentiators,
  ContactForm,
} from "@/components/palantir-for-rail";

export const metadata: Metadata = {
  title: "Jicate for Rail",
  description: "Jicate software is powering workflows for some of the largest rail companies in the world.",
};

export default function PalantirForRailPage() {
  return (
    <main className="flex-1">
      <Hero />
      <SubNav />
      <Partners />
      <Work />
      <Impact />
      <HowItWorks />
      <Spotlight />
      <Differentiators />
      <ContactForm />
      {/* The shared site Footer renders from the root layout. */}
    </main>
  );
}
