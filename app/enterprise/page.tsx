// /enterprise — corporate landing page for PE-backed roofing platforms.
// Sections VII–XI land in Chunk C; Chunk D is polish.

import { EnterpriseHero } from "@/components/enterprise/EnterpriseHero";
import { MarketThesis } from "@/components/enterprise/MarketThesis";
import { TheFriction } from "@/components/enterprise/TheFriction";
import { OperatingModel } from "@/components/enterprise/OperatingModel";
import { TrackRecord } from "@/components/enterprise/TrackRecord";
import { TrinityCallout } from "@/components/enterprise/TrinityCallout";

export default function EnterprisePage() {
  return (
    <main>
      <EnterpriseHero />
      <MarketThesis />
      <TheFriction />
      <OperatingModel />
      <TrackRecord />
      <TrinityCallout />
    </main>
  );
}
