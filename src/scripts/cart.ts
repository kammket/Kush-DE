// Cart store — localStorage-backed with custom event dispatching

export interface CartItem {
  slug: string;
  name: string;
  image: string;
  variantLabel: string;
  price: number;
  quantity: number;
}

const CART_KEY = 'cbd_cart';

function broadcast() {
  window.dispatchEvent(new CustomEvent('cart:updated'));
}

export function getCart(): CartItem[] {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY) || '[]');
  } catch {
    return [];
  }
}

function saveCart(cart: CartItem[]) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  broadcast();
}

export function addToCart(item: Omit<CartItem, 'quantity'>, qty = 1) {
  const cart = getCart();
  const key = `${item.slug}::${item.variantLabel}`;
  const existing = cart.find(c => `${c.slug}::${c.variantLabel}` === key);
  if (existing) {
    existing.quantity += qty;
  } else {
    cart.push({ ...item, quantity: qty });
  }
  saveCart(cart);
}

export function removeFromCart(slug: string, variantLabel: string) {
  const cart = getCart().filter(
    c => !(c.slug === slug && c.variantLabel === variantLabel)
  );
  saveCart(cart);
}

export function updateQuantity(slug: string, variantLabel: string, qty: number) {
  const cart = getCart();
  const item = cart.find(c => c.slug === slug && c.variantLabel === variantLabel);
  if (item) {
    if (qty <= 0) {
      return removeFromCart(slug, variantLabel);
    }
    item.quantity = qty;
  }
  saveCart(cart);
}

export function getCartCount(): number {
  return getCart().reduce((sum, c) => sum + c.quantity, 0);
}

export function getCartTotal(): number {
  return getCart().reduce((sum, c) => sum + c.price * c.quantity, 0);
}

export function clearCart() {
  localStorage.removeItem(CART_KEY);
  broadcast();
}
