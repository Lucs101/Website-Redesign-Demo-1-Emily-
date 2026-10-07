import { useCallback, useEffect, useState } from "react";
import { GALLERY } from "../data/gallery";
import { img } from "../data/media";
import { Eyebrow, Reveal, Section, SmartImage } from "./ui";
import { cn } from "../utils/cn";

/** Editorial crop rhythm — varied heights create the masonry feel. */
const spanClass: Record<string, string> = {
  tall: "aspect-[3/4]",
  tall2: "aspect-[2/3]",
  wide: "aspect-[16/10]",
  square: "aspect-square",
};

export default function Gallery({ limit }: { limit?: number }) {
  const images = typeof limit === "number" ? GALLERY.slice(0, limit) : GALLERY;
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (dir: number) => setOpen((i) => (i === null ? i : (i + dir + images.length) % images.length)),
    [images.length],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, step]);

  return (
    <>
      <Section tone="white" className="py-20 sm:py-24 lg:py-28">
        <Reveal className="max-w-2xl">
          <Eyebrow>Gallery</Eyebrow>
          <h2 className="mt-5 font-display text-[2.3rem] leading-[1.05] text-balance sm:text-5xl lg:text-[3.4rem]">
            A look inside our kitchens and dining rooms
          </h2>
        </Reveal>

        <div className="mt-12 columns-2 gap-3 sm:columns-3 sm:gap-4 lg:columns-4">
          {images.map((g, i) => (
            <Reveal key={g.src} delay={(i % 6) * 70} className="mb-3 break-inside-avoid sm:mb-4">
              <button
                type="button"
                onClick={() => setOpen(i)}
                aria-label={`Open photo: ${g.alt}`}
                className="group block w-full overflow-hidden rounded-xl bg-cream-2 focus-visible:ring-2 focus-visible:ring-lacquer"
              >
                <SmartImage
                  src={img(g.src, 800)}
                  alt={g.alt}
                  className={cn("w-full", spanClass[g.span ?? "square"])}
                  imgClassName="transition-transform duration-[1100ms] ease-out group-hover:scale-[1.07]"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Lightbox */}
      {open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-4 sm:p-10"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close photo viewer"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 text-cream/80 transition hover:bg-cream hover:text-ink sm:right-8 sm:top-8"
          >
            ✕
          </button>

          <button
            type="button"
            aria-label="Previous photo"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            className="absolute left-3 flex h-12 w-12 items-center justify-center rounded-full border border-cream/25 text-cream/80 transition hover:bg-cream hover:text-ink sm:left-8"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next photo"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            className="absolute right-3 flex h-12 w-12 items-center justify-center rounded-full border border-cream/25 text-cream/80 transition hover:bg-cream hover:text-ink sm:right-8"
          >
            ›
          </button>

          <figure
            className="max-h-full w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <SmartImage
              src={img(images[open].src, 1800)}
              alt={images[open].alt}
              className="mx-auto max-h-[76svh] w-auto rounded-lg"
              imgClassName="!h-auto max-h-[76svh] w-auto object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-cream/65">
              {images[open].alt}
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
