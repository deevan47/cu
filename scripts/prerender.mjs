// Writes a real HTML file for every page, so the first thing a phone or a crawler
// gets is the finished page instead of an empty cream screen and a 234KB download.
//
// Run by `npm run build` after the two vite builds:
//   dist/            the normal client build (index.html + hashed assets)
//   .ssr-build/      the same app built for node, so we can render it to a string
//
// Output: dist/index.html, dist/gifts/index.html, ... plus dist/404.html, which is
// what GitHub Pages serves for a path it has no file for. 404.html carries the home
// page's markup; the app then reads the real URL and renders the right page.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const DIST = 'dist';
const { ROUTES, headTags, render } = await import(pathToFileURL(resolve('.ssr-build/entry-server.js')).href);

const esc = (s) => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** The <head> contents for one page, as HTML. */
function headHtml(key) {
  const t = headTags(key);
  const parts = [`<title>${esc(t.title)}</title>`];
  for (const m of t.meta) {
    const attr = m.name ? 'name' : 'property';
    parts.push(`<meta ${attr}="${esc(m.name || m.property)}" content="${esc(m.content)}" />`);
  }
  parts.push(`<link rel="canonical" href="${esc(t.canonical)}" />`);
  const data = t.jsonLd.length === 1 ? t.jsonLd[0] : t.jsonLd;
  // '<' is escaped so the JSON can never close the script tag early
  parts.push(`<script type="application/ld+json" data-jsonld>${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`);
  return parts.join('\n    ');
}

const template = readFileSync(join(DIST, 'index.html'), 'utf8');
for (const marker of ['<!--app-->', '<!--head-->']) {
  if (!template.includes(marker)) throw new Error(`dist/index.html has no ${marker} marker`);
}

const write = (file, html) => {
  const full = join(DIST, file);
  mkdirSync(dirname(full), { recursive: true });
  writeFileSync(full, html);
};

/** The finished HTML for one route: the build's shell, its own head, its own markup. */
const page = (route) => template
  .replace(/<title>[\s\S]*?<\/title>/, '')      // drop the shell's placeholder title
  .replace('<!--head-->', headHtml(route.key))
  .replace('<!--app-->', render(route.path));

for (const route of ROUTES) {
  write(route.path === '/' ? 'index.html' : `${route.path.replace(/^\//, '')}/index.html`, page(route));
}
write('404.html', page(ROUTES.find((r) => r.path === '/')));

console.log(`prerendered ${ROUTES.length} pages + 404.html`);
