# NŌR — نور

A quiet-luxury brand site for **NŌR** (House of Nor), a maker of handcrafted
leather handbags. Built around a single idea: **less &gt; more**.

Instagram: [@houseof.nor](https://instagram.com/houseof.nor)

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- React 19
- Tailwind CSS v4
- Fonts: Cormorant Garamond (display) + Jost (text) via `next/font`

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  layout.tsx          # Root layout, fonts, metadata
  page.tsx            # The full single-page site
  globals.css         # Theme tokens, scroll-reveal, grain texture
  icon.svg            # NŌR cherry favicon
  components/
    SiteHeader.tsx    # Sticky nav + mobile menu (client)
    Reveal.tsx        # Intersection-observer scroll reveal (client)
public/images/        # Product & editorial photography
```

## Design notes

- **Palette:** near-black (`#0a0807`) with copper / rose-gold accents and warm cream text.
- **Sections:** Hero · Philosophy · Collection · The Cherry (signature) · Lookbook · Atelier · Order.
- The cherry charm is the brand's signature detail — the one thing never subtracted.

## Editing content

- **Products:** edit the `collection` array in `app/page.tsx`.
- **Photos:** drop images into `public/images/` and update the paths.
- **Contact:** Instagram, Eitaa, and phone links live in the `#order` section of `app/page.tsx`.
