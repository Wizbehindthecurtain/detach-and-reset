// Google Calendar tentative meeting drop via service-account JWT auth. The
// service account email must be explicitly shared on the target calendar with
// "Make changes to events" permission. Workspace admins sometimes block
// service accounts from inviting external attendees — if so, the prospect's
// auto-invite won't fire and you'll need to send it manually from the email.
//
// The secret key can be passed in two shapes via GOOGLE_SERVICE_ACCOUNT_KEY:
//   1) base64-encoded JSON of the entire service-account key file
//   2) raw JSON with \n-escaped newlines
// We try (1) first, fall back to (2).

import { google } from "googleapis";
import { env } from "./env";
import type { BookingInput } from "./schema";

type ServiceAccountKey = {
  client_email: string;
  private_key: string;
};

function loadServiceAccountKey(): ServiceAccountKey {
  const raw = env.GOOGLE_SERVICE_ACCOUNT_KEY;
  let json: string;
  try {
    const decoded = Buffer.from(raw, "base64").toString("utf-8");
    JSON.parse(decoded);
    json = decoded;
  } catch {
    json = raw;
  }
  const parsed = JSON.parse(json) as Partial<ServiceAccountKey>;
  if (!parsed.private_key) {
    throw new Error("GOOGLE_SERVICE_ACCOUNT_KEY missing private_key field");
  }
  return {
    client_email: parsed.client_email ?? env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: parsed.private_key,
  };
}

function buildDescription(b: BookingInput): string {
  return [
    `Company: ${b.company}`,
    `Contact: ${b.name}`,
    `Phone:   ${b.phone}`,
    `Email:   ${b.email}`,
    "",
    "Anything we should know:",
    b.notes || "(nothing yet)",
  ].join("\n");
}

export async function createMeetingEvent(b: BookingInput): Promise<void> {
  const { client_email, private_key } = loadServiceAccountKey();

  const auth = new google.auth.JWT({
    email: client_email,
    key: private_key,
    scopes: ["https://www.googleapis.com/auth/calendar"],
  });

  const calendar = google.calendar({ version: "v3", auth });

  // 10:00 AM America/New_York on the requested date, 30-minute hold. Google
  // applies the timezone offset server-side so DST doesn't cause drift.
  const startDateTime = `${b.meetingDate}T10:00:00`;
  const endDateTime = `${b.meetingDate}T10:30:00`;

  const { status } = await calendar.events.insert({
    calendarId: env.GOOGLE_CALENDAR_ID,
    sendUpdates: "all",
    requestBody: {
      summary: `Intro Call: 4i Energy × ${b.company}`,
      description: buildDescription(b),
      start: { dateTime: startDateTime, timeZone: "America/New_York" },
      end: { dateTime: endDateTime, timeZone: "America/New_York" },
      status: "tentative",
      attendees: [
        { email: env.NOTIFY_EMAIL_PRIMARY },
        { email: env.NOTIFY_EMAIL_SECONDARY },
        { email: b.email },
      ],
    },
  });

  if (status < 200 || status >= 300) {
    throw new Error(`GCal insert failed with status ${status}`);
  }
}
