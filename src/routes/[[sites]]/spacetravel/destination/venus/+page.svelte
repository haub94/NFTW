<script lang="ts">
  import DetailContent from "$lib/sectionComponents/DetailContent.svelte";
  import DividerTextIFrame from "$lib/sectionComponents/DividerTextIFrame.svelte";
  import SectionBg002 from "$lib/sectionComponents/SectionBg002.svelte";
</script>

<SectionBg002>
  <DetailContent
    title="Venus"
    img="/planets/venus.png"
    caption="This is a description about. How wonderful this planet is. And so on ... And so on ... And so on ... And so on ... And so on ... "
  />
  <DividerTextIFrame iFrameHeight={450} />
  <DetailContent
    title="Hotel"
    img="/hotels/grande_centre.png"
    caption="This is a description about. How wonderful this hotel is. And so on ... And so on ... And so on ... And so on ... And so on ... "
  />
</SectionBg002>
