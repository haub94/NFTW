<script>
	import Button from '$lib/documentation/components/atoms/Button.svelte';

	export let name = "Button";
	export let description = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et"
	export let data;

	/*data[0].subitem.forEach((item) => {
		console.log("subitems: " + item.name);
	} );*/


</script>

{#each data as dat}
	<main>
		<div class="py-6">
			<div class="flex flex-row justify-between content-center mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
				<div class='flex flex-col space-y-2'>
					<h1 class="h-12 text-2xl font-semibold text-gray-900">{name}</h1>
					<p>{description}</p>
				</div>

				<button class="h-12 w-40 ml-12 text-blue-500 bg-transparent border border-solid border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-600 font-bold uppercase text-sm rounded outline-none focus:outline-none ease-linear transition-all duration-150  active show px-3">
					show code
				</button>
			</div>
			<div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
				<div class="py-4 h-auto">
						<div class="flex justify-center my-4 py-4 border border-2 border-gray-300 rounded-lg">
							<svelte:component this={Button} />
						</div>
				</div>
			</div>
		</div>
	</main>
{/each}
