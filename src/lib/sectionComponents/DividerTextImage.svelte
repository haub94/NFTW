<script lang="ts">
  import { checkUndefinedNullOrEmpty } from "$lib/tools/Tools.svelte";

  export let image: string[] = ["/brokenImage.png", ""];
  export let title: string = "Lorem ipsum dolor";
  export let caption: string = "Lorem ipsum dolor";
  export let caption2: string = "";
  export let caption3: string = "";
  export let imgPosition: string = "center"; // center, bottom, top, left, left-bottom, left-top, right, right-bottom, right-top
  export let imgSize: string | number = "cover"; // auto, cover, contain ... or own size: 50%, 200px
  export let imgHeight: string | number = "";

  const IMAGE_PATH_INDEX: number = 0;
</script>

<div class="relative bg-NFTW-bg bg-opacity-30">
  <div class="lg:absolute lg:inset-0 lg:left-1/2">
    <div
      class="h-64 w-full bg-NFTW-white sm:h-80 lg:absolute lg:h-full bg-blend-multiply bg-no-repeat"
      style="
    background-image: url({image[IMAGE_PATH_INDEX]});
    background-size: {imgSize};
    background-position: {imgPosition};"
    />
  </div>
  <div
    class="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32"
    style="height:{imgHeight}"
  >
    <div class="px-6 lg:px-8">
      <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
        <h2 class="text-3xl font-bold tracking-tight text-NFTW-white">
          {title}
        </h2>
        <p class="mt-2 text-lg leading-8 text-NFTW-white">
          {caption}
        </p>
        <p class="mt-2 text-lg leading-8 text-NFTW-white">
          {checkUndefinedNullOrEmpty(caption2) ? "" : caption2}
        </p>
        <p class="mt-2 text-lg leading-8 text-NFTW-white">
          {checkUndefinedNullOrEmpty(caption3) ? "" : caption3}
        </p>
      </div>
    </div>
  </div>
</div>
