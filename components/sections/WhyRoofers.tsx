// "Why roofers partner with us" — six vendor-spec cards on navy. Each card
// reads like a row from an equipment datasheet: mono advantage code + tag at
// the top, contained icon chip in safety-orange, display-font title, body,
// and asymmetric corner brackets that color-shift on hover. 3-col grid on lg+,
// 2-col on md, single column on mobile.

import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  CalendarCheck,
  Handshake,
  Map,
  ShieldCheck,
  Stamp,
} from "lucide-react";
import { CornerBrackets } from "@/components/shared/CornerBrackets";

type Advantage = {
  code: string;
  tag: string;
  Icon: LucideIcon;
  title: string;
  body: string;
};

const ADVANTAGES: ReadonlyArray<Advantage> = [
  {
    code: "01",
    tag: "Lic / Ins",
    Icon: ShieldCheck,
    title: "Licensed & insured",
    body: "Florida licensed. Fully insured.",
  },
  {
    code: "02",
    tag: "Permits",
    Icon: Stamp,
    title: "We pull the permits",
    body: "AHJs across Florida. We deal with the city, you don't.",
  },
  {
    code: "03",
    tag: "Warranty",
    Icon: BadgeCheck,
    title: "Warranty preserved",
    body: "Enphase, Tesla, SolarEdge — installed to spec.",
  },
  {
    code: "04",
    tag: "Coverage",
    Icon: Map,
    title: "Statewide FL",
    body: "Anywhere from Pensacola to Key West.",
  },
  {
    code: "05",
    tag: "Loyalty",
    Icon: Handshake,
    title: "We never poach",
    body: "We work for you. Your customer stays your customer.",
  },
  {
    code: "06",
    tag: "Schedule",
    Icon: CalendarCheck,
    title: "Fast turnaround",
    body: "Removal scheduled to your roof start, not ours.",
  },
];

export function WhyRoofers() {
  return (
    <section
      id="why-roofers"
      className="relative bg-navy text-bone overflow-hidden"
    >
      <div aria-hidden className="absolute inset-0 grid-bg opacity-40" />
      <span aria-hidden className="grain" />

      <div
        aria-hidden
        className="absolute top-0 left-0 h-px w-1/2 bg-gradient-to-r from-safety/40 via-safety/10 to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
        <div className="flex flex-col gap-4 max-w-3xl">
          <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.3em] text-safety">
            ▌ 03 / Vendor card
          </span>
          <h2 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-bone uppercase tracking-tight leading-[0.9]">
            Why roofers partner with us.
          </h2>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-bone/45 mt-1">
            Six points. All field-tested.
          </p>
        </div>

        <ul className="mt-14 sm:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
          {ADVANTAGES.map(({ code, tag, Icon, title, body }) => (
            <li key={code} className="group relative">
              <article className="relative h-full bg-navy-soft/20 border border-bone/5 p-6 sm:p-8 flex flex-col gap-5 transition-colors group-hover:bg-navy-soft/35 group-hover:border-bone/10">
                <CornerBrackets
                  size={4}
                  colorClassName="border-bone/30 group-hover:border-safety/80 transition-colors"
                />

                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em]">
                  <span className="text-safety">ADV / {code}</span>
                  <span className="text-bone/35">{tag}</span>
                </div>

                <div className="w-12 h-12 flex items-center justify-center bg-safety/10 ring-1 ring-safety/40">
                  <Icon
                    className="h-6 w-6 text-safety"
                    strokeWidth={1.6}
                    aria-hidden
                  />
                </div>

                <h3 className="font-display font-bold text-2xl sm:text-3xl text-bone uppercase leading-[0.95]">
                  {title}
                </h3>

                <p className="text-base text-bone/70 leading-relaxed">{body}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
