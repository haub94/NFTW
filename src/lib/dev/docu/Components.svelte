<script lang="ts">
    import ScriptBlock from "./helper/ScriptBlock.svelte";

    //bind data
    export let data;

    //some styling
    const tableHeaderStyle: string = "border text-left px-2 py-1 font-medium";
    const tableRowStyle: string = "border text-left px-4 py-1";

    let previewState: boolean = false;
    let toggleButtonDescription = "show code";

    function togglePreviewState() {
      previewState = !previewState; //0=coponent 1=code
      if (previewState) {
        toggleButtonDescription = "show preview"
      } else {
        toggleButtonDescription = "show code"
      }
    }

    //fill with docu-data
   let components = data;

</script>




<!--preview/code toggle button-->
<div class="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow">
  <h1 class="font-medium text-4xl my-auto pl-2">Documentation for Website NFTW Adventures</h1>
  <button type="button" class="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden">
    <span class="sr-only">Open sidebar</span>
    <!-- Heroicon name: outline/bars-3-bottom-left -->
    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
    </svg>
  </button>
  <div class="flex flex-1 justify-between px-4">
    <div class="flex flex-1">
      <form class="flex w-full md:ml-0" action="#" method="GET">
        <label for="search-field" class="sr-only">Search</label>
        <div class="relative w-full text-gray-400 focus-within:text-gray-600">
          <div class="absolute right-2 top-2 flex items-center">
            <!-- Heroicon name: mini/magnifying-glass -->
            <button
            on:click={togglePreviewState}
            class="active show ml-12 h-12 w-40 rounded border border-solid border-blue-500 bg-transparent px-3 text-sm font-bold uppercase text-blue-500 outline-none transition-all duration-150 ease-linear hover:bg-blue-500 hover:text-white focus:outline-none">
            {toggleButtonDescription}
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>


<div>
  {#each components as component}
    <div class="py-6">
      <!--infos-->
      <div
        class="mx-auto flex max-w-7xl flex-row content-center justify-between px-4 sm:px-6 md:px-8">
        <div class="flex flex-col space-y-2">
          <h1 id={component.name} class="h-12 text-2xl font-semibold text-gray-900">
            {component.name}
          </h1>
          <div class="space-y-4">
            <div>
              <h2 class="font-bold">Description:</h2>
              <p>{component.description}</p>
            </div>
            
            <div>
              <p class="font-bold">Author: <span class="font-normal">{component.author}</span></p>
              <p class="font-bold">Version: <span class="font-normal">{component.version}</span></p>
              <p class="font-bold">Used by: <span class="font-normal">{component.usedBy}</span></p>
              <p class="font-bold">Dependecies: <span class="font-normal">{component.dependecies}</span></p>
            </div>

            <div>
              <h2 class="font-bold mb-1">Variables</h2>
              <table class="border">
                <thead>
                  <tr>
                    <th class={tableHeaderStyle}>Name</th>
                    <th class={tableHeaderStyle}>Desription</th>
                  </tr>
                </thead>
                <tbody>
                    {#each component.variables as variable}
                    <tr>
                      <td class={tableRowStyle}>{variable.name} </td>
                      <td class={tableRowStyle}>{variable.description}</td>
                    </tr> 
                    {/each}
                </tbody>
              </table>
            </div>
          </div>  
        </div>
      </div>

      <!--preview-->
      <div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div class="h-auto py-4">
          <div class:justify-start={previewState} class:justify-center={!previewState} class="my-4 flex rounded-lg border-2 border-gray-300 p-4">
            {#if !previewState} 
            <!--component preview-->  
            <svelte:component this={component.component} />    
            {:else}
              <!--code preview-->
              <div class="flex-row">
                {#if component.script !== ``}
                  <pre>
                      <ScriptBlock>
                        <slot>
                          {component.script}
                        </slot>
                      </ScriptBlock>  
                  </pre>
                {/if}
                <pre>
                  {component.html}
                </pre>
            </div> 
            {/if}
          </div>
        </div>
      </div>
    </div>
  {/each}
</div>
