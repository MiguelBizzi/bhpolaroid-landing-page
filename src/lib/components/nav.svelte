<script lang="ts">
	import { ChevronDown } from 'lucide-svelte';
	import NavProductDropdown from './nav-product-dropdown.svelte';
	import { writable, type Writable } from 'svelte/store';
	import { cn } from '$lib/utils';
	import { fade, slide } from 'svelte/transition';

	let isHovered: Writable<boolean> = writable(false);

	function handleMouseEnter() {
		$isHovered = true;
	}

	function handleMouseLeave() {
		$isHovered = false;
	}
</script>

<nav class="flex h-full select-none items-center gap-6">
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<!-- svelte-ignore a11y-mouse-events-have-key-events -->
	<div
		on:mouseenter={handleMouseEnter}
		on:mouseleave={handleMouseLeave}
		class="relative flex h-full items-center justify-center px-1"
	>
		<span class="cursor-pointer text-sm font-medium leading-none text-white">
			Produtos
			<ChevronDown class="-mt-0.5 inline-flex size-4" />
		</span>

		{#if $isHovered}
			<div class="absolute bottom-0 h-0.5 w-full bg-white" transition:slide />
		{/if}
	</div>

	<span class="cursor-pointer px-1 text-sm font-medium leading-none text-white hover:underline">
		Quem somos
	</span>
	<span class="cursor-pointer px-1 text-sm font-medium leading-none text-white hover:underline">
		Avaliações
	</span>
	<span class="cursor-pointer px-1 text-sm font-medium leading-none text-white hover:underline">
		Contato
	</span>
</nav>

<NavProductDropdown {isHovered} />
