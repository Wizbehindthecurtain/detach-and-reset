// III. The friction — single-column centered prose, italic key phrases as
// the visual rhythm. No icons. No cards. Names the wound that every PE
// roll-up has already felt: a regional GM turning down a job because of
// solar exposure they can't price or warrant.

export function TheFriction() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32 text-center">
        <p className="font-outfit text-[10px] uppercase tracking-[0.4em] text-brass font-light">
          III · The friction
        </p>

        <h2 className="mt-6 font-cormorant text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-deep-ink font-light leading-[1.05] tracking-[-0.02em]">
          Why your regional GM <em className="italic font-normal text-brass">turns the job down.</em>
        </h2>

        <div className="mt-12 sm:mt-16 mx-auto max-w-3xl font-outfit font-light text-base sm:text-lg lg:text-xl text-deep-ink leading-[1.8] space-y-6">
          <p>
            Solar on the roof has become the single most cited reason regional
            GMs decline otherwise-profitable re-roof jobs across PE-backed
            roofing platforms operating in Florida.
          </p>
          <p>
            The exposures are well understood at every operating level —{" "}
            <em className="italic">warranty void risk</em> ·{" "}
            <em className="italic">electrical liability</em> ·{" "}
            <em className="italic">slow callbacks from the homeowner&apos;s original installer</em> —
            and the math doesn&apos;t close at the portco level: the cost of
            in-house competence is high, the volume to amortize it is low,
            and the failure mode is expensive.
          </p>
          <p className="text-muted-warm">
            Every turned-down job is portfolio-level revenue your platform
            leaves on the table. Every one of those jobs is a different sub
            for someone else.
          </p>
        </div>
      </div>
    </section>
  );
}
