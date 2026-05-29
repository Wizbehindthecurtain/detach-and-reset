// Typed env loader — lightweight, scoped to portfolio-review pipeline only.
// Lazy getters so the dev server boots before .env.local is filled in;
// each var only throws when read by code that actually needs it.

type EnvKey =
  | "RESEND_API_KEY"
  | "NOTIFY_TJ_EMAIL"
  | "NOTIFY_OPERATIONS_EMAIL"
  | "QUOTE_FROM_EMAIL";

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
  get NOTIFY_TJ_EMAIL() {
    return read("NOTIFY_TJ_EMAIL", "tj.nardini@4i.energy");
  },
  get NOTIFY_OPERATIONS_EMAIL() {
    return read("NOTIFY_OPERATIONS_EMAIL", "Operations@4i.energy");
  },
  get QUOTE_FROM_EMAIL() {
    return read(
      "QUOTE_FROM_EMAIL",
      "portfolio-review@removalandreinstall.energy",
    );
  },
};
