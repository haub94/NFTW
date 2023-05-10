<script lang="ts">
  import ButtonsDestJpGic from "$lib/components/ButtonsDestJpGic.svelte";
  import DetailContent from "$lib/sectionComponents/DetailContent.svelte";
  import SectionBg002 from "$lib/sectionComponents/SectionBg002.svelte";
  const data = [
    {
      jpName: "Phototour",
      jpPromotext:
        "A special course that offers the best opportunities to take breathtaking space photos.",
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
        {
          icon: "MdCameraEnhance",
          service: "A camera specifically designed for taking photos in space",
        },
        {
          icon: "FaSafari",
          service:
            "Personal guide to help participants find the best photo opportunities and provide tips for space photography",
        },
        {
          icon: "FaCertificate",
          service:
            "Souvenir set: a personalized certificate for the flight into space and a photo album containing the best space photos of the participants",
        },
      ],
      jpImageName: "",
      jpImagePath: "/journeypurpose/spacePhoto.png",
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
