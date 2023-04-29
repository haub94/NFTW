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
    title="Birthday special"
    caption="Make your birthday unforgettable!"
    price="13.000 €"
    path="spacetravel/journeyPurpose/birthdayspecial">
    </CardDestinations>

    <CardDestinations
    title="Honeymoon"
    caption="Start your new chapter with an adventure."
    price="20.000 €"
    path="spacetravel/journeyPurpose/honeymoon">
    </CardDestinations>

    <CardDestinations
    title="Phototour"
    caption="Capture your memories."
    price="8.000 €"
    path="spacetravel/journeyPurpose/phototour">
    </CardDestinations>

    <CardDestinations
    title="Vacation"
    caption="Get out of the earth."
    price="16.000 €"
    path="spacetravel/journeyPurpose/vacation">
    </CardDestinations>

    <CardDestinations 
    title="Our recommendations"
    caption="What we would recommend ..."
    price="16.000 €"
    path="spacetravel/journeyPurpose/ourRecomandations">
    </CardDestinations>
    
    </SectionBg001>
</div>