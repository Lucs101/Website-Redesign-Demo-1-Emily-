import { useEffect, useMemo, useRef, useState } from "react";
import { MENUS, MENU_NOTE, type Dish, type MenuCategory } from "../data/menu";
import { LOCATIONS, getLocation } from "../data/locations";
import { ORDER_ONLINE_URL } from "../data/site";
import { ButtonLink, Eyebrow, Reveal, Section } from "./ui";
import { LocationCard, LocationSelector, MapBlock } from "./Locations";
import { cn } from "../utils/cn";

/* ── Dish row ─────────────────────────────────────────────── */
function DishRow({ dish }: { dish: Dish }) {
  return (
    <li className="group border-b border-ink/10 py-5 last:border-0">
      <div className="flex items-baseline gap-3">
        <h4 className="font-display text-[1.32rem] leading-snug">{dish.name}</h4>
        {dish.badge && (
          <span
            className={cn(
              "hidden shrink-0 rounded-full px-2.5 py-1 text-[0.56rem] font-medium uppercase tracking-[0.16em] sm:inline-block",
              dish.badge === "Vegetarian"
                ? "bg-jade/12 text-jade"
                : dish.badge === "Spicy"
                  ? "bg-lacquer/10 text-lacquer"
                  : "bg-gold/15 text-[#8a6620]",
            )}
          >
            {dish.badge}
          </span>
        )}
        <span
          aria-hidden
          className="mx-1 hidden h-px flex-1 bg-[repeating-linear-gradient(to_right,rgba(23,17,13,0.22)_0_2px,transparent_2px_6px)] sm:block"
        />
        {dish.price && (
          <span className="ml-auto shrink-0 whitespace-nowrap text-[0.95rem] font-normal text-lacquer sm:ml-0">
            {dish.price}
            {dish.priceAlt && (
              <span className="text-charcoal/60"> / {dish.priceAlt}</span>
            )}
          </span>
        )}
      </div>
      <p className="mt-1.5 max-w-2xl text-[0.88rem] leading-relaxed text-charcoal/65">{dish.desc}</p>
      {dish.note && (
        <p className="mt-1 text-[0.78rem] italic text-charcoal/65">{dish.note}</p>
      )}
    </li>
  );
}

