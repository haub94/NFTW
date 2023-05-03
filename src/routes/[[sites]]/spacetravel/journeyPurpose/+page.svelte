<script lang="ts">
    // your script goes here

  import CardDestinations from "$lib/components/CardDestinations.svelte";
  import SectionBg001 from "$lib/sectionComponents/SectionBg001.svelte";

  const data = [
    {
      name:"BIRTHDAY SPECIAL",
      promoText:"Make your birthday unforgettable!",
      price:"13.000 €",
      path:"spacetravel/journeyPurpose/birthdayspecial",
      image:"/journeypurpose/birthday.png",
      imgPosition:"left",
      imgSize:"cover",
    },
    {
      name:"HONEYMOON",
      promoText:"Start your new chapter with an adventure.",
      price:"20.000 €",
      path:"spacetravel/journeyPurpose/honeymoon",
      image:"/journeypurpose/honeymoon.png",
      imgPosition:"left",
      imgSize:"cover",
    },
    {
      name:"PHOTOTOUR",
      promoText:"Capture your memories.",
      price:"8.000 €",
      path:"spacetravel/journeyPurpose/phototour",
      image:"/journeypurpose/astronautSelfie.png",
      imgPosition:"left",
      imgSize:"cover",
    },
    {
      name:"VACATION",
      promoText:"Get out of the earth.",
      price:"16.000 €",
      path:"spacetravel/journeyPurpose/vacation",
      image:"/journeypurpose/vacation.png",
      imgPosition:"left",
      imgSize:"cover",
    },
    {
      name:"OUR REMMOMENDATIONS",
      promoText:"What we would recommend ...",
      price:"16.000 €",
      path:"spacetravel/journeyPurpose/ourRecomandations",
      image:"/journeypurpose/recommendations.png",
      imgPosition:"left",
      imgSize:"cover",
    },
  ];
</script>

<SectionBg001
    title1of2="Journey purposes"
    caption="">
   {#each data as data}
     <div class="col-span-1">
     <CardDestinations
     name={data.name}
     promoText={data.promoText}
     price={data.price}
     path={data.path}
     image={data.image}
     imgPosition={data.imgPosition}
     imgSize={data.imgSize}/>
     </div>
    {/each}
</SectionBg001>
  