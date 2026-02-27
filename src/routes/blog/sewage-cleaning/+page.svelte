<script lang="ts">
	import { _ } from 'svelte-i18n';
	// Using existing assets for the blog detail
	const mainImage = '/assets/Blog/ChatGPT fdfdfdfd_compressed.jpeg'; // Sewage/Water truck image
	const detailImage = '/assets/Blog/ChatGPT Image Feb 9, dvdvdvd_compressed.jpeg'; // Manhole/Pipe cleaning image
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
				<span class="font-medium text-black">{$_('blog_posts.sewage.title').replace(/<br\/>/g, ' ')}</span>
			</p>
		</div>

		<!-- Main Article Image -->
		<div class="w-full h-125 rounded-3xl overflow-hidden mb-12 shadow-sm">
			<img 
				src={mainImage} 
				alt="Sewage Water Cleaning" 
				class="w-full h-full object-cover"
			/>
		</div>

		<!-- Article Content -->
		<article class="prose prose-lg max-w-none">
			<!-- Title Section -->
			<div class="mb-12">
				<h1 class="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
					{@html $_('blog_posts.sewage.title')}
				</h1>
				<p class="text-lg text-gray-600 leading-relaxed">
					{$_('blog_posts.sewage.intro')}
				</p>
			</div>

			<!-- What is Sewage Water Cleaning Section -->
			<div class="flex flex-col md:flex-row gap-12 items-center mb-16">
				<div class="w-full md:w-1/2 h-[400px] rounded-3xl overflow-hidden shadow-sm flex-shrink-0">
					<img 
						src={detailImage} 
						alt="Worker cleaning sewage" 
						class="w-full h-full object-cover"
					/>
				</div>
				<div class="w-full md:w-1/2">
					<h2 class="text-3xl font-bold text-black mb-6">{$_('blog_posts.sewage.what_title')}</h2>
					<p class="text-gray-600 leading-relaxed">
						{$_('blog_posts.sewage.what_text')}
					</p>
				</div>
			</div>

			<!-- Benefits Section -->
			<div class="mb-12">
				<h2 class="text-3xl font-bold text-black mb-6">{$_('blog_posts.sewage.benefits_title')}</h2>
				<p class="text-gray-600 leading-relaxed">
					{$_('blog_posts.sewage.benefits_text')}
				</p>
			</div>

			<!-- When Do You Need Section -->
			<div class="mb-12">
				<h2 class="text-3xl font-bold text-black mb-6">{$_('blog_posts.sewage.when_title')}</h2>
				<p class="text-gray-600 leading-relaxed">
					{$_('blog_posts.sewage.when_text')}
				</p>
			</div>

			<!-- Conclusion -->
			<div class="mb-12">
				<h2 class="text-3xl font-bold text-black mb-6">{$_('blog_posts.sewage.conclusion_title')}</h2>
				<p class="text-gray-600 leading-relaxed">
					{$_('blog_posts.sewage.conclusion_text')}
				</p>
			</div>
		</article>
	</div>
</div>