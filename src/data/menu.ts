import { IMG } from "./media";

/* ──────────────────────────────────────────────────────────────
   MENU DATA
   Every dish, description and price below is transcribed from the
   restaurant's own location menu pages:
     · /eastlake-menu
     · /chula-vista-menu
     · /linda-vista-menu
   Menus differ by location — categories and prices are NOT shared.
   To update a price, edit the `price` field on the dish object.
   ────────────────────────────────────────────────────────────── */

export type Badge = "House Special" | "Vegetarian" | "Grilled" | "Signature" | "Spicy";

export type Dish = {
  name: string;
  desc: string;
  /** Primary price as printed on the menu, e.g. "$12.50" or "$11 sm / $12.5 lg" */
  price?: string;
  /** Optional secondary price line */
  priceAlt?: string;
  /** e.g. "Add $2 extra for shrimp" */
  note?: string;
  badge?: Badge;
};

export type MenuGroup = { title?: string; note?: string; items: Dish[] };

export type MenuCategory = {
  id: string;
  label: string;
  /** Optional lead-in text printed above the group. */
  intro?: string;
  /** Optional size pricing printed under the category title. */
  sizePrice?: string;
  groups: MenuGroup[];
};

export type LocationMenu = {
  slug: "eastlake" | "chula-vista" | "linda-vista";
  title: string;
  intro: string;
  categories: MenuCategory[];
};

const PHO_INTRO =
  "Our signature beef noodle soup comes with your choice of various beef cuts and fresh noodles. All soups are served with a side of fresh bean sprouts, serrated coriander, Thai basil and jalapeños.";

const RICE_INTRO =
  "All rice entrees are served with steamed broken rice, lettuce, tomatoes, cucumbers, pickled carrots and daikon, and a side of vinaigrette fish sauce (nuoc mam), and soup.";

const VERMICELLI_INTRO =
  "Served with vermicelli rice noodles, shredded lettuce, cabbage, cucumbers, bean sprouts, mint herbs, pickled carrots and daikon, roasted peanuts, and a side of vinaigrette fish sauce (nuoc mam). All meats are char-grilled.";

const PRICES_NOTE = "*** Prices subject to change without notice.";

/* ══════════════════════════════════════════════════════════════
   EASTLAKE
   ══════════════════════════════════════════════════════════════ */
