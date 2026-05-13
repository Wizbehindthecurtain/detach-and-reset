// Resend client + sendPortfolioReviewEmail helper. Ships a clean plaintext
// summary of the inbound portfolio-review request to TJ (primary) with
// Operations on cc. Throws on failure; the route handler wraps in
// Promise.allSettled so a Resend outage never blocks the user-facing
// iframe reveal.

import { Resend } from "resend";
import { env } from "./env";
import type { PortfolioReviewInput } from "./portfolio-review-schema";

function formatBody(b: PortfolioReviewInput): string {
  return [
    `Firm:    ${b.firm}`,
    `Contact: ${b.name}`,
    "",
    "Portfolio scope:",
    b.scope.trim() || "(none provided)",
    "",
    "Form submitted from /enterprise.",
    "Booking iframe revealed to user; calendar invite (when booked) will arrive separately.",
  ].join("\n");
}

export async function sendPortfolioReviewEmail(
  b: PortfolioReviewInput,
): Promise<void> {
  const resend = new Resend(env.RESEND_API_KEY);
  const subject = `Portfolio review requested: ${b.firm}`;

  const { error } = await resend.emails.send({
    from: env.QUOTE_FROM_EMAIL,
    to: [env.NOTIFY_TJ_EMAIL],
    cc: [env.NOTIFY_OPERATIONS_EMAIL],
    subject,
    text: formatBody(b),
  });

  if (error) {
    throw new Error(`Resend send failed: ${error.message ?? "unknown"}`);
  }
}
