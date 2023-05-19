<script lang="ts">
  import CardDestinations from "$lib/components/CardDestinations.svelte";
  import SectionHeader from "$lib/components/SectionHeader.svelte";
  import SectionBg002 from "$lib/sectionComponents/SectionBg002.svelte";
  import { dev } from "$app/environment";
  
  import type { PageData } from "./$types";
  import type { DestinationData } from "../../../../../prisma/tableInterfaces";
  
  export let data: PageData;

  let DESTINATION_DATA: DestinationData[];

  //@ts-ignore
	({ DESTINATION_DATA } = data);
		
		if (dev) {
			console.log('DESTINATION_DATA @ clientStories :>> ', DESTINATION_DATA);
		}
	
</script>

<SectionBg002>
  <SectionHeader title="Destinations" />
  <div
    class="grid justify-center justify-self-center mx-auto max-w-7xl gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
    {#each DESTINATION_DATA as data}
      <div class="grid col-span-1">
        <CardDestinations
          destName={data.name}
          destPromoText={data.promoText}
          destPrice={data.price}
          routePath={data.routePath}
          destImagePath={data.image}
          imgPosition={'left'}
          imgSize={'cover'}
          destImageName={''}
          destImageAltText={''} />
      </div>
    {/each}
  </div>
</SectionBg002>
