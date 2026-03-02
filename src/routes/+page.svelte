<script lang="ts">
	import { onMount } from 'svelte';
	import { _ } from 'svelte-i18n';

	// Image Placeholders - Using available assets
	const heroBg = '/images/bannar.png';
	const heroBggif = '/Dubai_sewage.gif';
	
	// Service Images Mapping
	const services = [
		{ titleKey: 'home.services_list.waste_water', img: '/assets/Landing page/Waste Water Removal.jpeg' },
		{ titleKey: 'home.services_list.office_deep', img: '/assets/Landing page/Office Deep Cleaning.jpeg' },
		{ titleKey: 'home.services_list.technical', img: '/assets/Landing page/Technical Cleaning.jpeg' },
		{ titleKey: 'home.services_list.sewage_tank', img: '/assets/Landing page/Sewage Tank Cleaning.jpeg' },
		{ titleKey: 'home.services_list.grease_trap', img: '/assets/Landing page/Grease Trap Cleaning.jpeg' },
		{ titleKey: 'home.services_list.sewage_water', img: '/assets/Landing page/Sewage Water Removal.jpeg' },
		{ titleKey: 'home.services_list.deep_cleaning', img: '/assets/Landing page/Deep Cleaning.jpeg' },
		{ titleKey: 'home.services_list.drainage', img: '/assets/Landing page/Drainage Cleaning.jpeg' },
		{ titleKey: 'home.services_list.painting', img: '/assets/Landing page/Painting.jpeg' }
	];

	const testimonials = [
		{
			nameKey: 'home.testimonials_items.item1.name',
			dateKey: 'home.testimonials_items.item1.date',
			textKey: 'home.testimonials_items.item1.text',
			rating: 5
		},
		{
			nameKey: 'home.testimonials_items.item2.name',
			dateKey: 'home.testimonials_items.item2.date',
			textKey: 'home.testimonials_items.item2.text',
			rating: 5
		},
		{
			nameKey: 'home.testimonials_items.item3.name',
			dateKey: 'home.testimonials_items.item3.date',
			textKey: 'home.testimonials_items.item3.text',
			rating: 5
		}
	];

	const faqs = [
		{ questionKey: 'home.faq_items.q1.question', answerKey: 'home.faq_items.q1.answer' },
		{ questionKey: 'home.faq_items.q2.question', answerKey: 'home.faq_items.q2.answer' },
		{ questionKey: 'home.faq_items.q3.question', answerKey: 'home.faq_items.q3.answer' },
		{ questionKey: 'home.faq_items.q4.question', answerKey: 'home.faq_items.q4.answer' },
		{ questionKey: 'home.faq_items.q5.question', answerKey: 'home.faq_items.q5.answer' }
	];

	let activeFaq = $state(0);

	function toggleFaq(index: number) {
		activeFaq = activeFaq === index ? -1 : index;
	}
</script>

