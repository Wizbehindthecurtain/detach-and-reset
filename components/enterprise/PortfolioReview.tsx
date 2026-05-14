"use client";

// X. Portfolio review — qualification gate, then iframe. Three fields: name,
// firm, scope. Submit POSTs to /api/portfolio-review (emails TJ + Operations
// before iframe reveals). State machine: idle -> submitting -> success.
// On success, the form fades out and TJ's Google Appointment Schedule iframe
// fades in with a personalized welcome line. Falls back to a contact message
// if NEXT_PUBLIC_TJ_BOOKING_URL is unset.

import { useState } from "react";
import {
  PortfolioReviewSchema,
  emptyPortfolioReviewFormValues,
  type PortfolioReviewFormValues,
} from "@/lib/portfolio-review-schema";

type SubmitState =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success"; firm: string }
  | { kind: "error"; message: string };

type FieldErrors = Partial<Record<keyof PortfolioReviewFormValues, string>>;

export function PortfolioReview() {
  const [values, setValues] = useState<PortfolioReviewFormValues>(
    emptyPortfolioReviewFormValues,
  );
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitState, setSubmitState] = useState<SubmitState>({ kind: "idle" });

  const bookingUrl = process.env.NEXT_PUBLIC_TJ_BOOKING_URL;
  const hasBookingUrl = Boolean(bookingUrl && bookingUrl.length > 0);

  function handleChange<K extends keyof PortfolioReviewFormValues>(
    field: K,
    value: PortfolioReviewFormValues[K],
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

    const parsed = PortfolioReviewSchema.safeParse(values);
    if (!parsed.success) {
      const flat = parsed.error.flatten().fieldErrors;
      const next: FieldErrors = {};
      for (const [key, msgs] of Object.entries(flat)) {
        if (msgs && msgs[0]) next[key as keyof PortfolioReviewFormValues] = msgs[0];
      }
      setErrors(next);
      setSubmitState({ kind: "idle" });
      return;
    }

    try {
      const res = await fetch("/api/portfolio-review", {
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
            if (msgs && msgs[0]) next[key as keyof PortfolioReviewFormValues] = msgs[0];
          }
          setErrors(next);
          setSubmitState({ kind: "idle" });
          return;
        }
        throw new Error(
          typeof data?.error === "string" ? data.error : `Submit failed (${res.status})`,
        );
      }

      setSubmitState({ kind: "success", firm: parsed.data.firm });
    } catch (err) {
      const message = err instanceof Error ? err.message : "Couldn't reach the server.";
      setSubmitState({ kind: "error", message });
    }
  }

  const isSubmitting = submitState.kind === "submitting";
  const isSuccess = submitState.kind === "success";
  const submitError = submitState.kind === "error" ? submitState.message : null;

  return (
    <section id="portfolio-review" className="bg-paper">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
        <div className="text-center max-w-3xl mx-auto">
          <p className="font-outfit text-[10px] uppercase tracking-[0.4em] text-brass font-light">
            X · Portfolio review
          </p>
          <h2 className="mt-6 font-cormorant text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-deep-ink font-light leading-[1.05] tracking-[-0.02em]">
            Thirty minutes <em className="italic font-normal text-brass">across your portfolio.</em>
          </h2>
          <p className="mt-8 mx-auto max-w-2xl font-outfit font-light text-base sm:text-lg text-muted-warm leading-[1.7]">
            A short note about your portfolio scope, and TJ Nardini will walk you through where solar detach &amp; reset fits across your platform.
          </p>
        </div>

        <div className="mt-14 sm:mt-20">
          {isSuccess ? (
            <SuccessPanel firm={submitState.firm} bookingUrl={bookingUrl ?? null} hasBookingUrl={hasBookingUrl} />
          ) : (
            <div className="max-w-3xl mx-auto">
              <Field
                label="Your name"
                code="i"
                name="name"
                value={values.name}
                error={errors.name}
                disabled={isSubmitting}
                required
                onChange={(v) => handleChange("name", v)}
              />
              <Field
                label="Firm or platform"
                code="ii"
                name="firm"
                value={values.firm}
                error={errors.firm}
                disabled={isSubmitting}
                required
                onChange={(v) => handleChange("firm", v)}
              />
              <Field
                label="Portfolio scope"
                hint="Optional · # portcos, primary geographies, current solar-encountered job volume"
                code="iii"
                name="scope"
                value={values.scope}
                error={errors.scope}
                disabled={isSubmitting}
                textarea
                onChange={(v) => handleChange("scope", v)}
              />

              {submitError && (
                <p role="alert" className="mt-8 font-outfit text-xs italic text-red-800 text-center">
                  {submitError}
                </p>
              )}

              <div className="mt-12 sm:mt-14 flex justify-center">
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="group inline-flex items-center gap-3 px-10 py-4 border-[0.5px] border-brass hover:bg-brass/8 transition-colors disabled:opacity-60 disabled:cursor-wait"
                >
                  <span className="font-outfit text-[11px] uppercase tracking-[0.4em] text-deep-ink font-light">
                    {isSubmitting ? "Sending…" : "Continue to scheduling"}
                  </span>
                  <span aria-hidden className="font-cormorant italic text-brass text-base leading-none">
                    →
                  </span>
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
  label: string;
  code: string;
  name: string;
  value: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  hint?: string;
  textarea?: boolean;
  onChange: (value: string) => void;
};

function Field({
  label,
  code,
  name,
  value,
  error,
  disabled,
  required,
  hint,
  textarea,
  onChange,
}: FieldProps) {
  const borderColor = error ? "border-red-800/60" : "border-brass/40 group-focus-within:border-brass";
  const labelColor = error ? "text-red-800" : "text-muted-warm group-focus-within:text-brass";

  const inputClasses =
    "block w-full bg-transparent border-0 border-b-[0.5px] py-3 px-0 font-outfit font-light text-base sm:text-lg text-deep-ink placeholder:text-muted-warm/40 focus:outline-none focus:ring-0 transition-colors disabled:opacity-60";

  return (
    <div className="group mt-8 first:mt-0">
      <label
        htmlFor={`pr-${name}`}
        className={`flex items-baseline gap-3 transition-colors ${labelColor}`}
      >
        <span className="font-cormorant italic text-brass text-base font-normal">
          {code}.
        </span>
        <span className="font-cormorant italic text-base sm:text-lg font-normal">
          {label}
        </span>
        {required && (
          <span aria-hidden className="font-outfit text-[9px] uppercase tracking-[0.3em] text-brass/60 font-light">
            req.
          </span>
        )}
      </label>

      {hint && (
        <p className="mt-1 font-outfit text-[10px] uppercase tracking-[0.25em] text-muted-warm/70 font-light">
          {hint}
        </p>
      )}

      {textarea ? (
        <textarea
          id={`pr-${name}`}
          name={name}
          rows={3}
          value={value}
          disabled={disabled}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${name}-err` : undefined}
          onChange={(e) => onChange(e.target.value)}
          className={`mt-3 resize-none ${inputClasses} ${borderColor}`}
        />
      ) : (
        <input
          id={`pr-${name}`}
          name={name}
          type="text"
          value={value}
          disabled={disabled}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${name}-err` : undefined}
          onChange={(e) => onChange(e.target.value)}
          className={`mt-3 ${inputClasses} ${borderColor}`}
        />
      )}

      {error && (
        <p
          id={`${name}-err`}
          className="mt-2 font-outfit text-[10px] italic text-red-800 font-light"
        >
          {error}
        </p>
      )}
    </div>
  );
}

function SuccessPanel({
  firm,
  bookingUrl,
  hasBookingUrl,
}: {
  firm: string;
  bookingUrl: string | null;
  hasBookingUrl: boolean;
}) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center">
        <p className="font-outfit text-[10px] uppercase tracking-[0.4em] text-brass font-light">
          Received
        </p>
        <h3 className="mt-4 font-cormorant text-2xl sm:text-3xl lg:text-4xl text-deep-ink font-light italic leading-tight">
          Welcome, <span className="not-italic text-brass font-normal">{firm}</span>.
        </h3>
        <p className="mt-3 font-outfit text-sm sm:text-base text-muted-warm font-light">
          Pick a thirty-minute window below — TJ will be on the other end.
        </p>
      </div>

      <div aria-hidden className="mx-auto mt-10 w-8 h-px bg-brass" />

      <div className="mt-10">
        {hasBookingUrl ? (
          <iframe
            src={bookingUrl!}
            title="Book a portfolio review with TJ Nardini"
            loading="lazy"
            className="block w-full h-[720px] sm:h-[680px] lg:h-[660px] border-0 bg-white"
          />
        ) : (
          <div className="bg-ivory border-[0.5px] border-brass/40 px-8 sm:px-12 py-12 sm:py-16 text-center">
            <p className="font-cormorant italic text-xl sm:text-2xl text-deep-ink font-light leading-[1.5]">
              The calendar will appear here once TJ&apos;s scheduling link is wired.
            </p>
            <p className="mt-4 font-outfit text-sm text-muted-warm font-light">
              In the meantime, your note has reached the operations inbox — expect a reply within one business day.
            </p>
            <p className="mt-2 font-outfit text-[10px] uppercase tracking-[0.4em] text-brass font-light">
              NEXT_PUBLIC_TJ_BOOKING_URL · pending
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
