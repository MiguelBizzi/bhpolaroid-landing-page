<script lang="ts">
	import type { Writable } from 'svelte/store';
	import { slide } from 'svelte/transition';

	export let isHovered: Writable<boolean>;

	function handleMouseEnter() {
		$isHovered = true;
	}

	function handleMouseLeave() {
		$isHovered = false;
	}
</script>

{#if $isHovered}
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<!-- svelte-ignore a11y-mouse-events-have-key-events -->
	<div
		class="absolute left-0 right-0 top-[70px] bg-red-600 p-4"
		transition:slide={{ duration: 100 }}
		on:mouseenter={handleMouseEnter}
		on:mouseleave={handleMouseLeave}
	>
		<div class="mx-auto grid max-w-screen-xl grid-cols-4">
			<div>
				<h2 class="font-bold text-white">Fotos</h2>
				<nav class="flex flex-col text-white">
					<a href="/fotos/album-1" class="">Album 1</a>
					<a href="/fotos/album-2" class="">Album 2</a>
					<a href="/fotos/album-3" class="">Album 3</a>
				</nav>
			</div>
			<div>
				<h2 class="font-bold text-white">Fotos</h2>
				<nav class="flex flex-col text-white">
					<a href="/fotos/album-1" class="">Album 1</a>
					<a href="/fotos/album-2" class="">Album 2</a>
					<a href="/fotos/album-3" class="">Album 3</a>
				</nav>
			</div>
			<div>
				<h2 class="font-bold text-white">Fotos</h2>
				<nav class="flex flex-col text-white">
					<a href="/fotos/album-1" class="">Album 1</a>
					<a href="/fotos/album-2" class="">Album 2</a>
					<a href="/fotos/album-3" class="">Album 3</a>
				</nav>
			</div>
			<div>
				<h2 class="font-bold text-white">Fotos</h2>
				<nav class="flex flex-col text-white">
					<a href="/fotos/album-1" class="">Album 1</a>
					<a href="/fotos/album-2" class="">Album 2</a>
					<a href="/fotos/album-3" class="">Album 3</a>
				</nav>
			</div>
		</div>
	</div>
{/if}
