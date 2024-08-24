<script lang="ts">
	import Nav from '$lib/components/nav.svelte';
	import '../app.css';
	import MobileSidebar from '$lib/components/mobile-sidebar.svelte';
	import TopBanner from '$lib/components/top-banner.svelte';
</script>

<TopBanner />

<header class="relative h-[70px] bg-primary px-4">
	<div class="mx-auto flex h-full w-full max-w-screen-xl items-center justify-between">
		<img src="/logo-header.png" alt="logo" class="w-[140px] object-fill object-center" />

		<Nav />

		<div class="block sm:hidden">
			<MobileSidebar />
		</div>
	</div>
</header>

<slot></slot>
