// POST /api/portfolio-review — qualification form intake from the /enterprise
// page. Validates with the shared zod schema, then ships a plaintext summary
// to TJ + Operations via Resend. Returns ok regardless of Resend outcome
// (failures log server-side; user still sees the iframe reveal) per the
// existing pattern from the roofer /api/book route.

import { NextResponse } from "next/server";
import { PortfolioReviewSchema } from "@/lib/portfolio-review-schema";
import { sendPortfolioReviewEmail } from "@/lib/resend";

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

  const parsed = PortfolioReviewSchema.safeParse(body);
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

  try {
    await sendPortfolioReviewEmail(parsed.data);
  } catch (err) {
    console.error("[/api/portfolio-review] Resend failed:", err);
    // Continue — user still gets the iframe reveal; missing email is a
    // server-side ops issue, not a user-facing failure.
  }

  return NextResponse.json({ ok: true });
}
