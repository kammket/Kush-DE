export const defaultLocale = 'en' as const;
export const supportedLocales = ['es', 'fr', 'de', 'nl', 'it', 'fi', 'pt'] as const;
export const allLocales = ['en', ...supportedLocales] as const;
export type Locale = (typeof allLocales)[number];

export const localeNames: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  nl: 'Nederlands',
  it: 'Italiano',
  fi: 'Suomi',
  pt: 'Português',
};

export const localeFlags: Record<Locale, string> = {
  en: '🇬🇧',
  es: '🇪🇸',
  fr: '🇫🇷',
  de: '🇩🇪',
  nl: '🇳🇱',
  it: '🇮🇹',
  fi: '🇫🇮',
  pt: '🇵🇹',
};

export const localeOgLocale: Record<Locale, string> = {
  en: 'en_GB',
  es: 'es_ES',
  fr: 'fr_FR',
  de: 'de_DE',
  nl: 'nl_NL',
  it: 'it_IT',
  fi: 'fi_FI',
  pt: 'pt_PT',
};

export function isValidLocale(lang: string): lang is Locale {
  return (allLocales as readonly string[]).includes(lang);
}
