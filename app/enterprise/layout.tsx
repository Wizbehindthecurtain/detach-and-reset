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
  title: { absolute: "Removal and Re-Install — An operating brief for PE-backed roofing platforms" },
  description:
    "Infrastructure-grade execution for solar removal & re-install at portfolio scale. Florida and 14 other states. Manufacturer-aligned. Fully insured.",
  openGraph: {
    title: "Removal and Re-Install — An operating brief",
    description:
      "Solar removal & re-install, baked into the operating playbook of PE-backed roofing platforms.",
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
