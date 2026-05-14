// /enterprise — corporate landing page for PE-backed roofing platforms.
// Chunk D is polish (OG image, sitemap update).

import { EnterpriseHero } from "@/components/enterprise/EnterpriseHero";
import { MarketThesis } from "@/components/enterprise/MarketThesis";
import { TheFriction } from "@/components/enterprise/TheFriction";
import { OperatingModel } from "@/components/enterprise/OperatingModel";
import { TrackRecord } from "@/components/enterprise/TrackRecord";
import { TrinityCallout } from "@/components/enterprise/TrinityCallout";
import { CapabilitySpread } from "@/components/enterprise/CapabilitySpread";
import { CertificationsEcosystem } from "@/components/enterprise/CertificationsEcosystem";
import { Leadership } from "@/components/enterprise/Leadership";
import { PortfolioReview } from "@/components/enterprise/PortfolioReview";
import { EnterpriseFooter } from "@/components/enterprise/EnterpriseFooter";

export default function EnterprisePage() {
  return (
    <main>
      <EnterpriseHero />
      <MarketThesis />
      <TheFriction />
      <OperatingModel />
      <TrackRecord />
      <TrinityCallout />
      <CapabilitySpread />
      <CertificationsEcosystem />
      <Leadership />
      <PortfolioReview />
      <EnterpriseFooter />
    </main>
  );
}
