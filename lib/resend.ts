// Resend client + helper that ships a plaintext summary of an intro-call
// booking to NOTIFY_EMAIL_PRIMARY + NOTIFY_EMAIL_SECONDARY. Throws on failure;
// the API route wraps this in Promise.allSettled so a Resend outage never
// blocks the user-facing success state.

import { Resend } from "resend";
import { env } from "./env";
import type { BookingInput } from "./schema";

function formatBody(b: BookingInput): string {
  return [
    `Company:        ${b.company}`,
    `Contact:        ${b.name}`,
    `Phone:          ${b.phone}`,
    `Email:          ${b.email}`,
    `Requested date: ${b.meetingDate}`,
    "",
    "Anything we should know:",
    b.notes || "(nothing yet)",
  ].join("\n");
}

export async function sendBookingEmail(b: BookingInput): Promise<void> {
  const resend = new Resend(env.RESEND_API_KEY);
  const subject = `New intro call: ${b.company}`;

  const { error } = await resend.emails.send({
    from: env.QUOTE_FROM_EMAIL,
    to: [env.NOTIFY_EMAIL_PRIMARY, env.NOTIFY_EMAIL_SECONDARY],
    replyTo: b.email,
    subject,
    text: formatBody(b),
  });

  if (error) {
    throw new Error(`Resend send failed: ${error.message ?? "unknown"}`);
  }
}
