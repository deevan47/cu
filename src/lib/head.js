// Per-page <head>: title, description, canonical, Open Graph and structured data.
//
// Two users of this file:
//   - the browser, via applyHead() on every page change
//   - scripts/prerender.mjs, via headTags() to write the same tags into the static HTML
// Keep it pure: headTags() must not touch the DOM.
import { CATS } from '../data/products';
import { ROUTES } from '../routes';
import { SITE } from '../data/site';

export const ORIGIN = 'https://cheerup.in';
const OG_IMAGE = `${ORIGIN}/og.jpg`;

/** Everything Google needs to tie the site to one real shop in Pune. */
function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Store',
    name: SITE.name,
    slogan: SITE.tagline,
    url: `${ORIGIN}/`,
    logo: `${ORIGIN}/favicon.svg`,
    image: OG_IMAGE,
    telephone: SITE.phoneDisplay,
    email: SITE.email,
    priceRange: '₹35–₹759',
    address: { '@type': 'PostalAddress', addressLocality: SITE.city, addressRegion: 'Maharashtra', addressCountry: 'IN' },
    areaServed: { '@type': 'City', name: SITE.city },
  };
}

/** One Product + Offer per variant, for the Gifts page. */
function productsJsonLd() {
  return CATS.flatMap((c) =>
    c.variants.map((v) => ({
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: v.n,
      category: c.name,
      description: v.d,
      image: `${ORIGIN}/${v.image}`,
      brand: { '@type': 'Brand', name: SITE.name },
      offers: {
        '@type': 'Offer',
        price: v.price,
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
        areaServed: SITE.city,
        url: `${ORIGIN}/gifts`,
      },
    })),
  );
}

/**
 * The tags for one page, as plain data.
 *   { title, meta: [{name|property, content}], canonical, jsonLd: [...] }
 */
export function headTags(key) {
  const r = ROUTES.find((x) => x.key === key) || ROUTES[0];
  // Trailing slash on purpose: GitHub Pages serves /gifts/index.html and 301s
  // /gifts -> /gifts/, so the canonical has to be the URL that actually answers.
  const url = `${ORIGIN}${r.path === '/' ? '/' : `${r.path}/`}`;
  const jsonLd = [localBusinessJsonLd()];
  if (key === 'products') jsonLd.push(...productsJsonLd());
  return {
    title: r.title,
    canonical: url,
    meta: [
      { name: 'description', content: r.description },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: SITE.name },
      { property: 'og:title', content: r.title },
      { property: 'og:description', content: r.description },
      { property: 'og:url', content: url },
      { property: 'og:image', content: OG_IMAGE },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:locale', content: 'en_IN' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: r.title },
      { name: 'twitter:description', content: r.description },
      { name: 'twitter:image', content: OG_IMAGE },
    ],
    jsonLd,
  };
}

/** Writes the tags for `key` into the live document, replacing the previous page's. */
export function applyHead(key) {
  if (typeof document === 'undefined') return;
  const t = headTags(key);
  document.title = t.title;

  const set = (selector, make) => {
    let el = document.head.querySelector(selector);
    if (!el) { el = make(); document.head.appendChild(el); }
    return el;
  };

  t.meta.forEach((m) => {
    const attr = m.name ? 'name' : 'property';
    const value = m.name || m.property;
    const el = set(`meta[${attr}="${value}"]`, () => {
      const n = document.createElement('meta');
      n.setAttribute(attr, value);
      return n;
    });
    el.setAttribute('content', m.content);
  });

  set('link[rel="canonical"]', () => {
    const n = document.createElement('link');
    n.setAttribute('rel', 'canonical');
    return n;
  }).setAttribute('href', t.canonical);

  // one script tag holds every block, so swapping pages can't leave stale data behind
  set('script[data-jsonld]', () => {
    const n = document.createElement('script');
    n.type = 'application/ld+json';
    n.setAttribute('data-jsonld', '');
    return n;
  }).textContent = JSON.stringify(t.jsonLd.length === 1 ? t.jsonLd[0] : t.jsonLd);
}
