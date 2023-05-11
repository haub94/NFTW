<script lang="ts">
  import Form from "$lib/sectionComponents/Form.svelte";
  import DividerTextImage from "$lib/sectionComponents/DividerTextImage.svelte";
  import SectionBg002 from "$lib/sectionComponents/SectionBg002.svelte";
  import SectionHeader from "$lib/components/SectionHeader.svelte";
  
  //journey config memory
  import packageMemory from "../../../stores/journeyConfigMemory.ts"; 

  //import ts-interfaces
  import type { JourneyPurposeData } from "../../../../prisma/tableInterfaces";
  import type { PageData } from './$types'

  export let data: PageData;
  const DIVIDER_CAPTION: string = "Get ready for take off";
  let JOURNEY_PURPOSE: JourneyPurposeData[];
  ({ JOURNEY_PURPOSE } = data);  //get data from db

  function test() {
  //get the current destination to load the start- /enddate
  for (let index = 0; index < JOURNEY_PURPOSE.length; index++) {
    //iterate to current journey purposes to get current name
    if ((JOURNEY_PURPOSE[index].name === $packageMemory.journeyPurpose)) {
      console.log('index :>> ', index);
      console.log('JOURNEY_PURPOSE[index].name :>> ', JOURNEY_PURPOSE[index].name);
      //load start-/enddate if it´s set in the db
      if (!($packageMemory.journeyPurpose === "birthday special") && 
          !($packageMemory.journeyPurpose === "honeymoon")) {
            console.log("in if");
            console.log('JOURNEY_PURPOSE[index].startDate; :>> ', JOURNEY_PURPOSE[index].startDate);
            console.log('JOURNEY_PURPOSE[index].endtDate; :>> ', JOURNEY_PURPOSE[index].endDate);
            $packageMemory.startDate = JOURNEY_PURPOSE[index].startDate;
            $packageMemory.endDate = JOURNEY_PURPOSE[index].endDate;
      }
    }
  }
}

</script>

<SectionBg002>
  <button class="text-2xl text-red-500" on:click={test}>fire test</button>
  <SectionHeader title="Get In Contact" />
  <DividerTextImage
    title="You are on the finish line"
    caption={DIVIDER_CAPTION}
    img="/astronauts/astronautKid.png"
    imgSize="cover"
    imgPosition="center"
    imgHeight="50vh"
  />
  <Form />

</SectionBg002>
