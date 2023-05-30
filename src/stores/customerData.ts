import { writable } from 'svelte/store';
const EMPTY_STRING: string = "";

let personalData = writable({
    firstName: EMPTY_STRING,
    lastName: EMPTY_STRING,
    emailAddress: EMPTY_STRING,
});

export default personalData;