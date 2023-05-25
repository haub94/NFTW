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

</script>

<svelte:head>
  <title>Venus</title>
  <meta name="description" content="Let's go to Venus" />
</svelte:head>

<SectionBg002 
  paddingBottom="0px" 
  paddingTop="0px">
  <!--pass severel props to DatailContent with valiues from data.DESTINATIONS and from data.HOTELS-->
  <DetailContent
    isDestComponent={true}
    destName={data.DESTINATIONS.name}
    destPromoText={data.DESTINATIONS.promoText}
    destImage={selectImageFromDb(data.DESTINATIONS.image, IMAGES)}
    destServices={data.DESTINATIONS.services} />
  <DividerTextIFrame iFrameHeight={450} height={750} />
  <DetailContent
    isDestHotelComponent={true}
    destHotelName={data.HOTELS.name}
    destHotelImage={selectImageFromDb(data.HOTELS.image, IMAGES)}
    destHotelDescription={data.HOTELS.description}
    destHotelServices={data.HOTELS.services} />
  <ButtonsDestJpGic />
</SectionBg002>
