"use client";

// "Let's talk." — intro-call booking, six fields, on bone. Hairline bottom-
// borders for inputs (no boxes), mono numbered labels with safety-orange
// prefixes, big slab submit. Per project CLAUDE.md there is no <form> element
// here: state lives in React, validation runs through the shared zod schema,
// submit posts JSON to /api/book. Idle → submitting → success state machine
// replaces the form with a corner-bracketed "GOT IT." block showing the
// requested meeting date. Resend/GCal failures never reach the user — they're
// absorbed by the route handler.

import { useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { CornerBrackets } from "@/components/shared/CornerBrackets";
import {
  BookingSchema,
  emptyBookingFormValues,
  type BookingFormValues,
} from "@/lib/schema";

type SubmitState =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success"; date: string }
  | { kind: "error"; message: string };

type FieldErrors = Partial<Record<keyof BookingFormValues, string>>;

type FieldConfig = {
  name: keyof BookingFormValues;
  code: string;
  label: string;
  type: "text" | "tel" | "email" | "date" | "textarea";
  placeholder?: string;
  inputMode?: "text" | "tel" | "email";
  autoComplete?: string;
  required?: boolean;
  fullWidth?: boolean;
};

function todayYmd(): string {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

const FIELDS: ReadonlyArray<FieldConfig> = [
  {
    name: "company",
    code: "01",
    label: "Company",
    type: "text",
    placeholder: "Your roofing company",
    autoComplete: "organization",
    required: true,
  },
  {
    name: "name",
    code: "02",
    label: "Your name",
    type: "text",
    placeholder: "Your name",
    autoComplete: "name",
    required: true,
  },
  {
    name: "phone",
    code: "03",
    label: "Phone",
    type: "tel",
    placeholder: "(555) 123-4567",
    inputMode: "tel",
    autoComplete: "tel",
    required: true,
  },
  {
    name: "email",
    code: "04",
    label: "Email",
    type: "email",
    placeholder: "you@yourroofing.com",
    inputMode: "email",
    autoComplete: "email",
    required: true,
  },
  {
    name: "meetingDate",
    code: "05",
    label: "Preferred date",
    type: "date",
    required: true,
  },
  {
    name: "notes",
    code: "06",
    label: "Anything we should know?",
    type: "textarea",
    placeholder: "Current jobs, target volume, what you're hoping to figure out on the call.",
    fullWidth: true,
  },
];

function prettyDate(ymd: string): string {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(ymd)) return ymd || "soon";
  const [y, m, d] = ymd.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}

export function BookCallForm() {
  const [values, setValues] = useState<BookingFormValues>(emptyBookingFormValues);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitState, setSubmitState] = useState<SubmitState>({ kind: "idle" });

  const photoSmsRaw = process.env.NEXT_PUBLIC_PHOTO_SMS_NUMBER;
  const photoSms = photoSmsRaw && photoSmsRaw.length > 0 ? photoSmsRaw : null;

  function handleChange<K extends keyof BookingFormValues>(
    field: K,
    value: BookingFormValues[K],
  ) {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  }

  async function handleSubmit() {
    setSubmitState({ kind: "submitting" });
    setErrors({});

    const parsed = BookingSchema.safeParse(values);
    if (!parsed.success) {
      const flat = parsed.error.flatten().fieldErrors;
      const next: FieldErrors = {};
      for (const [key, msgs] of Object.entries(flat)) {
        if (msgs && msgs[0]) next[key as keyof BookingFormValues] = msgs[0];
      }
      setErrors(next);
      setSubmitState({ kind: "idle" });
      return;
    }

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        if (data?.fieldErrors) {
          const next: FieldErrors = {};
          for (const [key, msgs] of Object.entries(
            data.fieldErrors as Record<string, string[] | undefined>,
          )) {
            if (msgs && msgs[0]) next[key as keyof BookingFormValues] = msgs[0];
          }
          setErrors(next);
          setSubmitState({ kind: "idle" });
          return;
        }
        throw new Error(
          typeof data?.error === "string" ? data.error : `Submit failed (${res.status})`,
        );
      }

      setSubmitState({ kind: "success", date: parsed.data.meetingDate });
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Couldn't reach the server.";
      setSubmitState({ kind: "error", message });
    }
  }

  function handleReset() {
    setValues(emptyBookingFormValues);
    setErrors({});
    setSubmitState({ kind: "idle" });
  }

  const isSubmitting = submitState.kind === "submitting";
  const isSuccess = submitState.kind === "success";
  const submitError = submitState.kind === "error" ? submitState.message : null;
  const minDate = todayYmd();

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
            Pick a date. We&apos;ll send back a calendar invite.
          </p>
        </div>

        <div className="relative mt-12 sm:mt-16">
          <CornerBrackets size={6} colorClassName="border-safety/55" />

          {isSuccess ? (
            <SuccessPanel date={submitState.date} onReset={handleReset} />
          ) : (
            <div className="px-5 sm:px-8 lg:px-10 py-10 sm:py-12 lg:py-14">
              <div className="flex items-center gap-4 mb-10">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/40 shrink-0">
                  Intake / 06 fields
                </span>
                <div className="flex-1 h-px bg-ink/15" />
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/40 shrink-0">
                  ≈ 30 min
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7 sm:gap-y-9">
                {FIELDS.map((field) => (
                  <Field
                    key={field.name}
                    config={field}
                    value={values[field.name]}
                    error={errors[field.name]}
                    disabled={isSubmitting}
                    minDate={field.type === "date" ? minDate : undefined}
                    onChange={(v) => handleChange(field.name, v)}
                  />
                ))}
              </div>

              {submitError && (
                <div
                  role="alert"
                  className="mt-8 border border-red-500/40 bg-red-500/5 px-4 py-3 font-mono text-xs uppercase tracking-[0.2em] text-red-700"
                >
                  ⚠ {submitError}
                </div>
              )}

              <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                <p className="text-sm italic text-steel max-w-md leading-relaxed">
                  Already got photos? Text them to{" "}
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

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="group inline-flex items-center justify-between gap-4 h-14 pl-7 pr-5 rounded-none bg-safety hover:bg-safety-hot text-navy-deep font-display font-bold tracking-[0.18em] uppercase text-base transition-colors w-full sm:w-auto disabled:opacity-60 disabled:cursor-wait"
                >
                  <span>{isSubmitting ? "Sending…" : "Book it"}</span>
                  <ArrowUpRight
                    className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={2.25}
                    aria-hidden
                  />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

type FieldProps = {
  config: FieldConfig;
  value: string;
  error?: string;
  disabled?: boolean;
  minDate?: string;
  onChange: (value: string) => void;
};

function Field({ config, value, error, disabled, minDate, onChange }: FieldProps) {
  const { name, code, label, type, placeholder, inputMode, autoComplete, required, fullWidth } =
    config;

  const labelColor = error ? "text-red-700" : "text-ink/55 group-focus-within:text-safety";
  const borderColor = error
    ? "border-red-500/70"
    : "border-ink/20 group-focus-within:border-safety";

  const inputClasses =
    "block w-full bg-transparent border-0 border-b py-2 px-0 text-base sm:text-lg text-ink placeholder:text-ink/30 focus:outline-none focus:ring-0 transition-colors disabled:opacity-60";

  return (
    <div className={`group flex flex-col gap-1.5 ${fullWidth ? "sm:col-span-2" : ""}`}>
      <label
        htmlFor={`f-${name}`}
        className={`font-mono text-[10px] uppercase tracking-[0.3em] flex items-center gap-2 transition-colors ${labelColor}`}
      >
        <span className="text-safety">{code}</span>
        <span>/</span>
        <span>{label}</span>
        {required && <span aria-hidden className="text-safety/60">·</span>}
      </label>

      {type === "textarea" ? (
        <textarea
          id={`f-${name}`}
          name={name}
          rows={3}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${name}-err` : undefined}
          onChange={(e) => onChange(e.target.value)}
          className={`${inputClasses} resize-none ${borderColor}`}
        />
      ) : (
        <input
          id={`f-${name}`}
          name={name}
          type={type}
          inputMode={inputMode}
          autoComplete={autoComplete}
          placeholder={placeholder}
          min={type === "date" ? minDate : undefined}
          value={value}
          disabled={disabled}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${name}-err` : undefined}
          onChange={(e) => onChange(e.target.value)}
          className={`${inputClasses} ${borderColor}`}
        />
      )}

      {error && (
        <p
          id={`${name}-err`}
          className="font-mono text-[10px] uppercase tracking-[0.25em] text-red-700"
        >
          ⚠ {error}
        </p>
      )}
    </div>
  );
}

function SuccessPanel({ date, onReset }: { date: string; onReset: () => void }) {
  return (
    <div className="relative px-5 sm:px-8 lg:px-10 py-14 sm:py-20 lg:py-24 flex flex-col items-start gap-5">
      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-safety inline-flex items-center gap-2">
        <CheckCircle2 className="h-4 w-4" strokeWidth={2} aria-hidden />
        Call booked
      </span>

      <h3 className="font-display font-black text-6xl sm:text-7xl lg:text-8xl text-navy uppercase tracking-tight leading-[0.9]">
        Got it.
      </h3>

      <p className="text-base sm:text-lg text-ink/75 leading-relaxed max-w-2xl">
        Calendar invite on the way. Talk to you on{" "}
        <span className="font-medium text-navy">{prettyDate(date)}</span>.
        If you don&apos;t see it within an hour, check spam — or text us and
        we&apos;ll resend.
      </p>

      <button
        type="button"
        onClick={onReset}
        className="mt-4 font-mono text-[10px] uppercase tracking-[0.3em] text-ink/50 hover:text-safety transition-colors"
      >
        ↺ Book another call
      </button>
    </div>
  );
}

// ─── TODO list (Slice 7) ─────────────────────────────────────────────────
//  - Set RESEND_API_KEY in .env.local + verify domain on resend.com.
//  - Set GOOGLE_SERVICE_ACCOUNT_EMAIL + GOOGLE_SERVICE_ACCOUNT_KEY (base64
//    or raw JSON) + GOOGLE_CALENDAR_ID. Calendar must be shared with the
//    service account email with "Make changes to events" permission.
//  - Workspace policy may block service-account external invites — if so the
//    prospect's auto-invite won't fire and they'll need a manual one from
//    NOTIFY_EMAIL_PRIMARY's inbox.
//  - Set NEXT_PUBLIC_PHOTO_SMS_NUMBER in .env.local; replaces the [SMS · TBD]
//    pill in the bottom note.
//  - Test one end-to-end submission once envs are live.
