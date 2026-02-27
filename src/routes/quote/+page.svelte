<script lang="ts">
	// Assets
	// No specific assets needed for this clean form page, mostly CSS styling
</script>

<div class="font-['SF_Pro'] bg-gray-50 min-h-screen pt-20 pb-20">
	<div class="container mx-auto px-4 text-center mb-12">
		<h1 class="text-4xl md:text-5xl font-bold text-black mb-4">We're Happy to Help!</h1>
		<p class="text-lg text-gray-600">Book trusted cleaning experts today.</p>
		
		<!-- Decorative Stars (SVG) -->
		<div class="absolute top-32 right-10 hidden lg:block opacity-50">
			<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M50 0L55 40L95 45L55 50L50 90L45 50L5 45L45 40L50 0Z" fill="#E6F4EA"/>
			</svg>
		</div>
	</div>

	<div class="container mx-auto px-4 max-w-4xl">
		<div class="bg-white rounded-[20px] shadow-sm p-8 md:p-12 border border-gray-100">
			<form class="space-y-8">
				<!-- Row 1: Name & Service -->
				<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div class="flex flex-col gap-2">
						<label for="name" class="text-sm font-medium text-gray-600">Name</label>
						<input 
							type="text" 
							id="name" 
							class="w-full bg-gray-50 border-none rounded-lg px-4 py-3.5 focus:ring-2 focus:ring-[#15562E] focus:outline-none transition-all"
						/>
					</div>
					<div class="flex flex-col gap-2">
						<label for="service" class="text-sm font-medium text-gray-600">Choose a Service</label>
						<div class="relative">
							<select 
								id="service" 
								class="w-full bg-gray-50 border-none rounded-lg px-4 py-3.5 appearance-none focus:ring-2 focus:ring-[#15562E] focus:outline-none transition-all text-gray-700"
							>
								<option>Office Deep Cleaning</option>
								<option>Home Deep Cleaning</option>
								<option>Sewage Tank Cleaning</option>
								<option>AC Filter Cleaning</option>
								<option>Painting Services</option>
							</select>
							<div class="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
								<svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
								</svg>
							</div>
						</div>
					</div>
				</div>

				<!-- Row 2: Phone & Email -->
				<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div class="flex flex-col gap-2">
						<label for="phone" class="text-sm font-medium text-gray-600">Phone</label>
						<input 
							type="tel" 
							id="phone" 
							class="w-full bg-gray-50 border-none rounded-lg px-4 py-3.5 focus:ring-2 focus:ring-[#15562E] focus:outline-none transition-all"
						/>
					</div>
					<div class="flex flex-col gap-2">
						<label for="email" class="text-sm font-medium text-gray-600">Email</label>
						<input 
							type="email" 
							id="email" 
							class="w-full bg-gray-50 border-none rounded-lg px-4 py-3.5 focus:ring-2 focus:ring-[#15562E] focus:outline-none transition-all"
						/>
					</div>
				</div>

				<!-- Row 3: Message -->
				<div class="flex flex-col gap-2">
					<label for="message" class="text-sm font-medium text-gray-600">Have Any Message?</label>
					<textarea 
						id="message" 
						rows="6" 
						placeholder="Your Message"
						class="w-full bg-gray-50 border-none rounded-lg px-4 py-3.5 focus:ring-2 focus:ring-[#15562E] focus:outline-none transition-all resize-none placeholder-gray-400"
					></textarea>
				</div>

				<!-- Submit Button -->
				<div class="flex justify-end pt-4">
					<button 
						type="submit" 
						class="bg-[#15562E] hover:bg-[#0f4223] text-white font-medium px-8 py-3.5 rounded-lg transition-colors shadow-sm"
					>
						Send Request
					</button>
				</div>
			</form>
		</div>
	</div>
</div>