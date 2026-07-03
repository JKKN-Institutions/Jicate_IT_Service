import type { Metadata } from "next";

import { SiteContactForm } from "@/components/shared/SiteContactForm";
import {
  Hero,
  Intro,
  Features,
  DevOpsStatement,
  ExploreSolutions,
  FederalCta,
  Environments,
} from "@/components/apollo";
import { demoForm } from "@/content/apollo";

export const metadata: Metadata = {
  title: "Apollo",
  description:
    "Apollo — deploy software beyond limits. Continuous delivery across every environment: cloud, on-prem, hybrid, air-gapped, and more.",
};

export default function ApolloPage() {
  return (
    <main className="flex-1">
      <Hero />
      <Intro />
      <Features />
      <DevOpsStatement />
      <ExploreSolutions />
      <FederalCta />
      <Environments />
      <SiteContactForm title={demoForm.title} id="request-a-demo" />
    </main>
  );
}
