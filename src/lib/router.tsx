import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type AnchorHTMLAttributes,
  type ReactNode,
} from "react";

/* ──────────────────────────────────────────────────────────────
   A very small hash router. Hash routing keeps the site deployable
   to any static host (GitHub Pages, Vercel, S3) with zero server
   rewrites while still giving clean, shareable URLs like
   /#/menu/eastlake.
   ────────────────────────────────────────────────────────────── */

type RouterValue = { path: string; navigate: (to: string) => void };

const RouterContext = createContext<RouterValue>({ path: "/", navigate: () => {} });

function readHash(): string {
  const raw = window.location.hash.replace(/^#/, "");
  if (!raw || raw === "/") return "/";
  return raw.startsWith("/") ? raw : `/${raw}`;
}

export function RouterProvider({ children }: { children: ReactNode }) {
  const [path, setPath] = useState(() => (typeof window === "undefined" ? "/" : readHash()));

  useEffect(() => {
    const onChange = () => setPath(readHash());
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  const navigate = useCallback((to: string) => {
    const clean = to.startsWith("/") ? to : `/${to}`;
    if (readHash() === clean) return;
    window.location.hash = `#${clean}`;
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [path]);

  const value = useMemo(() => ({ path, navigate }), [path, navigate]);

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
}

export const useRouter = () => useContext(RouterContext);

/** Splits "/menu/eastlake" -> ["menu", "eastlake"] */
export function useSegments(): string[] {
  const { path } = useRouter();
  return useMemo(() => path.split("/").filter(Boolean), [path]);
}

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { to: string };

export function Link({ to, children, onClick, ...rest }: LinkProps) {
  const { navigate } = useRouter();
  const external = /^(https?:|mailto:|tel:)/.test(to);
  const href = external ? to : `#${to.startsWith("/") ? to : `/${to}`}`;

  return (
    <a
      {...rest}
      href={href}
      onClick={(e) => {
        onClick?.(e);
        if (external || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey) return;
        e.preventDefault();
        navigate(to.startsWith("/") ? to : `/${to}`);
      }}
    >
      {children}
    </a>
  );
}
