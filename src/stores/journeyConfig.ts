import { writable } from 'svelte/store';

let config = writable({
    destination: "",
    journeyPurpose: "",
    startDate: "",
    endDate: ""
});

export default config;