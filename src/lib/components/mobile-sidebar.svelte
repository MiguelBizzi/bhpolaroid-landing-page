<script lang="ts">
	import * as Sheet from '$lib/components/ui/sheet/index.js';
	import { ChevronDown, ChevronUp, Menu } from 'lucide-svelte';

	let open: boolean;
	let isProductDropdownOpen: boolean = false;
</script>

<Sheet.Root bind:open>
	<Sheet.Trigger>
		<Menu class="size-6 text-white" />
	</Sheet.Trigger>
	<Sheet.Content side="right">
		<div class="space-y-4">
			<div>
				<button
					class="flex items-center justify-between gap-2"
					on:click={() => (isProductDropdownOpen = !isProductDropdownOpen)}
				>
					<p class="font-medium text-gray-900">Produtos</p>
					{#if isProductDropdownOpen}
						<ChevronUp class="size-4" />
					{:else}
						<ChevronDown class="size-4" />
					{/if}
				</button>
				{#if isProductDropdownOpen}
					<ul class="mt-2 flex flex-col space-y-4">
						<li class="flow-root">
							<a href="#" class="-m-2 block p-2 text-gray-500">Tops</a>
						</li>
						<li class="flow-root">
							<a href="#" class="-m-2 block p-2 text-gray-500">Dresses</a>
						</li>
						<li class="flow-root">
							<a href="#" class="-m-2 block p-2 text-gray-500">Pants</a>
						</li>
						<li class="flow-root">
							<a href="#" class="-m-2 block p-2 text-gray-500">Denim</a>
						</li>
						<li class="flow-root">
							<a href="#" class="-m-2 block p-2 text-gray-500">Sweaters</a>
						</li>
						<li class="flow-root">
							<a href="#" class="-m-2 block p-2 text-gray-500">T-Shirts</a>
						</li>
						<li class="flow-root">
							<a href="#" class="-m-2 block p-2 text-gray-500">Jackets</a>
						</li>
						<li class="flow-root">
							<a href="#" class="-m-2 block p-2 text-gray-500">Activewear</a>
						</li>
						<li class="flow-root">
							<a href="#" class="-m-2 block p-2 text-gray-500">Browse All</a>
						</li>
					</ul>
				{/if}
			</div>
			<div>
				<p class="font-medium text-gray-900">Quem somos</p>
			</div>
			<div>
				<a href="#testimonials" on:click={() => (open = false)} class="font-medium text-gray-900"
					>Avaliações</a
				>
			</div>
			<div>
				<p class="font-medium text-gray-900">Contato</p>
			</div>
		</div>
	</Sheet.Content>
</Sheet.Root>
