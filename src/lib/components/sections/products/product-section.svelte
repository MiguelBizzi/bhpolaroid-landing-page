<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import type { Product } from '$lib/constants/products';
	import { ChevronRight } from 'lucide-svelte';
	import ProductCard from './product-card.svelte';

	export let title: string;
	export let description: string;
	export let products: Product[];
</script>

<div class="mx-auto mt-4 max-w-screen-xl p-6" id="products">
	<div class="text-center">
		<h1 class="text-lg font-bold text-primary">{title}</h1>
		<h2 class="mx-auto max-w-2xl text-4xl font-semibold">{description}</h2>
	</div>

	<div class="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
		{#each products as product}
			<ProductCard {product} />
		{/each}
	</div>

	<div class="flex items-center justify-center">
		<Button href="/products" variant="outline" class="mt-8"
			>Ver todos os produtos <ChevronRight class="ml-2 size-4 text-accent-foreground" /></Button
		>
	</div>
</div>
