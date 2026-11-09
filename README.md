# acmebook.example

Marketing website for Acme Book, built with [Astro](https://astro.build).

## Getting started

You need Node.js 22.12 or newer.

```sh
npm install
npm run dev
```

The dev server runs at http://localhost:4321.

## Scripts

| Command           | What it does                                  |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Start the local dev server                    |
| `npm run build`   | Build the static site into `dist/`            |
| `npm run preview` | Serve the built site locally                  |
| `npm run check`   | Type-check `.astro` and `.ts` files           |

Run `npm run check` before opening a pull request.

## Project layout

```
public/              Static files copied as-is (favicon, robots.txt)
src/
  components/        Header, footer, pricing table and other shared pieces
  content/blog/      Blog posts in Markdown
  content.config.ts  Blog collection schema
  data/
    plans.ts         Plan names, prices and features (used on the pricing page)
    site.ts          Company details, contact info and navigation
  layouts/           Base page layout
  pages/             One file per route
  styles/global.css  Colours, typography and shared utility classes
```

## Content

- Blog posts go in `src/content/blog/` as Markdown files. The front matter needs `title`, `description`, `pubDate` and `author`. Set `draft: true` to keep a post out of the build.
- Plans and prices live in `src/data/plans.ts`. The pricing cards and comparison table are generated from it. The FAQ on `src/pages/pricing.astro` mentions prices in its answers, so check it whenever prices change.
- Contact details used in the footer and contact page are in `src/data/site.ts`.

The contact form posts to our form handling service at `forms.acmebook.example`. There is no backend in this repository.

## Deployment

The site is fully static. `npm run build` writes the output to `dist/`, which is deployed to our static host. Merges to `main` are built and deployed automatically.
