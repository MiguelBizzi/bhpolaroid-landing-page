<script>
	import Nav from '$lib/components/nav.svelte';
	import '../app.css';
</script>

<section class="bg-red-500 py-1 text-center text-sm font-medium text-white">
	<span>Eternize suas memórias! Compre já nossas fotos!</span>
</section>

<header class="relative h-[70px] bg-primary px-4">
	<div class="mx-auto flex h-full w-full max-w-screen-xl items-center justify-between">
		<img src="/logo-header.png" alt="logo" class="w-[140px] object-fill object-center" />

		<Nav />
	</div>
</header>

<slot></slot>
