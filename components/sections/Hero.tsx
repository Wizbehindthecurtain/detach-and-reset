// Hero — industrial-editorial. Asymmetric 12-col grid on lg+, single-column on mobile.
// Drafting-table grain + faint blueprint grid in the background, mono spec eyebrow,
// massive Big Shoulders display H1 with the brand verb ("REMOVAL & RE-INSTALL") punched
// in safety-orange. Right side is an "asset bay" placeholder for the Raymond_DNR
// jobsite photo — bracketed corners, hatched fill, alphanumeric slot code — so the
// gap reads as intentionally reserved, not forgotten. Below the fold of the hero:
// a slow marquee of credentials. Page load fires a staggered CSS reveal.

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { CornerBrackets } from "@/components/shared/CornerBrackets";
import { PhoneLink } from "@/components/shared/PhoneLink";

const TICKER_FACTS = [
  "LICENSED",
  "INSURED",
  "STATEWIDE FLORIDA",
  "NO MIDDLEMAN",
  "WARRANTY PRESERVED",
  "FAST TURNAROUND",
  "PERMITS PULLED",
  "ENPHASE · TESLA · SOLAREDGE",
];

export function Hero() {
  return (
    <section className="relative bg-navy text-bone overflow-hidden">
      <div aria-hidden className="absolute inset-0 grid-bg opacity-50" />
      <span aria-hidden className="grain" />

      <div aria-hidden className="absolute top-0 right-0 h-px w-2/3 bg-gradient-to-l from-safety/60 via-safety/20 to-transparent" />
      <div aria-hidden className="absolute bottom-0 left-0 h-px w-1/2 bg-gradient-to-r from-safety/40 via-safety/10 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal reveal-1 pt-6 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-bone/40">
          <span>{"// solar R&R · roofer-only"}</span>
          <span className="hidden md:inline">Bay J-01 · 2026</span>
        </div>

        <div className="pt-10 sm:pt-16 lg:pt-20 pb-16 lg:pb-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-7 flex flex-col gap-7 sm:gap-9">
            <span className="reveal reveal-2 font-mono text-[11px] sm:text-xs uppercase tracking-[0.3em] text-safety">
              ▌ Florida solar R&amp;R · for roofers
            </span>

            <h1 className="reveal reveal-3 font-display font-black uppercase text-[3.25rem] sm:text-7xl lg:text-8xl xl:text-[9rem] leading-[0.82] tracking-tight">
              <span className="block">Florida&apos;s solar</span>
              <span className="block text-safety">removal &amp; re-install</span>
              <span className="block">crew for roofers.</span>
            </h1>

            <p className="reveal reveal-4 text-base sm:text-lg lg:text-xl text-bone/75 max-w-xl leading-relaxed">
              Licensed, insured, fast. We pull the panels before your reroof
              and reset them after — without touching your customer
              relationship.
            </p>

            <div className="reveal reveal-5 flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-stretch pt-1">
              <a
                href="#book"
                className="group inline-flex items-center justify-between gap-4 h-14 pl-7 pr-5 rounded-none bg-safety hover:bg-safety-hot text-navy-deep font-display font-bold tracking-[0.18em] uppercase text-base transition-colors w-full sm:w-auto"
              >
                <span>Book a call</span>
                <ArrowUpRight
                  className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={2.25}
                  aria-hidden
                />
              </a>
              <PhoneLink variant="cta" className="h-14" />
            </div>

            <dl className="reveal reveal-6 mt-2 grid grid-cols-3 gap-x-6 max-w-md border-t border-bone/10 pt-5 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-bone/55">
              <div className="flex flex-col gap-1">
                <dt className="text-bone/35">License</dt>
                <dd className="text-bone/80">EC13013240</dd>
              </div>
              <div className="flex flex-col gap-1">
                <dt className="text-bone/35">Coverage</dt>
                <dd className="text-bone/80">Statewide FL</dd>
              </div>
              <div className="flex flex-col gap-1">
                <dt className="text-bone/35">Insured</dt>
                <dd className="text-bone/80">Fully</dd>
              </div>
            </dl>
          </div>

          <div className="reveal reveal-4 lg:col-span-5 relative w-full aspect-[4/5] sm:aspect-[5/4] lg:aspect-auto lg:min-h-[560px] lg:mt-2">
            <CornerBrackets size={5} />
            <div className="absolute inset-3 sm:inset-4 bg-navy-soft/40 overflow-hidden">
              <Image
                src="/jobs/hero-solar-aerial.jpg"
                alt="Aerial view of a Florida residential solar array — black panels on a tile roof, pool and lakefront alongside."
                fill
                priority
                sizes="(min-width: 1024px) 42vw, (min-width: 640px) 92vw, 100vw"
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-tr from-navy-deep/40 via-transparent to-transparent"
              />
            </div>

            <span
              aria-hidden
              className="absolute -top-2 left-3 sm:left-4 px-2 py-0.5 bg-navy text-safety font-mono text-[10px] uppercase tracking-[0.3em] z-10"
            >
              Slot · Hero
            </span>

            <span
              aria-hidden
              className="absolute -bottom-2 right-3 sm:right-4 px-2 py-0.5 bg-navy text-bone/70 font-mono text-[10px] uppercase tracking-[0.3em] z-10"
            >
              Aerial · FL
            </span>
          </div>
        </div>
      </div>

      <div className="relative border-y border-bone/10 bg-navy-deep/60">
        <div className="marquee py-3">
          <div className="marquee__track">
            <TickerRow />
            <TickerRow aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
}

function TickerRow({ "aria-hidden": ariaHidden }: { "aria-hidden"?: boolean }) {
  return (
    <ul
      aria-hidden={ariaHidden}
      className="flex shrink-0 items-center gap-10 pr-10 font-mono text-[11px] uppercase tracking-[0.3em] text-bone/45"
    >
      {TICKER_FACTS.map((fact, i) => (
        <li key={`${fact}-${i}`} className="flex items-center gap-10 shrink-0">
          <span>{fact}</span>
          <span aria-hidden className="text-safety/60">
            ◆
          </span>
        </li>
      ))}
    </ul>
  );
}

// ─── TODO list (Slice 1) ─────────────────────────────────────────────────
//  - Set NEXT_PUBLIC_BUSINESS_PHONE in .env.local; PhoneLink auto-activates.
//  - The H1 keeps the ampersand "&" per scaffolding spec; if you'd rather it
//    spell "and" to match the wordmark, swap one block — flagged for review.
