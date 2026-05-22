# 360 Autos UK — Wix Editor build spec

One-pager rebuild for **Wix Editor (classic)**. Copy section-by-section. Live reference: https://mcfearless75.github.io/autosec/

---

## 0. Site setup (do this first)

1. **Start with**: blank template, single page, name it `Home`
2. **Settings → Business Info** — fill in once, Wix pulls into every block:
   - Name: `360 Autos UK Ltd`
   - Phone: `0121 798 1713`
   - Email: `uk360autos@hotmail.com`
   - Address: `Unit 5A, Millards Industrial Estate, Cornwallis Road, West Bromwich B70 9BY`
   - Hours: Mon–Fri 9–18, Sat 9–16, Sun by appt
3. **Site Design → Theme**
   - Primary colour: `#FF6B1A` (orange)
   - Background: `#0A0A0B` (near-black)
   - Text colour: `#F5F5F7`
   - Heading font: **Space Grotesk** (under Wix Fonts)
   - Body font: **Inter**
4. **SEO Settings**:
   - Title: `Ghost Immobilisers, Trackers & Custom Upgrades Birmingham | 360 Autos UK`
   - Description: `TASSA-approved vehicle security in Birmingham. Autowatch Ghost, Thatcham trackers, alarms, custom upgrades. Call 0121 798 1713 or WhatsApp 07480 236664.`
   - Add favicon: upload `favicon.svg` from the GitHub repo

---

## 1. Header (sticky, transparent)

