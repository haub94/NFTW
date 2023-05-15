<script lang="ts">
  import ButtonsDestJpGic from "$lib/components/ButtonsDestJpGic.svelte";
  import DetailContent from "$lib/sectionComponents/DetailContent.svelte";
  import DividerTextIFrame from "$lib/sectionComponents/DividerTextIFrame.svelte";
  import SectionBg002 from "$lib/sectionComponents/SectionBg002.svelte";

  const data = [
    {
      destName: "Moon",
      destPromoText:
        "This is a description about. How wonderful this planet is. And so on ... And so on ... And so on ... And so on ... And so on ... ",
      destTimeslot: "",
      destPrice: "",
      destDays: "",
      destAvailableUnits: "",
      destImageName: "",
      destImagePath: "/planets/moon-planet.png",
      destImageAltText: "",
      destServices: [
        { icon: "FaCalendarWeek", service: "destTimeslot" },
        { icon: "GiPriceTag", service: "destPrice" },
        { icon: "MdToday", service: "destDays" },
        { icon: "MdEventAvailable", service: "destAvailableUnits" },
      ],
    },
    {
      destHotelName: "Hotel",
      destHotelRanking: "",
      destHotelRoomCapacity: "",
      destHotelRoomClass: "",
      destHotelDescription:
        "This is a description about. How wonderful this hotel is. And so on ... And so on ... And so on ... And so on ... And so on ... ",
      destHotelImageName: "",
      destHotelImagePath: "/hotels/space_hotel_002.png",
      destHotelImageAltText: "",
      destHotelServices: [
        { icon: "MdStarHalf", service: "destHotelRanking" },
        { icon: "GiHouseKeys", service: "destHotelRoomCapacity" },
        { icon: "MdClass", service: "destHotelRoomClass" },
      ],
    },
  ];
</script>

<SectionBg002 paddingBottom="0px" paddingTop="0px">
  <DetailContent
    isDestComponent={true}
    destName={data[0].destName}
    destImagePath={data[0].destImagePath}
    destPromoText={data[0].destPromoText}
    destTimeslot={data[0].destTimeslot}
    destPrice={data[0].destPrice}
    destDays={data[0].destDays}
    destAvailableUnits={data[0].destAvailableUnits}
    destImageName={data[0].destImageName}
    destImageAltText={data[0].destImageAltText}
    destServices={data[0].destServices}
  />
  <DividerTextIFrame iFrameHeight={450} height={750} />
  <DetailContent
    isDestHotelComponent={true}
    destHotelName={data[1].destHotelName}
    destHotelImagePath={data[1].destHotelImagePath}
    destHotelDescription={data[1].destHotelDescription}
    destHotelRanking={data[1].destHotelRanking}
    destHotelRoomCapacity={data[1].destHotelRoomCapacity}
    destHotelRoomClass={data[1].destHotelRoomClass}
    destHotelImageName={data[1].destHotelImageName}
    destHotelImageAltText={data[1].destHotelImageAltText}
    destHotelServices={data[1].destHotelServices}
  />
  <ButtonsDestJpGic />
</SectionBg002>
