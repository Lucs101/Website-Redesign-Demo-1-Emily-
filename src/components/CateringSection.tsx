import { useState } from "react";
import { CATERING, ORDER_ONLINE_URL } from "../data/site";
import { IMG, img } from "../data/media";
import { LOCATIONS } from "../data/locations";
import { ButtonLink, Button, Eyebrow, Reveal, Section, SmartImage } from "./ui";

const occasions = [
  "Office parties",
  "Church functions",
  "Family reunions",
  "Graduations",
  "Birthdays",
  "Rehearsal dinners",
];

export function CateringSection({ withForm = false }: { withForm?: boolean }) {
  const [sent, setSent] = useState(false);

  return (
    <Section tone="cream" className="py-20 sm:py-24 lg:py-28">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
        {/* Copy + imagery */}
        <div className="lg:col-span-6">
          <Reveal>
            <Eyebrow>Catering &amp; Events</Eyebrow>
            <h2 className="mt-5 font-display text-[2.3rem] leading-[1.05] text-balance sm:text-[3rem] lg:text-[3.4rem]">
              Plenty of flavor to go around
            </h2>
            <p className="mt-6 max-w-xl text-[1rem] leading-[1.85] text-charcoal/75">
              {CATERING.intro}
            </p>
          </Reveal>

          <Reveal delay={120} className="mt-9">
            <p className="eyebrow text-charcoal/65">Perfect for</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {occasions.map((o) => (
                <li
                  key={o}
                  className="rounded-full border border-ink/15 px-4 py-2 text-[0.78rem] text-charcoal/75"
                >
                  {o}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={180} className="mt-10 grid grid-cols-2 gap-4">
            <SmartImage
              src={img(IMG.cateringBanner, 900)}
              alt="A spread of Vietnamese dishes prepared for an event"
              className="aspect-[4/5] w-full rounded-xl"
            />
            <SmartImage
              src={img(IMG.grill_2192, 900)}
              alt="Platters and finger foods served family style"
              className="aspect-[4/5] w-full translate-y-5 rounded-xl"
            />
          </Reveal>

          <Reveal delay={220} className="mt-12">
            <p className="font-display text-[1.6rem] leading-snug text-ink">{CATERING.subheading}</p>
            <p className="mt-2 text-[0.95rem] text-charcoal/70">{CATERING.subbody}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href="#/contact" size="md">
                Contact Us
              </ButtonLink>
              <ButtonLink href={ORDER_ONLINE_URL} external variant="outline">
                Order Party Platters
              </ButtonLink>
            </div>
          </Reveal>
        </div>

        {/* Contact card / form */}
        <div className="lg:col-span-6 lg:pl-6">
          <Reveal delay={100}>
            <div className="rounded-2xl border border-ink/10 bg-white p-7 shadow-[0_40px_90px_-60px_rgba(23,17,13,0.5)] sm:p-9">
              {withForm && !sent ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                  className="space-y-5"
                >
                  <h3 className="font-display text-[1.9rem] leading-none">
                    Request event information
                  </h3>
                  <p className="text-[0.88rem] leading-relaxed text-charcoal/65">
                    Tell us a little about your event and we'll get back to you.
                  </p>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Your name" name="name" required />
                    <Field label="Email" name="email" type="email" required />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Phone" name="phone" type="tel" />
                    <div>
                      <label htmlFor="location" className="mb-1.5 block text-[0.72rem] uppercase tracking-[0.16em] text-charcoal/60">
                        Preferred location
                      </label>
                      <select
                        id="location"
                        name="location"
                        className="w-full rounded-lg border border-ink/15 bg-cream px-4 py-3 text-[0.92rem] text-ink focus:border-lacquer focus:outline-none"
                      >
                        {LOCATIONS.map((l) => (
                          <option key={l.slug} value={l.name}>
                            {l.name} — {l.phoneDisplay}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-[0.72rem] uppercase tracking-[0.16em] text-charcoal/60">
                      Event details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full rounded-lg border border-ink/15 bg-cream px-4 py-3 text-[0.92rem] text-ink focus:border-lacquer focus:outline-none"
                      placeholder="Date, number of guests, and what you have in mind."
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Send Request
                  </Button>
                  <p className="text-center text-[0.75rem] text-charcoal/50">
                    Or call us directly — Eastlake 619.482.9888 · Chula Vista 619.482.8883 · Linda
                    Vista 858.268.8406
                  </p>
                </form>
              ) : (
                <div className="py-6 text-center">
                  <p className="font-display text-[2rem] leading-none text-jade">Thank you.</p>
                  <p className="mx-auto mt-4 max-w-sm text-[0.95rem] leading-relaxed text-charcoal/70">
                    {sent
                      ? "We've received your request and will be in touch shortly. If it's urgent, please call your preferred location."
                      : CATERING.subbody}
                  </p>
                  <div className="mt-7 grid gap-3 text-left sm:grid-cols-3">
                    {LOCATIONS.map((l) => (
                      <a
                        key={l.slug}
                        href={`tel:${l.phoneHref}`}
                        className="rounded-xl border border-ink/12 bg-cream px-4 py-4 transition hover:border-lacquer"
                      >
                        <p className="eyebrow text-charcoal/65">{l.name}</p>
                        <p className="mt-2 font-display text-[1.3rem] leading-none text-lacquer">
                          {l.phoneDisplay}
                        </p>
                      </a>
                    ))}
                  </div>
                  {sent && (
                    <button
                      type="button"
                      onClick={() => setSent(false)}
                      className="mt-6 text-[0.78rem] uppercase tracking-[0.18em] text-charcoal/55 underline underline-offset-4 transition hover:text-ink"
                    >
                      Send another request
                    </button>
                  )}
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  const id = `field-${name}`;
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-[0.72rem] uppercase tracking-[0.16em] text-charcoal/60">
        {label}
        {required && <span className="text-lacquer"> *</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg border border-ink/15 bg-cream px-4 py-3 text-[0.92rem] text-ink focus:border-lacquer focus:outline-none"
      />
    </div>
  );
}

/** Full-width conversion band used on the home page. */
export function OrderCTA() {
  return (
    <section className="grain relative isolate overflow-hidden bg-ink text-cream">
      <div className="absolute inset-0 -z-10">
        <SmartImage
          src={img(IMG.menuBanner, 1800)}
          alt="Pho Hiep Grill dining room"
          className="h-full w-full"
        />
        <div aria-hidden className="absolute inset-0 bg-ink/78" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/60" />
      </div>

      <div className="mx-auto max-w-[84rem] px-5 py-24 text-center sm:px-8 lg:px-12 lg:py-32">
        <Reveal>
          <Eyebrow className="justify-center text-clay">Order Online</Eyebrow>
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-[2.4rem] leading-[1.04] text-balance sm:text-[3.4rem] lg:text-[4.2rem]">
            Your table is ready. So is take-out.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[0.98rem] leading-relaxed text-cream/70">
            Order ahead from the location nearest you, or call and we'll have it hot and ready.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <ButtonLink href={ORDER_ONLINE_URL} external size="lg">
              Order Online
            </ButtonLink>
            <ButtonLink href="#/locations" variant="outlineLight" size="lg">
              Find a Location
            </ButtonLink>
          </div>

          <div className="mx-auto mt-14 grid max-w-3xl gap-4 sm:grid-cols-3">
            {LOCATIONS.map((l) => (
              <a
                key={l.slug}
                href={`tel:${l.phoneHref}`}
                className="rounded-xl border border-cream/15 px-5 py-5 text-left transition hover:border-cream/45 hover:bg-cream/5"
              >
                <p className="eyebrow text-clay">{l.name}</p>
                <p className="mt-2 font-display text-[1.6rem] leading-none">{l.phoneDisplay}</p>
                <p className="mt-2 text-[0.78rem] text-cream/50">{l.hours[0].time} · {l.hours[1].time}</p>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
