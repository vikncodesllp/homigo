<script lang="ts">
	// Using the provided assets from the static folder
	const cleaningTools = '/contact/hero.jpg'; // Best match for the cleaning tools background
	const mapPlaceholder = '/images/source/Gemini_Generated_Image_dqijczdqijczdqij.png'; // Placeholder for map
</script>

<div class="font-['SF_Pro']">
	<!-- Hero Section -->
	<section class="relative h-150 w-full overflow-hidden">
		<!-- Background Image -->
		<img 
			src={cleaningTools} 
			alt="Cleaning tools background" 
			class="absolute inset-0 h-full w-full object-cover"
		/>
		
		<!-- Overlay Gradient -->
		<div class="absolute inset-0 bg-[#0E7A8B]/30 mix-blend-multiply"></div>
		
		<!-- Wave Shape Bottom -->
		<div class="absolute bottom-0 left-0 w-full leading-none">
			<svg class="relative block w-full h-25" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
				<path d="M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60 V120 H0 Z" class="fill-white"></path>
			</svg>
		</div>

		<!-- Content -->
		<div class="relative z-10 flex h-full flex-col items-center justify-center text-center text-white pt-20">
			<p class="mb-4 text-sm font-medium tracking-wide">Home/ Contacts</p>
			<h1 class="mb-6 text-6xl font-bold tracking-tight drop-shadow-md">Contact Us</h1>
			<p class="max-w-2xl px-4 text-lg font-medium leading-relaxed drop-shadow-sm">
				Get your questions answered and receive a free, no-obligation quote<br />
				for our services today
			</p>
		</div>
	</section>

	<!-- Contact Info & Map Section -->
	<section class="container mx-auto px-4 py-20">
		<div class="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
			
			<!-- Contact Details -->
			<div class="flex flex-col gap-10 lg:w-1/3">
				<!-- Phone -->
				<div class="flex items-start gap-6">
					<div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#15562E]">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
						</svg>
					</div>
					<div>
						<h3 class="mb-2 text-xl font-bold text-gray-900">Phone</h3>
						<p class="text-gray-600">+971 5030 71989</p>
						<p class="text-gray-600">+971 5030 71986</p>
					</div>
				</div>

				<!-- Email -->
				<div class="flex items-start gap-6">
					<div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#15562E]">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
						</svg>
					</div>
					<div>
						<h3 class="mb-2 text-xl font-bold text-gray-900">Email</h3>
						<p class="text-gray-600">info@homigotechnicalservices.com</p>
					</div>
				</div>

				<!-- Address -->
				<div class="flex items-start gap-6">
					<div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#15562E]">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
						</svg>
					</div>
					<div>
						<h3 class="mb-2 text-xl font-bold text-gray-900">Address</h3>
						<p class="text-gray-600 max-w-xs">France P14 , International City , Dubai, Uae</p>
					</div>
				</div>

				<!-- Working Hours -->
				<div class="flex items-start gap-6">
					<div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#15562E]">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
					</div>
					<div>
						<h3 class="mb-2 text-xl font-bold text-gray-900">Working hours</h3>
						<p class="text-gray-600">24 hrs</p>
					</div>
				</div>
			</div>

			<!-- Map -->
			<div class="h-100 w-full overflow-hidden rounded-3xl bg-gray-100 shadow-lg lg:h-125 lg:w-3/5 relative">
				<iframe 
					title="Homigo Location Map"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.383794172445!2d55.4055273!3d25.1678888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f61536d7732e7%3A0x6b772421305417!2sFrance%20Cluster%20-%20International%20City%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sae!4v1709033485721!5m2!1sen!2sae" 
					width="100%" 
					height="100%" 
					style="border:0;" 
					allowfullscreen={true} 
					loading="lazy" 
					referrerpolicy="no-referrer-when-downgrade">
				</iframe>
			</div>
		</div>
	</section>


</div>