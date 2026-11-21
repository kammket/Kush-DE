// @ts-check
/**
 * Post-build pass that rewrites internal page URLs to their trailing-slash form.
 *
 * Cloudflare Pages serves every page from `<path>/index.html` and 308-redirects
 * `/path` to `/path/`. Canonicals, hreflang and the sitemap already use the
 * slashed form, but ~1,600 hand-written hrefs, `lp()` links, translated blog HTML
 * and JSON-LD `url`/`item` values did not — so nearly every internal link cost
 * crawlers a redirect hop and contradicted the canonical URL.
 *
 * Rewriting the built HTML catches every source of links in one place. A URL is
 * only changed when `<path>/index.html` actually exists in the build output, so
 * files (`/rss.xml`, `/images/x.webp`), anchors and missing pages are untouched.
 */
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

/** @param {{ site: string }} options */
export default function trailingSlashLinks({ site }) {
  const origin = new URL(site).origin;
  const escapedOrigin = origin.replace(/[.*+?^${}()|[\]\\/]/g, '\\$&');

  return {
    name: 'trailing-slash-links',
    hooks: {
      /** @param {{ dir: URL, logger: { info: (msg: string) => void } }} args */
      'astro:build:done': async ({ dir, logger }) => {
        const root = fileURLToPath(dir);
        /** @type {Map<string, boolean>} */
        const isPageCache = new Map();

        /** True when `/a/b` is served from `/a/b/index.html`. */
        const isPage = (/** @type {string} */ p) => {
          let hit = isPageCache.get(p);
          if (hit === undefined) {
            let decoded = p;
            try { decoded = decodeURI(p); } catch { /* leave as-is */ }
            hit = existsSync(path.join(root, decoded, 'index.html'));
            isPageCache.set(p, hit);
          }
          return hit;
        };

        const withSlash = (/** @type {string} */ p) => {
          if (p === '' || p.endsWith('/')) return p;
          const last = p.slice(p.lastIndexOf('/') + 1);
          if (last.includes('.')) return p; // a file, not a page
          return isPage(p) ? `${p}/` : p;
        };

        // href="/path", href="/path?x" and href="/path#x" (root-relative only).
        const hrefRe = /(\bhref=")(\/(?!\/)[^"?#]*)([?#][^"]*)?"/g;
        // Absolute same-site URLs anywhere: JSON-LD, og tags, visible text.
        const absRe = new RegExp(`(${escapedOrigin})(/[^"'\\s<>?#\\\\]*)`, 'g');

        let files = 0;
        let rewrites = 0;
        for await (const file of walkHtml(root)) {
          const html = await readFile(file, 'utf8');
          let changed = 0;
          const out = html
            .replace(hrefRe, (m, pre, p, rest = '') => {
              const fixed = withSlash(p);
              if (fixed === p) return m;
              changed++;
              return `${pre}${fixed}${rest}"`;
            })
            .replace(absRe, (m, host, p) => {
              const fixed = withSlash(p);
              if (fixed === p) return m;
              changed++;
              return `${host}${fixed}`;
            });
          if (changed) {
            await writeFile(file, out);
            files++;
            rewrites += changed;
          }
        }
        logger.info(`added trailing slashes to ${rewrites} internal URLs in ${files} pages`);
      },
    },
  };
}

/** @param {string} dir @returns {AsyncGenerator<string>} */
async function* walkHtml(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walkHtml(full);
    else if (entry.name.endsWith('.html')) yield full;
  }
}
