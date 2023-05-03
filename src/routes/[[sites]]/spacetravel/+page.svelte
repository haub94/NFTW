<script lang="ts">
  import CardSpacetravel from "$lib/components/CardSpacetravel.svelte";
  import SectionHeader from "$lib/components/SectionHeader.svelte";
  import SectionBg001 from "$lib/sectionComponents/SectionBg001.svelte";
  import SectionBg002 from "$lib/sectionComponents/SectionBg002.svelte";

  let destinationCaption: string =
    "Choose your Destination Choose your Destination Choose your Destination Choose your Destination Choose your Destination Choose your Destination Choose your Destination Choose your Destination Choose your Destination Choose your Destination Choose your Destination Choose your Destination Choose your Destination Choose your Destination Choose your Destination ";
  let purposeCaption: string =
    "Choose your Journey Purpose Choose your Journey Purpose Choose your Journey Purpose Choose your Journey Purpose Choose your Journey Purpose Choose your Journey Purpose Choose your Journey Purpose Choose your Journey Purpose Choose your Journey Purpose Choose your Journey Purpose Choose your Journey Purpose Choose your Journey Purpose Choose your Journey Purpose ";
</script>

<SectionBg002>
  <SectionHeader title="Spacetravel" />

  <!---->

  <div class="overflow-hidden bg-NFTW-bg py-32">
    <div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8"
      >
        <div class="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
          <h2
            class="text-3xl font-bold tracking-tight text-NFTW-white sm:text-4xl"
          >
            Where to go. When to go.
          </h2>
          <p class="mt-6 text-xl leading-8 text-NFTW-white">
            Quasi est quaerat. Sit molestiae et. Provident ad dolorem occaecati
            eos iste. Soluta rerum quidem minus ut molestiae velit error quod.
            Excepturi quidem expedita molestias quas.
          </p>
          <p class="mt-6 text-base leading-7 text-NFTW-white">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat. Quasi aperiam sit non sit neque reprehenderit.
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

  <!-- -->
</SectionBg002>

<SectionBg001 title1of2="" title2of2="" caption="">
  <CardSpacetravel
    imagePath="/planets/moon-planet.png"
    name="Destination"
    promoText={destinationCaption}
    imagePosition="left"
    imageSize="cover"
    routePath="/spacetravel/destination"
  />
  <CardSpacetravel
    imagePath="/planets/blue-planet.png"
    name="Journey Purpose"
    promoText={purposeCaption}
    imagePosition="left"
    imageSize="cover"
    routePath="/spacetravel/journeyPurpose"
  />
</SectionBg001>
