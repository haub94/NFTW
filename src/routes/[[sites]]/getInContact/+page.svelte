<script lang="ts">
  import Form from "$lib/sectionComponents/Form.svelte";
  import DividerTextImage from "$lib/sectionComponents/DividerTextImage.svelte";
  import SectionBg002 from "$lib/sectionComponents/SectionBg002.svelte";
  let dividerCaption: string = "Get ready for take off";
</script>

<div class="pt-60 bg-NFTW-bg" />

<DividerTextImage
  title="You are on the finish line"
  caption={dividerCaption}
  img="/astronauts/astronautKid.png"
  imgSize="cover"
  imgPosition="center"
  imgHeight="50vh"
/>
<SectionBg002>
  <Form />
</SectionBg002>
