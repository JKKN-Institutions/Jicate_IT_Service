import type { Metadata } from "next";

import { Hero, About, Capabilities, Technology, InAction, ContactForm } from "@/components/retail";

export const metadata: Metadata = {
  title: "Jicate for Retail",
  description: "AI-powered operational decision making across the retail value chain.",
};

export default function RetailPage() {
  return (
    <main className="flex-1">
      <Hero />
      <About />
      <Capabilities />
      <Technology />
      <InAction />
      <ContactForm />
      {/* The shared site Footer renders from the root layout. */}
    </main>
  );
}
