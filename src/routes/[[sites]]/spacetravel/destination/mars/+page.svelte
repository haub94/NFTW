<script lang="ts">
  import ButtonsDestJpGic from "$lib/components/ButtonsDestJpGic.svelte";
  import DetailContent from "$lib/sectionComponents/DetailContent.svelte";
  import DividerTextIFrame from "$lib/sectionComponents/DividerTextIFrame.svelte";
  import SectionBg002 from "$lib/sectionComponents/SectionBg002.svelte";
  import type { PageData } from "./$types";
  export let data: PageData;
</script>

<svelte:head>
  <title>Mars</title>
  <meta name="description" content="Let's go to Mars" />
</svelte:head>

<SectionBg002 paddingBottom="0px" paddingTop="0px">
  <!--pass severel props to DatailContent with valiues from data.DESTINATIONS and from data.HOTELS-->
  <DetailContent
    isDestComponent={true}
    destName={data.DESTINATIONS.name}
    destPromoText={data.DESTINATIONS.promoText}
    destImagePath={data.DESTINATIONS.image}
    destServices={data.DESTINATIONS.services} />
  <DividerTextIFrame iFrameHeight={450} height={750} />
  <DetailContent
    isDestHotelComponent={true}
    destHotelName={data.HOTELS.name}
    destHotelImagePath={data.HOTELS.image}
    destHotelDescription={data.HOTELS.description}
    destHotelServices={data.HOTELS.services} />
  <ButtonsDestJpGic />
</SectionBg002>
