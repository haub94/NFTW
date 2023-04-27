<script lang="ts" context="module">
  //add all component-imports here
  import Card from "$lib/components/Card.svelte";
  import CardSpacetravel from "$lib/components/CardSpacetravel.svelte";

  //imprint
  import ImprintContent from "$lib/sectionComponents/ImprintContent.svelte";

  //accordion
  import Item from "$lib/tools/accordion/Item.svelte";
  import Body from "$lib/tools/accordion/Body.svelte";
  import BgVideo from "$lib/sectionComponents/BgVideo.svelte";
  import DividerTextImage from "$lib/sectionComponents/DividerTextImage.svelte";
  import Form from "$lib/sectionComponents/Form.svelte";
  import SectionBg002 from "$lib/sectionComponents/SectionBg002.svelte";
  import SectionBg001 from "$lib/sectionComponents/SectionBg001.svelte";

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
      author: "Daniel Rittrich",
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
      author: "Markus Haubold",
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
      author: "Markus Haubold",
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
      author: "Markus Haubold",
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
        "Shows a video in full width with variable height. In the center of the video you can show text als title and caption.",
      author: "Daniel Rittrich",
      version: "1.0",
      usedBy: ["/ home"],
      dependecies: ["none"],
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
      ],
      script: `
        export let title: string = "Lorem ipsum dolor";
  export let caption: string = "Lorem ipsum dolor";
  export let video: string =
    "/videos/SPACE_SD.mp4";
  export let videoHeight: string | number = "50vh";
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
      <div class="caption" style="font-size:2vw">{caption}</div>
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
      author: "Daniel Rittrich",
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
      version: "1.0",
      usedBy: ["Route /getInContact", "Route /contact"],
      dependecies: ["page (import from app/stores)"],
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
      ],
      script: `
        import { page } from "$app/stores";

const isGetInContact = $page.url.pathname.includes("/getInContact");
const isContact = $page.url.pathname.includes("/contact");
      `,
      html: `
        <!-- GET IN CONTACT -->
<div class="relative isolate bg-NFTW-bg bg-opacity-50">
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
      action="#"
      method="POST"
      class="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
    >
      <div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
        <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {#if isGetInContact}
            <div>
              <label
                for="destination"
                class="block text-sm font-semibold leading-6 text-NFTW-white"
                >Destination</label
              >
              <select
                id="destination"
                name="destination"
                class="block w-full mt-2.5 rounded-md border-0 bg-white/5 px-3.5 py-2 text-NFTW-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-NFTW-blue-500 sm:text-sm sm:leading-6"
              >
                <option selected class="bg-NFTW-black-600 bg-opacity-90"
                  >Nothing choosen</option
                >
                <option class="bg-NFTW-black-600 bg-opacity-90">Mars</option>
                <option class="bg-NFTW-black-600 bg-opacity-90">Moon</option>
                <option class="bg-NFTW-black-600 bg-opacity-90">Venus</option>
              </select>
            </div>
            <div>
              <label
                for="journeypurpose"
                class="block text-sm font-semibold leading-6 text-NFTW-white"
                >Journey Purpose</label
              >
              <select
                id="journeypurpose"
                name="journeypurpose"
                class="block w-full mt-2.5 rounded-md border-0 bg-white/5 px-3.5 py-2 text-NFTW-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-NFTW-blue-500 sm:text-sm sm:leading-6"
              >
                <option selected class="bg-NFTW-black-600 bg-opacity-90"
                  >Nothing choosen</option
                >
                <option class="bg-NFTW-black-600 bg-opacity-90"
                  >Birthdayspecial</option
                >
                <option class="bg-NFTW-black-600 bg-opacity-90"
                  >Honeymoon</option
                >
                <option class="bg-NFTW-black-600 bg-opacity-90"
                  >Phototour</option
                >
                <option class="bg-NFTW-black-600 bg-opacity-90">Vacation</option
                >
              </select>
            </div>

            <!-- @MARKUS / @ANNA -------------------- {#if birthdayspecial||honeymoon} -->
            <div>
              <label
                for="startdate"
                class="block text-sm font-semibold leading-6 text-NFTW-white"
                >Start Date</label
              >
              <input
                id="startdate"
                name="startdate"
                type="date"
                class="block w-full mt-2.5 rounded-md border-0 bg-white/5 px-3.5 py-2 text-NFTW-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-NFTW-blue-500 sm:text-sm sm:leading-6"
              />
            </div>
            <div>
              <label
                for="enddate"
                class="block text-sm font-semibold leading-6 text-NFTW-white"
                >End Date</label
              >
              <input
                id="enddate"
                name="enddate"
                type="date"
                class="block w-full mt-2.5 rounded-md border-0 bg-white/5 px-3.5 py-2 text-NFTW-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-NFTW-blue-500 sm:text-sm sm:leading-6"
              />
            </div>
            <!-- {/if} -->

            <div class="mb-10 sm:col-span-2" />
          {/if}
          <div>
            <label
              for="first-name"
              class="block text-sm font-semibold leading-6 text-NFTW-white"
              >First name</label
            >
            <div class="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autocomplete="given-name"
                class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-NFTW-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-NFTW-blue-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              for="last-name"
              class="block text-sm font-semibold leading-6 text-NFTW-white"
              >Last name</label
            >
            <div class="mt-2.5">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autocomplete="family-name"
                class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-NFTW-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-NFTW-blue-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div class="sm:col-span-2">
            <label
              for="email"
              class="block text-sm font-semibold leading-6 text-NFTW-white"
              >Email</label
            >
            <div class="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autocomplete="email"
                class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-NFTW-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-NFTW-blue-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label
              for="message"
              class="block text-sm font-semibold leading-6 text-NFTW-white"
              >Message</label
            >
            <div class="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows="4"
                class="block w-full min-h-min rounded-md border-0 bg-white/5 px-3.5 py-2 text-NFTW-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-NFTW-blue-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
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
      author: "Daniel Rittrich",
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
      author: "Daniel Rittrich",
      version: "1.0",
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
    //-------------------------------------------------------------------------------------------
  ];

  /*########################################################################################################################################################################*/

  export const databaseData = [
    {
      ID: 0,
      name: "",
      description: "Beschreibung zu Test_Script.",
      author: "Markus Haubold",
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
      author: "Markus Haubold",
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
