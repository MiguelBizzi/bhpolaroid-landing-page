<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import type { Product } from '$lib/constants/products';
	import { addToCart } from '$lib/stores/cart-store';
	import { cn } from '$lib/utils';
	import { formatCurrency } from '$lib/utils/format-currency';

	export let product: Product;

	function handleAddToCart() {
		addToCart(product);
	}
</script>

<div class="group relative flex cursor-pointer flex-col">
	<div
		class="aspect-h-1 aspect-w-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80"
	>
		<img
			src={product.image}
			alt="{product.name} image"
			class="h-full w-full object-cover object-center transition-transform duration-150 group-hover:scale-110 lg:h-full lg:w-full"
		/>
	</div>
	<div
		class={cn('mt-4 flex items-start justify-between', {
			'my-4': !product.minimum,
			'mt-4': product.minimum
		})}
	>
		<div>
			<h3 class="font-bold leading-none text-gray-700">{product.name}</h3>
		</div>
		<p class="text-sm font-medium text-red-600">{formatCurrency(product.price)}/u</p>
	</div>
	{#if product.minimum}
		<p class="mb-4 mt-1 text-sm text-gray-500">Mínimo: {product.minimum} unidades</p>
	{/if}
	<div class="mt-auto">
		<Button class="w-full rounded-full" on:click={handleAddToCart}>Adicionar ao carrinho</Button>
	</div>
</div>
