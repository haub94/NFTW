<script lang="ts">
  import Form from "$lib/sectionComponents/Form.svelte";
  import DividerTextImage from "$lib/sectionComponents/DividerTextImage.svelte";
  import SectionBg002 from "$lib/sectionComponents/SectionBg002.svelte";
  import SectionHeader from "$lib/components/SectionHeader.svelte";
  import { selectImageFromDb } from "$lib/functions/selectImageFromDb.ts";

  //journey config memory
  import packageMemory from "../../../stores/journeyConfigMemory.ts";

  //import ts-interfaces
  import type { JourneyPurposeData } from "../../../../prisma/tableInterfaces";
  import type { ImageData } from "../../../../prisma/tableInterfaces";
  import type { PageData } from "./$types";

  export let data: PageData;

  const DIVIDER_CAPTION: string = "Get ready for take off";

  let JOURNEY_PURPOSE: JourneyPurposeData[];
  let IMAGES: ImageData[];
  ({ JOURNEY_PURPOSE } = data); 
  ({ IMAGES } = data); 



  //get the current destination to load the start- /enddate
  for (let index = 0; index < JOURNEY_PURPOSE.length; index++) {
    //iterate to current journey purposes to get current name
    if (JOURNEY_PURPOSE[index].name === $packageMemory.journeyPurpose) {
      //load start-/enddate if it´s set in the db
      if (
        !($packageMemory.journeyPurpose === "birthday special") &&
        !($packageMemory.journeyPurpose === "honeymoon")
      ) {
        $packageMemory.startDate = JOURNEY_PURPOSE[index].startDate;
        $packageMemory.endDate = JOURNEY_PURPOSE[index].endDate;
      }
    }
  }

  //parse the journey purpose to get the index from array (than it will
  //be easer to catch data from JOURNEY_PURPOSE[index])
  function parseJourneyPurpose(wantedIndex: string): number {
    for (let index = 0; index < JOURNEY_PURPOSE.length; index++) {
      if (JOURNEY_PURPOSE[index].name === wantedIndex) {
        return index;
      }
    }
    return 0;
  }

  //start- and enddate for the upcoming trips
  const NEXT_JOURNEY_DATES = {
    VACATION: {
      START_DATE: JOURNEY_PURPOSE[parseJourneyPurpose("vacation")].startDate,
      END_DATE: JOURNEY_PURPOSE[parseJourneyPurpose("vacation")].endDate,
    },
    PHOTOTOUR: {
      START_DATE: JOURNEY_PURPOSE[parseJourneyPurpose("phototour")].startDate,
      END_DATE: JOURNEY_PURPOSE[parseJourneyPurpose("phototour")].endDate,
    },
    RECOMANDATIONS: {
      START_DATE:
        JOURNEY_PURPOSE[parseJourneyPurpose("our recomandations")].startDate,
      END_DATE:
        JOURNEY_PURPOSE[parseJourneyPurpose("our recomandations")].endDate,
    },
  };

</script>

<svelte:head>
  <title>Get in Contact</title>
  <meta
    name="description"
    content="Your final step before an unforgettable journey" />
</svelte:head>

<SectionBg002>
  <SectionHeader 
  title="Get In Contact"
  description="Are you ready to embark on an extraordinary adventure that will defy the limits of your imagination? Look no further! Just get in touch with us!" />
  <DividerTextImage
    title="You are on the finish line"
    caption={DIVIDER_CAPTION}
    image={selectImageFromDb("astronautKid", IMAGES)}
    imgSize="cover"
    imgPosition="center"
    imgHeight="50vh" />
  <Form
    nextVacationStart={NEXT_JOURNEY_DATES.VACATION.START_DATE}
    nextVacationEnd={NEXT_JOURNEY_DATES.VACATION.END_DATE}
    nextPhototourStart={NEXT_JOURNEY_DATES.PHOTOTOUR.START_DATE}
    nextPhototourEnd={NEXT_JOURNEY_DATES.PHOTOTOUR.END_DATE}
    nextRecomandationsStart={NEXT_JOURNEY_DATES.RECOMANDATIONS.START_DATE}
    nextRecomandationsEnd={NEXT_JOURNEY_DATES.RECOMANDATIONS.END_DATE} />
</SectionBg002>
