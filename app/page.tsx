// Composes page sections in order. Hero arrives in Slice 1; rest fill in Slices 2-8.

import { Logo } from "@/components/shared/Logo";

export default function Home() {
  return (
    <main className="min-h-dvh bg-navy flex flex-col">
      <header className="px-6 py-5">
        <Logo variant="light" />
      </header>
      <section className="flex-1 grid place-items-center px-6 py-16 text-bone">
        <div className="max-w-md text-center space-y-2">
          <p className="uppercase tracking-widest text-xs text-steel">Slice 0 — scaffolding</p>
          <p className="text-base">
            Project initialized. Hero lands in Slice 1.
          </p>
        </div>
      </section>
    </main>
  );
}
