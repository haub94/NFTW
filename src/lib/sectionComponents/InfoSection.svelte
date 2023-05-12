<script lang="ts">
  export let title: string = "Title";
  export let text1: string = "Text 1";
  export let text2: string = "";
  export let img1: string = "/brokenImage.png";
  export let img2: string = "/brokenImage.png";
  export let img3: string = "/brokenImage.png";
  export let img4: string = "/brokenImage.png";
</script>

<div class="overflow-hidden bg-NFTW-bg/50 py-32">
  <div class="mx-auto max-w-7xl px-6 xl:flex xl:px-8">
    <div
      class="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 xl:mx-0 xl:min-w-full xl:max-w-none xl:flex-none xl:gap-y-8"
    >
      <div class="xl:col-end-1 xl:w-full xl:max-w-lg xl:pb-8">
        <h2
          class="text-3xl font-bold tracking-tight text-NFTW-white md:text-4xl"
        >
          {title}
        </h2>
        <p class="mt-6 text-xl leading-8 text-NFTW-white">
          {text1}
        </p>
        <p class="mt-6 text-base leading-7 text-NFTW-white">
          {text2}
        </p>
      </div>
      <div
        class="flex flex-wrap items-start justify-end gap-6 md:gap-8 xl:contents"
      >
        <div
          class="w-0 flex-auto xl:ml-auto xl:w-auto xl:flex-none xl:self-end"
        >
          <img
            src={img2}
            alt=""
            class="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
          />
        </div>
        <div
          class="contents xl:col-span-2 xl:col-end-2 xl:ml-auto xl:flex xl:w-[37rem] xl:items-start xl:justify-end xl:gap-x-8"
        >
          <div
            class="order-first flex w-64 flex-none justify-end self-end xl:w-auto"
          >
            <img
              src={img1}
              alt=""
              class="aspect-[4/3] w-[22rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
            />
          </div>
          <div class="flex w-96 flex-auto justify-end xl:w-auto xl:flex-none">
            <img
              src={img3}
              alt=""
              class="aspect-[7/5] w-[30rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
            />
          </div>
          <div
            class="hidden md:block md:w-0 md:flex-auto xl:w-auto xl:flex-none"
          >
            <img
              src={img4}
              alt=""
              class="aspect-[4/3] w-[20rem] max-w-none rounded-2xl bg-gray-50 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
