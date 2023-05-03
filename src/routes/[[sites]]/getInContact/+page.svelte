<script lang="ts">
  import Form from "$lib/sectionComponents/Form.svelte";
  import DividerTextImage from "$lib/sectionComponents/DividerTextImage.svelte";
  import SectionBg002 from "$lib/sectionComponents/SectionBg002.svelte";
  import SectionHeader from "$lib/components/SectionHeader.svelte";
  let dividerCaption: string = "Get ready for take off";
</script>

<SectionBg002>
  <SectionHeader title="Get In Contact" />
  <DividerTextImage
    title="You are on the finish line"
    caption={dividerCaption}
    img="/astronauts/astronautKid.png"
    imgSize="cover"
    imgPosition="center"
    imgHeight="50vh"
  />
  <Form />
</SectionBg002>
