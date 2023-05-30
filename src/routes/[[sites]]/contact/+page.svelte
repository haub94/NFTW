<script lang="ts">
  import Form from "$lib/sectionComponents/Form.svelte";
  import SectionBg002 from "$lib/sectionComponents/SectionBg002.svelte";
  import customerData from "../../../stores/customerData";

  $: $customerData, showData();


  function showData() {
    if($customerData.firstName !== "") {
      console.log("geht");
    }
  }



</script>

<svelte:head>
  <title>Contact</title>
  <meta name="description" content="Contact us" />
</svelte:head>

<SectionBg002>
  <Form />
</SectionBg002>