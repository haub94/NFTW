<script lang="ts">
  export let img: string = "/brokenImage.png";
  export let title: string = "Lorem ipsum dolor";
  export let caption: string = "Lorem ipsum dolor";
  export let imgSize: string | number = "cover"; // auto, cover, contain ... or own size: 50%, 200px

  let isPrototyping = false;

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
    id="img"
    class="relative bg-blend-multiply bg-no-repeat grid justify-center"
    class:border-blue-500={isPrototyping}
    class:border-4={isPrototyping}
    style="
background-image: url('{isPrototyping ? '' : img}');
background-color:#ddd;
background-size: {imgSize};
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
          id="titleText"
          class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mx-5 text-center mt-20"
          class:text-NFTW-white={!isPrototyping}
          class:border-4={isPrototyping}
          class:border-pink-500={isPrototyping}
          style="font-weight: 900;"
        >
          {title}
        </h2>

        <div
          id="captionText"
          class="text-2xl lg:text-3xl max-w-lg mx-5 mt-5"
          class:text-NFTW-white={!isPrototyping}
          class:border-4={isPrototyping}
          class:border-NFTW-lila-500={isPrototyping}
          style="font-weight:600"
        >
          {caption}
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
              id="icon"
              class="grid items-center justify-center h-32 w-32 justify-self-center"
              class:border-4={isPrototyping}
              class:text-NFTW-white={!isPrototyping}
              class:border-orange-600={isPrototyping}
            >
              Icon
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="violet"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <div
              id="descriptionText"
              class="grid justify-center mt-5 text-xl"
              class:border-4={isPrototyping}
              class:border-green-500={isPrototyping}
              class:text-NFTW-white={!isPrototyping}
            >
              {data.description}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>
