import MenuBrowser from "../components/MenuBrowser";
import { PageHero } from "./AboutPage";
import { IMG } from "../data/media";

export default function MenuPage({ slug, onSlugChange }: { slug: string; onSlugChange: (s: string) => void }) {
  return (
    <>
      <PageHero
        eyebrow="Menu"
        title="The family menu"
        lead="Our distinguished House Beef Soup (pho), healthy vermicelli noodles (bun), and fulfilling broken rice dishes (com) — made with the freshest authentic ingredients."
        image={IMG.menuBanner}
        imageAlt="Pho Hiep Grill dining room and menu"
      />
      <MenuBrowser slug={slug} onSlugChange={onSlugChange} />
    </>
  );
}
