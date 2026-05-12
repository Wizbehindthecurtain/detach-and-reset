// Renders the business phone as a tel: link. Reads NEXT_PUBLIC_BUSINESS_PHONE
// at build time. When unset, renders a disabled-styled element with a "(business
// phone TBD)" label so the missing input is loud during review — not a fake number.

import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";

type PhoneLinkProps = {
  variant?: "header" | "cta";
  className?: string;
};

const headerBase =
  "inline-flex items-center gap-2 text-bone text-sm sm:text-base font-medium hover:text-safety transition-colors";

const ctaBase =
  "inline-flex items-center justify-center gap-2 h-12 px-6 rounded-md border border-bone/30 text-bone font-semibold tracking-wide hover:border-bone hover:bg-bone/5 transition-colors w-full sm:w-auto";

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
        <Phone className={variant === "header" ? "h-4 w-4" : "h-5 w-5"} />
        {variant === "header" ? "(business phone TBD)" : "Call us — TBD"}
      </span>
    );
  }

  const telHref = `tel:${phone!.replace(/[^\d+]/g, "")}`;

  return (
    <a href={telHref} className={cn(baseClasses, className)}>
      <Phone className={variant === "header" ? "h-4 w-4" : "h-5 w-5"} />
      {variant === "header" ? phone : "Call us"}
    </a>
  );
}
