import { ButtonLink, Ornament } from "../components/ui";
import { LOCATIONS } from "../data/locations";

export default function NotFoundPage() {
  return (
    <section className="flex min-h-[70svh] items-center bg-ink text-cream">
      <div className="mx-auto w-full max-w-[84rem] px-5 py-24 text-center sm:px-8 lg:px-12">
        <Ornament tone="light" className="justify-center" />
        <h1 className="mt-8 font-display text-[3rem] leading-none sm:text-[5rem]">404</h1>
        <p className="mx-auto mt-6 max-w-md text-cream/65">
          That page has moved on — but the broth is still on. Try one of our locations or view the
          menu.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <ButtonLink href="#/menu">View Menu</ButtonLink>
          <ButtonLink href="#/locations" variant="outlineLight">
            Find a Location
          </ButtonLink>
        </div>
        <ul className="mx-auto mt-14 grid max-w-3xl gap-3 sm:grid-cols-3">
          {LOCATIONS.map((l) => (
            <li key={l.slug} className="rounded-xl border border-cream/12 px-5 py-4 text-left">
              <p className="eyebrow text-clay">{l.name}</p>
              <a
                href={`tel:${l.phoneHref}`}
                className="mt-2 block font-display text-[1.4rem] leading-none"
              >
                {l.phoneDisplay}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
