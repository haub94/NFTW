<script>
	import { readComp } from '$lib/documentation/components/readComponents.js';
	import { onMount } from 'svelte';

	//read all components from directory
	onMount(() => {
		readComp("atoms");
		readComp("molecules");
	})

</script>