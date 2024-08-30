<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { generateWhatsAppUrl } from '$lib/utils/genarate-whatsapp-url';

	let whatsappUrl = generateWhatsAppUrl('Olá, gostaria de mais informações sobre seus produtos.');
	let instagramUrl = 'https://www.instagram.com/bhpolaroids/';
</script>

<div class="mx-auto mt-4 max-w-screen-xl p-6" id="products">
	<div class="text-center">
		<h1 class="text-lg font-bold text-primary">Contato</h1>
		<h2 class="mx-auto mb-4 max-w-2xl text-4xl font-semibold">
			Entre em contato conosco para mais informações.
		</h2>

		<a href={whatsappUrl} target="_blank">
			<Button class="rounded-full">WhatsApp</Button>
		</a>
		<a href={instagramUrl} target="_blank">
			<Button variant="outline" class="rounded-full">Siga-nos</Button>
		</a>
	</div>
</div>
