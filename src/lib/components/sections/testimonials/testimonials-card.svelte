<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import { Quote } from 'lucide-svelte';

	export let text: string =
		'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.';
</script>

<div class="rounded-lg border p-6 shadow-lg">
	<Quote class="text-foreground" size={24} />

	<p class="mt-4 text-sm font-light">
		{text}
	</p>

	<div class="mt-4 flex items-start">
		<Avatar.Root>
			<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" height={18} width={18} />
			<Avatar.Fallback>CN</Avatar.Fallback>
		</Avatar.Root>

		<div class="ml-2">
			<p class="text-sm font-semibold">Jean Carlo</p>
			<p class="text-xs font-light">@shadcn</p>
		</div>
	</div>
</div>
