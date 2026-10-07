import Gallery from "../components/Gallery";
import { PageHero } from "./AboutPage";
import { OrderCTA } from "../components/CateringSection";
import { IMG } from "../data/media";

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Food, family and the dining room"
        lead="Photography from our kitchens, our dining rooms and our family table."
        image={IMG.menuBanner}
        imageAlt="Pho Hiep Grill restaurant"
      />
      <Gallery />
      <OrderCTA />
    </>
  );
}
