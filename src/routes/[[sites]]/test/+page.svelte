<script lang="ts">
  import CardSpacetravel from "$lib/components/CardSpacetravel.svelte";
  import SectionBg002 from "$lib/sectionComponents/SectionBg002.svelte";
  import Card from "../../../lib/components/Card.svelte";

  const planets = [
    "/planets/green-planet.webp",
    "/planets/moon-planet.webp",
    "/planets/red-planet.webp",
    "/planets/blue-planet.webp",
    "/planets/dark-planet.webp",
    "/planets/grey-planet.webp",
    "/planets/network-planet.webp",
    "/planets/rainbow-planet.webp",
    "/planets/striped-planet.webp",
    "/planets/water-planet.webp",
  ];
  function randomImg() {
    const random = Math.floor(Math.random() * planets.length);
    const image = planets[random];
    return image;
  }

  const titles = [
    "Stellarion",
    "Nebulor",
    "Aurorium",
    "Cosmicor",
    "Galaxia",
    "Celestion",
    "Etherea",
    "Astrova",
    "Spirala",
    "Luminar",
  ];
  function randomTitle() {
    const random = Math.floor(Math.random() * titles.length);
    const title = titles[random];
    return title;
  }

  const captions = [
    "A sparkling gem among the stars with glittering oceans and luminescent skies.",
    "A colorful wonderland of swirling clouds and breathtaking celestial displays.",
    "A planet of golden hues and shimmering light shows that dance across the horizon.",
    "A cosmic canvas of vibrant colors and awe-inspiring astronomical phenomena.",
    "A majestic planet that glows with the light of millions of stars, a true galactic paradise.",
    "A tranquil haven of serene blue waters and ethereal clouds that drift effortlessly through the air.",
    "A planet shrouded in mystery and beauty, with shimmering auroras and misty mountains.",
    "A stunning planet of vibrant hues and stunning vistas, where every view is a work of art.",
    "A planet of swirling, mesmerizing colors and incredible cosmic displays.",
    "A radiant planet that glimmers with an otherworldly light, a true jewel of the universe.",
  ];
  function randomCaption() {
    const random = Math.floor(Math.random() * captions.length);
    const caption = captions[random];
    return caption;
  }

  interface CardArrayProps {
    img: String;
    title: String;
    caption: String;
  }

  /* const cardArray: CardArrayProps[] = [];
  for (let i = 0; i < titles.length; i++) {
    cardArray[i].img = randomImg();
    cardArray[i].title = randomTitle();
    cardArray[i].caption = randomCaption();
  } */
</script>

<div class="flex min-h-screen w-full items-center justify-center bg-NFTW-bg">
  <div class="">
    <!---->

    <SectionBg002 />
    <!---->

    <div class="w-full h-1 m-20" />

    <div class="grid grid-cols-3 gap-10 p-20">
      <!--<Card img={randomImg()} title={randomTitle()} caption={randomCaption()} />-->
      <Card img={randomImg()} title={randomTitle()} caption={randomCaption()} />
      <Card img={randomImg()} title={randomTitle()} caption={randomCaption()} />
      <Card img={randomImg()} title={randomTitle()} caption={randomCaption()} />
      <Card img={randomImg()} title={randomTitle()} caption={randomCaption()} />
      <Card img={randomImg()} title={randomTitle()} caption={randomCaption()} />
    </div>
  </div>
</div>



<!--   iframes -->

<div class="hidden"> 

  <div class="bg-NFTW-bg">
    <div
    class="relative"
    style="overflow:hidden;border-radius:50%;background-color:black;width:450px;height:450px"
    >
    <iframe
    title="venus3D"
    src="https://solarsystem.nasa.gov/gltf_embed/2342"
    width="450px"
    height="450px"
    frameborder="0"
    class=""
    />
  </div>
</div>

<iframe
title="mars3D"
src="https://solarsystem.nasa.gov/gltf_embed/2372"
width="450px"
height="450px"
frameborder="0"
/>
<iframe
title="earth3D"
src="https://solarsystem.nasa.gov/gltf_embed/2393"
width="450px"
height="450px"
  frameborder="0"
  />
  <iframe
  title="moon3D"
  src="https://solarsystem.nasa.gov/gltf_embed/2366"
  width="450px"
  height="450px"
  frameborder="0"
  />
</div>
  
  <!---->
  
  <style>
</style>
