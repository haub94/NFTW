<script lang="ts">
  import Form from "$lib/sectionComponents/Form.svelte";
  import DividerTextImage from "$lib/sectionComponents/DividerTextImage.svelte";
  import SectionBg002 from "$lib/sectionComponents/SectionBg002.svelte";
  let dividerCaption:string="caption";
</script>

<div class="pt-60 bg-NFTW-bg" />

<SectionBg002>
  <Form />
</SectionBg002>
<SectionBg002>
  <DividerTextImage
    title="Title"
    caption={dividerCaption}
    img="/planets/dark-planet.png"
    imgSize="cover"
    imgPosition="center"
  />
</SectionBg002>
