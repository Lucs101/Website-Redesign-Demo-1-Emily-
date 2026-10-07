import { useState } from "react";
import { BRAND } from "../data/site";
import { img } from "../data/media";
import { cn } from "../utils/cn";

/**
 * The restaurant's existing logo, served from its own CDN.
 * If the asset is ever unavailable we fall back to a typeset wordmark so the
 * header is never empty.
 */
export default function Logo({ className }: { className?: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className={cn("flex flex-col leading-none", className)}>
        <span className="font-display text-[1.35rem] tracking-tight">PHO HIEP</span>
        <span className="text-[0.58rem] uppercase tracking-[0.42em] text-lacquer">&amp; Grill</span>
      </span>
    );
  }

  return (
    <img
      src={img(BRAND.logo, 360)}
      alt={BRAND.logoAlt}
      width={170}
      height={48}
      onError={() => setFailed(true)}
      className={cn("w-auto", className)}
    />
  );
}
