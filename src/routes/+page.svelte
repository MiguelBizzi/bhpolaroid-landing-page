<script lang="ts">
	import AboutUsSection from '$lib/components/sections/about-us/about-us-section.svelte';
	import ProductSection from '$lib/components/sections/products/product-section.svelte';
	import ValuesSection from '$lib/components/sections/values/values-section.svelte';
	import {
		mini_polaroid_products,
		other_products,
		polaroid_products
	} from '$lib/constants/products';
</script>

<div class="mx-auto flex h-[350px] max-w-screen-xl items-center justify-center bg-gray-100">
	<h1>Banner</h1>
</div>

<AboutUsSection />

<ProductSection
	title="Polarois"
	description="Capture o Momento, Viva o Inesquecível!"
	products={polaroid_products}
/>

<ValuesSection />

<ProductSection
	title="Mini Polaroids"
	description="Grandes Momentos em Pequenos Cliques!"
	products={mini_polaroid_products}
/>

<ProductSection
	title="Essenciais para leitores modernos"
	description="Tudo o que você precisa para ler, criar e se inspirar!"
	products={other_products}
/>
