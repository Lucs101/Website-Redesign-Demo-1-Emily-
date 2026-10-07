import { FEATURED } from "../data/menu";
import { img } from "../data/media";
import { ButtonLink, Eyebrow, Reveal, Section, SmartImage } from "./ui";
import { cn } from "../utils/cn";

export default function FeaturedDishes() {
  const [hero, ...rest] = FEATURED;

  return (
    <Section id="featured" tone="cream" className="py-20 sm:py-24 lg:py-32">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <Reveal className="max-w-2xl">
          <Eyebrow>What we're known for</Eyebrow>
          <h2 className="mt-5 font-display text-[2.3rem] leading-[1.05] text-balance sm:text-5xl lg:text-[3.6rem]">
            The dishes our regulars order first
          </h2>
        </Reveal>
        <Reveal delay={120} className="max-w-md">
          <p className="text-charcoal/70">
            Our foods are made with the freshest authentic ingredients — the distinguished House Beef
            Soup (pho), healthy vermicelli noodles (bun), and fulfilling broken rice dishes (com).
          </p>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-8">
        {/* Lead dish — full bleed editorial crop */}
        <Reveal className="lg:col-span-7">
          <figure className="group relative overflow-hidden rounded-[1.25rem] bg-cream-2">
            <SmartImage
              src={hero.image}
              alt={`${hero.name} — ${hero.viet ?? ""}`}
              width={1400}
              className="aspect-[4/3.1] w-full sm:aspect-[16/11]"
              imgClassName="transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent"
            />
            <figcaption className="absolute inset-x-0 bottom-0 p-6 text-cream sm:p-9">
              {hero.badge && (
                <span className="rounded-full bg-cream/15 px-3 py-1.5 text-[0.62rem] uppercase tracking-[0.2em] backdrop-blur-sm">
                  {hero.badge}
                </span>
              )}
              <h3 className="mt-4 font-display text-[2rem] leading-none sm:text-[2.6rem]">{hero.name}</h3>
              <p className="mt-1 font-display text-lg italic text-cream/70">{hero.viet}</p>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-cream/75">{hero.desc}</p>
              <p className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-[0.72rem] uppercase tracking-[0.18em] text-cream">
                <span>{hero.price}</span>
                <span className="text-cream/35">·</span>
                <span className="text-cream/60">{hero.location} menu</span>
              </p>
            </figcaption>
          </figure>
        </Reveal>

        {/* Supporting dishes */}
        <div className="grid gap-6 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1 lg:gap-5">
          {rest.slice(0, 3).map((dish, i) => (
            <Reveal key={dish.name} delay={80 + i * 90}>
              <article className="group flex items-center gap-5 border-b border-ink/10 pb-6 last:border-0">
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-2xl leading-tight">{dish.name}</h3>
                  <p className="mt-1 font-display text-base italic text-lacquer/80">{dish.viet}</p>
                  <p className="mt-2 line-clamp-2 text-[0.86rem] leading-relaxed text-charcoal/65">
                    {dish.desc}
                  </p>
                  <p className="mt-3 flex flex-wrap items-center gap-x-3 text-[0.68rem] uppercase tracking-[0.16em] text-charcoal/70">
                    <span className="text-lacquer">{dish.price}</span>
                    <span className="text-charcoal/25">·</span>
                    <span>{dish.location}</span>
                  </p>
                </div>
                <div className="h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-cream-2 sm:h-28 sm:w-28">
                  <SmartImage
                    src={img(dish.image, 400)}
                    alt={`${dish.name} at Pho Hiep Grill`}
                    imgClassName="transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Remaining strip */}
      <Reveal className="mt-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.slice(3).map((dish, i) => (
            <article
              key={dish.name}
              className={cn(
                "group overflow-hidden rounded-2xl border border-ink/8 bg-white/60 transition-shadow duration-500 hover:shadow-[0_28px_60px_-40px_rgba(23,17,13,0.5)]",
              )}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <SmartImage
                src={img(dish.image, 800)}
                alt={`${dish.name} at Pho Hiep Grill`}
                className="aspect-[4/3] w-full"
                imgClassName="transition-transform duration-[900ms] group-hover:scale-[1.06]"
              />
              <div className="p-6">
                <h3 className="font-display text-[1.6rem] leading-none">{dish.name}</h3>
                <p className="mt-1 font-display text-base italic text-lacquer/80">{dish.viet}</p>
                <p className="mt-3 text-[0.86rem] leading-relaxed text-charcoal/65">{dish.desc}</p>
                <p className="mt-4 flex items-center gap-3 text-[0.68rem] uppercase tracking-[0.16em] text-charcoal/70">
                  <span className="text-lacquer">{dish.price}</span>
                  <span className="text-charcoal/25">·</span>
                  <span>{dish.location}</span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </Reveal>

      <Reveal className="mt-14 flex justify-center">
        <ButtonLink href="#/menu" variant="outline" size="lg">
          View the Full Menu
        </ButtonLink>
      </Reveal>
    </Section>
  );
}
