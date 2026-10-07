import { PageHero } from "./AboutPage";
import { LOCATIONS, directionsUrl } from "../data/locations";
import { CATERING, JOIN_TEAM, ORDER_ONLINE_URL } from "../data/site";
import { IMG, img } from "../data/media";
import { ButtonLink, Eyebrow, Reveal, Section, SmartImage } from "../components/ui";
import { MapBlock } from "../components/Locations";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Come see us"
        lead="Three locations across San Diego. Call, order online, or drop in — the broth is always on."
        image={IMG.contactBanner}
        imageAlt="Contacting Pho Hiep Grill"
      />

      <Section tone="cream" className="py-20 sm:py-24">
        <Reveal className="max-w-2xl">
          <Eyebrow>Get in touch</Eyebrow>
          <h2 className="mt-5 font-display text-[2.2rem] leading-[1.05] sm:text-[3rem]">
            We're happy to help
          </h2>
          <p className="mt-5 text-[0.98rem] leading-[1.8] text-charcoal/75">
            {CATERING.subheading} {CATERING.subbody}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-7 lg:grid-cols-3">
          {LOCATIONS.map((l, i) => (
            <Reveal key={l.slug} delay={i * 90}>
              <article className="flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-7">
                <h3 className="font-display text-[2rem] leading-none">{l.name}</h3>
                <a
                  href={`tel:${l.phoneHref}`}
                  className="mt-3 inline-block font-display text-[1.45rem] leading-none text-lacquer transition hover:text-[#8f2d16]"
                >
                  {l.phoneDisplay}
                </a>
                <address className="mt-4 not-italic text-[0.92rem] leading-relaxed text-charcoal/75">
                  {l.address.line1}
                  <br />
                  {l.address.line2}
                </address>
                <dl className="mt-5 space-y-1.5 border-t border-ink/10 pt-5 text-[0.88rem]">
                  {l.hours.map((h) => (
                    <div key={h.days} className="flex items-baseline justify-between gap-4">
                      <dt className="text-charcoal/60">{h.days}</dt>
                      <dd className="whitespace-nowrap text-ink">{h.time}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-6 flex flex-wrap gap-2 pt-2">
                  <ButtonLink href={ORDER_ONLINE_URL} external size="sm">
                    Order Online
                  </ButtonLink>
                  <ButtonLink href={directionsUrl(l)} external variant="outline" size="sm">
                    Directions
                  </ButtonLink>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="sand" className="py-20 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <Eyebrow>Join the team</Eyebrow>
            <h2 className="mt-5 font-display text-[2rem] leading-[1.08] sm:text-[2.6rem]">
              {JOIN_TEAM.heading}
            </h2>
            <p className="mt-5 text-[0.98rem] leading-[1.8] text-charcoal/75">{JOIN_TEAM.body}</p>
            <SmartImage
              src={img(IMG.joinBanner, 900)}
              alt="The team at Pho Hiep Grill"
              className="mt-8 aspect-[4/3] w-full rounded-xl"
            />
          </Reveal>
          <div className="lg:col-span-7">
            <Reveal delay={100}>
              <MapBlock location={LOCATIONS[0]} />
              <p className="mt-4 text-[0.82rem] text-charcoal/70">
                Map shows our Eastlake location — 872 Eastlake Parkway Suite 310, Chula Vista, CA
                91914.
              </p>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