<div class="bg-white font-sans">
	<!-- Hero Section -->
	<section class="relative min-h-150 bg-cover bg-center flex items-center justify-center" style="background-image: url('{heroBggif}');">
		<div class="absolute inset-0 bg-black/40"></div>
		<div class="container mx-auto px-4 py-20 relative z-10 flex flex-col items-center justify-center h-full">
			<!-- Hero Text -->
			<div class="text-white w-full text-center flex flex-col items-center">
				<div class="flex flex-col justify-center items-center w-full max-w-224.75 h-auto md:h-48 mb-6">
					<h1 class="text-[#FFFFFF] text-center font-['PF_Bague_Sans_Pro'] text-4xl md:text-[77.222px] font-normal leading-[1.1] md:leading-[92.145%]">
						{$_('home.hero.title_1')}<br/>
						<span class="font-black md:text-[74.973px] md:leading-[86.615%] block mt-2">{$_('home.hero.title_2')}</span>
					</h1>
				</div>

				<div class="flex flex-col justify-center items-center w-full max-w-192.25 mb-8">
					<p class="text-[#FFFFFF] text-center text-lg md:text-[26px] font-medium leading-[110%] font-['Satoshi']">
						{$_('home.hero.subtitle')}
					</p>
				</div>
				<a href="/quote" class="inline-block bg-homigo-green hover:bg-homigo-dark text-white font-semibold py-3 px-8 rounded-md transition-colors shadow-lg">
					{$_('home.hero.cta')}
				</a>
			</div>
			

		</div>

		<!-- WhatsApp Floating Icons removed from here as they are now global in layout -->
	
	</section>

	<!-- Intro Section -->
	<section class="py-16 md:py-24">
		<div class="container mx-auto px-4 flex flex-col md:flex-row gap-12 items-start relative">
			<div class="md:w-1/2 pt-12">
				<h2 class="text-3xl md:text-[60px] font-bold text-gray-900 mb-6 font-['PF_Bague_Sans_Pro'] leading-tight md:leading-normal" style="color: color(display-p3 0.0481 0.0481 0.0481);">
					<!-- Using a generic key for "Top Rated Technical & Cleaning Services" but splitting it might be tricky with BR. Let's use the full string or split keys. The JSON has 'title'. -->
					{@html $_('home.intro.title').replace('&', '&<br/>')}
				</h2>
				<!-- Note: The BR was hardcoded. The JSON string doesn't have BR. I can use {@html} or just CSS. For now let's assume the JSON title is single line or handles it. The design had a BR. I will rely on CSS width or just let it wrap. Or I can inject BR. -->
				
				<p class="text-lg md:text-[32px] text-gray-600 mb-6 leading-relaxed font-['PF_Bague_Sans_Pro']" style="color: color(display-p3 0 0 0);">
					{$_('home.intro.description')}
				</p>
			</div>
			
			<!-- Quote Form -->
			<div class="relative z-20 w-full md:w-125 md:-mt-48 bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 ml-auto flex flex-col justify-center shrink-0">
				<h3 class="text-2xl font-bold text-gray-900 mb-2">{$_('home.quote_form.title')}</h3>
				<p class="text-gray-500 text-sm mb-6">{$_('home.quote_form.subtitle')}</p>
				
				<form class="space-y-4">
					<div>
						<label for="name" class="block text-xs font-semibold text-gray-400 mb-1 ml-1">{$_('home.quote_form.name')}</label>
						<input id="name" type="text" class="w-full px-4 py-3 rounded-lg bg-gray-50 border-none focus:ring-2 focus:ring-homigo-green/20 outline-none transition-all" />
					</div>
					<div>
						<label for="phone" class="block text-xs font-semibold text-gray-400 mb-1 ml-1">{$_('home.quote_form.phone')}</label>
						<input id="phone" type="tel" class="w-full px-4 py-3 rounded-lg bg-gray-50 border-none focus:ring-2 focus:ring-homigo-green/20 outline-none transition-all" />
					</div>
					<div>
						<label for="email" class="block text-xs font-semibold text-gray-400 mb-1 ml-1">{$_('home.quote_form.email')}</label>
						<input id="email" type="email" class="w-full px-4 py-3 rounded-lg bg-gray-50 border-none focus:ring-2 focus:ring-homigo-green/20 outline-none transition-all" />
					</div>
					<div>
						<label for="address" class="block text-xs font-semibold text-gray-400 mb-1 ml-1">{$_('home.quote_form.address')}</label>
						<input id="address" type="text" class="w-full px-4 py-3 rounded-lg bg-gray-50 border-none focus:ring-2 focus:ring-homigo-green/20 outline-none transition-all" />
					</div>
					<div>
						<label for="service" class="block text-xs font-semibold text-gray-400 mb-1 ml-1">{$_('home.quote_form.service_label')}</label>
						<div class="relative">
							<select id="service" class="w-full px-4 py-3 rounded-lg bg-gray-50 border-none focus:ring-2 focus:ring-homigo-green/20 outline-none transition-all appearance-none text-gray-600">
								<option>{$_('home.quote_form.service_options.window')}</option>
								<option>{$_('home.quote_form.service_options.deep')}</option>
								<option>{$_('home.quote_form.service_options.maintenance')}</option>
							</select>
							<div class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
								<svg class="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
							</div>
						</div>
					</div>
					<button type="submit" class="w-full bg-[#1B5E20] hover:bg-[#144a19] text-white font-bold py-4 rounded-lg transition-colors mt-4 shadow-lg">
						{$_('home.quote_form.submit')}
					</button>
				</form>
			</div>
		</div>
	</section>

	<!-- Services Grid -->
	<section id="services" class="bg-gray-50 py-20">
		<div class="container mx-auto px-4">
			<div class="flex justify-between items-end mb-12">
				<div>
					<h2 class="text-4xl font-bold text-gray-900 mb-2">{$_('home.services_section.title')}</h2>
					<p class="text-gray-500">{$_('home.services_section.subtitle')}</p>
				</div>
				<a href="/quote" class="bg-homigo-green hover:bg-homigo-dark text-white px-6 py-2 rounded-md text-sm font-semibold transition-colors">
					{$_('nav.quote')}
				</a>
			</div>
			
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
				{#each services as service}
					<div class="group relative overflow-hidden h-96 shadow-md cursor-pointer">
						<img src={service.img} alt={$_ (service.titleKey)} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
						
						<!-- Default Gradient -->
						<div class="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-0"></div>

						<!-- Hover Overlay -->
						<div class="absolute inset-0 bg-[#34A853]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]"></div>

						<!-- Hover Button -->
						<div class="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
							<a href="/quote" class="bg-[#E8F5E9] text-[#1B5E20] px-4 py-2 rounded-lg font-bold text-sm shadow-sm hover:bg-white transition-colors">
								{$_('home.quote_form.submit')}
							</a>
						</div>

						<div class="absolute bottom-0 left-0 p-6 z-10">
							<h3 class="text-white font-bold text-lg">{$_ (service.titleKey)}</h3>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Process Steps -->
	<section class="py-20 bg-white">
		<div class="container mx-auto px-4 text-center">
			<p class="text-homigo-green font-medium mb-2">{$_('home.process.subtitle')}</p>
			<h2 class="text-3xl font-bold text-gray-900 mb-16">{$_('home.process.title')}</h2>

			<div class="grid md:grid-cols-3 gap-12 relative">
				<!-- Connector Line (Desktop) -->
				<div class="hidden md:block absolute top-16 left-[16%] right-[16%] h-0.5 bg-gray-200 -z-10"></div>

				<div class="flex flex-col items-center p-8 border border-gray-200 rounded-lg bg-white h-full relative z-10">
					<div class="w-16 h-16 bg-homigo-green rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 -mt-16 ring-4 ring-white shadow-lg">1</div>
					<h3 class="font-bold text-xl mb-3 text-center">{$_('home.process.step1.title')}</h3>
					<p class="text-gray-500 text-sm max-w-xs text-center">{$_('home.process.step1.desc')}</p>
				</div>
				<div class="flex flex-col items-center p-8 border border-gray-200 rounded-lg bg-white h-full relative z-10">
					<div class="w-16 h-16 bg-homigo-green rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 -mt-16 ring-4 ring-white shadow-lg">2</div>
					<h3 class="font-bold text-xl mb-3 text-center">{$_('home.process.step2.title')}</h3>
					<p class="text-gray-500 text-sm max-w-xs text-center">{$_('home.process.step2.desc')}</p>
				</div>
				<div class="flex flex-col items-center p-8 border border-gray-200 rounded-lg bg-white h-full relative z-10">
					<div class="w-16 h-16 bg-homigo-green rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 -mt-16 ring-4 ring-white shadow-lg">3</div>
					<h3 class="font-bold text-xl mb-3 text-center">{$_('home.process.step3.title')}</h3>
					<p class="text-gray-500 text-sm max-w-xs text-center">{$_('home.process.step3.desc')}</p>
				</div>
			</div>

			<div class="mt-16">
				<a href="/quote" class="bg-homigo-green hover:bg-homigo-dark text-white px-8 py-3 rounded-md font-bold transition-colors">
					{$_('home.process.cta')}
				</a>
			</div>
		</div>
	</section>

	<!-- Features (What Makes Homigo Different) -->
	<section class="bg-[#F0FCEF] py-20" style="background-color: color(display-p3 0.949 0.9882 0.9412);">
		<div class="container mx-auto px-4">
			<h2 class="text-3xl font-bold text-center text-gray-900 mb-16">{$_('home.features.title')}</h2>

			<div class="space-y-24">
				<!-- Feature 1 -->
				<div class="flex flex-col md:flex-row items-center gap-12">
					<div class="md:w-1/2">
						<h3 class="text-homigo-green font-bold text-xl mb-4">{$_('home.features.quality.title')}</h3>
						<p class="text-gray-600 leading-relaxed">
							{$_('home.features.quality.desc')}
						</p>
					</div>
					<div class="md:w-1/2 flex justify-center pb-12 md:pb-0">
						<div class="relative w-full max-w-md">
							<!-- Main Image -->
							<img 
								src="/assets/Landing page/portrait-modern-man-gggdvgd_compressed.jpeg" 
								alt="Quality Cleaning Service" 
								class="w-[85%] rounded-4xl shadow-lg object-cover aspect-4/3 relative z-10" 
							/>
							
							<!-- Secondary Image (Overlapping) -->
							<img 
								src="/assets/Landing page/woman-cleaning-couch-with-vacuum-vdvdv_compressed.jpeg" 
								alt="Deep Cleaning Detail" 
								class="absolute -bottom-8 right-0 w-[55%] rounded-4xl shadow-xl object-cover aspect-4/3 z-20 border-4 border-[#F0FCEF]" 
							/>
						</div>
					</div>
				</div>

				<!-- Feature 2 -->
				<div class="flex flex-col md:flex-row-reverse items-center gap-12">
					<div class="md:w-1/2">
						<h3 class="text-homigo-green font-bold text-xl mb-4">{$_('home.features.flexible.title')}</h3>
						<p class="text-gray-600 leading-relaxed">
							{$_('home.features.flexible.desc')}
						</p>
					</div>
					<div class="md:w-1/2 flex justify-center relative">
						<div class="relative">
							<div class="absolute -inset-4 bg-blue-100 rounded-2xl -z-10 -rotate-3"></div>
							<img src="/assets/Landing page/ggvdvdvd_compressed.jpeg" alt="Flexible Scheduling" class="rounded-xl shadow-lg w-full max-w-md h-64 object-cover" />
							<!-- Clock Overlay Badge -->
							<div class="absolute -bottom-40 -right-26 hidden md:block">
								<svg xmlns="http://www.w3.org/2000/svg" width="208.313" height="241.212" viewBox="0 0 315 492" fill="none" style="filter: drop-shadow(0 8px 17px color(display-p3 0.502 0.502 0.502 / 0.49)) drop-shadow(0 30px 30px color(display-p3 0.502 0.502 0.502 / 0.43)) drop-shadow(0 68px 41px color(display-p3 0.502 0.502 0.502 / 0.25)) drop-shadow(0 120px 48px color(display-p3 0.502 0.502 0.502 / 0.07)) drop-shadow(0 188px 53px color(display-p3 0.502 0.502 0.502 / 0.01));">
									<g filter="url(#filter0_ddddd_1_1799)">
										<circle cx="159.6" cy="143.185" r="101.713" fill="black" style="fill:black;fill-opacity:1;"/>
										<path d="M112.204 133.424C113.601 131.56 115.444 130.093 117.735 129.022C120.025 127.951 122.592 127.416 125.436 127.417C128.027 127.417 130.335 127.847 132.358 128.708C134.381 129.569 135.974 130.762 137.136 132.285C138.298 133.808 138.879 135.58 138.879 137.603C138.888 138.695 138.728 139.783 138.403 140.826C138.085 141.821 137.545 142.808 136.785 143.785C136.024 144.763 134.985 145.816 133.666 146.944C132.345 148.073 130.682 149.356 128.677 150.794L121.429 156.01L121.404 156.212H135.592L133.887 164.238H105.615L107.224 156.943L121.797 146.284C123.101 145.314 124.188 144.478 125.058 143.775C125.794 143.196 126.487 142.563 127.129 141.881C127.639 141.321 127.999 140.787 128.208 140.281C128.417 139.767 128.524 139.218 128.521 138.663C128.535 138.058 128.364 137.463 128.032 136.957C127.694 136.462 127.225 136.071 126.678 135.828C126.05 135.55 125.37 135.413 124.683 135.427C123.854 135.415 123.032 135.586 122.276 135.928C121.558 136.261 120.937 136.77 120.47 137.408C119.984 138.06 119.65 138.863 119.467 139.816H109.883C110.034 137.419 110.808 135.289 112.204 133.424Z" fill="url(#paint0_linear_1_1799)"/>
										<path d="M156.737 158.869H138.803L140.609 149.664C141.379 148.593 142.163 147.532 142.962 146.479C143.762 145.426 144.59 144.355 145.446 143.268C146.298 142.181 147.193 141.061 148.129 139.906C149.066 138.752 150.056 137.552 151.102 136.308C152.147 135.062 153.255 133.754 154.426 132.382C155.597 131.011 156.842 129.565 158.163 128.043H173.338L168.496 150.743H172.811L171.08 158.869H166.766L165.637 164.235H155.608L156.737 158.869ZM149.463 151.144H158.694L162.054 135.342H161.854C161.201 136.078 160.519 136.862 159.809 137.695C159.099 138.528 158.377 139.393 157.644 140.291C156.909 141.186 156.177 142.088 155.45 142.999C154.723 143.911 154.012 144.821 153.318 145.729C152.624 146.64 151.955 147.535 151.311 148.413C150.667 149.291 150.061 150.131 149.492 150.934L149.463 151.144Z" fill="url(#paint1_linear_1_1799)"/>
										<path d="M181.545 128.045H191.428L188.699 140.737H188.899C189.881 139.281 191.197 138.081 192.737 137.238C194.258 136.409 195.98 135.996 197.904 135.996C199.592 135.996 201.067 136.318 202.328 136.962C203.543 137.562 204.564 138.492 205.275 139.646C205.977 140.792 206.328 142.134 206.328 143.672C206.327 144.216 206.298 144.76 206.241 145.301C206.178 145.892 206.082 146.478 205.952 147.058L202.34 164.239H192.48L195.766 148.587C195.827 148.289 195.874 147.988 195.904 147.684C195.929 147.417 195.941 147.149 195.941 146.882C195.951 146.432 195.86 145.986 195.676 145.576C195.491 145.166 195.218 144.802 194.876 144.511C194.165 143.884 193.266 143.57 192.18 143.57C191.404 143.568 190.64 143.762 189.959 144.135C189.261 144.515 188.657 145.047 188.191 145.691C187.695 146.374 187.353 147.157 187.188 147.986L183.751 164.239H173.844L181.545 128.045Z" fill="url(#paint2_linear_1_1799)"/>
										<path d="M170.337 60.2725H170.336C169.354 60.2725 168.559 61.0681 168.559 62.0495V72.6759C168.559 73.6573 169.354 74.453 170.336 74.453H170.337C171.318 74.453 172.114 73.6573 172.114 72.6759V62.0495C172.114 61.0681 171.318 60.2725 170.337 60.2725Z" fill="url(#paint3_linear_1_1799)"/>
										<path d="M80.7891 149.821V149.823C80.7891 150.804 81.5847 151.6 82.5662 151.6H93.1925C94.174 151.6 94.9696 150.804 94.9696 149.823V149.821C94.9696 148.84 94.174 148.044 93.1925 148.044H82.5662C81.5847 148.044 80.7891 148.84 80.7891 149.821Z" fill="url(#paint4_linear_1_1799)"/>
										<path d="M170.339 239.372H170.34C171.322 239.372 172.117 238.576 172.117 237.595V226.969C172.117 225.987 171.322 225.192 170.34 225.192H170.339C169.357 225.192 168.562 225.987 168.562 226.969V237.595C168.562 238.576 169.357 239.372 170.339 239.372Z" fill="url(#paint5_linear_1_1799)"/>
										<path d="M259.887 149.822V149.821C259.887 148.84 259.091 148.044 258.11 148.044H247.483C246.502 148.044 245.706 148.84 245.706 149.821V149.822C245.706 150.804 246.502 151.599 247.483 151.599H258.11C259.091 151.599 259.887 150.804 259.887 149.822Z" fill="url(#paint6_linear_1_1799)"/>
										<path d="M86.2491 141.892C86.201 141.892 86.1517 141.892 86.1024 141.883C85.9278 141.864 85.7587 141.811 85.6047 141.727C85.4507 141.642 85.3149 141.528 85.2049 141.391C85.0949 141.255 85.013 141.097 84.9638 140.929C84.9146 140.76 84.899 140.584 84.9181 140.409C87.0368 121.096 95.6413 103.072 109.326 89.2805C123.011 75.4891 140.968 66.7453 160.264 64.4771C160.442 64.4511 160.622 64.4608 160.796 64.5059C160.969 64.5509 161.132 64.6302 161.274 64.7392C161.416 64.8482 161.535 64.9846 161.623 65.1404C161.711 65.2961 161.768 65.468 161.788 65.6459C161.809 65.8238 161.794 66.0041 161.744 66.176C161.694 66.3479 161.61 66.508 161.496 66.6468C161.383 66.7856 161.243 66.9003 161.085 66.984C160.927 67.0678 160.753 67.1189 160.575 67.1343C141.88 69.3308 124.482 77.8016 111.223 91.1632C97.9645 104.525 89.6284 121.987 87.5765 140.699C87.5407 141.026 87.3855 141.329 87.1406 141.549C86.8957 141.769 86.5783 141.891 86.2491 141.892Z" fill="#C7DDD5" style="fill:#C7DDD5;fill:color(display-p3 0.7804 0.8667 0.8353);fill-opacity:1;"/>
										<path d="M161.071 235.248C161.022 235.248 160.973 235.248 160.924 235.241C141.611 233.122 123.587 224.518 109.796 210.832C96.0043 197.147 87.2609 179.19 84.9934 159.894C84.9523 159.541 85.0528 159.187 85.2727 158.909C85.4927 158.631 85.8141 158.452 86.1663 158.41C86.5185 158.369 86.8727 158.47 87.1508 158.69C87.4289 158.91 87.6083 159.231 87.6494 159.583C89.8459 178.278 98.3167 195.676 111.678 208.935C125.04 222.193 142.503 230.53 161.214 232.581C161.555 232.617 161.869 232.782 162.092 233.043C162.315 233.304 162.429 233.64 162.41 233.983C162.392 234.325 162.243 234.648 161.993 234.883C161.744 235.119 161.414 235.249 161.071 235.248Z" fill="#C7DDD5" style="fill:#C7DDD5;fill:color(display-p3 0.7804 0.8667 0.8353);fill-opacity:1;"/>
										<path d="M180.25 235.171C179.908 235.172 179.579 235.042 179.33 234.807C179.081 234.573 178.932 234.252 178.912 233.911C178.893 233.569 179.005 233.234 179.225 232.972C179.446 232.711 179.758 232.544 180.097 232.506C198.792 230.309 216.19 221.839 229.449 208.477C242.707 195.116 251.043 177.653 253.096 158.942C253.11 158.764 253.16 158.59 253.242 158.431C253.325 158.273 253.439 158.132 253.577 158.018C253.714 157.904 253.874 157.819 254.045 157.767C254.217 157.716 254.397 157.699 254.575 157.719C254.752 157.738 254.925 157.793 255.081 157.88C255.237 157.967 255.375 158.085 255.485 158.226C255.595 158.367 255.675 158.529 255.722 158.702C255.768 158.874 255.78 159.055 255.755 159.232C253.638 178.546 245.034 196.572 231.349 210.365C217.663 224.157 199.706 232.902 180.409 235.171C180.356 235.174 180.303 235.174 180.25 235.171Z" fill="#C7DDD5" style="fill:#C7DDD5;fill:color(display-p3 0.7804 0.8667 0.8353);fill-opacity:1;"/>
										<path d="M254.352 141.242C254.025 141.24 253.71 141.119 253.466 140.902C253.223 140.684 253.067 140.384 253.029 140.06C250.833 121.365 242.362 103.968 229.001 90.7089C215.639 77.4502 198.177 69.1139 179.466 67.0618C179.291 67.0427 179.122 66.9895 178.968 66.9051C178.814 66.8208 178.678 66.7069 178.568 66.57C178.458 66.4331 178.376 66.2759 178.327 66.1074C178.278 65.9388 178.262 65.7622 178.281 65.5877C178.3 65.4131 178.354 65.244 178.438 65.0901C178.522 64.9361 178.636 64.8002 178.773 64.6902C178.91 64.5803 179.067 64.4983 179.236 64.4491C179.404 64.3999 179.581 64.3844 179.755 64.4034C199.069 66.5215 217.093 75.1259 230.884 88.8111C244.676 102.496 253.419 120.454 255.686 139.75C255.727 140.102 255.627 140.456 255.406 140.734C255.186 141.013 254.865 141.192 254.513 141.233C254.459 141.239 254.405 141.242 254.352 141.242Z" fill="#C7DDD5" style="fill:#C7DDD5;fill:color(display-p3 0.7804 0.8667 0.8353);fill-opacity:1;"/>
										<path d="M240.849 58.8441L196.429 79.8359C192.917 81.4963 189.088 78.2476 190.149 74.5119L194.324 59.8432C145.142 47.1104 94.5228 76.087 80.8449 125.389C67.0756 175.038 95.8743 226.258 145.447 240.307C164.742 245.809 185.299 244.928 204.052 237.794C204.806 237.519 205.639 237.555 206.367 237.894C207.095 238.233 207.659 238.847 207.934 239.601C208.209 240.355 208.173 241.188 207.834 241.916C207.496 242.644 206.882 243.208 206.127 243.483C184.624 251.209 160.614 252.586 136.954 246.026C75.6989 229.04 40.0649 165.706 57.3703 104.544C74.6095 43.638 137.989 8.28892 198.848 25.6112L203.673 26.983L207.855 12.2855C208.918 8.54983 213.885 7.80437 215.999 11.0639L242.716 52.2949C243.067 52.8362 243.298 53.4463 243.393 54.0843C243.489 54.7223 243.447 55.3733 243.27 55.9937C243.093 56.614 242.786 57.1894 242.368 57.681C241.95 58.1727 241.432 58.5692 240.849 58.8441Z" fill="url(#paint7_linear_1_1799)"/>
									</g>
									<defs>
										<filter id="filter0_ddddd_1_1799" x="0" y="0" width="314.313" height="491.212" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
											<feFlood flood-opacity="0" result="BackgroundImageFix"/>
											<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
											<feOffset dy="8"/>
											<feGaussianBlur stdDeviation="8.5"/>
											<feColorMatrix type="matrix" values="0 0 0 0 0.501961 0 0 0 0 0.501961 0 0 0 0 0.501961 0 0 0 0.49 0"/>
											<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_1799"/>
											<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
											<feOffset dy="30"/>
											<feGaussianBlur stdDeviation="15"/>
											<feColorMatrix type="matrix" values="0 0 0 0 0.501961 0 0 0 0 0.501961 0 0 0 0 0.501961 0 0 0 0.43 0"/>
											<feBlend mode="normal" in2="effect1_dropShadow_1_1799" result="effect2_dropShadow_1_1799"/>
											<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
											<feOffset dy="68"/>
											<feGaussianBlur stdDeviation="20.5"/>
											<feColorMatrix type="matrix" values="0 0 0 0 0.501961 0 0 0 0 0.501961 0 0 0 0 0.501961 0 0 0 0.25 0"/>
											<feBlend mode="normal" in2="effect2_dropShadow_1_1799" result="effect3_dropShadow_1_1799"/>
											<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
											<feOffset dy="120"/>
											<feGaussianBlur stdDeviation="24"/>
											<feColorMatrix type="matrix" values="0 0 0 0 0.501961 0 0 0 0 0.501961 0 0 0 0 0.501961 0 0 0 0.07 0"/>
											<feBlend mode="normal" in2="effect3_dropShadow_1_1799" result="effect4_dropShadow_1_1799"/>
											<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
											<feOffset dy="188"/>
											<feGaussianBlur stdDeviation="26.5"/>
											<feColorMatrix type="matrix" values="0 0 0 0 0.501961 0 0 0 0 0.501961 0 0 0 0 0.501961 0 0 0 0.01 0"/>
											<feBlend mode="normal" in2="effect4_dropShadow_1_1799" result="effect5_dropShadow_1_1799"/>
											<feBlend mode="normal" in="SourceGraphic" in2="effect5_dropShadow_1_1799" result="shape"/>
										</filter>
										<linearGradient id="paint0_linear_1_1799" x1="161.656" y1="131.911" x2="147.459" y2="182.043" gradientUnits="userSpaceOnUse">
											<stop stop-color="#1FD95D" style="stop-color:#1FD95D;stop-color:color(display-p3 0.1216 0.8510 0.3647);stop-opacity:1;"/>
											<stop offset="1" stop-color="#04855C" style="stop-color:#04855C;stop-color:color(display-p3 0.0157 0.5216 0.3608);stop-opacity:1;"/>
										</linearGradient>
										<linearGradient id="paint1_linear_1_1799" x1="161.656" y1="131.91" x2="147.459" y2="182.042" gradientUnits="userSpaceOnUse">
											<stop stop-color="#1FD95D" style="stop-color:#1FD95D;stop-color:color(display-p3 0.1216 0.8510 0.3647);stop-opacity:1;"/>
											<stop offset="1" stop-color="#04855C" style="stop-color:#04855C;stop-color:color(display-p3 0.0157 0.5216 0.3608);stop-opacity:1;"/>
										</linearGradient>
										<linearGradient id="paint2_linear_1_1799" x1="161.657" y1="131.911" x2="147.46" y2="182.043" gradientUnits="userSpaceOnUse">
											<stop stop-color="#1FD95D" style="stop-color:#1FD95D;stop-color:color(display-p3 0.1216 0.8510 0.3647);stop-opacity:1;"/>
											<stop offset="1" stop-color="#04855C" style="stop-color:#04855C;stop-color:color(display-p3 0.0157 0.5216 0.3608);stop-opacity:1;"/>
										</linearGradient>
										<linearGradient id="paint3_linear_1_1799" x1="170.337" y1="61.3389" x2="170.337" y2="74.5467" gradientUnits="userSpaceOnUse">
											<stop stop-color="#1FD95D" style="stop-color:#1FD95D;stop-color:color(display-p3 0.1216 0.8510 0.3647);stop-opacity:1;"/>
											<stop offset="1" stop-color="#04855C" style="stop-color:#04855C;stop-color:color(display-p3 0.0157 0.5216 0.3608);stop-opacity:1;"/>
										</linearGradient>
										<linearGradient id="paint4_linear_1_1799" x1="81.8652" y1="149.823" x2="94.7435" y2="149.823" gradientUnits="userSpaceOnUse">
											<stop stop-color="#1FD95D" style="stop-color:#1FD95D;stop-color:color(display-p3 0.1216 0.8510 0.3647);stop-opacity:1;"/>
											<stop offset="1" stop-color="#04855C" style="stop-color:#04855C;stop-color:color(display-p3 0.0157 0.5216 0.3608);stop-opacity:1;"/>
										</linearGradient>
										<linearGradient id="paint5_linear_1_1799" x1="170.339" y1="240.294" x2="170.339" y2="225.009" gradientUnits="userSpaceOnUse">
											<stop stop-color="#1FD95D" style="stop-color:#1FD95D;stop-color:color(display-p3 0.1216 0.8510 0.3647);stop-opacity:1;"/>
											<stop offset="1" stop-color="#04855C" style="stop-color:#04855C;stop-color:color(display-p3 0.0157 0.5216 0.3608);stop-opacity:1;"/>
										</linearGradient>
										<linearGradient id="paint6_linear_1_1799" x1="260.761" y1="149.822" x2="242.746" y2="149.822" gradientUnits="userSpaceOnUse">
											<stop stop-color="#1FD95D" style="stop-color:#1FD95D;stop-color:color(display-p3 0.1216 0.8510 0.3647);stop-opacity:1;"/>
											<stop offset="1" stop-color="#04855C" style="stop-color:#04855C;stop-color:color(display-p3 0.0157 0.5216 0.3608);stop-opacity:1;"/>
										</linearGradient>
										<linearGradient id="paint7_linear_1_1799" x1="167.867" y1="48.8117" x2="107.196" y2="263.059" gradientUnits="userSpaceOnUse">
											<stop stop-color="#1FD95D" style="stop-color:#1FD95D;stop-color:color(display-p3 0.1216 0.8510 0.3647);stop-opacity:1;"/>
											<stop offset="1" stop-color="#04855C" style="stop-color:#04855C;stop-color:color(display-p3 0.0157 0.5216 0.3608);stop-opacity:1;"/>
										</linearGradient>
									</defs>
								</svg>
							</div>
						</div>
					</div>
				</div>

				<!-- Feature 3 -->
				<div class="flex flex-col md:flex-row items-center gap-12">
					<div class="md:w-1/2">
						<h3 class="text-homigo-green font-bold text-xl mb-4">{$_('home.features.technology.title')}</h3>
						<p class="text-gray-600 leading-relaxed">
							{$_('home.features.technology.desc')}
						</p>
					</div>
					<div class="md:w-1/2 flex justify-center">
						<div class="relative w-full max-w-xl">
							<!-- Main Image (Right) -->
							<img 
							src="/assets/Landing page/cleaning-team-action-within-office-environment 1_compressed.jpeg" 
								
								alt="Technology Backed" 
								class="w-[85%] ml-auto rounded-4xl shadow-lg object-cover aspect-16/15" 
							/>
							
							<!-- Overlay Image (Left) -->
							<img 
								src="/assets/Landing page/branded-workwear-two-cleaners-vacuuming-office-space-organizing-chairs-ensuring-pristine 1_compressed.jpeg" 
								alt="Technology Backed Detail" 
								class="absolute top-2/3 -translate-y-1/2 left-0 w-[40%] rounded-4xl shadow-xl object-cover aspect-3/4 border-8 border-[#F0FCEF]" 
							/>
						</div>
					</div>
				</div>
				
				<!-- Feature 4 -->
				<div class="flex flex-col md:flex-row-reverse items-center gap-12">
					<div class="md:w-1/2">
						<h3 class="text-homigo-green font-bold text-xl mb-4">{$_('home.features.insured.title')}</h3>
						<p class="text-gray-600 leading-relaxed">
							{$_('home.features.insured.desc')}
						</p>
					</div>
					<div class="md:w-1/2 flex justify-center">
						<div class="relative w-full max-w-xl">
							<!-- Main Image (Left) -->
							<img 
								src="/assets/Landing page/photo-hands-green-gloves-cleaning-with-plant-blue-spray-sunlight-present 1_compressed.jpeg" 
								alt="Insured Professionals" 
								class="w-[85%] mr-auto rounded-4xl shadow-lg object-cover aspect-16/15" 
							/>
							
							<!-- Overlay Image (Right) -->
							<img 
								src="/assets/Landing page/gloved-hands-cleaning-surface 1_compressed.jpeg" 
								alt="Insured Professionals Detail" 
								class="absolute -bottom-12 -right-4 w-[55%] rounded-4xl shadow-xl object-cover aspect-16/15 border-8 border-[#F0FCEF]" 
							/>
						</div>
					</div>
				</div>
			</div>
			
			<div class="mt-16 text-center">
				<a href="/quote" class="bg-homigo-green hover:bg-homigo-dark text-white px-8 py-3 rounded-md font-bold transition-colors">
					{$_('home.features.cta')}
				</a>
			</div>
		</div>
	</section>

	<!-- Testimonials -->
	<section class="py-20 bg-white">
		<div class="container mx-auto px-4">
			<h2 class="text-3xl font-bold text-center text-gray-900 mb-12">{@html $_('home.testimonials.title')}</h2>
			
			<div class="grid md:grid-cols-3 gap-8">
				{#each testimonials as testimonial}
					<div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
						<div class="flex text-yellow-400 mb-4">
								{#each Array(5) as unused}
									<svg class="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
								{/each}
						</div>
						<p class="text-gray-600 mb-6 italic">"{$_ (testimonial.textKey)}"</p>
						<div class="flex items-center gap-3">
							<div class="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold">
								{$_ (testimonial.nameKey)[0]}
							</div>
							<div>
								<p class="font-bold text-sm text-gray-900">{$_ (testimonial.nameKey)}</p>
								<p class="text-xs text-gray-400">{$_ (testimonial.dateKey)}</p>
							</div>
							<div class="ml-auto">
								<svg class="w-5 h-5 text-gray-300" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.93 14.15l-4.24-4.24 1.41-1.41 2.83 2.83 7.07-7.07 1.41 1.41-8.48 8.48z"/></svg>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- FAQ -->
	<section class="py-20 bg-gray-50">
		<div class="container mx-auto px-4 flex flex-col md:flex-row gap-12">
			<div class="md:w-1/3">
				<h2 class="text-3xl font-bold text-gray-900 mb-6">{@html $_('home.faq.title').replace('?', '?<br/>')}</h2>
				<!-- Hardcoding the replace for BR again if needed, or just let it flow. The original had <br/>. JSON title is "Have Questions? Ask Away.". I can split it or just display it. Let's try to match the break. -->
				<p class="text-gray-600 mb-8">
					{$_('home.faq.desc')}
				</p>
				<a href="/quote" class="bg-homigo-green hover:bg-homigo-dark text-white px-8 py-3 rounded-md font-bold transition-colors">
					{$_('home.faq.cta')}
				</a>
			</div>
			<div class="md:w-2/3">
				<div class="space-y-4">
					{#each faqs as faq, i}
						<div class="bg-white rounded-lg shadow-sm overflow-hidden">
							<button 
								class="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
								onclick={() => toggleFaq(i)}
							>
								<span class="font-semibold text-gray-800">{$_ (faq.questionKey)}</span>
								<svg class="w-5 h-5 text-gray-400 transform transition-transform duration-200 {activeFaq === i ? 'rotate-180' : ''}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
								</svg>
							</button>
							{#if activeFaq === i}
								<div class="px-6 pb-4 text-gray-600 border-t border-gray-100 pt-4">
									{$_ (faq.answerKey)}
								</div>
							{/if}
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>
</div>
