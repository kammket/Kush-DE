// Recently-viewed products — localStorage-backed, same pattern as cart.ts

export interface RecentProduct {
  slug: string;
  name: string;
  image: string;
  price: string;
  category: string;
}

const KEY = 'cbd_recently_viewed';
const MAX_ITEMS = 8;

export function getRecentlyViewed(): RecentProduct[] {
  try {
    return JSON.parse(localStorage.getItem(KEY) || '[]');
  } catch {
    return [];
  }
}

export function trackView(product: RecentProduct) {
  const list = getRecentlyViewed().filter(p => p.slug !== product.slug);
  list.unshift(product);
  localStorage.setItem(KEY, JSON.stringify(list.slice(0, MAX_ITEMS)));
}
