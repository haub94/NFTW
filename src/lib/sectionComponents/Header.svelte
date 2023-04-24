<script lang="ts">
  import { dev } from "$app/environment";
</script>

{#if dev}
  <div class="fixed top-1 left-3 z-50 flex text-white text-3xl gap-6">
    <p class="sm:hidden">mobil</p>
    <p class="hidden sm:block md:hidden">sm</p>
    <p class="hidden md:block lg:hidden">md</p>
    <p class="hidden lg:block xl:hidden">lg</p>
    <p class="hidden xl:block">xl</p>
    <a
      href="/test"
      class="pt-1 text-lg hover:scale-125 hover:transition-all hover:text-NFTW-pink-500 ease-in-out duration-300"
      >Test</a
    >
    <a
      href="/test2"
      class="pt-1 text-lg hover:scale-125 hover:transition-all hover:text-NFTW-pink-500 ease-in-out duration-300"
      >Test 2</a
    >
  </div>
{/if}

<div class="group header-bg h-40 overflow-hidden bg-center relative bg-cover">
  <img
    class="transition delay-50 ease-in-out group-hover:scale-150 group-hover:rotate-2 absolute"
    style=" transition-duration: 10000ms;"
    src="/milkyway.png"
    alt="milkyway"
  />

  <div
    class="group flex flex-row bg-NFTW-black-800 opacity-80 p-5 text-3xl text-white mx-auto py-4 md:py-4 md:flex-row absolute w-full mt-10"
  >
    <div class="mx-auto max-w-7xl px-6 lg:px-8 xl:grid xl:grid-cols-2">
      <a href="/"><p>NFTW Adventures</p></a>
      <div
        class="grid grid-cols-3 gap-8 justify-self-center sm:justify-self-end"
      >
        <a
          href="/"
          class="pt-1 text-lg hover:scale-125 hover:transition-all hover:text-NFTW-blue-400 ease-in-out duration-300"
          >Home</a
        >
        <a
          href="/spacetravel"
          class="pt-1 text-lg hover:scale-125 hover:transition-all hover:text-NFTW-blue-400 ease-in-out duration-300"
          >Spacetravel</a
        >
        <a
          href="/clientStories"
          class="pt-1 text-lg hover:scale-125 hover:transition-all hover:text-NFTW-blue-400 ease-in-out duration-300"
          >Client stories</a
        >
      </div>
    </div>
  </div>
</div>

<style>
</style>
