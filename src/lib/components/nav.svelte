<script lang="ts">
	import { ChevronDown } from 'lucide-svelte';
	import NavProductDropdown from './nav-product-dropdown.svelte';
	import { writable, type Writable } from 'svelte/store';
	import { slide } from 'svelte/transition';
	import CartSidebar from './cart-sidebar.svelte';
	import SearchCommand from './search-command.svelte';

	let isHovered: Writable<boolean> = writable(false);

	function handleMouseEnter() {
		$isHovered = true;
	}

	function handleMouseLeave() {
		$isHovered = false;
	}
</script>

<nav class="hidden h-full select-none items-center gap-6 sm:ml-0 sm:flex">
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<!-- svelte-ignore a11y-mouse-events-have-key-events -->
	<div
		on:mouseenter={handleMouseEnter}
		on:mouseleave={handleMouseLeave}
		class="relative flex h-full items-center justify-center px-1"
	>
		<a href="#products" class="cursor-pointer text-sm font-medium leading-none text-white">
			Produtos
			<ChevronDown class="-mt-0.5 inline-flex size-4" />
		</a>

		{#if $isHovered}
			<div class="absolute bottom-0 h-0.5 w-full bg-white" transition:slide />
		{/if}
	</div>

	<a
		href="#about-us"
		class="cursor-pointer px-1 text-sm font-medium leading-none text-white hover:underline"
	>
		Quem somos
	</a>
	<a
		href="#testimonials"
		class="cursor-pointer px-1 text-sm font-medium leading-none text-white hover:underline"
	>
		Avaliações
	</a>
	<span class="cursor-pointer px-1 text-sm font-medium leading-none text-white hover:underline">
		Contato
	</span>

	<SearchCommand />

	<CartSidebar />
</nav>

<NavProductDropdown {isHovered} />
