<script lang="ts">
	// Assets
	const heroBg = '/about/about_hero.png'; // Using painting/roller image for hero
	const aboutImage1 = '/about/section2_image1.png'; // Building exterior cleaning
	const aboutImage2 = '/about/section2_image2.png'; // High rise cleaning
	const aboutImage3 = '/about/Frame 01.png'; // Office cleaning
</script>

<div class="font-['SF_Pro'] bg-gray-50 pb-20">
	<!-- Hero Section -->
	<section class="relative h-150 w-full overflow-hidden bg-[#9FCCDB]">
		<!-- Hero Content -->
		<div class="container mx-auto px-4 h-full flex items-center" style="background: url({aboutImage3}) no-repeat center center/cover;">
			<div class="relative z-10 w-294 h-115.25 bg-[#7DD3FC] flex flex-col justify-center px-10 rounded-2xl">
				<p class="mb-2 text-sm font-medium text-gray-700">Home/ About Us</p>
				<h1 class="mb-4 text-5xl font-bold text-black">About Us</h1>
				<p class="text-lg text-gray-800 font-medium max-w-md">
					Learn more about our business and our commitment to quality, reliability, and customer satisfaction.
				</p>
			</div>
		</div>

		<!-- Hero Image (Right Side) 
		style="
				width: 688.351px; 
				height: 541.991px; 
				transform: rotate(-155.069deg); 
				aspect-ratio: 127/100; 
				background: url('{heroBg}') lightgray 0px -458.032px / 199.149% 168.618% no-repeat; 
				box-shadow: 0 205px 57px 0 rgba(0, 0, 0, 0.01), 0 131px 52px 0 rgba(0, 0, 0, 0.06), 0 74px 44px 0 rgba(0, 0, 0, 0.20), 0 33px 33px 0 rgba(0, 0, 0, 0.34), 0 8px 18px 0 rgba(0, 0, 0, 0.39);
			" 
		-->
		<div 
			class="absolute top-0 right-0 z-0"
			style="
				width: 688.351px; 
				height: 541.991px; 
				background: url('{heroBg}') lightgray 0px -458.032px / 199.149% 168.618% no-repeat; 
				box-shadow: 0 205px 57px 0 rgba(0, 0, 0, 0.01), 0 131px 52px 0 rgba(0, 0, 0, 0.06), 0 74px 44px 0 rgba(0, 0, 0, 0.20), 0 33px 33px 0 rgba(0, 0, 0, 0.34), 0 8px 18px 0 rgba(0, 0, 0, 0.39);
			"
		>
		<img src={heroBg} alt="Cleaning equipment" class="h-full w-full object-cover object-left transform rotate-[-155.069deg]" />
		</div>
	</section>

	<!-- Hello Section -->
	<section class="container mx-auto px-4 py-20">
		<div class="flex flex-col gap-12 lg:flex-row lg:items-center">
			<div class="lg:w-1/2">
				<h2 class="mb-8 text-4xl font-bold text-black">Hello!</h2>
				<p class="text-lg leading-relaxed text-gray-700">
					Homigo Cleaning and Technical Services provides professional deep cleaning and technical services in Dubai and across the UAE. Our trained and insured team uses advanced equipment and eco-friendly products to deliver safe, reliable results for homes and businesses, with flexible scheduling and a strong focus on customer satisfaction.
				</p>
			</div>
			<div class="relative h-100 w-full lg:w-1/2">
				<!-- Image Composition -->
				<div class="absolute top-0 left-0 h-75 w-[80%] overflow-hidden rounded-tr-[50px] rounded-bl-[50px] shadow-lg z-10">
					<img src={aboutImage1} alt="Building Cleaning" class="h-full w-full object-cover" />
				</div>
				<div class="absolute bottom-0 right-0 h-62.5 w-[60%] overflow-hidden rounded-tl-[50px] rounded-br-[50px] border-4 border-white shadow-xl z-20">
					<img src={aboutImage2} alt="Worker Cleaning" class="h-full w-full object-cover" />
				</div>
			</div>
		</div>
	</section>

	<!-- Mission & Vision Cards -->
	<section class="container mx-auto px-4 pb-20">
		<div class="grid gap-8 md:grid-cols-2">
			<!-- Mission Card -->
			<div class="rounded-2xl border border-gray-100 bg-white p-10 shadow-sm transition-shadow hover:shadow-md">
				<div class="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#E6F4EA]">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-[#15562E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
				</div>
				<h3 class="mb-4 text-2xl font-bold text-black">Mission</h3>
				<p class="text-gray-600 leading-relaxed">
					Deliver reliable, eco-friendly cleaning and technical services ensuring hygienic spaces, quality workmanship, and complete customer satisfaction.
				</p>
			</div>

			<!-- Vision Card -->
			<div class="rounded-2xl border border-gray-100 bg-white p-10 shadow-sm transition-shadow hover:shadow-md">
				<div class="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#E6F4EA]">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-[#15562E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
					</svg>
				</div>
				<h3 class="mb-4 text-2xl font-bold text-black">Vision</h3>
				<p class="text-gray-600 leading-relaxed">
					To become the most trusted cleaning and technical services brand in Dubai, setting standards for quality and reliability.
				</p>
			</div>
		</div>
	</section>

	<!-- CTA Banner -->
	<section class="bg-[#F0FDF4] py-20">
		<div class="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
			<h2 class="text-3xl font-bold text-black max-w-xl leading-tight">
				Experience the Benefits of a <span class="relative inline-block">
					Trusted
					<svg class="absolute -bottom-2 left-0 w-full h-3 text-red-500" viewBox="0 0 100 10" preserveAspectRatio="none">
						<path d="M0 5 Q 50 10 100 5" stroke="currentColor" stroke-width="3" fill="none" />
					</svg>
				</span>
				<br />Cleaning & Technical Services
			</h2>
			<a href="/quote" class="bg-[#15562E] hover:bg-[#0f4223] text-white px-8 py-3 rounded-md font-medium transition-colors">
				Get a fast Quote
			</a>
		</div>
	</section>
</div>