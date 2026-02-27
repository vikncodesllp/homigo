<script lang="ts">
	// Using existing assets for the blog detail
	const mainImage = '/images/source/Gemini_Generated_Image_f8vg0vf8vg0vf8vg 1.png'; // Painting blue wall
	const detailImage = '/images/source/Gemini_Generated_Image_g264bsg264bsg264 1.png'; // Worker painting yellow wall
</script>

<div class="font-['SF_Pro'] bg-gray-50 pb-20">
	<div class="container mx-auto px-4 max-w-5xl">
		<!-- Breadcrumb -->
		<div class="py-8">
			<p class="text-sm font-medium text-gray-500">Home/ Blog/ Professional Painting Services</p>
		</div>

		<!-- Main Article Image -->
		<div class="w-full h-[500px] rounded-3xl overflow-hidden mb-12 shadow-sm">
			<img 
				src={mainImage} 
				alt="Professional Painting Services" 
				class="w-full h-full object-cover"
			/>
		</div>

		<!-- Article Content -->
		<article class="prose prose-lg max-w-none">
			<!-- Title Section -->
			<div class="mb-12">
				<h1 class="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
					Professional Painting Services: Enhancing Residential and Commercial Properties in Dubai
				</h1>
				<p class="text-lg text-gray-600 leading-relaxed">
					Professional painting services are essential for maintaining the appearance and durability of properties in Dubai. The harsh climate, humidity, and heat can cause paint to fade, crack, or peel over time. Expert painting services ensure long-lasting and visually appealing results.
				</p>
			</div>

			<!-- Importance Section -->
			<div class="flex flex-col md:flex-row-reverse gap-12 items-center mb-16">
				<div class="w-full md:w-1/2 h-[400px] rounded-3xl overflow-hidden shadow-sm flex-shrink-0">
					<img 
						src={detailImage} 
						alt="Worker painting wall" 
						class="w-full h-full object-cover"
					/>
				</div>
				<div class="w-full md:w-1/2">
					<h2 class="text-3xl font-bold text-black mb-6">Importance of Professional Painting</h2>
					<p class="text-gray-600 leading-relaxed">
						Painting is not just decorative; it protects walls from moisture, heat, and wear. Professional painters prepare surfaces properly, choose suitable paints, and apply them with precision.
					</p>
				</div>
			</div>

			<!-- Residential Services -->
			<div class="mb-12">
				<h2 class="text-3xl font-bold text-black mb-6">Residential Painting Services in Dubai</h2>
				<p class="text-gray-600 leading-relaxed">
					Interior and exterior painting services for villas and apartments help homeowners maintain modern, elegant spaces. Professional painters ensure minimal disruption and clean finishes.
				</p>
			</div>

			<!-- Commercial Solutions -->
			<div class="mb-12">
				<h2 class="text-3xl font-bold text-black mb-6">Commercial Painting Solutions</h2>
				<p class="text-gray-600 leading-relaxed">
					Commercial painting services in Dubai cater to offices, warehouses, malls, and retail outlets. These services are planned to minimize downtime while delivering durable results.
				</p>
			</div>

			<!-- Process -->
			<div class="mb-12">
				<h2 class="text-3xl font-bold text-black mb-6">Professional Painting Process</h2>
				<p class="text-gray-600 leading-relaxed">
					The process includes surface inspection, crack filling, sanding, priming, paint application, and final inspection. High-quality paints suitable for UAE weather conditions are used.
				</p>
			</div>

			<!-- Benefits -->
			<div class="mb-12">
				<h2 class="text-3xl font-bold text-black mb-6">Benefits of Hiring Professional Painters</h2>
				<p class="text-gray-600 leading-relaxed">
					Professional painting services save time, reduce material waste, and provide superior finishes that last longer in Dubai's climate.
				</p>
			</div>
		</article>
	</div>
</div>