<script lang="ts">
  import CardDestinations from "$lib/components/CardDestinations.svelte";
  import SectionHeader from "$lib/components/SectionHeader.svelte";
  import SectionBg002 from "$lib/sectionComponents/SectionBg002.svelte";

  const data = [
    {
      destName: "MARS",
      destPromoText: "Have you ever been to the red planet?",
      destPrice: "375.000 €",
      routePath: "/spacetravel/destination/mars",
      destImagePath: "/planets/mars.png",
      imgPosition: "left",
      imgSize: "cover",
      destImageName: "",
      destImageAltText: "",
    },
    {
      destName: "MOON",
      destPromoText: "Dancing in the moonlight, everybody.",
      destPrice: "300.000 €",
      routePath: "/spacetravel/destination/moon",
      destImagePath: "/planets/moon.png",
      imgPosition: "left",
      imgSize: "cover",
      destImageName: "",
      destImageAltText: "",
    },
    {
      destName: "VENUS",
      destPromoText: "Are you ready to explore the planet?",
      destPrice: "450.000 €",
      routePath: "/spacetravel/destination/venus",
      destImagePath: "/planets/venus.png",
      imgPosition: "left",
      imgSize: "cover",
      destImageName: "",
      destImageAltText: "",
    },
  ];
</script>

<SectionBg002>
  <SectionHeader title="Destinations" />
  <div
    class="grid justify-center justify-self-center mx-auto max-w-7xl gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
  >
    {#each data as data}
      <div class="grid col-span-1">
        <CardDestinations
          destName={data.destName}
          destPromoText={data.destPromoText}
          destPrice={data.destPrice}
          routePath={data.routePath}
          destImagePath={data.destImagePath}
          imgPosition={data.imgPosition}
          imgSize={data.imgSize}
          destImageName={data.destImageName}
          destImageAltText={data.destImageAltText}
        />
      </div>
    {/each}
  </div>
</SectionBg002>
