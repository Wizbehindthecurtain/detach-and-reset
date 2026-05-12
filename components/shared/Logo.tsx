// 4i Energy mark + "DETACH AND RESET" wordmark. Wordmark uses the display
// face (Big Shoulders) for an industrial-signage feel. Variant picks SVG +
// wordmark color: `light` for navy bg, `dark` for bone bg.

import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

export function Logo({ variant = "light", className }: LogoProps) {
  const src =
    variant === "light" ? "/logo-4i-light.svg" : "/logo-4i-dark.svg";
  const wordmarkColor = variant === "light" ? "text-bone" : "text-navy";

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Image
        src={src}
        alt="4i Energy"
        width={40}
        height={40}
        priority
        className="h-9 w-auto sm:h-10"
      />
      <span
        className={cn(
          "font-display font-bold text-base sm:text-lg tracking-[0.18em] leading-none",
          wordmarkColor,
        )}
      >
        DETACH AND RESET
      </span>
    </div>
  );
}
