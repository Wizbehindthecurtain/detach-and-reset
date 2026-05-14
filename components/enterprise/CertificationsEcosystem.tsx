// VIII. Certifications + partner ecosystem — the eight licensed partner logos
// from the roofer site, but presented in the Quiet Luxury register: paper
// surface (no bone tiles), brass hairline dividers between logos, generous
// spacing, mono category labels in muted brass. No corner brackets — too
// industrial for this aesthetic.

import Image from "next/image";

type Partner = {
  name: string;
  category: string;
  file: string;
};

const PARTNERS: ReadonlyArray<Partner> = [
  { name: "Trinity Solar", category: "Installer", file: "trinity-solar.jpg" },
  { name: "ABC Supply", category: "Distributor", file: "abc-supply.svg" },
  { name: "SRS Distribution", category: "Distributor", file: "srs-distribution.webp" },
  { name: "Beacon", category: "Distributor", file: "beacon.png" },
  { name: "Enphase", category: "Microinverter", file: "enphase.png" },
  { name: "Tesla", category: "ESS", file: "tesla.png" },
  { name: "GAF", category: "Roofing", file: "gaf.svg" },
  { name: "GAF Energy", category: "Solar Shingle", file: "gaf-energy.png" },
];

export function CertificationsEcosystem() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
        <div className="text-center max-w-3xl mx-auto">
          <p className="font-outfit text-[10px] uppercase tracking-[0.4em] text-brass font-light">
            VIII · Certifications + ecosystem
          </p>
          <h2 className="mt-6 font-cormorant text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-deep-ink font-light leading-[1.05] tracking-[-0.02em]">
            Manufacturer-aligned at <em className="italic font-normal text-brass">every brand</em> we touch.
          </h2>
        </div>

        <ul className="mt-14 sm:mt-20 grid grid-cols-2 lg:grid-cols-4">
          {PARTNERS.map(({ name, category, file }, i) => (
            <li
              key={name}
              className={
                "relative" +
                // brass dividers on inner edges
                (i % 2 === 0 ? " lg:border-r-[0.5px] lg:border-brass/30" : "") +
                (i % 4 < 3 && i % 4 !== 1 ? " lg:border-r-[0.5px] lg:border-brass/30" : "") +
                (i < 6 ? " border-b-[0.5px] border-brass/30" : "") +
                (i % 2 === 0 ? " border-r-[0.5px] border-brass/30" : "")
              }
            >
              <div className="flex flex-col items-center justify-between p-7 sm:p-9 lg:p-10 h-44 sm:h-48 lg:h-52">
                <p className="font-outfit text-[9px] uppercase tracking-[0.4em] text-muted-warm font-light">
                  {category}
                </p>
                <div className="relative w-full flex-1 mt-2 mb-2">
                  <Image
                    src={`/partners/${file}`}
                    alt={`${name} — ${category}`}
                    fill
                    sizes="(min-width: 1024px) 22vw, 45vw"
                    className="object-contain"
                  />
                </div>
                <p className="font-cormorant italic text-sm text-deep-ink font-normal">
                  {name}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
