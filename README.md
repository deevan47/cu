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
| Fonts (Figtree, Young Serif, Noto Sans Devanagari) | `public/fonts/*.woff2` |
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

`npm run build` does three things: the normal browser build, a second build of the
same app for Node, and then `scripts/prerender.mjs`, which uses the second build to
write a finished HTML file for every page (plus `404.html`). That is why view-source
on any page shows the real heading and text instead of an empty `<div id="root">`.

Two more commands, run by hand when you change the pictures, not on every build.
Both need [ImageMagick](https://imagemagick.org) (`magick`) installed:

```bash
npm run images     # after adding/replacing anything in public/photos
npm run og         # rebuilds public/og.jpg, the WhatsApp/Google share picture
```

---

## 4. How to edit content

| I want to change | Edit |
|---|---|
| WhatsApp number, phone, email, founder name, city, year | `src/data/site.js` |
| Prices, product names, descriptions, photo alt text | `src/data/products.js` (prices are plain numbers; `lib/money.js` adds the ₹) |
| "Who's the lucky one?" gift ideas | `src/data/people.js` |
| The 7 "How it works" steps | `src/data/steps.js` |
| Reviews and the delivered-gifts gallery | `src/data/reviews.js` (empty on purpose until there are real ones) |
| FAQ | `src/data/faqs.js` |
| Pre-filled WhatsApp message wording | `src/lib/whatsapp.js` |
| Refund / delivery / privacy / terms text | `src/pages/policies/*.jsx` |
| A page's layout or wording | its folder in `src/pages/` |
| A page's styling | the `.css` file in the same folder |
| Menu order, page URLs, page titles and search descriptions | `src/routes.jsx` |
| Legal name, jurisdiction, delivery charge | `src/data/site.js` (all three are `null` until you fill them in) |
| **All wording at once** (improve copy in a table, then apply) | `COPY.md` (lists every line and the file it lives in) |

**Add a real photo**
1. Copy the image into `public/photos/` (e.g. `mug.jpg`). 1200px wide or more, 4:5, is ideal.
2. Run `npm run images`. That writes the WebP variants and records the real pixel
   size in `src/data/images.js`, which is what gives every `<img>` its `srcset`
   and its `width`/`height`.
3. Set `image: 'photos/mug.jpg'` and an `alt:` describing it, on a category or
   variant in `src/data/products.js`.
4. If a photo is missing, nothing is drawn. There are no placeholder boxes.

**Add a page**
1. Create `src/pages/mypage/MyPage.jsx` (and an optional `MyPage.css`).
2. Add one entry to `ROUTES` in `src/routes.jsx` with a `path`, a `title` and a
   `description`. It gets a nav/footer link, its own URL, its own `<title>` and
   its own pre-rendered HTML file.

---

## 5. Project structure

```
index.html              page shell (holds the <!--head--> and <!--app--> markers)
vite.config.js          build config (base '/' : the site is served from its own domain)
public/                 favicon, CNAME, .nojekyll, /fonts, /photos, og.jpg
scripts/                prerender.mjs, images.mjs, og-image.mjs
.github/workflows/      deploy.yml (GitHub Pages)
src/
  main.jsx              entry (hydrates the pre-rendered HTML)
  entry-server.jsx      build-time only: renders a page to a string
  App.jsx               header, page switching and fade, footer, order sheet
  routes.jsx            page registry: path, title and description per page
  AppContext.jsx        shared state
  data/                 all editable content (images.js is generated)
  lib/                  whatsapp.js, motion.js, assets.js, router.js, head.js, img.js, money.js
  hooks/                useNarrow (under 1100px = mobile layout), useUpdateEffect
  components/           Header, MobileMenu, RequestBar, StickyBar, Footer, OrderSheet,
                        Logo, Photo, WaLink, icons, BrandSprite
  pages/                home/ products/ how/ about/ reviews/ faq/ contact/ policies/ request/
  styles/               fonts.css, global.css (tokens), ui.css (buttons, fields, links)
  assets/               logo sprite (locked)
```

**URLs.** Every page has a real path: `/`, `/gifts`, `/request`, `/how-it-works`,
`/my-story`, `/questions`, `/contact`, `/reviews`, `/refunds`, `/delivery`,
`/privacy`, `/terms`. Each one is a separate HTML file in `/dist`, so it can be
found by Google and shown properly in a WhatsApp link preview. The site used to
use `#/gifts`, which to Google was all one page; old `#/...` links still work and
are rewritten to the new path on load (`redirectLegacyHash` in `src/lib/router.js`).

`dist/404.html` is a copy of the home page. GitHub Pages serves it for any path it
has no file for, and the app then reads the real URL and shows the right page.

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

**Custom domain:** `public/CNAME` holds the domain (`cheerup.in`) so it ends up in
the published build, and it is also set in Settings, Pages. Keep both in step.

**Important:** `vite.config.js` uses `base: '/'`, because the site is served from the
root of `cheerup.in`. If you ever move it to `https://<you>.github.io/<repo>/`, the
paths above break; change `base` to `'/<repo>/'` and rebuild.

---

## 7. Troubleshooting

- **Blank page after deploy:** Settings, Pages, Source must be "GitHub Actions" (Option A) or the `gh-pages` branch (Option B).
- **Changes not showing:** hard refresh (Ctrl+Shift+R); on GitHub wait for the Actions run to finish.
- **`npm run dev` port busy:** Vite picks the next free port and prints it.
- **Photo not appearing:** path is relative to `public/`, with no leading slash: `photos/mug.jpg`. If it appears but has no `srcset`, run `npm run images`.
- **A deep link like `/gifts` 404s:** the host must fall back to `404.html` (GitHub Pages does this automatically). On another host, point its SPA fallback at `dist/404.html`.
- **`npm run preview` shows the home page's HTML on every URL.** That is `vite preview`
  doing SPA fallback: it answers `/gifts` with `dist/index.html` instead of
  `dist/gifts/index.html`. The page still looks right, because the app corrects
  itself once it loads, but React logs a hydration mismatch in the console and the
  pre-rendered HTML you are looking at is the wrong page's. **Test with the trailing
  slash** (`/gifts/`, `/my-story/`), which is the URL GitHub Pages actually serves;
  those hydrate cleanly. It is a quirk of the preview server, not of the build.
- **`npm run images` or `npm run og` fails:** install ImageMagick; `magick -version` should print a version.

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

- **2026-11-06 (minimal re-theme)** Same colours and fonts, much quieter look. Home page rebuilt as plain editorial sections: hero, request box, "who's it for" list, the deal (Free / 30% / 24h), the gifts grid, how it works (3 columns), founder, final call to action, each with a small numbered section marker. **The CU logo and its draw-in animation are unchanged** (same SVG, same size, same `intro()` in `src/lib/motion.js`). New global rules: one 2px corner radius, hairline rules, flat buttons with one colour change on hover. **Numbers:** Young Serif has no lining or even-width digits, so digits and `%` in headings now use Figtree Bold through a small font face (`CU Numerals` in `src/styles/fonts.css`, listed first in `--serif`). **Fonts per device:** a fluid type scale in `src/styles/global.css` (`--fs-body`, `--fs-lead`, `--fs-small`, `--fs-kicker`, `--fs-h3`, `--fs-h2`, `--fs-h1`, `--fs-display`) tuned between a 360px phone and a 1440px desktop; use these instead of fixed px sizes. Checked at 1280, 768 and 390 px on Home, Gifts, How it works, My story, Reviews, Questions, Say hi and Request: no horizontal overflow and no overlapping text. An earlier busier attempt (marquee, custom cursor, ticket and slip decorations) was dropped because it was too much.


- **2026-11-18 (UI/UX audit fixes)** Worked through the `webroaster-fix-spec.md` audit. Colours, fonts and the CU logo are untouched; where a brand colour failed contrast, what it sits on changed, never the colour. **The hero logo and its draw-in animation stay exactly as they were** (the spec asked for them to be replaced with a photo grid; a strip of four product photos now sits under the hero instead).

  *Findable and fast.* Every page has a real URL instead of `#/...` (`/gifts`, `/my-story`, `/questions`, ...); old hash links are rewritten on load. Each page is pre-rendered to its own HTML file with its own `<title>`, description, canonical, Open Graph tags and `Store` structured data, plus `Product` + `Offer` for all 14 variants on `/gifts`. New `public/og.jpg` for WhatsApp and search previews. The two fonts used above the fold are preloaded (they moved to `public/fonts` so they have stable URLs), with a metric-matched Georgia fallback so headlines no longer jump when Young Serif lands. Photos are served as WebP with `srcset`, `sizes` and real `width`/`height`.

  *One design system.* Fourteen body font sizes became eight tokens; four corner radii became one; spacing runs on a 4px scale. One `.eyebrow`, one `.h-page`, one button set. The focus ring moved from `--accent` (2.2:1 on orange) to `--ink` (14.4:1 on cream), flipping to cream on dark panels. Form fields got a full box with a `--muted` border (7.3:1) instead of a `--line` underline (1.3:1).

  *One name per action.* Nine different labels for "open WhatsApp" became five, and every WhatsApp link now carries a chat icon (`src/components/WaLink.jsx` is the only way to make one).

  *Accessibility.* Skip link; `<main id="main">`; the mobile menu gets `aria-controls`, marks the page behind it `inert`, takes focus and returns it on Escape; the order sheet is a real modal rendered only while open (it used to sit on all twelve pages with an empty `<h2>`); the Request page's five toggle buttons became one radio group in a `<fieldset>`; the people picker got arrow keys and a real tab panel; the FAQ became `<details>`/`<summary>` with a plus/minus; alt text describes the picture.

  *Page by page.* Gifts shows all six categories stacked behind a sticky chip row instead of hiding eleven of fourteen products behind tabs, and prices now read `₹269` and `₹35 per print`. Request splits "Date and area" into two fields and keeps the form on the first screen. Home drops the duplicated request band (the offer appeared four times), says "70/30" instead of "30%", fixes "Deliverd", and is about 25% shorter on a phone. Reviews no longer shows three reviews labelled as samples or six empty photo frames. The broken `/pi/founder.jpeg` image is gone from Home and My story. Policies lost their repeated paragraphs and sit on the page grid.

  *Checked* at 1440px and 375px on all twelve pages: no horizontal overflow, no text under 4.5:1 (large text under 3:1), nav links 44px tall, Home 7,767px on a phone, and the first product on `/gifts` 514px from the top. One real bug found and fixed on the way: `.mobile-menu a` was more specific than `.btn--primary`, which painted the menu's WhatsApp button ink-on-orange at 2.6:1.

  *Still needs you* (listed in the files as `OWNER TO SUPPLY`): the founder photo; product photos that show a customer's photo or name rather than the Cheer Up logo; the delivery charge; the legal name and jurisdiction for the Terms; confirmation that Polaroids are priced per print; and real reviews. A lawyer should read the Privacy and Terms pages before publishing.

- **2026-11-18 (later: number, names and emphasis)** Four changes asked for after the audit pass.

  **New WhatsApp number: +91 9505 9696 70** (was +91 834 163 7447). It lives in one place, `src/data/site.js`, and from there it reaches every `wa.me` link, the big number on Contact, the footer, the search listing and the Contact page's description. `public/og.jpg` was rebuilt with `npm run og` because the old number was drawn into it.

  **The Home strip now names and prices its products** ("Big Snaps, ₹45 per print", "Colour inside mug, ₹329", and so on). It reads them live from `src/data/products.js`, so they cannot drift from the Gifts page. Unlabelled thumbnails were decoration; a name and a price are something a visitor can decide about. Edit the `PICKS` list in `src/pages/home/Showcase.jsx` to change which four appear.

  **A marker highlight (`.hl`) for one phrase per page**, listed in `COPY.md` section 19: the 24-hour promise on Home, "Prices from ₹35" on Gifts, "students can afford it" on My story, "Not a rupee until you've seen the design and loved it" on How it works, and so on. It is a background band drawn behind the lower part of the line with deliberately uneven corners, so it reads as a pen stroke rather than a UI chip, and it never changes the text colour (ink on the sand stroke is 11.83:1). Questions, Reviews and the policy pages have none on purpose. **One per page.**

  **Anti-template pass.** Checked every visible string for the usual machine tells: no em dashes, no emoji, none of the stock vocabulary ("elevate", "discover", "seamless", "curated", "effortless", "in today's", "look no further" and the rest). The one visual change: the four reasons on My story no longer each carry a copy of the same brand eye icon, which is what a template does; they now sit under hairline rules with the headings doing the work, matching the three steps on Home.

  Re-checked at 1440px and 375px on all twelve pages: no horizontal overflow, no text below 4.5:1 (every highlighted phrase measures 11.83:1), and Home is still under 8,000px on a phone.

- **2026-11-23 (bug fix: the Questions page could take the site down)** Opening and closing a few FAQ rows crashed the whole app: the page went blank and stayed blank until a reload, and every link in the header and footer stopped working with it.

  The cause was in `src/pages/faq/Faq.jsx`. The toggle handler read `e.currentTarget.open` *inside* the `setOpen` updater function. React sets `currentTarget` back to `null` as soon as the handler returns, and a state updater does not run then, it runs later during the render, so by the time the line executed it was reading `.open` off `null`. The throw happened during rendering, which unmounts the whole tree rather than just the one row.

  Fixed by reading the value in the handler and passing the value, not the event, into the updater. The same pattern (reading `e.target.value` inside the updater) was in the order sheet and the Request form; those two happened to work, because React leaves `target` alone, but both now capture the value first so the next person does not have to know that distinction.

  Worth knowing for next time: this never showed up in the build, in a lint pass, or in a single click, which is why the first round of checks missed it. It only appeared when several rows were toggled in a row.

  Re-checked afterwards on all twelve pages: all 14 order-sheet panels open and close, all 8 people tabs switch, the 6 jump chips resolve, the copy button works, the Request form builds a correct message, the phone menu opens with the page behind it inert and Escape returns focus to the toggle, and there are no contrast failures and no horizontal overflow at 1440px or 375px.
