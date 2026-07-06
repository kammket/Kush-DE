import type { APIRoute } from 'astro';
import { products, categories } from '../data/products';

const SITE = 'https://greensfarmhouse.com';

function escapeXml(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function absoluteImage(image: string) {
  return image.startsWith('http') ? image : `${SITE}${image}`;
}

export const GET: APIRoute = () => {
  const entries: { loc: string; images: { url: string; title: string }[] }[] = [];

  for (const product of products) {
    if (!product.image) continue;
    entries.push({
      loc: `${SITE}/products/${product.slug}`,
      images: [{ url: absoluteImage(product.image), title: product.name }],
    });
  }

  for (const category of categories) {
    if (!category.image) continue;
    entries.push({
      loc: `${SITE}/collections/${category.slug}`,
      images: [{ url: absoluteImage(category.image), title: category.name }],
    });
  }

  const urlEntries = entries.map(e => `  <url>
    <loc>${escapeXml(e.loc)}</loc>
${e.images.map(img => `    <image:image>
      <image:loc>${escapeXml(img.url)}</image:loc>
      <image:title>${escapeXml(img.title)}</image:title>
    </image:image>`).join('\n')}
  </url>`).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlEntries}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
