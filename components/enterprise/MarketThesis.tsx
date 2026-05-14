// II. Market thesis — two-column editorial layout. Left column carries the
// thesis paragraph in Outfit Light; right column shows three pull-stats in
// Cormorant italic display weights with brass hairlines between. Source
// footnote in mono caps below the stats. Numbers are industry-standard
// approximations sourced from SEIA's Florida solar data and rounded
// conservatively — verify and refresh before publication.

export function MarketThesis() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
        <p className="font-outfit text-[10px] uppercase tracking-[0.4em] text-brass font-light">
          II · The math of solar-clad re-roofs
        </p>

        <h2 className="mt-6 font-cormorant text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-deep-ink font-light leading-[1.05] tracking-[-0.02em] max-w-3xl">
          The friction is <em className="italic font-normal text-brass">structural</em>{" "}
          — and growing.
        </h2>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left column — thesis paragraph */}
          <div className="lg:col-span-7 font-outfit font-light text-base sm:text-lg text-deep-ink leading-[1.8] max-w-2xl">
            <p>
              Florida has crossed{" "}
              <span className="text-brass">two hundred thousand</span>{" "}
              residential solar installations and ranks third nationally for
              installed solar capacity. Adoption is compounding — recent years
              have run twenty-plus percent year-over-year — while the state&apos;s
              storm season and{" "}
              <em className="italic">five-day permit posture under HB 683</em>{" "}
              drive a continuously elevated re-roof velocity.
            </p>
            <p className="mt-5">
              The two curves intersect on every solar-clad roof that hits the
              end of its asphalt-shingle cycle. That intersection is a portfolio-
              level operating problem for every roofing platform with Florida
              exposure — and the math worsens every quarter solar adoption
              outpaces re-roof completion.
            </p>
          </div>

          {/* Right column — three pull-stats */}
          <div className="lg:col-span-5 lg:pl-8 lg:border-l-[0.5px] lg:border-deep-ink/15">
            <dl className="flex flex-col">
              <div className="pb-6 sm:pb-7 border-b-[0.5px] border-deep-ink/15">
                <dt className="font-outfit text-[10px] uppercase tracking-[0.35em] text-muted-warm font-light">
                  FL homes with solar
                </dt>
                <dd className="mt-2 font-cormorant text-5xl sm:text-6xl text-deep-ink font-light leading-none tracking-[-0.02em]">
                  200<em className="italic text-brass font-normal">K+</em>
                </dd>
              </div>
              <div className="py-6 sm:py-7 border-b-[0.5px] border-deep-ink/15">
                <dt className="font-outfit text-[10px] uppercase tracking-[0.35em] text-muted-warm font-light">
                  US solar capacity rank
                </dt>
                <dd className="mt-2 font-cormorant text-5xl sm:text-6xl text-deep-ink font-light leading-none tracking-[-0.02em]">
                  3<em className="italic text-brass font-normal">rd</em>
                </dd>
              </div>
              <div className="pt-6 sm:pt-7">
                <dt className="font-outfit text-[10px] uppercase tracking-[0.35em] text-muted-warm font-light">
                  Residential adoption YoY
                </dt>
                <dd className="mt-2 font-cormorant text-5xl sm:text-6xl text-deep-ink font-light leading-none tracking-[-0.02em]">
                  20<em className="italic text-brass font-normal">%+</em>
                </dd>
              </div>
            </dl>

            <p className="mt-7 font-outfit text-[9px] uppercase tracking-[0.3em] text-muted-warm/80 font-light leading-[1.7]">
              Source · SEIA Florida solar industry data, rounded.
              <br />
              Refresh before publication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── TODO (pre-launch) ──────────────────────────────────────────────────
//  - Pull current quarter SEIA data: FL residential installations, US rank,
//    YoY growth rate. Update the three pull-stats above.
//  - Confirm "HB 683 five-day permit posture" claim still accurate at launch.
//  - Consider adding a fourth stat (FL annual re-roof volume) if a credible
//    source emerges. Today's stat trio reads complete; not blocking.
