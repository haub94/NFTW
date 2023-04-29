<script lang="ts">
    // your script goes here

  import CardDestinations from "$lib/components/CardDestinations.svelte";
  import SectionBg001 from "$lib/sectionComponents/SectionBg001.svelte";
  import SectionBg002 from "$lib/sectionComponents/SectionBg002.svelte";
    
</script>

<div>
    <!-- your html goes here -->
  <SectionBg001
  title1of2="Destinations"
  caption=""> 
  <div class="grid grid-rows-1 grid-flow-col auto-cols-max gap-12 items-center">
    <CardDestinations 
     title="MARS"
     caption="Have you ever been to the red planet?"
     price="375.000 €"
     path="spacetravel/destination/mars">
    </CardDestinations>

    <CardDestinations
    title="MOON"
    caption="Dancing in the moonlight, everybody."
    price="300.000 €"
    path="spacetravel/destination/moon">
    </CardDestinations>

    <CardDestinations
    title="VENUS"
    caption="Are you ready to explore the planet?"
    price="450.000 €"
    path="spacetravel/destination/venus">
    </CardDestinations>
    </div>
  </SectionBg001>
</div>