<script lang="ts">
	import CartSidebar from './cart-sidebar.svelte';
	import { page } from '$app/stores';

	$: pathname = $page.url.pathname;
</script>

<nav class="hidden h-full select-none items-center gap-6 sm:ml-0 sm:flex">
	<a
		href="/products"
		class="cursor-pointer px-1 text-sm font-medium leading-none text-white hover:underline"
	>
		Produtos
	</a>

	<a
		href={pathname === '/' ? '#about-us' : '/#about-us'}
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
	<a
		href="#contact"
		class="cursor-pointer px-1 text-sm font-medium leading-none text-white hover:underline"
	>
		Contato
	</a>

	<!-- <SearchCommand /> -->

	<CartSidebar />
</nav>