function CategoryBlock({
  category,
  index,
}: {
  category: MenuCategory;
  index: number;
}) {
  const isEmpty = category.groups.every((g) => g.items.length === 0);
  return (
    <Reveal>
      <div
        id={`cat-${category.id}`}
        className="scroll-mt-40 border-t border-ink/12 pt-10 first:border-0 first:pt-0"
      >
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h3 className="font-display text-[1.9rem] leading-none sm:text-[2.3rem]">
            <span className="mr-3 text-[0.8rem] align-super text-charcoal/35">
              {String(index + 1).padStart(2, "0")}
            </span>
            {category.label}
          </h3>
          {category.sizePrice && (
            <p className="rounded-full bg-cream-2 px-4 py-2 text-[0.72rem] uppercase tracking-[0.16em] text-charcoal/75">
              {category.sizePrice}
            </p>
          )}
        </div>

        {category.intro && (
          <p className="mt-4 max-w-2xl text-[0.92rem] leading-relaxed text-charcoal/70">
            {category.intro}
          </p>
        )}

        {isEmpty ? (
          <p className="mt-6 rounded-xl border border-dashed border-ink/20 bg-cream-2/50 px-5 py-5 text-[0.9rem] leading-relaxed text-charcoal/70">
            {category.groups[0]?.note}
          </p>
        ) : (
          <div className="mt-6 grid gap-x-14 gap-y-6 lg:grid-cols-2">
            {category.groups.map((group, gi) => (
              <div key={group.title ?? gi} className={cn(category.groups.length > 1 && "min-w-0")}>
                {group.title && (
                  <p className="eyebrow mb-3 text-lacquer">{group.title}</p>
                )}
                {group.note && (
                  <p className="mb-3 text-[0.88rem] italic leading-relaxed text-charcoal/60">
                    {group.note}
                  </p>
                )}
                <ul className={cn(category.groups.length > 1 && "space-y-1")}>
                  {group.items.map((dish) => (
                    <DishRow key={dish.name} dish={dish} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </Reveal>
  );
}

/* ── Menu browser ─────────────────────────────────────────── */
export default function MenuBrowser({
  slug,
  onSlugChange,
}: {
  slug: string;
  onSlugChange: (slug: string) => void;
}) {
  const location = getLocation(slug) ?? LOCATIONS[0];
  const menu = MENUS[location.slug];
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState(menu.categories[0]?.id ?? "");
  const navRef = useRef<HTMLDivElement>(null);

  // reset state when the location changes
  useEffect(() => {
    setQuery("");
    setActiveCat(MENUS[location.slug].categories[0]?.id ?? "");
  }, [location.slug]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return menu.categories;
    return menu.categories
      .map((c) => ({
        ...c,
        groups: c.groups
          .map((g) => ({
            ...g,
            items: g.items.filter(
              (d) =>
                d.name.toLowerCase().includes(q) ||
                d.desc.toLowerCase().includes(q) ||
                (g.title ?? "").toLowerCase().includes(q),
            ),
          }))
          .filter((g) => g.items.length > 0 || (!q && g.note)),
      }))
      .filter((c) => c.groups.length > 0);
  }, [menu.categories, query]);

  const totalDishes = useMemo(
    () =>
      filtered.reduce(
        (n, c) => n + c.groups.reduce((m, g) => m + g.items.length, 0),
        0,
      ),
    [filtered],
  );

  // Track which category is in view for the sticky rail
  useEffect(() => {
    const ids = filtered.map((c) => `cat-${c.id}`);
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible?.target.id) setActiveCat(visible.target.id.replace("cat-", ""));
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [filtered]);

  return (
    <>
      {/* Location selector + search */}
      <Section tone="cream" containerClass="pt-10 pb-6 lg:pt-14">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="min-w-0">
            <Eyebrow>Choose your location</Eyebrow>
            <p className="mt-3 text-[0.9rem] leading-relaxed text-charcoal/70">
              Menus, prices and offerings differ at each of our three kitchens.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <label className="relative block">
              <span className="sr-only">Search the {location.name} menu</span>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search dishes…"
                className="w-full rounded-full border border-ink/15 bg-white px-5 py-3 pr-11 text-[0.9rem] text-ink placeholder:text-charcoal/40 focus:border-lacquer focus:outline-none sm:w-64"
              />
              <span aria-hidden className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-charcoal/40">
                ⌕
              </span>
            </label>
            <ButtonLink href={ORDER_ONLINE_URL} external size="sm" className="shrink-0">
              Order Online
            </ButtonLink>
          </div>
        </div>

        <LocationSelector active={location.slug} onChange={onSlugChange} className="mt-5 max-w-full" />

      </Section>

      {/* Sticky category rail */}
      <div className="sticky top-[4.5rem] z-30 border-y border-ink/10 bg-cream/95 backdrop-blur-md">
        <div className="mx-auto w-full max-w-[84rem] px-5 sm:px-8 lg:px-12">
          <div
            ref={navRef}
            className="no-scrollbar flex gap-1.5 overflow-x-auto py-3"
            role="navigation"
            aria-label={`${location.name} menu categories`}
          >
            {filtered.map((c) => (
              <a
                key={c.id}
                href={`#/menu/${location.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById(`cat-${c.id}`)
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                  setActiveCat(c.id);
                }}
                aria-current={activeCat === c.id ? "true" : undefined}
                className={cn(
                  "whitespace-nowrap rounded-full border px-4 py-2 text-[0.7rem] uppercase tracking-[0.14em] transition-colors duration-300",
                  activeCat === c.id
                    ? "border-ink bg-ink text-cream"
                    : "border-ink/15 text-charcoal/70 hover:border-ink/40 hover:text-ink",
                )}
              >
                {c.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Menu body */}
      <Section tone="cream" containerClass="pb-8 pt-12">
        <Reveal className="max-w-3xl">
          <h2 className="font-display text-[2.2rem] leading-[1.05] sm:text-[3rem]">
            {menu.title}
          </h2>
          <p className="mt-4 text-[0.98rem] leading-[1.8] text-charcoal/75">{menu.intro}</p>
          {totalDishes > 0 && (
            <p className="mt-4 text-[0.78rem] uppercase tracking-[0.16em] text-charcoal/50">
              Showing {totalDishes} {totalDishes === 1 ? "dish" : "dishes"}
              {query && <> for “{query}”</>}
            </p>
          )}
        </Reveal>

        <div className="mt-14 space-y-16">
          {filtered.length === 0 && (
            <p className="rounded-xl border border-dashed border-ink/20 bg-white px-6 py-10 text-center text-charcoal/70">
              Nothing matched “{query}”. Try “pho”, “bun”, “com” or “rolls”.
            </p>
          )}
          {filtered.map((c, i) => (
            <CategoryBlock key={c.id} category={c} index={i} />
          ))}
        </div>

        <p className="mt-14 border-t border-ink/10 pt-6 text-[0.78rem] italic text-charcoal/50">
          {MENU_NOTE}
        </p>
      </Section>

      {/* Location detail */}
      <Section tone="sand" containerClass="py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>{location.name}</Eyebrow>
              <h2 className="mt-5 font-display text-[2.2rem] leading-[1.05] sm:text-[2.8rem]">
                Visit us in {location.short}
              </h2>
              <a
                href={`tel:${location.phoneHref}`}
                className="mt-6 inline-block font-display text-[2rem] leading-none text-lacquer transition hover:text-[#8f2d16]"
              >
                {location.phoneDisplay}
              </a>
              <address className="mt-5 not-italic text-[1rem] leading-relaxed text-charcoal/75">
                {location.address.line1}
                <br />
                {location.address.line2}
              </address>
              <dl className="mt-6 space-y-2 border-t border-ink/12 pt-6 text-[0.95rem]">
                {location.hours.map((h) => (
                  <div key={h.days} className="flex items-baseline justify-between gap-4">
                    <dt className="text-charcoal/60">{h.days}</dt>
                    <dd className="whitespace-nowrap text-ink">{h.time}</dd>
                  </div>
                ))}
              </dl>
              {location.happyHour && (
                <div className="mt-6 rounded-xl bg-white p-5">
                  <p className="eyebrow text-lacquer">Happy Hour</p>
                  <p className="mt-2 text-[0.9rem] text-charcoal/75">
                    Weekdays 4PM – 7PM · Weekends 12PM – 5PM
                  </p>
                  <ul className="mt-3 space-y-1 text-[0.82rem] text-charcoal/65">
                    <li>Monday — 1/2 price selected appetizers, 1/2 margaritas</li>
                    <li>Tuesday — 1/2 price tequilas · Wednesday — 1/2 price whiskys</li>
                    <li>Thursday — 1/2 price martinis · Friday — 1/2 selected sakes</li>
                    <li>Sat &amp; Sun — $4 draft beer</li>
                  </ul>
                </div>
              )}
              <div className="mt-7 flex flex-wrap gap-3">
                <ButtonLink href={ORDER_ONLINE_URL} external>
                  Order Online
                </ButtonLink>
                <ButtonLink
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                    location.mapsQuery,
                  )}`}
                  external
                  variant="outline"
                >
                  Get Directions
                </ButtonLink>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={120}>
              <MapBlock location={location} />
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Other locations */}
      <Section tone="cream" containerClass="py-16">
        <Reveal>
          <h2 className="font-display text-[1.8rem] sm:text-[2.2rem]">Our other locations</h2>
        </Reveal>
        <div className="mt-8 grid gap-7 md:grid-cols-2">
          {LOCATIONS.filter((l) => l.slug !== location.slug).map((l, i) => (
            <LocationCard key={l.slug} location={l} index={i} compact />
          ))}
        </div>
      </Section>
    </>
  );
}