const EASTLAKE: LocationMenu = {
  slug: "eastlake",
  title: "Eastlake Menu",
  intro:
    "Our Eastlake kitchen serves the widest selection of the family's recipes — from the House Beef Soup to wok and clay pot entrees, vegetarian plates and a full bar with happy hour.",
  categories: [
    {
      id: "appetizers",
      label: "Appetizers",
      intro: "We offer a variety of traditional Vietnamese appetizers to please your palate.",
      groups: [
        {
          title: "Salads",
          items: [
            {
              name: "Goi Tom Thit",
              desc: "Shrimp & Pork Salad — with pickled carrots and daikon, jellyfish, shrimp, pork, basil, rau ram herbs, roasted peanuts, and crispy shallots.",
              price: "$8",
            },
            {
              name: "Goi Du Du",
              desc: "Green Papaya Salad — with tofu, pickled carrots, rau ram herb, crispy shallot, and roasted peanuts.",
              price: "$8",
              badge: "Vegetarian",
            },
          ],
        },
        {
          title: "Chef's Specials",
          items: [
            { name: "Muc Chien", desc: "Hiep's Calamari — with salt and pepper.", price: "$9.50" },
            {
              name: "Dau Hu Chien Don",
              desc: "Silky Tofu — lightly breaded for a crispy texture, topped with scallion, bonito flakes, grated daikon, and light soy based sauce.",
              price: "$7",
            },
            { name: "Ga Chien Don", desc: "Salt and pepper crispy chicken wings.", price: "$10.50" },
            { name: "Tom Rang Muoi", desc: "Shell-on crispy salted shrimp.", price: "$9.50" },
            { name: "Tom Chien Don", desc: "Shrimp Tempura — lightly breaded crispy shrimp.", price: "$9.50" },
            {
              name: "Khoai Chien Don",
              desc: "Vegetable Tempura — lightly breaded assorted vegetable tempura.",
              price: "$7.50",
              badge: "Vegetarian",
            },
            {
              name: "Khoai Tom Chien Don",
              desc: "Shrimp & Vegetable Tempura — lightly breaded shrimp and assorted vegetable tempura.",
              price: "$9.50",
            },
          ],
        },
        {
          title: "Rolls",
          items: [
            {
              name: "Cha Gio",
              desc: "Egg Rolls — crispy rolls with ground pork, shrimp, glass noodles, carrots, mushrooms, and vinaigrette fish sauce (nuoc mam).",
              price: "$6.50",
              priceAlt: "$8.50",
              badge: "House Special",
            },
            {
              name: "Goi Cuon",
              desc: "Spring Rolls — rice paper rolls with shrimp, pork, vermicelli noodles, bean sprouts, mint herbs, and peanut sauce.",
              price: "$6.50",
            },
            {
              name: "Vegetarian Spring Rolls",
              desc: "Rice paper rolls with vegetables, tofu, and peanut sauce.",
              price: "$6.50",
              badge: "Vegetarian",
            },
            {
              name: "Nem Nuong Cuon",
              desc: "Vietnamese Pork Sausage Rolls — with lettuce, cucumbers, carrots, and a side of peanut sauce.",
              price: "$7",
            },
            {
              name: "Chao Tom Cuon",
              desc: "Shrimp Rolls with Grilled Shrimp Paste on Sugarcane — with shrimp paste grilled on sugarcane, lettuce, pickled carrots, daikon, and assorted mint herbs.",
              price: "$7",
            },
          ],
        },
        {
          title: "Vietnamese Crepe",
          items: [
            {
              name: "Banh Xeo",
              desc: "Vietnamese Crepe — crispy crepe with shrimp, pork, bean sprouts, and onions, wrapped with lettuce and vinaigrette fish sauce.",
              price: "$9",
            },
            {
              name: "Banh Xeo Chay",
              desc: "Vegetarian Crepe — with tofu, mung beans, bean sprouts, onions, and soy sauce.",
              price: "$8",
              badge: "Vegetarian",
            },
          ],
        },
      ],
    },
    {
      id: "pho",
      label: "Pho — Beef Noodle Soup",
      intro: PHO_INTRO,
      sizePrice: "$11 sm / $12.50 lg",
      groups: [
        {
          items: [
            {
              name: "Dac Biet",
              desc: "Special combo with rare slices of beef, lean brisket, fatty brisket, flank, tendon and tripe.",
              badge: "Signature",
            },
            { name: "Tai Nam Gan Sach", desc: "Rare slices of beef, flank, tendon, and tripe." },
            { name: "Tai Nam", desc: "Rare slices of beef and flank." },
            { name: "Tai Gan", desc: "Rare slices of beef and tendon." },
            { name: "Tai Sach", desc: "Rare slices of beef and tripe." },
            { name: "Tai Chin", desc: "Rare slices of beef and lean brisket." },
            { name: "Chin Nam Ve Don", desc: "Lean brisket and flank." },
            { name: "Tai", desc: "Rare slices of beef." },
            { name: "Chin", desc: "Lean brisket." },
            { name: "Nam Ve Don", desc: "Flank." },
            { name: "Bo Vien", desc: "Beef meatballs." },
          ],
        },
      ],
    },
    {
      id: "rice",
      label: "Rice Entrees",
      intro: RICE_INTRO,
      groups: [
        {
          items: [
            {
              name: "Com Tam Hiep",
              desc: "Hiep's house special combo — pork chop, chicken and shrimps grilled over an open flame, shredded pork, and Vietnamese-style steamed meatloaf.",
              price: "$13.50",
              badge: "House Special",
            },
            {
              name: "Com Tam Thit Nuong",
              desc: "Grilled honey pork — marinated in a honey sauce and grilled over an open flame.",
              price: "$12",
              badge: "Grilled",
            },
            {
              name: "Com Tam Bi Cha Thit Nuong",
              desc: "Grilled pork combo — marinated in a honey sauce and grilled over an open flame, shredded pork, and Vietnamese-style steamed meatloaf.",
              price: "$12.50",
              badge: "Grilled",
            },
          ],
        },
      ],
    },
    {
      id: "vermicelli",
      label: "Vermicelli Noodle Entrees",
      intro: VERMICELLI_INTRO,
      sizePrice: "$12 sm / $13 lg",
      groups: [
        {
          items: [
            {
              name: "Bun Thit Nuong",
              desc: "Grilled pork — skewered pork marinated in a honey sauce and grilled over an open flame.",
              badge: "Grilled",
            },
          ],
        },
      ],
    },
    {
      id: "entrees",
      label: "Chef's Specials & Entrees",
      groups: [
        {
          items: [
            {
              name: "Tom Rang Muoi",
              desc: "Shell-on crispy salted shrimp. Served with jasmine rice.",
            },
            {
              name: "Mi Xao Don Do Bien",
              desc: "Crunchy egg noodle with assorted seafood and vegetables.",
            },
            {
              name: "Pho Ap Chao",
              desc: "Pan stir-fried pho. Choice of beef or shrimp.",
              price: "$12",
            },
            {
              name: "Lo Mein Noodles",
              desc: "Choice of chicken, beef, or shrimp. Soft egg noodles, Napa cabbage, bean sprouts, and green onions.",
              price: "$12",
              note: "Add $2 extra for shrimp",
            },
            {
              name: "Pad Thai Noodles",
              desc: "Choice of chicken, beef, or shrimp. Wok'd with rice noodle, bean sprouts, peanuts, and shallot.",
              price: "$12",
              note: "Add $2 extra for shrimp",
            },
            {
              name: "Hiep's Fried Rice",
              desc: "Com Chien Tom Ga — with shrimp, chicken, Chinese sausage, peas, and carrots.",
              price: "$30 (serves 2)",
              priceAlt: "$45 (serves 3–4)",
              badge: "House Special",
            },
            {
              name: "Vietnamese Curry",
              desc: "With potatoes, taro, and carrots. Your choice of protein, served with jasmine rice. Choice of chicken, tofu, or shrimp.",
              price: "$10",
              note: "Add $2 extra for shrimp",
            },
            {
              name: "Ca Kho To",
              desc: "Catfish — with chili sauce in claypot, served with jasmine rice.",
              price: "$11",
            },
            {
              name: "Ngheu Xao La Que",
              desc: "Clams — sautéed in a light sauce with basil leaves.",
              price: "$12",
            },
            { name: "Ngheu Xao Tau Xi", desc: "Clams — sautéed with spicy black bean sauce.", price: "$12" },
            {
              name: "Bo Luc Lac",
              desc: "Shakin' Beef — 8 oz. cubed filet mignon, red onion, tomato, lettuce, served with fried rice.",
              price: "$19",
              badge: "House Special",
            },
            {
              name: "Ga Xao Xa Ot",
              desc: "Spicy lemongrass chicken in clay pot, served with jasmine rice.",
              price: "$11",
              badge: "Spicy",
            },
            {
              name: "Basa Fish Filet — Sweet & Sour",
              desc: "Sweet and spicy fish filet topped with roasted peanuts, served with jasmine rice.",
              price: "$14",
            },
            {
              name: "Basa Fish Filet — Ginger Sauce",
              desc: "Basa fish filet made with our house special ginger sauce, served with jasmine rice.",
            },
          ],
        },
      ],
    },
    {
      id: "vegetarian",
      label: "Vegetarian Entrees",
      groups: [
        {
          items: [
            {
              name: "Com Tam Dau Hu Xot Ca",
              desc: "Tofu with Tomato Sauce — cubes of tofu dressed in a sweet and sour sauce. Served with broken rice.",
              badge: "Vegetarian",
            },
            {
              name: "Ca Chien Chay Xot Ca",
              desc: "Mock fish (vegetarian) in sweet and sour tofu sauce. Served with jasmine rice.",
              price: "$10",
              badge: "Vegetarian",
            },
            {
              name: "Hiep's Veggie Delight",
              desc: "Long green beans and mock fish sautéed in garlic sauce. Served with jasmine rice.",
              price: "$11",
              badge: "Vegetarian",
            },
            {
              name: "Dau Xao Toi",
              desc: "Long green beans sautéed in garlic sauce, dried shrimp. Served with jasmine rice.",
              price: "$10",
            },
            {
              name: "Buddha Delight in Clay Pot",
              desc: "A clay pot of braised vegetables and tofu.",
              price: "$11",
              badge: "Vegetarian",
            },
          ],
        },
      ],
    },
    {
      id: "kids",
      label: "Kid's Menu",
      intro: "For children 12 years old and under.",
      sizePrice: "$6.50",
      groups: [
        {
          items: [
            { name: "A. Pho Tai", desc: "Rare slices of beef noodle soup." },
            { name: "B. Pho Bo Vien", desc: "Beef meatballs noodle soup." },
            { name: "C. Pho Chin", desc: "Lean brisket noodle soup." },
            { name: "D. Com Tam Ga Nuong", desc: "Grilled chicken with broken rice." },
            { name: "Hiep's Fried Rice", desc: "With shrimp & chicken." },
            { name: "Rice Plate", desc: "Rice with grilled chicken or pork chop; rice with grilled beef or shrimp." },
          ],
        },
      ],
    },
    {
      id: "sides",
      label: "Sides",
      groups: [{ items: [{ name: "Bowl of Steamed Rice", desc: "Steamed jasmine rice.", price: "$1.50" }] }],
    },
    {
      id: "beverages",
      label: "Beverages",
      groups: [
        {
          note: "Vietnamese coffee, fresh-squeezed drinks, beer, wine and a full bar are available at Eastlake. Please ask your server for today's list.",
          items: [],
        },
      ],
    },
    {
      id: "party-platters",
      label: "Party Platters",
      groups: [
        {
          note: "Party platters and traditional finger foods are available for pick-up and events. See Catering & Events, or call 619.482.9888.",
          items: [],
        },
      ],
    },
  ],
};

