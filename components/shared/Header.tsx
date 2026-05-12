// Two-tier sticky header — hairline spec strip up top with the license / firm
// info in monospaced caps, main row below with the logo + phone. Pure CSS sticky;
// no scroll JS, so this stays a Server Component.

import { Logo } from "@/components/shared/Logo";
import { PhoneLink } from "@/components/shared/PhoneLink";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-navy-deep/95 backdrop-blur-md border-b border-bone/10">
      <div className="hidden sm:block border-b border-bone/5">
        <div className="mx-auto max-w-7xl h-7 px-4 sm:px-6 lg:px-8 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-bone/45">
          <span>FL · EC13013240 · LICENSED + INSURED</span>
          <span>{"// 4i Energy Partners · Statewide FL"}</span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        <Logo variant="light" />
        <PhoneLink variant="header" />
      </div>
    </header>
  );
}
