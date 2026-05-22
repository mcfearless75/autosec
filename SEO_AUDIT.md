# 360 Auto Security — SEO Sweep Report

Date: 2026-05-22 · Domain: https://www.360autos.co.uk · Status: live on GitHub Pages staging

## ✅ Shipped (this commit)

### Technical SEO
- [x] **Favicon** — SVG vector (`favicon.svg`) + apple-touch-icon link on all 5 pages
- [x] **Web manifest** (`site.webmanifest`) — installable PWA-style, theme color #ff6b1a, lang en-GB
- [x] **Canonical URLs** — already shipped, one per page
- [x] **robots.txt** — explicit allow for GPTBot, ChatGPT-User, PerplexityBot, Google-Extended, ClaudeBot (GEO/AI Overviews ready)
- [x] **sitemap.xml** — lastmod dates added, image sitemap for hero
- [x] **viewport-fit=cover** + safe-area-insets — already shipped
- [x] **prefers-reduced-motion** respected — already shipped
- [x] **No render-blocking JS** — partials.js is `defer`
- [x] **Font preconnect** + `display=swap` already shipped

### Schema.org (JSON-LD)
- [x] **AutomotiveBusiness** on home — full NAP, hours, areaServed (6 cities), geo coords, offers catalog
- [x] **ContactPoint** added — separate landline + WhatsApp numbers with availableLanguage
- [x] **FAQPage** on home — 5 questions matching visible FAQ section (rich result eligible)
- [x] **WebSite** schema — links to publisher
- [x] **BreadcrumbList** on services
- [x] **Service** schema with offers catalog on services
- [x] **AboutPage** on about
- [x] **ContactPage** on contact

### Local SEO
- [x] NAP consistency — phone, address, postcode identical across footer, contact page, schema
- [x] areaServed: Birmingham, West Bromwich, Wolverhampton, Walsall, Dudley + West Midlands region
- [x] GeoCoordinates: 52.5226, -1.9971 (West Bromwich)
- [x] Opening hours specification — Mon-Fri 9-18, Sat 9-16
- [x] sameAs: Instagram + Facebook
- [x] Embedded Google Map on contact page
- [x] WhatsApp click-to-chat link (+447480236664)

### Content / E-E-A-T
- [x] **Visible FAQ section** on homepage — 5 high-intent questions ("will Ghost stop key theft", "S5 vs S7", etc.)
- [x] Trust signals above the fold — TASSA Approved, Thatcham Categories, Insurance Recognised
- [x] Approved-partners logo strip — Autowatch, SmarTrack, MetaTrak, ScorpionTrack, Pandora, Global Telemetrics
- [x] Service-specific anchor pages (#ghost #trackers #alarms #mobile)
- [x] British English throughout, semantic landmarks (`<header><main><nav aria-label><footer>`)

### Page-level
- [x] Unique `<title>` + `<meta description>` per page (all under 60/160 chars)
- [x] Open Graph + Twitter Card on every page (og:image points to cars-hero.avif)
- [x] One `<h1>` per page, logical h2/h3 hierarchy
- [x] All buttons/links have `aria-label` or descriptive text
- [x] All decorative SVG marked `aria-hidden`
- [x] Form has label-for-input pairs + autocomplete attributes

---

## 🟡 Pre-launch action list (your side)

These need real-world data or hosting changes — can't be done from code alone:

1. **Custom OG image** (1200×630px JPG/PNG) — current points to cars-hero.avif which is wide but AVIF won't render on all social platforms (X, LinkedIn ok; some older WhatsApp previews fail). Save a 1200×630 JPEG to `assets/og.jpg` and search/replace the og:image references.
2. **Google Business Profile** — verify NAP exactly matches what's in our schema (Unit 5A, Millards Industrial Estate, Cornwallis Road, West Bromwich B70 9BY · 0121 798 1713). Add primary category "Auto Alarm Supplier" and secondary "Auto repair shop". Upload 10+ install photos. Get to 25+ Google reviews ASAP — biggest local ranking lever.
3. **Custom domain** — point `www.360autos.co.uk` at GitHub Pages (currently live at `mcfearless75.github.io/autosec/`). Add `CNAME` file containing `www.360autos.co.uk` to repo root, then create CNAME DNS record `www → mcfearless75.github.io`.
4. **Google Search Console** — verify ownership, submit `sitemap.xml`, monitor coverage + Core Web Vitals.
5. **Bing Webmaster Tools** — same as above. Bing powers ChatGPT search.
6. **Real install photos** in `/assets/gallery/` — replaces the placeholder tiles. Add `alt` text per image describing vehicle + service ("Autowatch Ghost II install on 2024 Range Rover Sport").
7. **Citations** — submit NAP to: Thomson Local, Yell, FreeIndex, Yelp UK, Cylex UK, TASSA installer directory (you're already listed there).
8. **Connect WhatsApp Business** + add the number to GBP messaging.

## 🟢 Quick wins post-launch

- Add an aggregateRating to LocalBusiness schema once you have ≥10 verified reviews (we left it out — adding fake ratings is a Google penalty risk).
- Add "Review" schema individually for each testimonial once you have permission to quote the customer fully.
- Add 5–10 location landing pages: `/birmingham-ghost-immobiliser/`, `/sutton-coldfield-vehicle-tracker/`, etc. Each ~600 words, unique. Massive local SEO lever.
- Add a "Vehicle compatibility" page listing every make/model the Ghost works with — captures long-tail "ghost immobiliser bmw m4" / "ghost autowatch range rover" searches.
- Blog: 1 post/month — "How relay theft works", "Insurance discount with a tracker", "Ghost vs alarm — which?" etc.

## 📊 Current Lighthouse expectation
- Performance: 95+ (no JS frameworks, system fonts, single CSS file, lazy iframes/images)
- SEO: 100
- Accessibility: 95+
- Best Practices: 100
