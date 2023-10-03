<!--
 Thats the default layout for the sidebar at the left side
 and the right slot-place for the docu-content. 
-->

<script lang="ts">
  import { componentData } from "./data.svelte";
  import { scriptData } from "./data.svelte";
  import { databaseData } from "./data.svelte";
  import { designData } from "./data.svelte";

  //config
  const pathToDocu: string = "/dev/docu";
  const pathToComponentsDocu: string = pathToDocu + "/components/#";
  const pathToScriptsDocu: string = pathToDocu + "/scripts/#";
  const pathToDatabaseDocu: string = pathToDocu + "/database/#";
  const pathToDesignDocu: string = pathToDocu + "/design/#";
  const pathToAboutDocu: string = pathToDocu + "/about";

  //style
  const sidebarButtonStyle =
    "bg-NFTW-lila-600 text-gray-300 flex items-center px-2 py-2 text-sm font-medium rounded-md hover:bg-NFTW-lila-700";

  let mobileSidebarOpen: boolean = false;

  function toggleVisibilitySidebar() {
    mobileSidebarOpen = !mobileSidebarOpen;
  }
</script>

<div>
  <!--mobile menu-->
  {#if mobileSidebarOpen}
    <div class="relative z-50 lg:hidden" role="dialog" aria-modal="true">
      <div class="fixed inset-0" />
      <div class="fixed inset-0 flex">
        <div class="relative mr-16 flex w-full max-w-xs flex-1">
          <!--close sidebar-->
          <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
            <button
              on:click={toggleVisibilitySidebar}
              type="button"
              class="-m-2.5 p-2.5"
            >
              <span class="sr-only">Close sidebar</span>
              <svg
                class="h-6 w-6 text-white"
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
          <div
            class="flex grow flex-col gap-y-5 overflow-y-auto bg-NFTW-lila-800 px-6 pb-2"
          >
            <a href={pathToDocu} on:click={toggleVisibilitySidebar}>
              <div class="flex flex-row justify-center space-x-6">
                <div class="flex h-16 shrink-0 items-center">
                  <span class="sr-only"
                    >NFTW Adventures Logo: Illustration from a simple rocket
                    during launch.</span
                  >
                  <img
                    loading="lazy"
                    class="h-16 w-auto"
                    src="/illustrations/nftwlogo.png"
                    alt=""
                  />
                </div>
                <h1 class="font-bold text-2xl text-white my-auto">
                  Documentation
                </h1>
              </div>
            </a>
            <div class="flex flex-1 flex-col">
              <div class="flex flex-1 flex-col gap-y-7">
                <!--component names-->
                <div class="space-y-2 px-2">
                  <a
                    href={pathToComponentsDocu}
                    on:click={toggleVisibilitySidebar}
                  >
                    <h3 class="text-white font-bold">Components</h3>
                  </a>
                  {#each componentData as component}
                    <a
                      on:click={toggleVisibilitySidebar}
                      href={pathToComponentsDocu + component.name}
                      class={sidebarButtonStyle}
                    >
                      {component.name}
                    </a>
                  {/each}
                </div>

                <!--script names-->
                <div class="space-y-2 px-2 mt-4">
                  <a
                    href={pathToScriptsDocu}
                    on:click={toggleVisibilitySidebar}
                  >
                    <h3 class="text-white font-bold">Scripts</h3>
                  </a>
                  {#each scriptData as script}
                    <a
                      on:click={toggleVisibilitySidebar}
                      href={pathToScriptsDocu + script.name}
                      class={sidebarButtonStyle}
                    >
                      {script.name}
                    </a>
                  {/each}
                </div>

                <!--databaseData-->
                <div class="space-y-2 px-2 mt-4">
                  <a
                    href={pathToDatabaseDocu}
                    on:click={toggleVisibilitySidebar}
                  >
                    <h3 class="text-white font-bold">Database</h3>
                  </a>
                  {#each databaseData as db}
                    {#each db.chapter as chapter}
                      <a
                        on:click={toggleVisibilitySidebar}
                        href={pathToDatabaseDocu + chapter.name}
                        class={sidebarButtonStyle}
                      >
                        {chapter.name}
                      </a>
                    {/each}
                  {/each}
                </div>

                <!--designData-->
                <div class="space-y-2 px-2 mt-4">
                  <a href={pathToDesignDocu} on:click={toggleVisibilitySidebar}>
                    <h3 class="text-white font-bold">Design</h3>
                  </a>
                  {#each designData as designData}
                    {#each designData.chapter as chapter}
                      <a
                        on:click={toggleVisibilitySidebar}
                        href={pathToDesignDocu + chapter.name}
                        class={sidebarButtonStyle}
                      >
                        {chapter.name}
                      </a>
                    {/each}
                  {/each}
                </div>

                <!--about docu-->
                <div class="space-y-2 px-2 mt-4 absolute bottom-8">
                  <a href={pathToAboutDocu} on:click={toggleVisibilitySidebar}>
                    <h3 class="text-white font-bold">About Documentation</h3>
                  </a>
                  <a
                    on:click={toggleVisibilitySidebar}
                    href={pathToAboutDocu}
                    class={sidebarButtonStyle}
                  >
                    Informations
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/if}

  <!-- Static sidebar for desktop -->
  <div
    class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col pb-8"
  >
    <!-- Sidebar component, swap this element with another sidebar if you like -->
    <div
      class="flex grow flex-col gap-y-5 overflow-y-auto bg-NFTW-lila-800 px-6 no-scrollbar"
    >
      <a href={pathToDocu} on:click={toggleVisibilitySidebar}>
        <div class="flex flex-row justify-center space-x-4 mt-4">
          <div class="flex shrink-0 items-center">
            <span class="sr-only"
              >NFTW Adventures Logo: Illustration from a simple rocket during
              launch.</span
            >
            <img
              loading="lazy"
              class="h-12 w-auto"
              src="/illustrations/nftwlogo.png"
              alt=""
            />
          </div>
          <h1 class="font-bold text-2xl text-white my-auto">Documentation</h1>
        </div>
      </a>
      <div class="flex flex-1 flex-col">
        <div class="flex flex-1 flex-col gap-y-7">
          <!--about docu-->
          <div class="space-y-2 px-2 mt-4">
            <a href={pathToAboutDocu} on:click={toggleVisibilitySidebar}>
              <h3 class="text-white font-bold">About this Documentation</h3>
            </a>
            <a
              on:click={toggleVisibilitySidebar}
              href={pathToAboutDocu}
              class={sidebarButtonStyle}
            >
              Get help
            </a>
          </div>

          <!--component names-->
          <div class="space-y-2 px-2">
            <a href={pathToComponentsDocu} on:click={toggleVisibilitySidebar}>
              <h3 class="text-white font-bold">Components</h3>
            </a>
            {#each componentData as component}
              <a
                on:click={toggleVisibilitySidebar}
                href={pathToComponentsDocu + component.name}
                class={sidebarButtonStyle}
              >
                {component.name}
              </a>
            {/each}
          </div>

          <!--script names-->
          <div class="space-y-2 px-2 mt-4">
            <a href={pathToScriptsDocu} on:click={toggleVisibilitySidebar}>
              <h3 class="text-white font-bold">Scripts</h3>
            </a>
            {#each scriptData as script}
              <a
                on:click={toggleVisibilitySidebar}
                href={pathToScriptsDocu + script.name}
                class={sidebarButtonStyle}
              >
                {script.name}
              </a>
            {/each}
          </div>

          <!--databaseData-->
          <div class="space-y-2 px-2 mt-4">
            <a href={pathToDatabaseDocu} on:click={toggleVisibilitySidebar}>
              <h3 class="text-white font-bold">Database</h3>
            </a>
            {#each databaseData as db}
              {#each db.chapter as chapter}
                <a
                  on:click={toggleVisibilitySidebar}
                  href={pathToDatabaseDocu + chapter.name}
                  class={sidebarButtonStyle}
                >
                  {chapter.name}
                </a>
              {/each}
            {/each}
          </div>

          <!--designData-->
          <div class="space-y-2 px-2 mt-4">
            <a href={pathToDesignDocu} on:click={toggleVisibilitySidebar}>
              <h3 class="text-white font-bold">Design</h3>
            </a>
            {#each designData as designData}
              {#each designData.chapter as chapter}
                <a
                  on:click={toggleVisibilitySidebar}
                  href={pathToDesignDocu + chapter.name}
                  class={sidebarButtonStyle}
                >
                  {chapter.name}
                </a>
              {/each}
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--sidebar mobile closed-->
  <div
    class="sticky top-0 z-40 flex items-center gap-x-6 bg-NFTW-lila-800 px-4 py-4 sm:px-6 lg:hidden"
  >
    <button
      on:click={toggleVisibilitySidebar}
      type="button"
      class="-m-2.5 p-2.5 text-white lg:hidden"
    >
      <span class="sr-only">Open sidebar</span>
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
  <slot />
</div>

<style>
  /* Hide scrollbar for Chrome, Safari and Opera */
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  .no-scrollbar {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
</style>
