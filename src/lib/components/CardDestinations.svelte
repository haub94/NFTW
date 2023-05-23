<script lang="ts">
  import { checkUndefinedNullOrEmpty } from "$lib/tools/Tools.svelte";

  export let destName: string | undefined = undefined;
  export let destPromoText: string | undefined = undefined;
  //export let destImageName: string | undefined = undefined;
  export let destImagePath: string[] | undefined = undefined;
  //export let destImageAltText: string | undefined = undefined;
  export let destPrice: string | undefined = undefined;

  export let jpName: string | undefined = undefined;
  export let jpPromoText: string | undefined = undefined;
  //export let jpImageName: string | undefined = undefined;
  export let jpImagePath: string[] | undefined = undefined;
  //export let jpImageAltText: string | undefined = undefined;
  export let jpPrice: string | undefined = undefined;

  /*  !!!! in case of multiple options use this syntax to show all data dynamically:
  {!checkUndefinedNullOrEmpty(destName)
            ? destName
            : !checkUndefinedNullOrEmpty(jpName)
            ? jpName
            : !checkUndefinedNullOrEmpty(hotelName)
            ? hotelName
            : "none"}
            */

  export let routePath: string = "/";
  export let imgPosition: string = "left";
  export let imgSize: string | number = "cover";

  const IMAGE_PATH_INDEX: number = 0;

</script>

<a href={routePath}>
  <div
    class="group rounded-3xl p-8 xl:p-10 ring-2 bg-NFTW-black-500 hover:scale-110 transition-all cursor-pointer"
    style="background-image: url('{!checkUndefinedNullOrEmpty(destImagePath)
      ? destImagePath[IMAGE_PATH_INDEX]
      : !checkUndefinedNullOrEmpty(jpImagePath)
      ? jpImagePath[IMAGE_PATH_INDEX]
      : 'none'}');
      background-size: {imgSize};
      background-position: {imgPosition}"
  >
    <div class="flex items-center justify-between gap-x-4">
      <h3
        id="card-{!checkUndefinedNullOrEmpty(destName)
          ? destName
          : !checkUndefinedNullOrEmpty(jpName)
          ? jpName
          : 'none'}"
        class="text-lg font-semibold leading-8 text-NFTW-blue-50"
      >
        {!checkUndefinedNullOrEmpty(destName)
          ? destName
          : !checkUndefinedNullOrEmpty(jpName)
          ? jpName
          : "none"}
      </h3>
    </div>
    <p class="mt-4 text-sm leading-6 text-NFTW-blue-50">
      {!checkUndefinedNullOrEmpty(destPromoText)
        ? destPromoText
        : !checkUndefinedNullOrEmpty(jpPromoText)
        ? jpPromoText
        : "none"}
    </p>
    <p class="mt-6 flex items-baseline gap-x-1">
      <span class="text-4xl font-bold tracking-tight text-NFTW-blue-50"
        >{!checkUndefinedNullOrEmpty(destPrice)
          ? destPrice
          : !checkUndefinedNullOrEmpty(jpPrice)
          ? jpPrice
          : "none"}</span
      >
    </p>
    <a
      href={routePath}
      aria-describedby="link-{!checkUndefinedNullOrEmpty(destName)
        ? destName
        : !checkUndefinedNullOrEmpty(jpName)
        ? jpName
        : 'none'}"
      class="mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 bg-NFTW-lila-800 text-NFTW-blue-50 shadow-sm hover:bg-NFTW-lila-600"
      >Get more details</a
    >
  </div>
</a>
