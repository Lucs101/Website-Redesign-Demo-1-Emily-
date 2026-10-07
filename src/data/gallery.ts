import { IMG, img } from "./media";

export type GalleryImage = {
  src: string;
  alt: string;
  /** Relative editorial weight — drives the masonry spans. */
  span?: "tall" | "wide" | "square" | "tall2";
};

/** Photography from the restaurant's own archive (phohiepgrill.com). */
export const GALLERY: GalleryImage[] = [
  { src: IMG.pho1, alt: "A steaming bowl of Pho Dac Biet with rare beef, brisket and fresh herbs", span: "tall" },
  { src: IMG.grill_2263, alt: "Char-grilled pork skewers over broken rice at Pho Hiep Grill", span: "wide" },
  { src: IMG.mg_6805, alt: "The dining room set for guests at Pho Hiep Grill" },
  { src: IMG.grill_2234, alt: "Crispy Vietnamese egg rolls, cha gio, with fresh lettuce and herbs" },
  { src: IMG.pho3, alt: "Banh xeo, the crispy Vietnamese crepe, with lettuce and herbs", span: "wide" },
  { src: IMG.mg_6632, alt: "Fresh Vietnamese herbs and garnishes on the pass" },
  { src: IMG.grill_2288, alt: "Goi cuon spring rolls with peanut sauce", span: "tall" },
  { src: IMG.mg_6137, alt: "Guests sharing a family meal at Pho Hiep Grill" },
  { src: IMG.grill_2292, alt: "Com Tam Hiep — grilled pork chop, chicken and shrimp over broken rice", span: "wide" },
  { src: IMG.mg_6728, alt: "Interior detail of the restaurant" },
  { src: IMG.grill_2147, alt: "A bowl of pho being finished with scallions", span: "tall" },
  { src: IMG.mg_6616, alt: "Place settings and warm light in the dining room" },
  { src: IMG.mg_6217, alt: "Kitchen detail — fresh ingredients prepared daily" },
  { src: IMG.grill_2192, alt: "A table of Vietnamese dishes served family style", span: "wide" },
  { src: IMG.mg_6141, alt: "Server bringing bowls to the table" },
];

/** Hero slideshow frames — used by the cinematic motion hero. */
export const HERO_FRAMES = [
  { src: img(IMG.pho1, 2000), alt: "Steaming bowl of pho with rare beef and fresh herbs" },
  { src: img(IMG.grill_2292, 2000), alt: "Grilled pork chop, chicken and shrimp over broken rice" },
  { src: img(IMG.grill_2263, 2000), alt: "Char-grilled skewers over vermicelli noodles" },
  { src: img(IMG.pho3, 2000), alt: "Crispy Vietnamese crepe with fresh herbs" },
  { src: img(IMG.mg_6805, 2000), alt: "The dining room at Pho Hiep Grill" },
];

export const STORY_IMAGES = {
  primary: img(IMG.grill_2147, 1200),
  secondary: img(IMG.mg_6137, 1000),
  tertiary: img(IMG.mg_6632, 900),
};

export const PHO_IMAGES = {
  wide: img(IMG.pho3, 1800),
  tall: img(IMG.grill_2234, 1000),
};

export const FAMILY_IMAGES = {
  a: img(IMG.mg_6616, 1100),
  b: img(IMG.mg_6728, 900),
};
