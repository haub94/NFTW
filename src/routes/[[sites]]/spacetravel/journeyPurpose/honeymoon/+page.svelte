<script lang="ts">
  import ButtonsDestJpGic from "$lib/components/ButtonsDestJpGic.svelte";
  import DetailContent from "$lib/sectionComponents/DetailContent.svelte";
  import SectionBg002 from "$lib/sectionComponents/SectionBg002.svelte";
  const data = [
    {
      jpName: "Honeymoon",
      jpPromotext:
        "For wedding couples looking for an unforgettable honeymoon or a special wedding celebration in space.",
      jpPrice: "20.000 EUR",
      jpIncludedServices: [
        {
          icon: "GiRocketFlight",
          service: "A flight that adheres to strict safety standards",
        },
        {
          icon: "MdHotel",
          service:
            "A private cabin where they can spend time alone during the flight",
        },
        {
          icon: "icon",
          service:
            "Special meals tailored to the couple's individual preferences",
        },
        {
          icon: "icon",
          service:
            "Personalized spacesuits embroidered with their names or a romantic phrase",
        },
        {
          icon: "icon",
          service:
            "Special activities: a spacewalk and a romantic dinner with a view of Earth",
        },
        {
          icon: "icon",
          service:
            "Souvenir set: a personalized certificate for the flight into space and a model of the spacecraft",
        },
        {
          icon: "icon",
          service:
            "Exclusive to this offer: a personalized video recording of the trip so that the couple can always remember this special experience",
        },
      ],
      jpImageName: "",
      jpImagePath: "/journeypurpose/honeymoon.png",
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
