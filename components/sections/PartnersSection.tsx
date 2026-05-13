// "Working with" — eight authorized-partner badges on a navy field. Light
// (bone) tiles inside a 4-col × 2-row grid; full-color brand logos display
// naturally without CSS filter tricks. Corner brackets shift to safety-orange
// on hover; category mono code sits in safety-orange top-left. When a partner
// is added later, drop the licensed SVG/PNG/WebP into /public/partners/{slug}.x
// and set `logoFile` to the filename. If a logo is unavailable, leave
// `logoFile: null` and the partner renders as a navy display-font wordmark.

import Image from "next/image";
import { CornerBrackets } from "@/components/shared/CornerBrackets";

type Partner = {
  name: string;
  category: string;
  /** Filename in /public/partners/. Null falls back to a text wordmark. */
  logoFile: string | null;
};

const PARTNERS: ReadonlyArray<Partner> = [
  { name: "Trinity Solar", category: "Installer", logoFile: "trinity-solar.jpg" },
  { name: "ABC Supply", category: "Distributor", logoFile: "abc-supply.svg" },
  { name: "SRS Distribution", category: "Distributor", logoFile: "srs-distribution.webp" },
  { name: "Beacon", category: "Distributor", logoFile: "beacon.png" },
  { name: "Enphase", category: "Microinverter", logoFile: "enphase.png" },
  { name: "Tesla", category: "ESS", logoFile: "tesla.png" },
  { name: "GAF", category: "Roofing", logoFile: "gaf.svg" },
  { name: "GAF Energy", category: "Solar Shingle", logoFile: "gaf-energy.png" },
];

export function PartnersSection() {
  return (
    <section
      id="partners"
      className="relative bg-navy text-bone overflow-hidden"
    >
      <div aria-hidden className="absolute inset-0 grid-bg opacity-40" />
      <span aria-hidden className="grain" />

      <div
        aria-hidden
        className="absolute bottom-0 left-0 h-px w-2/3 bg-gradient-to-r from-safety/40 via-safety/10 to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
        <div className="flex flex-col gap-4 max-w-3xl">
          <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.3em] text-safety">
            ▌ 08 / Partners
          </span>
          <h2 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-bone uppercase tracking-tight leading-[0.9]">
            Working with.
          </h2>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-bone/45 mt-1">
            Eight names we&apos;re proud to see on a job sheet.
          </p>
        </div>

        <ul className="mt-14 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
          {PARTNERS.map(({ name, category, logoFile }) => (
            <li
              key={name}
              className="group relative bg-bone hover:bg-white transition-colors"
            >
              <div className="relative aspect-[5/3] flex items-center justify-center px-5 sm:px-7 py-6">
                <CornerBrackets
                  size={3}
                  colorClassName="border-ink/20 group-hover:border-safety/70 transition-colors"
                />

                <span className="absolute top-3 left-3 font-mono text-[9px] uppercase tracking-[0.3em] text-safety z-10">
                  {category}
                </span>

                {logoFile ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={`/partners/${logoFile}`}
                      alt={`${name} — ${category} partner`}
                      fill
                      sizes="(min-width: 1024px) 22vw, 45vw"
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <span className="font-display font-bold text-2xl sm:text-3xl lg:text-3xl xl:text-4xl text-navy uppercase tracking-tight leading-none text-center">
                    {name}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
