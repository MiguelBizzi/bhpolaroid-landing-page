<script lang="ts">
	import {
		increaseQuantity,
		inputQuantity,
		reduceQuantity,
		removeFromCart,
		type CartProduct
	} from '$lib/stores/cart-store';
	import { formatCurrency } from '$lib/utils/format-currency';
	import { toast } from 'svelte-sonner';
	import Input from './ui/input/input.svelte';
	import { Minus, Plus } from 'lucide-svelte';
	import type { FormInputEvent } from './ui/input';
	import { debounce } from '$lib/utils/debounce';

	export let product: CartProduct;

	function handleRemoveCart() {
		toast.success('Produto removido do carrinho');
		removeFromCart(product.name);
	}

	function handleIncreaseQuantity() {
		increaseQuantity(product.name);
	}

	function handleDecreaseQuantity() {
		reduceQuantity(product.name);
	}

	const debouncedHandleInputQuantity = debounce(handleInputQuantity, 500);

	function handleInputQuantity(event: FormInputEvent<InputEvent>) {
		const target = event.target as HTMLInputElement;
		const value = Number(target.value);

		if (!product?.minimum) {
			if (value < 1) {
				toast.error(`A quantidade mínima para ${product.name} é 1`);
				inputQuantity(product.name, 1);
				return;
			}
		}

		if (product?.minimum) {
			if (value < product.minimum) {
				toast.error(`A quantidade mínima para ${product.name} é ${product.minimum}`);
				inputQuantity(product.name, product.minimum);
				return;
			}
		}

		inputQuantity(product.name, value);
	}

	function getReduceButtonDisabled({ minimum, quantity }: CartProduct) {
		if (minimum) {
			return quantity === minimum;
		}

		return quantity === 1;
	}

	$: isReduceButtonDisabled = getReduceButtonDisabled(product);
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

		<div class="mt-4 flex flex-1 items-end justify-between text-sm">
			<div>
				<div class="flex items-center gap-2">
					<button
						type="button"
						disabled={isReduceButtonDisabled}
						on:click={handleDecreaseQuantity}
						class="font-medium text-gray-600 hover:text-gray-500 disabled:cursor-not-allowed"
					>
						<Minus class="size-3" />
					</button>
					<div>
						<Input
							type="number"
							value={product.quantity}
							on:input={debouncedHandleInputQuantity}
							class="h-6 w-[50px] text-center"
						/>
					</div>
					<button
						type="button"
						on:click={handleIncreaseQuantity}
						class="font-medium text-gray-600 hover:text-gray-500"
					>
						<Plus class="size-3" />
					</button>
				</div>
			</div>

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
