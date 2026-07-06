// Product comparison list — sessionStorage-backed (per-session, not persistent like cart)

export interface CompareItem {
  slug: string;
  name: string;
  image: string;
  price: string;
  category: string;
}

const KEY = 'cbd_compare';
const MAX_ITEMS = 3;

function broadcast() {
  window.dispatchEvent(new CustomEvent('compare:updated'));
}

export function getCompareList(): CompareItem[] {
  try {
    return JSON.parse(sessionStorage.getItem(KEY) || '[]');
  } catch {
    return [];
  }
}

function save(list: CompareItem[]) {
  sessionStorage.setItem(KEY, JSON.stringify(list));
  broadcast();
}

export function toggleCompare(item: CompareItem): boolean {
  const list = getCompareList();
  const idx = list.findIndex(p => p.slug === item.slug);
  if (idx >= 0) {
    list.splice(idx, 1);
    save(list);
    return false;
  }
  if (list.length >= MAX_ITEMS) return false;
  list.push(item);
  save(list);
  return true;
}

export function clearCompare() {
  sessionStorage.removeItem(KEY);
  broadcast();
}

export function isComparing(slug: string): boolean {
  return getCompareList().some(p => p.slug === slug);
}
