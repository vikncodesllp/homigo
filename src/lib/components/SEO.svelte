<script lang="ts">
	import { page } from '$app/state';
	
	let { 
		title = 'Homigo - Top Rated Technical & Cleaning Services in Dubai',
		description = 'Homigo offers professional cleaning and technical services in Dubai. From deep cleaning to AC maintenance, our expert team ensures quality and reliability.',
		image = '/images/bannar.png',
		type = 'website'
	} = $props();

	const siteUrl = 'https://homigotechnicalservices.com';
	let currentUrl = $derived(`${siteUrl}${page.url.pathname}`);
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>{title}</title>
	<meta name="title" content={title} />
	<meta name="description" content={description} />
	<link rel="canonical" href={currentUrl} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content={type} />
	<meta property="og:url" content={currentUrl} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={`${siteUrl}${image}`} />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={currentUrl} />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
	<meta property="twitter:image" content={`${siteUrl}${image}`} />
	
	<!-- Hreflang Tags for Multi-language Support -->
	<link rel="alternate" hreflang="en" href={currentUrl} />
	<link rel="alternate" hreflang="ar" href={currentUrl} />
	<link rel="alternate" hreflang="x-default" href={currentUrl} />
</svelte:head>