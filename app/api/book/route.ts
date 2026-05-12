// POST /api/book — receives a JSON-encoded booking payload, validates with
// the shared zod schema, then fires Resend email + GCal tentative event in
// parallel. Per spec: if either downstream call fails, log it server-side
// but still return ok. Failure to deliver an email or drop a calendar event
// shouldn't punish the roofer's UX.

import { NextResponse } from "next/server";
import { BookingSchema } from "@/lib/schema";
import { sendBookingEmail } from "@/lib/resend";
import { createMeetingEvent } from "@/lib/gcal";

export const runtime = "nodejs";

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Body must be JSON." },
      { status: 400 },
    );
  }

  const parsed = BookingSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: "Validation failed.",
        fieldErrors: parsed.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  const booking = parsed.data;

  const [emailResult, calResult] = await Promise.allSettled([
    sendBookingEmail(booking),
    createMeetingEvent(booking),
  ]);

  if (emailResult.status === "rejected") {
    console.error("[/api/book] Resend failed:", emailResult.reason);
  }
  if (calResult.status === "rejected") {
    console.error("[/api/book] GCal failed:", calResult.reason);
  }

  return NextResponse.json({ ok: true });
}
