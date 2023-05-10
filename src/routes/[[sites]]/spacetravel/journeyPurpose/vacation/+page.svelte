<script lang="ts">
  import ButtonsDestJpGic from "$lib/components/ButtonsDestJpGic.svelte";
  import DetailContent from "$lib/sectionComponents/DetailContent.svelte";
  import SectionBg002 from "$lib/sectionComponents/SectionBg002.svelte";
  const data = [
    {
      jpName: "Vacation",
      jpPromotext: "A special way to spend a vacation in space",
      jpPrice: "",
      jpIncludedServices: [
        {
          icon: "GiRocketFlight",
          service: "A flight that meets strict safety standards",
        },
        {
          icon: "GiFeather",
          service: "Cozy accommodation in a 4-star space hotel",
        },
        {
          icon: "GiHotMeal",
          service: "Breakfast buffet, lunch buffet, and dinner buffet",
        },
        {
          icon: "GiStarGate",
          service:
            "Special activities: a spacewalk, stargazing with a guide, experiments in the space lab, visits to the International Space Station, and an astronomy workshop",
        },
        {
          icon: "FaCertificate",
          service:
            "Souvenir-Set: a personalized certificate for the flight into space and a model of the spacecraft",
        },
        {
          icon: "GiFruitBowl",
          service:
            "Exclusive to this offer: Space Cuisine: a culinary experience in space that includes menus prepared by professional chefs with extraordinary ingredients such as space-grown vegetables and fruits",
        },
      ],
      jpImageName: "",
      jpImagePath: "/journeypurpose/vacation.png",
      jpImageAltText: "",
    },
  ];
</script>

<SectionBg002 paddingBottom="0px" paddingTop="0px">
  <DetailContent
    jpName={data[0].jpName}
    jpPromotext={data[0].jpPromotext}
    jpPrice={data[0].jpPrice}
    jpIncludedServices={data[0].jpIncludedServices}
    jpImageName={data[0].jpImageName}
    jpImagePath={data[0].jpImagePath}
    jpImageAltText={data[0].jpImageAltText}
  />
  <ButtonsDestJpGic />
</SectionBg002>
