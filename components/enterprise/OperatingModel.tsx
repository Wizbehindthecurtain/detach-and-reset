// IV. Operating model — three-step horizontal flow with lowercase Roman
// numerals (i. ii. iii.), brass hairlines between steps. Each step: Cormorant
// headline + 2-3 line Outfit description. Diagrammatic; no boxed cards.

type Step = {
  numeral: string;
  headline: string;
  description: string;
};

const STEPS: ReadonlyArray<Step> = [
  {
    numeral: "i.",
    headline: "Platform-level MSA",
    description:
      "One master agreement covers your entire portfolio. Standard pricing schedule, standard SLA, standard insurance posture. Signed once at the platform tier.",
  },
  {
    numeral: "ii.",
    headline: "Per-portco activation",
    description:
      "Each portfolio company is added to the MSA by signed addendum. Onboarding takes one operating call — no separate negotiation, no rate sheets to rebuild.",
  },
  {
    numeral: "iii.",
    headline: "Scheduling SLA",
    description:
      "Detach scheduled to your roof start, not ours. Three- to seven-business-day window depending on roofing schedule; rush jobs are a phone call.",
  },
];

export function OperatingModel() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
        <div className="text-center max-w-3xl mx-auto">
          <p className="font-outfit text-[10px] uppercase tracking-[0.4em] text-brass font-light">
            IV · Operating model
          </p>
          <h2 className="mt-6 font-cormorant text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-deep-ink font-light leading-[1.05] tracking-[-0.02em]">
            One MSA. <em className="italic font-normal text-brass">Every portco.</em>
            <br />
            Every state.
          </h2>
        </div>

        <ol className="mt-14 sm:mt-20 grid grid-cols-1 md:grid-cols-3 gap-x-0 gap-y-12 md:gap-y-0">
          {STEPS.map((step, i) => (
            <li
              key={step.numeral}
              className={
                "px-0 md:px-6 lg:px-8" +
                (i < STEPS.length - 1
                  ? " md:border-r-[0.5px] md:border-brass/40"
                  : "")
              }
            >
              <p className="font-cormorant text-2xl sm:text-3xl text-brass font-normal italic leading-none">
                {step.numeral}
              </p>
              <h3 className="mt-4 font-cormorant text-2xl sm:text-3xl lg:text-[2rem] text-deep-ink font-medium leading-[1.15] tracking-[-0.015em]">
                {step.headline}
              </h3>
              <p className="mt-4 font-outfit font-light text-base text-muted-warm leading-[1.75] max-w-md">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
