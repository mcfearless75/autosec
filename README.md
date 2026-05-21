# 360 Auto Security — revamped site

Static HTML + custom CSS rebuild of www.360autos.co.uk. Five pages, dark automotive UI, SEO-heavy markup, working quote form scaffold.

## Files
```
/
├─ index.html        Home (hero, services bento, stats, testimonial, CTA)
├─ services.html     4 services with anchor links (#ghost, #trackers, #alarms, #mobile)
├─ about.html        Story + credentials bento
├─ gallery.html      12-tile placeholder grid (drop real photos into /assets/gallery/)
├─ contact.html      Quote form + info cards + Google Maps embed
├─ robots.txt
├─ sitemap.xml
└─ assets/
   ├─ styles.css     ~600 lines, all design tokens at top of file
   └─ partials.js    Injects nav + footer into every page (one source of truth)
```

## SEO baseline shipped
- Unique title + meta description per page
- Canonical URLs
- Open Graph tags
- `AutomotiveBusiness` JSON-LD on home (NAP, hours, areaServed, offers)
- `Service`, `BreadcrumbList`, `AboutPage`, `ContactPage` schema on relevant pages
- robots.txt + sitemap.xml
- Semantic landmarks: `<header>`, `<main>`, `<nav aria-label>`, `<footer>`, `<section aria-labelledby>`
- Image-free hero (no LCP hit), Google Fonts preconnected, `display=swap`
- `prefers-reduced-motion` respected

## Before going live
1. **Wire up the quote form** — open `contact.html`, replace `https://formspree.io/f/yourFormId` with your Formspree endpoint (or swap to Netlify Forms by adding `netlify` attribute).
2. **Replace gallery placeholders** — drop real install photos into `/assets/gallery/` and update the `<figure>` blocks in `gallery.html`.
3. **Add an OG image** — create `/assets/og.jpg` (1200×630) for social sharing.
4. **Add a favicon** — `/favicon.ico` and `/apple-touch-icon.png`.
5. **Verify Google Business Profile** matches the NAP block in footer + schema.
6. **Submit sitemap** to Google Search Console after deploy.

## Deploy
Drop the whole folder onto Netlify, Vercel, GitHub Pages or any static host. No build step.

```bash
# Netlify drag-and-drop or:
netlify deploy --dir=. --prod
```

## Local preview
Open `index.html` directly in a browser, or:
```powershell
python -m http.server 8080
```
Then visit http://localhost:8080.

## Stack
- Pure HTML + CSS (no framework, no Tailwind CDN — fast LCP, no bundler)
- Vanilla JS for nav/footer include and mobile menu
- Google Fonts: Inter (body) + Space Grotesk (headings)
- All SVG icons inline (no emojis, no icon library load)
