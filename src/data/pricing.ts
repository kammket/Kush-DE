/**
 * Order pricing — the one place cart, checkout (every locale), the WhatsApp order
 * message and the order email get their numbers from.
 *
 * Order of operations, matching what the customer reads top to bottom:
 *   subtotal (sum of line items)
 *   − discount  (volume tier OR promo code, whichever is larger — never both)
 *   + shipping  (free when the subtotal reaches FREE_SHIPPING_THRESHOLD,
 *                otherwise the destination's zone rate)
 *   = total
 *
 * The minimum order and the free-shipping threshold are both measured on the
 * subtotal *before* discount, so a discount can never push an order back under
 * either line — the figure the customer compares against is the "Subtotal" row.
 */
import { MIN_ORDER, resolveDiscount } from './discounts';

export { MIN_ORDER };

/** Free standard shipping to every destination from this subtotal (EUR). */
export const FREE_SHIPPING_THRESHOLD = 200;

/** Active promo codes → percent off. Kept in sync with the site announcement bar. */
export const PROMO_CODES: Record<string, number> = {
  CBD20: 20,
};

export interface ShippingZone {
  id: 'fr' | 'zone1' | 'zone2' | 'zone3';
  rate: number;
  /** Transit time in business days, as published on the shipping page. */
  transitDays: [number, number];
  countries: readonly string[];
}

/** Mirrors the table on /shipping. Zone 3 is the rest of Europe. */
export const SHIPPING_ZONES: readonly ShippingZone[] = [
  { id: 'fr', rate: 9.9, transitDays: [1, 2], countries: ['FR'] },
  { id: 'zone1', rate: 9.9, transitDays: [2, 4], countries: ['BE', 'LU', 'DE', 'NL'] },
  { id: 'zone2', rate: 14.9, transitDays: [3, 5], countries: ['IT', 'ES', 'PT', 'AT', 'CH'] },
  {
    id: 'zone3', rate: 19.9, transitDays: [5, 7], countries: [
      'AD', 'AL', 'BA', 'BG', 'BY', 'CY', 'CZ', 'DK', 'EE', 'FI', 'GB', 'GR', 'HR', 'HU',
      'IE', 'IS', 'LI', 'LT', 'LV', 'MC', 'MD', 'ME', 'MK', 'MT', 'NO', 'PL', 'RO', 'RS',
      'SE', 'SI', 'SK', 'SM', 'UA', 'VA',
    ],
  },
];

export function roundCents(value: number): number {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

export function shippingZoneFor(country: string | undefined): ShippingZone | null {
  const code = (country || '').toUpperCase();
  return SHIPPING_ZONES.find((z) => z.countries.includes(code)) ?? null;
}

/** Percent off for a promo code, or 0 when the code is unknown. */
export function promoPercent(code: string | null | undefined): number {
  return PROMO_CODES[(code || '').trim().toUpperCase()] ?? 0;
}

export interface OrderTotals {
  subtotal: number;
  discount: {
    percent: number;
    amount: number;
    source: 'volume' | 'promo' | 'none';
    /** The promo code, when that is what produced the discount. */
    code: string | null;
  };
  shipping: {
    free: boolean;
    /** EUR to charge; null when no rate exists for the destination (quoted manually). */
    cost: number | null;
    zone: ShippingZone['id'] | null;
  };
  /** Goods after discount, plus shipping when it is known. */
  total: number;
  meetsMinimum: boolean;
  /** EUR still needed to reach the minimum order (0 once reached). */
  toMinimum: number;
  /** EUR still needed for free shipping (0 once reached). */
  toFreeShipping: number;
}

/**
 * @param rawSubtotal sum of line items
 * @param opts.promoCode code the customer applied, if any
 * @param opts.country ISO country code; omit on the cart page where it is not known yet
 */
export function computeTotals(
  rawSubtotal: number,
  opts: { promoCode?: string | null; country?: string } = {},
): OrderTotals {
  const subtotal = roundCents(rawSubtotal);
  const code = opts.promoCode ? opts.promoCode.trim().toUpperCase() : null;
  const resolved = resolveDiscount(subtotal, promoPercent(code));
  const discountAmount = roundCents(resolved.amount);

  const free = subtotal >= FREE_SHIPPING_THRESHOLD;
  const zone = opts.country ? shippingZoneFor(opts.country) : null;
  const cost = free ? 0 : zone ? zone.rate : null;

  const goods = roundCents(subtotal - discountAmount);
  return {
    subtotal,
    discount: {
      percent: resolved.percent,
      amount: discountAmount,
      source: resolved.source,
      code: resolved.source === 'promo' ? code : null,
    },
    shipping: { free, cost, zone: zone?.id ?? null },
    total: roundCents(goods + (cost ?? 0)),
    meetsMinimum: subtotal >= MIN_ORDER,
    toMinimum: roundCents(Math.max(0, MIN_ORDER - subtotal)),
    toFreeShipping: roundCents(Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal)),
  };
}
