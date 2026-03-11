import { defaultLocale, allLocales, supportedLocales, type Locale } from './config';
import { ui } from './ui';

export function getLocaleFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/');
  if ((allLocales as readonly string[]).includes(lang)) return lang as Locale;
  return defaultLocale;
}

export function t(locale: Locale, key: string): string {
  const keys = key.split('.');
  let result: any = ui[locale] || ui[defaultLocale];
  for (const k of keys) {
    result = result?.[k];
  }
  if (result === undefined) {
    let fallback: any = ui[defaultLocale];
    for (const k of keys) {
      fallback = fallback?.[k];
    }
    return fallback ?? key;
  }
  return result;
}

export function getLocalePath(path: string, locale: Locale): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (locale === defaultLocale) return cleanPath;
  return `/${locale}${cleanPath}`;
}

export function getPathWithoutLocale(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  if ((allLocales as readonly string[]).includes(segments[0])) {
    const rest = segments.slice(1).join('/');
    return rest ? `/${rest}` : '/';
  }
  return pathname;
}

export function getAbsoluteLocaleUrl(locale: Locale, path: string): string {
  return `https://greensfarmhouse.com${getLocalePath(path, locale)}`;
}

export { defaultLocale, allLocales, supportedLocales, type Locale };
