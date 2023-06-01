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

  let iFrameTitle: string = "About this breathtaking planet";
  let iFrameCaption: string =
    "Venus is the second innermost planet in our solar system. It is similar in size to Earth, with a diameter of about 12,104 kilometers. Venus has an extreme atmosphere consisting mostly of carbon dioxide and dense clouds of sulfuric acid. The surface temperature on Venus is extremely high, reaching about 462 degrees Celsius, making it the hottest planet in our solar system. Venus rotates very slowly on its axis and has a retrograde rotation, meaning it rotates in the opposite direction of most other planets. Due to its thick cloud cover, the surface of Venus is not visible to the naked eye.";
</script>

<svelte:head>
  <title>Venus</title>
  <meta name="description" content="Let's go to Venus" />
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
