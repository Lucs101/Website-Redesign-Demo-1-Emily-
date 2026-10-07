import { IMG } from "./media";

export type Location = {
  slug: "eastlake" | "chula-vista" | "linda-vista";
  name: string;
  short: string;
  phoneDisplay: string;
  phoneHref: string;
  address: { line1: string; line2: string };
  hours: { days: string; time: string }[];
  image: string;
  note?: string;
  happyHour?: boolean;
  mapsQuery: string;
};

export const LOCATIONS: Location[] = [
  {
    slug: "eastlake",
    name: "Eastlake",
    short: "Eastlake",
    phoneDisplay: "619.482.9888",
    phoneHref: "+16194829888",
    address: { line1: "872 Eastlake Parkway Suite 310", line2: "Chula Vista, CA 91914" },
    hours: [
      { days: "Sunday – Thursday", time: "10AM – 9PM" },
      { days: "Friday – Saturday", time: "10AM – 9:30PM" },
    ],
    image: IMG.eastlakeBanner,
    happyHour: true,
    mapsQuery: "872 Eastlake Parkway Suite 310, Chula Vista, CA 91914",
  },
  {
    slug: "chula-vista",
    name: "Chula Vista",
    short: "Chula Vista",
    phoneDisplay: "619.482.8883",
    phoneHref: "+16194828883",
    address: { line1: "539 Telegraph Canyon Road", line2: "Chula Vista, CA 91910" },
    hours: [
      { days: "Sunday – Thursday", time: "9AM – 9PM" },
      { days: "Friday – Saturday", time: "9:30AM – 9:30PM" },
    ],
    image: IMG.chulaVistaBanner,
    mapsQuery: "539 Telegraph Canyon Road, Chula Vista, CA 91910",
  },
  {
    slug: "linda-vista",
    name: "Linda Vista",
    short: "Linda Vista",
    phoneDisplay: "858.268.8406",
    phoneHref: "+18582688406",
    address: { line1: "6947 Linda Vista Road, Suite H", line2: "San Diego, CA 92111" },
    hours: [
      { days: "Sunday – Thursday", time: "8AM – 8PM" },
      { days: "Friday – Saturday", time: "8:30AM – 8:30PM" },
    ],
    image: IMG.lindaVistaBanner,
    note: "Our first location — established in Linda Vista in 1991.",
    mapsQuery: "6947 Linda Vista Road Suite H, San Diego, CA 92111",
  },
];

export const getLocation = (slug?: string) => LOCATIONS.find((l) => l.slug === slug);

export const directionsUrl = (l: Location) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(l.mapsQuery)}`;

export const mapEmbedUrl = (l: Location) =>
  `https://www.google.com/maps?q=${encodeURIComponent(l.mapsQuery)}&output=embed`;
