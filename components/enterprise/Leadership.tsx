// IX. Leadership — four-up portrait row. Per spec, no bios in v1 — name +
// title + photo only. Quiet Luxury restraint is the feature: portraits
// speak for themselves, no caption-stuffing.

import Image from "next/image";

type Leader = {
  name: string;
  title: string;
  file: string;
};

const LEADERS: ReadonlyArray<Leader> = [
  { name: "Francis O'Reilly", title: "CEO · Director", file: "francis-oreilly.png" },
  { name: "Sean O'Reilly", title: "CSO", file: "sean-oreilly.png" },
  { name: "TJ Nardini", title: "COO", file: "tj-nardini.png" },
  { name: "Josh Shiflett", title: "VP · Electrical", file: "josh-shiflett.png" },
];

export function Leadership() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
        <div className="text-center max-w-3xl mx-auto">
          <p className="font-outfit text-[10px] uppercase tracking-[0.4em] text-brass font-light">
            IX · Leadership
          </p>
          <h2 className="mt-6 font-cormorant text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-deep-ink font-light leading-[1.05] tracking-[-0.02em]">
            Who you&apos;d be <em className="italic font-normal text-brass">sitting across from.</em>
          </h2>
        </div>

        <ul className="mt-14 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {LEADERS.map(({ name, title, file }) => (
            <li key={name} className="text-center">
              <div className="relative aspect-square overflow-hidden bg-paper">
                <Image
                  src={`/enterprise/team/${file}`}
                  alt={`${name} · ${title}`}
                  fill
                  sizes="(min-width: 1024px) 22vw, 45vw"
                  className="object-cover"
                />
                {/* Warm tint — same QL treatment as the Hero photo so portraits
                    feel like part of the same photographic essay. */}
                <div aria-hidden className="absolute inset-0 bg-paper/15 mix-blend-multiply" />
              </div>

              <div aria-hidden className="mx-auto mt-6 w-6 h-px bg-brass" />

              <p className="mt-5 font-cormorant text-lg sm:text-xl lg:text-2xl text-deep-ink font-medium leading-tight tracking-[-0.005em]">
                {name}
              </p>
              <p className="mt-2 font-cormorant italic text-sm sm:text-base text-brass font-normal">
                {title}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
