<script lang="ts">
	// Using existing assets for the blog detail
	const mainImage = '/images/source/woman-cleaning-couch-with-vacuum-cleaner-home 1.png'; // Family/Home cleaning scene
	const detailImage = '/images/source/cleaning-team-action-within-office-environment 1.png'; // Professional cleaner at work
</script>

<div class="font-['SF_Pro'] bg-gray-50 pb-20">
	<div class="container mx-auto px-4 max-w-5xl">
		<!-- Breadcrumb -->
		<div class="py-8">
			<p class="text-sm font-medium text-gray-500">Home/ Blog/ Ramadan Cleaning Services in Dubai</p>
		</div>

		<!-- Main Article Image -->
		<div class="w-full h-[500px] rounded-3xl overflow-hidden mb-12 shadow-sm">
			<img 
				src={mainImage} 
				alt="Ramadan Cleaning Services" 
				class="w-full h-full object-cover"
			/>
		</div>

		<!-- Article Content -->
		<article class="prose prose-lg max-w-none">
			<!-- Title Section -->
			<div class="mb-12">
				<h1 class="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
					Ramadan Cleaning Services: Preparing Homes and Businesses in Dubai
				</h1>
				<p class="text-lg text-gray-600 leading-relaxed">
					Ramadan is a special time of spiritual reflection, family gatherings, and hospitality. Professional Ramadan cleaning services in Dubai help create clean and peaceful environments for the holy month.
				</p>
			</div>

			<!-- Importance Section -->
			<div class="flex flex-col md:flex-row-reverse gap-12 items-center mb-16">
				<div class="w-full md:w-1/2 h-[400px] rounded-3xl overflow-hidden shadow-sm flex-shrink-0">
					<img 
						src={detailImage} 
						alt="Professional cleaner" 
						class="w-full h-full object-cover"
					/>
				</div>
				<div class="w-full md:w-1/2">
					<h2 class="text-3xl font-bold text-black mb-6">Importance of Pre-Ramadan Cleaning</h2>
					<p class="text-gray-600 leading-relaxed">
						A clean space promotes calmness and comfort during fasting and prayers. Pre-Ramadan cleaning ensures hygiene and readiness for guests.
					</p>
				</div>
			</div>

			<!-- Deep Cleaning Services -->
			<div class="mb-12">
				<h2 class="text-3xl font-bold text-black mb-6">Ramadan Deep Cleaning Services</h2>
				<p class="text-gray-600 leading-relaxed">
					These services focus on kitchens, dining areas, living rooms, prayer spaces, and bathrooms, ensuring thorough cleanliness.
				</p>
			</div>

			<!-- Commercial Solutions -->
			<div class="mb-12">
				<h2 class="text-3xl font-bold text-black mb-6">Commercial Ramadan Cleaning Solutions</h2>
				<p class="text-gray-600 leading-relaxed">
					Mosques, offices, and retail spaces benefit from specialized cleaning services to handle increased visitors during Ramadan.
				</p>
			</div>

			<!-- Benefits -->
			<div class="mb-12">
				<h2 class="text-3xl font-bold text-black mb-6">Benefits of Professional Ramadan Cleaning</h2>
				<p class="text-gray-600 leading-relaxed">
					Hiring professionals saves time, reduces stress, and ensures high hygiene standards throughout the month.
				</p>
			</div>
		</article>
	</div>
</div>