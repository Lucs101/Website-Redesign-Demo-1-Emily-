# Pho Hiep Grill — Website

Modern redesign of [phohiepgrill.com](https://www.phohiepgrill.com/), the family-run Vietnamese
restaurant serving San Diego since 1991. All content, photography, menu items, prices, locations,
hours and phone numbers are taken from the restaurant's existing website.

## Stack

- **React 19** + **TypeScript**
- **Vite 7** (single-file production build)
- **Tailwind CSS v4** (design tokens in `src/index.css`)
- Lightweight hash router (`src/lib/router.tsx`) — no server rewrites required

## Deploying (GitHub → Vercel)

```bash
git init
git add .
git commit -m "Pho Hiep Grill website"
git branch -M main
git remote add origin git@github.com:<org>/phohiepgrill.git
git push -u origin main
```

Then import the repository in Vercel. Defaults are correct:

| Setting          | Value          |
| ---------------- | -------------- |
| Framework        | Vite           |
| Build command    | `npm run build`|
| Output directory | `dist`         |
| Install command  | `npm install`  |

`vercel.json` is included for long-lived static asset caching. Because routing is hash-based
(`#/menu/eastlake`), no SPA rewrites are required, and the site also works on GitHub Pages.

## Editing content

Restaurant content is deliberately separated from presentation.

| File                    | What lives there                                                            |
| ----------------------- | --------------------------------------------------------------------------- |
| `src/data/site.ts`      | Brand, tagline, family story, timeline, catering copy, happy hour, nav       |
| `src/data/locations.ts` | The three locations — addresses, phones, hours, map queries                 |
| `src/data/menu.ts`      | Every menu, category, dish, description and price **per location**          |
| `src/data/gallery.ts`   | Gallery images, hero frames, story photography                              |
| `src/data/media.ts`     | The restaurant's photo library + the `img()` responsive-size helper          |

### Updating a price

Open `src/data/menu.ts`, find the dish, change its `price` / `priceAlt` string. Menus are separate
objects per location (`EASTLAKE`, `CHULA_VISTA`, `LINDA_VISTA`) so nothing is shared accidentally.

### Ordering link

Online ordering is powered by ChowNow (`com.chownow.phohiepgrill`). Update the single constant
`ORDER_ONLINE_URL` in `src/data/site.ts` if the restaurant's ordering destination ever changes —
every **Order Online** button on the site reads from it.

## Project structure

```
src/
  components/   Header, Hero, FeaturedDishes, AboutStory, Locations, MenuBrowser,
                Gallery, CateringSection, ui primitives
  data/         site · locations · menu · gallery · media
  lib/          router
  pages/        Home · About · Menu · Locations · Gallery · Catering · Contact · 404
```

## Accessibility & performance

- Semantic landmarks, skip-to-content link, focus-visible rings, keyboard-operable lightbox
- `prefers-reduced-motion` respected for all animation
- Lazy-loaded, CDN-sized photography with blur-up placeholders
- Restaurant `Restaurant` JSON-LD schema with all three locations in `index.html`
