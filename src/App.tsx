import { useEffect } from "react";
import { RouterProvider, useSegments, useRouter } from "./lib/router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import MenuPage from "./pages/MenuPage";
import LocationsPage from "./pages/LocationsPage";
import GalleryPage from "./pages/GalleryPage";
import CateringPage from "./pages/CateringPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

const META: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Pho Hiep Grill | Authentic Vietnamese Food in San Diego Since 1991",
    description:
      "Our family has been serving authentic Vietnamese foods in San Diego since 1991 — pho, vermicelli noodles and broken rice dishes at three locations.",
  },
  "/about": {
    title: "Our Story | Pho Hiep Grill — From Our Family to Yours",
    description:
      "Est. 1991 in Linda Vista. Chef and founder Hiep Phan has been making pho for almost 30 years. Meet the family behind Pho Hiep Grill.",
  },
  "/menu": {
    title: "Menu | Pho Hiep Grill — Vietnamese Noodle Soup, Rice & Vermicelli",
    description:
      "Browse the Eastlake, Chula Vista and Linda Vista menus. Pho, broken rice (com), vermicelli (bun), banh mi, chef's specials and party platters.",
  },
  "/locations": {
    title: "Locations | Pho Hiep Grill — Eastlake, Chula Vista & Linda Vista",
    description:
      "Find Pho Hiep Grill in Eastlake, Chula Vista and Linda Vista. Addresses, phone numbers, hours, directions and online ordering.",
  },
  "/gallery": {
    title: "Gallery | Pho Hiep Grill",
    description: "Food, family and dining-room photography from Pho Hiep Grill in San Diego.",
  },
  "/catering": {
    title: "Events & Catering | Pho Hiep Grill",
    description:
      "Office parties, church functions and family reunions — appetizers, entrees and traditional finger foods from Pho Hiep Grill.",
  },
  "/contact": {
    title: "Contact | Pho Hiep Grill",
    description:
      "Call Eastlake 619.482.9888, Chula Vista 619.482.8883 or Linda Vista 858.268.8406. Addresses, hours and directions.",
  },
};

function setMeta(path: string) {
  const meta = META[path] ?? META["/"];
  document.title = meta.title;
  let tag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
  if (!tag) {
    tag = document.createElement("meta");
    tag.name = "description";
    document.head.appendChild(tag);
  }
  tag.content = meta.description;
}

function Routes() {
  const segments = useSegments();
  const { path } = useRouter();
  const [first, second] = segments;

  useEffect(() => {
    setMeta("/" + (first ?? ""));
  }, [first, path]);

  switch (first) {
    case undefined:
      return <HomePage />;
    case "about":
      return <AboutPage />;
    case "menu":
      return <MenuPage slug={second ?? "eastlake"} onSlugChange={(s) => (window.location.hash = `#/menu/${s}`)} />;
    case "locations":
      return <LocationsPage />;
    case "gallery":
      return <GalleryPage />;
    case "catering":
      return <CateringPage />;
    case "contact":
      return <ContactPage />;
    default:
      return <NotFoundPage />;
  }
}

export default function App() {
  return (
    <RouterProvider>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-cream"
      >
        Skip to content
      </a>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main" className="flex-1">
          <Routes />
        </main>
        <Footer />
      </div>
    </RouterProvider>
  );
}
