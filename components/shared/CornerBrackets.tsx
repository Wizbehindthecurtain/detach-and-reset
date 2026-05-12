// Four corner brackets — work-order-form chrome. Use inside a relative parent
// and the brackets pin to the parent's corners.

import { cn } from "@/lib/utils";

type CornerBracketsProps = {
  /** Tailwind color class for the bracket strokes (e.g. "border-safety/70"). */
  colorClassName?: string;
  /** Size of each bracket leg in Tailwind units (default 4 = 1rem). */
  size?: 3 | 4 | 5 | 6;
};

const SIZE_CLASS: Record<NonNullable<CornerBracketsProps["size"]>, string> = {
  3: "w-3 h-3",
  4: "w-4 h-4",
  5: "w-5 h-5",
  6: "w-6 h-6",
};

export function CornerBrackets({
  colorClassName = "border-safety/70",
  size = 4,
}: CornerBracketsProps) {
  const sz = SIZE_CLASS[size];
  return (
    <>
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute top-0 left-0 border-t-2 border-l-2",
          sz,
          colorClassName,
        )}
      />
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute top-0 right-0 border-t-2 border-r-2",
          sz,
          colorClassName,
        )}
      />
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute bottom-0 left-0 border-b-2 border-l-2",
          sz,
          colorClassName,
        )}
      />
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute bottom-0 right-0 border-b-2 border-r-2",
          sz,
          colorClassName,
        )}
      />
    </>
  );
}
