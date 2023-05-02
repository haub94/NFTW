<script lang="ts">
	import IoMdPlanet from 'svelte-icons/io/IoMdPlanet.svelte';
	import FaUsers from 'svelte-icons/fa/FaUsers.svelte';
	import FaGrav from 'svelte-icons/fa/FaGrav.svelte';

	export let destination: string = "Moon";
	export let purpose: string = "Honeymoon";
	export let passengers: string = "99";


	let destinationImage: string = "";

	switch (destination) {
		case "Moon":
			destinationImage = "/planetsWithoutBg/moon.webp";
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
			header: "passengers",
			value: passengers,
			icon: FaUsers
		}
	]

</script>

<div class="flex flex-col ">
	<!--image-->
	<div class="bg-no-repeat bg-contain bg-center w-full h-96 " style="background-image: url({destinationImage})"></div>
	<!--stats-->
	{#each statsTemplate as stat}
	<div>
		<div class="mt-2 bg-white grid grid-cols-1 w-full">
			<div class="relative overflow-hidden bg-none px-4 py-1 sm:px-6">
			<div>
				<div class="absolute w-12 h-12 rounded-md bg-NFTW-lila-800 text-NFTW-lila-300 p-1">
					<svelte:component this={stat.icon} />
				</div>
				<p class="ml-16 truncate text-sm font-medium text-gray-500 uppercase">{stat.header}</p>
			</div>
			<div class="ml-16 flex items-baseline">
				<p class="text-2xl font-semibold text-gray-900">{stat.value}</p>
				<div class="absolute inset-x-0 bottom-0 bg-gray-50 px-4 sm:px-6">
				</div>
			</div>
			</div>
		</div>
	</div>
{/each}
</div>




  