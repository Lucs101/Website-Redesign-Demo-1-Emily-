/**
 * Media helpers for the restaurant's existing photography library.
 *
 * All images below belong to the Pho Hiep Grill archive that has lived on
 * phohiepgrill.com since the original site launched. They are referenced from
 * the restaurant's own CDN (Squarespace) so no photography is re-created,
 * re-coloured or replaced.
 *
 * `img()` lets us request responsive sizes from the same asset:
 *   img(pho, 800)  -> ...&format=800w
 */

export const CDN_ROOT = "https://static1.squarespace.com/static/5a96f688372b966da314fa8f";

/** Assets grouped in the homepage "Welcome" gallery folder. */
const G = `${CDN_ROOT}/5a99ee734192027829191496`;

/** Loose page assets (banners, location heroes). */
const T = (id: string, ts: string) => `${CDN_ROOT}/t/${id}/${ts}`;

export const IMG = {
  /* ── Signature pho / food close-ups ─────────────────────────── */
  pho1: `${G}/5b3579bb03ce6435b6b586a8/1530231233257/pho1.jpg`,
  pho3: `${G}/5b3579c088251b0938f755bd/1530231678561/pho3.jpg`,
  grill_2263: `${G}/5b357bea03ce6435b6b5d232/1530232366425/Pho+Hiep+and+Grill_06182018_2263a.jpg`,
  grill_2292: `${G}/5b357baa8a922d62fc04e4fd/1530232366519/Pho+Hiep+and+Grill_06122018_2292.jpg`,
  grill_2192: `${G}/5b357b8a352f5320a973ea5d/1530232366542/Pho+Hiep+and+Grill_08022013_2192.jpg`,
  grill_2288: `${G}/5b357ae9758d46d1dc9447ce/1530232366333/Pho+Hiep+and+Grill_06122018_2288.jpg`,
  grill_2234: `${G}/5b357ae9aa4a99232a56f6bb/1530232366240/Pho+Hiep+and+Grill_06122018_2234.jpg`,
  grill_2147: `${G}/5b357a21758d46d1dc942d23/1530231487868/Pho+Hiep+and+Grill_06122018_2147.jpg`,

  /* ── Dining room & restaurant life ──────────────────────────── */
  mg_6805: `${G}/5a99eea0085229f6cac43e21/1520037545518/_MG_6805EDITED.jpg`,
  mg_6728: `${G}/5a99ee8f24a69491fe7bf57d/1520037528620/_MG_6728EDITED.jpg`,
  mg_6632: `${G}/5a99ee8724a69491fe7bf37d/1520037521630/_MG_6632EDITED.jpg`,
  mg_6616: `${G}/5a99ee8424a69491fe7bf279/1520037522247/_MG_6616EDITED.jpg`,
  mg_6217: `${G}/5a99ee79ec212db87defdc90/1520037503912/_MG_6217EDITED.jpg`,
  mg_6141: `${G}/5a99ee73652deabe1bba0818/1520037499938/_MG_6141EDITED.jpg`,
  mg_6137: `${G}/5a99ee73085229f6cac434af/1520037498248/_MG_6137.jpg`,

  /* ── Location / section banners ─────────────────────────────── */
  eastlakeBanner: `${T("5b71d3ed4d7a9cb35500f2ed", "1534186484389")}/Eastlake_MG_6579EDITED.jpg`,
  chulaVistaBanner: `${T("5ad8ebf903ce64ef0eefdc5f", "1524165637159")}/Chula+Vista_MG_6281.jpg`,
  lindaVistaBanner: `${T("5ad8eaea03ce64ef0eef8f93", "1524165358004")}/_MG_6437.jpg`,
  locationsBanner: `${T("5a97184b53450ad262817736", "1519851601809")}/_MG_6789.jpg`,
  menuBanner: `${T("5a9707619140b7c9323afaab", "1519847227959")}/_MG_6753EDITED.jpg`,
  cateringBanner: `${T("5a970202e2c483b3323f227b", "1519845896920")}/EventsCatering_MG_6342.jpg`,
  contactBanner: `${T("5a970a6b24a694aa35b9e191", "1519848045007")}/Contact_MG_6430.jpg`,
  joinBanner: `${T("5a970c19c83025938519fd67", "1519848476257")}/Join_MG_6552.jpg`,
  lindaVistaGrill: `${T("5ad8ef85758d464131d6597f", "1524166555802")}/Banner3_MG_6112.jpg`,

  /* ── Brand ──────────────────────────────────────────────────── */
  logo: `${T("5a99f026652deabe1bba6450", "1524166059224")}/PhoHiepGrill2.png`,
  logoDark: `${T("5a971b9a652dea58372e1df3", "1519852452546")}/pacific-dark.png`,
} as const;

/** Request a sized variant of any of the restaurant's own CDN assets. */
export function img(url: string, width: number): string {
  const joiner = url.includes("?") ? "&" : "?";
  return `${url}${joiner}format=${width}w`;
}
