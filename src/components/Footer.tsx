import { BRAND, NAV, ORDER_ONLINE_URL } from "../data/site";
import { LOCATIONS } from "../data/locations";
import Logo from "./Logo";
import { ButtonLink, Ornament } from "./ui";
import { Link } from "../lib/router";

const social = [
  {
    label: "Yelp",
    href: "https://www.yelp.com/biz/pho-hiep-grill-chula-vista",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/phohiepgrill",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="grain relative overflow-hidden bg-ink text-cream">
      {/* Order band */}
      <div className="border-b border-cream/10">
        <div className="mx-auto flex max-w-[84rem] flex-col items-center gap-7 px-5 py-16 text-center sm:px-8 lg:px-12 lg:py-20">
          <Ornament tone="light" />
          <h2 className="font-display text-[2.2rem] leading-tight text-balance sm:text-5xl">
            Hungry? Let's get you a bowl.
          </h2>
          <p className="max-w-xl text-cream/60">
            Order ahead for pick-up, or call your nearest location and we'll have it ready.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <ButtonLink href={ORDER_ONLINE_URL} external size="lg">
              Order Online
            </ButtonLink>
            <ButtonLink href="#/locations" variant="outlineLight" size="lg">
              Find a Location
            </ButtonLink>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto grid max-w-[84rem] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:px-12 lg:py-20">
        {/* Brand */}
        <div className="lg:col-span-4">
          <Logo className="h-14 brightness-0 invert" />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-cream/55">
            {BRAND.tagline} {BRAND.tagline2} {BRAND.tagline3}
          </p>
          <div className="mt-7 flex gap-3">
            {social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-cream/20 px-4 py-2 text-[0.68rem] uppercase tracking-[0.2em] text-cream/70 transition hover:border-cream hover:text-cream"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <nav aria-label="Footer navigation" className="lg:col-span-2">
          <h3 className="eyebrow text-clay">Quick Links</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link
                  to={n.href.slice(1)}
                  className="text-cream/65 transition hover:text-cream"
                >
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://www.phohiepgrill.com/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/65 transition hover:text-cream"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <Link to="/contact" className="text-cream/65 transition hover:text-cream">
                Join the Team
              </Link>
            </li>
          </ul>
        </nav>

        {/* Locations */}
        <div className="lg:col-span-3">
          <h3 className="eyebrow text-clay">Locations</h3>
          <ul className="mt-5 space-y-6 text-sm">
            {LOCATIONS.map((l) => (
              <li key={l.slug}>
                <p className="font-display text-lg text-cream">{l.name}</p>
                <p className="mt-1 text-cream/55">{l.address.line1}</p>
                <p className="text-cream/55">{l.address.line2}</p>
                <a
                  href={`tel:${l.phoneHref}`}
                  className="mt-1 inline-block text-cream/80 transition hover:text-cream"
                >
                  {l.phoneDisplay}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Hours */}
        <div className="lg:col-span-3">
          <h3 className="eyebrow text-clay">Hours</h3>
          <ul className="mt-5 space-y-6 text-sm">
            {LOCATIONS.map((l) => (
              <li key={l.slug}>
                <p className="font-display text-lg text-cream">{l.name}</p>
                {l.hours.map((h) => (
                  <p key={h.days} className="mt-1 text-cream/55">
                    <span className="text-cream/75">{h.days}</span> · {h.time}
                  </p>
                ))}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-[84rem] flex-col items-center justify-between gap-3 px-5 py-7 text-[0.72rem] text-cream/40 sm:flex-row sm:px-8 lg:px-12">
          <p>
            © {year} {BRAND.legalName}. All rights reserved.
          </p>
          <p className="text-cream/50">Family owned &amp; operated in San Diego since {BRAND.founded}.</p>
        </div>
      </div>
    </footer>
  );
}
