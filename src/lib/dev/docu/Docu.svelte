<script lang="ts">
	import { onMount } from 'svelte';
	import { dev } from '$app/environment';

	export function readComp(directory: string) {
	let compArray: string[] = [];
	let modules;
	switch (directory) {
		case "atoms":
			modules = import.meta.glob("$lib/dev/docu/documentation/components/atoms/*.svelte");
			break;
		case "molecules":
			modules = import.meta.glob("$lib/dev/docu/documentation/components/molecules/*.svelte");
			break;
		default:
			if (dev) {
				console.log("Error in function <<readComponents>> : The directory with the name <" + directory + "> doesnt exists!");
			}
	}
	for (const path in modules) {
		modules[path]().then(() => {
			let pathArray: string[] = path.split("/");
			let compSvelte: string | undefined = pathArray.at(-1) || 'zero components';
			let comp: string[] = compSvelte.split(".");
			let component: string | undefined = comp.at(0);
			compArray.push(component as string);
		})
	}
	console.log(compArray);
	return compArray;
}

	//read all components from directory
	onMount(() => {
		readComp("atoms");
		readComp("molecules");
	})

</script>