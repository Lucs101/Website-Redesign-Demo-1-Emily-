import { IMG } from "./media";

/* ──────────────────────────────────────────────────────────────
   Brand + restaurant facts. Everything here is taken from the
   existing phohiepgrill.com website — nothing is invented.
   ────────────────────────────────────────────────────────────── */

export const BRAND = {
  name: "Pho Hiep Grill",
  legalName: "Pho Hiep & Grill",
  tagline: "Authentic Vietnamese foods.",
  tagline2: "Serving San Diego since 1991.",
  tagline3: "From our family to yours!",
  founded: 1991,
  logo: IMG.logo,
  logoAlt: "Pho Hiep Grill logo",
} as const;

/**
 * Online ordering is powered by ChowNow (com.chownow.phohiepgrill).
 * Update this single constant if the restaurant's ordering destination
 * changes — every ORDER ONLINE button on the site reads from it.
 */
export const ORDER_ONLINE_URL = "https://order.chownow.com/order/phohiepgrill/locations";

export const NAV = [
  { label: "Home", href: "#/" },
  { label: "About", href: "#/about" },
  { label: "Menu", href: "#/menu" },
  { label: "Locations", href: "#/locations" },
  { label: "Gallery", href: "#/gallery" },
  { label: "Catering & Events", href: "#/catering" },
  { label: "Contact", href: "#/contact" },
] as const;

export const STORY = {
  heading: "Our family has been serving authentic Vietnamese foods in San Diego since 1991.",
  paragraphs: [
    "Our first location was established in Linda Vista as a small local restaurant that seated less than 50 guests. With the frequent patronage of our customers we eventually extended our restaurant and doubled our space. At the constant request of our customers, who come from around the county, we have now expanded our business to Chula Vista.",
    "We pride ourselves in the quality of our foods, authenticity, and excellent value. Our foods are made with the freshest authentic ingredients and include our distinguished House Beef Soup (pho), healthy vermicelli noodles (bun), and fulfilling broken rice dishes (com). Renown chef, and founder, Hiep Phan, is the mastermind behind the dishes and has been making pho for almost 30 years.",
    "The family includes: Mr. Phan and his wife Hong, their daughter, Emily and her husband, Kevin. Together, we work to bring authentic Vietnamese foods and a bit of our culture to our customers and friends.",
  ],
  quote:
    "Preparing pho is an art that can not be taken lightly. Anyone can boil a pot of bones to make the broth but to balance all the ingredients to make the perfect bowl of pho takes much preparation and expertise.",
  quoteAttribution: "Hiep Phan — Chef & Founder",
} as const;

export const FAMILY = [
  {
    name: "Hiep Phan",
    role: "Chef & Founder",
    note: "The mastermind behind the dishes, making pho for almost 30 years.",
  },
  {
    name: "Hong",
    role: "Mr. Phan's wife",
    note: "The heart of the kitchen and the family table.",
  },
  {
    name: "Emily",
    role: "Daughter",
    note: "Second generation, carrying the recipes forward.",
  },
  {
    name: "Kevin",
    role: "Emily's husband",
    note: "Family, and part of the team that welcomes you in.",
  },
] as const;

export const TIMELINE = [
  {
    year: "1991",
    title: "Linda Vista",
    body: "Our first location opens in Linda Vista — a small local restaurant that seats less than 50 guests.",
  },
  {
    year: "A few years on",
    title: "Doubling our space",
    body: "With the frequent patronage of our customers we eventually extend the restaurant and double our space.",
  },
  {
    year: "Next",
    title: "Chula Vista",
    body: "At the constant request of customers who come from around the county, we expand our business to Chula Vista.",
  },
  {
    year: "Today",
    title: "Three family tables",
    body: "Eastlake, Chula Vista and Linda Vista — the same broths, the same grill, the same family.",
  },
] as const;

export const CATERING = {
  heading: "Events & Catering",
  intro:
    "Whether you're having an office party, a church function, or are hosting a family reunion, with our delicious assortment of appetizers, entrees, and traditional finger foods, there's plenty of flavor to go around! We can also be a space to host your event.",
  subheading: "We're happy to help you with your event!",
  subbody: "Contact us using the form below for more information.",
} as const;

export const HAPPY_HOUR = {
  title: "Happy Hour — Eastlake",
  schedule: "Weekdays 4PM – 7PM  |  Weekends 12PM – 5PM",
  days: [
    { day: "Monday", name: "Monday-Madness", detail: "1/2 price on selected appetizers, 1/2 margaritas" },
    { day: "Tuesday", name: "Tequila-Tuesday", detail: "1/2 price on all tequilas" },
    { day: "Wednesday", name: "Whisky-Wednesday", detail: "1/2 price on whiskys" },
    { day: "Thursday", name: "Tini-Thursday", detail: "1/2 price on all martinis" },
    { day: "Friday", name: "Fun-Friday", detail: "1/2 on selected sakes" },
    { day: "Saturday & Sunday", name: "$4 Draft Beer", detail: "Weekend draft special" },
  ],
} as const;

export const JOIN_TEAM = {
  heading: "Join the Team",
  body: "We are always looking for friendly, hard-working people who love good food and good company. Reach out and tell us a little about yourself.",
} as const;
