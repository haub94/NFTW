<script lang="ts">
  import { fade, slide } from "svelte/transition";
  import { sineIn, quintInOut } from "svelte/easing";

  export let publicVar = "defaultVaule";
  let var1: string = "text_var";

  function hello(): number {
    console.log("hello :>> ");
    return 1;
  }
</script>

<div class="group header-bg h-40 overflow-hidden bg-center relative bg-cover">
  <img
    class="transition delay-50 ease-in-out group-hover:scale-150 group-hover:rotate-2 absolute"
    style=" transition-duration: 10000ms;"
    src="/milkyway.png"
    alt="milkyway"
  />
  <div
    class="group flex flex-row bg-black opacity-80 p-5 text-3xl text-white mx-auto py-4 md:py-4 md:flex-row absolute w-full mt-10"
  >
    <a href="/"><p>NFTW Adventures</p></a>
    <a
      href="/"
      class="ml-48 pt-1 text-lg hover:scale-125 hover:transition-all hover:text-blue-600 ease-in-out duration-300"
      >Home</a
    >
    <a
      href="/test"
      class="ml-12 pt-1 text-lg hover:scale-125 hover:transition-all hover:text-blue-600 ease-in-out duration-300"
      >Test</a
    >
    <a
      href="/spacetravel"
      class="ml-12 pt-1 text-lg hover:scale-125 hover:transition-all hover:text-blue-600 ease-in-out duration-300"
      >Spacetravel</a
    >
    <a
      href="/clientStories"
      class="ml-12 pt-1 text-lg hover:scale-125 hover:transition-all hover:text-blue-600 ease-in-out duration-300"
      >Client stories</a
    >
    <a
      href="/contact"
      class="ml-12 pt-1 text-lg hover:scale-125 hover:transition-all hover:text-blue-600 ease-in-out duration-300"
      >Contact</a
    >
    <a
      href="/imprint"
      class="ml-12 pt-1 text-lg hover:scale-125 hover:transition-all hover:text-blue-600 ease-in-out duration-300"
      >Imprint</a
    >
    <a
      href="/privacyPolicy"
      class="ml-12 pt-1 text-lg hover:scale-125 hover:transition-all hover:text-blue-600 ease-in-out duration-300"
      >Privacy policy</a
    >
    <a
      href="/termsOfUse"
      class="ml-12 pt-1 text-lg hover:scale-125 hover:transition-all hover:text-blue-600 ease-in-out duration-300"
      >Terms of use</a
    >
  </div>
</div>

<style>
</style>
