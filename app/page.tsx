// Composes page sections in order. Sections fill in across Slices 1-8.

import { Header } from "@/components/shared/Header";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
    </>
  );
}
