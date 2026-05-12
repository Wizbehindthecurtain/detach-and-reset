// Typed env loader. Lazy getters so the dev server boots before .env.local is filled in;
// each var only throws when read by code that actually needs it (e.g. /api/quote route).

type EnvKey =
  | "RESEND_API_KEY"
  | "NOTIFY_EMAIL_PRIMARY"
  | "NOTIFY_EMAIL_SECONDARY"
  | "QUOTE_FROM_EMAIL"
  | "GOOGLE_SERVICE_ACCOUNT_EMAIL"
  | "GOOGLE_SERVICE_ACCOUNT_KEY"
  | "GOOGLE_CALENDAR_ID"
  | "SITE_URL";

function read(key: EnvKey, fallback?: string): string {
  const v = process.env[key];
  if (v && v.length > 0) return v;
  if (fallback !== undefined) return fallback;
  throw new Error(`Missing required env var: ${key}`);
}

export const env = {
  get RESEND_API_KEY() {
    return read("RESEND_API_KEY");
  },
  get NOTIFY_EMAIL_PRIMARY() {
    return read("NOTIFY_EMAIL_PRIMARY", "jackson.mcinerney@4i.energy");
  },
  get NOTIFY_EMAIL_SECONDARY() {
    return read("NOTIFY_EMAIL_SECONDARY", "tj.nardini@4i.energy");
  },
  get QUOTE_FROM_EMAIL() {
    return read("QUOTE_FROM_EMAIL", "quotes@detachandreset.com");
  },
  get GOOGLE_SERVICE_ACCOUNT_EMAIL() {
    return read("GOOGLE_SERVICE_ACCOUNT_EMAIL");
  },
  get GOOGLE_SERVICE_ACCOUNT_KEY() {
    return read("GOOGLE_SERVICE_ACCOUNT_KEY");
  },
  get GOOGLE_CALENDAR_ID() {
    return read("GOOGLE_CALENDAR_ID");
  },
  get SITE_URL() {
    return read("SITE_URL", "https://detachandreset.com");
  },
};
