<script lang="ts">
  import ButtonsDestJpGic from "$lib/components/ButtonsDestJpGic.svelte";
  import DetailContent from "$lib/sectionComponents/DetailContent.svelte";
  import SectionBg002 from "$lib/sectionComponents/SectionBg002.svelte";
  const data = [
    {
      jpName: "Our Recomandations",
      jpPromotext:
        "Training for Space - package: This provides intensive training for individuals, including spaceflight simulations or zero-gravity training.",
      jpPrice: "",
      jpIncludedServices: [
        {
          icon: "GiRocketFlight",
          service: "A flight that adheres to strict safety standards",
        },
        {
          icon: "GiFeather",
          service: "Cozy accommodation in a 4-star space hotel",
        },
        {
          icon: "GiHotMeal",
          service: "Breakfast buffet, lunch buffet, and dinner buffet",
        },
        { icon: "FaUserAstronaut", service: "Training sessions" },
        {
          icon: "FaCertificate",
          service:
            "Souvenir set: a personalized certificate for the flight into space and a model of the spacecraft",
        },
      ],
      jpImageName: "",
      jpImagePath: "/journeypurpose/recommendations.png",
      jpImageAltText: "",
    },
  ];
</script>

<SectionBg002 paddingBottom="0px" paddingTop="0px">
  <DetailContent
    isJPComponent={true}
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
