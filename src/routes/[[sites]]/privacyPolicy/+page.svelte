<script lang="ts">
  import SectionHeader from "$lib/components/SectionHeader.svelte";
  import SectionBg002 from "$lib/sectionComponents/SectionBg002.svelte";
  import PrivacyPolicyContent from "$lib/sectionComponents/PrivacyPolicyContent.svelte";
</script>

<svelte:head>
  <title>Privacy Policy</title>
  <meta
    name="description"
    content="Information requirements according to the General Data Protection Regulation (DSGVO)" />
</svelte:head>

<SectionBg002>
  <SectionHeader
    title="Privacy Policy"
    description="Information requirements according to the General Data Protection Regulation (DSGVO)" />
  <PrivacyPolicyContent />
</SectionBg002>
