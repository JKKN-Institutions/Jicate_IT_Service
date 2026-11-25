import type { Metadata } from "next";

import {
  Hero,
  OperatingSystem,
  Operationalizing,
  ContactForm,
} from "@/components/jicate-for-hospitals";

export const metadata: Metadata = {
  title: "Jicate for Hospitals",
  description: "AI platforms delivering speed and impact to healthcare's frontlines.",
};

export default function JicateForHospitalsPage() {
  return (
    <main className="flex-1">
      <Hero />
      <OperatingSystem />
      <Operationalizing />
      <ContactForm />
      {/* The shared site Footer renders from the root layout. */}
    </main>
  );
}
