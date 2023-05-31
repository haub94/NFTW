<script lang="ts">
  export let image: string[] = ["", ""];
  export let name: string = "Lorem ipsum dolor";
  export let promoText: string = "Lorem ipsum dolor";
  export let imagePosition: string = "center"; // center, bottom, top, left, left-bottom, left-top, right, right-bottom, right-top
  export let imageSize: string | number = "cover"; // auto, cover, contain ... or own size: 50%, 200px
  export let routePath: string = "/"; // routing path "/home/user/config"

  const IMAGE_PATH_INDEX: number = 0;
</script>

<a href={routePath}>
  <div id="cardsSpacetravel" class="group relative">
    <div
      class="absolute -inset-2 rounded-lg bg-gradient-to-br from-NFTW-lila-500 via-NFTW-blue-500 to-NFTW-pink-500 opacity-0 blur transition duration-700 group-hover:opacity-100"
    />
    <div
      class="relative flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10 bg-blend-multiply bg-no-repeat"
      style="
    background-image: url('{image[IMAGE_PATH_INDEX]}');
    background-size: {imageSize};
    background-position: {imagePosition}"
    >
      <div class="">
        <h3
          id="card-{name}"
          class="text-4xl font-bold leading-7 text-NFTW-white mb-32"
        >
          {name}
        </h3>
        <div class="w-3/4 h-64 grid content-end">
          <p
            class="text-base leading-7 text-justify line-clamp-6 opacity-50 group-hover:opacity-100 transition duration-500 text-transparent bg-clip-text bg-gradient-to-b from-NFTW-white to-transparent group-hover:text-NFTW-white"
          >
            {promoText}
          </p>
        </div>
        <a
          href={routePath}
          aria-describedby="link-{name}"
          class="mt-8 block rounded-md bg-NFTW-lila-800 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-NFTW-lila-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition duration-500"
          >Start Your Journey With Us</a
        >
      </div>
    </div>
  </div>
</a>
