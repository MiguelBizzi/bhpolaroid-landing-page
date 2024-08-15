<script lang="ts">
	import TestimonialsCard from './testimonials-card.svelte';
</script>

<div class="mx-auto mt-4 max-w-screen-xl p-6">
	<div class="text-center">
		<h1 class="text-lg font-bold text-primary">Avaliações</h1>
		<h2 class="mx-auto max-w-xl text-4xl font-semibold">
			Confira o que nossos clientes estão falando sobre nós
		</h2>
	</div>

	<div class="mt-14 flex items-start gap-6">
		<div class="flex-1 space-y-6">
			<TestimonialsCard />
			<TestimonialsCard />
			<TestimonialsCard />
		</div>
		<div class="flex-1 space-y-6">
			<TestimonialsCard
				text="“Excepteur consectetur deserunt id incididunt veniam mollit officia sint qui aute duis sit
                cillum. Reprehenderit fugiat amet aliqua in commodo minim sunt laborum.” “Excepteur
                consectetur deserunt id incididunt veniam mollit officia sint qui aute duis sit cillum.
                Reprehenderit fugiat amet aliqua in commodo minim sunt laborum.”"
			/>
			<TestimonialsCard
				text="“Excepteur consectetur deserunt id incididunt veniam mollit officia sint qui aute duis sit
                cillum. Reprehenderit fugiat amet aliqua in commodo minim sunt laborum.” “Excepteur
                consectetur deserunt id incididunt veniam mollit officia sint qui aute duis sit cillum.
                Reprehenderit fugiat amet aliqua in commodo minim sunt laborum.”"
			/>
		</div>
		<div class="flex-1 space-y-6">
			<TestimonialsCard />
			<TestimonialsCard
				text="“Excepteur consectetur deserunt id incididunt veniam mollit officia sint qui aute duis sit
                cillum. Reprehenderit fugiat amet aliqua in commodo minim sunt laborum.” “Excepteur
                consectetur deserunt id incididunt veniam mollit officia sint qui aute duis sit cillum.
                Reprehenderit fugiat amet aliqua in commodo minim sunt laborum.”"
			/>
			<TestimonialsCard />
		</div>
	</div>
</div>
