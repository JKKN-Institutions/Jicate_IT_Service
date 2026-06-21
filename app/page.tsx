import {
  Hero,
  ProductCarousel,
  StatementBand,
  OurSoftware,
  ManifestoBand,
  Testimonials,
  SplitCTA,
} from "@/components/home";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <ProductCarousel />
      <StatementBand />
      <OurSoftware />
      <ManifestoBand />
      <Testimonials />
      <SplitCTA />
    </main>
  );
}
