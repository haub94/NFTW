<script lang="ts">
  export let img: string = "/brokenImage.png";
  export let title: string = "Lorem ipsum dolor";
  export let caption: string = "Lorem ipsum dolor";
  export let imgSize: string | number = "cover"; // auto, cover, contain ... or own size: 50%, 200px

  let isHovered = false;

  const infoData = [
    {
      icon: "SVG PATH",
      description: "Descrip-tion text 1 Descrip-tion text 1 Descrip-tion text 1 Descrip-tion text 1",
    },
    {
      icon: "SVG PATH",
      description: "Descrip-tion text 2 Descrip-tion text 2 Descrip-tion text 2 Descrip-tion text 2",
    },
    {
      icon: "SVG PATH",
      description: "Descrip-tion text 3 Descrip-tion text 3 Descrip-tion text 3 Descrip-tion text 3",
    },
    {
      icon: "SVG PATH",
      description: "Descrip-tion text 4 Descrip-tion text 4 Descrip-tion text 4 Descrip-tion text 4",
    },
  ];
</script>

<div class="relative w-full border-4 border-red-500">
  <div
    id="img"
    class="relative bg-blend-multiply bg-no-repeat border-4 border-blue-500 grid"
    style="
background-image: url('{img}');
background-color:#ddd;
background-size: {imgSize};
background-position:center;
height:80vh;
"
  >
  <div
  id="gradient"
  on:mouseenter={() => isHovered = true}
  on:mouseleave={() => isHovered = false}
  class="relative border-yellow-500" class:bg-gradient-to-t={isHovered} class:from-NFTW-bg={isHovered} class:via-NFTW-bg={isHovered} class:via-20%={isHovered} class:to-transparent={isHovered} class:to-60%={isHovered} class:border-4={isHovered} 
  />
  <div
    id="content"
    class="max-w-7xl absolute justify-self-center h-full w-full border-4 border-black grid"
  >
    <div
      id="titleText"
      class="absolute border-4 border-green-500 h-auto w-full items-center justify-center grid mt-40"
    >
      <h2 class="relative border-4 border-pink-500 justify-self-center text-5xl md:text-7xl xl:text-8xl mx-5" style="font-weight: 900;">
        {title}
      </h2>

      <div class="relative border-4 border-NFTW-lila-500 mt-16 text-2xl md:text-4xl max-w-lg mx-5" style="font-weight:600">
        {caption}
      </div>
    </div>
    <div
      id="info"
      class="flex justify-center gap-20 border-4 border-cyan-500 px-20 max-h-60 bottom-0 mb-32 absolute justify-self-center w-full"
    >
      {#each infoData as data}
        <div
          id=""
          class="border-4 border-blue-800 items-center justify-center grid w-full"
        >
          <div
            id="icon"
            class="border-4 border-orange-600 grid items-center justify-center h-32 w-32 justify-self-center"
          >
            Icon
            <!-- 
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
           -->
          </div>
          <div
            id="descriptionText"
            class="border-4 border-green-500 grid items-center justify-center mt-5"
          >
            {data.description}
          </div>
        </div>
      {/each}
    </div>
  </div>
  </div>
</div>
