<script lang="ts">
	import IoMdPlanet from 'svelte-icons/io/IoMdPlanet.svelte';
	import FaUsers from 'svelte-icons/fa/FaUsers.svelte';
	import FaGrav from 'svelte-icons/fa/FaGrav.svelte';

	export let destination: string = "Mars";
	export let purpose: string = "Honeymoon";
	export let completedTrips: string = "99";


	let destinationImage: string = "";

	switch (destination) {
		case "Moon":
			destinationImage = "/planetsWithoutBg/moon.webp";
			break;
		case "Mars":
			destinationImage = "/planetsWithoutBg/mars.webp";
			break;
		case "Venus":
			destinationImage = "/planetsWithoutBg/venus.webp";
			break;
	
		default:
			break;
	}

	const statsTemplate = [
		{
			header: "destination",
			value: destination,
			icon: IoMdPlanet
		},
		{
			header: "purpose",
			value: purpose,
			icon: FaGrav
		},
		{
			header: "Completed trips",
			value: completedTrips,
			icon: FaUsers
		}
	]

</script>

<div class="flex flex-col bg-NFTW-blue-900 p-2 rounded-xl border-2 border-NFTW-blue-700 w-80 mb-12">
	<!--image-->
	<div class="w-full p-4" class:p-4={destination != "Moon"}> <!--moon is smaller than the other, so give the other padding-->
		<div class="bg-no-repeat bg-contain bg-center w-full h-96" style="background-image: url({destinationImage})"></div>
	</div>
	
	<div class:pt-8={destination === "Moon"}></div>
		<!--stats-->
		{#each statsTemplate as stat}
			<div class="mt-2 bg-NFTW-blue-200 grid grid-cols-1 w-full rounded-xl">
				<div class="relative overflow-hidden bg-none px-4 py-1 sm:px-6">
					<div class="absolute w-12 h-12 rounded-md bg-NFTW-lila-800 text-NFTW-lila-300 p-1">
						<svelte:component this={stat.icon} />
					</div>
					<p class="ml-16 truncate text-sm font-medium text-NFTW-black-500 uppercase">{stat.header}</p>
					<div class="ml-16 flex items-baseline">
						<p class="text-2xl font-semibold text-NFTW-black-500">{stat.value}</p>
					</div>
				</div>
			</div>
		{/each}
	</div>





  