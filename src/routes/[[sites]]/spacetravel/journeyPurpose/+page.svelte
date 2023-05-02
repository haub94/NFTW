<script lang="ts">
    // your script goes here

  import CardDestinations from "$lib/components/CardDestinations.svelte";
  import SectionBg001 from "$lib/sectionComponents/SectionBg001.svelte";

</script>

<div>
    <SectionBg001
    title1of2="Journey purposes"
    caption="">

    <CardDestinations 
    title="BIRTHDAY SPECIAL"
    caption="Make your birthday unforgettable!"
    price="13.000 €"
    path="spacetravel/journeyPurpose/birthdayspecial"
    img="/journeypurpose/birthday.png"
    imgPosition="left"
    imgSize="cover">
    </CardDestinations>

    <CardDestinations
    title="HONEYMOON"
    caption="Start your new chapter with an adventure."
    price="20.000 €"
    path="spacetravel/journeyPurpose/honeymoon"
    img="/journeypurpose/honeymoon.png"
    imgPosition="left"
    imgSize="cover">
    </CardDestinations>

    <CardDestinations
    title="PHOTOTOUR"
    caption="Capture your memories."
    price="8.000 €"
    path="spacetravel/journeyPurpose/phototour"
    img="/journeypurpose/astronautSelfie.png"
    imgPosition="left"
    imgSize="cover">
    </CardDestinations>

    <CardDestinations
    title="VACATION"
    caption="Get out of the earth."
    price="16.000 €"
    path="spacetravel/journeyPurpose/vacation"
    img="/journeypurpose/vacation.png"
    imgPosition="left"
    imgSize="cover">
    </CardDestinations>

    <CardDestinations 
    title="OUR REMMOMENDATIONS"
    caption="What we would recommend ..."
    price="16.000 €"
    path="spacetravel/journeyPurpose/ourRecomandations"
    img="/journeypurpose/recommendations.png"
    imgPosition="left"
    imgSize="cover">
    </CardDestinations>
    
    </SectionBg001>
</div>