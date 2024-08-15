<script lang="ts">
	import TestimonialsCard from './testimonials-card.svelte';
</script>

<div class="mx-auto mt-4 max-w-screen-xl p-6" id="testimonials">
	<div class="text-center">
		<h1 class="text-lg font-bold text-primary">Avaliações</h1>
		<h2 class="mx-auto max-w-xl text-4xl font-semibold">
			Confira o que nossos clientes estão falando sobre nós
		</h2>
	</div>

	<div class="mt-14 grid w-full max-w-screen-xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
		<div class="space-y-6">
			<TestimonialsCard />
			<TestimonialsCard />
			<TestimonialsCard />

			<div class="block lg:hidden">
				<TestimonialsCard />
			</div>
		</div>
		<div class="space-y-6">
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

			<div class="block lg:hidden">
				<TestimonialsCard />
			</div>
		</div>
		<div class="hidden space-y-6 lg:block">
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
