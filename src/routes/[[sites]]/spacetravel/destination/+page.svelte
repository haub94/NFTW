<script lang="ts">
    // your script goes here

  import CardDestinations from "$lib/components/CardDestinations.svelte";
  import SectionBg001 from "$lib/sectionComponents/SectionBg001.svelte";


    
</script>

<div>
    <!-- your html goes here -->
  <SectionBg001
  title1of2="Destinations"
  caption=""
  >
    <CardDestinations></CardDestinations>
    <CardDestinations></CardDestinations>
    <CardDestinations></CardDestinations>
  </SectionBg001>
</div>