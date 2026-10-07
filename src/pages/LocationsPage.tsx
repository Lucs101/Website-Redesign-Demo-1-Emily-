import { LocationsGrid } from "../components/Locations";
import { OrderCTA } from "../components/CateringSection";
import { PageHero } from "./AboutPage";
import { IMG } from "../data/media";

export default function LocationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Locations"
        title="Three family tables around San Diego"
        lead="Same broth, same grill, same family — in Eastlake, Chula Vista and Linda Vista."
        image={IMG.locationsBanner}
        imageAlt="Pho Hiep Grill restaurant exterior"
      />
      <LocationsGrid />
      <OrderCTA />
    </>
  );
}
