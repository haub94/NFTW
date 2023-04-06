export function readComp(directory) {
	let compArray = [];
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
			let pathArray = path.split("/");
			let compSvelte = pathArray.at(-1);
			//console.log(compSvelte);
			let comp = compSvelte.split(".");
			//console.log(comp.at(0));
			let component = comp.at(0);
			compArray.push(component);
		})
	}
	console.log(compArray);
	return compArray;
}

