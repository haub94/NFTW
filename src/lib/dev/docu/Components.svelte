<script lang="ts">
    import ScriptBlock from "./helper/ScriptBlock.svelte";

    //bind data
    export let data: any;

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

console.log('previewState :>> ', previewState);

</script>




<!--toggle button preview/code-->
<div class="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-none">
  <div class="absolute right-2 top-2 flex items-center">
    <button
    on:click={togglePreviewState}
    class="active show ml-12 h-12 w-40 rounded border border-solid border-blue-500 bg-transparent px-3 text-sm font-bold uppercase text-blue-500 outline-none transition-all duration-150 ease-linear hover:bg-blue-500 hover:text-white focus:outline-none">
    {toggleButtonDescription}
    </button>
  </div>
</div>




<div>
  {#each data as component}
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

    </div>
  {/each}
</div>
