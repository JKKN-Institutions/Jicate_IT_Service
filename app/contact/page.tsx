import type { Metadata } from "next";

import { Hero, WaysToReach, OfficeLocations } from "@/components/contact";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Ways to reach Jicate IT Service and our office locations.",
};

export default function ContactPage() {
  return (
    <main className="flex-1 bg-canvas">
      <Hero />
      <WaysToReach />
      <OfficeLocations />
      {/* The shared site Footer renders from the root layout. */}
    </main>
  );
}
