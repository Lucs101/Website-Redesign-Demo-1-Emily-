import { useEffect, useState } from "react";
import { cn } from "../utils/cn";
import { NAV, ORDER_ONLINE_URL } from "../data/site";
import { Link, useRouter } from "../lib/router";
import Logo from "./Logo";
import { ButtonLink } from "./ui";

export default function Header() {
  const { path } = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isHome = path === "/";
  const solid = scrolled || !isHome;

  return (
    <>
      {/* Micro utility bar — phones up front, the way regulars use the site */}
      <div className="hidden bg-ink text-cream/70 lg:block">
        <div className="mx-auto flex max-w-[84rem] items-center justify-between px-12 py-2 text-[0.7rem] tracking-wide">
          <p className="font-light">Authentic Vietnamese food · Serving San Diego since 1991</p>
          <div className="flex items-center gap-6 font-light">
            <span>Eastlake <a className="transition hover:text-cream" href="tel:+16194829888">619.482.9888</a></span>
            <span className="text-cream/25">|</span>
            <span>Chula Vista <a className="transition hover:text-cream" href="tel:+16194828883">619.482.8883</a></span>
            <span className="text-cream/25">|</span>
            <span>Linda Vista <a className="transition hover:text-cream" href="tel:+18582688406">858.268.8406</a></span>
          </div>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-500",
          solid
            ? "border-b border-ink/10 bg-cream/95 backdrop-blur-md shadow-[0_1px_24px_-16px_rgba(23,17,13,0.6)]"
            : "border-b border-transparent bg-gradient-to-b from-ink/70 to-transparent",
        )}
      >
        <nav
          aria-label="Main navigation"
          className={cn(
            "mx-auto flex max-w-[84rem] items-center justify-between gap-6 px-5 transition-all duration-500 sm:px-8 lg:px-12",
            solid ? "h-[4.5rem]" : "h-[5.5rem]",
          )}
        >
          {/* Logo */}
          <Link
            to="/"
            aria-label="Pho Hiep Grill — home"
            className={cn(
              "flex shrink-0 items-center rounded-full transition-all duration-500",
              !solid && "bg-ink/45 px-3 py-1.5 backdrop-blur-sm",
            )}
          >
            <Logo className={cn("transition-all duration-500", solid ? "h-9" : "h-10")} />
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 xl:flex">
            {NAV.map((item) => {
              const active =
                item.href === "#/" ? path === "/" : path.startsWith(item.href.slice(1));
              return (
                <li key={item.href}>
                  <Link
                    to={item.href.slice(1)}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative rounded-full px-4 py-2 text-[0.78rem] font-normal tracking-[0.06em] transition-colors duration-300",
                      solid
                        ? active
                          ? "text-lacquer"
                          : "text-charcoal hover:text-lacquer"
                        : active
                          ? "text-cream"
                          : "text-cream/80 hover:text-cream",
                    )}
                  >
                    {item.label}
                    {active && (
                      <span
                        aria-hidden
                        className={cn(
                          "absolute inset-x-4 -bottom-0.5 h-px",
                          solid ? "bg-lacquer" : "bg-cream",
                        )}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <ButtonLink
              href={ORDER_ONLINE_URL}
              external
              size="sm"
              className={cn("hidden sm:inline-flex", !solid && "shadow-none")}
              variant={solid ? "primary" : "light"}
            >
              Order Online
            </ButtonLink>

            {/* Hamburger */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className={cn(
                "group relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-full transition-colors xl:hidden",
                solid ? "text-ink hover:bg-ink/5" : "text-cream hover:bg-cream/10",
              )}
            >
              <span
                className={cn(
                  "h-px w-5 bg-current transition-all duration-300",
                  open && "translate-y-[6px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "h-px w-5 bg-current transition-all duration-300",
                  open && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "h-px w-5 bg-current transition-all duration-300",
                  open && "-translate-y-[6px] -rotate-45",
                )}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        className={cn(
          "fixed inset-0 z-40 flex flex-col bg-ink text-cream transition-all duration-500 xl:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="flex flex-1 flex-col justify-center px-8 pt-24 pb-10">
          <ul className="space-y-1">
            {NAV.map((item, i) => (
              <li key={item.href}>
                <Link
                  to={item.href.slice(1)}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block border-b border-cream/10 py-4 font-display text-[2rem] leading-none transition-all duration-500",
                    open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                  )}
                  // stagger the entrance
                  {...{ style: { transitionDelay: `${80 + i * 55}ms` } }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-10 space-y-4">
            <ButtonLink href={ORDER_ONLINE_URL} external size="lg" className="w-full">
              Order Online
            </ButtonLink>
            <div className="grid gap-2 pt-2 text-sm text-cream/65">
              <p>
                <span className="text-cream/45">Eastlake</span>{" "}
                <a className="hover:text-cream" href="tel:+16194829888">619.482.9888</a>
              </p>
              <p>
                <span className="text-cream/45">Chula Vista</span>{" "}
                <a className="hover:text-cream" href="tel:+16194828883">619.482.8883</a>
              </p>
              <p>
                <span className="text-cream/60">Linda Vista</span>{" "}
                <a className="hover:text-cream" href="tel:+18582688406">858.268.8406</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
