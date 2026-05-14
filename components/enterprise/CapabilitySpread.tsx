// VII. Capability spread — two paired lists side-by-side (roof types · system
// brands), each as a centered Cormorant italic horizontal flow with brass dot
// separators. CertainTeed church project gets a closing italic callout.

import { Fragment } from "react";

const ROOF_TYPES: ReadonlyArray<string> = [
  "Asphalt",
  "Metal",
  "Tile",
  "Flat",
  "Commercial",
  "Ground-mount",
];

const SYSTEM_BRANDS: ReadonlyArray<string> = [
  "Tesla",
  "Enphase",
  "SolarEdge",
  "SunPower",
  "SMA",
  "Sol-Ark",
  "Generac",
  "Franklin WH",
  "CertainTeed",
];

function Divider() {
  return (
    <li aria-hidden className="text-brass text-base sm:text-lg leading-none">
      ·
    </li>
  );
}

export function CapabilitySpread() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
        <div className="text-center max-w-3xl mx-auto">
          <p className="font-outfit text-[10px] uppercase tracking-[0.4em] text-brass font-light">
            VII · Capability spread
          </p>
          <h2 className="mt-6 font-cormorant text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-deep-ink font-light leading-[1.05] tracking-[-0.02em]">
            Every roof. <em className="italic font-normal text-brass">Every system.</em>
          </h2>
        </div>

        <div className="mt-14 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-16 lg:gap-24">
          <div className="text-center md:border-r-[0.5px] md:border-brass/40 md:pr-12 lg:pr-16">
            <p className="font-outfit text-[10px] uppercase tracking-[0.4em] text-muted-warm font-light">
              Roof types
            </p>
            <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-5 gap-y-3 font-cormorant text-lg sm:text-xl lg:text-2xl text-deep-ink font-light">
              {ROOF_TYPES.map((type, i) => (
                <Fragment key={type}>
                  {i > 0 && <Divider />}
                  <li className="italic">{type}</li>
                </Fragment>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <p className="font-outfit text-[10px] uppercase tracking-[0.4em] text-muted-warm font-light">
              System brands
            </p>
            <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-5 gap-y-3 font-cormorant text-lg sm:text-xl lg:text-2xl text-deep-ink font-light">
              {SYSTEM_BRANDS.map((brand, i) => (
                <Fragment key={brand}>
                  {i > 0 && <Divider />}
                  <li className="italic">{brand}</li>
                </Fragment>
              ))}
            </ul>
          </div>
        </div>

        <div aria-hidden className="mx-auto mt-16 sm:mt-20 w-8 h-px bg-brass" />

        <p className="mt-10 sm:mt-12 mx-auto max-w-3xl text-center font-cormorant text-xl sm:text-2xl lg:text-3xl text-deep-ink font-light italic leading-[1.4] tracking-[-0.01em]">
          The CertainTeed integrated-solar church project —{" "}
          <span className="not-italic text-brass">a representative commercial scope.</span>
        </p>
      </div>
    </section>
  );
}
