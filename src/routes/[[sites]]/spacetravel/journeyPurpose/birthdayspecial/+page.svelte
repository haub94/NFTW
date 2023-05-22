<script lang="ts">
  import ButtonsDestJpGic from "$lib/components/ButtonsDestJpGic.svelte";
  import DetailContent from "$lib/sectionComponents/DetailContent.svelte";
  import SectionBg002 from "$lib/sectionComponents/SectionBg002.svelte";
  import type { PageData } from "./$types";
  export let data: PageData;
</script>

<svelte:head>
  <title>Birthday</title>
  <meta name="description" content="Let's celebrate together" />
</svelte:head>

<SectionBg002 paddingBottom="0px" paddingTop="0px">
  <!--pass severel props to DatailContent with valiues from data.JOURNEY_PURPOSES-->
  <DetailContent
    isJPComponent={true}
    jpName={data.JOURNEY_PURPOSES.name}
    jpPromotext={data.JOURNEY_PURPOSES.promoText}
    jpPrice={data.JOURNEY_PURPOSES.price}
    jpIncludedServices={data.JOURNEY_PURPOSES.inclServices}
    jpImageName={''}
    jpImagePath={data.JOURNEY_PURPOSES.image}
    jpImageAltText={''} />
  <ButtonsDestJpGic />
</SectionBg002>
