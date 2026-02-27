<script lang="ts">
	import { onMount } from 'svelte';

	// Image Placeholders - Using available assets
	const heroBg = '/images/bannar.png';
  const heroBggif = '/Dubai_sewage.gif';
	
	// Service Images Mapping
	const services = [
		{ title: 'Waste Water Removal', img: '/images/source/Gemini_Generated_Image_254bx6254bx6254b.png' },
		{ title: 'Office Deep Cleaning', img: '/images/source/branded-workwear-two-cleaners-vacuuming-office-space-organizing-chairs-ensuring-pristine.jpg' },
		{ title: 'Technical Services', img: '/images/source/Gemini_Generated_Image_543z3w543z3w543z.png' },
		{ title: 'Sewage Tank Cleaning', img: '/images/source/Gemini_Generated_Image_791v84791v84791v.png' },
		{ title: 'Grease Trap Cleaning Services', img: '/images/source/Gemini_Generated_Image_8axk4e8axk4e8axk.png' },
		{ title: 'Sewage Water Removal', img: '/images/source/Gemini_Generated_Image_9ml1759ml1759ml1.png' },
		{ title: 'Deep Cleaning Services in Dubai', img: '/images/source/woman-cleaning-couch-with-vacuum-cleaner-home.jpg' },
		{ title: 'Drainage Cleaning Services', img: '/images/source/Gemini_Generated_Image_dqijczdqijczdqij.png' },
		{ title: 'Painting Services', img: '/images/source/Gemini_Generated_Image_f8vg0vf8vg0vf8vg.png' }
	];

	const testimonials = [
		{
			name: 'Allen',
			date: '2 months ago',
			text: 'Excellent service. Booking with Homigo was smooth and efficient. The crew arrived on time and did a fantastic job. Highly recommended!',
			rating: 5
		},
		{
			name: 'Sarah Mohammed',
			date: '1 month ago',
			text: 'Very professional team. They did a deep clean of my villa and the results were amazing. Every corner was spotless.',
			rating: 5
		},
		{
			name: 'Zara',
			date: '1 week ago',
			text: 'Best cleaning service in Dubai. Reliable, affordable, and trustworthy staff. Will definitely use them again.',
			rating: 5
		}
	];

	const faqs = [
		{ question: 'How can I book a cleaning or technical service in Dubai?', answer: 'You can easily book through our website form, call us directly, or send us a WhatsApp message. We offer flexible scheduling to suit your needs.' },
		{ question: 'Do I need to provide deep cleaning tools and supplies?', answer: 'No, our professional team comes fully equipped with all necessary tools and eco-friendly cleaning supplies.' },
		{ question: 'Can I trust professional cleaners in my home or office?', answer: 'Absolutely. All our staff are background-checked, trained, and insured professionals.' },
		{ question: 'Do your cleaners know how to use tools in Dubai?', answer: 'Yes, our team is trained in handling all modern cleaning equipment and techniques specifically for Dubai homes and offices.' },
		{ question: 'What if I’m not satisfied with the cleaning service?', answer: 'Your satisfaction is our priority. If you are not happy with any aspect of the service, please let us know within 24 hours and we will address it immediately.' }
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
						Trusted Professional<br/>
						<span class="font-black md:text-[74.973px] md:leading-[86.615%] block mt-2">Cleaning Services in Dubai</span>
					</h1>
				</div>

				<div class="flex flex-col justify-center items-center w-full max-w-192.25 mb-8">
					<p class="text-[#FFFFFF] text-center text-lg md:text-[26px] font-medium leading-[110%] font-['Satoshi']">
						Bring Back the Fresh Look of Your Business or Home with Homigo Cleaning Company
					</p>
				</div>
				<a href="/quote" class="inline-block bg-homigo-green hover:bg-homigo-dark text-white font-semibold py-3 px-8 rounded-md transition-colors shadow-lg">
					Get a Free Quote
				</a>
			</div>
			

		</div>

		<!-- WhatsApp Floating Icons removed from here as they are now global in layout -->
	
	</section>

	<!-- Intro Section -->
	<section class="py-16 md:py-24">
		<div class="container mx-auto px-4 flex flex-col md:flex-row gap-12 items-start" style="display: flex; width: 1398px; justify-content: space-between; align-items: center;">
			<div class="md:w-1/2">
				<h2 class="text-3xl font-bold text-gray-900 mb-6" style="display: flex; height: 174.016px; flex-direction: column; justify-content: center; flex-shrink: 0; align-self: stretch; color: color(display-p3 0.0481 0.0481 0.0481); font-family: 'PF Bague Sans Pro'; font-size: 60px; font-style: normal; font-weight: 900; line-height: normal;">Top Rated Technical &<br/>Cleaning Services</h2>
				<p class="text-gray-600 mb-6 leading-relaxed" style="display: flex; height: 410.984px; flex-direction: column; justify-content: center; flex-shrink: 0; align-self: stretch; color: color(display-p3 0 0 0); font-family: 'PF Bague Sans Pro'; font-size: 32px; font-style: normal; font-weight: 400; line-height: 160%;">
					Since 2023, we deliver professional cleaning and technical services in Dubai. Our trained team specializes in deep cleaning, water tank cleaning, drainage cleaning, and maintenance for villas, apartments, and offices. Affordable pricing, fast service, and guaranteed satisfaction.
				</p>
			</div>
			
			<!-- Quote Form -->
			<div class="relative z-20 w-full md:w-112.5" style="display: flex; padding: 52px 58px 62px 51px; flex-direction: column; align-items: center; border-radius: 24px; border: 1px solid color(display-p3 0.9135 0.9135 0.9135); background: color(display-p3 1 1 1); box-shadow: 0 2640px 250px 0 color(display-p3 0.251 0.251 0.251 / 0.00), 0 1689px 250px 0 color(display-p3 0.251 0.251 0.251 / 0.01), 0 950px 250px 0 color(display-p3 0.251 0.251 0.251 / 0.03), 0 422px 250px 0 color(display-p3 0.251 0.251 0.251 / 0.04), 0 106px 232px 0 color(display-p3 0.251 0.251 0.251 / 0.05);">
				<h3 class="text-2xl font-bold text-gray-800 mb-2" style="align-self: stretch; color: color(display-p3 0.101 0.101 0.101); font-family: 'SF Pro'; font-size: 32px; font-style: normal; font-weight: 700; line-height: normal;">Get a Free Quote</h3>
				<p class="text-gray-500 mb-6 text-sm" style="align-self: stretch; color: color(display-p3 0.5673 0.5673 0.5673); font-family: 'SF Pro'; font-size: 24px; font-style: normal; font-weight: 400; line-height: normal;">We ensure you request, schedule & pay services easily within seconds.</p>
				
				<form class="space-y-4">
					<!-- <div class="grid grid-cols-2 gap-4"> -->
						<input type="text" placeholder="Name" class="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:border-homigo-green bg-gray-50" />
						<input type="tel" placeholder="Phone" class="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:border-homigo-green bg-gray-50" />
					<!-- </div> -->
					<input type="email" placeholder="Email" class="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:border-homigo-green bg-gray-50" />
					<input type="text" placeholder="Address" class="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:border-homigo-green bg-gray-50" />
					<select class="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:border-homigo-green bg-gray-50 text-gray-500">
						<option>Select a Service</option>
						<option>Deep Cleaning</option>
						<option>Office Cleaning</option>
						<option>Maintenance</option>
					</select>
					<button type="submit" class="w-full bg-homigo-green hover:bg-homigo-dark text-white font-bold py-3 rounded-md transition-colors mt-2">
						Get My Quote
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
					<h2 class="text-4xl font-bold text-gray-900 mb-2">We're Glad You're Here!</h2>
					<p class="text-gray-500">Many cleaning needs, one solution.</p>
				</div>
				<a href="/services" class="bg-homigo-green hover:bg-homigo-dark text-white px-6 py-2 rounded-md text-sm font-semibold transition-colors">
					View Menu
				</a>
			</div>
			
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{#each services as service}
					<div class="group relative overflow-hidden rounded-xl h-64 shadow-md cursor-pointer">
						<img src={service.img} alt={service.title} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
						<div class="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
						<div class="absolute bottom-0 left-0 p-6">
							<h3 class="text-white font-bold text-lg">{service.title}</h3>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Process Steps -->
	<section class="py-20 bg-white">
		<div class="container mx-auto px-4 text-center">
			<p class="text-homigo-green font-medium mb-2">Just Three Easy Steps</p>
			<h2 class="text-3xl font-bold text-gray-900 mb-16">We Keep Things Simple</h2>

			<div class="grid md:grid-cols-3 gap-12 relative">
				<!-- Connector Line (Desktop) -->
				<div class="hidden md:block absolute top-8 left-[16%] right-[16%] h-0.5 bg-gray-200 -z-10"></div>

				<div class="flex flex-col items-center">
					<div class="w-16 h-16 bg-homigo-green rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 shadow-lg ring-4 ring-white">1</div>
					<h3 class="font-bold text-xl mb-3">Request a Quick Quote</h3>
					<p class="text-gray-500 text-sm max-w-xs">Fill out a simple form for home or commercial cleaning. It's simple, fast & free. Get an instant quote tailored to your cleaning needs.</p>
				</div>
				<div class="flex flex-col items-center">
					<div class="w-16 h-16 bg-homigo-green rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 shadow-lg ring-4 ring-white">2</div>
					<h3 class="font-bold text-xl mb-3">Choose a Convenient Schedule</h3>
					<p class="text-gray-500 text-sm max-w-xs">Pick a date and time that works for you. Our team works around your schedule to minimize disruption.</p>
				</div>
				<div class="flex flex-col items-center">
					<div class="w-16 h-16 bg-homigo-green rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 shadow-lg ring-4 ring-white">3</div>
					<h3 class="font-bold text-xl mb-3">Relax, We Handle the Rest</h3>
					<p class="text-gray-500 text-sm max-w-xs">Sit back while our expert team makes your space sparkle. We arrive fully equipped and get the job done right.</p>
				</div>
			</div>

			<div class="mt-16">
				<a href="/quote" class="bg-homigo-green hover:bg-homigo-dark text-white px-8 py-3 rounded-md font-bold transition-colors">
					Get a Quote
				</a>
			</div>
		</div>
	</section>

	<!-- Features (What Makes Homigo Different) -->
	<section class="bg-[#F0FCEF] py-20" style="background-color: color(display-p3 0.949 0.9882 0.9412);">
		<div class="container mx-auto px-4">
			<h2 class="text-3xl font-bold text-center text-gray-900 mb-16">What Makes Homigo Different</h2>

			<div class="space-y-24">
				<!-- Feature 1 -->
				<div class="flex flex-col md:flex-row items-center gap-12">
					<div class="md:w-1/2">
						<h3 class="text-homigo-green font-bold text-xl mb-4">Quality Cleaning</h3>
						<p class="text-gray-600 leading-relaxed">
							Our Asian deep cleaning method ensures every nook and cranny is spotless. Using eco-friendly products and expert techniques to deliver safe, detailed, and reliable cleaning for homes and commercial spaces. Our team of professionals treat every client's home with respect and care. Modern tools and quality checks guarantee every service is done right, leaving you worry-free.
						</p>
					</div>
					<div class="md:w-1/2 flex justify-center">
						<div class="relative">
							<div class="absolute -inset-4 bg-homigo-green/20 rounded-2xl -z-10 rotate-3"></div>
							<img src="/images/source/woman-cleaning-couch-with-vacuum-cleaner-home.jpg" alt="Quality Cleaning" class="rounded-xl shadow-lg w-full max-w-md h-64 object-cover" />
						</div>
					</div>
				</div>

				<!-- Feature 2 -->
				<div class="flex flex-col md:flex-row-reverse items-center gap-12">
					<div class="md:w-1/2">
						<h3 class="text-homigo-green font-bold text-xl mb-4">Flexible Scheduling</h3>
						<p class="text-gray-600 leading-relaxed">
							We offer flexible scheduling including weekends and holidays. Our professional booking stream keeps your schedule free, ensuring seamless service delivery without interrupting your home or workday.
						</p>
					</div>
					<div class="md:w-1/2 flex justify-center relative">
						<div class="relative">
							<div class="absolute -inset-4 bg-blue-100 rounded-2xl -z-10 -rotate-3"></div>
							<img src="/images/source/Gemini_Generated_Image_dqijczdqijczdqij.png" alt="Flexible Scheduling" class="rounded-xl shadow-lg w-full max-w-md h-64 object-cover" />
							<!-- Clock Overlay Badge -->
							<div class="absolute -bottom-6 -right-6 bg-black text-homigo-green-light rounded-full p-4 shadow-xl border-4 border-white w-20 h-20 flex items-center justify-center font-bold text-sm">
								24hr
							</div>
						</div>
					</div>
				</div>

				<!-- Feature 3 -->
				<div class="flex flex-col md:flex-row items-center gap-12">
					<div class="md:w-1/2">
						<h3 class="text-homigo-green font-bold text-xl mb-4">Technology Backed</h3>
						<p class="text-gray-600 leading-relaxed">
							Our cleaning services are fully technology-backed, combining advanced equipment and smart solutions to improve efficiency and precision. High-quality results every time using industrial-grade machinery and eco-friendly technology, we ensure efficient, safe, and hygienic cleaning everywhere.
						</p>
					</div>
					<div class="md:w-1/2 flex justify-center">
						<div class="relative">
							<div class="absolute -inset-4 bg-homigo-green/20 rounded-2xl -z-10 rotate-3"></div>
							<img src="/images/source/branded-workwear-two-cleaners-vacuuming-office-space-organizing-chairs-ensuring-pristine.jpg" alt="Technology Backed" class="rounded-xl shadow-lg w-full max-w-md h-64 object-cover" />
						</div>
					</div>
				</div>
				
				<!-- Feature 4 -->
				<div class="flex flex-col md:flex-row-reverse items-center gap-12">
					<div class="md:w-1/2">
						<h3 class="text-homigo-green font-bold text-xl mb-4">Insured Professionals</h3>
						<p class="text-gray-600 leading-relaxed">
							Our insured professionals deliver reliable, safe, and worry-free cleaning services giving you complete peace of mind while maintaining high standards of quality and professionalism.
						</p>
					</div>
					<div class="md:w-1/2 flex justify-center">
						<div class="relative">
							<div class="absolute -inset-4 bg-blue-100 rounded-2xl -z-10 -rotate-3"></div>
							<img src="/images/source/gloved-hands-cleaning-surface.jpg" alt="Insured Professionals" class="rounded-xl shadow-lg w-full max-w-md h-64 object-cover" />
						</div>
					</div>
				</div>
			</div>
			
			<div class="mt-16 text-center">
				<a href="/quote" class="bg-homigo-green hover:bg-homigo-dark text-white px-8 py-3 rounded-md font-bold transition-colors">
					Get a Free Quote
				</a>
			</div>
		</div>
	</section>

	<!-- Testimonials -->
	<section class="py-20 bg-white">
		<div class="container mx-auto px-4">
			<h2 class="text-3xl font-bold text-center text-gray-900 mb-12">Why Our Clients <span class="text-red-500 border-b-2 border-red-500">Trust</span> Homigo</h2>
			
			<div class="grid md:grid-cols-3 gap-8">
				{#each testimonials as testimonial}
					<div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
						<div class="flex text-yellow-400 mb-4">
							{#each Array(5) as _}
								<svg class="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
							{/each}
						</div>
						<p class="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
						<div class="flex items-center gap-3">
							<div class="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold">
								{testimonial.name[0]}
							</div>
							<div>
								<p class="font-bold text-sm text-gray-900">{testimonial.name}</p>
								<p class="text-xs text-gray-400">{testimonial.date}</p>
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
				<h2 class="text-3xl font-bold text-gray-900 mb-6">Have Questions?<br/>Ask Away.</h2>
				<p class="text-gray-600 mb-8">
					Here are some common questions from our customers. Need more help? Contact our customer service team via phone for fast response.
				</p>
				<a href="/quote" class="bg-homigo-green hover:bg-homigo-dark text-white px-8 py-3 rounded-md font-bold transition-colors">
					Get a Free Quote
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
								<span class="font-semibold text-gray-800">{faq.question}</span>
								<svg class="w-5 h-5 text-gray-400 transform transition-transform duration-200 {activeFaq === i ? 'rotate-180' : ''}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
								</svg>
							</button>
							{#if activeFaq === i}
								<div class="px-6 pb-4 text-gray-600 border-t border-gray-100 pt-4">
									{faq.answer}
								</div>
							{/if}
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>
</div>