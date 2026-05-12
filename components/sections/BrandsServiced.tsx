// "We know your homeowner's system" — six brand wordmarks framed as an
// approved-vendor datasheet. Corner brackets on the outer frame, top + bottom
// hairlines with mono labels at the ends, brands in massive display-font caps
// with tiny mono product-type codes baseline-tucked beside each name, safety-
// orange diamond dividers. Wraps gracefully on mobile (`flex-wrap`) and scales
// up dramatically on `xl`.

import { Fragment } from "react";
import { CornerBrackets } from "@/components/shared/CornerBrackets";

type Brand = {
  name: string;
  /** Product-type tag — accurate, contractor-vernacular. */
  code: string;
};

const BRANDS: ReadonlyArray<Brand> = [
  { name: "Enphase", code: "Micro" },
  { name: "Tesla", code: "ESS" },
  { name: "SolarEdge", code: "String" },
  { name: "SunPower", code: "PV" },
  { name: "SMA", code: "String" },
  { name: "Sol-Ark", code: "Hybrid" },
  { name: "Generac", code: "Backup" },
  { name: "Franklin WH", code: "ESS" },
];

export function BrandsServiced() {
  return (
    <section
      id="brands"
      className="relative bg-bone text-ink overflow-hidden"
    >
      <span aria-hidden className="grain opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
        <div className="flex flex-col gap-4 max-w-3xl">
          <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.3em] text-safety">
            ▌ 04 / Approved systems
          </span>
          <h2 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-navy uppercase tracking-tight leading-[0.9]">
            We know your homeowner&apos;s system.
          </h2>
        </div>

        <div className="relative mt-14 sm:mt-20">
          <CornerBrackets size={6} colorClassName="border-safety/55" />

          <div className="flex items-center gap-4 px-5 sm:px-8 lg:px-10">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/40 shrink-0">
              MFR / Approved
            </span>
            <div className="flex-1 h-px bg-ink/15" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/40 shrink-0">
              08 / 08
            </span>
          </div>

          <ul className="py-10 sm:py-14 lg:py-16 px-5 sm:px-8 lg:px-10 flex flex-wrap items-baseline justify-center gap-x-5 sm:gap-x-7 lg:gap-x-10 gap-y-6 sm:gap-y-8">
            {BRANDS.map((brand, i) => (
              <Fragment key={brand.name}>
                <li className="flex items-baseline gap-2">
                  <span className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-navy uppercase tracking-tight leading-none">
                    {brand.name}
                  </span>
                  <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-safety leading-none">
                    {brand.code}
                  </span>
                </li>
                {i < BRANDS.length - 1 && (
                  <li
                    aria-hidden
                    className="text-safety/60 text-xl sm:text-2xl leading-none -translate-y-1"
                  >
                    ◆
                  </li>
                )}
              </Fragment>
            ))}
          </ul>

          <div className="flex items-center gap-4 px-5 sm:px-8 lg:px-10">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/40 shrink-0">
              Handled in-house
            </span>
            <div className="flex-1 h-px bg-ink/15" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/40 shrink-0">
              Statewide FL
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
