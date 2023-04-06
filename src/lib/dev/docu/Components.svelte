<script lang="ts">

	//add all component-imports here
	import Header from '$lib/sectionComponents/Header.svelte';
	import Footer from '$lib/sectionComponents/Footer.svelte';


	//fill with docu-data
	const components = [
		{ 
			name: 'Header',   
			component: Header,
			description: 'Beschreibung zu Header.',
			"props": ["eins", "zwei", "drei"]   
		},
		{ 
			name: 'Footer', 
			component: Footer,
			description: 'Beschreibung zu Footer.',
			"props": ["eins", "zwei", "drei"] 
		},
	];
	
</script>



{#each components as component}
	<main>
		<div class="py-6">
			<div class="flex flex-row justify-between content-center mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
				<div class='flex flex-col space-y-2'>
					<h1 class="h-12 text-2xl font-semibold text-gray-900">{component.name}</h1>
					<p>{component.description}</p>
				</div>

				<button class="h-12 w-40 ml-12 text-blue-500 bg-transparent border border-solid border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-600 font-bold uppercase text-sm rounded outline-none focus:outline-none ease-linear transition-all duration-150  active show px-3">
					show code
				</button>
			</div>
			<div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
				<div class="py-4 h-auto">
						<div class="flex justify-center my-4 py-4 border-2 border-gray-300 rounded-lg">
							<svelte:component this={component.component}/>
						</div>
				</div>
			</div>
		</div>
	</main>
{/each}

