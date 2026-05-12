// "How it works" — process spec sheet, not a card grid. Each step is a
// horizontal row: oversized step number on the left, vertical hairline,
// then icon + mono stage label + display-font heading + body + a 3-up
// `dl` of mono spec lines (DURATION / SCOPE / OUTPUT). Designed to scan
// like the procedure card on a service truck.

import { CheckCircle2, ClipboardList, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Step = {
  number: string;
  Icon: LucideIcon;
  title: string;
  body: string;
  specs: Array<{ label: string; value: string }>;
};

const STEPS: ReadonlyArray<Step> = [
  {
    number: "01",
    Icon: ClipboardList,
    title: "You send us the job.",
    body: "Address, panel count, your target reroof date. Two minutes.",
    specs: [
      { label: "Duration", value: "≈ 2 min" },
      { label: "Input", value: "Address · panels · roof date" },
      { label: "Output", value: "Quote + tentative hold" },
    ],
  },
  {
    number: "02",
    Icon: Wrench,
    title: "We detach and store the system.",
    body: "Our crew pulls panels, micros, racking. Stored indoors. Roof is clear when you start.",
    specs: [
      { label: "Scope", value: "Panels · micros · racking" },
      { label: "Storage", value: "Indoor" },
      { label: "Deck", value: "Clear for your crew" },
    ],
  },
  {
    number: "03",
    Icon: CheckCircle2,
    title: "We reset after your roof is done.",
    body: "Reinstalled to manufacturer spec. Warranty intact. Permit and PTO handled.",
    specs: [
      { label: "Install", value: "To mfr spec" },
      { label: "Warranty", value: "Preserved" },
      { label: "Docs", value: "Permit + PTO" },
    ],
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative bg-bone text-ink overflow-hidden"
    >
      <span aria-hidden className="grain opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
        <div className="flex flex-col gap-4 max-w-3xl">
          <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.3em] text-safety">
            ▌ 02 / Process
          </span>
          <h2 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-navy uppercase tracking-tight leading-[0.9]">
            How it works.
          </h2>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink/45 mt-1">
            Three stages — short, scheduled, signed off.
          </p>
        </div>

        <ol className="mt-14 sm:mt-20 grid grid-cols-1 gap-12 sm:gap-16 lg:gap-20">
          {STEPS.map(({ number, Icon, title, body, specs }, index) => {
            const isLast = index === STEPS.length - 1;
            return (
              <li
                key={number}
                className={
                  "relative grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-start " +
                  (!isLast ? "pb-12 sm:pb-16 border-b border-ink/10" : "")
                }
              >
                <div className="sm:col-span-3 lg:col-span-3 flex items-start gap-3 sm:gap-4">
                  <span className="font-display font-black text-[6.5rem] sm:text-[8rem] lg:text-[10rem] leading-[0.78] text-safety">
                    {number}
                  </span>
                  <div className="hidden sm:flex flex-col items-start gap-2 pt-3">
                    <Icon
                      className="h-7 w-7 text-navy"
                      strokeWidth={1.6}
                      aria-hidden
                    />
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/40 [writing-mode:vertical-rl] rotate-180">
                      Stage {number} / 03
                    </span>
                  </div>
                </div>

                <div className="hidden sm:block sm:col-span-1 self-stretch">
                  <div className="h-full w-px bg-ink/10 mx-auto" />
                </div>

                <div className="sm:col-span-8 lg:col-span-8 flex flex-col gap-4 sm:gap-5">
                  <div className="flex sm:hidden items-center gap-3">
                    <Icon
                      className="h-5 w-5 text-navy"
                      strokeWidth={1.6}
                      aria-hidden
                    />
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/40">
                      Stage {number} / 03
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-navy uppercase leading-[0.95] max-w-2xl">
                    {title}
                  </h3>

                  <p className="text-base sm:text-lg text-ink/70 leading-relaxed max-w-2xl">
                    {body}
                  </p>

                  <dl className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-4 max-w-3xl">
                    {specs.map(({ label, value }) => (
                      <div
                        key={label}
                        className="flex flex-col gap-1 border-l-2 border-safety/70 pl-3"
                      >
                        <dt className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/40">
                          {label}
                        </dt>
                        <dd className="font-mono text-xs uppercase tracking-wider text-ink/80">
                          {value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
