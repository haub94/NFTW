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
  <InfoSection
    title="Where to go. When to go."
    text1="Lorem Ipsum Dolor 1"
    text2="Lorem Ipsum Dolor 2"
    img1="/spacetravel/spaceWalk.webp"
    img2="/spacetravel/spaceWalkGroup.webp"
    img3="/spacetravel/astronautLove.webp"
    img4="/spacetravel/walkOnPlanet.webp"
  />
</SectionBg002>

<SectionBg001 title1of2="" title2of2="" caption="">
  <CardSpacetravel
    imagePath="/planets/moon-planet.webp"
    name="Destination"
    promoText={destinationCaption}
    imagePosition="left"
    imageSize="cover"
    routePath="/spacetravel/destination"
  />
  <CardSpacetravel
    imagePath="/planets/blue-planet.webp"
    name="Journey Purpose"
    promoText={purposeCaption}
    imagePosition="left"
    imageSize="cover"
    routePath="/spacetravel/journeyPurpose"
  />
</SectionBg001>
