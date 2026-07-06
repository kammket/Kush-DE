#!/usr/bin/env node
// Submits all sitemap URLs to IndexNow (Bing, Yandex, DuckDuckGo, etc.)
// so they pick up new/changed pages without waiting for a crawl.
//
// This does NOT run automatically as part of `npm run build` — it makes a
// real network call to a third-party service, so it's a separate, explicit
// step you run yourself after deploying to production.
//
// Usage:
//   node scripts/submit-indexnow.mjs           (submits live sitemap)
//   node scripts/submit-indexnow.mjs --dry-run (prints what would be sent)

const SITE = 'https://greensfarmhouse.com';
const KEY = 'f38affeb50da750f69242b093d8111e9';
const dryRun = process.argv.includes('--dry-run');

async function fetchText(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  return res.text();
}

async function getSitemapUrls() {
  const index = await fetchText(`${SITE}/sitemap-index.xml`);
  const childSitemaps = [...index.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
  const urls = [];
  for (const sitemapUrl of childSitemaps) {
    const xml = await fetchText(sitemapUrl);
    urls.push(...[...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]));
  }
  return urls;
}

async function submit(urls) {
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: 'greensfarmhouse.com',
      key: KEY,
      keyLocation: `${SITE}/${KEY}.txt`,
      urlList: urls,
    }),
  });
  return res;
}

const urls = await getSitemapUrls();
console.log(`Found ${urls.length} URLs in the sitemap.`);

if (dryRun) {
  console.log('Dry run — not submitting. First 5 URLs:');
  urls.slice(0, 5).forEach(u => console.log(' ', u));
  process.exit(0);
}

const res = await submit(urls);
console.log(`IndexNow responded with status ${res.status}`);
if (!res.ok) {
  console.error(await res.text());
  process.exit(1);
}
console.log('Submitted successfully.');
