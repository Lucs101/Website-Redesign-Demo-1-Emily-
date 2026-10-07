import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ImgHTMLAttributes,
  type ReactNode,
} from "react";
import { cn } from "../utils/cn";
import { img } from "../data/media";

/* ── Scroll reveal ─────────────────────────────────────────── */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={cn("reveal", visible && "is-visible", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

/* ── Lazy, responsive image ────────────────────────────────── */
type SmartImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
  /** Request a sized variant from the restaurant's CDN. */
  width?: number;
  /** Wrap in a fixed-ratio frame. */
  ratio?: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
};

export function SmartImage({
  src,
  alt,
  width,
  ratio,
  className,
  imgClassName,
  priority = false,
  ...rest
}: SmartImageProps) {
  const [loaded, setLoaded] = useState(false);
  const resolved = width ? img(src, width) : src;

  const node = (
    <img
      {...rest}
      src={resolved}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      // @ts-expect-error – valid HTML attribute, supported by React 19
      fetchpriority={priority ? "high" : undefined}
      onLoad={() => setLoaded(true)}
      className={cn(
        "h-full w-full object-cover transition-[opacity,filter] duration-700",
        loaded ? "opacity-100 blur-0" : "opacity-0 blur-md",
        imgClassName,
      )}
    />
  );

  if (!ratio) {
    return (
      <img
        {...rest}
        src={resolved}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        // @ts-expect-error – valid HTML attribute, supported by React 19
        fetchpriority={priority ? "high" : undefined}
        onLoad={() => setLoaded(true)}
        className={cn(
          "h-full w-full object-cover transition-[opacity,filter] duration-700",
          loaded ? "opacity-100 blur-0" : "opacity-0 blur-md",
          className,
          imgClassName,
        )}
      />
    );
  }

  return (
    <div className={cn("relative overflow-hidden bg-cream-2", className)} style={{ aspectRatio: ratio }}>
      {node}
    </div>
  );
}

/* ── Section shell ─────────────────────────────────────────── */
export function Section({
  children,
  className,
  id,
  tone = "cream",
  containerClass,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "cream" | "ink" | "sand" | "white";
  containerClass?: string;
}) {
  const tones = {
    cream: "bg-cream text-ink",
    white: "bg-white text-ink",
    sand: "bg-cream-2 text-ink",
    ink: "bg-ink text-cream",
  };
  return (
    <section id={id} className={cn("relative", tones[tone], className)}>
      <div className={cn("mx-auto w-full max-w-[84rem] px-5 sm:px-8 lg:px-12", containerClass)}>{children}</div>
    </section>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("eyebrow inline-flex items-center gap-3 text-lacquer", className)}>
      <span aria-hidden className="h-px w-8 bg-current opacity-50" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  tone = "dark",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <Eyebrow className={cn(tone === "light" && "text-clay", align === "center" && "justify-center")}>
          {eyebrow}
        </Eyebrow>
      )}
      <h2
        className={cn(
          "mt-5 text-balance font-display text-[2.1rem] leading-[1.08] sm:text-5xl lg:text-[3.4rem]",
          tone === "light" ? "text-cream" : "text-ink",
        )}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={cn(
            "mt-5 text-[1.0125rem] leading-relaxed sm:text-lg",
            tone === "light" ? "text-cream/70" : "text-charcoal/75",
          )}
        >
          {lead}
        </p>
      )}
    </div>
  );
}

/* ── Buttons ───────────────────────────────────────────────── */
const base =
  "inline-flex items-center justify-center gap-2 rounded-full text-[0.72rem] font-medium uppercase tracking-[0.18em] transition-all duration-300 disabled:opacity-50";

const variants = {
  primary: "bg-lacquer text-white hover:bg-[#8f2d16] shadow-[0_10px_30px_-12px_rgba(168,56,28,0.7)]",
  light: "bg-cream text-ink hover:bg-white",
  outline:
    "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-cream",
  outlineLight: "border border-cream/40 text-cream hover:bg-cream hover:text-ink",
  ghost: "text-ink hover:text-lacquer",
} as const;

const sizes = {
  sm: "px-5 py-2.5",
  md: "px-7 py-3.5",
  lg: "px-9 py-4",
} as const;

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  external?: boolean;
  ariaLabel?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  external,
  ariaLabel,
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(base, variants[variant], sizes[size], className)}
    >
      {children}
    </a>
  );
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
}) {
  return (
    <button {...rest} className={cn(base, variants[variant], sizes[size], className)}>
      {children}
    </button>
  );
}

/* ── Decorative divider ────────────────────────────────────── */
export function Ornament({ className, tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  return (
    <div
      aria-hidden
      className={cn("flex items-center justify-center gap-3", className)}
    >
      <span className={cn("h-px w-16", tone === "light" ? "bg-cream/25" : "bg-ink/20")} />
      <span className={cn("rotate-45 text-[0.6rem]", tone === "light" ? "text-clay" : "text-lacquer")}>◆</span>
      <span className={cn("h-px w-16", tone === "light" ? "bg-cream/25" : "bg-ink/20")} />
    </div>
  );
}
