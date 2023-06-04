<script lang="ts">
  import { componentData } from "../data.svelte";
  import ScriptBlock from "$lib/dev/docu/helper/ScriptBlock.svelte";

  const tableHeaderStyle: string = "text-left px-2 py-1 font-medium";
  const tableRowStyle: string = "text-left px-4 py-1";

  let previewState: boolean = false;
  let toggleButtonDescription = "show code";

  function togglePreviewState() {
    previewState = !previewState; //0=coponent 1=code
    if (previewState) {
      toggleButtonDescription = "show preview";
    } else {
      toggleButtonDescription = "show code";
    }
  }
</script>

<!--toggle button preview/code-->
<div class="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-none mb-4">
  <div class="absolute right-2 top-2 flex items-center">
    <button
      on:click={togglePreviewState}
      class="active show ml-12 h-12 w-40 rounded border border-solid bg-NFTW-blue-200 border-NFTW-lila-600 px-3 text-sm font-bold uppercase text-NFTW-lila-600 outline-none transition-all duration-150 ease-linear hover:bg-NFTW-blue-300 hover:text-white focus:outline-none"
    >
      {toggleButtonDescription}
    </button>
  </div>
</div>

<div class="space-y-8">
  {#each componentData as comp}
    <div id={comp.name} class="bg-gray-100 rounded-lg p-4 shadow-lg">
      <div class="px-4 sm:px-0">
        <h3 class="text-base font-semibold leading-7 text-gray-900">
          {comp.name}
        </h3>
        <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          {comp.description}
        </p>
      </div>
      <div class=" border-NFTW-black-50">
        <dl class="divide-y divide-gray-500">
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-gray-900">Author</dt>
            <dd
              class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
            >
              {comp.author}
            </dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-gray-900">Version</dt>
            <dd
              class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
            >
              {comp.version}
            </dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-gray-900">Used by</dt>
            <dd
              class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
            >
              {#each comp.usedBy as entry}
                <ul class="list-none">
                  <li>{entry}</li>
                </ul>
              {/each}
            </dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-gray-900">
              Dependecies
            </dt>
            <dd
              class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
            >
              {#each comp.dependecies as entry}
                <ul class="list-disc pl-4">
                  <li>{entry}</li>
                </ul>
              {/each}
            </dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-gray-900">
              Variables
            </dt>
            <dd
              class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
            >
              <table>
                <thead>
                  <tr>
                    <th class={tableHeaderStyle}>Name</th>
                    <th class={tableHeaderStyle}>Desription</th>
                  </tr>
                </thead>
                <tbody>
                  {#each comp.variables as variable}
                    <tr>
                      <td class={tableRowStyle}>{variable.name} </td>
                      <td class={tableRowStyle}>{variable.description}</td>
                    </tr>
                  {/each}
                </tbody>
              </table>
            </dd>
          </div>
          <div class="py-6">
            <dt class="text-sm font-medium leading-6 text-gray-900">Preview</dt>
            <div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
              <div class="h-auto">
                <div
                  class:justify-start={previewState}
                  class:justify-center={!previewState}
                  class="my-4 flex rounded-lg border-2 border-gray-300 p-4 overflow-scroll max-h-screen"
                >
                  {#if !previewState}
                    <!--component preview-->
                    <svelte:component this={comp.component} />
                  {:else}
                    <!--code preview-->
                    <div class="flex-row">
                      {#if comp.script !== ""}
                        <pre>
                                      <ScriptBlock>
                                        <slot>
                                          {comp.script}
                                        </slot>
                                      </ScriptBlock>  
                                  </pre>
                      {/if}
                      <pre class="text-gray-900">
                                  {comp.html}
                                </pre>
                    </div>
                  {/if}
                </div>
              </div>
            </div>
          </div>
        </dl>
      </div>
    </div>
  {/each}
</div>
