<script lang="ts">
  import { page } from "$app/stores";
  import packageMemory from "../../stores/journeyConfigMemory.ts"; 

  const PAGE_IS_DESTINATION = $page.url.pathname.includes(
    "/spacetravel/destination"
  );
  const PAGE_IS_JOURNEY_PURPOSE = $page.url.pathname.includes(
    "/spacetravel/journeyPurpose"
  );
  let routeButtonDestinationJourneyPurpose: string = PAGE_IS_DESTINATION
    ? "/spacetravel/journeyPurpose"
    : PAGE_IS_JOURNEY_PURPOSE
    ? "/spacetravel/destination"
    : "/404";
  let ROUTE_BUTTON_GIC: string = "/getInContact";

  const IS_PROTOTYPING = false; /* only for dev */
  const EMPTY_STRING: string = "";
  let configCompleted: boolean = false; //if the destination and purpose is != "" then activate the get in contact button

  //activate button "get in contact"
  if (PAGE_IS_DESTINATION && ($packageMemory.journeyPurpose !== EMPTY_STRING)) {
    configCompleted = true;
  } else if (PAGE_IS_JOURNEY_PURPOSE && ($packageMemory.destination !== EMPTY_STRING)) {
    configCompleted = true;
  } else {
    configCompleted = false;
  }


  const DESTINATIONS: string[] = [
    "mars",
    "moon",
    "venus",
  ];
  const PURPOSES: string[] = [
    "birthdayspecial",
    "vacation",
    "honeymoon",
    "phototour",
    "ourRecomandations",
  ]


  
  function getCurrentDestinationOrePurpose(list: string[], page: string) {
    for (let index = 0; index < list.length; index++) {
      const SPLITTED_PAGE: string[] = (page.split("/"));        //splite the page-string into an array
      const DEST_ORE_PURPOSE: string = (SPLITTED_PAGE.at(-1) as string);  //get last from array = destiation- ore purposename 
      
      return DEST_ORE_PURPOSE;
    }
  }


  function writeCurrentPackageToMemory() {
    //write the current package (destination / purpose) to the configMemory
    if (PAGE_IS_DESTINATION) {
      const CURRENT_DESTINATION: string = getCurrentDestinationOrePurpose(DESTINATIONS, $page.url.pathname) as string;
      $packageMemory.destination = CURRENT_DESTINATION;
    } 
    if (PAGE_IS_JOURNEY_PURPOSE) {
      const CURRENT_PURPOSE: string = getCurrentDestinationOrePurpose(PURPOSES, $page.url.pathname) as string;
      $packageMemory.journeyPurpose = CURRENT_PURPOSE;
    }
  }

</script>

<div
  class="relative w-full grid justify-center bg-gradient-to-b from-NFTW-bg to-transparent"
  class:border-red-500={IS_PROTOTYPING}
  class:border-4={IS_PROTOTYPING}
  class:bg-NFTW-white={IS_PROTOTYPING}
>
  <div
    id="buttons"
    class="grid relative xl:pl-96 lg:pl-80 mt-10 mb-28 justify-end gap-10 lg:pr-10 max-w-7xl grid-cols-1 sm:grid-cols-2"
    class:border-4={IS_PROTOTYPING}
    class:border-black={IS_PROTOTYPING}
  >
  <!--button switch to site: destination / journey purpose-->
    <a
      on:click={writeCurrentPackageToMemory}
      id="buttonDestinationJourneyPurpose"
      href={routeButtonDestinationJourneyPurpose}
      aria-describedby="link-DestinationOrJourneyPurpose"
      class="h-14 px-7 grid items-center rounded-md col-span-1 bg-NFTW-lila-800 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-NFTW-lila-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition duration-500"
      class:border-4={IS_PROTOTYPING}
      class:border-yellow-500={IS_PROTOTYPING}
      class:text-NFTW-white={!IS_PROTOTYPING}
      >
        {PAGE_IS_DESTINATION
          ? "Select current destination and go to Journey Purposes"
          : PAGE_IS_JOURNEY_PURPOSE
          ? "Select current destination and go to Destination"
          : "none"}
    </a>

    <!--button switch to site: get in contact-->
    {#if configCompleted}
    <a
      on:click={writeCurrentPackageToMemory}
      id="buttonGetInContact"
      href={ROUTE_BUTTON_GIC}
      aria-describedby="link-GetInContact"
      class="h-14 px-7 rounded-md col-span-1 bg-NFTW-lila-800 py-2 text-center items-center grid text-sm font-semibold leading-6 text-white shadow-sm hover:bg-NFTW-lila-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition duration-500"
      class:border-4={IS_PROTOTYPING}
      class:border-orange-500={IS_PROTOTYPING}
      class:text-NFTW-white={!IS_PROTOTYPING}>Start Your Journey With Us</a>
    {:else}
    <div
      class="h-14 px-7 rounded-md col-span-1 bg-gray-600 py-2 text-center items-center grid text-sm font-semibold leading-6 text-white shadow-sm"
      class:border-4={IS_PROTOTYPING}
      class:border-orange-500={IS_PROTOTYPING}
      class:text-NFTW-white={!IS_PROTOTYPING}>
      {PAGE_IS_DESTINATION
        ? "Select a journey purpose to start the trip."
        : PAGE_IS_JOURNEY_PURPOSE
        ? "Select a destination to start the trip." 
        : ""}
    </div>
    {/if}
    
  </div>
</div>
