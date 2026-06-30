import type { Metadata } from "next";

import {
  SubNav,
  Hero,
  About,
  Partners,
  Impact,
  Capabilities,
  ContactForm,
} from "@/components/utilities";

export const metadata: Metadata = {
  title: "Jicate Utility Solutions",
  description: "AI-powered operations for the connected utility of the future.",
};

export default function UtilitiesPage() {
  return (
    <main className="flex-1 bg-canvas">
      <Hero />
      <SubNav />
      <About />
      <Partners />
      <Impact />
      <Capabilities />
      <ContactForm />
      {/* The shared site Footer renders from the root layout. */}
    </main>
  );
}
