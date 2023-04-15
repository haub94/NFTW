<script lang="ts">
    import { componentData } from "./data.svelte";
    import { scriptData } from "./data.svelte";
    import { databaseData } from "./data.svelte";
    import { designData } from "./data.svelte";


    import SidebarButton from "$lib/dev/docu/helper/SidebarButton.svelte";
    
    //config
    const pathToDocu: string = "/dev/docu";
    const pathToComponentsDocu: string = pathToDocu + "/components/#";
    const pathToScriptsDocu: string = pathToDocu + "/scripts/#";
    const pathToDatabaseDocu: string = pathToDocu + "/database/#";
    const pathToDesignDocu: string = pathToDocu + "/design/#";

    let mobileSidebarOpen: boolean = false;

    function toggleVisibilitySidebar() {
        mobileSidebarOpen = !mobileSidebarOpen;
    }

</script>




<div>
    <!--mobile menu-->
    {#if mobileSidebarOpen}
      <div class="relative z-50 lg:hidden" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-gray-900/80"></div>
          <div class="fixed inset-0 flex">
            <div class="relative mr-16 flex w-full max-w-xs flex-1"> 
              <!--close sidebar-->
              <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
                <button on:click={toggleVisibilitySidebar} type="button" class="-m-2.5 p-2.5">
                    <span class="sr-only">Close sidebar</span>
                    <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
              </div>
              <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-NFTW-lila-800 px-6 pb-2">
                <a href={pathToDocu} on:click={toggleVisibilitySidebar}>
                  <div class="flex flex-row justify-center space-x-6">
                    <div class="flex h-16 shrink-0 items-center">
                        <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=white" alt="Your Company">
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
                          <a href={pathToComponentsDocu}>
                            <h3 class="text-white font-bold">Components</h3>  
                          </a> 
                          {#each componentData as component}
                            <SidebarButton on:click={toggleVisibilitySidebar} pathTo={pathToComponentsDocu + component.name} label={component.name} />
                          {/each}
                        </div>

                        <!--script names-->
                        <div class="space-y-2 px-2 mt-4">
                          <a href={pathToScriptsDocu}>
                            <h3 class="text-white font-bold">Scripts</h3>  
                          </a>
                          {#each scriptData as script}        
                            <SidebarButton on:click={toggleVisibilitySidebar} pathTo={pathToScriptsDocu + script.name} label={script.name} />
                          {/each}
                        </div>

                        <!--databaseData-->
                        <div class="space-y-2 px-2 mt-4">
                          <a href={pathToDatabaseDocu}>
                            <h3 class="text-white font-bold">Database</h3>  
                          </a>
                          {#each databaseData as db}
                            {#each db.chapter as chapter}   
                              <SidebarButton on:click={toggleVisibilitySidebar} pathTo={pathToDatabaseDocu + chapter.name} label={chapter.name} />
                            {/each}   
                          {/each}
                        </div>

                        <!--designData-->
                        <div class="space-y-2 px-2 mt-4">
                          <a href={pathToDesignDocu}>
                            <h3 class="text-white font-bold">Design</h3>  
                          </a>
                          {#each designData as designData}
                            {#each designData.chapter as chapter}
                              <SidebarButton on:click={toggleVisibilitySidebar} pathTo={pathToDesignDocu + chapter.name} label={chapter.name} />
                            {/each}   
                          {/each}
                        </div>
                    </div>
                  </div>
                </div>
                </div>
            </div>
      </div>         
    {/if}

      <!-- Static sidebar for desktop -->
      <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-NFTW-lila-800 px-6">
        <a href={pathToDocu} on:click={toggleVisibilitySidebar}>
          <div class="flex flex-row justify-center space-x-6">
            <div class="flex h-16 shrink-0 items-center">
              <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=white" alt="NFTW Adventures">
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
                  <a href={pathToComponentsDocu}>
                    <h3 class="text-white font-bold">Components</h3>  
                  </a>
                  {#each componentData as component}
                    <SidebarButton pathTo={pathToComponentsDocu + component.name} label={component.name} />
                  {/each}
                </div>

                <!--script names-->
                <div class="space-y-2 px-2 mt-4">
                  <a href={pathToScriptsDocu}>
                    <h3 class="text-white font-bold">Scripts</h3>  
                  </a>
                  {#each scriptData as script}
                    <SidebarButton pathTo={pathToScriptsDocu + script.name} label={script.name} />
                  {/each}
                </div>

                <!--databaseData-->
                <div class="space-y-2 px-2 mt-4">
                  <a href={pathToDatabaseDocu}>
                    <h3 class="text-white font-bold">Database</h3>  
                  </a>
                  {#each databaseData as db}
                      {#each db.chapter as chapter}
                        <SidebarButton pathTo={pathToDatabaseDocu + chapter.name} label={chapter.name} />
                      {/each}   
                  {/each}
                </div>

                <!--designData-->
                <div class="space-y-2 px-2 mt-4">
                  <a href={pathToDesignDocu}>
                    <h3 class="text-white font-bold">Design</h3>  
                  </a>
                  {#each designData as designData}
                      {#each designData.chapter as chapter}
                        <SidebarButton pathTo={pathToDesignDocu + chapter.name} label={chapter.name} />
                      {/each}   
                  {/each}
                </div>
            </div>
          </div>
        </div>
      </div>
    
      <!--sidebar mobile closed-->
      <div class="sticky top-0 z-40 flex items-center gap-x-6 bg-NFTW-lila-800 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
        <button on:click={toggleVisibilitySidebar} type="button" class="-m-2.5 p-2.5 text-indigo-200 lg:hidden">
          <span class="sr-only">Open sidebar</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
      <!--here comes the content from the docu-->
      <slot></slot>
    </div>
    
  

