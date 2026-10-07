import { AboutStory, FamilyTradition, PhoStory } from "../components/AboutStory";
import { CateringSection } from "../components/CateringSection";
import Gallery from "../components/Gallery";
import { ButtonLink, Reveal, Section, SmartImage } from "../components/ui";
import { HAPPY_HOUR, JOIN_TEAM } from "../data/site";
import { IMG, img } from "../data/media";
import { LOCATIONS } from "../data/locations";

function PageHero({
  eyebrow,
  title,
  lead,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-cream">
      <div className="absolute inset-0 -z-10">
        <SmartImage src={img(image, 1800)} alt={imageAlt} className="h-full w-full" />
        <div aria-hidden className="absolute inset-0 bg-ink/72" />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/65"
        />
      </div>
      <div className="mx-auto max-w-[84rem] px-5 pb-16 pt-24 sm:px-8 sm:pb-20 sm:pt-32 lg:px-12 lg:pb-24 lg:pt-36">
        <span className="eyebrow inline-flex items-center gap-3 text-clay">
          <span aria-hidden className="h-px w-8 bg-current opacity-50" />
          {eyebrow}
        </span>
        <h1 className="mt-6 max-w-3xl font-display text-[2.7rem] leading-[0.98] text-balance sm:text-[4rem] lg:text-[5rem]">
          {title}
        </h1>
        {lead && <p className="mt-6 max-w-xl text-[1rem] leading-relaxed text-cream/70">{lead}</p>}
      </div>
    </section>
  );
}

export { PageHero };

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="From our family to yours"
        lead="Our family has been serving authentic Vietnamese foods in San Diego since 1991."
        image={IMG.mg_6805}
        imageAlt="The dining room at Pho Hiep Grill"
      />
      <AboutStory />
      <PhoStory />
      <FamilyTradition />

      {/* Location history */}
      <Section tone="white" className="py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SmartImage
              src={img(IMG.lindaVistaBanner, 1200)}
              alt="Pho Hiep Grill Linda Vista — our first location"
              className="aspect-[4/3] w-full rounded-2xl"
            />
            <p className="mt-4 text-[0.8rem] uppercase tracking-[0.16em] text-charcoal/65">
              Linda Vista — where we opened in 1991
            </p>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-6 lg:col-start-7">
            <span className="eyebrow text-lacquer">Three locations</span>
            <h2 className="mt-5 font-display text-[2.1rem] leading-[1.08] sm:text-[2.8rem]">
              A small restaurant that seated less than 50 guests
            </h2>
            <ul className="mt-9 space-y-7">
              {LOCATIONS.map((l) => (
                <li key={l.slug} className="flex flex-wrap items-baseline justify-between gap-3 border-b border-ink/10 pb-5">
                  <div>
                    <p className="font-display text-[1.7rem] leading-none">{l.name}</p>
                    <p className="mt-2 text-[0.88rem] text-charcoal/60">
                      {l.address.line1}, {l.address.line2}
                    </p>
                  </div>
                  <a
                    href={`tel:${l.phoneHref}`}
                    className="font-display text-[1.4rem] leading-none text-lacquer transition hover:text-[#8f2d16]"
                  >
                    {l.phoneDisplay}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* Happy hour — Eastlake */}
      <Section tone="sand" className="py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-4">
            <span className="eyebrow text-lacquer">Full bar · Eastlake</span>
            <h2 className="mt-5 font-display text-[2.1rem] leading-[1.08] sm:text-[2.7rem]">
              {HAPPY_HOUR.title}
            </h2>
            <p className="mt-5 text-[0.95rem] text-charcoal/75">{HAPPY_HOUR.schedule}</p>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-8">
            <dl className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
              {HAPPY_HOUR.days.map((d) => (
                <div key={d.day} className="border-t border-ink/12 pt-4">
                  <dt className="text-[0.68rem] uppercase tracking-[0.2em] text-lacquer">{d.day}</dt>
                  <dd className="mt-2">
                    <span className="font-display text-[1.35rem] leading-none">{d.name}</span>
                    <p className="mt-1.5 text-[0.85rem] text-charcoal/65">{d.detail}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Section>

      {/* Join the team */}
      <Section tone="cream" className="py-20 sm:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow text-lacquer">Careers</span>
          <h2 className="mt-5 font-display text-[2.1rem] leading-[1.08] sm:text-[2.7rem]">
            {JOIN_TEAM.heading}
          </h2>
          <p className="mt-5 text-[0.98rem] leading-relaxed text-charcoal/70">{JOIN_TEAM.body}</p>
          <div className="mt-8 flex justify-center">
            <ButtonLink href="#/contact">Get in Touch</ButtonLink>
          </div>
        </Reveal>
      </Section>

      <Gallery limit={8} />
      <CateringSection />
    </>
  );
}
