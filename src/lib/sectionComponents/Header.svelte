<script lang="ts">
  import { dev } from "$app/environment";

  let menuOpened = false;
  function openMenu() {
    menuOpened = true;
  }
  function closeMenu() {
    menuOpened = false;
  }
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

<div
  class="group header-bg xl:h-52 lg:h-48 sm:h-44 h-40 overflow-hidden bg-center relative bg-cover"
>
  <img
    class="transition delay-50 ease-in-out group-hover:scale-150 group-hover:rotate-2 absolute"
    style=" transition-duration: 10000ms;"
    src="/milkyway.png"
    alt="milkyway"
  />

  <header
    class="bg-NFTW-bg bg-opacity-80 absolute w-full mt-10 sm:mt-12 lg:mt-14 xl:mt-16"
  >
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <a href="/" class="-m-1.5 p-1.5" on:click={closeMenu}>
          <span class="sr-only">Your Company</span>
          <img
            class="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            alt=""
          />
        </a>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-NFTW-white"
          on:click={openMenu}
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <a
          href="/"
          class="text-lg font-semibold leading-6 text-NFTW-white hover:scale-125 hover:transition-all hover:text-NFTW-blue-400 ease-in-out duration-300"
          on:click={closeMenu}>Home</a
        >

        <a
          href="/spacetravel"
          class="text-lg font-semibold leading-6 text-NFTW-white hover:scale-125 hover:transition-all hover:text-NFTW-blue-400 ease-in-out duration-300"
          on:click={closeMenu}>Spacetravel</a
        >

        <a
          href="/clientStories"
          class="text-lg font-semibold leading-6 text-NFTW-white hover:scale-125 hover:transition-all hover:text-NFTW-blue-400 ease-in-out duration-300"
          on:click={closeMenu}>Client Stories</a
        >

        <a
          href="/getInContact"
          class="text-lg font-semibold leading-6 text-NFTW-white hover:scale-125 hover:transition-all hover:text-NFTW-blue-400 ease-in-out duration-300"
          on:click={closeMenu}>Get In Contact</a
        >
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end" />
    </nav>
    <!-- Mobile menu, show/hide based on menu open state. -->
    {#if menuOpened}<div class="lg:hidden z-20" role="dialog" aria-modal="true">
        <!-- Background backdrop, show/hide based on slide-over state. -->
        <div class="fixed inset-0 z-30" />
        <div
          class="fixed inset-y-0 right-0 z-30 w-full overflow-y-auto bg-NFTW-bg px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10"
        >
          <div class="flex items-center justify-between">
            <a href="/" class="-m-1.5 p-1.5" on:click={closeMenu}>
              <span class="sr-only">Your Company</span>
              <img
                class="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt=""
              />
            </a>
            <button
              type="button"
              class="-m-2.5 rounded-md p-2.5 text-NFTW-white"
              on:click={closeMenu}
            >
              <span class="sr-only">Close menu</span>
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-NFTW-blue-200">
              <div class="space-y-2 py-6">
                <a
                  href="/"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-NFTW-white hover:bg-gray-800 hover:transition-all hover:text-NFTW-blue-400 ease-in-out duration-500"
                  on:click={closeMenu}>Home</a
                >

                <a
                  href="/spacetravel"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-NFTW-white hover:bg-gray-800 hover:transition-all hover:text-NFTW-blue-400 ease-in-out duration-500"
                  on:click={closeMenu}>Spacetravel</a
                >

                <a
                  href="/clientStories"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-NFTW-white hover:bg-gray-800 hover:transition-all hover:text-NFTW-blue-400 ease-in-out duration-500"
                  on:click={closeMenu}>Client Stories</a
                >

                <a
                  href="/getInContact"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-NFTW-white hover:bg-gray-800 hover:transition-all hover:text-NFTW-blue-400 ease-in-out duration-500"
                  on:click={closeMenu}>Get In Contact</a
                >
              </div>
              <div class="py-6" />
            </div>
          </div>
        </div>
      </div>{/if}
  </header>
</div>

<style>
</style>
