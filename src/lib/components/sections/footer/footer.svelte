<script lang="ts">
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import { Instagram } from 'lucide-svelte';
</script>

<footer class="mt-6 bg-gray-50 p-6">
	<div class="mx-auto flex max-w-screen-xl items-center justify-between p-6">
		<img src="/logo-red.png" alt="logo" class="w-[200px] object-fill object-center" />

		<div class="flex flex-col items-start gap-2">
			<h4 class="font-medium leading-none text-primary">Siga nos:</h4>
			<div class="flex items-center justify-center">
				<a
					href="https://www.instagram.com/bhpolaroids"
					class="rounded-full bg-primary p-2 text-white"
				>
					<Instagram class="size-4" />
				</a>
			</div>
		</div>
	</div>
	<Separator />
	<div class="mt-4 text-center text-sm text-gray-500">
		<span> © 2024 Miguel Bizzi LTDA. Todos direitos reservados. </span>
	</div>
</footer>
