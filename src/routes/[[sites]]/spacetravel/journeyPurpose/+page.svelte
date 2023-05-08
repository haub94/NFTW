<script lang="ts">
  import CardDestinations from "$lib/components/CardDestinations.svelte";
  import SectionHeader from "$lib/components/SectionHeader.svelte";
  import SectionBg001 from "$lib/sectionComponents/SectionBg001.svelte";
  import type { PageData } from "./$types";
  export let data: PageData;
</script>

<SectionBg001 title1of2="" caption="">
  <div class="col-span-2">
    <SectionHeader title="Journey Purposes" />
  </div>
  {#each data.JOURNEY_PURPOSES as data}
    <div class="col-span-1">
      <CardDestinations
        jpName={data.name}
        jpPromoText={data.promoText}
        jpPrice={data.price}
        routePath={data.routePath}
        jpImagePath={''}
        imgPosition={''}
        imgSize={''}
        jpImageName={''}
        jpImageAltText={''} />
    </div>
  {/each}
</SectionBg001>
