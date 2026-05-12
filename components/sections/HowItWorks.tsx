// "How it works" — three numbered cards on a bone bg. Equal-width 3-col on md+,
// stacked on mobile. Step number sits in safety-orange display type; lucide icon
// in navy. Body copy stays short and contractor-direct per the brand voice.

import { CheckCircle2, ClipboardList, Wrench } from "lucide-react";

const STEPS = [
  {
    number: "01",
    Icon: ClipboardList,
    title: "You send us the job.",
    body: "Address, panel count, your target reroof date. Two minutes.",
  },
  {
    number: "02",
    Icon: Wrench,
    title: "We detach and store the system.",
    body: "Our crew pulls panels, micros, racking. Stored indoors. Roof is clear when you start.",
  },
  {
    number: "03",
    Icon: CheckCircle2,
    title: "We reset after your roof is done.",
    body: "Reinstalled to manufacturer spec. Warranty intact. Permit and PTO handled.",
  },
] as const;

export function HowItWorks() {
  return (
    <section className="bg-bone text-ink">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-navy tracking-tight">
          How it works.
        </h2>

        <div className="mt-10 sm:mt-14 lg:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {STEPS.map(({ number, Icon, title, body }) => (
            <article
              key={number}
              className="bg-white rounded-lg p-6 sm:p-8 ring-1 ring-ink/5 shadow-sm flex flex-col gap-4"
            >
              <div className="flex items-start justify-between">
                <span className="font-display text-5xl lg:text-6xl leading-none text-safety">
                  {number}
                </span>
                <Icon
                  className="h-8 w-8 text-navy"
                  strokeWidth={1.75}
                  aria-hidden
                />
              </div>
              <h3 className="font-display text-2xl lg:text-3xl text-navy leading-tight">
                {title}
              </h3>
              <p className="text-base text-ink/75 leading-relaxed">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
