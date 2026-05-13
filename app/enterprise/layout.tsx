import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant-src",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit-src",
  weight: ["200", "300", "400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: { absolute: "Detach and Reset — An operating brief for PE-backed roofing platforms" },
  description:
    "Infrastructure-grade execution for solar detach & reset at portfolio scale. Florida and 14 other states. Manufacturer-aligned. Fully insured.",
  openGraph: {
    title: "Detach and Reset — An operating brief",
    description:
      "Solar detach & reset, baked into the operating playbook of PE-backed roofing platforms.",
  },
};

export default function EnterpriseLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className={`${cormorant.variable} ${outfit.variable} font-outfit bg-paper text-deep-ink min-h-screen`}
    >
      {children}
    </div>
  );
}
