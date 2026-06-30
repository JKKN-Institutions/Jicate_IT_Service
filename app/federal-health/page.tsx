import type { Metadata } from "next";

import {
  Hero,
  Impact,
  Solutions,
  Capabilities,
  Resources,
  News,
  ContactForm,
} from "@/components/federal-health";

export const metadata: Metadata = {
  title: "Federal Health",
  description: "Transforming the work of federal health agencies by enabling connectivity across the health data ecosystem.",
};

export default function FederalHealthPage() {
  return (
    <main className="flex-1">
      <Hero />
      <Impact />
      <Solutions />
      <Capabilities />
      <Resources />
      <News />
      <ContactForm />
      {/* The shared site Footer renders from the root layout. */}
    </main>
  );
}
