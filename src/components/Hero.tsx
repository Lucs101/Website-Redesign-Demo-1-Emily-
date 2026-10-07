import { useEffect, useRef, useState } from "react";
import { HERO_FRAMES } from "../data/gallery";
import { BRAND, ORDER_ONLINE_URL } from "../data/site";
import { ButtonLink } from "./ui";
import { Link } from "../lib/router";
import { cn } from "../utils/cn";

/**
 * Cinematic motion hero.
 *
 * The original phohiepgrill.com carries no re-usable video file, so instead of
 * dropping in unrelated stock footage we build the hero from the restaurant's
 * own photography — slow 18s Ken-Burns pushes, cross-dissolved every 5.5s,
 * with a soft "steam" bloom and a dark gradient scrim for legibility. The
 * result reads as a filmic food reel while using only real Pho Hiep imagery.
 */
export default function Hero() {
  const [index, setIndex] = useState(0);
  const [ready, setReady] = useState(false);
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % HERO_FRAMES.length), 5500);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 120);
    return () => clearTimeout(t);
  }, []);

  // Pause the slideshow when the tab is hidden to keep things cheap.
  useEffect(() => {
    const onVis = () => {
      if (document.hidden) hostRef.current?.classList.add("is-paused");
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  return (
    <section
      ref={hostRef}
      aria-label="Pho Hiep Grill — authentic Vietnamese food since 1991"
      className="grain relative isolate flex min-h-[92svh] w-full items-end overflow-hidden bg-ink text-cream"
    >
      {/* Photo reel */}
      <div className="absolute inset-0 -z-10">
        {HERO_FRAMES.map((frame, i) => (
          <div
            key={frame.src}
            aria-hidden={i !== index}
            className={cn(
              "absolute inset-0 transition-opacity duration-[1600ms] ease-in-out",
              i === index ? "opacity-100" : "opacity-0",
            )}
          >
            <img
              src={frame.src}
              alt={i === index ? frame.alt : ""}
              loading={i === 0 ? "eager" : "lazy"}
              decoding="async"
              // @ts-expect-error fetchpriority is valid HTML
              fetchpriority={i === 0 ? "high" : undefined}
              className={cn("h-full w-full object-cover", i === index && "kenburns")}
            />
          </div>
        ))}
      </div>

      {/* Scrims — dark overlay for text legibility */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-ink/55" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/45 to-ink/70"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-ink to-transparent"
      />

      {/* Steam bloom */}
      <div aria-hidden className="steam pointer-events-none absolute -bottom-24 left-1/2 -z-10 h-[26rem] w-[46rem] -translate-x-1/2 rounded-full bg-cream/12 blur-[90px]" />

      {/* Content */}
      <div className="relative mx-auto w-full max-w-[84rem] px-5 pb-16 pt-32 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
        <div
          className={cn(
            "max-w-3xl transition-all duration-1000",
            ready ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
          )}
        >
          <p className="eyebrow flex items-center gap-3 text-clay">
            <span aria-hidden className="h-px w-10 bg-clay/60" />
            San Diego · Est. {BRAND.founded}
          </p>

          <h1 className="mt-6 font-display text-[3.1rem] leading-[0.94] tracking-[-0.02em] sm:text-[4.6rem] lg:text-[6rem]">
            Pho Hiep Grill
          </h1>

          <p className="mt-5 max-w-xl font-display text-[1.5rem] font-light italic leading-snug text-cream/85 sm:text-[1.9rem]">
            Authentic Vietnamese food since {BRAND.founded}.
          </p>

          <p className="mt-6 max-w-lg text-[0.95rem] leading-relaxed text-cream/70">
            Our distinguished House Beef Soup, healthy vermicelli noodles and fulfilling broken rice
            dishes — made with the freshest authentic ingredients, from our family to yours.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
            <ButtonLink href={ORDER_ONLINE_URL} external size="lg">
              Order Online
            </ButtonLink>
            <ButtonLink href="#/menu" variant="outlineLight" size="lg">
              View Menu
            </ButtonLink>
            <Link
              to="/locations"
              className="group inline-flex items-center gap-2 px-2 py-3 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-cream/75 transition hover:text-cream"
            >
              Find a Location
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* Frame indicators + scroll cue */}
        <div className="mt-14 flex items-center justify-between gap-6">
          <div className="flex items-center gap-2" role="tablist" aria-label="Hero photography">
            {HERO_FRAMES.map((f, i) => (
              <button
                key={f.src}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show photo ${i + 1} of ${HERO_FRAMES.length}`}
                onClick={() => setIndex(i)}
                className={cn(
                  "h-[3px] rounded-full transition-all duration-500",
                  i === index ? "w-10 bg-cream" : "w-5 bg-cream/30 hover:bg-cream/60",
                )}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() =>
              document.getElementById("featured")?.scrollIntoView({ behavior: "smooth", block: "start" })
            }
            className="hidden items-center gap-3 text-[0.68rem] uppercase tracking-[0.28em] text-cream/50 transition hover:text-cream sm:flex"
          >
            Scroll
            <span aria-hidden className="block h-8 w-px animate-pulse bg-cream/40" />
          </button>
        </div>
      </div>
    </section>
  );
}
