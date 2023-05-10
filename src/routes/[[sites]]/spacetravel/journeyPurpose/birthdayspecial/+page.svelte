<script lang="ts">
  import ButtonsDestJpGic from "$lib/components/ButtonsDestJpGic.svelte";
  import DetailContent from "$lib/sectionComponents/DetailContent.svelte";
  import SectionBg002 from "$lib/sectionComponents/SectionBg002.svelte";
  const data = [
    {
      jpName: "Birthdayspecial",
      jpPromotext: "Celebrate your birthday or family anniversary with us.",
      jpPrice: "",
      jpIncludedServices: [
        {
          icon: "GiRocketFlight",
          service: "A flight that adheres to strict safety standards",
        },
        { icon: "GiFeather", service: "Cozy accommodation in a 4-star space hotel" },
        {
          icon: "GiGlassCelebration",
          service: "Special meals tailored to individual preferences",
        },
        {
          icon: "FaSignature",
          service: "Personalized spacesuits adorned with the name and age",
        },
        { icon: "GiAstronautHelmet", service: "Special activity: a spacewalk" },
        {
          icon: "FaCertificate",
          service:
            "Souvenir set: a personalized certificate for the flight into space, a photo in space, and a model of the spacecraft",
        },
      ],
      jpImageName: "",
      jpImagePath: "/journeypurpose/birthday.png",
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
