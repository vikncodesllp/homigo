<script lang="ts">
	// Assets - Mapping best guess from available images based on content
	const heroBg = '/images/source/Gemini_Generated_Image_dqijczdqijczdqij 1.png'; // Using a pipe/industrial image for sewage theme
	const featuredImage = '/blog/featuredImage.png'; // Sewage/Water truck image
	
	const articles = [
		{
			title: 'Professional Painting Services for Homes & Businesses in Dubai',
			excerpt: 'Heat and humidity in Dubai can damage paint over time.',
			date: '12-01-2000',
			readTime: '5 Min',
			image: '/images/source/Gemini_Generated_Image_g264bsg264bsg264 1.png', // Painting image
			url: '/blog/painting-services-dubai'
		},
		{
			title: 'AC Filter Cleaning in Dubai & GCC',
			excerpt: 'Regular AC filter cleaning ensures cleaner air and better efficiency in Dubai.',
			date: '12-01-2000',
			readTime: '5 Min',
			image: '/images/source/Gemini_Generated_Image_543z3w543z3w543z 1.png', // AC/Technical image
			url: '/blog/ac-filter-cleaning-dubai-gcc'
		},
		{
			title: 'Ramadan Cleaning Services in Dubai',
			excerpt: 'Professional Ramadan cleaning in Dubai creates a clean and peaceful space for the holy month.',
			date: '12-01-2000',
			readTime: '5 Min',
			image: '/images/source/woman-cleaning-couch-with-vacuum-cleaner-home 1.png', // Home cleaning image
			url: '/blog/ramadan-cleaning-services-dubai'
		}
	];
</script>

<div class="font-['SF_Pro']">
	<!-- Hero Section -->
	<section class="relative h-125 w-full overflow-hidden">
		<!-- Background Image -->
		<img 
			src={heroBg} 
			alt="Blog Hero Background" 
			class="absolute inset-0 h-full w-full object-cover"
		/>
		
		<!-- Overlay -->
		<div class="absolute inset-0 bg-black/60"></div>

		<!-- Content -->
		<div class="relative z-10 flex h-full flex-col items-center justify-center text-center text-white pt-20">
			<p class="mb-2 text-sm font-medium tracking-wide text-gray-300">Home/ Blog</p>
			<h1 class="mb-4 text-6xl font-bold tracking-tight">Blog</h1>
			<p class="max-w-xl px-4 text-lg font-medium text-gray-200">
				Practical cleaning advice and professional solutions for homes and businesses
			</p>
		</div>
	</section>

	<div class="container mx-auto px-4 py-20">
		<!-- Featured Article -->
		<section class="mb-20">
			<h2 class="mb-8 text-3xl font-bold text-black">Featured Article</h2>
			<div class="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md md:flex md:gap-8">
				<div class="h-125 w-full overflow-hidden rounded-2xl md:w-1/2">
					<img 
						src={featuredImage} 
						alt="Sewage Water Cleaning" 
						class="h-full w-full object-cover transition-transform hover:scale-105"
					/>
				</div>
				<div class="flex flex-col justify-center py-4 md:w-1/2">
					<h3 class="mb-4 text-2xl font-bold leading-tight text-gray-900">
						Sewage Water Cleaning in Dubai: Importance and Benefits
					</h3>
					<p class="mb-6 text-gray-600 leading-relaxed">
						Sewage water cleaning in Dubai is essential for maintaining hygiene, protecting public health, and ensuring proper wastewater management. With rapid urban development and high population density, residential and commercial properties generate large amounts of wastewater daily.
					</p>
					
					<div class="mt-auto flex items-center justify-between border-t border-gray-100 pt-6">
						<div class="flex items-center gap-6 text-sm text-gray-500">
							<div class="flex items-center gap-2">
								<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
								</svg>
								<span>12-01-2000</span>
							</div>
							<div class="flex items-center gap-2">
								<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
								<span>5 Min</span>
							</div>
						</div>
						<a href="/blog/sewage-cleaning" class="flex items-center gap-2 font-semibold text-[#15562E] hover:underline">
							Read
							<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
							</svg>
						</a>
					</div>
				</div>
			</div>
		</section>

		<!-- Latest Articles -->
		<section>
			<h2 class="mb-8 text-3xl font-bold text-black">Latest Articles</h2>
			<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each articles as article}
					<div class="group flex flex-col rounded-3xl border border-gray-100 bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
						<div class="mb-4 h-56 overflow-hidden rounded-2xl">
							<img 
								src={article.image} 
								alt={article.title} 
								class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
							/>
						</div>
						<div class="flex flex-1 flex-col px-2">
							<h3 class="mb-3 text-xl font-bold leading-snug text-gray-900 group-hover:text-[#15562E] transition-colors">
								{article.title}
							</h3>
							<p class="mb-6 text-sm text-gray-600 line-clamp-2">
								{article.excerpt}
							</p>
							
							<div class="mt-auto flex items-center justify-between border-t border-gray-100 pt-4">
								<div class="flex items-center gap-4 text-xs text-gray-500">
									<div class="flex items-center gap-1.5">
										<svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
										</svg>
										<span>{article.date}</span>
									</div>
									<div class="flex items-center gap-1.5">
										<svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
										</svg>
										<span>{article.readTime}</span>
									</div>
								</div>
								<a href={article.url} class="flex items-center gap-1.5 text-sm font-semibold text-[#15562E] hover:underline">
									Read
									<svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
									</svg>
								</a>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</section>
	</div>
</div>