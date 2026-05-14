// VI. Anchor relationship — standalone pull-quote-style block. The Trinity
// Solar relationship is one of the two or three things readers should
// remember from the page, and the math (120/yr × 2yrs ≈ 240 of the 468
// cumulative installs) makes the rest of the track record self-explanatory.

export function TrinityCallout() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32 text-center">
        <p className="font-outfit text-[10px] uppercase tracking-[0.4em] text-brass font-light">
          VI · Anchor relationship
        </p>

        {/* Top brass hairline */}
        <div aria-hidden className="mx-auto mt-10 sm:mt-12 w-12 h-px bg-brass" />

        <blockquote className="mt-10 sm:mt-12">
          <p className="font-cormorant text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-deep-ink font-light italic leading-[1.15] tracking-[-0.02em]">
            Anchor relationship — <span className="not-italic font-normal text-brass">Trinity&nbsp;Solar.</span>
          </p>
          <p className="mt-8 sm:mt-10 font-cormorant text-xl sm:text-2xl lg:text-3xl text-deep-ink font-light leading-[1.4] tracking-[-0.01em]">
            120 projects per year. <em className="italic text-brass">Fifteen states.</em>
            <br className="hidden sm:block" />
            <span className="block sm:inline sm:ml-2">We are their R&amp;R sub.</span>
          </p>
        </blockquote>

        {/* Bottom brass hairline */}
        <div aria-hidden className="mx-auto mt-10 sm:mt-12 w-12 h-px bg-brass" />

        <p className="mt-8 font-outfit text-[10px] uppercase tracking-[0.35em] text-muted-warm font-light max-w-xl mx-auto leading-[1.7]">
          The largest residential solar installer in the eastern US, embedded into the same multi-state operating footprint your platform is buying into.
        </p>
      </div>
    </section>
  );
}
