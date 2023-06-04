<script lang="ts">
  import { scriptData } from "../data.svelte";
  import ScriptBlock from "$lib/dev/docu/helper/ScriptBlock.svelte";

  const tableHeaderStyle: string = "text-left px-2 py-1 font-medium";
  const tableRowStyle: string = "text-left px-4 py-1";
</script>

<div class="space-y-8">
  {#each scriptData as script}
    <div id={script.name} class="bg-gray-100 rounded-lg p-4 shadow-lg">
      <div class="px-4 sm:px-0">
        <h3 class="text-base font-semibold leading-7 text-gray-900">
          {script.name}
        </h3>
        <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          {script.description}
        </p>
      </div>
      <div class=" border-NFTW-black-50">
        <dl class="divide-y divide-gray-500">
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-gray-900">Author</dt>
            <dd
              class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
            >
              {script.author}
            </dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-gray-900">Version</dt>
            <dd
              class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
            >
              {script.version}
            </dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-gray-900">Used by</dt>
            <dd
              class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
            >
              {#each script.usedBy as entry}
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
              {#each script.dependecies as entry}
                <ul class="list-none">
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
                  {#each script.variables as variable}
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
                  class="my-4 flex rounded-lg border-2 border-gray-300 p-4 overflow-scroll max-h-screen"
                >
                  <!--code preview-->
                  <div class="flex-row">
                    <pre>
                                    {script.script} 
                                </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </dl>
      </div>
    </div>
  {/each}
</div>
