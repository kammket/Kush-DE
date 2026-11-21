/**
 * Current catalogue prices keyed by product slug and variant label.
 *
 * A cart stores each line's price at the moment it was added, so a basket kept
 * in the browser across a price change would otherwise be quoted — and
 * invoiced — at the old price. The cart pages re-price lines from this map, and
 * the order email recomputes every order from it on the server.
 */
import { products } from './products';

/** Label the product cards use for items that have no variants. */
export const DEFAULT_VARIANT = 'Default';

export interface CatalogEntry {
  name: string;
  /** variant label → price in EUR */
  prices: Record<string, number>;
}

export type CatalogPriceMap = Record<string, CatalogEntry>;

export function buildCatalogPriceMap(): CatalogPriceMap {
  const map: CatalogPriceMap = {};
  for (const p of products) {
    const prices: Record<string, number> = {};
    if (p.variants && p.variants.length > 0) {
      for (const v of p.variants) prices[v.label] = v.price;
    } else {
      prices[DEFAULT_VARIANT] = p.priceNumeric;
    }
    map[p.slug] = { name: p.name, prices };
  }
  return map;
}

/** Current price for a cart line, or null when the product/variant no longer exists. */
export function lookupPrice(map: CatalogPriceMap, slug: string, variantLabel: string): number | null {
  const price = map[slug]?.prices[variantLabel];
  return typeof price === 'number' ? price : null;
}
