<script lang="ts">
	// Using existing assets for the blog detail
	const mainImage = '/images/source/Gemini_Generated_Image_543z3w543z3w543z 1.png'; // AC cleaning close up
	const detailImage1 = '/images/source/Gemini_Generated_Image_254bx6254bx6254b 1.png'; // Technician working
	const detailImage2 = '/images/source/Gemini_Generated_Image_3o996a3o996a3o99 1.png'; // Another angle/tool
</script>

<div class="font-['SF_Pro'] bg-gray-50 pb-20">
	<div class="container mx-auto px-4 max-w-5xl">
		<!-- Breadcrumb -->
		<div class="py-8">
			<p class="text-sm font-medium text-gray-500">Home/ Blog/ AC Clean Filters</p>
		</div>

		<!-- Main Article Image -->
		<div class="w-full h-[500px] rounded-3xl overflow-hidden mb-12 shadow-sm">
			<img 
				src={mainImage} 
				alt="AC Filter Cleaning" 
				class="w-full h-full object-cover"
			/>
		</div>

		<!-- Article Content -->
		<article class="prose prose-lg max-w-none">
			<!-- Title Section -->
			<div class="mb-12">
				<h1 class="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
					AC Clean Filters: Why Regular AC Filter Cleaning Is Critical in Dubai and GCC
				</h1>
				<p class="text-lg text-gray-600 leading-relaxed">
					Air conditioning systems operate almost year-round in Dubai and across the GCC. While AC units provide comfort, dirty filters can compromise air quality and system efficiency. Regular AC filter cleaning in Dubai is essential for maintaining healthy indoor air and reducing energy consumption.
				</p>
			</div>

			<!-- Image Gallery -->
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
				<div class="h-[300px] rounded-3xl overflow-hidden shadow-sm">
					<img 
						src={detailImage1} 
						alt="Technician cleaning AC" 
						class="w-full h-full object-cover"
					/>
				</div>
				<div class="h-[300px] rounded-3xl overflow-hidden shadow-sm">
					<img 
						src={detailImage2} 
						alt="AC Maintenance" 
						class="w-full h-full object-cover"
					/>
				</div>
			</div>

			<!-- Role of AC Filters -->
			<div class="mb-12">
				<h2 class="text-3xl font-bold text-black mb-6">Role of AC Filters in Indoor Air Quality</h2>
				<p class="text-gray-600 leading-relaxed">
					AC filters trap dust, pollen, bacteria, and airborne pollutants. Over time, these contaminants clog the filters, restricting airflow and forcing the system to work harder. This not only increases electricity bills but also circulates polluted air indoors.
				</p>
			</div>

			<!-- Importance in UAE Climate -->
			<div class="mb-12">
				<h2 class="text-3xl font-bold text-black mb-6">Importance of AC Filter Cleaning in UAE Climate</h2>
				<p class="text-gray-600 leading-relaxed">
					Due to extreme heat and frequent dust exposure, AC systems in the UAE accumulate dirt faster than in other regions. Without regular cleaning, AC filters can become breeding grounds for mold and bacteria, leading to allergies, asthma, and respiratory discomfort.
				</p>
			</div>

			<!-- Common Signs -->
			<div class="mb-12">
				<h2 class="text-3xl font-bold text-black mb-6">Common Signs Your AC Filters Need Cleaning</h2>
				<p class="text-gray-600 leading-relaxed">
					Weak cooling performance, unpleasant odors, frequent system breakdowns, and higher energy bills indicate dirty AC filters. Ignoring these signs can reduce the lifespan of the AC unit.
				</p>
			</div>

			<!-- Professional vs DIY -->
			<div class="mb-12">
				<h2 class="text-3xl font-bold text-black mb-6">Professional AC Filter Cleaning vs DIY</h2>
				<p class="text-gray-600 leading-relaxed">
					While basic cleaning can be done at home, professional AC cleaning services in Dubai ensure deep cleaning, disinfection, and system inspection. Professionals use specialized tools to safely clean filters, ducts, and coils.
				</p>
			</div>

			<!-- Frequency -->
			<div class="mb-12">
				<h2 class="text-3xl font-bold text-black mb-6">Recommended Cleaning Frequency</h2>
				<p class="text-gray-600 leading-relaxed">
					Residential AC filters should be cleaned every one to two months, while commercial HVAC systems require more frequent maintenance due to continuous usage.
				</p>
			</div>
		</article>
	</div>
</div>