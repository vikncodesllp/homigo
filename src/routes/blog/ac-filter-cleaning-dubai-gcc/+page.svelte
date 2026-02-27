<script lang="ts">
	import { _ } from 'svelte-i18n';
	// Using existing assets for the blog detail
	const mainImage = '/assets/Blog/AC cleaning close up.jpg'; // AC cleaning close up
	const detailImage1 = '/assets/Blog/Technician working.jpeg'; // Technician working
	const detailImage2 = '/assets/Blog/Another angle tool.jpeg'; // Another angle/tool
</script>

<div class="font-['SF_Pro'] bg-gray-50 pb-20 mt-40">
	<div class="container mx-auto px-4 max-w-5xl">
		<!-- Breadcrumb -->
		<div class="py-8">
		<p class="text-sm text-gray-500">
				<a href="/" class="hover:text-homigo-green transition-colors">{$_('nav.home') || 'Home'}</a>
				<span class="mx-2">/</span>
				<a href="/blog" class="hover:text-homigo-green transition-colors">{$_('nav.blog')}</a>
				<span class="mx-2">/</span>
				<span class="font-medium text-black">{$_('blog_posts.ac_filter.title')}</span>
			</p>
		</div>

		<!-- Main Article Image -->
		<div class="w-full h-125 rounded-3xl overflow-hidden mb-12 shadow-sm">
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
					{$_('blog_posts.ac_filter.title')}
				</h1>
				<p class="text-lg text-gray-600 leading-relaxed">
					{$_('blog_posts.ac_filter.intro')}
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
				<h2 class="text-3xl font-bold text-black mb-6">{$_('blog_posts.ac_filter.role_title')}</h2>
				<p class="text-gray-600 leading-relaxed">
					{$_('blog_posts.ac_filter.role_text')}
				</p>
			</div>

			<!-- Importance in UAE Climate -->
			<div class="mb-12">
				<h2 class="text-3xl font-bold text-black mb-6">{$_('blog_posts.ac_filter.climate_title')}</h2>
				<p class="text-gray-600 leading-relaxed">
					{$_('blog_posts.ac_filter.climate_text')}
				</p>
			</div>

			<!-- Common Signs -->
			<div class="mb-12">
				<h2 class="text-3xl font-bold text-black mb-6">{$_('blog_posts.ac_filter.signs_title')}</h2>
				<p class="text-gray-600 leading-relaxed">
					{$_('blog_posts.ac_filter.signs_text')}
				</p>
			</div>

			<!-- Professional vs DIY -->
			<div class="mb-12">
				<h2 class="text-3xl font-bold text-black mb-6">{$_('blog_posts.ac_filter.diy_title')}</h2>
				<p class="text-gray-600 leading-relaxed">
					{$_('blog_posts.ac_filter.diy_text')}
				</p>
			</div>

			<!-- Frequency -->
			<div class="mb-12">
				<h2 class="text-3xl font-bold text-black mb-6">{$_('blog_posts.ac_filter.frequency_title')}</h2>
				<p class="text-gray-600 leading-relaxed">
					{$_('blog_posts.ac_filter.frequency_text')}
				</p>
			</div>
		</article>
	</div>
</div>