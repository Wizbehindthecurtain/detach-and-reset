// Footer — three columns on lg+, stacked on mobile. Navy-deep surface.
// Col 1: light Logo + brand tagline. Col 2: contact stack (phone, email,
// photo-SMS). Col 3: license + insurance + service area + parent-company
// line. Bottom strip with a copyright string keyed off the current year
// (computed at render — server component, so the year is the build year on
// production unless the page is dynamic).

import { Mail, Phone } from "lucide-react";
import { Logo } from "@/components/shared/Logo";

const CONTACT_EMAIL = "Operations@4i.energy";

export function Footer() {
  const year = new Date().getFullYear();

  const businessPhone = process.env.NEXT_PUBLIC_BUSINESS_PHONE;
  const businessPhoneSet =
    businessPhone && businessPhone.length > 0 ? businessPhone : null;

  const photoSms = process.env.NEXT_PUBLIC_PHOTO_SMS_NUMBER;
  const photoSmsSet = photoSms && photoSms.length > 0 ? photoSms : null;

  return (
    <footer className="relative bg-navy-deep text-bone overflow-hidden">
      <span aria-hidden className="grain opacity-50" />

      <div
        aria-hidden
        className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-safety/30 to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 lg:gap-16">
          {/* Col 1 — brand */}
          <div className="flex flex-col gap-5">
            <Logo variant="light" />
            <p className="text-sm sm:text-base text-bone/70 leading-relaxed max-w-xs">
              Florida&apos;s solar detach &amp; reset crew for roofers.
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone/40 mt-1">
              A 4i Energy Partners company
            </p>
          </div>

          {/* Col 2 — contact */}
          <div className="flex flex-col gap-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-safety">
              ▌ Contact
            </span>
            <ul className="flex flex-col gap-3">
              <li>
                {businessPhoneSet ? (
                  <a
                    href={`tel:${businessPhoneSet.replace(/[^\d+]/g, "")}`}
                    className="inline-flex items-center gap-3 text-bone hover:text-safety transition-colors"
                  >
                    <Phone className="h-4 w-4 shrink-0" aria-hidden />
                    <span className="font-mono text-sm tracking-wider">
                      {businessPhoneSet}
                    </span>
                  </a>
                ) : (
                  <span
                    className="inline-flex items-center gap-3 text-bone/55 cursor-not-allowed"
                    title="Set NEXT_PUBLIC_BUSINESS_PHONE in .env.local"
                  >
                    <Phone className="h-4 w-4 shrink-0" aria-hidden />
                    <span className="font-mono text-sm tracking-wider">
                      [ PHONE · TBD ]
                    </span>
                  </span>
                )}
              </li>

              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex items-center gap-3 text-bone hover:text-safety transition-colors"
                >
                  <Mail className="h-4 w-4 shrink-0" aria-hidden />
                  <span className="font-mono text-sm tracking-wider">
                    {CONTACT_EMAIL}
                  </span>
                </a>
              </li>

              <li>
                <div className="flex flex-col gap-1 pt-1">
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone/40">
                    Photos by SMS · Jackson
                  </span>
                  {photoSmsSet ? (
                    <a
                      href={`sms:${photoSmsSet.replace(/[^\d+]/g, "")}`}
                      className="font-mono text-sm tracking-wider text-bone hover:text-safety transition-colors"
                    >
                      {photoSmsSet}
                    </a>
                  ) : (
                    <span
                      className="font-mono text-sm tracking-wider text-bone/45"
                      title="Set NEXT_PUBLIC_PHOTO_SMS_NUMBER in .env.local"
                    >
                      [ SMS · TBD ]
                    </span>
                  )}
                </div>
              </li>
            </ul>
          </div>

          {/* Col 3 — license + coverage */}
          <div className="flex flex-col gap-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-safety">
              ▌ License &amp; coverage
            </span>
            <dl className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <dt className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone/40">
                  FL license
                </dt>
                <dd className="font-mono text-sm tracking-wider text-bone">
                  EC13013240
                </dd>
              </div>
              <div className="flex flex-col gap-1">
                <dt className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone/40">
                  Insurance
                </dt>
                <dd className="font-mono text-sm tracking-wider text-bone">
                  Fully insured
                </dd>
              </div>
              <div className="flex flex-col gap-1">
                <dt className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone/40">
                  Service area
                </dt>
                <dd className="font-mono text-sm tracking-wider text-bone">
                  Statewide Florida
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-14 sm:mt-20 pt-6 border-t border-bone/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-bone/40">
          <span>© {year} Detach and Reset · All rights reserved</span>
          <span>FL · EC13013240 · 4i Energy Partners</span>
        </div>
      </div>
    </footer>
  );
}
