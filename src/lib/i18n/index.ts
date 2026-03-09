import { register, init, getLocaleFromNavigator, locale, waitLocale, _ } from 'svelte-i18n';

register('en', () => import('./en.json'));
register('ar', () => import('./ar.json'));

const detectedLocale = getLocaleFromNavigator();
const normalizedLocale = detectedLocale?.toLowerCase().startsWith('ar') ? 'ar' : 'en';

init({
	fallbackLocale: 'en',
	initialLocale: normalizedLocale
});

export { locale, waitLocale, _ };