- **Add → Menu → Horizontal Menu** (sticky on scroll)
- Items: `Services` · `Why us` · `Instagram` · `Contact`
- Each Wix menu item → Link → **Anchor** (you'll create the anchors as you build each section)
- Right-aligned: 2 buttons
  - **Call 0121 798 1713** — Button → Link → Phone Number → `+441217981713`
  - **WhatsApp** — Button → Link → Web Address → `https://wa.me/447480236664` (open in new tab)

---

## 2. HERO section

- Strip layout, full-width, dark background
- Add **background image** = your existing `cars-hero.avif` (or any car shot)
- Add black overlay: 70% opacity gradient left → 30% right
- **Headline (H1)**: `Vehicle security done properly.`
- **Subheadline**: `Autowatch Ghost immobilisers, Thatcham trackers, alarm systems and custom vehicle upgrades — fitted by certified engineers at our West Bromwich workshop or at your location.`
- **Eyebrow text** above headline: `TASSA Approved · Birmingham & West Midlands`
- **2 big buttons side-by-side**:
  - Orange `📞 Call 0121 798 1713` → tel link
  - Green `WhatsApp 07480 236664` → wa.me link
- Trust bar below: `✓ TASSA Approved   ✓ Thatcham Categories   ✓ Insurance Recognised`

---

## 3. Authorised installer strip

- Thin grey strip section
- Text: `AUTHORISED INSTALLER FOR`
- Row of brand names (text only, uppercase, spaced): `AUTOWATCH · SMARTRACK · METATRAK · SCORPIONTRACK · PANDORA · GLOBAL TELEMETRICS`

---

## 4. SERVICES section (Anchor: `services`)

- 5 cards in a grid (3 across desktop, 1 stack mobile)
- Each card = icon + heading + 2 line description:

| Card | Icon | Heading | Body |
|---|---|---|---|
| 1 | Padlock | **Autowatch Ghost Immobiliser** | CAN bus immobiliser with PIN sequence start. Undetectable. Stops relay and key-theft attacks. |
| 2 | Map pin | **S5 & S7 Trackers** | SmarTrack, MetaTrak, ScorpionTrack — 24/7 monitored with driver ID tags. |
| 3 | Bell | **Thatcham Alarms** | Cat 1 & Cat 2 upgrade alarms with tilt, glass-break and CAN integration. |
| 4 | Plus circle | **Custom Vehicle Upgrades** | Tasteful, reversible upgrades — fitted clean, no kit-car finishes. |
| 5 | Van | **Mobile Installation** | We come to you across the West Midlands. |

- Add **stats strip** below: `10+ Years` · `2,500+ Vehicles` · `5★ Rated` · `24/7 Monitoring`

---

## 5. WHY US section (Anchor: `about`)

- 2 columns, dark grey background
- Left: large shield icon or workshop photo
- Right:
  - Eyebrow: `Why 360 Autos UK`
  - H2: **Approved engineers. No shortcuts.**
  - Body para
  - Checklist (✓ bullets):
    - **TASSA approved** — the UK standard for installer accreditation
    - **Manufacturer trained** on every system we fit
    - **Hidden fitment** — if a thief can find it, it's not protecting you
    - **Lifetime support** on every install

---

## 6. CONTACT section (Anchor: `contact`)

This is the conversion section — keep it BIG and SIMPLE.

- H2: **Quickest way: call or WhatsApp.**
- Subhead: `Tell us your make, model and postcode — we'll come back with options, pricing and the next available slot.`

**Three big tappable boxes** (rows on mobile, columns on desktop):

| Box | Icon | Label | Value | Sub |
|---|---|---|---|---|
| 1 | Phone | CALL US | **0121 798 1713** | Mon–Fri 9–6, Sat 9–4 |
| 2 (green) | WhatsApp | WHATSAPP | **07480 236664** | Fastest reply — send a photo of your car |
| 3 | Envelope | EMAIL | uk360autos@hotmail.com | Replies within 24 hours |

Each entire box = clickable. Set link on the box container.

Below: address block with workshop NAP + social row (Instagram + Facebook with brand colours).

---

## 7. Mobile sticky CTA bar (CRITICAL for conversion)

Wix Editor (classic) options:
- **Easiest**: Wix App Market → install **WhatsApp Chat** app (free, by Common Ninja or Wix). Configure with number `447480236664`. Adds a green floating bubble.
- **Also add**: a "Call now" floating button — Wix App Market → search **"Click to Call"** app
- **Or manually**: Add Strip → Pin to Screen → Position: Bottom → set Mobile-only visibility → drop 2 buttons (Call + WhatsApp) inside

Test on real phone before signing off.

---

## 8. Footer

- 4 columns: Logo+strapline · Services list · Contact · Social
- Bottom row: © 2026 360 Autos UK Ltd · TASSA Approved Installer · Authorised: Autowatch, SmarTrack, MetaTrak, ScorpionTrack, Pandora

---

## 9. SEO & Schema (Wix Editor)

1. **SEO Tools → Site SEO Settings**: paste title + description from §0
2. **SEO Tools → Advanced → Custom Meta Tags**: paste JSON-LD blocks from current site's `index.html` `<head>` (LocalBusiness + FAQPage schema)
3. **Marketing Integrations → Google Business Profile**: connect the live GBP listing
4. **Marketing Integrations → Google Search Console**: verify ownership, submit sitemap (Wix generates `/sitemap.xml` automatically)

---

## 10. Mobile editor (separate in classic Wix Editor!)

- Switch to mobile view (phone icon top of editor)
- Hide the desktop trust bar and big hero visual stack (Wix often crops them ugly)
- Re-stack hero buttons full-width
- Ensure the sticky CTA bar shows
- Reduce hero padding
- Test on real iPhone + Android before going live

---

## Estimated build time
- Experienced Wix user: **3–4 hours**
- First-timer: **6–8 hours**

## What you'll lose vs the coded version
- Page weight ~5–10× larger (Wix overhead)
- Slightly less control over the bento card layout
- Sticky mobile CTA bar requires an app or workaround

## What you'll gain
- Client can edit copy themselves
- Wix-managed hosting + SSL
- Wix Forms (no Formspree integration needed)
- Built-in GBP / Google Ads integration

---

**Tip:** before rebuilding in Wix, point `www.360autos.co.uk` at the current GitHub Pages version (5 min DNS change). Get the SEO + conversion benefit live today, then the Wix rebuild can happen at the client's pace without losing rankings.