/* ══════════════════════════════════════════════════════════════
   CHULA VISTA — 539 Telegraph Canyon Road
   ══════════════════════════════════════════════════════════════ */
const CHULA_VISTA: LocationMenu = {
  slug: "chula-vista",
  title: "Chula Vista Menu",
  intro:
    "At the constant request of our customers we expanded to Chula Vista. This kitchen adds banh mi, pho ga, pho bo kho and bun bo hue to the family table.",
  categories: [
    {
      id: "appetizers",
      label: "Appetizers",
      intro: "We offer a variety of traditional Vietnamese appetizers to please your palate.",
      groups: [
        {
          items: [
            {
              name: "Cha Gio",
              desc: "Vietnamese egg rolls — crispy rolls with ground pork, shrimp, glass noodles, carrots, mushrooms, and vinaigrette fish sauce (nuoc mam). Also served with a side of fresh lettuce and mint herbs for wrapping.",
              price: "$6 (3 rolls)",
              priceAlt: "$8 (5 rolls)",
              badge: "House Special",
            },
            {
              name: "Cha Gio Chay",
              desc: "Vegetarian egg rolls — crispy vegetarian rolls made with cabbage, green beans, carrots, mushroom, onion, vermicelli noodles, and tofu. Served with sweet & sour sauce.",
              price: "$6 (5 rolls)",
              badge: "Vegetarian",
            },
            {
              name: "Goi Cuon",
              desc: "Spring rolls — rice paper rolls with shrimps, pork, vermicelli noodles, bean sprouts, mint herbs, and a side of peanut sauce.",
              price: "$6 (2 rolls)",
            },
            {
              name: "Goi Cuon Chay",
              desc: "Vegetarian spring rolls — rice paper rolls with vegetables, tofu, and a side of peanut sauce.",
              price: "$6 (2 rolls)",
              badge: "Vegetarian",
            },
            {
              name: "Nem Nuong Cuon",
              desc: "Vietnamese pork sausage rolls — rice paper rolls with grilled Vietnamese pork sausage, lettuce, cucumbers, carrots, and a side of peanut sauce.",
              price: "$6.50 (2 rolls)",
            },
            {
              name: "Goi Ga",
              desc: "Vietnamese chicken salad — shredded chicken over a fresh bed of cabbage, rau ram herbs, onions, roasted peanuts, and fried shallots tossed in a lemon sauce.",
              price: "$8",
            },
            {
              name: "Goi Sua Tom Thit",
              desc: "Vietnamese jellyfish, shrimp, and pork salad — shrimps and thinly sliced pork over a fresh bed of pickled carrots and daikon, basil, rau ram herbs, topped with roasted peanuts and fried shallots tossed in a house vinaigrette fish sauce (nuoc mam).",
              price: "$8",
            },
          ],
        },
      ],
    },
    {
      id: "pho",
      label: "Pho — Beef Noodle Soup",
      intro: PHO_INTRO,
      sizePrice: "$9.95 sm / $11.25 lg",
      groups: [
        {
          items: [
            {
              name: "Dac Biet",
              desc: "Special combo with rare slices of beef, lean brisket, fatty brisket, flank, tendon and tripe.",
              badge: "Signature",
            },
            { name: "Tai Nam Gau Gan Sach", desc: "Rare slices of beef, flank, fatty brisket, tendon, and tripe." },
            { name: "Chin Nam Gau Gan Sach", desc: "Lean brisket, flank, fatty brisket, tendon, and tripe." },
            { name: "Chin Nam Ve Don", desc: "Lean brisket and flank." },
            { name: "Tai", desc: "Rare slices of beef." },
            { name: "Chin", desc: "Lean brisket." },
            { name: "Nam Ve Don", desc: "Flank." },
            { name: "Bo Vien", desc: "Beef meatballs." },
            {
              name: "Pho Ga",
              desc: "Chicken soup with pieces of chicken.",
              price: "$10.50",
              priceAlt: "$12",
              badge: "House Special",
            },
            {
              name: "Pho Tom",
              desc: "Beef broth with shrimp and crab meat.",
              price: "$10.50",
              priceAlt: "$12",
            },
            { name: "Pho Bo Kho", desc: "Vietnamese beef stew served with fresh noodles.", price: "$11" },
            { name: "Pho Khong Thit", desc: "Beef noodle soup without meat.", price: "$7.75", priceAlt: "$9.25" },
          ],
        },
        {
          title: "Add to any soup",
          items: [
            { name: "Them Dau Hu", desc: "Add tofu to any soup.", price: "$2" },
            { name: "Them Bo Vien", desc: "Add beef meatballs to any soup.", price: "$2.50" },
          ],
        },
      ],
    },
    {
      id: "vermicelli",
      label: "Vermicelli Noodle Entrees",
      intro: VERMICELLI_INTRO,
      sizePrice: "$11 sm / $12 lg",
      groups: [
        {
          items: [
            {
              name: "Bun Tom Thit Nuong",
              desc: "Grilled shrimps and pork combo — skewered pork marinated in a honey sauce and shrimps grilled over an open flame.",
              badge: "Grilled",
            },
            { name: "Bun Thit Nuong Cha Gio", desc: "Grilled honey pork with crispy egg rolls.", badge: "Grilled" },
            {
              name: "Bun Nem Nuong",
              desc: "Grilled Vietnamese pork sausage — grilled marinated Vietnamese pork sausage.",
              badge: "Grilled",
            },
            { name: "Bun Nem Nuong Cha Gio", desc: "Grilled Vietnamese pork sausage with crispy egg rolls." },
            {
              name: "Bun Bo Hue",
              desc: "Beef lemongrass soup — vermicelli rice noodles, beef shank, flank, tendon, and pork blood pudding in a lemongrass beef broth; served with a side of fresh shredded cabbage, lettuce, and mint herbs.",
              badge: "Spicy",
            },
          ],
        },
      ],
    },
    {
      id: "rice",
      label: "Rice Entrees",
      intro: RICE_INTRO,
      groups: [
        {
          items: [
            {
              name: "Com Tam Hiep",
              desc: "Hiep's house special combo — pork chop, chicken and shrimps grilled over an open flame, shredded pork, and Vietnamese-style steamed meatloaf.",
              price: "$12.25",
              badge: "House Special",
            },
            {
              name: "Com Tam Tom Nuong",
              desc: "Grilled shrimps — shrimps marinated in a house sauce and grilled over an open flame.",
              price: "$12.25",
              badge: "Grilled",
            },
            {
              name: "Com Tam Tom Bo Nuong",
              desc: "Grilled shrimps and beef combo — slices of rib-eye beef and shrimps marinated in a special house sauce and grilled over an open flame.",
              price: "$12.25",
              badge: "Grilled",
            },
            { name: "Com Tam Bo Nuong", desc: "Grilled beef — tender slices of marinated beef grilled over an open flame.", price: "$11" },
            { name: "Com Tam Ga Nuong", desc: "Grilled chicken — chicken marinated in a house sauce and grilled over an open flame.", badge: "Grilled" },
          ],
        },
        { title: "Sides", items: [{ name: "Bowl of Steamed Rice", desc: "Steamed jasmine rice.", price: "$1.50" }] },
      ],
    },
    {
      id: "banh-mi",
      label: "Banh Mi — Vietnamese Sandwich",
      groups: [
        {
          items: [
            {
              name: "Banh Mi Hiep Dac Biet",
              desc: "Hiep's Special Combination — jambon, pate, cured pork, pork roll.",
              price: "$6.50 (take-out)",
              priceAlt: "$8.50 (dine-in)",
              badge: "House Special",
            },
            {
              name: "Banh Mi Thit Nguoi & Cha Lua",
              desc: "Jambon & pork roll on a toasted baguette with pickled carrots and daikon.",
            },
            {
              name: "Banh Mi Bo Kho",
              desc: "Vietnamese beef stew served with baguette bread.",
              price: "$11",
            },
          ],
        },
      ],
    },
    {
      id: "kids",
      label: "Kid's Menu",
      intro: "For children 12 years old and under.",
      groups: [
        {
          items: [
            { name: "A. Pho Tai", desc: "Rare slices of beef noodle soup." },
            { name: "B. Pho Bo Vien", desc: "Beef meatballs noodle soup." },
            { name: "C. Pho Chin", desc: "Lean brisket noodle soup." },
          ],
        },
      ],
    },
    {
      id: "beverages",
      label: "Beverages",
      groups: [
        {
          note: "Vietnamese coffee, fresh-squeezed drinks, beer and wine are available. Please ask your server for today's list.",
          items: [],
        },
      ],
    },
    {
      id: "dessert",
      label: "Dessert",
      groups: [
        {
          note: "Ask your server about our desserts of the day.",
          items: [],
        },
      ],
    },
  ],
};

