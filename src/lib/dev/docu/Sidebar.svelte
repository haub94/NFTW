<script lang="ts">
    import Components from './Components.svelte';
    

    export let data: any;

    //config
    const pathToDocu: string = "/dev/docu/#";

    let mobileSidebarOpen: boolean = false;
    function toggleSidebar() {
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
                  <button on:click={toggleSidebar} type="button" class="-m-2.5 p-2.5">
                      <span class="sr-only">Close sidebar</span>
                      <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                  </button>
                  </div>
                  <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-2">
                  
                  <div class="flex flex-row justify-center space-x-6">
                    <div class="flex h-16 shrink-0 items-center">
                        <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=white" alt="Your Company">
                    </div>
                    <h1 class="font-bold text-2xl text-white my-auto">Documentation</h1>
                  </div>
                  <nav class="flex flex-1 flex-col">
                      <ul class="flex flex-1 flex-col gap-y-7">
                      <li>
                          <ul class="-mx-2 space-y-1">
                              <!--component names-->
                              <div class="space-y-2 px-2">
                                  {#each data as component}
                                      <a on:click={toggleSidebar} href={pathToDocu + component.name} class="bg-indigo-700 text-white flex items-center px-2 py-2 text-sm font-medium rounded-md hover:bg-indigo-800" >
                                          {component.name}
                                      </a>
                                  {/each}
                              </div>
                          </ul>
                      </li>
                      </ul>
                  </nav>
                  </div>
              </div>
          </div>
      </div> 
  {/if}
    
  

    <!-- Static sidebar for desktop -->
    <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6">
        <div class="flex flex-row justify-center space-x-6">
          <div class="flex h-16 shrink-0 items-center">
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=white" alt="NFTW Adventures">
          </div>
          <h1 class="font-bold text-2xl text-white my-auto">Documentation</h1>
        </div>  
        <nav class="flex flex-1 flex-col">
          <ul class="flex flex-1 flex-col gap-y-7">
            <li>
              <ul class="-mx-2 space-y-1">
                <!--component names-->
                <div class="space-y-2 px-2">
                    {#each data as component}
                        <a on:click={toggleSidebar} href={pathToDocu + component.name} class="bg-indigo-700 text-white flex items-center px-2 py-2 text-sm font-medium rounded-md hover:bg-indigo-800" >
                            {component.name}
                        </a>
                    {/each}
                </div>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  
    <!--sidebar mobile closed-->
    <div class="sticky top-0 z-40 flex items-center gap-x-6 bg-indigo-600 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
      <button on:click={toggleSidebar} type="button" class="-m-2.5 p-2.5 text-indigo-200 lg:hidden">
        <span class="sr-only">Open sidebar</span>
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div>
  
    <main class="py-10 lg:pl-72">
      <div class="px-4 sm:px-6 lg:px-8">
        <Components data={data} />
      </div>
    </main>
  </div>
  
