<script lang="ts">
  import SectionHeader from "$lib/components/SectionHeader.svelte";
  import ImpressumContent from "$lib/sectionComponents/ImprintContent.svelte";
  import SectionBg002 from "$lib/sectionComponents/SectionBg002.svelte";
</script>

<svelte:head>
  <title>Imprint</title>
  <meta name="description" content="Imprint details" />
</svelte:head>

<main class="h-full">
  <SectionBg002>
    <SectionHeader
      title="Imprint"
      description="Information according to §5 TMG"
    />
    <ImpressumContent />
  </SectionBg002>
</main>
