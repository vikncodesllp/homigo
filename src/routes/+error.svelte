<script lang="ts">
	import { page } from '$app/state';
	import { _ } from '$lib/i18n/index';

	const logo = '/images/logo bannar.png';

	$: status = page.status;
	$: isNotFound = status === 404;
</script>

<div class="bg-gray-50">
	<div class="container mx-auto px-4 pb-20 pt-28 md:pt-40">
		<div class="mx-auto max-w-2xl rounded-3xl border border-gray-100 bg-white p-8 shadow-sm md:p-12">
			<div class="flex flex-col items-center text-center">
				<img src={logo} alt="Homigo Logo" class="mb-8 h-12 w-auto object-contain md:h-16" />

				<div class="mb-3 font-['Poppins'] font-black text-[48px] leading-none text-[#15562E] md:text-[72px]">
					{status}
				</div>

				<h1 class="mb-4 font-['Poppins'] font-black text-[28px] leading-tight text-[#0C0C0C] md:text-[40px]">
					{isNotFound ? $_('errors.not_found.title') : $_('errors.generic.title')}
				</h1>

				<p class="mb-10 max-w-xl font-['Poppins'] font-normal text-[18px] leading-relaxed text-[#474747] md:text-[24px]">
					{isNotFound ? $_('errors.not_found.desc') : $_('errors.generic.desc')}
				</p>

				<div class="flex w-full flex-col gap-4 sm:flex-row sm:justify-center">
					<a href="/" class="rounded-md bg-[#15562E] px-8 py-3 text-center font-['Poppins'] font-semibold text-white transition-colors hover:bg-[#0f4223]">
						{$_('errors.not_found.cta_home')}
					</a>
					<a href="/quote" class="rounded-md border border-[#15562E] px-8 py-3 text-center font-['Poppins'] font-semibold text-[#15562E] transition-colors hover:bg-gray-50">
						{$_('errors.not_found.cta_quote')}
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
