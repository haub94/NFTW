<script>
	//export let cssClass;




	const navigation = [
		{
			name:"Atoms",
			icon:"",
			iconAltText:"",
			path:"",
			subitem:[
				{
					name:"Button"
				},
				{
					name:"Textfield"
				},
				{
					name:"Textfield2"
				}
			],
		},
		{
			name:"Molecules",
			icon:"",
			iconAltText:"",
			path:"",
			subitem:[
				{
					name:"Form"
				}
			],
		},
		{
			name:"Organisms",
			icon:"",
			iconAltText:"",
			path:"",
			subitem:[
				{
					name:"CTA"
				}
			],
		},
		{
			name:"Template",
			icon:"",
			iconAltText:"",
			path:"",
			subitem:[
				{
					name:"Template Landing"
				}
			],
		},
		{
			name:"Pages",
			icon:"",
			iconAltText:"",
			path:"",
			subitem:[
				{
					name:"Landingpage"
				}
			],
		}
	]


</script>


<!--name-->
	{#each navigation as nav}
		<a href={nav.path} class=" mt-8 bg-indigo-800 text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md" >
			<!-- Heroicon name: outline/home -->

			<!--use this component later-->
			<!--imageOrSvg url={nav.icon} alt={nav.iconAltText} />

				<svg class="mr-4 h-6 w-6 flex-shrink-0 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
					<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
				</svg>
			-->
			{nav.name}
		</a>

	<!--subitems-->
		{#each nav.subitem as subitem}
			<span
				class="px-4 py-2 text-white text-sm flex align-center w-max">
				{subitem.name}
			</span>
		{/each}
	{/each}