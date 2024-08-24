<script lang="ts">
	import { ShoppingCart } from 'lucide-svelte';
	import * as Sheet from '$lib/components/ui/sheet/index.js';
	import { cart } from '$lib/stores/cart-store';
	import CartProduct from './cart-product.svelte';
	import Button from './ui/button/button.svelte';
	import { ScrollArea } from '$lib/components/ui/scroll-area/index.js';

	let open: boolean;
</script>

<Sheet.Root bind:open>
	<Sheet.Trigger class="relative">
		<ShoppingCart class="size-5 text-white" />

		{#if $cart.length > 0}
			<div
				class="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-white text-xs font-semibold text-primary"
			>
				{$cart.length}
			</div>
		{/if}
	</Sheet.Trigger>
	<Sheet.Content class="flex flex-col" side="right">
		<Sheet.Header>
			<Sheet.Title>Carrinho</Sheet.Title>
			<Sheet.Description>Veja os produtos que você adicionou ao carrinho.</Sheet.Description>
		</Sheet.Header>

		{#if $cart.length === 0}
			<p class="mt-6 text-center text-sm text-gray-500">Seu carrinho está vazio.</p>
		{/if}

		<ScrollArea class="-mr-4 flex-1 pr-4">
			<div class="divide-y divide-gray-200">
				{#each $cart as product}
					<CartProduct {product} />
				{/each}
			</div>
		</ScrollArea>

		{#if $cart.length > 0}
			<Sheet.Footer>
				<Sheet.Close asChild let:builder>
					<Button builders={[builder]}>Finalizar compra</Button>
				</Sheet.Close>
			</Sheet.Footer>
		{/if}
	</Sheet.Content>
</Sheet.Root>
