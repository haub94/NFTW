<script lang="ts">
  import CardDestinations from "$lib/components/CardDestinations.svelte";
  import SectionHeader from "$lib/components/SectionHeader.svelte";
  import SectionBg002 from "$lib/sectionComponents/SectionBg002.svelte";
  import { dev } from "$app/environment";
  import { selectImageFromDb } from "$lib/functions/selectImageFromDb.ts";

  //import ts types
  import type { PageData } from "./$types";
  import type { DestinationData } from "../../../../../prisma/tableInterfaces";
  import type { ImageData } from "../../../../../prisma/tableInterfaces";
  import ButtonLink from "$lib/components/ButtonLink.svelte";

  export let data: PageData;

  let DESTINATION_DATA: DestinationData[];
  let IMAGES: ImageData[];

  //@ts-ignore
  ({ DESTINATION_DATA } = data);
  ({ IMAGES } = data);

  if (dev) {
    console.log("DESTINATION_DATA @ destinations :>> ", DESTINATION_DATA);
  }
</script>

<svelte:head>
  <title>Destination</title>
  <meta name="description" content="Let's find your dream destination" />
</svelte:head>

<SectionBg002>
  <SectionHeader
    title="Destinations"
    description="Embark on a thrilling journey through the cosmos and explore three captivating celestial destinations: the Moon, Mars, and Venus. Discover the wonders of the planets now."
  />
  <ButtonLink />
  <div
    class="grid justify-center justify-self-center mx-auto max-w-7xl gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-16"
  >
    <!--going over the DESTINATION_DATA to render individual cards for each destination-->
    {#each DESTINATION_DATA as data}
      <!--The card component (CardDestinations) receives various properties-->
      <div class="grid col-span-1">
        <CardDestinations
          destName={data.name}
          destPromoText={data.promoText}
          destPrice={data.price}
          routePath={data.routePath}
          destImage={selectImageFromDb(data.image, IMAGES)}
          imgPosition={"left"}
          imgSize={"cover"}
        />
      </div>
    {/each}
  </div>
</SectionBg002>
