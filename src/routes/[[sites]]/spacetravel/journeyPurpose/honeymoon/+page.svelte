<script lang="ts">
  import ButtonsDestJpGic from "$lib/components/ButtonsDestJpGic.svelte";
  import DetailContent from "$lib/sectionComponents/DetailContent.svelte";
  import SectionBg002 from "$lib/sectionComponents/SectionBg002.svelte";
  import { selectImageFromDb } from "$lib/functions/selectImageFromDb.ts";

  //import ts-types
  import type { PageData } from "./$types";
  import type { ImageData } from "../../../../../../prisma/tableInterfaces";
  import ButtonLink from "$lib/components/ButtonLink.svelte";

  export let data: PageData;

  let IMAGES: ImageData[];
  ({ IMAGES } = data);
</script>

<svelte:head>
  <title>Honeymoon</title>
  <meta
    name="description"
    content="Something special for your lovely vacation"
  />
</svelte:head>

<SectionBg002 paddingBottom="0px" paddingTop="0px">
  <!--pass severel props to DatailContent with valiues from data.JOURNEY_PURPOSES-->
  <DetailContent
    isJPComponent={true}
    jpName={data.JOURNEY_PURPOSES.name}
    jpPromotext={data.JOURNEY_PURPOSES.promoText}
    jpPrice={data.JOURNEY_PURPOSES.price}
    jpIncludedServices={data.JOURNEY_PURPOSES.inclServices}
    jpImage={selectImageFromDb(data.JOURNEY_PURPOSES.image, IMAGES)}
  />
  <ButtonLink />
  <ButtonsDestJpGic />
</SectionBg002>
