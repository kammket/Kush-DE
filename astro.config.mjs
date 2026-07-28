// @ts-check
import { defineConfig } from 'astro/config';
import { execFileSync } from 'node:child_process';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

/**
 * Last git commit date for a source file, or null if unavailable.
 * Google ignores `lastmod` when it isn't trustworthy, so we only emit dates
 * backed by real commits — never a build timestamp, which would change on
 * every deploy regardless of whether the content actually changed.
 */
function gitLastModified(file) {
  try {
    const out = execFileSync('git', ['log', '-1', '--format=%cI', '--', file], {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
    return out || null;
  } catch {
    return null; // no git history (shallow/exported checkout) — omit lastmod
  }
}

/** URL path patterns → the source file whose commit date drives their content. */
const LASTMOD_SOURCES = [
  [/\/blog(\/|$)/, 'src/data/blog.ts'],
  [/\/products\//, 'src/data/products.ts'],
  [/\/collections(\/|$)/, 'src/data/products.ts'],
  [/\/strains(\/|$)/, 'src/data/strains.ts'],
];

const lastmodCache = new Map();
function lastmodFor(url) {
  const { pathname } = new URL(url);
  const source = LASTMOD_SOURCES.find(([re]) => re.test(pathname))?.[1];
  if (!source) return undefined;
  if (!lastmodCache.has(source)) lastmodCache.set(source, gitLastModified(source));
  return lastmodCache.get(source) ?? undefined;
}

// https://astro.build/config
export default defineConfig({
  site: 'https://greensfarmhouse.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'fr', 'de', 'nl', 'it', 'fi', 'pt'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    sitemap({
      serialize: (item) => {
        const lastmod = lastmodFor(item.url);
        return lastmod ? { ...item, lastmod } : item;
      },
      filter: (page) =>
        // Must mirror the pages that render noindex. Listing a noindex URL in the
        // sitemap asks Google to index a page that then refuses indexing.
        !page.includes('/cart') &&
        !page.includes('/checkout') &&
        !page.includes('/404') &&
        !page.includes('/compare') &&
        !page.includes('/search') &&
        // localized blog pages canonical to the English original until translated
        !/\/(es|fr|de|nl|it|fi|pt)\/blog(\/|$)/.test(page),
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          es: 'es',
          fr: 'fr',
          de: 'de',
          nl: 'nl',
          it: 'it',
          fi: 'fi',
          pt: 'pt',
        },
      },
    }),
  ],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});