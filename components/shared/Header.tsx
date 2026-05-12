// Sticky top-of-page header. Pure CSS sticky — no scroll listener — so it works
// as a Server Component. Lives above all sections so it stays in view as users scroll.

import { Logo } from "@/components/shared/Logo";
import { PhoneLink } from "@/components/shared/PhoneLink";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-navy-deep/95 backdrop-blur-md border-b border-navy-soft/40">
      <div className="mx-auto max-w-7xl h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        <Logo variant="light" />
        <PhoneLink variant="header" />
      </div>
    </header>
  );
}
