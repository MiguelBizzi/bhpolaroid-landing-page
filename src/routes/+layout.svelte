<script lang="ts">
	import Nav from '$lib/components/nav.svelte';
	import '../app.css';
	import MobileSidebar from '$lib/components/mobile-sidebar.svelte';
	import TopBanner from '$lib/components/top-banner.svelte';
	import CartSidebar from '$lib/components/cart-sidebar.svelte';
	import { cart, CartStorageEnum } from '$lib/stores/cart-store';
	import { browser } from '$app/environment';
	import SearchCommand from '$lib/components/search-command.svelte';
	import { Toaster } from '$lib/components/ui/sonner';
	import ContactSection from '$lib/components/sections/contact/contact-section.svelte';
	import Footer from '$lib/components/sections/footer/footer.svelte';
	import TestimonialsSection from '$lib/components/sections/testimonials/testimonials-section.svelte';

	function loadPersistedCart() {
		const storedCart = localStorage.getItem(CartStorageEnum.Cart);

		$cart = storedCart ? JSON.parse(storedCart) : [];
	}

	$: browser && loadPersistedCart();
</script>

<TopBanner />

<header class="relative h-[70px] bg-primary px-4">
	<div class="mx-auto flex h-full w-full max-w-screen-xl items-center gap-4 sm:justify-between">
		<div class="flex items-center justify-center sm:hidden">
			<MobileSidebar />
		</div>

		<a href="/">
			<img src="/logo-header.png" alt="logo" class="w-[140px] object-fill object-center" />
		</a>

		<Nav />

		<div class="ml-auto flex items-center justify-center gap-6 sm:hidden">
			<!-- <SearchCommand /> -->

			<CartSidebar />
		</div>
	</div>
</header>

<slot></slot>

<TestimonialsSection />

<ContactSection />

<Footer />

<Toaster theme="light" />
