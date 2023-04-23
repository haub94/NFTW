<script lang="ts">
  import CardSpacetravel from "$lib/components/CardSpacetravel.svelte";

  let destinationCaption: string =
    "Choose your Destination Choose your Destination Choose your Destination Choose your Destination Choose your Destination Choose your Destination Choose your Destination Choose your Destination Choose your Destination Choose your Destination Choose your Destination Choose your Destination Choose your Destination Choose your Destination Choose your Destination ";
  let purposeCaption: string =
    "Choose your Journey Purpose Choose your Journey Purpose Choose your Journey Purpose Choose your Journey Purpose Choose your Journey Purpose Choose your Journey Purpose Choose your Journey Purpose Choose your Journey Purpose Choose your Journey Purpose Choose your Journey Purpose Choose your Journey Purpose Choose your Journey Purpose Choose your Journey Purpose ";
</script>

<!---->

<div class="overflow-hidden bg-NFTW-black-800 py-32">
  <div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
    <div
      class="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8"
    >
      <div class="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
        <h2
          class="text-3xl font-bold tracking-tight text-NFTW-blue-50 sm:text-4xl"
        >
          Where to go. When to go.
        </h2>
        <p class="mt-6 text-xl leading-8 text-NFTW-blue-50">
          Quasi est quaerat. Sit molestiae et. Provident ad dolorem occaecati
          eos iste. Soluta rerum quidem minus ut molestiae velit error quod.
          Excepturi quidem expedita molestias quas.
        </p>
        <p class="mt-6 text-base leading-7 text-NFTW-blue-50">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat. Quasi
          aperiam sit non sit neque reprehenderit.
        </p>
      </div>
      <div
        class="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents"
      >
        <div
          class="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end"
        >
          <img
            src="/planets/rainbow-planet.png"
            alt=""
            class="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
          />
        </div>
        <div
          class="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8"
        >
          <div
            class="order-first flex w-64 flex-none justify-end self-end lg:w-auto"
          >
            <img
              src="/planets/blue-planet.png"
              alt=""
              class="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
            />
          </div>
          <div class="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
            <img
              src="/planets/water-planet.png"
              alt=""
              class="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
            />
          </div>
          <div
            class="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none"
          >
            <img
              src="/planets/striped-planet.png"
              alt=""
              class="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!---->

<div class="isolate overflow-hidden bg-NFTW-black-800">
  <div class="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8">
    <div class="mx-auto max-w-4xl">
      <p class="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
        Where to go. <br class="hidden sm:inline lg:hidden" />When to go.
      </p>
    </div>
    <div class="relative mt-6">
      <p class="mx-auto max-w-2xl text-lg leading-8 text-white/60">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam
        eligendi quos odit doloribus molestiae voluptatum.
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
          <CardSpacetravel
            img="/planets/moon-planet.png"
            title="Destination"
            caption={destinationCaption}
            imgPosition="bottom"
            imgSize="cover"
            path="/spacetravel/destination"
          />
          <CardSpacetravel
            img="/planets/blue-planet.png"
            title="Journey Purpose"
            caption={purposeCaption}
            imgPosition="left"
            imgSize="cover"
            path="/spacetravel/journeyPurpose"
          />
        </div>
      </div>
    </div>
  </div>
</div>
