// "Working with" — partner roster framed as an industry-credentialing badge
// grid. Eight tiles, 4-col on lg / 2-col on sm+ / 2-col on mobile. Each tile:
// corner brackets, mono category code top-left, partner wordmark in display
// caps. When a real licensed logo file lands in /public/partners/, flip the
// tile's `logoFile` to the filename and <Image> takes over.
//
// Do not drop web-pulled logos in here. See the comment block at the bottom
// of this file for the rights / asset requirements before swapping any text
// wordmark for an image.

import Image from "next/image";
import { CornerBrackets } from "@/components/shared/CornerBrackets";

type Partner = {
  name: string;
  category: string;
  /** Filename in /public/partners/ once a properly-licensed SVG is dropped. */
  logoFile: string | null;
};

const PARTNERS: ReadonlyArray<Partner> = [
  { name: "Trinity Solar", category: "Installer", logoFile: null },
  { name: "ABC Supply", category: "Distributor", logoFile: null },
  { name: "SRS Distribution", category: "Distributor", logoFile: null },
  { name: "Beacon", category: "Distributor", logoFile: null },
  { name: "Enphase", category: "Microinverter", logoFile: null },
  { name: "Tesla", category: "ESS", logoFile: null },
  { name: "GAF", category: "Roofing", logoFile: null },
  { name: "GAF Energy", category: "Solar Shingle", logoFile: null },
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

        <ul className="mt-14 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-px bg-bone/5">
          {PARTNERS.map(({ name, category, logoFile }) => (
            <li
              key={name}
              className="group relative bg-navy-soft/20 hover:bg-navy-soft/35 transition-colors"
            >
              <div className="relative aspect-[5/3] flex items-center justify-center px-5 sm:px-7 py-6">
                <CornerBrackets
                  size={3}
                  colorClassName="border-bone/25 group-hover:border-safety/70 transition-colors"
                />

                <span className="absolute top-3 left-3 font-mono text-[9px] uppercase tracking-[0.3em] text-safety">
                  {category}
                </span>

                {logoFile ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={`/partners/${logoFile}`}
                      alt={`${name} logo`}
                      fill
                      sizes="(min-width: 1024px) 22vw, 45vw"
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <span className="font-display font-bold text-2xl sm:text-3xl lg:text-3xl xl:text-4xl text-bone uppercase tracking-tight leading-none text-center">
                    {name}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-10 sm:mt-12 font-mono text-[10px] uppercase tracking-[0.3em] text-bone/35 max-w-3xl">
          {
            "// Logo treatment held pending licensed brand assets. Wordmarks are placeholders only."
          }
        </p>
      </div>
    </section>
  );
}

// ─── TODO list (Slice 8 — Partners) ──────────────────────────────────────
//  Before swapping any wordmark for an <Image>, confirm for that partner:
//    1) Authorized-partner status or explicit written logo-use permission
//       (Enphase Installer Network, GAF Master Elite, etc. include this).
//    2) Official press-kit SVG from the brand's own brand-assets page —
//       NOT a web-pulled PNG/SVG, NOT a Wikipedia file, NOT a logo-search
//       site rip.
//    3) A look at the brand's logo guidelines for colorways, clear-space,
//       minimum size. Honor them.
//    4) Drop the licensed SVG into /public/partners/{slug}.svg and flip the
//       partner's `logoFile: null` to the filename. That swaps the text
//       wordmark for the <Image> automatically.
//  If a partner is aspirational rather than active, remove them from PARTNERS
//  rather than waiting for a logo — implying partnership we don't have is
//  worse than a shorter list.
