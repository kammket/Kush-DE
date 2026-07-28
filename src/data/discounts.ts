/**
 * Volume discount ladder — single source of truth.
 *
 * Products already carry per-product variant tiers (25g → 1kg drops the per-gram
 * price by ~72%). That rewards buying a lot of ONE product but penalises buying
 * the range: 100g each of five strains costs €245 against €145 for 500g of one.
 * This ladder applies to the basket subtotal instead, so a large order is
 * rewarded however it is split across products.
 *
 * These percentages stack on top of the variant tiers by design.
 * Cart, checkout, product pages and the order email all read from here, so a
 * percentage change is a one-line edit.
 */

export interface DiscountTier {
  /** Inclusive subtotal floor in EUR. */
  min: number;
  /** Whole-number percent off the subtotal. */
  percent: number;
}

/** Minimum order value required to check out at all. */
export const MIN_ORDER = 150;

/**
 * Deliberately a hard step rather than a marginal/bracketed rate: crossing a
 * threshold makes the order cheaper in absolute terms (€299 → €300 saves €15),
 * which is precisely what makes topping the basket up worthwhile.
 */
export const discountTiers: readonly DiscountTier[] = [
  { min: 0, percent: 0 },
  { min: 300, percent: 5 },
  { min: 600, percent: 8 },
  { min: 1200, percent: 12 },
  { min: 2500, percent: 15 },
];

/** The tier a given subtotal currently qualifies for. Never returns undefined. */
export function getTier(subtotal: number): DiscountTier {
  let current = discountTiers[0];
  for (const tier of discountTiers) {
    if (subtotal >= tier.min) current = tier;
  }
  return current;
}

/** The next tier up, or null when already at the top. */
export function getNextTier(subtotal: number): DiscountTier | null {
  return discountTiers.find(t => t.min > subtotal) ?? null;
}

/** Discount in EUR for a subtotal, rounded to cents. */
export function getDiscountAmount(subtotal: number): number {
  return Math.round(subtotal * getTier(subtotal).percent) / 100;
}

/**
 * What the customer gains by reaching the next tier: how much more they need to
 * spend, and what they would save at that point. Returns null at the top tier.
 *
 * `saving` is the discount on the *topped-up* subtotal, which is the honest
 * number to show — it is what they would actually save by spending that much.
 */
export function getNextTierProgress(subtotal: number): {
  tier: DiscountTier;
  amountAway: number;
  saving: number;
  /** 0–100, progress from the current tier floor to the next. */
  progress: number;
} | null {
  const next = getNextTier(subtotal);
  if (!next) return null;
  const floor = getTier(subtotal).min;
  const span = next.min - floor;
  return {
    tier: next,
    amountAway: Math.round((next.min - subtotal) * 100) / 100,
    saving: Math.round(next.min * next.percent) / 100,
    progress: span > 0 ? Math.min(100, Math.max(0, ((subtotal - floor) / span) * 100)) : 0,
  };
}

/**
 * Resolves the volume discount against a manual promo code.
 * They do not stack — the customer gets whichever is worth more — so a 20% code
 * on top of a 15% tier cannot quietly become 35% off.
 */
export function resolveDiscount(subtotal: number, promoPercent = 0): {
  percent: number;
  amount: number;
  source: 'volume' | 'promo' | 'none';
} {
  const volume = getTier(subtotal).percent;
  const percent = Math.max(volume, promoPercent);
  if (percent === 0) return { percent: 0, amount: 0, source: 'none' };
  return {
    percent,
    amount: Math.round(subtotal * percent) / 100,
    source: promoPercent > volume ? 'promo' : 'volume',
  };
}
