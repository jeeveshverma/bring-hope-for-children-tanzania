# Bring Hope for Children Tanzania: Website

The official website of **Bring Hope for Children Tanzania (BHCT)**, a non-profit in Mwanza, Tanzania.
*Share Love, Spread Kindness.*

It's a static site (plain HTML, CSS and JS) with no build step, hosted on GitHub Pages.

## Structure
```
index.html            the whole one-page site
assets/css/style.css  styles (brand colours: navy #1f2a7a, red #e0261f, sun #f7b733)
assets/js/main.js     mobile menu, scroll animations, WhatsApp contact form
assets/img/           logo, favicon and photos
```

## Editing content
- **Phone / WhatsApp:** search for `255686119728` in `index.html` and `assets/js/main.js`.
- **Photos:** put new images in `assets/img/` and reference them in the Gallery section.
- **Donation details:** edit the `#donate` section in `index.html`.

## Custom domain
Add a `CNAME` file containing the domain (e.g. `bringhopeforchildren.org`). Then point the domain's DNS at GitHub Pages:
- `A` records for `@`: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
- `CNAME` record for `www`: `jeeveshverma.github.io`

---
Website by Jeevesh
