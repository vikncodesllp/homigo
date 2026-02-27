import { waitLocale } from 'svelte-i18n';
import '../lib/i18n';

export const ssr = false;

export const load = async () => {
await waitLocale();
};
