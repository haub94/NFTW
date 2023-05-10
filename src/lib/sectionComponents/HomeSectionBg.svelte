<script lang="ts">
    import { checkUndefinedNullOrEmpty } from "$lib/tools/Tools.svelte";
  
    export let title1of2: string = "Lorem ipsum";
    export let title2of2: string = "";
    export let caption: string = "Lorem ipsum dolor.";
  </script>
  
  <div class="realitive overflow-hidden bg-cover bg-no-repeat"
       style="background-image: url('/home/BgAstronauts.png'); height: 1150px">
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