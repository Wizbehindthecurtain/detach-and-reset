// Book-a-call — Google Calendar Appointment Schedules iframe wrapped in the
// industrial-editorial frame. Google handles real availability, time-slot
// picking, prospect intel capture (name/email/notes), confirmation email, and
// calendar invite delivery. No custom form, no /api/book route, no service-
// account auth, no Workspace external-invite policy to dodge.

import { CornerBrackets } from "@/components/shared/CornerBrackets";

// Google Appointment Schedules embed URL. Update if the schedule is recreated.
const SCHEDULE_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2D8f0y7I-CMQdE8er1oI-WHXAgfKa4v899iNjhhct5FkNRONpSP8i9f8-WBLT3i4s61yS2UkUC?gv=true";

export function BookCallSection() {
  const photoSmsRaw = process.env.NEXT_PUBLIC_PHOTO_SMS_NUMBER;
  const photoSms = photoSmsRaw && photoSmsRaw.length > 0 ? photoSmsRaw : null;

  return (
    <section id="book" className="relative bg-bone text-ink overflow-hidden">
      <span aria-hidden className="grain opacity-40" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
        <div className="flex flex-col gap-4 max-w-3xl">
          <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.3em] text-safety">
            ▌ 07 / Book a call
          </span>
          <h2 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-navy uppercase tracking-tight leading-[0.9]">
            Let&apos;s talk.
          </h2>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink/45 mt-1">
            Pick a slot. Calendar invite goes out automatically.
          </p>
        </div>

        <div className="relative mt-12 sm:mt-16">
          <CornerBrackets size={6} colorClassName="border-safety/55" />

          <div className="flex items-center gap-4 px-5 sm:px-8 lg:px-10">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/40 shrink-0">
              Live availability
            </span>
            <div className="flex-1 h-px bg-ink/15" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/40 shrink-0">
              Google Calendar
            </span>
          </div>

          <div className="px-5 sm:px-8 lg:px-10 py-8 sm:py-10">
            <iframe
              src={SCHEDULE_URL}
              title="Book a call with Removal and Re-Install"
              loading="lazy"
              className="block w-full h-[720px] sm:h-[680px] lg:h-[660px] border-0 bg-white"
            />
          </div>

          <div className="flex items-center gap-4 px-5 sm:px-8 lg:px-10">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/40 shrink-0">
              Confirmation + invite
            </span>
            <div className="flex-1 h-px bg-ink/15" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/40 shrink-0">
              Automatic
            </span>
          </div>
        </div>

        <p className="mt-10 sm:mt-12 text-sm italic text-steel max-w-2xl leading-relaxed">
          Already got photos? Text Jackson at{" "}
          {photoSms ? (
            <a
              href={`sms:${photoSms.replace(/[^\d+]/g, "")}`}
              className="not-italic font-mono uppercase tracking-wider text-navy hover:text-safety transition-colors"
            >
              {photoSms}
            </a>
          ) : (
            <span
              className="not-italic font-mono uppercase tracking-wider text-ink/45"
              title="Set NEXT_PUBLIC_PHOTO_SMS_NUMBER in .env.local"
            >
              [ SMS · TBD ]
            </span>
          )}
          . We&apos;ll have eyes on them before the call.
        </p>
      </div>
    </section>
  );
}