/* ══════════════════════════════════════════════════════════════
   LINDA VISTA — our first location, 1991
   ══════════════════════════════════════════════════════════════ */
const LINDA_VISTA: LocationMenu = {
  slug: "linda-vista",
  title: "Linda Vista Menu",
  intro:
    "Where it all began in 1991 — a small local restaurant that seated less than 50 guests. The same broths and grill, at the neighbourhood prices our first customers remember.",
  categories: [
    {
      id: "appetizers",
      label: "Appetizers",
      groups: [
        {
          items: [
            {
              name: "Cha Gio",
              desc: "Vietnamese egg rolls — crispy rolls made with ground pork, glass noodles, carrots, mushrooms, and a side of vinaigrette fish sauce (nuoc mam). Also served with a side of fresh lettuce for wrapping.",
              price: "$4.40 (3 rolls)",
              priceAlt: "$7.00 (5 rolls)",
              badge: "House Special",
            },
            {
              name: "Goi Cuon",
              desc: "Spring rolls — rice paper rolls with shrimps, pork, vermicelli noodles, bean sprouts, mint herbs, and a side of peanut sauce.",
              price: "$5.10 (2 rolls)",
            },
            {
              name: "Bi Cuon",
              desc: "Shredded pork rolls — rice paper rolls with shredded pork, vermicelli noodles, bean sprouts, mint herbs, and a side of fish vinaigrette (nuoc mam).",
              price: "$5.10 (2 rolls)",
            },
          ],
        },
      ],
    },
    {
      id: "pho",
      label: "Pho — Beef Noodle Soup",
      intro: PHO_INTRO,
      sizePrice: "$7.45 sm / $8.35 lg",
      groups: [
        {
          items: [
            {
              name: "Dac Biet",
              desc: "Special combo with rare slices of beef, lean brisket, fatty brisket, flank, tendon and tripe.",
              badge: "Signature",
            },
            { name: "Tai Nam Gau Gan Sach", desc: "Rare slices of beef, flank, fatty brisket, tendon, and tripe." },
            { name: "Chin Nam Gau Gan Sach", desc: "Lean brisket, flank, fatty brisket, tendon, and tripe." },
            { name: "Tai Gau", desc: "Rare slices of beef and fatty brisket." },
            { name: "Tai Nam", desc: "Rare slices of beef and flank." },
            { name: "Tai Gan", desc: "Rare slices of beef and tendon." },
            { name: "Tai Sach", desc: "Rare slices of beef and tripe." },
            { name: "Tai Chin", desc: "Rare slices of beef and lean brisket." },
            { name: "Chin Nam Ve Don", desc: "Lean brisket and flank." },
            { name: "Nam Ve Don", desc: "Flank." },
            { name: "Tai", desc: "Rare slices of beef." },
            { name: "Chin", desc: "Lean brisket." },
            {
              name: "Pho Ga",
              desc: "Chicken soup with chunks of chicken.",
              badge: "House Special",
            },
            {
              name: "Pho Bo Vien",
              desc: "Beef noodle soup with beef meatballs.",
              price: "$7.45",
              priceAlt: "$8.80",
            },
            { name: "Bo Vien", desc: "Beef meatballs and soup only." },
          ],
        },
      ],
    },
    {
      id: "rice",
      label: "Rice Entrees",
      intro: RICE_INTRO,
      groups: [
        {
          items: [
            {
              name: "Com Tam Hiep",
              desc: "Hiep's house special combo — pork chop, chicken, and shrimp grilled over an open flame, shredded pork, and Vietnamese-style steamed meatloaf.",
              price: "$11.45",
              badge: "House Special",
            },
            {
              name: "Com Tam Thit Nuong",
              desc: "Grilled honey pork — pork marinated in a honey sauce grilled over an open flame.",
              price: "$8.35",
              badge: "Grilled",
            },
            {
              name: "Com Tam Bi Cha",
              desc: "Shredded pork combo — shredded pork and Vietnamese-style steamed meatloaf.",
              price: "$8.80",
            },
            {
              name: "Com Tam Bi Thit Nuong",
              desc: "Grilled pork combo — grilled honey pork with shredded pork.",
              price: "$8.80",
              badge: "Grilled",
            },
            {
              name: "Com Tam Suon Nuong",
              desc: "Grilled pork chop — pork chop marinated in our house sauce and grilled over an open flame.",
              price: "$8.80",
              badge: "Grilled",
            },
            {
              name: "Com Tam Bo Nuong",
              desc: "Grilled beef — tender slices of marinated round steak grilled over an open flame.",
              price: "$8.80",
              badge: "Grilled",
            },
            {
              name: "Com Tam Bo Nuong Cha Gio",
              desc: "Grilled beef combo — grilled marinated beef and crispy egg rolls.",
              price: "$9.30",
            },
            {
              name: "Com Tam Tom Nuong",
              desc: "Grilled shrimp — shrimps marinated in our house sauce and grilled over an open flame.",
              price: "$9.30",
              badge: "Grilled",
            },
            {
              name: "Com Tam Tom Bo Nuong",
              desc: "Grilled shrimp and beef combo — round steak slices and shrimps marinated in a special house sauce and grilled over an open flame.",
              price: "$9.30",
              badge: "Grilled",
            },
            {
              name: "Com Tam Ga Nuong",
              desc: "Grilled chicken — chicken marinated in a house sauce and grilled over an open flame.",
              badge: "Grilled",
            },
            {
              name: "Com Tam Ga Nuong Cha Gio",
              desc: "Grilled chicken combo — grilled marinated chicken and crispy egg rolls.",
            },
          ],
        },
      ],
    },
    {
      id: "vermicelli",
      label: "Vermicelli Noodle Entrees",
      intro: VERMICELLI_INTRO,
      sizePrice: "$8.35 sm / $10.20 lg",
      groups: [
        {
          items: [
            {
              name: "Bun Thit Nuong",
              desc: "Grilled pork — skewered pork marinated in a honey sauce.",
              badge: "Grilled",
            },
            { name: "Bun Bi Thit Nuong", desc: "Grilled pork with shredded pork.", badge: "Grilled" },
            {
              name: "Bun Tom Cha Gio",
              desc: "Grilled shrimp and egg roll combo — shrimps marinated in a house sauce and grilled over an open flame and crispy egg rolls.",
              badge: "Grilled",
            },
            { name: "Bun Thit Cha Gio", desc: "Grilled honey pork with crispy egg rolls.", badge: "Grilled" },
            { name: "Bun Bo Nuong", desc: "Grilled beef — marinated round steak over an open flame.", badge: "Grilled" },
            { name: "Bun Bo Cha Gio", desc: "Grilled beef with crispy egg rolls." },
            {
              name: "Bun Ga Nuong Cha Gio",
              desc: "Grilled chicken and egg roll combo — chicken marinated in a house sauce and grilled over an open flame and crispy egg rolls.",
            },
            { name: "Bun Tom Ga Nuong", desc: "Grilled shrimp and grilled chicken.", badge: "Grilled" },
            {
              name: "Bun Bo Hue",
              desc: "Beef lemongrass soup — vermicelli rice noodles, beef shank, flank, tendon, and pork pudding in a lemongrass beef broth; served with a side of fresh shredded cabbage, lettuce, and mint herbs.",
              price: "$7.90",
              priceAlt: "$8.80",
              badge: "Spicy",
            },
            {
              name: "Bun Mang Vit",
              desc: "Duck with bamboo shoots soup — vermicelli rice noodles, duck meat, and bamboo shoots in a light tasty broth; served with a side of fresh cabbage, lettuce, mint herbs, and a spicy ginger sauce.",
              price: "$7.90",
              priceAlt: "$8.80",
              badge: "House Special",
            },
          ],
        },
      ],
    },
    {
      id: "beverages",
      label: "Beverages",
      groups: [
        {
          note: "Vietnamese coffee, fresh-squeezed drinks, beer and wine are available. Please ask your server for today's list.",
          items: [],
        },
      ],
    },
    {
      id: "dessert",
      label: "Dessert",
      groups: [{ note: "Ask your server about our desserts of the day.", items: [] }],
    },
  ],
};

