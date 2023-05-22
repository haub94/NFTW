<script lang="ts">
  import CardSpacetravel from "$lib/components/CardSpacetravel.svelte";
  import SectionHeader from "$lib/components/SectionHeader.svelte";
  import DividerTextImage from "$lib/sectionComponents/DividerTextImage.svelte";
  import SectionBg001 from "$lib/sectionComponents/SectionBg001.svelte";
  import SectionBg002 from "$lib/sectionComponents/SectionBg002.svelte";

  let destinationCaption: string =
    "Explore the ultimate adventure in space! Journey to distant planets where alien worlds await you. Immerse yourself in breathtaking landscapes and experience unforgettable moments. Book your trip now and get up close and personal with the universe!";
  let purposeCaption: string =
    "No matter the reason you want to go to space, we offer tailor-made space experiences for every occasion. Let yourself be enchanted by the infinite expanse of the universe and experience unforgettable adventures in space!";
  let dividerCaption: string =
    "Our packages are divided into destinations and journey purposes. You have the option to first choose a planet and then calmly select the appropriate trip. Alternatively, you can do it the other way around.";
  let dividerCaption2: string =
    "On the detail pages, you can learn about our services and step by step get closer to your dream journey. For our birthday specials and honeymoon offers, you can choose an individual travel date afterward.";
  let dividerCaption3: string =
    "After successfully completing the configuration, you can get in touch with us and provide us with your information using the form on the 'Get In Contact' page.";
</script>

<SectionBg002>
  <SectionHeader title="Spacetravel" />
  <DividerTextImage
    title="Where to go. When to go."
    caption={dividerCaption}
    caption2={dividerCaption2}
    caption3={dividerCaption3}
    img="/spacetravel/spaceWalkGroup.webp"
    imgSize="cover"
    imgPosition="center"
    imgHeight="90vh"
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
