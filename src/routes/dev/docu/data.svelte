<script lang="ts" context="module">

	//add all component-imports here
    import Card from "$lib/components/Card.svelte";
    import CardSpacetravel from "$lib/components/CardSpacetravel.svelte";


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