// Renders the business phone as a tel: link with a work-order vibe — the
// number itself sets in IBM Plex Mono. Reads NEXT_PUBLIC_BUSINESS_PHONE at
// build time. When unset, renders a disabled, bracketed "[ TBD ]" pill so
// the missing input shouts at review time rather than getting silently shipped.

import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";

type PhoneLinkProps = {
  variant?: "header" | "cta";
  className?: string;
};

const headerBase =
  "inline-flex items-center gap-2 text-bone text-sm font-mono tracking-wider hover:text-safety transition-colors";

const ctaBase =
  "group inline-flex items-center justify-center gap-3 h-12 px-6 rounded-none border border-bone/40 text-bone font-display font-bold tracking-[0.2em] text-sm uppercase hover:border-safety hover:text-safety transition-colors w-full sm:w-auto";

export function PhoneLink({ variant = "header", className }: PhoneLinkProps) {
  const phone = process.env.NEXT_PUBLIC_BUSINESS_PHONE;
  const hasPhone = Boolean(phone && phone.length > 0);
  const baseClasses = variant === "header" ? headerBase : ctaBase;

  if (!hasPhone) {
    return (
      <span
        className={cn(baseClasses, "opacity-60 cursor-not-allowed", className)}
        title="Set NEXT_PUBLIC_BUSINESS_PHONE in .env.local"
      >
        <Phone className={variant === "header" ? "h-4 w-4" : "h-4 w-4"} />
        {variant === "header" ? "[ PHONE · TBD ]" : "Call us — TBD"}
      </span>
    );
  }

  const telHref = `tel:${phone!.replace(/[^\d+]/g, "")}`;

  return (
    <a href={telHref} className={cn(baseClasses, className)}>
      <Phone className="h-4 w-4" />
      {variant === "header" ? (
        <span>{phone}</span>
      ) : (
        <span className="flex items-baseline gap-2">
          <span>Call</span>
          <span className="font-mono tracking-wider text-xs opacity-80 normal-case">
            {phone}
          </span>
        </span>
      )}
    </a>
  );
}
