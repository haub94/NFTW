<script lang="ts" context="module">

	//add all component-imports here
    import Card from "$lib/components/Card.svelte";
    


    //config
    const pathToDocu: string = "/dev/docu";
    const pathToComponentsDocu: string = pathToDocu + "/components/#";
    const pathToScriptsDocu: string = pathToDocu + "/scripts/#";
    const pathToDatabaseDocu: string = pathToDocu + "/database/#";
    const pathToDesignDocu: string = pathToDocu + "/design/#";

    let mobileSidebarOpen: boolean = true;
    let docuSectionTitle: string = 'Welcome';




    function toggleSidebarChangeTitle(title: string) {
        mobileSidebarOpen = !mobileSidebarOpen;

        if (title !== '') {
          docuSectionTitle = title;
        }
    }

    console.log('docuSectionTitle :>> ', docuSectionTitle);


    export const componentData = [
      /*
      ---------TEMPLATE--------- 
      {
        ID: "LAST ID + 1",
        name: "NAME OF THE COMPONENT",
        component: NAME FROM THE USED IMPORT,
        description: "DESCRIPTOPN OF THE FUNCTION / USAGE.",
        author: "YOUR NAME",
        version: "X.Y",
        usedBy: "PARENTS",
        dependecies: "WHICH COMPONENTS ARE NEEDED?!",
        variables: [
          {
            name: 'NAME VAR1',
            description: 'DESCRIPTION VAR1',
          },
          {
            name: 'NAME VAR2',
            description: 'DESCRIPTION VAR2',
          }
          ... ADD MORE VARIABLES IF NEEDED
        ],
        script: 
    `
    SCRIPT FROM THE COMPONENT (WITHOUT <SCRIPT><SCRIPT> !!!)
    `
    HTML AND STYLE SECTIONS FROM THE COMPONENT
    `
      },
      //-------------------------------------------------------------------------------------------
      */
      {
        ID: 0,
        name: "Card",
        component: Card,
        description: "Beschreibung zu Card.",
        author: "Markus Haubold",
        version: "1.0",
        usedBy: [
          "usedBy Comp1",
          "usedBy Comp2"
        ],
        dependecies: [
          "dependecie1",
          "dependecie2",
        ],
        variables: [
          {
            name: 'image',
            description: 'Image for the card',
          },  
          {
            name: 'title',
            description: 'Title of the card',
          },
          {
            name: 'cation',
            description: 'Caption of the card',
          }
        ],
        script: 
  `
  import { checkUndefinedNullOrEmpty } from "../tools/Tools.svelte";

  export let img: string = "/brokenImage.png";
  export let title: string = "defaultVaule";
  export let caption: string = "defaultVaule";
    `,
        html: 
    `
    <a href="/" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img class="h-auto w-48 object-cover rounded-l-lg" src={checkUndefinedNullOrEmpty(img) ? "/brokenImage.png" : img} alt="" />
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{caption}</p>
      </div>
    </a>
    `
      },
      {
        ID: 1,
        name: "NextComponent",
        component: Card,
        description: "Beschreibung zu Card.",
        author: "Markus Haubold",
        version: "1.0",
        usedBy: "",
        dependecies: "",
        variables: [
          {
            name: 'image',
            description: 'Image for the card',
          },  
          {
            name: 'title',
            description: 'Title of the card',
          },
          {
            name: 'cation',
            description: 'Caption of the card',
          }
        ],
        script: 
  `
  import { checkUndefinedNullOrEmpty } from "../tools/Tools.svelte";

  export let img: string = "/brokenImage.png";
  export let title: string = "defaultVaule";
  export let caption: string = "defaultVaule";
    `,
        html: 
    `
    <a href="/" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img class="h-auto w-48 object-cover rounded-l-lg" src={checkUndefinedNullOrEmpty(img) ? "/brokenImage.png" : img} alt="" />
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{caption}</p>
      </div>
    </a>
    `
      }, 
      //-------------------------------------------------------------------------------------------
    ];


    /*########################################################################################################################################################################*/


    export const scriptData = [
      /*
      ---------TEMPLATE--------- 
      
      */
      {
        ID: 0,
        name: "Script_ONE",
        component: Card,
        description: "Beschreibung zu Test_Script.",
        author: "Markus Haubold",
        version: "1.0",
        usedBy: "",
        dependecies: "",
        variables: [
          {
            name: 'image',
            description: 'Image for the card',
          },  
          {
            name: 'title',
            description: 'Title of the card',
          },
          {
            name: 'cation',
            description: 'Caption of the card',
          }
        ],
        script: 
  `
  function helloWorld(): boolean {
    console.log("hello world")
    return true;
  }
    `,
      },
      {
        ID: 0,
        name: "Script_TWO",
        component: Card,
        description: "Beschreibung zu Test_Script.",
        author: "Markus Haubold",
        version: "1.0",
        usedBy: "",
        dependecies: "",
        variables: [
          {
            name: 'image',
            description: 'Image for the card',
          },  
          {
            name: 'title',
            description: 'Title of the card',
          },
          {
            name: 'cation',
            description: 'Caption of the card',
          }
        ],
        script: 
  `
  function helloWorld(): boolean {
    console.log("hello world")
    return true;
  }
    `,
      },
      //-------------------------------------------------------------------------------------------
    ];

    /*########################################################################################################################################################################*/

    export const database = [
        {
            ID: 0,
            name: '',
            description: "Beschreibung zu Test_Script.",
            author: "Markus Haubold",
            version: "1.0",
            usedBy: "",
            dependecies: "",

            chapter: [
                {
                    name: 'overview'
                },    
                {
                    name: 'usage',
                    content: 'blablabla'
                }
            ]
        },
        //-------------------------------------------------------------------------------------------
    ];

    /*########################################################################################################################################################################*/

    export const design = [
        {
            ID: 0,
            name: '',
            description: "Beschreibung zu Test_Script.",
            author: "Markus Haubold",
            version: "1.0",
            usedBy: "",
            dependecies: "",

            chapter: [
                {
                    name: 'overview'
                },    
                {
                    name: 'usage',
                    content: 'blablabla'
                }
            ]
        },
        //-------------------------------------------------------------------------------------------
    ]

	
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
                <button on:click={() => toggleSidebarChangeTitle('')} type="button" class="-m-2.5 p-2.5">
                    <span class="sr-only">Close sidebar</span>
                    <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
              </div>
              <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-2">
                <a href={pathToDocu} on:click={() => toggleSidebarChangeTitle('Welcome')}>
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
                            <h3 class="text-white font-bold">Components</h3>  
                            {#each componentData as component}
                              <a on:click={() => toggleSidebarChangeTitle('Components Documentation')} href={pathToComponentsDocu + component.name} class="bg-indigo-700 text-white flex items-center px-2 py-2 text-sm font-medium rounded-md hover:bg-indigo-800" >
                                  {component.name}
                              </a>
                            {/each}
                        </div>

                        <!--script names-->
                        <div class="space-y-2 px-2 mt-4">
                            <h3 class="text-white font-bold">Scripts</h3>  
                            {#each scriptData as script}
                                    <a on:click={() => toggleSidebarChangeTitle('Script Documentation')} href={pathToScriptsDocu + script.name} class="bg-indigo-700 text-white flex items-center px-2 py-2 text-sm font-medium rounded-md hover:bg-indigo-800" >
                                        {script.name}
                                    </a>
                            {/each}
                        </div>

                        <!--database-->
                        <div class="space-y-2 px-2 mt-4">
                            <h3 class="text-white font-bold">Database</h3>  
                            {#each database as db}
                                {#each db.chapter as chapter}
                                    <a on:click={() => toggleSidebarChangeTitle('Database Documentation')} href={pathToDatabaseDocu + chapter.name} class="bg-indigo-700 text-white flex items-center px-2 py-2 text-sm font-medium rounded-md hover:bg-indigo-800" >
                                        {chapter.name}
                                    </a>  
                                {/each}   
                            {/each}
                        </div>

                        <!--design-->
                        <div class="space-y-2 px-2 mt-4">
                            <h3 class="text-white font-bold">Design</h3>  
                            {#each design as design}
                                {#each design.chapter as chapter}
                                    <a on:click={() => toggleSidebarChangeTitle('Design Documentation')} href={pathToDesignDocu + chapter.name} class="bg-indigo-700 text-white flex items-center px-2 py-2 text-sm font-medium rounded-md hover:bg-indigo-800" >
                                        {chapter.name}
                                    </a>  
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
        <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6">
        <a href={pathToDocu} on:click={() => toggleSidebarChangeTitle('Welcome')}>
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
                    <h3 class="text-white font-bold">Components</h3>  
                    {#each componentData as component}
                            <a on:click={() => toggleSidebarChangeTitle('Component Documentation')} href={pathToComponentsDocu + component.name} class="bg-indigo-700 text-white flex items-center px-2 py-2 text-sm font-medium rounded-md hover:bg-indigo-800" >
                                {component.name}
                            </a>
                    {/each}
                </div>

                <!--script names-->
                <div class="space-y-2 px-2 mt-4">
                    <h3 class="text-white font-bold">Scripts</h3>  
                    {#each scriptData as script}
                            <a on:click={() => toggleSidebarChangeTitle('Script Documentation')} href={pathToScriptsDocu + script.name} class="bg-indigo-700 text-white flex items-center px-2 py-2 text-sm font-medium rounded-md hover:bg-indigo-800" >
                                {script.name}
                            </a>
                    {/each}
                </div>

                <!--database-->
                <div class="space-y-2 px-2 mt-4">
                    <h3 class="text-white font-bold">Database</h3>  
                    {#each database as db}
                        {#each db.chapter as chapter}
                            <a on:click={() => toggleSidebarChangeTitle('Databse Documentation')} href={pathToDatabaseDocu + chapter.name} class="bg-indigo-700 text-white flex items-center px-2 py-2 text-sm font-medium rounded-md hover:bg-indigo-800" >
                                {chapter.name}
                            </a>  
                        {/each}   
                    {/each}
                </div>

                <!--design-->
                <div class="space-y-2 px-2 mt-4">
                    <h3 class="text-white font-bold">Design</h3>  
                    {#each design as design}
                        {#each design.chapter as chapter}
                            <a on:click={() => toggleSidebarChangeTitle('Design Documentation')} href={pathToDesignDocu + chapter.name} class="bg-indigo-700 text-white flex items-center px-2 py-2 text-sm font-medium rounded-md hover:bg-indigo-800" >
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
      <div class="sticky top-0 z-40 flex items-center gap-x-6 bg-indigo-600 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
        <button on:click={() => toggleSidebarChangeTitle('')} type="button" class="-m-2.5 p-2.5 text-indigo-200 lg:hidden">
          <span class="sr-only">Open sidebar</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
    
      <main class="lg:pl-72 bg-indigo-600">
        <div class="w-full h-16 bg-indigo-600 flex justify-center items-center">
            <h2 class="uppercase text-white font-bold text-2xl">{docuSectionTitle}</h2>
        </div>
        <div class="p-4 sm:p-6 lg:p-8 rounded-tl-xl bg-white">
          <!--HERE COMPONENTS-->
            <slot></slot>
        </div>
      </main>
    </div>
    
  

