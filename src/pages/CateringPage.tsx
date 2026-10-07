import { CateringSection, OrderCTA } from "../components/CateringSection";
import { PageHero } from "./AboutPage";
import { IMG } from "../data/media";

export default function CateringPage() {
  return (
    <>
      <PageHero
        eyebrow="Catering & Events"
        title="Let us cater your gathering"
        lead="An office party, a church function, or a family reunion — there's plenty of flavor to go around."
        image={IMG.cateringBanner}
        imageAlt="Vietnamese dishes prepared for an event at Pho Hiep Grill"
      />
      <CateringSection withForm />
      <OrderCTA />
    </>
  );
}
