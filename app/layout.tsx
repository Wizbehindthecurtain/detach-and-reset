import type { Metadata, Viewport } from "next";
import {
  Big_Shoulders,
  IBM_Plex_Mono,
  IBM_Plex_Sans,
} from "next/font/google";
import "./globals.css";

const plex = IBM_Plex_Sans({
  variable: "--font-plex",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
});

const shoulders = Big_Shoulders({
  variable: "--font-shoulders",
  weight: ["500", "700", "800", "900"],
  subsets: ["latin"],
});

const SITE_URL = "https://removalandreinstall.energy";
const TAGLINE =
  "Florida's solar partner for roofing contractors. We remove, store, and reinstall the panels — you handle the roof.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Removal and Re-Install",
    template: "%s · Removal and Re-Install",
  },
  description: TAGLINE,
  applicationName: "Removal and Re-Install",
  authors: [{ name: "4i Energy Partners", url: "https://4i.energy" }],
  creator: "4i Energy Partners",
  publisher: "Removal and Re-Install",
  keywords: [
    "solar removal and re-install Florida",
    "solar remove and reinstall Florida",
    "solar R&R roofing subcontractor",
    "reroof with solar Florida",
    "Florida roofing contractor solar partner",
    "Enphase Tesla SolarEdge installer Florida",
  ],
  category: "construction",
  alternates: {
    canonical: SITE_URL,
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: false,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Removal and Re-Install",
    title: "Removal and Re-Install — Florida's solar removal & re-install crew for roofers.",
    description: TAGLINE,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Removal and Re-Install — Florida's solar removal & re-install crew for roofers.",
    description: TAGLINE,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0B1E3F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plex.variable} ${plexMono.variable} ${shoulders.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
