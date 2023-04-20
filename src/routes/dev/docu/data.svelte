<script lang="ts" context="module">

	//add all component-imports here
    import Card from "$lib/components/Card.svelte";


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