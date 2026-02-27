<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { locale, isLoading, _ } from 'svelte-i18n';
	import { onMount } from 'svelte';
	import '../lib/i18n'; // Import i18n configuration

	const logo = '/images/logo bannar.png';

	let { children } = $props();

	let currentLang = $state('en');

	onMount(() => {
		locale.subscribe((value) => {
			if (value) {
				currentLang = value;
				document.documentElement.lang = value;
				document.documentElement.dir = value === 'ar' ? 'rtl' : 'ltr';
			}
		});
	});

	function toggleLanguage() {
		const newLang = currentLang === 'en' ? 'ar' : 'en';
		locale.set(newLang);
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>{$isLoading ? 'Homigo' : $_('meta.title')}</title>
</svelte:head>

{#if !$isLoading}
<div class="flex min-h-screen flex-col font-sans bg-gray-50">
	<header 
		class="fixed top-6 z-50 left-0 right-0 mx-auto w-[calc(100%-3rem)] max-w-350 rounded-[20px] border border-[#D3D3D3] bg-white h-21.5 flex items-center px-4 transition-all"
		style="box-shadow: 0 38px 84px 0 rgba(0, 0, 0, 0.15), 0 153px 153px 0 rgba(0, 0, 0, 0.13), 0 345px 207px 0 rgba(0, 0, 0, 0.08), 0 612px 245px 0 rgba(0, 0, 0, 0.02);"
	>
		<div class="w-full flex items-center justify-between">
			<a href="/" class="flex items-center">
				<img src={logo} alt="Homigo Logo" class="h-21.5 w-70.75 object-contain" />
			</a>

			<div class="flex items-center gap-5 ml-37.5">
				<a href="/#services" class="p-2.5 text-center text-black font-medium text-xl leading-6 font-['SF_Pro']">{$_('nav.services')}</a>
				<a href="/about" class="p-2.5 text-center text-black font-medium text-xl leading-6 font-['SF_Pro']">{$_('nav.about')}</a>
				<a href="/contact" class="p-2.5 text-center text-black font-medium text-xl leading-6 font-['SF_Pro']">{$_('nav.contact')}</a>
				<a href="/blog" class="p-2.5 text-center text-black font-medium text-xl leading-6 font-['SF_Pro']">{$_('nav.blog')}</a>
			</div>

			<div class="flex items-center ml-auto">
				<button onclick={toggleLanguage} class="relative flex items-center gap-1.5 mr-8 cursor-pointer focus:outline-none" aria-label="Toggle Language">
					<img src={currentLang === 'en' ? '/images/EN.svg' : '/images/AR.svg'} alt={currentLang} class="w-5.25 h-3.25" />
					<div class="relative w-6 h-6">
						<svg class="w-6 h-6 absolute top-px left-px transition-transform duration-300 {currentLang === 'ar' ? '-rotate-90' : 'rotate-90'}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
						</svg>
					</div>
				</button>

				<div class="flex items-center justify-center p-2.5">
					<a
						href="/quote"
						class="flex items-center justify-center gap-2.5 rounded-md bg-[#15562E] px-4 py-2.5 h-12 text-white font-medium text-lg leading-5.25 font-['SF_Pro']"
					>
						{$_('nav.quote')}
					</a>
				</div>
			</div>
		</div>
	</header>

	<!-- WhatsApp Floating Icons -->
	<div class="fixed bottom-8 right-8 z-50 flex gap-4">
		<a href="tel:+971551234567" class="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg transition-transform hover:scale-110" aria-label="Call Homigo">
			<svg class="h-8 w-8 text-[#15562E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
			</svg>
		</a>
		<a href="https://wa.me/971551234567" target="_blank" rel="noopener noreferrer" class="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg transition-transform hover:scale-110" aria-label="Contact on WhatsApp">
			<svg class="h-8 w-8 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
				<path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.017-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
			</svg>
		</a>
	</div>

	<main class="grow">
		{@render children()}
	</main>

	<footer class="bg-homigo-dark py-16 text-white">
		<div class="container mx-auto px-4">
			<div class="grid gap-12 md:grid-cols-4">
				<div>
					<img src={logo} alt="Homigo Logo" class="mb-6 h-10 w-auto brightness-0 invert" />
					<p class="text-sm text-gray-300 leading-relaxed">
						{$_('footer.description')}
					</p>
				</div>
				<div>
					<h3 class="mb-6 text-lg font-semibold">{$_('footer.services')}</h3>
					<ul class="space-y-3 text-sm text-gray-300">
						<li><a href="/services/deep-cleaning" class="hover:text-white transition-colors">{$_('footer.links.deep_cleaning')}</a></li>
						<li><a href="/services/office-cleaning" class="hover:text-white transition-colors">{$_('footer.links.office_cleaning')}</a></li>
						<li><a href="/services/technical" class="hover:text-white transition-colors">{$_('footer.links.technical')}</a></li>
						<li><a href="/services/sewage" class="hover:text-white transition-colors">{$_('footer.links.sewage')}</a></li>
					</ul>
				</div>
				<div>
					<h3 class="mb-6 text-lg font-semibold">{$_('footer.company')}</h3>
					<ul class="space-y-3 text-sm text-gray-300">
						<li><a href="/about" class="hover:text-white transition-colors">{$_('nav.about')}</a></li>
						<li><a href="/services" class="hover:text-white transition-colors">{$_('nav.services')}</a></li>
						<li><a href="/contact" class="hover:text-white transition-colors">{$_('nav.contact')}</a></li>
						<li><a href="/blog" class="hover:text-white transition-colors">{$_('nav.blog')}</a></li>
					</ul>
				</div>
				<div>
					<h3 class="mb-6 text-lg font-semibold">{$_('footer.contact')}</h3>
					<ul class="space-y-3 text-sm text-gray-300">
						<li class="flex items-start gap-3">
							<svg class="mt-1 h-5 w-5 shrink-0 text-homigo-green-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
							</svg>
							<span>{$_('footer.address')}</span>
						</li>
						<li class="flex items-center gap-3">
							<svg class="h-5 w-5 shrink-0 text-homigo-green-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
							</svg>
							<span>+971 55 123 4567</span>
						</li>
						<li class="flex items-center gap-3">
							<svg class="h-5 w-5 shrink-0 text-homigo-green-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
							</svg>
							<span>info@homigo.com</span>
						</li>
					</ul>
				</div>
			</div>
			<div class="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 text-sm text-gray-400 md:flex-row">
				<div>© {new Date().getFullYear()} {$_('footer.rights')}</div>
				<div class="flex gap-6">
					<a href="https://twitter.com/homigo" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors" aria-label="Twitter">
						<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
					</a>
					<a href="https://instagram.com/homigo" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors" aria-label="Instagram">
						<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.072 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
					</a>
				</div>
			</div>
			<div class="flex justify-between items-end w-full mt-0">
				<img src="/assets/Footer Illustration.svg" alt="Footer Illustration" />
				<div style="display: flex; width: 184.039px; height: 26.737px; flex-direction: column; justify-content: center; color: color(display-p3 1 1 1); font-family: Satoshi; font-size: 18px; font-style: normal; font-weight: 400; line-height: 132.2%;">
					Designed by vikncodes
				</div>
			</div>
		</div>
	</footer>
</div>
{:else}
<!-- Simple loading state to avoid FOUT -->
<div class="fixed inset-0 bg-gray-50 z-100 flex items-center justify-center">
	<div class="animate-pulse">
		<img src={logo} alt="Loading..." class="h-16 w-auto" />
	</div>
</div>
{/if}
