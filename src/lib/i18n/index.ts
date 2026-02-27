import { register, init, getLocaleFromNavigator } from 'svelte-i18n';

register('en', () => import('./en.json'));
register('ar', () => import('./ar.json'));

init({
	fallbackLocale: 'en',
	initialLocale: getLocaleFromNavigator() || 'en'
});