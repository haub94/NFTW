import { writable } from "svelte/store";
const EMPTY_STRING: string = "";

let config = writable({
  destination: EMPTY_STRING,
  journeyPurpose: EMPTY_STRING,
  startDate: EMPTY_STRING,
  endDate: EMPTY_STRING,
});

export default config;
