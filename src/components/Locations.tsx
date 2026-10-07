import { LOCATIONS, directionsUrl, mapEmbedUrl, type Location } from "../data/locations";
import { ORDER_ONLINE_URL } from "../data/site";
import { ButtonLink, Eyebrow, Reveal, Section, SmartImage } from "./ui";
import { Link } from "../lib/router";
import { cn } from "../utils/cn";

export function LocationCard({
  location,
  index = 0,
  compact = false,
}: {
  location: Location;
  index?: number;
  compact?: boolean;
}) {
  return (
    <Reveal delay={index * 90}>
      <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white transition-shadow duration-500 hover:shadow-[0_36px_80px_-50px_rgba(23,17,13,0.55)]">
        <div className="relative">
          <SmartImage
            src={location.image}
            alt={`Pho Hiep Grill — ${location.name}`}
            className="aspect-[16/10] w-full"
            imgClassName="transition-transform duration-[1100ms] group-hover:scale-[1.06]"
          />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
            <h3 className="font-display text-[1.9rem] leading-none text-cream">{location.name}</h3>
            {location.note && (
              <span className="hidden rounded-full bg-cream/15 px-3 py-1 text-[0.6rem] uppercase tracking-[0.18em] text-cream/90 backdrop-blur-sm sm:block">
                Est. 1991
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <a
            href={`tel:${location.phoneHref}`}
            className="font-display text-[1.5rem] leading-none text-lacquer transition hover:text-[#8f2d16]"
          >
            {location.phoneDisplay}
          </a>

          <address className="mt-4 not-italic text-[0.92rem] leading-relaxed text-charcoal/75">
            {location.address.line1}
            <br />
            {location.address.line2}
          </address>

          <dl className="mt-5 space-y-1.5 border-t border-ink/10 pt-5 text-[0.88rem]">
            {location.hours.map((h) => (
              <div key={h.days} className="flex items-baseline justify-between gap-4">
                <dt className="text-charcoal/60">{h.days}</dt>
                <dd className="whitespace-nowrap font-normal text-ink">{h.time}</dd>
              </div>
            ))}
          </dl>

          {location.happyHour && !compact && (
            <p className="mt-4 rounded-lg bg-cream-2 px-4 py-3 text-[0.78rem] leading-relaxed text-charcoal/70">
              <span className="font-medium text-ink">Happy Hour</span> · Weekdays 4–7PM · Weekends
              12–5PM
            </p>
          )}

          <div className="mt-6 flex flex-wrap gap-2 pt-2">
            <ButtonLink href={ORDER_ONLINE_URL} external size="sm">
              Order Online
            </ButtonLink>
            <ButtonLink href={directionsUrl(location)} external variant="outline" size="sm">
              Directions
            </ButtonLink>
            <Link
              to={`/menu/${location.slug}`}
              className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-charcoal underline-offset-4 transition hover:text-lacquer hover:underline"
            >
              View Menu
            </Link>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function LocationsGrid({ compact }: { compact?: boolean }) {
  return (
    <Section id="locations" tone="cream" className="py-20 sm:py-24 lg:py-28">
      <Reveal className="max-w-2xl">
        <Eyebrow>Find Us</Eyebrow>
        <h2 className="mt-5 font-display text-[2.3rem] leading-[1.05] text-balance sm:text-5xl lg:text-[3.4rem]">
          Three family tables around San Diego
        </h2>
        <p className="mt-5 text-charcoal/70">
          Same broth, same grill, same family — in Eastlake, Chula Vista and Linda Vista. Menus and
          hours differ slightly by location.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        {LOCATIONS.map((l, i) => (
          <LocationCard key={l.slug} location={l} index={i} compact={compact} />
        ))}
      </div>
    </Section>
  );
}

export function MapBlock({ location }: { location: Location }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-ink/10">
      <iframe
        title={`Map of Pho Hiep Grill — ${location.name}`}
        src={mapEmbedUrl(location)}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-[320px] w-full border-0 grayscale-[35%] sm:h-[420px]"
      />
    </div>
  );
}

export function LocationSelector({
  active,
  onChange,
  tone = "dark",
  className,
}: {
  active: string;
  onChange: (slug: string) => void;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div
      role="tablist"
      aria-label="Choose a location"
      className={cn(
        "no-scrollbar flex gap-2 overflow-x-auto rounded-full p-1.5",
        tone === "dark" ? "bg-ink/6" : "bg-cream/10",
        className,
      )}
    >
      {LOCATIONS.map((l) => {
        const isActive = l.slug === active;
        return (
          <button
            key={l.slug}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(l.slug)}
            className={cn(
              "whitespace-nowrap rounded-full px-6 py-3 text-[0.72rem] font-medium uppercase tracking-[0.18em] transition-all duration-300",
              isActive
                ? "bg-lacquer text-white shadow-[0_10px_26px_-14px_rgba(168,56,28,0.9)]"
                : tone === "dark"
                  ? "text-charcoal/70 hover:bg-white hover:text-ink"
                  : "text-cream/60 hover:bg-cream/10 hover:text-cream",
            )}
          >
            {l.name}
          </button>
        );
      })}
    </div>
  );
}
