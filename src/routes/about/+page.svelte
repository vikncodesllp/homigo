<script lang="ts">
	import { _ } from 'svelte-i18n';
	import SEO from '$lib/components/SEO.svelte';

	// Assets
	const heroBg = '/assets/About Us/Frame hero.jpeg'; // Using painting/roller image for hero
	const aboutImage1 = '/assets/About Us/section2_image1.jpeg'; // Building exterior cleaning
	const aboutImage2 = '/assets/About Us/section2_image2.jpeg'; // High rise cleaning
	
	const missionIcon = '/assets/About Us/mission.svg';
	const visionIcon = '/assets/About Us/vision.svg';
</script>

<SEO 
	title="About Homigo - Leading Cleaning Company in Dubai"
	description="Learn about Homigo Technical Services, Dubai's trusted partner for professional cleaning, maintenance, and facility management services."
/>

<div class="bg-gray-50 font-['Poppins']">
	<!-- Hero Section -->
	<section class="relative flex min-h-150 w-full items-center overflow-hidden bg-[#A6D5E4]">
		<img
			src={heroBg}
			alt="Blog Hero Background"
			class="absolute inset-0 h-full w-full object-cover"
		/>
		<!-- Content Container -->
		<div
			class="relative z-10 container mx-auto flex h-full flex-col items-center justify-between px-4 md:flex-row"
		>
			<!-- Left Content -->
			<div class="flex w-full flex-col justify-center md:w-1/2">
				<nav class="mb-4 flex items-center gap-2 font-['Poppins'] font-normal text-[20px] leading-[110%] text-[#020202] tracking-wide" aria-label="Breadcrumb">
					<a href="/" class="hover:underline">{$_('nav.home')}</a>
					<span>/</span>
					<span aria-current="page">{$_('about.hero.title')}</span>
				</nav>
				<h1 class="mb-6 font-['Poppins'] font-bold text-[36px] md:text-[60px] leading-relaxed text-[#000000] tracking-tight align-middle">{$_('about.hero.title')}</h1>
				<p class="max-w-lg font-['Poppins'] font-normal text-[18px] md:text-[24px] leading-relaxed text-[#000000] align-middle">
					{$_('about.hero.desc')}
				</p>
			</div>
		</div>
	</section>

	<!-- Hello Section -->
	<section class="container mx-auto px-4 py-20">
		<div class="flex flex-col gap-12 lg:flex-row lg:items-center">
			<div class="lg:w-1/2">
				<h2 class="mb-8 font-['Poppins'] font-black text-[34px] md:text-[50px] leading-none text-[#0C0C0C] align-middle">{$_('about.hello.title')}</h2>
				<p class="font-['Poppins'] font-normal text-[18px] md:text-[24px] leading-relaxed text-[#000000] align-middle">
					{$_('about.hello.desc')}
				</p>
			</div>
			<div class="relative h-100 w-full lg:w-1/2">
				<!-- Image Composition -->
				<div
					class="absolute top-0 left-0 z-10 h-75 w-[80%] overflow-hidden rounded-tr-[50px] rounded-bl-[50px] shadow-lg"
				>
					<img src={aboutImage1} alt="Building Cleaning" class="h-full w-full object-cover" />
				</div>
				<div
					class="absolute right-0 bottom-0 z-20 h-62.5 w-[60%] overflow-hidden rounded-tl-[50px] rounded-br-[50px] border-4 border-white shadow-xl"
				>
					<img src={aboutImage2} alt="Worker Cleaning" class="h-full w-full object-cover" />
				</div>
			</div>
		</div>
	</section>

	<!-- Mission & Vision Cards -->
	<section class="container mx-auto px-4 pb-20">
		<div class="grid gap-8 md:grid-cols-2">
			<!-- Mission Card -->
			<div
				class="rounded-2xl border border-gray-100 bg-white p-10 shadow-sm transition-shadow hover:shadow-md"
			>
				<div class="mb-6 flex h-16 w-16 items-center justify-center rounded-full">
					<img src={missionIcon} alt="Mission Icon" />
				</div>
				<h3 class="mb-4 font-['Poppins'] font-bold text-[24px] md:text-[32px] leading-relaxed text-[#000000] align-middle">{$_('about.mission.title')}</h3>
				<p class="font-['Poppins'] font-normal text-[18px] md:text-[24px] leading-relaxed text-[#000000] align-middle">
					{$_('about.mission.desc')}
				</p>
			</div>

			<!-- Vision Card -->
			<div
				class="rounded-2xl border border-gray-100 bg-white p-10 shadow-sm transition-shadow hover:shadow-md"
			>
				<div class="mb-6 flex h-16 w-16 items-center justify-center rounded-full">
					<img src={visionIcon} alt="Vision Icon" />
				</div>
				<h3 class="mb-4 font-['Poppins'] font-bold text-[24px] md:text-[32px] leading-relaxed text-[#000000] align-middle">{$_('about.vision.title')}</h3>
				<p class="font-['Poppins'] font-normal text-[18px] md:text-[24px] leading-relaxed text-[#000000] align-middle">
					{$_('about.vision.desc')}
				</p>
			</div>
		</div>
	</section>

	<!-- CTA Banner -->
	<section class="py-20" style="background: linear-gradient(135deg, rgba(0, 249, 90, 0.08) 0%, rgba(0, 201, 0, 0.08) 100%);">
		<div
			class="container mx-auto flex flex-col items-center justify-between gap-8 px-4 md:flex-row"
		>
			<div class="max-w-3xl">
				<h2 class="mb-4 font-['Poppins'] font-bold text-[28px] md:text-[40px] leading-relaxed text-[#0C0C0C] align-middle">
					{$_('about.cta.title')}
				</h2>
				<p class="font-['Poppins'] font-normal text-[18px] md:text-[24px] leading-relaxed text-[#0C0C0C] align-middle">
					{$_('about.cta.desc')}
				</p>
			</div>
			<a
				href="/quote"
				class="rounded-md bg-[#15562E] px-8 py-3 font-medium text-white transition-colors hover:bg-[#0f4223]"
			>
				{$_('about.cta.button')}
			</a>
		</div>
	</section>
</div>
