<script lang="ts">
  import { page } from "$app/stores";
  import { checkUndefinedNullOrEmpty } from "$lib/tools/Tools.svelte";

  const isDestinations = $page.url.pathname.includes(
    "/spacetravel/destination"
  );
  const isJourneyPurpose = $page.url.pathname.includes(
    "/spacetravel/journeyPurpose"
  );
  let routeButtonDestinationJourneyPurpose: string = isDestinations
    ? "/spacetravel/journeyPurpose"
    : isJourneyPurpose
    ? "/spacetravel/destination"
    : "/404";
  let routeButtonGetInContact: string = "/getInContact";

  let isPrototyping = false; /* only for dev */
</script>

<div
  class="relative w-full grid justify-center bg-gradient-to-b from-NFTW-bg to-transparent"
  class:border-red-500={isPrototyping}
  class:border-4={isPrototyping}
  class:bg-NFTW-white={isPrototyping}
>
  <div
    id="buttons"
    class="grid relative xl:pl-96 lg:pl-80 mt-10 mb-28 justify-end gap-10 lg:pr-10 max-w-7xl grid-cols-1 sm:grid-cols-2"
    class:border-4={isPrototyping}
    class:border-black={isPrototyping}
  >
    <a
      id="buttonDestinationJourneyPurpose"
      href={routeButtonDestinationJourneyPurpose}
      aria-describedby="link-DestinationOrJourneyPurpose"
      class="h-14 px-7 grid items-center rounded-md col-span-1 bg-NFTW-lila-800 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-NFTW-lila-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition duration-500"
      class:border-4={isPrototyping}
      class:border-yellow-500={isPrototyping}
      class:text-NFTW-white={!isPrototyping}
      >{isDestinations
        ? "Choose Your Journey Purpose"
        : isJourneyPurpose
        ? "Choose your Destination"
        : "none"}</a
    >
    <a
      id="buttonGetInContact"
      href={routeButtonGetInContact}
      aria-describedby="link-GetInContact"
      class="h-14 px-7 rounded-md col-span-1 bg-NFTW-lila-800 py-2 text-center items-center grid text-sm font-semibold leading-6 text-white shadow-sm hover:bg-NFTW-lila-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition duration-500"
      class:border-4={isPrototyping}
      class:border-orange-500={isPrototyping}
      class:text-NFTW-white={!isPrototyping}>Start Your Journey With Us</a
    >
  </div>
</div>
