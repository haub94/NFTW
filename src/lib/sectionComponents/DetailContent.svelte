<script lang="ts">
  import { checkUndefinedNullOrEmpty } from "$lib/tools/Tools.svelte";
  import IoIosRocket from "svelte-icons/io/IoIosRocket.svelte";

  export let destName: string | undefined = undefined;
  export let destPromoText: string | undefined = undefined;
  export let destTimeslot: string | undefined = undefined;
  export let destPrice: string | undefined = undefined;
  export let destDays: string | undefined = undefined;
  export let destAvailableUnits: string | undefined = undefined;
  export let destImageName: string | undefined = undefined;
  export let destImagePath: string | undefined = undefined;
  export let destImageAltText: string | undefined = undefined;
  export let destHotelName: string | undefined = undefined;
  export let destHotelRanking: string | undefined = undefined;
  export let destHotelRoomCapacity: string | undefined = undefined;
  export let destHotelRoomClass: string | undefined = undefined;
  export let destHotelDescription: string | undefined = undefined;

  /*  dafür gibts noch kein Feld in der DB */
  export let destHotelImageName: string | undefined = undefined;
  export let destHotelImagePath: string | undefined = undefined;
  export let destHotelImageAltText: string | undefined = undefined;
  /*  */

  export let jpName: string | undefined = undefined;
  export let jpPromotext: string | undefined = undefined;
  export let jpPrice: string | undefined = undefined;
  export let jpIncludedServices: string | undefined = undefined;
  export let jpImageName: string | undefined = undefined;
  export let jpImagePath: string | undefined = undefined;
  export let jpImageAltText: string | undefined = undefined;

  /*  !!!! in case of multiple options use this syntax to show all data dynamically:
            {!checkUndefinedNullOrEmpty(destName)
            ? destName
            : !checkUndefinedNullOrEmpty(jpName)
            ? jpName
            : !checkUndefinedNullOrEmpty(hotelName)
            ? hotelName
            : "none"}
*/

  export let imageSize: string | number = "cover"; // auto, cover, contain ... or own size: 50%, 200px

  export let showButtons: boolean = false;

  let isPrototyping = false; /* only for dev */

  const infoData = [
    {
      icon: "SVG PATH",
      description:
        "Descrip-tion text 1 Descrip-tion text 1 Descrip-tion text 1 Descrip-tion text 1",
    },
    {
      icon: "SVG PATH",
      description:
        "Descrip-tion text 2 Descrip-tion text 2 Descrip-tion text 2 Descrip-tion text 2",
    },
    {
      icon: "SVG PATH",
      description:
        "Descrip-tion text 3 Descrip-tion text 3 Descrip-tion text 3 Descrip-tion text 3",
    },
    {
      icon: "SVG PATH",
      description:
        "Descrip-tion text 4 Descrip-tion text 4 Descrip-tion text 4 Descrip-tion text 4",
    },
  ];
</script>

<div
  class="relative w-full bg-NFTW-bg"
  class:border-red-500={isPrototyping}
  class:border-4={isPrototyping}
>
  <div
    id="image"
    class="relative bg-blend-multiply bg-no-repeat grid justify-center"
    class:border-blue-500={isPrototyping}
    class:border-4={isPrototyping}
    style="
background-image: url('{isPrototyping
      ? ''
      : !checkUndefinedNullOrEmpty(destImagePath)
      ? destImagePath
      : !checkUndefinedNullOrEmpty(jpImagePath)
      ? jpImagePath
      : !checkUndefinedNullOrEmpty(destHotelImagePath)
      ? destHotelImagePath
      : 'none'}');
background-color:#ddd;
background-size: {imageSize};
background-position:center;
 "
  >
    <div
      id="gradient"
      class="absolute w-full h-full"
      class:bg-gradient-to-t={!isPrototyping}
      class:from-NFTW-bg={!isPrototyping}
      class:via-NFTW-bg={!isPrototyping}
      class:via-20%={!isPrototyping}
      class:to-transparent={!isPrototyping}
      class:to-60%={!isPrototyping}
      class:border-4={isPrototyping}
      class:border-yellow-500={isPrototyping}
    />
    <div
      id="content"
      class="max-w-7xl relative grid justify-center"
      class:border-4={isPrototyping}
      class:border-black={isPrototyping}
    >
      <div
        id="headlineText"
        class="justify-center grid"
        class:border-4={isPrototyping}
        class:border-green-500={isPrototyping}
      >
        <h2
          id="nameText"
          class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mx-5 text-center mt-20"
          class:text-NFTW-white={!isPrototyping}
          class:border-4={isPrototyping}
          class:border-pink-500={isPrototyping}
          style="font-weight: 900;"
        >
          {!checkUndefinedNullOrEmpty(destName)
            ? destName
            : !checkUndefinedNullOrEmpty(jpName)
            ? jpName
            : !checkUndefinedNullOrEmpty(destHotelName)
            ? destHotelName
            : "none"}
        </h2>

        <div
          id="promoText"
          class="text-2xl lg:text-3xl max-w-lg mx-5 mt-5"
          class:text-NFTW-white={!isPrototyping}
          class:border-4={isPrototyping}
          class:border-NFTW-lila-500={isPrototyping}
          style="font-weight:600"
        >
          {!checkUndefinedNullOrEmpty(destPromoText)
            ? destPromoText
            : !checkUndefinedNullOrEmpty(jpPromotext)
            ? jpPromotext
            : !checkUndefinedNullOrEmpty(destHotelDescription)
            ? destHotelDescription
            : "none"}
        </div>
      </div>
      <div
        id="info"
        class="justify-center gap-x-20 gap-y-10 px-20 w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid mt-20 mb-10"
        class:border-4={isPrototyping}
        class:border-cyan-500={isPrototyping}
      >
        {#each infoData as data}
          <div
            id="infos"
            class="justify-center grid w-full col-span-1"
            class:border-4={isPrototyping}
            class:border-blue-800={isPrototyping}
          >
            <div
              id="services"
              class="grid items-center justify-center h-32 w-32 justify-self-center"
              class:border-4={isPrototyping}
              class:text-NFTW-white={!isPrototyping}
              class:border-orange-600={isPrototyping}
            >
              <div
                id="icon"
                class="h-28 w-28"
                class:text-NFTW-white={!isPrototyping}
              >
                <svelte:component this={IoIosRocket} />
              </div>
            </div>
            <div
              id="descriptionText"
              class="grid justify-center mt-5 text-xl text-center"
              class:border-4={isPrototyping}
              class:border-green-500={isPrototyping}
              class:text-NFTW-white={!isPrototyping}
            >
              {data.description}
            </div>
          </div>
        {/each}
      </div>
      {#if showButtons || isPrototyping}<div
          id="buttons"
          class="flex h-16 mb-10 justify-end gap-10 pr-10"
          class:border-4={isPrototyping}
          class:border-red-500={isPrototyping}
        >
          <div
            id="buttonPlanetJourneyPurpose"
            class="h-14 w-60 text-center"
            class:border-4={isPrototyping}
            class:border-yellow-500={isPrototyping}
            class:text-NFTW-white={!isPrototyping}
          >
            PlanetJourneyPurpose
          </div>
          <div
            id="buttonGetInContact"
            class="h-14 w-60 text-center"
            class:border-4={isPrototyping}
            class:border-orange-500={isPrototyping}
            class:text-NFTW-white={!isPrototyping}
          >
            GetInContact
          </div>
        </div>{/if}
    </div>
  </div>
</div>
