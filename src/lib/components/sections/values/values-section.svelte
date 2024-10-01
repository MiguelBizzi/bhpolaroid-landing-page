<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { Package, Sparkles, Handshake } from 'lucide-svelte';
</script>

<div class="mx-auto mt-4 max-w-screen-xl p-6" id="values">
	<div class="flex flex-col items-center gap-4 sm:flex-row">
		<Card.Root class="flex-1 text-center">
			<Card.Header class="pb-2">
				<Sparkles class="mb-2 size-8 self-center text-primary" />
				<Card.Title>Qualidade Premium</Card.Title>
			</Card.Header>
			<Card.Content>
				<p class="text-sm text-muted-foreground">
					Polaroids impressas com materiais de alta qualidade, garantindo durabilidade e cores
					vibrantes em cada foto.
				</p>
			</Card.Content>
		</Card.Root>
		<Card.Root class="flex-1 text-center">
			<Card.Header class="pb-2">
				<Package class="mb-2 size-8 self-center text-primary" />
				<Card.Title>Embalagens Especiais</Card.Title>
			</Card.Header>
			<Card.Content>
				<p class="text-sm text-muted-foreground">
					Cada polaroid é cuidadosamente embalada, pronta para presentear ou para guardar suas
					memórias com carinho.
				</p>
			</Card.Content>
		</Card.Root>
		<Card.Root class="flex-1 text-center">
			<Card.Header class="pb-2">
				<Handshake class="mb-2 size-8 self-center text-primary" />
				<Card.Title>Atendimento Personalizado</Card.Title>
			</Card.Header>
			<Card.Content>
				<p class="text-sm text-muted-foreground">
					Suporte dedicado para ajudar a escolher, personalizar e acompanhar seu pedido a qualquer
					momento.
				</p>
			</Card.Content>
		</Card.Root>
	</div>
</div>
