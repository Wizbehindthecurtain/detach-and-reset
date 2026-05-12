// Composes page sections in order. Sections fill in across Slices 1-8.

import { Header } from "@/components/shared/Header";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyRoofers } from "@/components/sections/WhyRoofers";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HowItWorks />
      <WhyRoofers />
    </>
  );
}