export const MENUS: Record<string, LocationMenu> = {
  eastlake: EASTLAKE,
  "chula-vista": CHULA_VISTA,
  "linda-vista": LINDA_VISTA,
};

export const MENU_NOTE = PRICES_NOTE;

/* ──────────────────────────────────────────────────────────────
   Homepage featured dishes — pulled straight from the menus above
   ────────────────────────────────────────────────────────────── */
export type Featured = {
  name: string;
  viet?: string;
  desc: string;
  price?: string;
  location: string;
  image: string;
  badge?: string;
};

export const FEATURED: Featured[] = [
  {
    name: "Pho Dac Biet",
    viet: "House Special Beef Noodle Soup",
    desc: "Our distinguished House Beef Soup — rare slices of beef, lean brisket, fatty brisket, flank, tendon and tripe in Hiep's broth, with fresh bean sprouts, serrated coriander, Thai basil and jalapeños.",
    price: "$11 sm / $12.50 lg",
    location: "Eastlake",
    image: IMG.pho1,
    badge: "The signature bowl",
  },
  {
    name: "Com Tam Hiep",
    viet: "Hiep's House Special Combo",
    desc: "Pork chop, chicken and shrimps grilled over an open flame, shredded pork, and Vietnamese-style steamed meatloaf over steamed broken rice.",
    price: "$13.50",
    location: "Eastlake",
    image: IMG.grill_2292,
  },
  {
    name: "Bun Thit Nuong",
    viet: "Grilled Pork Vermicelli",
    desc: "Char-grilled skewered pork marinated in a honey sauce over vermicelli rice noodles with shredded lettuce, cabbage, cucumbers, bean sprouts, mint herbs, pickled carrots and daikon, roasted peanuts and nuoc mam.",
    price: "$12 sm / $13 lg",
    location: "Eastlake",
    image: IMG.grill_2263,
    badge: "Grilled",
  },
  {
    name: "Banh Xeo",
    viet: "Vietnamese Crepe",
    desc: "Crispy crepe with shrimp, pork, bean sprouts, and onions, wrapped with lettuce and vinaigrette fish sauce.",
    price: "$9",
    location: "Eastlake",
    image: IMG.pho3,
  },
  {
    name: "Cha Gio",
    viet: "Vietnamese Egg Rolls",
    desc: "Crispy rolls with ground pork, shrimp, glass noodles, carrots, mushrooms, and vinaigrette fish sauce — served with fresh lettuce and mint herbs for wrapping.",
    price: "$6.50 / $8.50",
    location: "Eastlake",
    image: IMG.grill_2234,
  },
  {
    name: "Goi Cuon",
    viet: "Spring Rolls",
    desc: "Rice paper rolls with shrimp, pork, vermicelli noodles, bean sprouts, mint herbs, and peanut sauce.",
    price: "$6.50",
    location: "Eastlake",
    image: IMG.grill_2288,
  },
];
