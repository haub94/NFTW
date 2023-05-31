<script lang="ts">
  import ButtonsDestJpGic from "$lib/components/ButtonsDestJpGic.svelte";
  import DetailContent from "$lib/sectionComponents/DetailContent.svelte";
  import DividerTextIFrame from "$lib/sectionComponents/DividerTextIFrame.svelte";
  import SectionBg002 from "$lib/sectionComponents/SectionBg002.svelte";
  import { selectImageFromDb } from "$lib/functions/selectImageFromDb.ts";

  //import ts types
  import type { PageData } from "./$types";
  import type { ImageData } from "../../../../../../prisma/tableInterfaces";
  import ButtonLink from "$lib/components/ButtonLink.svelte";

  export let data: PageData;

  let IMAGES: ImageData[];
  ({ IMAGES } = data);

  let iFrameTitle: string = "Our constant companion";
  let iFrameCaption: string =
    "The Moon is the Earth's only natural satellite. It has a diameter of about 3,474 kilometers, making it the fifth-largest moon in the solar system. The Moon's surface is characterized by craters, mountains, valleys, and maria (Latin for 'seas'). The gravity on the Moon is only about 1/6th of Earth's gravitational pull. The average distance between Earth and the Moon is about 384,400 kilometers. The Moon is intricately connected to tides, as its gravitational force affects the water on Earth.";
</script>

<svelte:head>
  <title>Moon</title>
  <meta name="description" content="Let's go to Moon" />
</svelte:head>

<SectionBg002 paddingBottom="0px" paddingTop="0px">
  <!--pass severel props to DatailContent with valiues from data.DESTINATIONS and from data.HOTELS-->
  <DetailContent
    isDestComponent={true}
    destName={data.DESTINATIONS.name}
    destPromoText={data.DESTINATIONS.promoText}
    destImage={selectImageFromDb(data.DESTINATIONS.image, IMAGES)}
    destServices={data.DESTINATIONS.services}
  />
  <ButtonLink />
  <DividerTextIFrame
    iFrameHeight={450}
    height={750}
    title={iFrameTitle}
    caption={iFrameCaption}
  />
  <DetailContent
    isDestHotelComponent={true}
    destHotelName={data.HOTELS.name}
    destHotelImage={selectImageFromDb(data.HOTELS.image, IMAGES)}
    destHotelDescription={data.HOTELS.description}
    destHotelServices={data.HOTELS.services}
  />
  <ButtonsDestJpGic />
</SectionBg002>
