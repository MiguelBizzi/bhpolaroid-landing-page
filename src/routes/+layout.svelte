<script>
	import Nav from '$lib/components/nav.svelte';
	import '../app.css';
</script>

<header class="relative flex h-[70px] w-full items-center justify-between bg-primary px-4">
	<img src="/logo-header.png" alt="logo" class="w-[140px] object-fill object-center" />

	<Nav />
</header>

<slot></slot>
