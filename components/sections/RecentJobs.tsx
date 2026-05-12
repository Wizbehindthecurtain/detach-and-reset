// "Recent jobs" — field-log gallery of three frames from a single job:
// before / during / after. Each photo slot gets a slate tag top-left, corner
// brackets, and a mono caption below. Until the real Raymond_DNR files land
// in /public/jobs/, the `pending: true` flag renders a bracketed asset-bay
// placeholder; flip to false and the next/image takes over. 3-up grid on
// md+, single-column on mobile. Native lazy-loading via next/image.

import Image from "next/image";
import { CornerBrackets } from "@/components/shared/CornerBrackets";

type Job = {
  slot: string;
  stage: string;
  filename: string;
  alt: string;
  /** Flip to false once the file is dropped in /public/jobs/. */
  pending: boolean;
};

const JOB_LOCATION = "Raymond, FL";

const JOBS: ReadonlyArray<Job> = [
  {
    slot: "R-01",
    stage: "Before",
    filename: "raymond-before.jpg",
    alt: "Raymond, FL — solar array on roof before detach.",
    pending: false,
  },
  {
    slot: "R-02",
    stage: "During",
    filename: "raymond-during.jpg",
    alt: "Raymond, FL — panels detached, roof clear for reroof.",
    pending: false,
  },
  {
    slot: "R-03",
    stage: "After",
    filename: "raymond-after.jpg",
    alt: "Raymond, FL — solar reset on the new roof.",
    pending: false,
  },
];

export function RecentJobs() {
  return (
    <section
      id="recent-jobs"
      className="relative bg-navy text-bone overflow-hidden"
    >
      <div aria-hidden className="absolute inset-0 grid-bg opacity-40" />
      <span aria-hidden className="grain" />

      <div
        aria-hidden
        className="absolute top-0 right-0 h-px w-2/3 bg-gradient-to-l from-safety/40 via-safety/10 to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
        <div className="flex flex-col gap-4 max-w-3xl">
          <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.3em] text-safety">
            ▌ 05 / Field log
          </span>
          <h2 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-bone uppercase tracking-tight leading-[0.9]">
            Recent jobs.
          </h2>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-bone/45 mt-1">
            One job, three frames — {JOB_LOCATION}.
          </p>
        </div>

        <ul className="mt-14 sm:mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {JOBS.map(({ slot, stage, filename, alt, pending }) => (
            <li key={slot} className="group">
              <figure className="flex flex-col gap-4">
                <div className="relative aspect-[4/3] bg-navy-soft/30 overflow-hidden">
                  <CornerBrackets
                    size={5}
                    colorClassName="border-bone/30 group-hover:border-safety/80 transition-colors"
                  />

                  <div className="absolute top-3 left-3 z-10 flex items-center gap-2 bg-navy/85 backdrop-blur px-2 py-1">
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-safety">
                      {slot}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone/55">
                      {stage}
                    </span>
                  </div>

                  {pending ? (
                    <div className="absolute inset-0 hatched-light flex items-center justify-center">
                      <span aria-hidden className="grain" />
                      <div className="relative text-center px-6">
                        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone/35">
                          {"// PHOTO PENDING"}
                        </span>
                        <div className="mt-2 font-display font-black text-5xl sm:text-6xl text-bone/25 leading-none">
                          {slot}
                        </div>
                        <span className="mt-2 block font-mono text-[10px] uppercase tracking-[0.3em] text-bone/35">
                          {filename}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={`/jobs/${filename}`}
                      alt={alt}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  )}
                </div>

                <figcaption className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em]">
                  <span className="text-safety">{stage}</span>
                  <span aria-hidden className="text-steel">—</span>
                  <span className="text-bone/65">{JOB_LOCATION}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ─── TODO list (Slice 5) ─────────────────────────────────────────────────
//  - Drop the three Raymond_DNR photos into /public/jobs/ with names:
//      raymond-before.jpg
//      raymond-during.jpg
//      raymond-after.jpg
//    Then flip each JOBS[i].pending from true → false in the data array above.
//  - Confirm 4:3 landscape aspect crop works for the real photos; swap to
//    aspect-square or aspect-[3/2] if jobsite shots feel cramped.
//  - Per spec: no lightbox in v1. Add only if requested later.
