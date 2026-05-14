// Hero — centered classical proportions, Cormorant headline with italic brass
// accent, Outfit-light lede, brass hairline marks above and below the headline,
// FL aerial photo with warm cream-tint overlay so the saturated image
// harmonizes with the paper field instead of fighting it.

import Image from "next/image";

export function EnterpriseHero() {
  return (
    <section className="relative bg-ivory">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-28 pb-20 sm:pb-24 lg:pb-32">
        {/* ── Brand mark ── */}
        <div className="text-center">
          <p className="font-cormorant text-xl sm:text-2xl text-deep-ink leading-none">
            <span className="italic font-medium">Detach &amp; Reset</span>
            <span className="ml-3 inline-block align-[3px] font-outfit not-italic text-[10px] uppercase tracking-[0.4em] text-brass font-light">
              An operating brief
            </span>
          </p>
          <p className="mt-3 font-outfit text-[9px] uppercase tracking-[0.4em] text-muted-warm font-light">
            A 4i Energy Partners Co.
          </p>
        </div>

        {/* ── Top brass hairline ── */}
        <div aria-hidden className="mx-auto mt-12 sm:mt-16 w-8 h-px bg-brass" />

        {/* ── H1 ── */}
        <h1 className="mt-10 sm:mt-12 font-cormorant text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-deep-ink leading-[1.03] tracking-[-0.025em] font-light">
          The solar problem,
          <br />
          <em className="italic font-normal text-brass">solved</em> at portfolio scale.
        </h1>

        {/* ── Lede ── */}
        <p className="mt-10 sm:mt-12 mx-auto max-w-2xl font-outfit text-center text-base sm:text-lg lg:text-xl text-muted-warm leading-[1.7] font-light tracking-[0.005em]">
          A single operating partnership for solar detach &amp; reset across every portfolio company —{" "}
          <span className="text-deep-ink">Florida and 14 other states</span>, manufacturer-aligned, fully insured.
        </p>

        {/* ── Bottom brass hairline ── */}
        <div aria-hidden className="mx-auto mt-12 sm:mt-16 w-8 h-px bg-brass" />

        {/* ── Editorial photo ── */}
        <figure className="mt-12 sm:mt-16 relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden">
          <Image
            src="/jobs/hero-solar-aerial.jpg"
            alt="Aerial view of a Florida residential solar array — a representative install across a multi-state operating portfolio."
            fill
            priority
            sizes="(min-width: 1024px) 80vw, 100vw"
            className="object-cover"
          />
          {/* Warm cream-tint overlay — harmonizes the saturated photo with the
              paper field. Multiply blend lifts paper tones into shadows. */}
          <div aria-hidden className="absolute inset-0 bg-paper/25 mix-blend-multiply" />
        </figure>
      </div>
    </section>
  );
}
