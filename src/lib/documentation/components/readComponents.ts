export function readComp(directory: string) {
	let compArray: string[] = [];
	let modules;
	switch (directory) {
		case "atoms":
			modules = import.meta.glob("$lib/patternLib/components/atoms/*.svelte");
			break;
		case "molecules":
			modules = import.meta.glob("$lib/patternLib/components/molecules/*.svelte");
			break;
		default:
			console.log("Error in function readComponents: The directory with the name <" + directory + "> doesnt exists!");
	}
	for (const path in modules) {
		modules[path]().then(() => {
			//console.log(index, mod);
			let pathArray: string[] = path.split("/");
			let compSvelte: string | undefined = pathArray.at(-1) || 'zero components';
			//console.log(compSvelte);
			let comp: string[] = compSvelte.split(".");
			//console.log(comp.at(0));
			let component: string | undefined = comp.at(0);
			compArray.push(component as string);
		})
	}
	console.log(compArray);
	return compArray;
}

