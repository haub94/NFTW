<script lang="ts">
  import CardDestinations from "$lib/components/CardDestinations.svelte";
  import SectionHeader from "$lib/components/SectionHeader.svelte";
  import SectionBg002 from "$lib/sectionComponents/SectionBg002.svelte";

  const data = [
    {
      title: "MARS",
      caption: "Have you ever been to the red planet?",
      price: "375.000 €",
      path: "/spacetravel/destination/mars",
      img: "/planets/mars.png",
      imgPosition: "left",
      imgSize: "cover",
    },
    {
      title: "MOON",
      caption: "Dancing in the moonlight, everybody.",
      price: "300.000 €",
      path: "/spacetravel/destination/moon",
      img: "/planets/moon.png",
      imgPosition: "left",
      imgSize: "cover",
    },
    {
      title: "VENUS",
      caption: "Are you ready to explore the planet?",
      price: "450.000 €",
      path: "/spacetravel/destination/venus",
      img: "/planets/venus.png",
      imgPosition: "left",
      imgSize: "cover",
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
          title={data.title}
          caption={data.caption}
          price={data.price}
          path={data.path}
          img={data.img}
          imgPosition={data.imgPosition}
          imgSize={data.imgSize}
        />
      </div>
    {/each}
  </div>
</SectionBg002>
