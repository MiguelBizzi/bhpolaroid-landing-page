<script>
	import Nav from '$lib/components/nav.svelte';
	import '../app.css';
</script>

<section class="bg-red-500 py-1 text-center text-sm font-medium text-white">
	<span>Eternize suas memórias! Compre já nossas fotos!</span>
</section>

<header class="relative flex h-[70px] w-full items-center justify-between bg-primary px-4">
	<img src="/logo-header.png" alt="logo" class="w-[140px] object-fill object-center" />

	<Nav />
</header>

<slot></slot>
