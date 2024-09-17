<script>
	import { products } from '$lib/constants/products';
	import ProductCard from '$lib/components/sections/products/product-card.svelte';
	import { Search } from 'lucide-svelte';
	import Input from '$lib/components/ui/input/input.svelte';

	let filterValue = '';

	$: filteredProducts = products.filter((product) =>
		product.name.toLowerCase().includes(filterValue.toLowerCase())
	);
</script>

<div class="mx-auto mt-4 max-w-screen-xl p-6" id="products">
	<div class="text-center">
		<h1 class="text-lg font-bold text-primary">Produtos</h1>
		<h2 class="mx-auto max-w-2xl text-4xl font-semibold">Conheça nossos produtos</h2>
	</div>

	<div class="relative mt-12 flex items-center">
		<Search class="absolute left-2 size-4 text-gray-400" />
		<Input
			id="search"
			class="max-w-md pl-8"
			placeholder="Pesquisar..."
			type="text"
			bind:value={filterValue}
		/>
	</div>

	<div class="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
		{#each filteredProducts as product}
			<ProductCard {product} />
		{/each}
	</div>
</div>
