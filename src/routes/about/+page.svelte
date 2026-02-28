<script lang="ts">
	import { _ } from 'svelte-i18n';
	// Assets
	const heroBg = '/assets/About Us/Frame hero.jpeg'; // Using painting/roller image for hero
	const aboutImage1 = '/assets/About Us/section2_image1.jpeg'; // Building exterior cleaning
	const aboutImage2 = '/assets/About Us/section2_image2.jpeg'; // High rise cleaning
	const aboutImage3 = '/assets/About Us/Frame 01.png'; // Office cleaning
	const herosvg1 = '/assets/About Us/hero svg1.svg';
	const herosvg2 = '/assets/About Us/hero svg2.svg';
	const missionIcon = '/about/dart-mission-goal-success-svgrepo-com (1) 1.svg';
	const visionIcon = '/about/vision-focus-svgrepo-com 1.svg';
</script>

<div class="bg-gray-50 pb-20 font-['SF_Pro']">
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
				<p class="mb-4 text-sm font-medium text-gray-700">{$_('about.hero.breadcrumb')}</p>
				<h1 class="mb-6 text-6xl font-black tracking-tight text-black">{$_('about.hero.title')}</h1>
				<p class="max-w-lg text-xl leading-relaxed font-medium text-gray-800">
					{$_('about.hero.desc')}
				</p>
			</div>
		</div>
	</section>

	<!-- Hello Section -->
	<section class="container mx-auto px-4 py-20">
		<div class="flex flex-col gap-12 lg:flex-row lg:items-center">
			<div class="lg:w-1/2">
				<h2 class="mb-8 text-4xl font-bold text-black">{$_('about.hello.title')}</h2>
				<p class="text-lg leading-relaxed text-gray-700">
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
				<h3 class="mb-4 text-2xl font-bold text-black">{$_('about.mission.title')}</h3>
				<p class="leading-relaxed text-gray-600">
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
				<h3 class="mb-4 text-2xl font-bold text-black">{$_('about.vision.title')}</h3>
				<p class="leading-relaxed text-gray-600">
					{$_('about.vision.desc')}
				</p>
			</div>
		</div>
	</section>

	<!-- CTA Banner -->
	<section class="bg-[#F0FDF4] py-20">
		<div
			class="container mx-auto flex flex-col items-center justify-between gap-8 px-4 md:flex-row"
		>
			<h2 class="max-w-xl text-3xl leading-tight font-bold text-black">
				{$_('about.cta.title_part1')}
				<span class="relative inline-block">
					{$_('about.cta.title_trusted')}
					<svg
						class="absolute -bottom-2 left-0 h-3 w-full text-red-500"
						viewBox="0 0 100 10"
						preserveAspectRatio="none"
					>
						<path d="M0 5 Q 50 10 100 5" stroke="currentColor" stroke-width="3" fill="none" />
					</svg>
				</span>
				<br />{$_('about.cta.title_part2')}
			</h2>
			<a
				href="/quote"
				class="rounded-md bg-[#15562E] px-8 py-3 font-medium text-white transition-colors hover:bg-[#0f4223]"
			>
				{$_('about.cta.button')}
			</a>
		</div>
	</section>
</div>
