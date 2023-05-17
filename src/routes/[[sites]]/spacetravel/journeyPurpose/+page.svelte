<script lang="ts">
  import CardDestinations from "$lib/components/CardDestinations.svelte";
  import SectionHeader from "$lib/components/SectionHeader.svelte";
  import SectionBg002 from "$lib/sectionComponents/SectionBg002.svelte";
  import type { PageData } from "./$types";
  export let data: PageData;
</script>

<!-- 
<SectionBg002>
  <SectionHeader title="Destinations" />
  <div
    class="grid justify-center justify-self-center mx-auto max-w-7xl gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
  >
    {#each data as data}
      <div class="grid col-span-1">


 -->

<SectionBg002>
  <SectionHeader title="Journey Purposes" />
  <div
    class="grid justify-center justify-self-center mx-auto max-w-7xl gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
  >
    {#each data.JOURNEY_PURPOSES as data}
      <div class="grid col-span-1">
        <CardDestinations
          jpName={data.name}
          jpPromoText={data.promoText}
          jpPrice={data.price}
          routePath={data.routePath}
          jpImagePath={data.image}
          imgPosition={"left"}
          imgSize={"cover"}
          jpImageName={""}
          jpImageAltText={""}
        />
      </div>
    {/each}
  </div>
</SectionBg002>
