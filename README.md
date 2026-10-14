# Bring Hope for Children Tanzania: Website

The official website of **Bring Hope for Children Tanzania (BHCT)**, a non-profit in Mwanza, Tanzania.
*Share Love, Spread Kindness.*

It's a static site (plain HTML, CSS and JS) with no build step, hosted on GitHub Pages.

## Structure
```
index.html            the whole one-page site
assets/css/style.css  styles (brand colours: navy #1f2a7a, red #e0261f, sun #f7b733)
assets/js/main.js     mobile menu, scroll animations, WhatsApp contact form
assets/js/i18n.js     English / Kiswahili switch (EN | SW in the header)
404.html, robots.txt, sitemap.xml
assets/img/           logo, favicon and photos
```

## Kiswahili
The EN | SW switch translates the page in the browser and remembers the choice. Links can force a language with `?lang=sw` or `?lang=en`.
**If you change any English text in `index.html`, update the matching key in `assets/js/i18n.js`.** Otherwise that text stays in English when SW is selected.

## Editing content
- **Phone / WhatsApp:** search for `255686119728` in `index.html` and `assets/js/main.js`.
- **Photos:** put new images in `assets/img/` and reference them in the Gallery section.
- **Donation / bank details:** edit the `#donate` section in `index.html` (the copy button uses `data-copy`).
- **Events:** update the `#events` section when a new campaign starts.

Content and photos come from the organisation's public Instagram ([@bring_hope_for_children_tz](https://www.instagram.com/bring_hope_for_children_tz)) and Idealist listing.

## Custom domain
If you add a domain, also update the canonical/og URLs in `index.html`, plus `sitemap.xml`, `robots.txt` and the paths in `404.html`. Then add a `CNAME` file containing the domain (e.g. `bringhopeforchildren.org`). Then point the domain's DNS at GitHub Pages:
- `A` records for `@`: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
- `CNAME` record for `www`: `jeeveshverma.github.io`

---
Website by Jeevesh
