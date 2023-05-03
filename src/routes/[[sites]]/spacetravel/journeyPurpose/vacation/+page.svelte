<script lang="ts">
  import DetailContent from "$lib/sectionComponents/DetailContent.svelte";
  import SectionBg002 from "$lib/sectionComponents/SectionBg002.svelte";
  const data = [
    {
      jpName: "Vacation",
      jpPromotext:
        "This is a description about. How wonderful this journey is. And so on ... And so on ... And so on ... And so on ... And so on ... ",
      jpPrice: "",
      jpIncludedServices: "",
      jpImageName: "",
      jpImagePath: "/journeypurpose/vacation.png",
      jpImageAltText: "",
    },
  ];
</script>

<SectionBg002>
  <DetailContent
    jpName={data[0].jpName}
    jpPromotext={data[0].jpPromotext}
    jpPrice={data[0].jpPrice}
    jpIncludedServices={data[0].jpIncludedServices}
    jpImageName={data[0].jpImageName}
    jpImagePath={data[0].jpImagePath}
    jpImageAltText={data[0].jpImageAltText}
  />
</SectionBg002>
