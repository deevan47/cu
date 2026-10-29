# Cheer Up website

Personalised gifts in Pune. React 18 + Vite static site, hosted on GitHub Pages.

This project is a faithful rebuild of the original single file `cu_rebuild.html`. Same look, same behaviour. The difference is that every page, section and piece of content now lives in its own file, so you can edit one thing without touching anything else.

---

## 1. What happened (history)

1. The original `cu_rebuild.html` was a "bundled" file: one HTML page with its code, fonts, logo and a custom template runtime packed inside as compressed text.
2. That bundle was unpacked. Out of it came: the page template and logic, the brand logo sprite, 7 font files, and React 18.
3. The template was rewritten as a normal React + Vite project:
   - one file per page, Home split into one file per section
   - all text/prices/reviews/FAQ moved into `src/data/`
   - each page has its own CSS file
   - all animations (logo draw-in, scroll reveals, step line, tab transitions) ported into `src/lib/motion.js`
4. The result was checked against the original in a browser: text and page height match on all 11 pages, and tabs, order sheet, FAQ, step line, mobile menu and WhatsApp links work.
5. A GitHub Pages deploy workflow was added.

Small differences from the original (everything else is identical):
- Tapping a link to the page you're already on now closes the mobile menu.
- Photo slots can take real images (placeholders stay until you add one).
- Reviews have a `sample` flag that removes the "Sample review" badge.

---

## 2. Graphics are locked (do not change)

The logo and all brand graphics are copied **byte-for-byte** from the original and verified identical:

| Graphic | File |
|---|---|
| All logo symbols (smile, eyes, eye icon, header logo, footer stack logo, tagline, patterns) | `src/assets/brand-sprite.svg` |
| Fonts (Figtree, Young Serif, Noto Sans Devanagari) | `src/assets/fonts/*.woff2` |
| Animated home logo (mask path, eyes, tagline) | `src/pages/home/Hero.jsx` (`HeroLogo`) |
| Logo/eye helper components | `src/components/Logo.jsx`, `BrandSprite.jsx` |
| Logo animation timing | `intro()` in `src/lib/motion.js` |
| Colours | `:root` in `src/styles/global.css` |

Leave these as they are. Everything else (text, prices, photos) is safe to edit.

---

## 3. How to run it

Requires Node.js 18+ (tested on 22).

```bash
npm install        # once, installs dependencies
npm run dev        # develop: http://localhost:5173 (auto-refreshes on save)
npm run build      # makes the production site in /dist
npm run preview    # serve the /dist build locally to check it
```

---

## 4. How to edit content

| I want to change | Edit |
|---|---|
| WhatsApp number, phone, email, founder name, city, year | `src/data/site.js` |
| Prices, product names, descriptions | `src/data/products.js` (replace each `₹___`) |
| "Who's the lucky one?" gift ideas | `src/data/people.js` |
| The 7 "How it works" steps | `src/data/steps.js` |
| Reviews | `src/data/reviews.js` (set `sample: false` for real ones) |
| FAQ | `src/data/faqs.js` |
| Founder photo, delivered-orders gallery | `src/data/photos.js` |
| Pre-filled WhatsApp message wording | `src/lib/whatsapp.js` |
| Refund / delivery / privacy / terms text | `src/pages/policies/*.jsx` |
| A page's layout or wording | its folder in `src/pages/` |
| A page's styling | the `.css` file in the same folder |
| Menu order / list of pages | `src/routes.jsx` |
| **All wording at once** (improve copy in a table, then apply) | `COPY.md` (lists every line and the file it lives in) |

**Add a real photo**
1. Copy the image into `public/photos/` (e.g. `mug.jpg`).
2. In the data file set `src: 'photos/mug.jpg'` (photos.js), or `image: 'photos/mug.jpg'` on a category/variant (products.js).
3. Without an image, the dashed "Photo: ..." placeholder stays.

**Add a page**
1. Create `src/pages/mypage/MyPage.jsx` (and an optional `MyPage.css`).
2. Add one line to `ROUTES` in `src/routes.jsx`. It gets a menu/footer link and the URL `#/mypage`.

---

## 5. Project structure

```
index.html              page shell
vite.config.js          build config (base './' so it works under any repo name)
public/                 favicon, .nojekyll, your /photos
.github/workflows/      deploy.yml (GitHub Pages)
src/
  main.jsx              entry
  App.jsx               header, page switching and fade, footer, order sheet
  routes.jsx            page registry
  AppContext.jsx        shared state
  data/                 all editable content
  lib/                  whatsapp.js, motion.js, assets.js
  hooks/                useNarrow (under 1040px = mobile layout), useUpdateEffect
  components/           Header, MobileMenu, StickyBar, Footer, OrderSheet, Logo, Photo, BrandSprite
  pages/                home/ products/ how/ about/ reviews/ faq/ contact/ policies/
  styles/               fonts.css, global.css, ui.css (buttons, links, photo box)
  assets/               fonts and logo sprite (locked)
```

Pages open by URL hash: `#/home`, `#/products`, `#/how`, `#/about`, `#/reviews`, `#/faq`, `#/contact`, `#/refund`, `#/shipping`, `#/privacy`, `#/terms`. Hash routing is why GitHub Pages needs no extra setup.

---

## 6. How to publish on GitHub Pages

**Option A: automatic (recommended)**
1. Create a GitHub repo and push this folder to branch `main`:
   ```bash
   git init
   git add .
   git commit -m "Cheer Up site"
   git branch -M main
   git remote add origin https://github.com/<you>/<repo>.git
   git push -u origin main
   ```
