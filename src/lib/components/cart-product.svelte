<script lang="ts">
	import { removeFromCart, type CartProduct } from '$lib/stores/cart-store';
	import { formatCurrency } from '$lib/utils/format-currency';

	export let product: CartProduct;

	function handleRemoveCart() {
		removeFromCart(product.name);
	}
</script>

<div class="flex py-6">
	<div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
		<img
			src={product.image}
			alt="{product.name} image"
			class="h-full w-full object-cover object-center"
		/>
	</div>

	<div class="ml-4 flex flex-1 flex-col">
		<div>
			<div class="flex justify-between text-base font-medium text-gray-900">
				<h3>
					{product.name}
				</h3>
				<p class="ml-4">{formatCurrency(product.price * product.quantity)}</p>
			</div>
			<p class="mt-1 text-sm text-gray-500">{formatCurrency(product.price)}/u</p>
		</div>
		<div class="flex flex-1 items-end justify-between text-sm">
			<p class="text-gray-500">Qtd {product.quantity}</p>

			<div class="flex">
				<button
					type="button"
					on:click={handleRemoveCart}
					class="font-medium text-red-600 hover:text-red-500">Remover</button
				>
			</div>
		</div>
	</div>
</div>
