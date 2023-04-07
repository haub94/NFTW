<script lang="ts">
    import ScriptBlock from "./ScriptBlock.svelte";
    //add all component-imports here
    import Header from "$lib/sectionComponents/Header.svelte";
    import Footer from "$lib/sectionComponents/Footer.svelte";


  let previewState: boolean = false;

  function togglePreviewState() {
    previewState = !previewState;
  }

  //fill with docu-data
  const components = [
    {
      name: "Header",
      component: Header,
      description: "Beschreibung zu Header.",
      parameter: ["eins", "zwei", "drei"],
      parameterDescription: [],
      script: 
`
  function helloWorld() {
  console.log("hello");

  return(0);
}`,
      html: 
      `
<div class="flex flex-row bg-black p-5 text-3xl text-white mx-auto py-4 md:py-4 md:flex-row">
  <p>NFTW Adventures</p>
  <a href="/impressum" class="ml-48 text-lg bg-red-600">Impressum</a>
  <button class="ml-12 text-lg">spacetravel</button>
  <button class="ml-12 text-lg">client storys</button>
</div>
	  `
    },
    {
      name: "Footer",
      component: Footer,
      description: "Beschreibung zu Footer.",
      parameter: ["eins", "zwei", "drei"],
      parameterDescription: [],
      script: ``,
      html: 
      `
      <div>test</div>
      `,
    },
  ];




</script>

<div class="[&>*:nth-child(even)]:bg-gray-200 [&>*:nth-child(odd)]:bg-gray-50">
  {#each components as component}
    <div class="py-6">
      <div
        class="mx-auto flex max-w-7xl flex-row content-center justify-between px-4 sm:px-6 md:px-8">
        <div class="flex flex-col space-y-2">
          <h1 class="h-12 text-2xl font-semibold text-gray-900">
            {component.name}
          </h1>
          <p>{component.description}</p>
        </div>

        <!--toggle preview-->
        <button
          on:click={togglePreviewState}
          class="active show ml-12 h-12 w-40 rounded border border-solid border-blue-500 bg-transparent px-3 text-sm font-bold uppercase text-blue-500 outline-none transition-all duration-150 ease-linear hover:bg-blue-500 hover:text-white focus:outline-none active:bg-blue-600">
          show code
        </button>
      </div>

      <!--preview-->
        <div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <div class="h-auto py-4">
            <div class="my-4 flex justify-center rounded-lg border-2 border-gray-300 p-4">
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
