import { FAMILY, STORY, TIMELINE } from "../data/site";
import { FAMILY_IMAGES, PHO_IMAGES, STORY_IMAGES } from "../data/gallery";
import { ButtonLink, Eyebrow, Reveal, Section, SmartImage } from "./ui";

export function AboutStory() {
  return (
    <Section id="about" tone="white" className="py-20 sm:py-24 lg:py-32">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
        {/* Editorial image stack */}
        <div className="relative lg:col-span-6">
          <Reveal>
            <SmartImage
              src={STORY_IMAGES.primary}
              alt="A bowl of pho being finished in the Pho Hiep Grill kitchen"
              className="aspect-[4/5] w-full rounded-[1.25rem]"
            />
          </Reveal>
          <Reveal delay={200} className="absolute -bottom-10 -right-4 w-1/2 sm:-right-8 sm:w-[46%]">
            <SmartImage
              src={STORY_IMAGES.secondary}
              alt="Guests sharing a family meal at Pho Hiep Grill"
              className="aspect-square w-full rounded-[1rem] border-[6px] border-white shadow-[0_30px_70px_-40px_rgba(23,17,13,0.6)]"
            />
          </Reveal>
          <div
            aria-hidden
            className="absolute -left-6 -top-6 h-32 w-32 rounded-full border border-lacquer/20 sm:h-44 sm:w-44"
          />
        </div>

        {/* Copy */}
        <div className="lg:col-span-6 lg:pl-6">
          <Reveal>
            <Eyebrow>Our Story</Eyebrow>
            <h2 className="mt-5 font-display text-[2.3rem] leading-[1.06] text-balance sm:text-[3rem] lg:text-[3.5rem]">
              From Our Family to Yours
            </h2>
            <p className="mt-7 font-display text-[1.35rem] leading-snug text-charcoal sm:text-[1.6rem]">
              {STORY.heading}
            </p>
          </Reveal>

          <Reveal delay={100} className="mt-7 space-y-5 text-[0.98rem] leading-[1.85] text-charcoal/75">
            {STORY.paragraphs.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </Reveal>

          {/* The pho quote */}
          <Reveal delay={160}>
            <blockquote className="relative mt-10 border-l-2 border-lacquer pl-6 sm:pl-8">
              <p className="font-display text-[1.3rem] leading-[1.45] italic text-ink sm:text-[1.55rem]">
                “{STORY.quote}”
              </p>
              <footer className="mt-4 text-[0.7rem] uppercase tracking-[0.22em] text-charcoal/55">
                — {STORY.quoteAttribution}
              </footer>
            </blockquote>
          </Reveal>

          <Reveal delay={220} className="mt-10">
            <ButtonLink href="#/menu" variant="outline">
              Explore the Menu
            </ButtonLink>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

export function FamilyTradition() {
  return (
    <Section tone="sand" className="py-20 sm:py-24 lg:py-32">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <Reveal>
            <Eyebrow>Family &amp; Tradition</Eyebrow>
            <h2 className="mt-5 font-display text-[2.2rem] leading-[1.06] text-balance sm:text-[2.9rem]">
              Four of us. Three kitchens. One broth.
            </h2>
            <p className="mt-6 text-[0.98rem] leading-[1.85] text-charcoal/75">
              Together, we work to bring authentic Vietnamese foods and a bit of our culture to our
              customers and friends. That has been the whole idea since the day we opened in Linda
              Vista.
            </p>
          </Reveal>

          <Reveal delay={140} className="mt-10 grid grid-cols-2 gap-4">
            <SmartImage
              src={FAMILY_IMAGES.a}
              alt="Warm light and place settings in the dining room"
              className="aspect-[3/4] w-full rounded-xl"
            />
            <SmartImage
              src={FAMILY_IMAGES.b}
              alt="Interior detail at Pho Hiep Grill"
              className="aspect-[3/4] w-full translate-y-6 rounded-xl"
            />
          </Reveal>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          {/* Timeline */}
          <Reveal>
            <h3 className="eyebrow text-charcoal/50">How we grew</h3>
            <ol className="mt-7 space-y-8 border-l border-ink/12 pl-7">
              {TIMELINE.map((t) => (
                <li key={t.title} className="relative">
                  <span
                    aria-hidden
                    className="absolute -left-[2.12rem] top-1.5 h-2.5 w-2.5 rotate-45 border border-lacquer bg-cream"
                  />
                  <p className="eyebrow text-lacquer">{t.year}</p>
                  <h4 className="mt-2 font-display text-2xl">{t.title}</h4>
                  <p className="mt-2 text-[0.93rem] leading-relaxed text-charcoal/70">{t.body}</p>
                </li>
              ))}
            </ol>
          </Reveal>

          {/* Family */}
          <Reveal delay={120} className="mt-14">
            <h3 className="eyebrow text-charcoal/65">The family</h3>
            <dl className="mt-7 grid gap-x-8 gap-y-7 sm:grid-cols-2">
              {FAMILY.map((f) => (
                <div key={f.name} className="border-t border-ink/12 pt-4">
                  <dt className="font-display text-[1.6rem] leading-none">{f.name}</dt>
                  <dd className="mt-1.5">
                    <span className="text-[0.68rem] uppercase tracking-[0.2em] text-lacquer">
                      {f.role}
                    </span>
                    <p className="mt-2 text-[0.9rem] leading-relaxed text-charcoal/70">{f.note}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

/** Full-bleed storytelling section about the craft of pho. */
export function PhoStory() {
  return (
    <section className="grain relative isolate overflow-hidden bg-ink text-cream">
      <div className="absolute inset-0 -z-10">
        <SmartImage
          src={PHO_IMAGES.wide}
          alt="Crispy Vietnamese crepe and fresh herbs on the pass"
          className="h-full w-full"
          imgClassName="object-cover object-center"
        />
        <div aria-hidden className="absolute inset-0 bg-ink/80" />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40"
        />
      </div>

      <div className="mx-auto max-w-[84rem] px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow className="text-clay">The Art of Pho</Eyebrow>
            <h2 className="mt-5 font-display text-[2.5rem] leading-[1.02] text-balance sm:text-[3.6rem] lg:text-[4.6rem]">
              “Preparing pho is an art.”
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <blockquote className="mt-9 border-l border-clay/40 pl-6 sm:pl-8">
              <p className="font-display text-[1.4rem] leading-[1.5] text-cream/90 sm:text-[1.75rem]">
                {STORY.quote}
              </p>
              <footer className="mt-5 text-[0.7rem] uppercase tracking-[0.22em] text-clay">
                — {STORY.quoteAttribution}
              </footer>
            </blockquote>
          </Reveal>

          <Reveal delay={180} className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              { k: "1991", v: "Serving San Diego" },
              { k: "Almost 30 yrs", v: "Making pho" },
              { k: "3", v: "Family locations" },
            ].map((s) => (
              <div key={s.k} className="border-t border-cream/15 pt-4">
                <p className="font-display text-[1.9rem] leading-none text-cream">{s.k}</p>
                <p className="mt-2 text-[0.68rem] uppercase tracking-[0.2em] text-cream/50">{s.v}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
