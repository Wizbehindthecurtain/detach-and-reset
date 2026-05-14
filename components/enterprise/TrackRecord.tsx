// V. Track record — four big-number stats edge-to-edge with brass hairlines
// between. Numbers in Cormorant display weight at significant scale. The
// section IS the design — composition is minimal, numbers carry the page.

type Stat = {
  number: string;
  superscript?: string;
  label: string;
};

const STATS: ReadonlyArray<Stat> = [
  { number: "468", label: "Systems · 24 months" },
  { number: "50", superscript: "+", label: "Top-500 partners" },
  { number: "15", label: "States licensed" },
  { number: "$5", superscript: "M", label: "GL coverage" },
];

export function TrackRecord() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
        <div className="text-center max-w-3xl mx-auto">
          <p className="font-outfit text-[10px] uppercase tracking-[0.4em] text-brass font-light">
            V · Track record
          </p>
          <h2 className="mt-6 font-cormorant text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-deep-ink font-light leading-[1.05] tracking-[-0.02em]">
            Field-validated, <em className="italic font-normal text-brass">two years in.</em>
          </h2>
        </div>

        <dl className="mt-14 sm:mt-20 grid grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={
                "py-8 sm:py-10 text-center" +
                (i < STATS.length - 1
                  ? " lg:border-r-[0.5px] lg:border-brass/40"
                  : "") +
                (i % 2 === 0
                  ? " border-r-[0.5px] border-brass/40 lg:border-r-[0.5px]"
                  : "") +
                (i < 2 ? " border-b-[0.5px] border-brass/40 lg:border-b-0" : "")
              }
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <div className="font-cormorant text-6xl sm:text-7xl lg:text-8xl xl:text-[7rem] text-deep-ink font-light leading-none tracking-[-0.03em]">
                  {stat.number}
                  {stat.superscript && (
                    <em className="italic text-brass font-normal text-4xl sm:text-5xl lg:text-6xl align-[0.25em]">
                      {stat.superscript}
                    </em>
                  )}
                </div>
                <div
                  aria-hidden
                  className="mx-auto mt-5 w-6 h-px bg-brass"
                />
                <p className="mt-5 font-outfit text-[10px] sm:text-[11px] uppercase tracking-[0.35em] text-muted-warm font-light">
                  {stat.label}
                </p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
