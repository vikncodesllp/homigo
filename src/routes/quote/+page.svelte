<script lang="ts">
	import { onMount } from 'svelte';
	import { _ } from 'svelte-i18n';
	import SEO from '$lib/components/SEO.svelte';

	let isSubmitting = $state(false);
	let submitStatus = $state('');

	function optionLabel(key: string) {
		return $_(key);
	}

	async function handleSubmit(e: Event) {
		e.preventDefault();
		isSubmitting = true;
		submitStatus = '';

		const form = e.target as HTMLFormElement;
		const formData = new FormData(form);
		const object = Object.fromEntries(formData);
		// Replace with your Web3Forms Access Key
		object.access_key = 'YOUR_ACCESS_KEY_HERE'; 

		const json = JSON.stringify(object);

		try {
			const response = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				},
				body: json
			});
			
			const result = await response.json();
			if (result.success) {
				submitStatus = 'success';
				form.reset();
			} else {
				console.error('Web3Forms Error:', result);
				submitStatus = 'error';
			}
		} catch (error) {
			console.error('Submission Error:', error);
			submitStatus = 'error';
		} finally {
			isSubmitting = false;
		}
	}
</script>

<SEO 
	title="Request a Free Quote - Homigo Cleaning Services"
	description="Get a free, no-obligation quote for residential or commercial cleaning services in Dubai. Fast response guaranteed."
/>

<div class="font-['SF_Pro'] bg-gray-50 min-h-screen pt-20 pb-20 mt-40">
	<div class="container mx-auto px-4 text-center mb-12">
		<h1 class="text-4xl md:text-5xl font-bold text-black mb-4">{$_('quote_page.title')}</h1>
		<p class="text-lg text-gray-600">{$_('quote_page.subtitle')}</p>
		
		<!-- Decorative Stars (SVG) -->
		<div class="absolute top-32 right-10 hidden lg:block opacity-50">
			<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M50 0L55 40L95 45L55 50L50 90L45 50L5 45L45 40L50 0Z" fill="#E6F4EA"/>
			</svg>
		</div>
	</div>

	<div class="container mx-auto px-4 max-w-4xl">
		<div class="bg-white rounded-[20px] shadow-sm p-8 md:p-12 border border-gray-100">
			<form class="space-y-8" onsubmit={handleSubmit}>
				<!-- Row 1: Name & Service -->
				<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div class="flex flex-col gap-2">
						<label for="name" class="text-sm font-medium text-gray-600">{$_('quote_page.form.name')}</label>
						<input 
							type="text" 
							id="name" 
							name="name"
							required
							class="w-full bg-gray-50 border-none rounded-lg px-4 py-3.5 focus:ring-2 focus:ring-[#15562E] focus:outline-none transition-all"
						/>
					</div>
					<div class="flex flex-col gap-2">
						<label for="service" class="text-sm font-medium text-gray-600">{$_('quote_page.form.service_label')}</label>
						<div class="relative">
							<select 
								id="service" 
								name="service"
								class="w-full bg-gray-50 border-none rounded-lg px-4 py-3.5 appearance-none focus:ring-2 focus:ring-[#15562E] focus:outline-none transition-all text-gray-700"
							>
								<option>{optionLabel('home.quote_form.service_options.waste_water')}</option>
								<option>{optionLabel('home.quote_form.service_options.office_deep')}</option>
								<option>{optionLabel('home.quote_form.service_options.technical')}</option>
								<option>{optionLabel('home.quote_form.service_options.sewage_tank')}</option>
								<option>{optionLabel('home.quote_form.service_options.drain_line')}</option>
								<option>{optionLabel('home.quote_form.service_options.sewage_water')}</option>
								<option>{optionLabel('home.quote_form.service_options.deep_cleaning')}</option>
								<option>{optionLabel('home.quote_form.service_options.drainage')}</option>
								<option>{optionLabel('home.quote_form.service_options.painting')}</option>
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
						<label for="phone" class="text-sm font-medium text-gray-600">{$_('quote_page.form.phone')}</label>
						<input 
							type="tel" 
							id="phone" 
							name="phone"
							required
							class="w-full bg-gray-50 border-none rounded-lg px-4 py-3.5 focus:ring-2 focus:ring-[#15562E] focus:outline-none transition-all"
						/>
					</div>
					<div class="flex flex-col gap-2">
						<label for="email" class="text-sm font-medium text-gray-600">{$_('quote_page.form.email')}</label>
						<input 
							type="email" 
							id="email" 
							name="email"
							required
							class="w-full bg-gray-50 border-none rounded-lg px-4 py-3.5 focus:ring-2 focus:ring-[#15562E] focus:outline-none transition-all"
						/>
					</div>
				</div>

				<!-- Row 3: Message -->
				<div class="flex flex-col gap-2">
					<label for="message" class="text-sm font-medium text-gray-600">{$_('quote_page.form.message_label')}</label>
					<textarea 
						id="message" 
						name="message"
						rows="6" 
						placeholder={$_('quote_page.form.message_placeholder')}
						class="w-full bg-gray-50 border-none rounded-lg px-4 py-3.5 focus:ring-2 focus:ring-[#15562E] focus:outline-none transition-all resize-none placeholder-gray-400"
					></textarea>
				</div>

				<!-- Submit Button -->
				<div class="flex flex-col items-end pt-4">
					<button 
						type="submit" 
						disabled={isSubmitting}
						class="bg-[#15562E] hover:bg-[#0f4223] text-white font-medium px-8 py-3.5 rounded-lg transition-colors shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
					>
						{isSubmitting ? 'Sending...' : $_('quote_page.form.submit')}
					</button>
					{#if submitStatus === 'success'}
						<p class="text-green-600 text-sm mt-2">Quote request sent successfully!</p>
					{/if}
					{#if submitStatus === 'error'}
						<p class="text-red-600 text-sm mt-2">Failed to send request. Please try again.</p>
					{/if}
				</div>
			</form>
		</div>
	</div>
</div>
