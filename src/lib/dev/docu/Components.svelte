<script lang="ts">
    import ScriptBlock from "./helper/ScriptBlock.svelte";
   
    //add all component-imports here
    import Header from "$lib/sectionComponents/Header.svelte";
    import Footer from "$lib/sectionComponents/Footer.svelte";


    let previewState: boolean = false;
    let toggleButtonDescription = "show code";

    function togglePreviewState() {
      previewState = !previewState;
      if (previewState) {
        toggleButtonDescription = "show preview"
      } else {
        toggleButtonDescription = "show code"
      }
    }

    //fill with docu-data
    const components = [
      {
        ID: 0,
        name: "Header",
        component: Header,
        description: "Beschreibung zu Header.",
        author: "Markus Haubold",
        version: "1.0",
        usedBy: "",
        dependecies: "",
        props: ["eins", "zwei"],
        propDescription: ["prop1 beschribeung", "prop2 beschreibung"],
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
        ID: 1,
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


<!--preview/code toggle button-->
<div class="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow">
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





<div class="[&>*:nth-child(even)]:bg-gray-200 [&>*:nth-child(odd)]:bg-gray-50">
  {#each components as component}
    <div class="py-6">
      <div
        class="mx-auto flex max-w-7xl flex-row content-center justify-between px-4 sm:px-6 md:px-8">
        <div class="flex flex-col space-y-2">
          <h1 class="h-12 text-2xl font-semibold text-gray-900">
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
              <h2 class="font-bold">Props</h2>
              <div class="pl-4">
                {#each component[index].props as item}
                   <div class="flex-row space-x-4">
                    <p>{component.props}</p>
                  </div>
                {/each}
                  
                
                

              </div>
            </div>
            
              
         
            


          </div>
          
        </div>

        <!--toggle preview-->
       
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
