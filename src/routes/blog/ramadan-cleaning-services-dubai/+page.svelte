<script lang="ts">
	import { _ } from 'svelte-i18n';
	// Using existing assets for the blog detail
	const mainImage = '/assets/Blog/Home cleaning scene.jpeg'; // Family/Home cleaning scene
	const detailImage = '/assets/Blog/Professional cleaner at work.jpeg'; // Professional cleaner at work
</script>

<div class="font-['SF_Pro'] bg-gray-50 pb-20 mt-40">	
	<div class="container mx-auto px-4 max-w-5xl">
		<!-- Breadcrumb -->
		<div class="py-4">
			<p class="text-sm text-gray-500">
				<a href="/" class="hover:text-homigo-green transition-colors">{$_('nav.home') || 'Home'}</a>
				<span class="mx-2">/</span>
				<a href="/blog" class="hover:text-homigo-green transition-colors">{$_('nav.blog')}</a>
				<span class="mx-2">/</span>
				<span class="font-medium text-black">{$_('blog_posts.ramadan.title')}</span>
			</p>
		</div>

		<!-- Main Article Image -->
		<div class="w-full h-125 rounded-3xl overflow-hidden mb-12 shadow-sm">
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
					{$_('blog_posts.ramadan.title')}
				</h1>
				<p class="text-lg text-gray-600 leading-relaxed">
					{$_('blog_posts.ramadan.intro')}
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
					<h2 class="text-3xl font-bold text-black mb-6">{$_('blog_posts.ramadan.importance_title')}</h2>
					<p class="text-gray-600 leading-relaxed">
						{$_('blog_posts.ramadan.importance_text')}
					</p>
				</div>
			</div>

			<!-- Deep Cleaning Services -->
			<div class="mb-12">
				<h2 class="text-3xl font-bold text-black mb-6">{$_('blog_posts.ramadan.deep_title')}</h2>
				<p class="text-gray-600 leading-relaxed">
					{$_('blog_posts.ramadan.deep_text')}
				</p>
			</div>

			<!-- Commercial Solutions -->
			<div class="mb-12">
				<h2 class="text-3xl font-bold text-black mb-6">{$_('blog_posts.ramadan.commercial_title')}</h2>
				<p class="text-gray-600 leading-relaxed">
					{$_('blog_posts.ramadan.commercial_text')}
				</p>
			</div>

			<!-- Benefits -->
			<div class="mb-12">
				<h2 class="text-3xl font-bold text-black mb-6">{$_('blog_posts.ramadan.benefits_title')}</h2>
				<p class="text-gray-600 leading-relaxed">
					{$_('blog_posts.ramadan.benefits_text')}
				</p>
			</div>
		</article>
	</div>
</div>