2. On GitHub go to Settings, Pages, Source, and choose **GitHub Actions**.
3. Every push to `main` now builds and deploys. The site appears at `https://<you>.github.io/<repo>/`.

**Option B: manual**
```bash
npm run deploy
```
This builds and pushes `/dist` to a `gh-pages` branch. Then in Settings, Pages, set Source to **Deploy from a branch**, `gh-pages`, `/ (root)`.

**Replacing an existing repo that only has an `index.html`:** see the step-by-step in the changelog entry dated 2026-10-29 below; short version: clone the repo, delete the old `index.html`, copy this project in (without `node_modules` and `dist`), push to `main`, then set Settings, Pages, Source to **GitHub Actions**.

**Custom domain:** create `public/CNAME` containing the domain, then set it in Settings, Pages.

---

## 7. Troubleshooting

- **Blank page after deploy:** Settings, Pages, Source must be "GitHub Actions" (Option A) or the `gh-pages` branch (Option B).
- **Changes not showing:** hard refresh (Ctrl+Shift+R); on GitHub wait for the Actions run to finish.
- **`npm run dev` port busy:** Vite picks the next free port and prints it.
- **Photo not appearing:** path is relative to `public/`, with no leading slash: `photos/mug.jpg`.

---

## 8. Changelog

Add a line here every time something changes.

- **2026-10-26** Added `COPY.md`: every line of site text (322 strings across all pages, tabs, FAQ answers, order sheet and WhatsApp messages) with its file and a blank "New text" column. Verified against the live site; it reflects the current About page and founder name (Deevan).

- **2026-10-27** Applied the v2 copy from `COPY.md` (hook-led, emotion-first, gender-neutral) to the whole site: all pages, nav labels, buttons, FAQ, order sheet, WhatsApp messages, page title and accessibility labels. Product and category names, prices, business rules (70/30 payment, 24 hours, Pune only), logos and fonts untouched. The About paragraph that read awkwardly was fixed. Founder photo captions now use the founder name from `src/data/site.js`. `COPY.md` now shows the live text in its Current column with New text blank for the next round.

- **2026-10-28** Added your product photos from `pi/`. Originals stay untouched; trimmed copies are in `pi/trimmed/` (the two polaroids split into `polaroid_large` and `polaroid_small`, plus tight crops of the glass frame, both phone cases, heart keychain and T-shirt). Web-sized versions are in `public/photos/` and wired up in `src/data/products.js` (Keychains, Paintings and prints, Polaroids, T-shirts and hoodies, Phone cases cards; variants Mini Snaps, Big Snaps, Framed photo print, Photo case, Name case). Mugs and the other variants still show the dashed placeholder until you add photos. New optional `inset` on a variant (e.g. `inset: '26%'`) shows its photo smaller inside the box, used so Mini Snaps looks smaller than Big Snaps.

- **2026-10-28 (later)** Polaroids now use the real photos with their dark background (`public/photos/polaroid-big.jpg`, `polaroid-mini.jpg`) instead of cut-outs, so they look like photographs, not edited graphics. Product photos now appear everywhere products are listed: home cards, every Keychains/Paintings/Polaroids/T-shirt/Phone-case variant on the Products page, and a small thumbnail on the "Who's on your mind" idea cards. Removed the short-lived `inset` option. Mugs and the Custom hoodie variant still have no photo. `pi/keychain.png` is an exact copy of `pi/love_kc.png`, so no new image was needed.

- **2026-10-29** Mini Snaps now uses your own photo `pi/sp.jpeg` (cropped to the card shape, saved as `public/photos/polaroid-mini.jpg`) instead of the small polaroid cut from the tablet photo. Big Snaps is unchanged.

- **2026-10-29 (later)** Added the three mug photos (`pi/whitemug.png`, `pi/color mug.png`, `pi/magicmug.png`) as `public/photos/mug-white.jpg`, `mug-colour-inside.jpg`, `mug-magic.jpg`. The square photos were extended top and bottom with the same dark backdrop so the whole mug and handle fit the portrait cards. They are used on Classic white mug, Colour inside mug and Magic mug, and the white mug is the Mugs card on the home page (swap `image` on the Mugs category in `src/data/products.js` to change it). Every category and variant now has a photo except Custom hoodie.

- **2026-10-29 (request page)** New page **Request a new product** ("Not in our catalogue? Request a new one.", `#/request`, `src/pages/request/`). A short form (kind of request, description with tap-to-fill ideas, quantity, budget, when and where, name) that builds a ready-to-send WhatsApp message (`MSG.request` in `src/lib/whatsapp.js`). It is for new product ideas, gifts for a particular need, team or bulk orders, and suggestions. It lives in a new route group `extra` in `src/routes.jsx` (a real page that is not in the header, so the nav stays short) and is linked from the Home page under the six cards, the bottom of the Products page, and the footer. Copy added to `COPY.md` section 15. To change the request types or the starter ideas, edit the `KINDS` and `STARTERS` lists at the top of `Request.jsx`.

- **2026-10-29 (request is now up front)** The request option is no longer buried. It now appears: (1) as a dark strip above the header on every page ("Can't find it in our catalogue? We'll make it. Request a new gift"), (2) as a highlighted pill button "Request a gift" in the header, mobile menu and footer (`highlight: true` on the route in `src/routes.jsx`), (3) as a link in the hero, and (4) as a big request box straight under the hero on Home (`src/pages/home/RequestBand.jsx`) where someone can type a gift idea and send it on WhatsApp without browsing anything. The full form stays on `#/request`. The page moved from route group `extra` to `main`. The header was tightened between 1040px and 1220px wide so the extra link fits on one line. Copy in `COPY.md` section 15.
