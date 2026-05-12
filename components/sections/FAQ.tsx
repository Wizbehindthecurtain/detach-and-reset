// "Common questions" — six contractor-tone Q&A on bone. Built on shadcn's
// Accordion (Radix under the hood) with the chevron stripped out in favor of
// a Plus that rotates to an X on open. Each row reads like a service-manual
// entry: orange mono Q / NN code on the left, display-font question in the
// middle, toggle on the right; answer drops below in plex sans. Full-width
// hairline rules between items. Single-open behavior (`type="single"`,
// `collapsible`) keeps the page tidy.

import { Plus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FaqEntry = {
  code: string;
  question: string;
  answer: string;
};

const FAQS: ReadonlyArray<FaqEntry> = [
  {
    code: "01",
    question: "Who calls the homeowner?",
    answer:
      "You do, or we do — your call. Most roofers want us to handle scheduling directly with the homeowner once the job is signed. Either works.",
  },
  {
    code: "02",
    question: "What if a panel breaks during detach?",
    answer:
      "We're insured. If we break it, we replace it. Same for racking and conduit.",
  },
  {
    code: "03",
    question: "How fast can you schedule?",
    answer:
      "Usually 3 days to a week from a signed quote. Rush jobs, call us.",
  },
  {
    code: "04",
    question: "Do you work with the homeowner's solar company?",
    answer:
      "We hold installer certifications for every major manufacturer of solar materials. We don't need to loop in their original company.",
  },
  {
    code: "05",
    question: "Will the roof leak? Do you offer a warranty?",
    answer:
      "No — the roof very rarely leaks. But if it ever does, we offer a warranty that typically runs about as long as the roofing warranty you carry. Your customers stay covered on both.",
  },
  {
    code: "06",
    question: "What if the system was DIY or unpermitted?",
    answer:
      "We'll still take a look. Sometimes it means a small fix-up before we can reset.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative bg-bone text-ink overflow-hidden">
      <span aria-hidden className="grain opacity-40" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
        <div className="flex flex-col gap-4 max-w-3xl">
          <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.3em] text-safety">
            ▌ 06 / FAQ
          </span>
          <h2 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-navy uppercase tracking-tight leading-[0.9]">
            Common questions.
          </h2>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink/45 mt-1">
            Six things every roofer asks.
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          defaultValue="q01"
          className="mt-14 sm:mt-20 border-t border-ink/15"
        >
          {FAQS.map(({ code, question, answer }) => (
            <AccordionItem
              key={code}
              value={`q${code}`}
              className="border-b border-ink/15"
            >
              <AccordionTrigger className="group/trigger py-6 sm:py-8 hover:bg-ink/[0.015] transition-colors">
                <div className="flex items-baseline gap-4 sm:gap-6 flex-1 min-w-0 pr-4">
                  <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.3em] text-safety shrink-0 pt-1">
                    Q / {code}
                  </span>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-navy uppercase tracking-tight leading-[1.05] flex-1 group-hover/trigger:text-navy-deep transition-colors">
                    {question}
                  </h3>
                </div>
                <span className="relative shrink-0 w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-navy">
                  <Plus
                    className="h-6 w-6 sm:h-7 sm:w-7 transition-transform duration-300 group-data-[state=open]/trigger:rotate-45 group-hover/trigger:text-safety"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="pl-0 sm:pl-[5.5rem] pr-8 sm:pr-16 pb-7 sm:pb-9 max-w-3xl">
                  <p className="text-base sm:text-lg text-ink/75 leading-relaxed">
                    {answer}
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
