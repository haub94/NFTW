<script lang="ts">
    import { checkUndefinedNullOrEmpty } from "$lib/tools/Tools.svelte";
  
    export let title1of2: string = "Lorem ipsum";
    export let title2of2: string = "";
    export let caption: string = "Lorem ipsum dolor.";
    export let img: string = "/brokenImage.png";
    export let minHeight: string = "70vh";
  </script>
  
  <div class="realitive overflow-hidden bg-cover bg-no-repeat"
       style="background-image: url({img}); min-height: {minHeight}">
    <div class="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8">
      <div class="mx-auto max-w-4xl">
        <p class="mt-2 text-4xl font-bold tracking-tight text-NFTW-white sm:text-5xl">
          {checkUndefinedNullOrEmpty(title2of2) ? title1of2 : title1of2 + " "}<br
            class="hidden sm:inline lg:hidden"
          />{title2of2}
        </p>
      </div>
      <div class="relative mt-6">
        <p class="mx-auto max-w-2xl text-lg leading-8 text-NFTW-white/60">
          {caption}
        </p>
      </div>
    </div>
    <div class="flow-root pb-24">
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