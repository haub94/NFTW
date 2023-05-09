<script lang="ts" context="module">
  //author shorthand
  const MH: string = "Markus Haubold";
  const DR: string = "Daniel Rittrich";
  const LXT: string = "Le Xuan Tran";
  const AK: string = "Anna Kozachuk";
  
  //add all component-imports here
  import Card from "$lib/components/Card.svelte";
  import CardSpacetravel from "$lib/components/CardSpacetravel.svelte";
  import ImprintContent from "$lib/sectionComponents/ImprintContent.svelte";
  import Item from "$lib/tools/accordion/Item.svelte";
  import Body from "$lib/tools/accordion/Body.svelte";
  import BgVideo from "$lib/sectionComponents/BgVideo.svelte";
  import DividerTextImage from "$lib/sectionComponents/DividerTextImage.svelte";
  import Form from "$lib/sectionComponents/Form.svelte";
  import SectionBg002 from "$lib/sectionComponents/SectionBg002.svelte";
  import SectionBg001 from "$lib/sectionComponents/SectionBg001.svelte";
  import SectionHeader from "$lib/components/SectionHeader.svelte";
  import TestimonialCard from "$lib/components/TestimonialCard.svelte";
  import StorrieCard from "$lib/components/StorieCard.svelte";
  import Stories from "$lib/sectionComponents/Stories.svelte";
  import TestimonialSwiper from "$lib/sectionComponents/TestimonialSwiper.svelte";
  import Banner from "$lib/elements/Banner.svelte";
  import Bulletpoints from "$lib/elements/dataprotection/Bulletpoints.svelte";

  export const componentData = [
    /*
      ---------TEMPLATE--------- 
      {
        ID: 0,
        name: "",
        component: ,
        description: "",
        author: "",
        version: ".",
        usedBy: [
          ""
        ],
        dependecies: [
          "Dependecie 1", 
        ],
        variables: [
          {
            name: "",
            description: "",
          },
        ],
        script: 
      `

      `
        html:
      `

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
      usedBy: ["Usage 1", "Usage 2"],
      dependecies: ["Dependecie 1", "Dependecie 2"],
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
        },
      ],
      script: `
  import { checkUndefinedNullOrEmpty } from "../tools/Tools.svelte";

  export let img: string = "/brokenImage.png";
  export let title: string = "defaultVaule";
  export let caption: string = "defaultVaule";
        `,
      html: `
  <a href="/" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="h-auto w-48 object-cover rounded-l-lg" src={checkUndefinedNullOrEmpty(img) ? "/brokenImage.png" : img} alt="" />
    <div class="flex flex-col justify-between p-4 leading-normal">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{caption}</p>
    </div>
  </a>
        `,
    },
    {
      ID: 1,
      name: "DocuTemplateCard2",
      component: Card,
      description: "Description of DocuTemplateCard2. Dont delete this!",
      author: "Max Mustermann",
      version: "x.y",
      usedBy: ["-"],
      dependecies: ["-"],
      variables: [
        {
          name: "-",
          description: "-",
        },
      ],
      script: "",
      html: `
  <a href="/" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="h-auto w-48 object-cover rounded-l-lg" src={checkUndefinedNullOrEmpty(img) ? "/brokenImage.png" : img} alt="" />
    <div class="flex flex-col justify-between p-4 leading-normal">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{caption}</p>
    </div>
  </a>
        `,
    },
    {
      ID: 2,
      name: "CardSpacetravel",
      component: CardSpacetravel,
      description:
        "Content card for spacetravel page that shows informations about the next steps you can go to choose your vacation. It's a clickable component that also has a button to click on.",
      author: DR,
      version: "1.0",
      usedBy: ["Route /spacetravel"],
      dependecies: ["-"],
      variables: [
        {
          name: "img",
          description: "string: image-path like '/brokenImage.png'",
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
          description:
            "string: for image position - choose one out of (center, bottom, top, left, left-bottom, left-top, right, right-bottom, right-top)",
        },
        {
          name: "imgSize",
          description:
            "string | number: for image scaling (auto, cover, contain ... or own size: 50%, 200px)",
        },
        {
          name: "path",
          description: "string: for routing path '/home/user/config'",
        },
      ],
      script: `
export let img: string = "/brokenImage.png";
export let title: string = "Lorem ipsum dolor";
export let caption: string = "Lorem ipsum dolor";
export let imgPosition: string = "center"; // center, bottom, top, left, left-bottom, left-top, right, right-bottom, right-top
export let imgSize: string | number = "cover"; // auto, cover, contain ... or own size: 50%, 200px
export let path: string = "/"; // routing path "/home/user/config"
        `,
      html: `
        <a href={path}>
  <div class="group relative">
    <div
      class="absolute -inset-2 rounded-lg bg-gradient-to-br from-NFTW-lila-500 via-NFTW-blue-500 to-NFTW-pink-500 opacity-0 blur transition duration-700 group-hover:opacity-100"
    />
    <div
      class="relative flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10 bg-blend-multiply bg-no-repeat"
      style="
    background-image: url('{img}');
    background-size: {imgSize};
    background-position: {imgPosition}"
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
        `,
    },
    {
      ID: 3,
      name: "ImprintContent",
      component: ImprintContent,
      description: "It's the component with the data for the imprint site.",
      author: MH,
      version: "1.0",
      usedBy: ["Route imprint"],
      dependecies: ["Accordion Body", "Accordion Item"],
      variables: [
        {
          name: "-",
          description: "-",
        },
      ],
      script: `
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
      html: `
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
        `,
    },
    {
      ID: 4,
      name: "Item",
      component: Item,
      description:
        "It handles the content from one item of a accordion. Its nested within the accordion body. Put the content inside of the <Input> tags; for the title you should use the variables!",
      author: MH,
      version: "1.0",
      usedBy: ["ImprintContent"],
      dependecies: [
        "getContext (import from svelte)",
        "slide (import from svelte/transition)",
      ],
      variables: [
        {
          name: "id",
          description:
            "Identifier for the item to handle the open-close-mechanism",
        },
        {
          name: "title",
          description:
            "The displayd title from the accordion tab (preview closed status)",
        },
        {
          name: "subtitle",
          description:
            "The displayd subtitle from the accordion tab (preview closed status)",
        },
      ],
      script: `
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
      html: `
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
        `,
    },
    {
      ID: 5,
      name: "Body",
      component: Body,
      description: "Its the wrapper for all accordion items per section.",
      author: MH,
      version: "1.0",
      usedBy: ["Route imprint"],
      dependecies: [
        "setContext (import from svelte)",
        "writable (import from svelte/store)",
      ],
      variables: [
        {
          name: "active",
          description:
            "It set's the the id from current opened tab. So it handles the nested items for opening and closing",
        },
      ],
      script: `
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
      html: `
    <slot/>
        `,
    },
    {
      ID: 6,
      name: "BgVideo",
      component: BgVideo,
      description:
        "Shows a video in full width with variable height. In the center of the video you can show text as title and caption. The caption can also contain a link.",
      author: DR,
      version: "1.1",
      usedBy: ["/ home"],
      dependecies: ["checkUndefinedNullOrEmpty (from lib/tools/Tools.svelte)"],
      variables: [
        {
          name: "title",
          description: "string: For title-text",
        },
        {
          name: "caption",
          description: "string: For caption-text",
        },
        {
          name: "video",
          description: "string: for video URL or local path",
        },
        {
          name: "videoHeight",
          description:
            "string|number: You can set the height of the video like '50vh' for example ",
        },
        {
          name: "captionPath",
          description:
            "string: You can define a link. The clickable link will only be shown when one is set.",
        },
      ],
      script: `
      import { checkUndefinedNullOrEmpty } from "$lib/tools/Tools.svelte";

export let title: string = "Lorem ipsum dolor";
export let caption: string = "Lorem ipsum dolor";
export let video: string = "/videos/SPACE_SD.mp4";
export let videoHeight: string | number = "50vh";
export let captionPath: string = "";
      `,
      html: `
      <body class="bg-NFTW-bg text-NFTW-white">
  <section
    class="videoCon relative overflow-hidden"
    style="height:{videoHeight}"
  >
    <video
      src={video}
      autoplay
      loop
      playsinline
      muted
      class="object-cover absolute h-full w-full top-0 left-0"
    />
    <div
      class="callout relative flex justify-center items-center h-full text-center z-10"
      style="flex-direction: column"
    >
      <h1
        class="p-0"
        style=" font-weight: 900;
      margin: 0 0 1rem;
      line-height: 1;
      font-size: 5vw;"
      >
        {title}
      </h1>
      {#if checkUndefinedNullOrEmpty(captionPath)}
        <div class="caption" style="font-size:2vw">
          {caption}
        </div>
      {:else}
        <a href={captionPath}>
          <div class="caption" style="font-size:2vw">
            {caption}
          </div>
        </a>
      {/if}
    </div>
  </section>
</body>

<style>
  .videoCon:after {
    content: "";
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(black, 0.2);
    z-index: 1;
  }
</style>
        `,
    },
    {
      ID: 7,
      name: "DividerTextImage",
      component: DividerTextImage,
      description:
        "Section component that shows text on the left side and a image on the right side. .",
      author: DR,
      version: "1.0",
      usedBy: ["Route /imprint"],
      dependecies: ["none"],
      variables: [
        {
          name: "img",
          description: "string: For imagepath like '/brokenImage.png'",
        },
        {
          name: "title",
          description: "string: Inserts title text ",
        },
        {
          name: "caption",
          description: "string: Inserts caption text",
        },
        {
          name: "imgPosition",
          description:
            "string: For image position - choose one out of (center, bottom, top, left, left-bottom, left-top, right, right-bottom, right-top)",
        },
        {
          name: "imgSize",
          description:
            "string | number: For image scaling (auto, cover, contain ... or own size: 50%, 200px)",
        },
      ],
      script: `
        export let img: string = "/brokenImage.png";
  export let title: string = "Lorem ipsum dolor";
  export let caption: string = "Lorem ipsum dolor";
  export let imgPosition: string = "center"; // center, bottom, top, left, left-bottom, left-top, right, right-bottom, right-top
  export let imgSize: string | number = "cover"; // auto, cover, contain ... or own size: 50%, 200px
        `,
      html: `
        <div class="relative bg-NFTW-bg bg-opacity-30">
  <div class="lg:absolute lg:inset-0 lg:left-1/2">
    <div
      class="h-64 w-full bg-NFTW-white sm:h-80 lg:absolute lg:h-full bg-blend-multiply bg-no-repeat"
      style="
    background-image: url('{img}');
    background-size: {imgSize};
    background-position: {imgPosition}"
    />
  </div>
  <div
    class="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32"
  >
    <div class="px-6 lg:px-8">
      <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
        <h2 class="text-3xl font-bold tracking-tight text-NFTW-white">
          {title}
        </h2>
        <p class="mt-2 text-lg leading-8 text-NFTW-white">
          {caption}
        </p>
      </div>
    </div>
  </div>
</div>
        `,
    },
    {
      ID: 8,
      name: "Form",
      component: Form,
      description:
        "Form with all needed fields for contact and getInContact page. The form transforms into the correct version for each of the two pages.",
      author: "Daniel Rittrich / Markus Haubold",
      version: "1.1",
      usedBy: ["Route getInContact", "Route contact"],
      dependecies: [
        "page (import from app/stores)", 
        "dev (import from $app/environment", 
        "emailjs (import from @emailjs/browser)", 
        "Banner.svelte", "configMemory (import from stores/journeyConfigMemory.ts"
      ],
      variables: [
        {
          name: "isGetInContact",
          description:
            "boolean: Checks if the actual page is /getInContact or a subpage with this string",
        },
        {
          name: "isContact",
          description:
            "boolean: Checks if the actual page is /contact or a subpage with this string",
        },
        {
          name: "labelStyle",
          description:"string: styling classes for the form labels",
        },
        {
          name: "inputStyle",
          description:"string: styling classes for the form input fields",
        },
        {
          name: "dateStyle",
          description:"string: styling classes for the form date fields",
        },
        {
          name: "selectionStyling",
          description:"string: styling classes for the form selection fields",
        },
        {
          name: "boolean: overrideMemory",
          description:"allow to overrite the configMemory during the development",
        },
        {
          name: "empty",
          description:"string: represents a empty string (syntax sugar)",
        },
        {
          name: "$configMemory",
          description:"interface of type journeyConfigMemory: contains the data from the svelte-store journeyConfigMemory",
        },
        {
          name: "SERVICE_ID",
          description:"string: service identification number for the request with the emailjs-client",
        },
        {
          name: "TEMPLATE_ID",
          description:"string: selection for the choosen template for the request with the emailjs-client",
        },
        {
          name: "PUPLIC_KEY",
          description:"string: puplic key for the authetication at the emailjs-client",
        },
        {
          name: "inputData.destination",
          description:"string: value from the form-selection field destination",
        },
        {
          name: "inputData.journeyPurpose",
          description:"string: value from the form-selection field journeyPurpes",
        },
        {
          name: "inputData.startDate",
          description:"string: value from the form-date field startDate",
        },
        {
          name: "inputData.endDate",
          description:"string: value from the form-date field endDate",
        },
        {
          name: "inputData.firstname",
          description:"string: value from the form-input field firstName",
        },
        {
          name: "inputData.lastName",
          description:"string: value from the form-input field lastName",
        },
        {
          name: "inputData.emailAddress",
          description:"string: value from the form-input field emailAdress",
        },
        {
          name: "inputData.message",
          description:"string: value from the form-input field message",
        },
      ],
      script: 
  `
  import { page } from "$app/stores";
  import { dev } from '$app/environment';
  import emailjs from '@emailjs/browser'; //Haubold, Markus - mailing client 
  import Banner from "$lib/elements/Banner.svelte";
  import configMemory from '../../stores/journeyConfigMemory.ts'; //import the config store

  const isGetInContact = $page.url.pathname.includes("/getInContact");
  const isContact = $page.url.pathname.includes("/contact");

  //Haubold, Markus - add vars to style redundant parts
  const labelStyle = "block text-sm font-semibold leading-6 text-NFTW-white";
  const inputStyle = "block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-NFTW-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-NFTW-blue-500 sm:text-sm sm:leading-6";
  const dateStyle = "block w-full mt-2.5 rounded-md border-0 bg-white/5 px-3.5 py-2 text-NFTW-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-NFTW-blue-500 sm:text-sm sm:leading-6";
  const selectionStyling = "bg-NFTW-black-600 bg-opacity-90";

  const overrideMemory: boolean = true; //DEV-ONLY
  const empty: string = "";

  //helper to override the memory during dev
  if (dev && overrideMemory) {
    $configMemory.destination = "Moon";
    $configMemory.journeyPurpose = "Birthdayspecial";
    $configMemory.startDate = "2023-05-12";
    $configMemory.endDate = "2023-05-25";
  }

  //Haubold, Markus - Use input values to send mail to the customer
  //config EmailJS
  const SERVICE_ID: string = 'service_vzyr2ok';
  let TEMPLATE_ID: string = ''; //depends on the formtype
  const PUPLIC_KEY: string = 'YYaLHQ2Bd6V9Rk4vS';

  //binded form inputs
  let inputData = {
  destination: $configMemory.destination === empty ? "Nothing Choosen" : $configMemory.destination,
  journeyPurpose: $configMemory.journeyPurpose === empty ? "Nothing Choosen" : $configMemory.journeyPurpose,
  startDate: $configMemory.startDate === empty ? "" : $configMemory.startDate,
  endDate: $configMemory.endDate === empty ? "" : $configMemory.endDate,
  firstName:  '',
  lastName: '',
  emailAddress: '',
  message: '',
}

  //select the template based on the current form type
  if (isContact) {
    TEMPLATE_ID = 'template_contactRequest';
  } else if (isGetInContact) {
    TEMPLATE_ID = 'template_appRequest';
  }

  let bannerStatus: number = 0;

  //clear inputbuffer after sending
  function clearInputValues(): boolean {
    inputData.destination = '';
    inputData.journeyPurpose = '';
    inputData.startDate = '';
    inputData.endDate = '';
    inputData.firstName = '';
    inputData.lastName = '';
    inputData.emailAddress = '';
    inputData.message = '';

    return true;
  }

  //send mail with emailJs client
  function sendEmail( S_ID: string,
                      T_ID: string,
                      P_KEY: string,
                      destination: string,
                      journeyPurpose: string,
                      startDate: string,
                      endDate: string,
                      firstName: string,
                      lastName: string, 
                      emailAddress: string,
                      message: string): boolean {
      
    emailjs.send(S_ID, 
                  T_ID, 
                  {
                    destination: destination,
                    journeyPurpose: journeyPurpose,
                    startDate: startDate,
                    endDate: endDate,
                    firstName: firstName,
                    lastName: lastName,
                    emailAddress: emailAddress,
                    message: message
                  }, 
                  P_KEY)

      .then((result) => {
        if (dev) { console.log('SUCCESS!', result.text)}
          bannerStatus = 1;  
      }, (error) => {
        if (dev) { console.log('FAILED...', error.text)} 
          bannerStatus = 999;   
          clearInputValues();

          return false
      },);

      clearInputValues();

      return true
  }

  //load test-data during dev
  function loadDevData() {
    inputData.destination = "Moon";
    inputData.journeyPurpose = "Vacation";
    inputData.startDate = "2023-05-10";
    inputData.endDate = "2023-05-15";
    inputData.firstName = "Markus";
    inputData.lastName = "Haubold";
    inputData.emailAddress = "haubie94@web.de";
    inputData.message = "Hello, that's data are loaded during DEV-mode!";
    console.log("DEV data loaded successfull!")
  }

  //log data from the input
  function logInput() {
    console.log("mailing data:")
    console.log('destination :>> ',inputData.destination);
    console.log('journeyPurpose :>> ',inputData.journeyPurpose);
    console.log('start-date :>> ',inputData.startDate);
    console.log('end-date :>> ',inputData.endDate);
    console.log('firstName :>> ', inputData.firstName);
    console.log('lastName :>> ', inputData.lastName);
    console.log('emailAddress :>> ', inputData.emailAddress);
    console.log('message :>> ', inputData.message);
    
    
  }

  //proof valid date
  function validateDate(start: string, end: string): boolean {  
    const today = new Date();
    const startAsDate = new Date(start);
    const endAsDate = new Date(end);

    //end after start
    if (startAsDate.valueOf() > endAsDate.valueOf()) { 
      bannerStatus = 100;
      console.log("departure after arrival")
      return false
    } 
    //start and end same
    if (startAsDate.valueOf() === endAsDate.valueOf()) { 
      bannerStatus = 101
      console.log("start and end same")
      return false
    } 
    //departure today
    if ((startAsDate.getDate() === today.getDate()) &&
        (startAsDate.getMonth() === today.getMonth()) &&
        (startAsDate.getFullYear() === today.getFullYear())) { 
      bannerStatus = 102
      console.log("departure today")
      return false
    }
    //start before today
    if (startAsDate.valueOf() < today.valueOf()) { 
      bannerStatus = 100;
      console.log("start in past")
      return false
    } 

    return true
  }

  //controller which is executed after submit
  function inputController() {
      if (dev) {
        logInput();
      }

      //CALL HERE THE FUNTION TO WRITE THE DATA IN THE DB !!!!!!

      if (validateDate(inputData.startDate, inputData.endDate)) {
        console.log("call emailJS function to send mail");
        //send email to customer
        sendEmail(SERVICE_ID,
                  TEMPLATE_ID,
                  PUPLIC_KEY,
                  inputData.destination,
                  inputData.journeyPurpose,
                  inputData.startDate,
                  inputData.endDate,
                  inputData.firstName, 
                  inputData.lastName,
                  inputData.emailAddress,
                  inputData.message
        );
      }
  }
  `,
      html: 
  `
  <!--load testdate for dev-mode-->
 {#if dev}
    <div class="">
      <button
        on:click={loadDevData}
        class="rounded-md bg-green-500 px-3.5 py-2.5 text-center text-sm font-semibold text-NFTW-white shadow-sm hover:bg-cyan-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >Load DEV-Data ...</button
      >
    </div>
 {/if}




<!-- GET IN CONTACT -->
<div class="relative isolate bg-NFTW-bg bg-opacity-50">
      
  <!--status banner-->
  <div class="absolute z-30 top-0 w-full">
    {#if bannerStatus === 100}
      <Banner buzzWord="invalid date!" text="Please check the end- and startdate. The both must be in the future." color="red" />
    {:else if bannerStatus === 101}
      <Banner buzzWord="invalid date!" text="Departure and arrival at the same day is not possible...but we working on faster rockets to make this happen!" color="red" />
    {:else if bannerStatus === 102}
    <Banner buzzWord="invalid date!" text="Departure today is not possible!" color="red" />
    {:else if bannerStatus === 1}
      <Banner buzzWord="mailing successfull!" text="Your mail was succesfully sent. Check your mailbox for the request confirmation." color="green" />
    {:else if bannerStatus === 999}
      <Banner buzzWord="mailing error!" text="UuupsiWhuupsi... It looks like there was an error during the transmission. Try again or contact us by phone: +99 123 456 789" color="red" />
    {/if}
  </div>

  <div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
    <div class="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
      <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
        <div
          class="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2"
        >
          <svg
            class="absolute inset-0 h-full w-full stroke-gray-700 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2"
                width="200"
                height="200"
                x="100%"
                y="-1"
                patternUnits="userSpaceOnUse"
              >
                <path d="M130 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="100%" y="-1" class="overflow-visible fill-gray-800/20">
              <path d="M-470.5 0h201v201h-201Z" stroke-width="0" />
            </svg>
            <rect
              width="100%"
              height="100%"
              stroke-width="0"
              fill="url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)"
            />
          </svg>
          <div
            class="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]"
            aria-hidden="true"
          >
            <div
              class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-[#80caff] to-[#4f46e5] opacity-20"
              style="clip-path: polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)"
            />
          </div>
        </div>
        <h2 class="text-3xl font-bold tracking-tight text-NFTW-white">
          {#if isContact}Contact{/if}
          {#if isGetInContact}Get in contact{/if}
        </h2>
        {#if isContact}
          <p class="mt-6 text-lg leading-8 text-NFTW-white">
            Text for Contact Site
          </p>
        {/if}
        {#if isGetInContact}
          <p class="mt-6 text-lg leading-8 text-NFTW-white">
            It is a pleasure to have you here and plan an unforgettable journey
            with us.
          </p>
          <p class="mt-6 text-lg leading-8 text-NFTW-white">
            In this final step, please review your information about your travel
            preferences.
          </p>
          <p class="mt-6 text-lg leading-8 text-NFTW-white">
            If you have selected the Birthday Special or Honeymoon option,
            please also provide your preferred date.
          </p>
          <p class="mt-6 text-lg leading-8 text-NFTW-white">
            Provide your contact information and send us a message with your
            application for a guaranteed experience that is out of this world.
          </p>
          <p class="mt-6 text-lg leading-8 text-NFTW-white">
            We appreciate your trust in us and we are committed to providing you
            with the best possible service. Our team is dedicated to making your
            journey memorable and ensuring that every detail is taken care of.
            You can rest assured that with us, you will have an experience that
            exceeds your expectations.
          </p>
        {/if}
        {#if isContact}
          <dl class="mt-10 space-y-4 text-base leading-7 text-NFTW-white">
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Telephone</span>
                <svg
                  class="h-7 w-6 text-NFTW-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                  />
                </svg>
              </dt>
              <dd>545 Mavis Island<br />Chicago, IL 99191</dd>
            </div>
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Telephone</span>
                <svg
                  class="h-7 w-6 text-NFTW-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </dt>
              <dd>
                <a class="hover:text-NFTW-white" href="tel:+1 (555) 234-5678"
                  >+1 (555) 234-5678</a
                >
              </dd>
            </div>
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Telephone</span>
                <svg
                  class="h-7 w-6 text-NFTW-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </dt>
              <dd>
                <a class="hover:text-NFTW-white" href="mailto:hello@example.com"
                  >hello@example.com</a
                >
              </dd>
            </div>
          </dl>
        {/if}
      </div>
    </div>
    
    <!-- FORM -->
    <form
      on:submit|preventDefault={inputController}
      class="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
    >
      <div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
        <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {#if isGetInContact}
            <div>
              <label
                for="destination"
                class={labelStyle}
                >Destination</label
              >
              <select
                required
                bind:value={inputData.destination}
                id="destination"
                name="destination"
                class={dateStyle}
              >  
                <option class={selectionStyling} selected>{inputData.destination}</option>             
                <option class={selectionStyling}>Mars</option>
                <option class={selectionStyling}>Moon</option>
                <option class={selectionStyling}>Venus</option>
              </select>
            </div>
            <div>
              <label
                for="journeyjourneyPurpose"
                class={labelStyle}
                >Journey Purpose</label
              >
              <select
                required
                bind:value={inputData.journeyPurpose}
                id="journeyjourneyPurpose"
                name="journeyjourneyPurpose"
                class={dateStyle}
              >
                <option class={selectionStyling} selected>{inputData.journeyPurpose}</option>             
                <option class={selectionStyling}
                  >Birthdayspecial</option
                >
                <option class={selectionStyling}
                  >Honeymoon</option
                >
                <option class={selectionStyling}
                  >Phototour</option
                >
                <option class={selectionStyling}>Vacation</option
                >
              </select>
            </div>

            <!--startDate-->
              <div>
                <label
                  for="startDate"
                  class={labelStyle}
                  >Start Date</label
                >
                <!--disable datepicker for vacation, phototour, oure recomendation-->
                {#if (inputData.journeyPurpose === "Birthdayspecial") || (inputData.journeyPurpose === "Honeymoon") }
                  <input
                    required
                    bind:value={inputData.startDate}
                    id="startDate"
                    name="startDate"
                    type="date"
                    class={dateStyle}
                  />
                {:else}
                  <input
                  disabled
                  required
                  bind:value={inputData.startDate}
                  id="startDate"
                  name="startDate"
                  type="date"
                  class={dateStyle}
                  />
                {/if}
              </div>
              
              <!--endDate-->
              <div>
                <label
                  for="endDate"
                  class={labelStyle}
                  >End Date</label
                >
                <!--disable datepicker for vacation, phototour, oure recomendation-->
                {#if (inputData.journeyPurpose === "Birthdayspecial") || (inputData.journeyPurpose === "Honeymoon") }
                  <input
                  required
                  bind:value={inputData.endDate}
                  id="endDate"
                  name="endDate"
                  type="date"
                  class={dateStyle}
                  />
                {:else}
                  <input
                  disabled
                  required
                  bind:value={inputData.endDate}
                  id="endDate"
                  name="endDate"
                  type="date"
                  class={dateStyle}
                  />
                {/if}

              </div>
            

            <div class="mb-10 sm:col-span-2" />
          {/if}
          
          <!--first name-->
          <div>
            <label
              for="first-name"
              class={labelStyle}
              >First name</label
            >
            <div class="mt-2.5">
              <input
                required
                bind:value={inputData.firstName}
                type="text"
                name="first-name"
                id="first-name"
                autocomplete="given-name"
                class={inputStyle}
              />
            </div>
          </div>

          <!--last name-->
          <div>
            <label
              for="last-name"
              class={labelStyle}
              >Last name</label
            >
            <div class="mt-2.5">
              <input
                required
                bind:value={inputData.lastName}
                type="text"
                name="last-name"
                id="last-name"
                autocomplete="family-name"
                class={inputStyle}
              />
            </div>
          </div>

          <!--email address-->
          <div class="sm:col-span-2">
            <label
              for="email"
              class={labelStyle}
              >Email</label
            >
            <div class="mt-2.5">
              <input
                required
                bind:value={inputData.emailAddress}
                type="email"
                name="email"
                id="email"
                autocomplete="email"
                class={inputStyle}
              />
            </div>
          </div>

          <!--message-->
          <div class="sm:col-span-2">
            <label
              for="message"
              class={labelStyle}>
              {#if isContact}
                Message
              {:else}
                 Application <br> (Convince us why we should take exactly YOU with us!)
              {/if}
              
            </label
            >
            <div class="mt-2.5">
              <textarea
                required
                bind:value={inputData.message}
                name="message"
                id="message"
                rows="4"
                class="block w-full min-h-min rounded-md border-0 bg-white/5 px-3.5 py-2 text-NFTW-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-NFTW-blue-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
       
        <!--submit-->
        <div class="mt-8 flex justify-end">
          <button
            type="submit"
            class="rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-NFTW-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >Send message</button
          >
        </div>
      </div>
    </form>
  </div>
</div>

  `,
    },
    {
      ID: 9,
      name: "SectionBg001",
      component: SectionBg001,
      description: "Background for a section that can be filled with content",
      author: DR,
      version: "1.0",
      usedBy: ["on some pages"],
      dependecies: [
        "checkUndefinedNullOrEmpty (import from lib/tools/Tools.svelte)",
      ],
      variables: [
        {
          name: "title1of2",
          description: "string: title text",
        },
        {
          name: "title2of2",
          description: "string: title number 2 text - is shown only if needed",
        },
        {
          name: "caption",
          description: "string: caption text",
        },
      ],
      script: `
        import { checkUndefinedNullOrEmpty } from "$lib/tools/Tools.svelte";

export let title1of2: string = "Lorem ipsum";
export let title2of2: string = "";
export let caption: string = "Lorem ipsum dolor.";
    `,
      html: `
        <div class="isolate overflow-hidden bg-NFTW-bg">
  <div class="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8">
    <div class="mx-auto max-w-4xl">
      <p class="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
        {checkUndefinedNullOrEmpty(title2of2) ? title1of2 : title1of2 + " "}<br
          class="hidden sm:inline lg:hidden"
        />{title2of2}
      </p>
    </div>
    <div class="relative mt-6">
      <p class="mx-auto max-w-2xl text-lg leading-8 text-white/60">
        {caption}
      </p>
      <svg
        viewBox="0 0 1208 1024"
        class="absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0"
      >
        <ellipse
          cx="604"
          cy="512"
          fill="url(#radialGradient_001)"
          rx="604"
          ry="512"
        />
        <defs>
          <radialGradient id="radialGradient_001">
            <stop stop-color="#3500BF" />
            <stop offset="1" stop-color="#9300B9" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  </div>
  <div class="flow-root pb-96">
    <div class="-mt-80">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          class="mx-auto grid max-w-md grid-cols-1 gap-16 lg:max-w-4xl lg:grid-cols-2"
        >
          <slot />
        </div>
      </div>
    </div>
  </div>
</div>
        `,
    },
    {
      ID: 10,
      name: "SectionBg002",
      component: SectionBg002,
      description:
        "Background for a section that can be filled with content. It comes with two variants. First one with full width and second one with two columns. This can be chossen with the variable 'twoCols'.",
      author: DR,
      version: "2.0",
      usedBy: ["nearly all pages"],
      dependecies: ["randomPercentage (import from lib/tools/Tools.svelte)"],
      variables: [
        {
          name: "twoCols",
          description:
            "boolean: delivers the background with two columns for content insteat with full width",
        },
      ],
      script: `
        import { randomPercentage } from "$lib/tools/Tools.svelte";

export let twoCols: boolean = false;
    `,
      html: `
        <div class="relative isolate bg-NFTW-bg px-6 py-24 sm:py-32 lg:px-8">
  <div
    class="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
    aria-hidden="true"
  >
    <div
      class="mx-auto aspect-[1155/678] w-full bg-gradient-to-tr from-NFTW-pink-300 to-NFTW-blue-400 opacity-30"
      style="clip-path: polygon({randomPercentage()} {randomPercentage()}, 100% 61.6%, 97.5% 26.9%, {randomPercentage()} 0.1%, 80.7% 2%, 72.5% 32.5%, {randomPercentage()} 62.4%, 52.4% 68.1%, 47.5% 58.3%, {randomPercentage()} 34.5%, 27.5% 76.7%, 0.1% 64.9%, {randomPercentage()} 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
    />
  </div>
  
    <!-- universal with full width -->
    {#if !twoCols}
      <div class="mx-auto w-full mt-16 items-center sm:mt-20 sm:gap-y-0">
        <slot />
      </div>
    {/if}
  
  <!-- 2 cols -->
  {#if twoCols}
    <div
      class="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 gap-x-16 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2"
    >
      <slot />
    </div>
  {/if}
</div>
        `,
    },
    {
          ID: 11,
      name: "Banner",
      component: Banner,
      description: "Shows buzzwords, the messages to this and differnt background colors",
      author: MH,
      version: "1.0",
      usedBy: ["Form.svelte"],
      dependecies: ["-"],
      variables: [
        {
          name: "buzzWord",
          description: "string: the core of the message in 1-2 words",
        },
        {
          name: "text",
          description: "string': the to shown messagetext",
        },
        {
          name: "color",
          description: "string: the backgroundcolor of the banner (no tailwind-classes!). Look inside the component to see the possibilities (or add new ones).",
        },
        {
          name: "stateColor",
          description: "string: depending on the variable color, it is set with a tailwind background color-class",
        },
        {
          name: "bannerHidden",
          description: "boolean: switchs the visibiltiy of the banner. Triggered with the litte cross on the right side of the banner.",
        },
      ],
      script: 
`
export let buzzWord: string = "buzzword";
export let text: string = "descripe buzzword here";
export let color: string = "green"; //color controling

let stateColor: string = "bg-white-600";
let bannerHidden: boolean = false;


export function setVisibilityState() {
    bannerHidden = !bannerHidden;
}

//color controller
switch (color) {
    case "green":
        stateColor = "bg-lime-800"; //all good
        break;
    case "red":
        stateColor = "bg-red-800";  //error
        break;
    default:
        stateColor = "bg-gray-800"; //info
        break;
}
`,
      html: 
`
  <div class:hidden={bannerHidden} class="pointer-events-none sm:px-6 sm:pb-5 lg:px-8">
    <div class="pointer-events-auto flex items-center justify-between gap-x-6 px-6 py-2.5 sm:rounded-xl sm:py-3 sm:pl-4 sm:pr-3.5 {stateColor}">     
      <p class="text-sm leading-6 text-white">
        <span class="font-semibold uppercase">{buzzWord}</span>
        <svg viewBox="0 0 2 2" class="mx-2 inline h-1 w-1 fill-current" aria-hidden="true">
            <circle cx="1" cy="1" r="1" />
        </svg>
        {text}
      </p>
      <button on:click={setVisibilityState} type="button" class="-m-3 flex-none p-3 focus-visible:outline-offset-[-4px]">
        <span class="sr-only">Dismiss</span>
        <svg class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
        </svg>
      </button>
    </div>
  </div>
`,
    },
    {
      ID: 20,
      name: "SectionHeader",
      component: SectionHeader,
      description: "Used as the intro part of every site. It contents a header for a few of buzzwords and a description to mention the core of the site.",
      author: MH,
      version: "1.0",
      usedBy: [
        "Route /clientStories",
      ],
      dependecies: [
        "-", 
      ],
      variables: [
        {
          name: "title",
          description: "string: content for the header / buzzwords",
        },
        {
          name: "description",
          description: "string: content for the site-description",
        },
       
      ],
      script: 
  `
    export let title: string = "title";
    export let description: string = "description";
  `,
      html: 
  `
  <div class="w-full flex flex-col text-center space-y-6 mb-20">
    <h1 class="font-bold text-4xl text-NFTW-pink-400">{title}</h1>
    <p class="text-NFTW-pink-100 text-lg lg:text-2xl">{description}</p>
  </div>
  `,
    },
    {
      ID: 21,
      name: "TestimonialCard",
      component: TestimonialCard,
      description: "Used as a card which can slide forced by the swiper-component (component TestimonialSwiper).",
      author: MH,
      version: "1.0",
      usedBy: [
        "Route /clientStorries",
        "TestimonialSwiper.svelte",
      ],
      dependecies: [
        "-", 
      ],
      variables: [
        {
          name: "givenStars",
          description: "string: number of stars for the review",
        },
        {
          name: "name",
          description: "string: name of the testimonial",
        },
        {
          name: "bookedDestination",
          description: "string: name of the reviewed destination",
        },
        {
          name: "bookedPurpose",
          description: "string: name of the reviewed journey purpose",
        },
        {
          name: "text",
          description: "string: text of the review",
        },
        {
          name: "image",
          description: "string: path to the image of the testimonial",
        },
        {
          name: "starColor",
          description: "array of string: contains the tailwind-class to colorize / hide (color=none) the given stars",
        },

       
      ],
      script: 
  `
    export let givenStars: string = "5";
    export let name: string = "testimonial name";
    export let bookedDestination: string = "destination";
    export let bookedPurpose: string = "purpose";
    export let text: string = "review text...";
    export let image: string = "/testimonials/DebiWorknesh.webp";

    let starColor: string[] = [
        "currentColor",
        "currentColor",
        "currentColor",
        "currentColor",
        "currentColor",
    ]

    switch (parseInt(givenStars)) {
        case 1:
            starColor[0] = "currentColor";
            starColor[1] = "";
            starColor[2] = "";
            starColor[3] = "";
            starColor[4] = "";
            break;
        case 2:
            starColor[0] = "currentColor";
            starColor[1] = "currentColor";
            starColor[2] = "";
            starColor[3] = "";
            starColor[4] = "";
            break;
        case 3:
            starColor[0] = "currentColor";
            starColor[1] = "currentColor";
            starColor[2] = "currentColor";
            starColor[3] = "";
            starColor[4] = "";
            break;
        case 4:
            starColor[0] = "currentColor";
            starColor[1] = "currentColor";
            starColor[2] = "currentColor";
            starColor[3] = "currentColor";
            starColor[4] = "";
            break;
        case 4:
            starColor[0] = "currentColor";
            starColor[1] = "currentColor";
            starColor[2] = "currentColor";
            starColor[3] = "currentColor";
            starColor[4] = "currentColor";
            break;
    
        default:
            starColor[0] = "currentColor";
            starColor[1] = "currentColor";
            starColor[2] = "currentColor";
            starColor[3] = "currentColor";
            starColor[4] = "currentColor";
            break;
    }
  `,
      html: 
  `
  <section class="bg-NFTW-blue-200 px-6 py-10 lg:px-8 rounded-xl">
    <figure class="mx-auto max-w-2xl">
      <p class="sr-only">5 out of 5 stars</p>
      <div class="flex gap-x-1 text-NFTW-pink-400">
        <svg class="h-5 w-5 flex-none" viewBox="0 0 20 20" fill={starColor[0]} aria-hidden="true">
          <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
        </svg>
        <svg class="h-5 w-5 flex-none" viewBox="0 0 20 20" fill={starColor[1]} aria-hidden="true">
          <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
        </svg>
        <svg class="h-5 w-5 flex-none" viewBox="0 0 20 20" fill={starColor[2]} aria-hidden="true">
          <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
        </svg>
        <svg class="h-5 w-5 flex-none" viewBox="0 0 20 20" fill={starColor[3]} aria-hidden="true">
          <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
        </svg>
        <svg class="h-5 w-5 flex-none" viewBox="0 0 20 20" fill={starColor[4]} aria-hidden="true">
          <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
        </svg>
      </div>
      <blockquote class="mt-10 text-xl font-semibold leading-8 tracking-tight text-NFTW-lila-900 sm:text-2xl sm:leading-9">
        <p>“{text}”</p>
      </blockquote>
      <figcaption class="mt-10 flex items-center gap-x-6">
        <img class="h-16 w-16 rounded-full bg-gray-50" src={image} alt="Portrait of the testimonial {name}">
        <div class="text-sm leading-6">
          <div class="font-semibold text-NFTW-lila-900">{name}</div>
          <div class="mt-0.5 text-NFTW-lila-900 italic">Booked Packages: {bookedDestination} & {bookedPurpose}</div>
        </div>
      </figcaption>
    </figure>
  </section>
  `,
    },
    {
      ID: 22,
      name: "StorrieCard",
      component: StorrieCard,
      description: "Used as a card which contains the stats about completed journeys.",
      author: MH,
      version: "1.0",
      usedBy: [
        "Route /clientStories",
        "Stories.svelte",
      ],
      dependecies: [
        "IoMdPlanet (import from svelte-icons)", 
        "FaUsers (import from svelte-icons)", 
        "FaGrav (import from svelte-icons)", 
      ],
      variables: [
        {
          name: "destination",
          description: "string: name of the destination",
        },
        {
          name: "purpose",
          description: "string: name of the journey purpose",
        },
        {
          name: "completedTrips",
          description: "string: amount of the completed journeys in the past with this destination and journey purpose",
        },
        {
          name: "destinationImage",
          description: "string: contains the path to the image for the given destination (moon, mars, venus)",
        },
        {
          name: "statsTemplate",
          description: "array of objects: datastructure (header, value, icon) with the content for the three stat-points",
        },
       
      ],
      script: 
  `
    import IoMdPlanet from 'svelte-icons/io/IoMdPlanet.svelte';
    import FaUsers from 'svelte-icons/fa/FaUsers.svelte';
    import FaGrav from 'svelte-icons/fa/FaGrav.svelte';

    export let destination: string = "Mars";
    export let purpose: string = "Honeymoon";
    export let completedTrips: string = "99";


    let destinationImage: string = "";

    switch (destination) {
      case "Moon":
        destinationImage = "/planetsWithoutBg/moon.webp";
        break;
      case "Mars":
        destinationImage = "/planetsWithoutBg/mars.webp";
        break;
      case "Venus":
        destinationImage = "/planetsWithoutBg/venus.webp";
        break;
    
      default:
        break;
    }

    const statsTemplate = [
      {
        header: "destination",
        value: destination,
        icon: IoMdPlanet
      },
      {
        header: "purpose",
        value: purpose,
        icon: FaGrav
      },
      {
        header: "Completed trips",
        value: completedTrips,
        icon: FaUsers
      }
    ]
  `,
      html: 
  `
  <div class="flex flex-col bg-NFTW-blue-900 p-2 rounded-xl border-2 border-NFTW-blue-700 w-80 mb-12">
	<!--image-->
	<div class="w-full p-4" class:p-4={destination != "Moon"}> <!--moon is smaller than the other, so give the other padding-->
		<div class="bg-no-repeat bg-contain bg-center w-full h-96" style="background-image: url({destinationImage})"></div>
	</div>
	
	<div class:pt-8={destination === "Moon"}></div>
		<!--stats-->
		{#each statsTemplate as stat}
			<div class="mt-2 bg-NFTW-blue-200 grid grid-cols-1 w-full rounded-xl">
				<div class="relative overflow-hidden bg-none px-4 py-1 sm:px-6">
					<div class="absolute w-12 h-12 rounded-md bg-NFTW-lila-800 text-NFTW-lila-300 p-1">
						<svelte:component this={stat.icon} />
					</div>
					<p class="ml-16 truncate text-sm font-medium text-NFTW-black-500 uppercase">{stat.header}</p>
					<div class="ml-16 flex items-baseline">
						<p class="text-2xl font-semibold text-NFTW-black-500">{stat.value}</p>
					</div>
				</div>
			</div>
		{/each}
	</div>
  `,
    },
    {
      ID: 23,
      name: "Stories",
      component: Stories,
      description: "Section component which containes all StorrieCards (component StorrieCard)",
      author: MH,
      version: "1.0",
      usedBy: [
        "Route /clientStories",
      ],
      dependecies: [
        "StorrieCard.svelte",  
      ],
      variables: [
        {
          name: "cardData",
          description: "array of objects: contains the datastructure (destination, purpose, completedTrips) to generate the needed StorrieCards with it.",
        },       
      ],
      script: 
  `
  import StorieCard from "$lib/components/StorieCard.svelte";

  const cardData = [
      {
          destination: "Venus",
          purpose: "Honeymoon",
          completedTrips: "23"
      },
      {
          destination: "Mars",
          purpose: "Vacation",
          completedTrips: "49"
      },
      {
          destination: "Moon",
          purpose: "Birthdayspecial",
          completedTrips: "11"
      },
      {
          destination: "Mars",
          purpose: "Photosafarie",
          completedTrips: "36"
      },
      {
          destination: "Venus",
          purpose: "Saisonal Offer",
          completedTrips: "9"
      },
  ]
  `,
      html: 
`
  <div class="mb-28 w-full grid grid-col md:grid-cols-2 xl:grid-cols-3">
    {#each cardData as card}
        <div class="mx-auto">
            <StorieCard 
            destination={card.destination}
            purpose={card.purpose}
            completedTrips={card.completedTrips}
        />
        </div> 
    {/each}
  </div>
`,
    },
    {
      ID: 24,
      name: "TestimonialSwiper",
      component: TestimonialSwiper,
      description: "Section component to swipe the TestimonialCards automaticly one by one along the horizontal axis.",
      author: MH,
      version: "1.0",
      usedBy: [
        "Route /clientStories",
      ],
      dependecies: [
        "TestimonialCard.svelte",
        "register (import from swiper)",
        "swiper-container (comes with swiper package v9.2.4)",  
        "swiper-slide (comes with swiper package v9.2.4)",  
      ],
      variables: [
        {
          name: "testimonialData",
          description: "array of objects: contains the datastructure (name, bookedDestination, bookedPurpose, givenStars, reviewText, image) to generate the needed TestimonialCards.",
        },       
      ],
      script: 
`
  import TestimonialCard from '$lib/components/TestimonialCard.svelte';
  import { register } from 'swiper/element/bundle';

  register();

  const testimonialData = [
      {
          name: "Debi Worknesh",
          bookedDestination: "Moon",
          bookedPurpose: "Photosafarie",
          givenStars: "4",
          reviewText: "I recently went on a photosafari to space with this company, and it was truly a remarkable experience. The team at this company were incredibly helpful, ensuring that we had all the necessary equipment to capture stunning photos of space and the Earth from above. See you next year!",
          image: "/testimonials/DebiWorknesh.webp",
      },
      {
          name: "Marcius Cecilio",
          bookedDestination: "Mars",
          bookedPurpose: "Vacation",
          givenStars: "3",
          reviewText: "I highly recommend this company for anyone interested in a trip to Mars. They offer top-notch accommodations and an unforgettable journey through space. The team is knowledgeable and experienced, and they go above and beyond to ensure that your trip is safe, and out of this world.",
          image: "/testimonials/MarciusCecilio.webp",
      },
      {
          name: "Sung-Hyun Aysha",
          bookedDestination: "Venus",
          bookedPurpose: "Honeymoon",
          givenStars: "5",
          reviewText: "If you're looking for a honeymoon that's truly out of this world, I highly recommend booking a trip to Venus with this company. The team provided us with an amazing two-week itinerary, filled with romantic excursions and once-in-a-lifetime experiences. Thank you soo much for this!",
          image: "/testimonials/Sung-HyunAysha.webp",
      }
  ]
`,
      html: 
`
  <div class="w-full h-auto overflow-hidden">
    <swiper-container
        space-between=20
        autoplay="true"
        speed="600" 
        loop="true"
        slides-per-view={1}
        centered-slides={false}
        
    >
        {#each testimonialData as person}
            <swiper-slide>        
                <TestimonialCard 
                    name={person.name}
                    bookedDestination={person.bookedDestination}
                    bookedPurpose={person.bookedPurpose}
                    givenStars={person.givenStars}
                    text={person.reviewText}
                    image={person.image}
                />    
            </swiper-slide>
        {/each}
    </swiper-container>
  </div>
`,
    },
    {
        ID: 30,
        name: "Bulletpoints",
        component: Bulletpoints,
        description: "Generates a unsorted list with the list-symbol disc.",
        author: MH,
        version: "1.0",
        usedBy: [
          "Route /privacyPolicy"
        ],
        dependecies: [
          "Dependecie 1", 
        ],
        variables: [
          {
            name: "",
            description: "",
          },
        ],
        script: 
      `

      `,
        html:
      `

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
      usedBy: ["script 2", "script 3"],
      dependecies: ["dependecie1", "dependecie2"],
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
        },
      ],
      script: `
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
      usedBy: ["-"],
      dependecies: ["-"],
      variables: [
        {
          name: "-",
          description: "-",
        },
      ],
      script: `
  function helloWorld(): boolean {
    console.log("hello world")
    return true;
  }
      `,
    },
    {
      ID: 2,
      name: "journeyConfigMemory.ts",
      description: "Its a svelte-store to save the current choosen journey-configuration for global usage. It is used from the form (@get in contact site) to load the data for prefill the input fields.",
      author: MH,
      version: "1.0",
      usedBy: ["Form.svelte", ],
      dependecies: ["writable (import from svelte/store)"],
      variables: [
        {
          name: "config",
          description: "Represents the datastructure for: destination, journeyDurpose, startDate, endDate",
        },
        {
          name: "var2",
          description: "tempVar2",
        },
        {
          name: "var3",
          description: "tempVar3",
        },
      ],
      script: 
`
import { writable } from 'svelte/store';

let config = writable({
  destination: "",
  journeyPurpose: "",
  startDate: "",
  endDate: ""
});

export default config;
`,
    },
    //-------------------------------------------------------------------------------------------
  ];

  /*########################################################################################################################################################################*/

  export const databaseData = [
    {
      ID: 0,
      name: "",
      description: "Beschreibung zu Test_Script.",
      author: MH,
      version: "1.0",
      usedBy: "",
      dependecies: "",

      chapter: [
        {
          name: "overview",
        },
        {
          name: "usage",
          content: "blablabla",
        },
      ],
    },
    //-------------------------------------------------------------------------------------------
  ];

  /*########################################################################################################################################################################*/

  export const designData = [
    {
      ID: 0,
      name: "",
      description: "Beschreibung zu Test_Script.",
      author: MH,
      version: "1.0",
      usedBy: "",
      dependecies: "",

      chapter: [
        {
          name: "overview",
        },
        {
          name: "usage",
          content: "blablabla",
        },
      ],
    },
    //-------------------------------------------------------------------------------------------
  ];
</script>
