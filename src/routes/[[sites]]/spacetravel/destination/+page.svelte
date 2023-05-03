<script lang="ts">
  import CardDestinations from "$lib/components/CardDestinations.svelte";
  import SectionBg002 from "$lib/sectionComponents/SectionBg002.svelte";

  const data = [
    {
      name: "MARS",
      promoText: "Have you ever been to the red planet?",
      price: "375.000 €",
      path: "spacetravel/destination/mars",
      image: "/planets/mars.png",
      imgPosition: "left",
      imgSize: "cover",
    },
    {
      name: "MOON",
      promoText: "Dancing in the moonlight, everybody.",
      price: "300.000 €",
      path: "spacetravel/destination/moon",
      image: "/planets/moon.png",
      imgPosition: "left",
      imgSize: "cover",
    },
    {
      name: "VENUS",
      promoText: "Are you ready to explore the planet?",
      price: "450.000 €",
      path: "spacetravel/destination/venus",
      image: "/planets/venus.png",
      imgPosition: "left",
      imgSize: "cover",
    },
  ];
</script>

<SectionBg002>
  <div class="mx-auto max-w-4xl mb-20">
    <p
      class="mt-2 text-4xl font-bold tracking-tight justify-self-center text-center text-NFTW-white sm:text-5xl"
    >
      Destinations
    </p>
  </div>
  <div
    class="grid justify-center justify-self-center mx-auto max-w-7xl gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
  >
    {#each data as data}
      <div class="grid col-span-1">
        <CardDestinations
          name={data.name}
          promoText={data.promoText}
          price={data.price}
          path={data.path}
          image={data.image}
          imgPosition={data.imgPosition}
          imgSize={data.imgSize}
        />
      </div>
    {/each}
  </div>
</SectionBg002>
