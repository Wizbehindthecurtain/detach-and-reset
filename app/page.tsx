// Composes page sections in order. Sections fill in across Slices 1-8.

import Script from "next/script";
import { Header } from "@/components/shared/Header";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyRoofers } from "@/components/sections/WhyRoofers";
import { BrandsServiced } from "@/components/sections/BrandsServiced";
import { RecentJobs } from "@/components/sections/RecentJobs";
import { FAQ } from "@/components/sections/FAQ";
import { BookCallSection } from "@/components/sections/BookCallSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Script
        id="vtag-ai-js"
        src="https://r2.leadsy.ai/tag.js"
        data-pid="1kJvlZRdMNmX8AYds"
        data-version="062024"
        strategy="afterInteractive"
      />
      <Header />
      <Hero />
      <HowItWorks />
      <WhyRoofers />
      <BrandsServiced />
      <RecentJobs />
      <FAQ />
      <BookCallSection />
      <PartnersSection />
      <Footer />
    </>
  );
}
