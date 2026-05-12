// Composes page sections in order. Sections fill in across Slices 1-8.

import { Header } from "@/components/shared/Header";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyRoofers } from "@/components/sections/WhyRoofers";
import { BrandsServiced } from "@/components/sections/BrandsServiced";
import { RecentJobs } from "@/components/sections/RecentJobs";
import { FAQ } from "@/components/sections/FAQ";
import { BookCallForm } from "@/components/sections/BookCallForm";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HowItWorks />
      <WhyRoofers />
      <BrandsServiced />
      <RecentJobs />
      <FAQ />
      <BookCallForm />
      <PartnersSection />
      <Footer />
    </>
  );
}
