<script lang="ts">
  import CardDestinations from "$lib/components/CardDestinations.svelte";
  import SectionHeader from "$lib/components/SectionHeader.svelte";
  import SectionBg001 from "$lib/sectionComponents/SectionBg001.svelte";

  const data = [
    {
      jpName: "BIRTHDAY SPECIAL",
      jpPromoText: "Make your birthday unforgettable!",
      jpPrice: "13.000 €",
      routePath: "/spacetravel/journeyPurpose/birthdayspecial",
      jpImagePath: "/journeypurpose/birthday.png",
      imgPosition: "left",
      imgSize: "cover",
      jpImageName: "",
      jpImageAltText: "",
    },
    {
      jpName: "HONEYMOON",
      jpPromoText: "Start your new chapter with an adventure.",
      jpPrice: "20.000 €",
      routePath: "/spacetravel/journeyPurpose/honeymoon",
      jpImagePath: "/journeypurpose/honeymoon.png",
      imgPosition: "left",
      imgSize: "cover",
      jpImageName: "",
      jpImageAltText: "",
    },
    {
      jpName: "PHOTOTOUR",
      jpPromoText: "Capture your memories.",
      jpPrice: "8.000 €",
      routePath: "/spacetravel/journeyPurpose/phototour",
      jpImagePath: "/journeypurpose/astronautSelfie.png",
      imgPosition: "left",
      imgSize: "cover",
      jpImageName: "",
      jpImageAltText: "",
    },
    {
      jpName: "VACATION",
      jpPromoText: "Get out of the earth.",
      jpPrice: "16.000 €",
      routePath: "/spacetravel/journeyPurpose/vacation",
      jpImagePath: "/journeypurpose/vacation.png",
      imgPosition: "left",
      imgSize: "cover",
      jpImageName: "",
      jpImageAltText: "",
    },
    {
      jpName: "OUR REMMOMENDATIONS",
      jpPromoText: "What we would recommend ...",
      jpPrice: "16.000 €",
      routePath: "/spacetravel/journeyPurpose/ourRecomandations",
      jpImagePath: "/journeypurpose/recommendations.png",
      imgPosition: "left",
      imgSize: "cover",
      jpImageName: "",
      jpImageAltText: "",
    },
  ];
</script>

<SectionBg001 title1of2="" caption="">
  <div class="col-span-2">
    <SectionHeader title="Journey Purposes" />
  </div>
  {#each data as data}
    <div class="col-span-1">
      <CardDestinations
        jpName={data.jpName}
        jpPromoText={data.jpPromoText}
        jpPrice={data.jpPrice}
        routePath={data.routePath}
        jpImagePath={data.jpImagePath}
        imgPosition={data.imgPosition}
        imgSize={data.imgSize}
        jpImageName={data.jpImageName}
        jpImageAltText={data.jpImageAltText}
      />
    </div>
  {/each}
</SectionBg001>
