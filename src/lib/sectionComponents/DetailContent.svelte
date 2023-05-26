<script lang="ts">
  import { checkUndefinedNullOrEmpty } from "$lib/tools/Tools.svelte";
  import IoIosRocket from "svelte-icons/io/IoIosRocket.svelte";
  import IoMdAlert from "svelte-icons/io/IoMdAlert.svelte";
  import GiRocketFlight from "svelte-icons/gi/GiRocketFlight.svelte";
  import MdHotel from "svelte-icons/md/MdHotel.svelte";
  import GiGlassCelebration from "svelte-icons/gi/GiGlassCelebration.svelte";
  import FaSignature from "svelte-icons/fa/FaSignature.svelte";
  import FaHandHoldingHeart from "svelte-icons/fa/FaHandHoldingHeart.svelte";
  import FaCertificate from "svelte-icons/fa/FaCertificate.svelte";
  import GiFilmStrip from "svelte-icons/gi/GiFilmStrip.svelte";
  import GiFeather from "svelte-icons/gi/GiFeather.svelte";
  import GiAstronautHelmet from "svelte-icons/gi/GiAstronautHelmet.svelte";
  import GiHotMeal from "svelte-icons/gi/GiHotMeal.svelte";
  import FaUserAstronaut from "svelte-icons/fa/FaUserAstronaut.svelte";
  import GiStarGate from "svelte-icons/gi/GiStarGate.svelte";
  import GiFruitBowl from "svelte-icons/gi/GiFruitBowl.svelte";
  import MdCameraEnhance from "svelte-icons/md/MdCameraEnhance.svelte";
  import FaSafari from "svelte-icons/fa/FaSafari.svelte";
  import FaCalendarWeek from "svelte-icons/fa/FaCalendarWeek.svelte";
  import GiPriceTag from "svelte-icons/gi/GiPriceTag.svelte";
  import MdToday from "svelte-icons/md/MdToday.svelte";
  import MdEventAvailable from "svelte-icons/md/MdEventAvailable.svelte";
  import MdStarHalf from "svelte-icons/md/MdStarHalf.svelte";
  import GiHouseKeys from "svelte-icons/gi/GiHouseKeys.svelte";
  import MdClass from "svelte-icons/md/MdClass.svelte";

  export let destName: string | undefined = undefined;
  export let destPromoText: string | undefined = undefined;
  export let destTimeslot: string | undefined = undefined;
  export let destPrice: string | undefined = undefined;
  export let destDays: string | undefined = undefined;
  export let destAvailableUnits: string | undefined = undefined;
  export let destServices: { icon: string; service: string }[] = [
    { icon: "IoIosRocket", service: "destService 1" },
  ];

  export let destImage: string[] = ["", ""];
  export let destHotelName: string | undefined = undefined;
  export let destHotelRanking: string | undefined = undefined;
  export let destHotelRoomCapacity: string | undefined = undefined;
  export let destHotelRoomClass: string | undefined = undefined;
  export let destHotelDescription: string | undefined = undefined;
  export let destHotelServices: { icon: string; service: string }[] = [
    { icon: "IoIosRocket", service: "destHotelService 1" },
  ];

  export let destHotelImage: string[] = ["", ""];

  export let jpName: string | undefined = undefined;
  export let jpPromotext: string | undefined = undefined;
  export let jpPrice: string | undefined = undefined;
  export let jpIncludedServices: { icon: string; service: string }[] = [
    { icon: "IoIosRocket", service: "Service 1" },
  ];
  
  export let jpImage: string[] = ["", ""];

  export let imageSize: string | number = "cover"; // auto, cover, contain ... or own size: 50%, 200px

  export let isJPComponent: boolean | undefined = undefined;
  export let isDestComponent: boolean | undefined = undefined;
  export let isDestHotelComponent: boolean | undefined = undefined;

  /* Array musst be filled with all used icons */
  let iconData = [
    { iconString: "IoIosRocket", iconObject: IoIosRocket },
    { iconString: "IoMdAlert", iconObject: IoMdAlert },
    { iconString: "GiRocketFlight", iconObject: GiRocketFlight },
    { iconString: "MdHotel", iconObject: MdHotel },
    { iconString: "GiGlassCelebration", iconObject: GiGlassCelebration },
    { iconString: "FaSignature", iconObject: FaSignature },
    { iconString: "FaHandHoldingHeart", iconObject: FaHandHoldingHeart },
    { iconString: "FaCertificate", iconObject: FaCertificate },
    { iconString: "GiFilmStrip", iconObject: GiFilmStrip },
    { iconString: "GiFeather", iconObject: GiFeather },
    { iconString: "GiAstronautHelmet", iconObject: GiAstronautHelmet },
    { iconString: "GiHotMeal", iconObject: GiHotMeal },
    { iconString: "FaUserAstronaut", iconObject: FaUserAstronaut },
    { iconString: "GiStarGate", iconObject: GiStarGate },
    { iconString: "GiFruitBowl", iconObject: GiFruitBowl },
    { iconString: "MdCameraEnhance", iconObject: MdCameraEnhance },
    { iconString: "FaSafari", iconObject: FaSafari },
    { iconString: "FaCalendarWeek", iconObject: FaCalendarWeek },
    { iconString: "GiPriceTag", iconObject: GiPriceTag },
    { iconString: "MdToday", iconObject: MdToday },
    { iconString: "MdEventAvailable", iconObject: MdEventAvailable },
    { iconString: "MdStarHalf", iconObject: MdStarHalf },
    { iconString: "GiHouseKeys", iconObject: GiHouseKeys },
    { iconString: "MdClass", iconObject: MdClass },
  ];

  /* is used if data from component not found or valid */
  let errorData = [{ icon: "IoMdAlert", service: "Service 1" }];

  function getIcon(iconName: string) {
    let icon = IoMdAlert;
    for (let i = 0; i < iconData.length; i++) {
      if (iconData[i].iconString === iconName) {
        icon = iconData[i].iconObject;
        return icon;
      }
    }
    console.warn(
      "getIcon(string) warning - Found no matching icon in list for string :  " +
        iconName
    );
    return;
  }

  let isPrototyping = false; /* only for dev */

  const IMAGE_PATH_INDEX: number = 0;

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
      : !checkUndefinedNullOrEmpty(destImage[IMAGE_PATH_INDEX])
      ? destImage[IMAGE_PATH_INDEX]
      : !checkUndefinedNullOrEmpty(jpImage[IMAGE_PATH_INDEX])
      ? jpImage[IMAGE_PATH_INDEX]
      : !checkUndefinedNullOrEmpty(destHotelImage[IMAGE_PATH_INDEX])
      ? destHotelImage[IMAGE_PATH_INDEX]
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
        class="justify-center gap-x-20 gap-y-10 px-20 w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid mt-20 mb-32"
        class:border-4={isPrototyping}
        class:border-cyan-500={isPrototyping}
      >
        {#each isJPComponent ? jpIncludedServices : isDestComponent ? destServices : isDestHotelComponent ? destHotelServices : errorData as data}
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
                class="h-20 w-20"
                class:text-NFTW-white={!isPrototyping}
              >
                <svelte:component this={getIcon(data.icon)} />
              </div>
            </div>
            <div
              id="descriptionText"
              class="grid justify-center mt-5 text-xl text-center"
              class:border-4={isPrototyping}
              class:border-green-500={isPrototyping}
              class:text-NFTW-white={!isPrototyping}
            >
              {data.service}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>
