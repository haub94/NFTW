<script lang="ts" context="module">

	//add all component-imports here
    import Card from "$lib/components/Card.svelte";
    import CardSpacetravel from "$lib/components/CardSpacetravel.svelte";

    //imprint
    import ImprintContent from "$lib/sectionComponents/ImprintContent.svelte";

    //accordion
    import Item from "$lib/tools/accordion/Item.svelte";
    import Body from "$lib/tools/accordion/Body.svelte";


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
        name: "DocuTemplateCard1",
        component: Card,
        description: "Description of DocuTemplateCard1. Dont delete this!",
        author: "Maxi Musterfrau",
        version: "x.y",
        usedBy: [
          "Usage 1",
          "Usage 2"
        ],
        dependecies: [
          "Dependecie 1",
          "Dependecie 2",
        ],
        variables: [
          {
            name: "Exportet variable1",
            description: "Description of variable1",
          },  
          {
            name: "Exportet variable1",
            description: "Description of variable1",
          },
          {
            name: "Exportet variable1",
            description: "Description of variable1",
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
        name: "DocuTemplateCard2",
        component: Card,
        description: "Description of DocuTemplateCard2. Dont delete this!",
        author: "Max Mustermann",
        version: "x.y",
        usedBy: [
          "-",
        ],
        dependecies: [
          "-",
        ],
        variables: [
          {
            name: "-",
            description: "-",
          },  
        ],
        script: '',
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
        ID: 2,
        name: "CardSpacetravel",
        component: CardSpacetravel,
        description: "Description of CardSpacetravel. Dont delete this!",
        author: "Daniel Rittrich",
        version: "1.0",
        usedBy: [
          "/spacetravel",
        ],
        dependecies: [
          "-",
        ],
        variables: [
          {
            name: "img",
            description: "string: imagepath like '/brokenImage.png'",
          },  
          {
            name: "title",
            description: "string: title text ",
          },  
          {
            name: "caption",
            description: "string: caption text",
          },  
          {
            name: "imgPosition",
            description: "string: for image position - choose one out of (center, bottom, top, left, left-bottom, left-top, right, right-bottom, right-top)",
          },  
          {
            name: "imgSize",
            description: "string | number: for image scaling (auto, cover, contain ... or own size: 50%, 200px)",
          },  
          {
            name: "path",
            description: "string: for routing path '/home/user/config'",
          },  
        ],
        script: 
        `
        import { checkUndefinedNullOrEmpty } from "../tools/Tools.svelte";

export let img: string = "/brokenImage.png";
export let title: string = "Lorem ipsum dolor";
export let caption: string = "Lorem ipsum dolor";
export let imgPosition: string = "center"; // center, bottom, top, left, left-bottom, left-top, right, right-bottom, right-top
export let imgSize: string | number = "cover"; // auto, cover, contain ... or own size: 50%, 200px
export let path: string = "/"; // routing path "/home/user/config"

        `,
        html: 
        `
        <a href={path}>
  <div class="group relative">
    <div
      class="absolute -inset-2 rounded-lg bg-gradient-to-br from-NFTW-lila-500 via-NFTW-blue-500 to-NFTW-pink-500 opacity-0 blur transition duration-700 group-hover:opacity-100"
    />
    <div
      class="relative flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10 bg-blend-multiply bg-no-repeat bg-{imgPosition}"
      style="
    background-image: url('{img}');
    background-size: {imgSize}"
    >
      <div class="">
        <h3
          id="card-{title}"
          class="text-4xl font-bold leading-7 text-NFTW-white mb-32"
        >
          {title}
        </h3>
        <div class="w-3/4 h-64 grid content-end">
          <p
            class="text-base leading-7 text-justify line-clamp-6 opacity-50 group-hover:opacity-100 transition duration-500 text-transparent bg-clip-text bg-gradient-to-b from-NFTW-white to-transparent group-hover:text-NFTW-white"
          >
            {caption}
          </p>
        </div>
        <a
          href={path}
          aria-describedby="link-{title}"
          class="mt-8 block rounded-md bg-NFTW-lila-800 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-NFTW-lila-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition duration-500"
          >Start Your Journey With Us</a
        >
      </div>
    </div>
  </div>
</a>
        `
      },
      {
        ID: 3,
        name: "ImprintContent",
        component: ImprintContent,
        description: "It's the component with the data for the imprint site.",
        author: "Markus Haubold",
        version: "1.0",
        usedBy: [
          "Route imprint",
        ],
        dependecies: [
          "Accordion Body",
          "Accordion Item",
        ],
        variables: [
          {
            name: "-",
            description: "-",
          },  
        ],
        script: 
        `
  import Body from "$lib/tools/accordion/Body.svelte";
    import Item from "$lib/tools/accordion/Item.svelte";

  let active: any  = false;

	const imprintData = [
		{
			header: "Provider",
			descriptionLine1: "NFTW Adventures",
			descriptionLine2: "NFTW Park 1",
			descriptionLine3: "95014 Cupertino"
		},
		{
			header: "CEO",
			descriptionLine1: "Tom Cook",
			descriptionLine2: "",
			descriptionLine3: ""
		},
		{
			header: "Value added tax identification number",
			descriptionLine1: "US08150123",
			descriptionLine2: "",
			descriptionLine3: ""
		},
		{
			header: "Headquarter location",
			descriptionLine1: "95014 Cupertino",
			descriptionLine2: "",
			descriptionLine3: ""
		},
		{
			header: "Responsible for editorial content",
			descriptionLine1: "Tom Cook",
			descriptionLine2: "NFTW Park 1",
			descriptionLine3: "95014 Cupertino"
		},
	];

	const accordionData = [
		{
			id: "0",
			header: "External links",
			description: "The contents of external links are not checked by us. They are subject to the liability of the respective providers."
		},
		{
			id: "1",
			header: "Legal information on this website",
			description: "The contents of this website are researched with the greatest possible care. Nevertheless, the provider assumes no liability for the accuracy, completeness and timeliness of the information provided. In particular, the information is of a general nature. The contributions reflect the opinion of the respective author."
		},
		{
			id: "2",
			header: "Copyright notice",
			description: "All contributions and illustrations published on this website are protected by copyright. Any use not permitted by copyright law requires the prior written consent of the provider. This applies in particular to the copying, editing, translation, storage, processing or reproduction of content in databases or other electronic media and systems. Photocopies and downloads of web pages may only be made for personal, private and non-commercial use."
		},
		{
			id: "3",
			header: "Communication via email",
			description: "Communication via eMail can have security gaps. For example, e-mails can be intercepted and viewed on their way to the employees of our and viewed by experienced Internet users on their way to our company's employees. Should we receive an e-mail from you, we assume that we are entitled to reply by e-mail. Otherwise you must expressly refer to another way of communication. Upon request, we are able to encrypt the messages using common encryption standards (e.g. PGP)."
		},
	]
        `,
        html: 
        `
    <div class="relative bg-NFTW-bg">
      <div class="max-w-7xl mx-auto pb-16 pt-10 px-4 sm:px-6 lg:px-8">
        <div class="overflow-hidden bg-white shadow sm:rounded-lg">
          <div class="px-4 py-5 sm:px-6">
              <h1 class="mt-2 text-3xl font-bold text-gray-900 tracking-tight sm:text-3xl">Imprint</h1>
              <h2 class="mt-1 max-w-2xl text-base text-gray-500">Information according to §5 TMG</h2>
          </div>
          <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
            <div class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">     
              {#each imprintData as imDate}
                <div class="sm:col-span-1">
                  <p class=" font-medium text-gray-500">{imDate.header}</p>
                  <p class="mt-1  text-gray-900">
                    {imDate.descriptionLine1} 
                    {#if imDate.descriptionLine2 !== ""}
                      <br/>{imDate.descriptionLine2} <br/>
                    {/if}
                    {#if imDate.descriptionLine3 !== ""}
                      {imDate.descriptionLine3}
                    {/if}
                  </p>
                </div>
              {/each}
              <div class="sm:col-span-2">
                <h2 class="mt-3 mb-6 text-lg font-semibold tracking-tight text-gray-900">Legal information on this website</h2>
                <div class="space-y-2">
                  <Body bind:active>
                    {#each accordionData as accDate}
                      <Item id={accDate.id} title={accDate.header}>
                        {accDate.description}
                      </Item>
                    {/each} 
                  </Body>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        `
      },
      {
        ID: 4,
        name: "Item",
        component: Item,
        description: "It handles the content from one item of a accordion. Its nested within the accordion body. Put the content inside of the <Input> tags; for the title you should use the variables!",
        author: "Markus Haubold",
        version: "1.0",
        usedBy: [
          "ImprintContent",
        ],
        dependecies: [
          "getContext (import from svelte)",
          "slide (import from svelte/transition)",
        ],
        variables: [
          {
            name: "id",
            description: "Identifier for the item to handle the open-close-mechanism",
          },  
          {
            name: "title",
            description: "The displayd title from the accordion tab (preview closed status)",
          },
          {
            name: "subtitle",
            description: "The displayd subtitle from the accordion tab (preview closed status)",
          }
        ],
        script: 
        `
    import { getContext } from 'svelte'
    import { slide } from "svelte/transition";
   
    export let id: string = "id";
    export let title: string = "title";

    let isHovered = false;
    let isFocused = false;
    const active = getContext("context");
    $: isCurrentActive = $active === id;
   
    const onClickHandler = () => {
        if (isCurrentActive) {
            $active = null;
        }
        else {
            $active = id;
        }
    }
        `,
        html: 
        `
    <div class="divide-y divide-gray-200 rounded-sm border border-gray-200">
      <button
        on:click={onClickHandler}
        on:mouseenter={() => isHovered = true}
        on:mouseleave={() => isHovered = false}
        on:focus={() => isFocused = true}
        on:blur={() => isFocused = false}
        class="flex text-left w-full focus:outline-none items-center p-4" class:bg-gray-50={isHovered || isFocused}>
        <div class="w-full">
          <div class="
              font-bold
              transition
              text-gray-500
          "
              class:text-indigo-600={isHovered || isFocused}>
              <span class="mt-3 text-lg font-semibold tracking-tight text-gray-900"
                    class:border-opacity-50={isFocused}
                    class:border-blue-300={isFocused}>
                  {title}
              </span>
          </div>
        </div>
        <div class="text-xl transform transition text-gray-900"
            class:rotate-180={isCurrentActive}
            class:text-indigo-600={isHovered || isFocused}>
            &#9662;
        </div>
      </button>
      {#if isCurrentActive}
        <div class="p-4 text-base text-gray-500"
            transition:slide>
            <slot/>
        </div>
      {/if}
    </div>
        `
      },
      {
        ID: 5,
        name: "Body",
        component: Body,
        description: "Its the wrapper for all accordion items per section.",
        author: "Markus Haubold",
        version: "1.0",
        usedBy: [
          "Route imprint",
        ],
        dependecies: [
          "setContext (import from svelte)",
          "writable (import from svelte/store)",
        ],
        variables: [
          {
            name: "active",
            description: "It set's the the id from current opened tab. So it handles the nested items for opening and closing",
          },  
        ],
        script: 
        `
    import { setContext } from "svelte";
    import { writable } from "svelte/store";

    export let active: any = null;
    const activeStore = writable(active);
    
    $: activeStore.set(active);
    $: active = $activeStore;
    $: {
        console.log("Prop and store not are not synchronized");
        console.log("active: ", active);
        console.log("activeStore: ", $activeStore);
        console.log();
        console.log();
    };

    setContext("context", activeStore);
        `,
        html: 
        `
    <slot/>
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
        name: "DocuTemplateScript1",
        description: "Description of DocuTemplateScript1. Dont delete this!",
        author: "Maxi Musterfrau",
        version: "x.y",
        usedBy: [
          "script 2",
          "script 3"
        ],
        dependecies: [
          "dependecie1",
          "dependecie2"
        ],
        variables: [
          {
            name: "var1",
            description: "tempVar1",
          },  
          {
            name: "var2",
            description: "tempVar2",
          },
          {
            name: "var3",
            description: "tempVar3",
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
        ID: 1,
        name: "DocuTemplateScript2",
        description: "Description of DocuTemplateScript2. Dont delete this!",
        author: "Max Mustermann",
        version: "x.y",
        usedBy: [
          "-",
        ],
        dependecies: [
          "-",
        ],
        variables: [
          {
            name: "-",
            description: "-",
          },  
        ],
        script: 
        `
  function helloWorld(): boolean {
    console.log("hello world")
    return true;
  }
      `,
      }
      //-------------------------------------------------------------------------------------------
    ];

    /*########################################################################################################################################################################*/

    export const databaseData = [
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

    export const designData = [
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