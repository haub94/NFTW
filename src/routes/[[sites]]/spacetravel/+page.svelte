<script lang="ts">
  import CardSpacetravel from "$lib/components/CardSpacetravel.svelte";
  import SectionHeader from "$lib/components/SectionHeader.svelte";
  import InfoSection from "$lib/sectionComponents/InfoSection.svelte";
  import SectionBg001 from "$lib/sectionComponents/SectionBg001.svelte";
  import SectionBg002 from "$lib/sectionComponents/SectionBg002.svelte";

  let destinationCaption: string =
    "Choose your Destination Choose your Destination Choose your Destination Choose your Destination Choose your Destination Choose your Destination Choose your Destination Choose your Destination Choose your Destination Choose your Destination Choose your Destination Choose your Destination Choose your Destination Choose your Destination Choose your Destination ";
  let purposeCaption: string =
    "Choose your Journey Purpose Choose your Journey Purpose Choose your Journey Purpose Choose your Journey Purpose Choose your Journey Purpose Choose your Journey Purpose Choose your Journey Purpose Choose your Journey Purpose Choose your Journey Purpose Choose your Journey Purpose Choose your Journey Purpose Choose your Journey Purpose Choose your Journey Purpose ";
</script>

<SectionBg002>
  <SectionHeader title="Spacetravel" />
  <InfoSection />
</SectionBg002>

<SectionBg001 title1of2="" title2of2="" caption="">
  <CardSpacetravel
    imagePath="/planets/moon-planet.png"
    name="Destination"
    promoText={destinationCaption}
    imagePosition="left"
    imageSize="cover"
    routePath="/spacetravel/destination"
  />
  <CardSpacetravel
    imagePath="/planets/blue-planet.png"
    name="Journey Purpose"
    promoText={purposeCaption}
    imagePosition="left"
    imageSize="cover"
    routePath="/spacetravel/journeyPurpose"
  />
</SectionBg001>
