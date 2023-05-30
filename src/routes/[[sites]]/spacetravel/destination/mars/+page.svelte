<script lang="ts">
  import ButtonsDestJpGic from "$lib/components/ButtonsDestJpGic.svelte";
  import DetailContent from "$lib/sectionComponents/DetailContent.svelte";
  import DividerTextIFrame from "$lib/sectionComponents/DividerTextIFrame.svelte";
  import SectionBg002 from "$lib/sectionComponents/SectionBg002.svelte";
  import { selectImageFromDb } from "$lib/functions/selectImageFromDb.ts";

  //import ts types
  import type { PageData } from "./$types";
  import type { ImageData } from "../../../../../../prisma/tableInterfaces";

  export let data: PageData;

  let IMAGES: ImageData[];
  ({ IMAGES } = data);

  let iFrameTitle: string = "Beauty in the distance";
  let iFrameCaption: string =
    "Mars is the fourth planet from the Sun and the outer neighbor of Earth. It has a diameter of about 6,792 kilometers, approximately half the size of Earth. Mars has a thin atmosphere consisting mainly of carbon dioxide. The Martian surface features impressive geographic landmarks, including the largest volcano and the deepest canyon in the solar system. Mars has polar regions covered with frozen water and carbon dioxide ice. Scientists have found evidence of past liquid water on Mars, suggesting the possibility of microbial life in the past.";
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
    destImage={selectImageFromDb(data.DESTINATIONS.image, IMAGES)}
    destServices={data.DESTINATIONS.services}
  />
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
