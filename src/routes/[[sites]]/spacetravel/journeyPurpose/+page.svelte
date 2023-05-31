<script lang="ts">
  import CardDestinations from "$lib/components/CardDestinations.svelte";
  import SectionHeader from "$lib/components/SectionHeader.svelte";
  import SectionBg002 from "$lib/sectionComponents/SectionBg002.svelte";
  import { dev } from "$app/environment";
  import { selectImageFromDb } from "$lib/functions/selectImageFromDb.ts";

  //import ts types
  import type { PageData } from "./$types";
  import type { JourneyPurposeData } from "../../../../../prisma/tableInterfaces";
  import type { ImageData } from "../../../../../prisma/tableInterfaces";
  import ButtonLink from "$lib/components/ButtonLink.svelte";

  export let data: PageData;

  let JOURNEY_PURPOSE_DATA: JourneyPurposeData[];
  let IMAGES: ImageData[];

  //@ts-ignore
  ({ JOURNEY_PURPOSE_DATA } = data);
  ({ IMAGES } = data);

  if (dev) {
    console.log(
      "JOURNEY_POURPES_DATA @ journey purposes :>> ",
      JOURNEY_PURPOSE_DATA
    );
  }
</script>

<svelte:head>
  <title>Journey Purpose</title>
  <meta name="description" content="Let's choose your special event" />
</svelte:head>

<SectionBg002>
  <SectionHeader
    title="Journey Purposes"
    description="Unlock the mysteries of the universe and embark on a transcendent journey to space. Whether on your birthday, your honeymoon or on a phototour, yearning for adventure, this is your chance to witness the grandeur of the cosmos firsthand."
  />
  <ButtonLink />
  <div
    class="grid justify-center justify-self-center mx-auto max-w-7xl gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-16"
  >
    <!--going over the JOURNEY_PURPOSE_DATA to render individual cards for each journey purpose-->
    {#each JOURNEY_PURPOSE_DATA as data}
      <!--The card component (CardDestinations) receives various properties-->
      <div class="grid col-span-1">
        <CardDestinations
          jpName={data.name}
          jpPromoText={data.promoText}
          jpPrice={data.price}
          routePath={data.routePath}
          jpImage={selectImageFromDb(data.image, IMAGES)}
          imgPosition={"left"}
          imgSize={"cover"}
        />
      </div>
    {/each}
  </div>
</SectionBg002>
