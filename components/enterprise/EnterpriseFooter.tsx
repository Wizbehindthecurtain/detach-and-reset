// XI. Footer — centered single-row layout, restrained. License + insurance +
// service area + contact + parent + © year as one text block with brass
// divider dots between elements. No mono spec-strip, no three-column block —
// the roofer footer's industrial chrome would clash with Quiet Luxury.

const CONTACT_EMAIL = "Operations@4i.energy";

export function EnterpriseFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ivory border-t-[0.5px] border-brass/30">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20 text-center">
        <p className="font-cormorant italic text-xl sm:text-2xl text-deep-ink font-medium leading-none">
          Removal &amp; Re-Install
        </p>
        <p className="mt-2 font-outfit text-[9px] uppercase tracking-[0.4em] text-brass font-light">
          An operating brief for PE-backed roofing platforms
        </p>

        <div aria-hidden className="mx-auto mt-8 w-6 h-px bg-brass" />

        <p className="mt-8 mx-auto max-w-3xl font-outfit text-xs sm:text-sm text-muted-warm font-light leading-[2] tracking-[0.02em]">
          FL · EC13013240
          <span aria-hidden className="mx-3 text-brass/70">·</span>
          Licensed + insured in 15 states
          <span aria-hidden className="mx-3 text-brass/70">·</span>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="hover:text-brass transition-colors"
          >
            {CONTACT_EMAIL}
          </a>
          <span aria-hidden className="mx-3 text-brass/70">·</span>
          A 4i Energy Partners company
        </p>

        <p className="mt-8 font-outfit text-[10px] uppercase tracking-[0.4em] text-muted-warm/70 font-light">
          © {year} Removal and Re-Install
        </p>
      </div>
    </footer>
  );
}
