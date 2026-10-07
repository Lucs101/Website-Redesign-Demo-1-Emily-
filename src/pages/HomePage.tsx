import Hero from "../components/Hero";
import FeaturedDishes from "../components/FeaturedDishes";
import { AboutStory, FamilyTradition, PhoStory } from "../components/AboutStory";
import { LocationsGrid } from "../components/Locations";
import Gallery from "../components/Gallery";
import { CateringSection, OrderCTA } from "../components/CateringSection";

const menuCategories = [
  { label: "Appetizers", en: "Rolls, salads & crepes" },
  { label: "Pho", en: "House Beef Noodle Soup" },
  { label: "Rice Entrees", en: "Broken rice — cơm tấm" },
  { label: "Vermicelli", en: "Bun noodle bowls" },
  { label: "Chef's Specials", en: "Wok, grill & clay pot" },
  { label: "Banh Mi", en: "Vietnamese sandwiches" },
  { label: "Vegetarian", en: "Chay plates" },
  { label: "Kid's Menu", en: "Little bowls" },
  { label: "Party Platters", en: "Catering trays" },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedDishes />
      <AboutStory />
      <PhoStory />

      {/* Menu categories */}
      <section className="bg-cream py-20 sm:py-24 lg:py-28">
        <div className="mx-auto w-full max-w-[84rem] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <span className="eyebrow inline-flex items-center gap-3 text-lacquer">
                <span aria-hidden className="h-px w-8 bg-current opacity-50" />
                The Menu
              </span>
              <h2 className="mt-5 font-display text-[2.3rem] leading-[1.05] text-balance sm:text-5xl lg:text-[3.4rem]">
                Browse by category, then choose your location
              </h2>
            </div>
            <p className="max-w-sm text-[0.95rem] leading-relaxed text-charcoal/70">
              Each of our three kitchens keeps its own menu and pricing. Pick a location and the full
              list appears.
            </p>
          </div>

          <ul className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
            {menuCategories.map((c, i) => (
              <li key={c.label} className="border-t border-ink/12 pt-4">
                <a href="#/menu" className="group block">
                  <span className="text-[0.62rem] tracking-[0.2em] text-charcoal/45 transition group-hover:text-lacquer">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-2 font-display text-[1.45rem] leading-none transition group-hover:text-lacquer">
                    {c.label}
                  </p>
                  <p className="mt-1.5 text-[0.78rem] leading-snug text-charcoal/65">{c.en}</p>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-14">
            <a
              href="#/menu"
              className="group inline-flex items-center gap-3 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-ink"
            >
              Open the full menu
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1.5">
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      <LocationsGrid />
      <FamilyTradition />
      <Gallery limit={10} />
      <CateringSection />
      <OrderCTA />
    </>
  );
}
