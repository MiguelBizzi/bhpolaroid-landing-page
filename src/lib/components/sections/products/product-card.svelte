<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import type { Product } from '$lib/constants/products';
	import { formatCurrency } from '$lib/utils/format-currency';

	export let product: Product;
</script>

<div class="group relative flex cursor-pointer flex-col">
	<div
		class="aspect-h-1 aspect-w-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80"
	>
		<img
			src={product.image}
			alt="Front of men&#039;s Basic Tee in black."
			class="h-full w-full object-cover object-center transition-transform duration-150 group-hover:scale-110 lg:h-full lg:w-full"
		/>
	</div>
	<div class="my-4 flex items-start justify-between">
		<div>
			<h3 class="font-bold leading-none text-gray-700">{product.name}</h3>
		</div>
		<p class="text-sm font-medium text-red-600">{formatCurrency(product.price)}/u</p>
	</div>
	<div class="mt-auto">
		{#if product.minimum}
			<p class="mb-1 text-sm text-gray-500">Mínimo: {product.minimum} unidades</p>
		{/if}
		<Button class="w-full">Adicionar ao carrinho</Button>
	</div>
</div>
