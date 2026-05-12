// Hero section — first thing a roofer sees. Mobile-first: stacked H1 / sub / CTAs / image.
// On md+: two-column grid with the photo placeholder on the right.

import { PhoneLink } from "@/components/shared/PhoneLink";

export function Hero() {
  return (
    <section className="bg-navy text-bone">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 lg:pt-24 pb-12 sm:pb-20 lg:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
          <div className="flex flex-col gap-6 sm:gap-8">
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tight">
              Florida&apos;s solar detach &amp; reset crew for roofers.
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-bone/80 max-w-xl leading-relaxed">
              Licensed, insured, fast. We pull the panels before your reroof
              and reset them after — without touching your customer
              relationship.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-center pt-2">
              <a
                href="#quote"
                className="inline-flex items-center justify-center h-12 px-7 rounded-md bg-safety hover:bg-safety-hot text-navy-deep font-bold tracking-wide transition-colors w-full sm:w-auto"
              >
                Get a Quote
              </a>
              <PhoneLink variant="cta" />
            </div>
          </div>

          {/* TODO(slice-1): replace this placeholder with a real Raymond_DNR photo
              once named — e.g. /public/jobs/raymond-during.jpg. Per project rules:
              no stock photos, no fillers. */}
          <div className="relative aspect-[4/3] sm:aspect-[5/4] md:aspect-[4/5] lg:aspect-[5/6] w-full bg-navy-soft rounded-lg ring-1 ring-bone/10 overflow-hidden flex items-center justify-center">
            <div className="text-center px-6 text-steel">
              <p className="font-display text-3xl text-bone/40 tracking-wide">
                JOBSITE PHOTO
              </p>
              <p className="mt-2 text-xs uppercase tracking-widest text-bone/30">
                Raymond_DNR — pending /public/jobs/
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── TODO list (Slice 1) ─────────────────────────────────────────────────
//  - Add Raymond_DNR hero photo to /public/jobs/ and swap the placeholder div.
//  - Set NEXT_PUBLIC_BUSINESS_PHONE in .env.local; PhoneLink will auto-activate.
//  - Decide whether the H1 should keep the ampersand "&" (current per spec) or
//    spell "and" to match the wordmark "DETACH AND RESET" — currently mismatched
//    by design, defer to user review.
