<script lang="ts">
  import { page } from "$app/stores";

  export let title: string = "Lorem ipsum dolor";
  export let caption: string = "Lorem ipsum dolor";
  export let iFrameHeight: number = 450;
  export let height: number = 450;

  const isMars = $page.url.pathname.includes("/spacetravel/destination/mars");
  const isMoon = $page.url.pathname.includes("/spacetravel/destination/moon");
  const isVenus = $page.url.pathname.includes("/spacetravel/destination/venus");

  const iFrameTitle = isMars
    ? "mars3D"
    : isMoon
    ? "moon3D"
    : isVenus
    ? "venus3D"
    : "none";
  const iFrameSrc = isMars
    ? "https://solarsystem.nasa.gov/gltf_embed/2372"
    : isMoon
    ? "https://solarsystem.nasa.gov/gltf_embed/2366"
    : isVenus
    ? "https://solarsystem.nasa.gov/gltf_embed/2342"
    : undefined;
</script>

<div
  class="relative bg-NFTW-bg bg-opacity-30 bg-gradient-to-l from-NFTW-bg to-transparent from-50% to-70%"
  style="padding-top:{(height - iFrameHeight) / 2 +
    'px'} ; padding-bottom:{(height - iFrameHeight) / 2 + 'px'} ;"
>
<!--
  <div class="lg:absolute lg:inset-0 lg:left-1/2 grid justify-center">
    <div
      class="w-full bg-NFTW-bg sm:h-80 lg:absolute lg:h-full bg-blend-multiply bg-no-repeat items-center grid"
    >
      <iframe
        title={iFrameTitle}
        src={iFrameSrc}
        width={iFrameHeight + "px"}
        height={iFrameHeight + "px"}
        frameborder="0"
        loading="lazy"
      />
    </div>
  </div>
  -->
  <div
    class="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32"
    style="min-height:{iFrameHeight}px"
  >
    <div class="px-6 lg:px-8">
      <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
        <h2 class="text-3xl font-bold tracking-tight text-NFTW-white">
          {title}
        </h2>
        <p class="mt-2 text-lg leading-8 text-NFTW-white/60">
          {caption}
        </p>
      </div>
    </div>
  </div>
</div>

<!-- 
title="mars3D"
src="https://solarsystem.nasa.gov/gltf_embed/2372"
title="earth3D"
src="https://solarsystem.nasa.gov/gltf_embed/2393"
title="moon3D"
src="https://solarsystem.nasa.gov/gltf_embed/2366"
title="venus3D"
src="https://solarsystem.nasa.gov/gltf_embed/2342"
 -->
