<script lang="ts">
    import Documentation from "$lib/dev/docu/Documentation.svelte";

	//add all component-imports here
    import Card from "$lib/components/Card.svelte";
    


    const data = [
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
      */
      {
        ID: 0,
        name: "Header",
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
    ]

	
</script>


<Documentation data={data} />