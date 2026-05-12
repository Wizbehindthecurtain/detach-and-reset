// 4i Energy mark + "DETACH AND RESET" wordmark. Variant picks SVG and wordmark color
// to suit the surface: `light` for navy backgrounds, `dark` for bone backgrounds.

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
        className="h-10 w-auto"
      />
      <span
        className={cn(
          "text-sm sm:text-base font-bold tracking-[0.18em]",
          wordmarkColor,
        )}
      >
        DETACH AND RESET
      </span>
    </div>
  );
}
