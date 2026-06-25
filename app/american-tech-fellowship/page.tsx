import type { Metadata } from "next";

import {
  AtfHero,
  Renaissance,
  Fellowship,
  ApplyBand,
  MeetFellows,
  FellowsAccordion,
  HiringBand,
  PressMedia,
} from "@/components/american-tech-fellowship";

export const metadata: Metadata = {
  title: "The American Tech Fellowship",
  description: "A high-intensity training program connecting builders with the skills and employers they need.",
};

export default function AmericanTechFellowshipPage() {
  return (
    <main className="flex-1">
      <AtfHero />
      <Renaissance />
      <Fellowship />
      <ApplyBand />
      <MeetFellows />
      <FellowsAccordion />
      <HiringBand />
      <PressMedia />
      {/* The shared site Footer renders from the root layout. */}
    </main>
  );
}
